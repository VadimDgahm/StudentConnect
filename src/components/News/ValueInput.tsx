import React,{ChangeEvent} from 'react';
import './News.module.css';


type NewsPropsType = {
valueInput: string
 onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

const ValueInput: React.FC<NewsPropsType> = ({valueInput,onChangeHandler}) => {
    console.log("ValueInput");
    

    return (
            <input value={valueInput} onChange={onChangeHandler} />
    );
}


export default React.memo(ValueInput);
