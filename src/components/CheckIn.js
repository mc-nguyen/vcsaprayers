import QRCode from "react-qr-code";
import React, {useEffect, useReducer, useState} from "react";
import { Member } from "../database/Member";
function CheckIn(){
    
    const [boardName, setBoard] = useState("");


    function generator(e){
        setBoard(e.target.value);
        console.log(Member);
        Member.forEach(element => {
            if(element.id === e.target.value)
            {
                console.log(element);
            }
        });
    }
    
    
    return(
        <div>
            <input onChange={generator}></input>
            <div>
                <QRCode value={boardName}/>
            </div>
            
        </div>
        
    );
}

export default CheckIn