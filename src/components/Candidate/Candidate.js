import { useContext } from 'react';
import classes from './Candidate.module.css'
import VoteContext from '../../store/VoteContext';

function Candidates() {
  const ctx = useContext(VoteContext);
  const votelist = ctx.VotersList
  const A =[]
  const B=[]
  const C = []
  votelist.forEach(vote=>{
    if(vote.candidate==='A'){
      A.push(vote)
    }
    if(vote.candidate==='B'){
      B.push(vote)
    }
    if(vote.candidate==='C'){
      C.push(vote)
    }
  })

  const removevote=(id)=>{
    ctx.removeVote(id)
  }
  return (
    <div className={classes['candidates-container']}>
      <div>
        <h2> A</h2>
        <p>Voters: {A.length}</p>
        {A.map((vote)=>{
         return <p key={vote.id}>{vote.name}<button type='button' onClick={removevote.bind(null,vote.id)}>X</button></p>
        })}
      </div>
      <div>
        <h2>B</h2>
        <p>Voters: {B.length}</p>
        {B.map((vote)=>{
           return <p key={vote.id}>{vote.name}<button type='button' onClick={removevote.bind(null,vote.id)}>X</button></p>
        })}
      </div>
      <div>
        <h2>C</h2>
        <p>Voters: {C.length}</p>
        {C.map((vote)=>{
          return <p key={vote.id}>{vote.name}<button type='button' onClick={removevote.bind(null,vote.id)}>X</button></p>
        })}
      </div>
    </div>
  );
}
export default Candidates;
