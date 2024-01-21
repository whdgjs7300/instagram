'use client'
import { SimplePost } from '@/model/post';
import React from 'react'
import { GridLoader } from 'react-spinners';
import useSWR from 'swr'
import PostListCard from './PostListCard';


export default function PostList() {
    const {data : posts, isLoading : loading,  } = useSWR<SimplePost[]>('/api/posts');
    console.log(posts)
    return (
        <section>
            { loading && <div className='text-center mt-32'>
                <GridLoader color='red' />
            </div>}
            { posts && (
                <ul >
                {posts && posts.map(post => <li 
                className='mb-4'
                key={post.id}><PostListCard post={post} /></li>)}
                </ul>
            )}
        </section>
    )

}
