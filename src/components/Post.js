import React from 'react';
import { Link } from 'react-router-dom';

export default function Post(props) {
  const { post } = props;

  const submitOnClickDescription = (e) => {
    document.getElementById('description').classList.remove('card-description');
    document.getElementById('description').classList.add('postDescription');
  }
  return (
    <div key={post.id} className="card">
      <Link to={`/post/${post.id}`}>
        <div className="userIcon">
      <i className="fa fa-user"></i>{post.userName}
      </div>
      </Link>
      <div className="card-title">
        <Link to={`/post/${post.id}`}>
        {post.postName}
        </Link>
          <div id='description' className="card-description" onClick={submitOnClickDescription}>
            {post.description}
            </div>
          <div className="card-comment">
          <p>Date: {post.createdDate.substring(0, 10)} </p>
          <p>Time: {post.createdDate.substring(11, 19)}</p>
          <span>{post.commentCount} </span>
          <span>{post.commentCount > 0 ? "Comments" : "Comment"}</span>
          </div>
      </div>
    </div>
  );
}
