import React from "react";
import Row from "./Row";


function Board(){

    const rows = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]

    return(
        <div className="boardBuscaminas">
            {rows.map((row) => {
                return(
                    <Row 
                        row = {row}
                    />
                )
                
            })}
        </div>        
    )
}

export default Board