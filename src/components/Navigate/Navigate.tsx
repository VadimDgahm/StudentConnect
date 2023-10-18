import React from "react";
import styles from "./navigate.module.css";
import { NavLink } from "react-router-dom";
import Link from "./Link/Link";

export const Navigate = () => {
  return (
    <nav className={styles.nav}>
      <Link name={"Profile"} href={"/profile"} />
      <Link name={"Messages"} href={"/dialogs"} />
      <Link name={"News"} href={"/news"} />
      <Link name={"Music"} href={"/music"} />
      <Link name={"Settings"} href={"/settings"} />
      <Link name={"Users"} href={"/users"} />
    </nav>
  );
};
