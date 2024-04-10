import { useContext, useRef } from "react";
import Button from "../../UI/Button";
import Model from "../../UI/Model";
import classes from "./CandidateForm.module.css";
import VoteContext from "../../../store/VoteContext";
function CandidateForm(props) {
  const voternameref = useRef();
  const Candidatenameref = useRef()
  const ctx = useContext(VoteContext);

  const voteformsummit = (event)=>{
    event.preventDefault();
    const votedata = {
      id: Math.random(),
      name: voternameref.current.value,
      candidate : Candidatenameref.current.value

    }
    
    ctx.addVote(votedata)
    


  }
  return (
    <Model>
      <div className={classes["form-container"]}>
        <form>
          <label>Enter Your Name </label>
          <input type="text" ref={voternameref}></input>
          <label>Select Candidate</label>
          <select ref={Candidatenameref}>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
          <Button type="submit" onClick={voteformsummit}>Vote</Button>
          <Button type="button" onClick={props.onClick}> close</Button>
        </form>
      </div>
    </Model>
  );
}
export default CandidateForm;
