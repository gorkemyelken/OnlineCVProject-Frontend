import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

function Candidate(){
    const[error, setError] = useState(null);
    const[isLoaded, setIsLoaded] = useState(false);
    const[candidateList, setCandidateList] = useState([]);

    useEffect(() => {
        fetch("/candidates")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setCandidateList(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error)
            }
        )
    }, []) 
    
    if(error){
        return <div>Error</div>;
    }else if(!isLoaded){
        return <div>Loading...</div>;
    }else{
        return(
            <ul>
                {candidateList.map(candidate =>(
                    <li>
                        {candidate.firstName}
                    </li>
                ))}
            </ul>
        );
    }
}



export default Candidate;