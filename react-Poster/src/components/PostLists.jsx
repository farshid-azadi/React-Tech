import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostLists.module.css";
import Modal from "./Modal";

const PostLists = ({ isPosting, onStopPosting }) => {
  const [post, setPost] = useState([]);
  function addPostHandler(PostData) {
    setPost((existingPost) => [PostData, ...existingPost]);
  }
  // let modalContent;
  // if (modalIsVisible) {
  //   modalContent = (
  //     <Modal onClose={hideModalHandler}>
  //       <NewPost
  //         ChangeBodyHandler={ChangeBodyHandler}
  //         changeAuthorHandler={ChangeAuthorHandler}
  //       />
  //     </Modal>
  //   );
  // }
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} addPostHandler={addPostHandler} />
        </Modal>
      )}
      <ul className={classes.posts}>
        {post.map((post,postId)=><Post key={postId} author={post.author} text={post.body}/>)}
      </ul>
    </>
  );
};

export default PostLists;
