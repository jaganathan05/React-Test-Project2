import React from "react";
import Button from "../UI/Button";
import classes from './Header.module.css';

function Header(props) {
  return (
    <React.Fragment>
      <div className={classes.header}>
        <h2>Class Moniter Vote </h2>
        <p>Total Votes: 0</p>
        <Button type={"button"} onClick={props.onClick}>VOTE</Button>
      </div>
    </React.Fragment>
  );
}

export default Header;
