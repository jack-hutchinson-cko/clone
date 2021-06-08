import { Post } from '../types/posts';

export const getPosts = async (): Promise<Array<Post>> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return posts;
};

export const getPostById = async (postId: string): Promise<Post> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const posts = await response.json();

  return posts;
};
