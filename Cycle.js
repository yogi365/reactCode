import React from "react";
class Cycle extends React.Component{
    constructor(){
        super();
        this.state = {
                time:0,
                reset:false
        }
    }

    startInterval = ()=>{        
        this.interval=setInterval(()=>{
            const sec = parseInt(this.state.time)+1
            this.setState({time:sec})
        },1000);
    }


    render(){
        return(
            <>
             <h1>{this.state.time}</h1>
             <button onClick={()=>this.setState({reset:true})}>Reset</button>
            </>
        )
    }

    componentDidMount(){
        if(!this.state.reset){
            this.startInterval();
        }
    }
    
    componentDidUpdate(prevProps,prevState){        
        if(this.state.reset){
            this.setState({
                time:0,
                reset:false
            })
        }

        clearInterval(this.interval);
        this.startInterval();
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
}

export default Cycle;