import React, { FC } from "react";
import styles from "./post.module.css"

type PostPropsType = {
    message: string
    like: number
}
export const Post: FC<PostPropsType> = ( props ) => {
    return (
       <div className={styles.box}>
        <img  src='https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png' />
        <div>{props.message}</div>
        <span>{`${props.like} like`}</span>
       </div> 
    )
}