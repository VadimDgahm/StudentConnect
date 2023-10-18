import {ChangeEvent} from 'react';
import {DialogsStateType, addMessageAC, updateNewMessageTextAC} from '../../redux/reducers/dialogsReducer';
import {RootState} from '../../redux/redux-store';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {witchRedirectComponent} from '../../hoc/wichRedirectComponent';

type MapStateToPropsType = {
    dialogs: DialogsStateType
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        dialogs: state.dialogs,
    };
};
type MapDispatchToPropsType = {
    onClickHandler: (value: string) => void,
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onClickHandler: (value: string) => dispatch(addMessageAC(value)),
    };
};

export type DialogsPropsType = MapDispatchToPropsType & MapStateToPropsType
export const DialogsContainer = witchRedirectComponent(connect(
    mapStateToProps,
    mapDispatchToProps
)(Dialogs));
