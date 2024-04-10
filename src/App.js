
import { useState } from "react";
import Candidates from "./components/Candidate/Candidate";
import Header from "./components/Header/Header";
import CandidateForm from "./components/Candidate/CandidateForm/CandidateForm";

function App() {
  const [showform,setshowform]= useState(false)
  const showvoteform=()=>{
    setshowform(true)
  }
  const hidevoteform = ()=>{
    setshowform(false)
  }
  return (
    <div>
      <Header onClick={showvoteform}/>
      {showform && <CandidateForm onClick={hidevoteform}/>}
      <Candidates/>
    </div>
  );
}

export default App;
