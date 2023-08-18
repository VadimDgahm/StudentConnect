import React, { FC } from 'react';
import styles from './DialogItem.module.css';
import Link from '../../../Navigate/Link/Link';
type DialogItemPropsType = {
    name: string
    id: string
}
const DialogItem: FC<DialogItemPropsType> = (props) => {
    return (
      <div className={styles.dialog}>
        <Link name={props.name} href={`/dialogs/${props.id}`} />
      </div>
    );
}

export default DialogItem;
