import React, { FC } from "react";
import styles from "./Link.module.css";
import { NavLink } from "react-router-dom";
export type LinkPropsType = {
  name: string;
  href: `/${string}`;
};
const Link: FC<LinkPropsType> = (props) => {
  return (
    <div className={styles.nav_link}>
      <NavLink activeClassName={styles.active} to={props.href}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default Link;
