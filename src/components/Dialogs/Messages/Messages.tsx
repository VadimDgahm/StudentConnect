import React, { ChangeEvent, FC } from 'react';
import styles from './Messages.module.css';
import Message from './Message/Message';
import { MessagesType, addMessageAC, updateNewMessageTextAC } from '../../../redux/reducers/dialogsReducer';
import { ActionTypes } from '../../../redux/redux-store';

type MessagesPropsType = {
  messages: MessagesType[]
  newMessageText: string
  onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onClickHandler: () => void
}
const Messages:FC<MessagesPropsType> = ({messages,newMessageText, onChangeHandler, onClickHandler}) => {
    let messagesElement = messages.map(m =>  <Message key={m.id} message={m.message}/>)
    return (
      <div className={styles.messages}>
        <div>{messagesElement}</div>
        <div>
          <textarea value={newMessageText} onChange={onChangeHandler}></textarea>
          <button onClick={onClickHandler}>addMessage</button>
        </div>

      </div>
    );
}

export default Messages;
