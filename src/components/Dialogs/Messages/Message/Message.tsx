import React, { FC } from 'react';
import styles from './Message.module.css';
type MessagePropsType = {
message: string
}
const Message:FC<MessagePropsType> = (props) => {
    return (
        <div className={styles.message}>
            {props.message}
        </div>
    );
}

export default Message;
