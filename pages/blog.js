import React from "react";
import posts from '../posts';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Blog = () => {
    const router = useRouter();
   // router.push('/index');
    return (<div>
        <h1> Blog page</h1>
        <ul>
            {Object.entries(posts).map((post, index) =>
                <li key={index}>
                    <Link href="blog/[id]" as={'blog/' + post[0]}>
                        <a>{post[1].title} </a>
                    </Link>
                </li>)}
        </ul>

    </div>)
};

export default Blog;