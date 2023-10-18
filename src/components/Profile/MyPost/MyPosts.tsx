import React from 'react';
import styles from './MyPosts.module.css'
import {Post} from './Post/Post';
import {MyPostsPropsType} from './MyPostContainer';
import {useFormik} from 'formik';

export const MyPosts: React.FC<MyPostsPropsType> = ({posts, addNewPost}) => {
    const postsElements = posts.map(p => <Post key={p.id} like={p.like} message={p.valuePost}/>)
    const onSubmitHandler = (value: string) => {
      addNewPost(value)
    }
    return (
        <div>
            <div>
                <div className={styles.textareaPost}>
                    <FormMyPost onSubmit={onSubmitHandler}/>
                </div>
                <div className={styles.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
}
type FormMyPostType = {
  onSubmit:(value: string) => void
}
const FormMyPost: React.FC<FormMyPostType> = ({onSubmit}) => {
    const formik = useFormik({
        initialValues: {
            value: ''
        },
        onSubmit(value) {
          onSubmit(value.value)
        },
        validate() {
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <input type={'textarea'} {...formik.getFieldProps('value')} />
            <button type={'submit'}>click</button>
        </form>

    )
}