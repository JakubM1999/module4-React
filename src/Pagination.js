import { Color, yellow } from 'chalk';
import React from 'react' 

const container = {
    display:"flex",
    justifyContent: "space-between",
    gap:"10px",
    marginLeft:"250px",
    marginRight:"250px",
    marginTop:"50px"

}

const buttonStyle = {
    borderRadius: "20px",
    border: "none",
    backgroundColor: "#202020",
    color: "Yellow",
    padding: "20px",
    width: "150px",
    fontSize:"15pt",
    cursor:"pointer"

};

export default function Pagination({gotoNextPage, gotoPrevPage}) {
    return (
        <div style={container}>
            {gotoPrevPage && <button style={buttonStyle} onClick={gotoPrevPage}>Previous</button>}
            {gotoNextPage && <button style={buttonStyle} onClick={gotoNextPage}>Next</button>}
        </div>
    )
}
