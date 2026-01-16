import React from 'react';
import PostCard from './PostCard';

function PostList({ posts, onPostClick, loading, error }) {
  if (loading) {
    return (
      <div className="w-full text-center py-12 px-4 text-text-secondary text-base">
        <p>Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full text-center py-12 px-4 text-text-secondary text-base">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="w-full text-center py-12 px-4 text-text-secondary text-base">
        <p>No posts found</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
      {posts.map((post, index) => (
        <PostCard key={index} post={post} onClick={onPostClick} />
      ))}
    </div>
  );
}

export default PostList;
