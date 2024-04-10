import {  useState } from "react";
import VoteContext from "./VoteContext";

function VoteContextProvider (props){
    const [votelist,updatedvotelist] = useState([])
    const [ votecount,updatevotecount]= useState(0)

    const addvotehandler = (voter)=>{
        updatedvotelist((prevvoters)=>{
            return [...prevvoters,voter]
        })
        updatevotecount((prevcount)=>{
            return prevcount + 1
        })
    }

    const removevotehandler = (id)=>{
        updatedvotelist((prevvoters)=>{
            const filteredvoter = prevvoters.filter(vote=> vote.id !== id) 
            return [...filteredvoter]
        })
        updatevotecount((prevcount)=>{
            return prevcount - 1;
        })
    }

    const votecontext={
        VotersList:votelist,
    TotalVote : votecount ,
    addVote: addvotehandler,
    removeVote : removevotehandler
}

return <VoteContext.Provider value={votecontext}>{props.children}</VoteContext.Provider>
}
export default VoteContextProvider;