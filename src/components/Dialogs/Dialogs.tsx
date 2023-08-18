import React from "react";
import styles from "./Dialogs.module.css";
import DialogsItems from "./DialogsItems/DialogsItems";
import Messages from "./Messages/Messages";
import { DialogsPropsType } from "./DialogsContainer";

const Dialogs: React.FC<DialogsPropsType> = ({dialogs, onClickHandler, onChangeHandler}) => {

  return (
    <div className={styles.dialogs}>
      <DialogsItems dialogs={dialogs.dialogsItem}/>
      <Messages onChangeHandler={onChangeHandler} onClickHandler={onClickHandler} newMessageText={dialogs.newMessageText} messages={dialogs.messages}/>
    </div>
  );
}

export default Dialogs;
