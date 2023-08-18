import React, { FC } from 'react';
import styles from './ProfileInfo.module.css';
type ProfileInfoPropsType = {

}
const ProfileInfo:FC<ProfileInfoPropsType> = (props) => {
    return (
      <div className={styles.profileinfo}>
        <div className={styles.boximg}>
          <img src="https://cdn.7days.ru/pic/309/949034/1248694/86.jpg" />
        </div>
        <div>ava + description</div>
      </div>
    );
}

export default ProfileInfo;
