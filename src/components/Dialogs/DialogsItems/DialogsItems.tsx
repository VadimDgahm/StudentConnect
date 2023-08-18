import React, { FC } from 'react';
import styles from './DialogsItems.module.css';
import DialogItem from './DialogItem/DialogItem';
import { DialogsItemType } from '../../../redux/reducers/dialogsReducer';


type DialogsItemsPropsType = {
  dialogs:DialogsItemType[]
}


const DialogsItems:FC<DialogsItemsPropsType> = ({dialogs}) => {
  
  let diaologsElements = dialogs.map( (d) => <DialogItem key={d.id} name={d.name} id={d.id} />)
    return (
        <div className={styles.dialogs_item}>
        {diaologsElements}
      </div>
    );
}

export default DialogsItems;
