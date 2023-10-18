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
}
type MapDispatchToPropsType = {
  addNewPost: (value: string) => void
}
const mapStateToProps = (state: RootState): MapStateToPropsType => {
  return {
    posts: state.profile.posts
  };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    addNewPost: (value: string) => dispatch(addPostAC(value)),
  };
};

export type MyPostsPropsType = MapDispatchToPropsType & MapStateToPropsType
export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
