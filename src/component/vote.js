import React, { useState } from 'react'

function Vote(props) {
    const [count, setcount] = useState(0)


    const increment = () => {
        setcount(count + 1)
    }
    return ( <
        div className = "voteStyle" >
        <
        p > { count } < /p> <
        p > { props.name } < /p> <
        h3 style = {
            { fontSize: "2rem", color: "green", cursor: "pointer" }
        }
        onClick = { increment } >
        click here < /h3> < /
        div >
    )
}

const style = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "400px",
    margin: "0 auto",
    padding: "1px 30px 1px 30px",
    backgroundColor: "#ffebcd",
    marginBottom: "7px"
}

export default Vote