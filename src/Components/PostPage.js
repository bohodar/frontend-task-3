import React from 'react'
import { Link } from "react-router-dom";
import Post from './Post'

export const PostPage = ({ location }) => {
  const { postId } = location;
  return (
    <div>
      <h2>Hello! Here's post</h2>
      <Post id={postId}/>
      <Link to="/">Back to home</Link>
    </div>
  )
};
