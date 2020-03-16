import { useRouter } from 'next/router';
import posts from '../../posts';

export default () => {
  const router = useRouter();
  const post = posts[router.query.id];
  if (!post) return (<p>Post not available </p>);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};
