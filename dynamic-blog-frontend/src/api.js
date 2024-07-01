import axios from 'axios';

const API_URL = 'http://localhost:3001'; // Ensure this URL is correct

export const fetchBlogPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/blog-posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
};

export const fetchBlogPostById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/blog-posts/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blog post by id:', error);
    throw error;
  }
};
