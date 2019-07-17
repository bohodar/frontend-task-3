import React from 'react'
import { Link } from "react-router-dom";
import Post from './Post'
import { CurrentPostOuter, CurrentPostInner, BackButton } from "../AppStyles";

export const PostPage = ({ match }) => {
  const id = match.params.postId.replace(/[^-0-9]/gim,'');
  return (
    <CurrentPostOuter>
      <CurrentPostInner>
        <h2>Post #{id}:</h2>
        <Post id={+id}/>
        <BackButton>
          <Link to="/">Back to home</Link>
        </BackButton>
      </CurrentPostInner>
    </CurrentPostOuter>
  )
};
