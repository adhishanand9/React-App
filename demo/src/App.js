import React from 'react';
import './App.css';
class App extends React.Component{
    a=123;
    state={a:"132",b:12};
    handleInput=(e)=>
    {
        const value=e.target.value;
        this.a=value;
        this.setState({a:value,b:'12'});
    };
    render(){
        const{value:a}=this.state;
        return(
            <input value={this.state.a}
                   onChange={this.handleInput}/>
        )

    }
}



export default App;
