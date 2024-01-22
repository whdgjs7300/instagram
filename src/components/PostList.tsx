'use client'
import { SimplePost } from '@/model/post';
import React from 'react'
import useSWR from 'swr'
import PostListCard from './PostListCard';
import GridSpinner from './ui/GridSpinner';


export default function PostList() {
    const {data : posts, isLoading : loading,  } = useSWR<SimplePost[]>('/api/posts');
    console.log(posts)
    return (
        <section>
            { loading && <div className='text-center mt-32'>
                <GridSpinner color='red' />
            </div>}
            { posts && (
                <ul >
                {posts && posts.map((post, i) => <li 
                className='mb-4'
                key={post.id}><PostListCard post={post} priority={i < 2} /></li>)}
                </ul>
            )}
        </section>
    )

}
