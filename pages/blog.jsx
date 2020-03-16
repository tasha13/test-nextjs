import React from 'react';
import Link from 'next/link';
import posts from '../posts';

const Blog = () => (
  <div>
    <h1> Blog page</h1>
    <ul>
      {Object.entries(posts).map((post) => (
        <li>
          <Link href="blog/[id]" as={`blog/${post[0]}`}>
            <p>
              {post[1].title}
              {' '}
            </p>
          </Link>
        </li>
      ))}
    </ul>

  </div>
);

export default Blog;
