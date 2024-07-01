import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostPreview = styled.div`
  margin: 20px 0;
`;

const BlogPostPreview = ({ post }) => {
  return (
    <PostPreview>
      <h2>{post.title}</h2>
      <img src={post.image} alt={post.title} style={{ width: '100%' }} />
      <p>By {post.author}</p>
      <p>{post.content.substring(0, 100)}...</p>
      <Link to={`/posts/${post.id}`}>Read more</Link>
    </PostPreview>
  );
};

export default BlogPostPreview;
