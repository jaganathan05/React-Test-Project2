import React, { useContext } from "react";
import Button from "../UI/Button";
import classes from './Header.module.css';
import VoteContext from "../../store/VoteContext";
function Header(props) {

  const ctx = useContext(VoteContext);
  const votecount = ctx.TotalVote
  return (
    <React.Fragment>
      <div className={classes.header}>
        <h2>Class Moniter Vote </h2>
        <p>Total Votes:{votecount}</p>
        <Button type={"button"} onClick={props.onClick}>VOTE</Button>
      </div>
    </React.Fragment>
  );
}

export default Header;
