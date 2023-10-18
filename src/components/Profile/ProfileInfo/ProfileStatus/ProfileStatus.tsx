import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import styles from './profileStatus.module.css';
import {useAppDispatch, useAppSelector} from '../../../../hooks/hooks';
import {updateStatusTC} from '../../../../redux/reducers/profileReducer';
type ProfileStatusPropsType = {
    userId: string

}
const ProfileStatus:FC<ProfileStatusPropsType> = (props) => {
    const status = useAppSelector(state => state.profile.status)
    const myId = useAppSelector(state => state.profile.userId)
    const dispatch = useAppDispatch()
    const [isEditMode, setIsEditMode] = useState<boolean>(false)
    const [valueStatus, setValueStatus] = useState(status)

    useEffect(() => {
        setValueStatus(status)
    }, [status]);
    const onDoubleClickHandler = () => {
        setIsEditMode(true)
    }
    const onBlurHandler = () => {
        setIsEditMode(false)
        dispatch(updateStatusTC(valueStatus))
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>{
        setValueStatus(e.currentTarget.value)
    }
    console.log(`${!!props.userId} ${Number(props.userId) === Number(myId)} `)
    return (
        <div >
            {
                props.userId || Number(props.userId) !== Number(myId)
                    ? isEditMode
                        ? <input onChange={onChangeHandler} autoFocus={true} onBlur={onBlurHandler} value={valueStatus}/>
                        : <div onDoubleClick={onDoubleClickHandler} >{valueStatus}</div>
                    :  <div >{valueStatus}</div>
            }

        </div>
    );
}

export default ProfileStatus;
