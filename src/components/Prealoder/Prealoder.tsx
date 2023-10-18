import React, { FC } from 'react';
import styles from './prealoder.module.css';
type Prealoder = {

}
const Prealoder:FC<Prealoder> = (props) => {
    return (

            <div className={styles.loaderInner}>
                <div className={styles.loaderLineWrap}>
                    <div className={styles.loaderLine}></div>
                </div>
                <div className={styles.loaderLineWrap}>
                    <div className={styles.loaderLine}></div>
                </div>
                <div className={styles.loaderLineWrap}>
                    <div className={styles.loaderLine}></div>
                </div>
                <div className={styles.loaderLineWrap}>
                    <div className={styles.loaderLine}></div>
                </div>
                <div className={styles.loaderLineWrap}>
                    <div className={styles.loaderLine}></div>
                </div>
            </div>

    );
}

export default Prealoder;
