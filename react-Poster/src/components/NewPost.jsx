import classes from './NewPost.module.css'
import { useState } from 'react';

const NewPost = ({onCancel,addPostHandler}) => {
   const [enteredBody, setEnterdBody] = useState("");
  const [enteredAuthor, setEnterdAuthor] = useState("");

  function ChangeBodyHandler(event) {
    setEnterdBody(event.target.value);
  }
  function ChangeAuthorHandler(event) {
    setEnterdAuthor(event.target.value);
  }

  function submitHandler(event){
    event.preventDefault()
    const postData={
      body:enteredBody,
      author:enteredAuthor
    }
    // console.log(postData);
    addPostHandler(postData)
    onCancel()
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={ChangeBodyHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required  onChange={ChangeAuthorHandler}/>
        
      </p>
      <p className={classes.actions}> 
        <button type='button' onClick={onCancel}>Cancel</button>

        <button >Submit</button>

      </p>
    </form>
  );
};

export default NewPost;
