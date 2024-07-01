import React, { useEffect, useState } from 'react';
import { fetchBlogPosts } from '../api';
import BlogPostPreview from '../components/BlogPostPreview';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const blogPosts = await fetchBlogPosts();
        setPosts(blogPosts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };
    getPosts();
  }, []);

  return (
    <div>
      {posts.map(post => (
        <BlogPostPreview key={post.id} post={post} />
      ))}
    </div>
  );
};

export default HomePage;
