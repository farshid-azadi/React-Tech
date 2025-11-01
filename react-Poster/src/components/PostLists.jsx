import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostLists.module.css";
import Modal from "./Modal";

const PostLists = ({ isPosting, onStopPosting }) => {
  const [enteredBody, setEnterdBody] = useState("");
  const [enteredAuthor, setEnterdAuthor] = useState("");

  function ChangeBodyHandler(event) {
    setEnterdBody(event.target.value);
  }
  function ChangeAuthorHandler(event) {
    setEnterdAuthor(event.target.value);
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
          <NewPost
            ChangeBodyHandler={ChangeBodyHandler}
            changeAuthorHandler={ChangeAuthorHandler}
            onCancel={onStopPosting}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post aouthor={enteredAuthor} text={enteredBody} />
        <Post aouthor={enteredAuthor} text={enteredBody} />
        <Post aouthor="farshid" text="check out this video" />
      </ul>
    </>
  );
};

export default PostLists;
