import React, { ChangeEvent, FC } from 'react';
import styles from './Messages.module.css';
import Message from './Message/Message';
import { MessagesType, addMessageAC, updateNewMessageTextAC } from '../../../redux/reducers/dialogsReducer';
import { ActionTypes } from '../../../redux/redux-store';
import {useFormik} from 'formik';

type MessagesPropsType = {
  messages: MessagesType[]
  onClickHandler: (value: string) => void
}
const Messages:FC<MessagesPropsType> = ({messages,onClickHandler}) => {
    let messagesElement = messages.map(m =>  <Message key={m.id} message={m.message}/>)
    return (
      <div className={styles.messages}>
        <div>{messagesElement}</div>
        <div>
            <FormMessages onSubmit={onClickHandler}/>
        </div>

      </div>
    );
}
type FormMessagesType = {
    onSubmit: (value:string) => void
}
const FormMessages: React.FC<FormMessagesType> = ({onSubmit}) => {
    const formik = useFormik({
        initialValues:{
            textMessage: '',
        },
        onSubmit(value){
            onSubmit(value.textMessage)
        },
        validate(error){}
    })
    return <form onSubmit={formik.handleSubmit}>
        <textarea {...formik.getFieldProps('textMessage')}></textarea>
        <button type={'submit'}>addMessage</button>
    </form>
}
export default Messages;
