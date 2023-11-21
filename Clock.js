import React from "react";

class Clock extends React.Component{
    state = {
        time:new Date(),
        start:true
    }
    constructor(){
        super();

    }

    startInterval = ()=>{
        this.interval = setInterval(()=>{
            this.setState({time:new Date()})
        },1000)
    }
    
    componentDidMount(){
        
        if(this.state.start){
            this.startInterval();
        }
        
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.start && !this.state.start){
            clearInterval(this.interval);
        }

        if(!prevState.start && this.state.start){
            this.startInterval();
        }
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }
    
    render(){
        return(
            <>
                <h1>{this.state.time.toLocaleTimeString()}</h1>
                <button onClick={()=>this.setState({start:true})}>Start</button> <br></br>
                <button onClick={()=>this.setState({start:false})}>Stop</button>
            </>
        );
    }
}

export default Clock;