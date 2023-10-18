import React, { FC } from 'react';
import styles from './ProfileInfo.module.css';
import {ProfileStateType} from '../../../redux/reducers/profileReducer';
import ProfileStatus from './ProfileStatus/ProfileStatus';
type ProfileInfoPropsType = {
    userProfile: ProfileStateType
    userId: string
}
const ProfileInfo:FC<ProfileInfoPropsType> = ({userProfile, userId}) => {

    return (
      <div className={styles.profileinfo}>
          <h3>{userProfile.fullName}</h3>
        <div className={styles.boximg}>
          <img src={userProfile.photos.large || userProfile.photos.small} />
        </div>
          <ProfileStatus userId={userId}/>
        <div>
            <div>About me: {userProfile.aboutMe} </div>
            <div>
                Контакты:
                <ul>
                    <li>
                        {userProfile.contacts.facebook}
                    </li>
                </ul>
            </div>
        </div>
      </div>
    );
}

export default ProfileInfo;
