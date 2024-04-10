import Button from "../../UI/Button";
import Model from "../../UI/Model";
import classes from "./CandidateForm.module.css";
function CandidateForm(props) {
  return (
    <Model>
      <div className={classes["form-container"]}>
        <form>
          <label>Enter Your Name </label>
          <input type="text"></input>
          <label>Select Candidate</label>
          <select>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
          <Button type="submit">Vote</Button>
          <Button type="button" onClick={props.onClick}> close</Button>
        </form>
      </div>
    </Model>
  );
}
export default CandidateForm;
