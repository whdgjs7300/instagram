import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: false, // set to `false` to bypass the edge cache
    apiVersion: '2023-12-29', // use current date (YYYY-MM-DD) to target the latest API version
    // 토큰은 읽기만 하라면 안써도 되는데 데이터를 쓰려면 써야함
    token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})
