import { Component } from "react"
import React from "react";

class ClassComponent extends React.Component{
       render(){
        return(
            <div>
                
                <h1>Frist Name {this.props.firstName}</h1>
               
            </div>
        )
    }
}

export default ClassComponent;

