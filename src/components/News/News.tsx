import React, { useState, ChangeEvent } from "react";
import "./News.module.css";
import {
  NewsReducerStateType,
  addNewNews,
} from "../../redux/reducers/newsReducer";
import { RootState } from "../../redux/redux-store";
import ValueInput from "./ValueInput";
import NewsText from "./NewsText";
import { connect } from "react-redux";
import { Dispatch } from "redux";

const News: React.FC<NewsPropsType> = ({ news, onClickHandler }) => {
  const [value, setValue] = useState<string>("");
  const [textNews, setTextNews] = useState<string>("");
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const onChangeNewsText = (e: ChangeEvent<HTMLInputElement>) => {
    setTextNews(e.currentTarget.value);
  };
    const onClick = () => {
        onClickHandler(textNews,value)
    }
  return (
    <ul>
      <ValueInput valueInput={value} onChangeHandler={onChangeHandler} />
      <NewsText valueInput={textNews} onChangeHandler={onChangeNewsText} />
      <button onClick={onClick}>+</button>
      {news.newsArtical.map((el) => (
        <li key={el.id}>
          {" "}
          <h1>{el.title}</h1> <p>{el.body}</p>
        </li>
      ))}
    </ul>
  );
};

type  MapStateToPropsType = {
  news: NewsReducerStateType
}
const mapStateToProps = (state: RootState): MapStateToPropsType => {
  return {
    news: state.news,
  };
};

type MapDispatchToProps = {
  onClickHandler: (textNews: string, value: string) => void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {
    onClickHandler: (textNews: string, value: string) =>
      dispatch(addNewNews(textNews, value)),
  };
};

export type NewsPropsType = MapStateToPropsType & MapDispatchToProps
export const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;
