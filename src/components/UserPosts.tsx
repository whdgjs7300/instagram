'use client'
import { ProfileUser } from '@/model/user'
import React from 'react'

type Props = {
    user : ProfileUser;
}

export default function UserPosts({user} : Props) {
    // /api/users/${username}/posts
    // /api/users/${username}/liked
    // /api/users/${username}/bookmarks



    return (
        <div>UserPosts</div>
    )
}
