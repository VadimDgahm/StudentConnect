import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {RootState} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    changeCurrentPageAC, changeStatusPreloaderAC,
    followedUserAC,
    setTotalCountAC,
    setUsersAC,
    UserType
} from '../../redux/reducers/usersReducer';
import {witchRedirectComponent} from '../../hoc/wichRedirectComponent';
import {setAuthTC} from '../../redux/reducers/authReducer';

let mapStateToProps = (state: RootState) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isPreloader: state.usersPage.isPreloader
    }
}

export default  witchRedirectComponent(connect(mapStateToProps, {
    setUsers: setUsersAC,
    followed: followedUserAC,
    changeCurrentPage: changeCurrentPageAC,
    setTotalCount: setTotalCountAC,
    changeStatusPreloader: changeStatusPreloaderAC,
})(Users))
