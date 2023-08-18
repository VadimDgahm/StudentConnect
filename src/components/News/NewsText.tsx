import React,{useState,ChangeEvent,useMemo} from 'react';
import './News.module.css';
import { NewsReducerStateType, addNewNews } from '../../redux/reducers/newsReducer';
import { ActionTypes } from '../../redux/redux-store';


type NewsPropsType = {
valueInput: string
 onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}
const NewsText: React.FC<NewsPropsType> = ({valueInput,onChangeHandler}) => {
    console.log("NewsText");

    return (
            <input value={valueInput} onChange={onChangeHandler} />
    );
}

export default React.memo(NewsText);
