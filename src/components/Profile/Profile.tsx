import React from 'react';
import styles from './profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { PostsType } from '../../redux/reducers/profileReducer';
import { ActionTypes, RootStore } from '../../redux/redux-store';
import { MyPostsContainer } from './MyPost/MyPostContainer';


const Profile = () => {

    return (
      <div className={styles.content}>
        <ProfileInfo />
        <MyPostsContainer />
      </div>
    );
};

export default Profile;