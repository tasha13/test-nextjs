import Link from 'next/link';
import React from 'react';
import posts from '../posts';

export default () => (
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
    <style jsx>
      {`
            ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
            li {
            display: inline;
        }
        `}
      {' '}

    </style>
  </ul>
);
