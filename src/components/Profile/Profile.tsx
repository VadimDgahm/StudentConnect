import React, {FC, useEffect} from 'react';
import styles from './profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {
    getUserTC,
    ProfileResponseType,
    ProfileStateType,
    setUserProfileAC,
} from '../../redux/reducers/profileReducer';
import { RootState} from '../../redux/redux-store';
import {MyPostsContainer} from './MyPost/MyPostContainer';
import axios from 'axios';
import Prealoder from '../Prealoder/Prealoder';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {profileApi} from '../../api/profileApi';
import {useAppDispatch} from '../../hooks/hooks';
import {witchRedirectComponent} from '../../hoc/wichRedirectComponent';

type ProfileTypeProps = mdtpType & mstpType
type PropsTypeProfile = RouteComponentProps<PathParamsType> & ProfileTypeProps

const Profile: FC<PropsTypeProfile> = ({match, idUser,userProfile,...props}) => {
    const dispatch = useAppDispatch()
    useEffect(() => {
       match.params.userId ? dispatch(getUserTC(Number(match.params.userId))): idUser && dispatch(getUserTC(Number(idUser)))
    }, [match.params.userId]);
    return (
        <div className={styles.content}>
            {
                props.isLoader
                    ? <Prealoder/>
                    : <>
                        <ProfileInfo userProfile={userProfile} userId={match.params.userId}/>
                        <MyPostsContainer />
                    </>
            }

        </div>
    );
};
type PathParamsType = {
    userId: string
}

type mstpType = {
    userProfile: ProfileStateType
    idUser: number | null
    isLoader: boolean
}
const mstp = (state: RootState): mstpType  => {
    return {
        userProfile: state.profile,
        idUser: state.auth.id,
        isLoader: state.profile.isLoader
    }
}
type mdtpType = {
    setUserProfile: (userProfile:  ProfileResponseType) => void
}
const mdtp = (dispatch: Dispatch):mdtpType => {
    return {
        setUserProfile: (userProfile: ProfileResponseType) => dispatch(setUserProfileAC(userProfile))
    }
}

export default witchRedirectComponent(connect(mstp, mdtp)(withRouter(Profile)))
