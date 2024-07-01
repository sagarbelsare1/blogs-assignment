import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBlogPostById } from '../api';
import SocialMediaShare from '../components/SocialMediaShare';

const BlogPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        const blogPost = await fetchBlogPostById(id);
        setPost(blogPost);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };
    getPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} style={{ width: '100%' }} />
      <p>By <a href={post.authorLinkedIn} target="_blank" rel="noopener noreferrer">{post.author}</a></p>
      <div>{post.content}</div>
      <SocialMediaShare url={window.location.href} />
    </div>
  );
};

export default BlogPostPage;
