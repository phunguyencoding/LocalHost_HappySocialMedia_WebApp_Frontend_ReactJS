import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { createPost } from '../actions/postActions/createPostActions';

export default function CreatePostScreen(props) {
    const [postName, setPostName] = useState('');
    const [description, setDescription] = useState('');

    const postCreate = useSelector((state) => state.postCreate);
    const { loading, error } = postCreate;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        e.value = '';
        dispatch(createPost(postName, description));
        document.getElementById('name').value = '';
        document.getElementById('description').value = '';
        setPostName('');
        setDescription('');
        alert("Congrats. You created a post successfully!")
    };
    
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Create a Post</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="postName">Post Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your post name"
            required
            onChange={(e) => setPostName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            rows="10"
            cols="50"
            id="description"
            placeholder="Enter your description"
            required
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Submit
          </button>
        </div>
      </form>
        </div>
    )
}
