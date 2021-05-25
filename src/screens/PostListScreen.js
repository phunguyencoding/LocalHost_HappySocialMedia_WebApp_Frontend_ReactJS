import React, { useEffect } from 'react';
import Post from '../components/Post';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listPosts } from '../actions/postActions/listPostsActions';
import { Link } from 'react-router-dom';

export default function PostListScreen() {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.postList);
  const { posts, loading, error } = postList;

  useEffect(() => {
    dispatch(listPosts({}));
  }, [dispatch]);
  return (
    <div>      
      <Link to='/create'><button id="createButton">Create A Post</button></Link>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {posts.length === 0 && <MessageBox>No Post Found Yet. Please Create One!</MessageBox>}
          <div className="row center">
            {posts.map((post) => (
              <Post key={post.id} post={post}></Post>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
