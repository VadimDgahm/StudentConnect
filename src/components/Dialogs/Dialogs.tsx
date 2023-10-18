import React, {FC} from 'react';
import styles from "./Dialogs.module.css";
import DialogsItems from "./DialogsItems/DialogsItems";
import Messages from "./Messages/Messages";
import { DialogsPropsType } from "./DialogsContainer";
import {witchRedirectComponent} from '../../hoc/wichRedirectComponent';

const Dialogs: React.FC<DialogsPropsType> = ({dialogs, onClickHandler}) => {
  return (
    <div className={styles.dialogs}>
      <DialogsItems dialogs={dialogs.dialogsItem}/>
      <Messages  onClickHandler={onClickHandler} messages={dialogs.messages}/>
    </div>
  );
}

export default witchRedirectComponent(Dialogs);
