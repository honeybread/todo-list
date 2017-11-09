import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
    render(){
        return(
        <div> 
            Hey I'm in my React App component!!!
        </div>);
    }
}


ReactDOM.render(<App/>, document.getElementById("app"));
