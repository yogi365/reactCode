import React,{Component} from "react";

class Sum extends Component{
    constructor(){
        super();
        this.state = {
            num1 : 0,
            num2 : 0,
            ans:0
        }
    }

    add = ()=>{
        const num1 = parseInt(this.state.num1);
        const num2 = parseInt(this.state.num2);
        this.setState({ans:(num1+num2)});
    }

    render(){
        return(
            <>
            <input type='number'
                value={this.state.num1}
            onChange={e=>this.setState({num1:e.target.value})}/>

            <input type='number'
                value={this.state.num2}
            onChange={e=>this.setState({num2:e.target.value})}/>

            <button onClick={this.add}>Add</button>    

            <h3>Sum = {this.state.ans}</h3>        

        </>
        )
    }
}

export default Sum;