import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsPost } from '../actions/postActions/detailsPostActions';
import { createComment } from '../actions/postActions/createCommentActions';
import { POST_COMMENT_CREATE_RESET } from '../constants/postConstants';

import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Post from '../components/Post';

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const postId = props.match.params.id;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const postDetails = useSelector((state) => state.postDetails);
  const { loading, error, comments } = postDetails;

  const commentCreate = useSelector((state) => state.commentCreate);
  const {
    success: successCommentCreate,
    loading: loadingCommentCreate,
    error: errorCommentCreate,
  } = commentCreate;

  const postList = useSelector((state) => state.postList);
  const { posts } = postList;

  const [comment, setComment] = useState('');
  useEffect(() => {
    if (successCommentCreate) {
        setComment('');
        dispatch({ type: POST_COMMENT_CREATE_RESET });
        alert('Comment Is Created Successfully!');
    }
    dispatch(detailsPost(postId));
  }, [dispatch, postId, successCommentCreate]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (comment) {
      dispatch(
        createComment(postId, comment)
      );
    } else {
      alert('Please enter your comment!');
    }
  };
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/posts">Back to Posts</Link>
          <div className="comment-card">
            {comments.length === 0 && (
              (
              <div>
                <Post post={posts[postId - 1]}></Post>
              <MessageBox>There is no comment</MessageBox>
              </div>
              )
            )}
            {comments.length !== 0 && (
                <div>
                    <div className="postName">
                      <h1>Topic: {comments[0].postName}</h1>
                    </div>
                    <p className="postDescription">
                    {comments[0].description}
                    </p>
                    <h2>Comments</h2>
                <ul>
              {comments.map((comments) => (
                <li key={comments.id}>
                  <div className="comment-card">
                    <div className="userIcon">
                    <i className="fa fa-user"></i>{comments.userName}
                    </div>
                    <div className="comment-title">
                      {comments.text}
                      <div className="comment-date">
                        <p>Date: {comments.createdDate.substring(0, 10)} </p>
                        <p>Time: {comments.createdDate.substring(11, 19)}</p>
                    </div>
                    </div>
                  </div>
                </li>
              ))}
                </ul>
                </div>        
            )}
            <li>
                {userInfo ? (
                  <form className="form" onSubmit={submitHandler}>
                    <div>
                      <h2>Write a comment for the Post</h2>
                    </div>
                    <div>
                      <label htmlFor="comment">Comment</label>
                      <textarea
                        id="comment"
                        placeholder="Write your Comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></textarea>
                    </div>
                    <div>
                      <label />
                      <button className="primary" type="submit">
                        Submit
                      </button>
                    </div>
                    <div>
                      {loadingCommentCreate && <LoadingBox></LoadingBox>}
                      {errorCommentCreate && (
                        <MessageBox variant="danger">
                          {errorCommentCreate}
                        </MessageBox>
                      )}
                    </div>
                  </form>
                ) : (
                  <MessageBox>
                    Please <Link to="/login">Sign In</Link> to write your comment
                  </MessageBox>
                )}
              </li>
             
          </div>
        </div>
      )}
    </div>
  );
}
