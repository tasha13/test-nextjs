import { useRouter } from 'next/router'
import posts from '../../posts.js'
export default () => {
    const router = useRouter();
    const post = posts[router.query.id];
    if (!post) return (<p>Post not available </p>);
    else
        return (
            <div>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </div>
        );
}