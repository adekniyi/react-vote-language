import React from 'react';
import './App.css';
import Vote from "./component/vote"
import Title from "./component/Title"



function App() {
    return ( < div className = "App" >
        <
        div className = "container" >
        <
        Title / >
        <
        Vote name = "Php" / >
        <
        Vote name = "Python" / >
        <
        Vote name = "Go" / >
        <
        Vote name = "Java" / >
        <
        /div> < /
        div >
    );
}

export default App;