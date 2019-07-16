import React from 'react'
import { Link } from "react-router-dom";
import Post from './Post'

export const PostPage = ({ match }) => {
  const id = match.params.postId.replace(/[^-0-9]/gim,'');
  return (
    <div>
      <h2>Hello! Here's post</h2>
      <Post id={+id}/>
      <Link to="/">Back to home</Link>
    </div>
  )
};
