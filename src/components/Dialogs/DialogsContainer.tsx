import { ChangeEvent } from "react";
import { DialogsStateType, addMessageAC, updateNewMessageTextAC } from "../../redux/reducers/dialogsReducer";
import {RootState} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { Dispatch } from "redux";

type MapStateToPropsType = {
  dialogs: DialogsStateType
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
  return {
    dialogs: state.dialogs,
  };
};
type MapDispatchToPropsType = {
  onClickHandler: () => void,
  onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
  return {
    onClickHandler: () => dispatch(addMessageAC()),
    onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) =>
      dispatch(updateNewMessageTextAC(e.currentTarget.value)),
  };
};

export type DialogsPropsType = MapDispatchToPropsType & MapStateToPropsType
export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);
