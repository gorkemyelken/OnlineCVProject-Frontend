import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

function Admin(){
    const[error, setError] = useState(null);
    const[isLoaded, setIsLoaded] = useState(false);
    const[adminList, setAdminList] = useState([]);

    useEffect(() => {
        fetch("/admins")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setAdminList(result);
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
                {adminList.map(admin =>(
                    <li>
                        {admin.userName}
                    </li>
                ))}
            </ul>
        );
    }
}



export default Admin;