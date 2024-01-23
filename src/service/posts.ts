import { SimplePost } from "@/model/post";
import { client, urlFor } from "./sanity";


const simplePostProjection = `
    ...,
    "username" : author->username,
    "userImage" : author->image,
    "image" : photo,
    "likes" : likes[]->username,
    "text" : comments[0].comment,
    "comments" : count(comments),
    "id" : _id,
    "createdAt" : _createdAt
`;

export async function getFollowingPostsOf(username : string) {
    return client.fetch(
    // 포스트의 작성자가 받은 유저네임과 로그인 한 유저가 같거나
    // 포스트를 작성한 사람의 id가 로그인한 사용자가 팔로잉하고있는 유저의 id와 같다면 그 유저의 포스트도 가져옴
        `*[_type == "post" && author->username == "${username}" 
            || author._ref in *[_type == "user" && username == "${username}"].following[]._ref]
            | order(_createdAt desc){${simplePostProjection}}`
    ).then(post => post.map((post : SimplePost) => ({...post, image : urlFor(post.image)})))
}

export async function getPost(id : string) {
    return client.fetch(
        `*[_type == "post" && _id == "${id}"][0]{
            ...,
            "username" : author->username,
            "userImage" : author->image,
            "image" : photo,
            "likes" : likes[]->username,
            comments[]{comment, "username" : author->username, "image" : author->image},
            "id" : _id,
            "createAt" : _createdAt
        }
        `
    ).then(post => ({...post, image: urlFor(post.image)}));
}