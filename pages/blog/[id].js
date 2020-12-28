import { useRouter } from 'next/router'
import posts from '../../posts.json'

export default () => {
    const router = useRouter()
    const post = posts[router.query.id]

    if (!post) return <p>No Posts!</p>
    return (
        // <>
        //     <h1>Blog Post</h1>
        //     <p>Post Id: {router.query.id}</p>
        // </>
        <>
            <h1>blog title: {post.title}</h1>
            <p>blog content: {post.content}</p>
        </>
    )
}