import { ChangeEvent } from "react";
import {
  PostsType,
  addPostAC,
  updateNewPostTextAC,
} from "../../../redux/reducers/profileReducer";
import { RootState } from "../../../redux/redux-store";
import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";
import { Dispatch } from "redux";

type MapStateToPropsType = {
  posts: PostsType[],
  newPostText: string,
}
type MapDispatchToPropsType = {
  addNewPost: () => void
  onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
}
const mapStateToProps = (state: RootState): MapStateToPropsType => {
  return {
    posts: state.profile.posts,
    newPostText: state.profile.newPostText,
  };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    addNewPost: () => dispatch(addPostAC()),
    onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) =>
      dispatch(updateNewPostTextAC(e.currentTarget.value)),
  };
};

export type MyPostsPropsType = MapDispatchToPropsType & MapStateToPropsType
export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
