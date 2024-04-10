import React from "react";
const  VoteContext = React.createContext({
VotersList:[],
TotalVote : 0 ,
addVote: (voter)=>{},
removeVote : (id)=>{

}

})
export default VoteContext;