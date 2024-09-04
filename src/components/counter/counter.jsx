import { Component } from "react";

class Counter extends Component{
    state={
        count:0
    }
    IncrementHandler=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    DecrementHandler=()=>{
        this.setState({
            count:this.state.count-1
        })
    }

    ResetHandler=()=>{
        this.setState({
            count:0
        })
    }
  
    render(){
        return(
            <>
            <h2>Counter {this.state.count}</h2>
            <button onClick={ this.IncrementHandler }>Increment</button>
            <button onClick={ this.DecrementHandler }>Decrement </button>
            <button onClick={ this.ResetHandler }>Reset </button>
            </>
        )
    }
}
export default Counter