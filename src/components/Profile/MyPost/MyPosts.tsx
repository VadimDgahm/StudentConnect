import React from "react";
import styles from "./MyPosts.module.css"
import { Post } from "./Post/Post";
import { MyPostsPropsType } from "./MyPostContainer";

export const MyPosts: React.FC<MyPostsPropsType> = ({posts,onChangeHandler,addNewPost, newPostText}) => {
  const postsElements = posts.map( p => <Post key={p.id} like={p.like} message={p.valuePost} /> )

    return (
      <div>
        <div>
          <div className={styles.textareaPost}>
            <textarea value={newPostText} onChange={onChangeHandler}/>
            <button onClick={addNewPost}>click</button>
          </div>
          <div className={styles.posts}>
            {postsElements}
          </div>
        </div>
      </div>
    );
}