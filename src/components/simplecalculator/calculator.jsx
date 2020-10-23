import React, { Component } from 'react';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            num1:0,
            num2:0,
            num3:0,
            display:0,
            Operation : "+"
        }
    }
    // evt is event that is occured on HTML element
    // num1Change=(evt)=> {
    //     this.setState({num1: evt.target.value});
    // }
    // num2Change(evt) {
    //     this.setState({num2: evt.target.value});
    // }

    

    num0Change(evt) {

        this.state.num1 += "0";       
        this.setState({display:this.state.num1});
    }

    num1Change(evt) {

        this.state.num1 += "1";
        this.setState({display:this.state.num1});
    }

    num2Change(evt) {

        this.state.num1 += "2";
        this.setState({display:this.state.num1});
    }

    num3Change(evt) {

        this.state.num1 += "3";
        this.setState({display:this.state.num1});
    }

    num4Change(evt) {

        this.state.num1 += "4";
        this.setState({display:this.state.num1});
    }

    num5Change(evt) {

        this.state.num1 += "5";
        this.setState({display:this.state.num1});
    }

    num6Change(evt) {

        this.state.num1 += "6";
        this.setState({display:this.state.num1});
    }

    num7Change(evt) {

        this.state.num1 += "7";
        this.setState({display:this.state.num1});
    }

    num8Change(evt) {

        this.state.num1 += "8";
        this.setState({display:this.state.num1});
    }

    num9Change(evt) {

        this.state.num1 += "9";
        this.setState({display:this.state.num1});
    }

    clear(evt) {

        this.setState({display:0});
    }

    // ES 6 function expression
    add=()=> {
        this.state.num2 = this.state.display;
        this.state.num1 = 0;
        this.state.Operation = "+";
        this.setState({display:0});        
    }
    subst=()=> {
        this.state.num2 = this.state.display;
        this.state.num1 = 0;
        this.state.Operation = "-";
        this.setState({display:0});        
    }
    divide=()=> {
        this.state.num2 = this.state.display;
        this.state.num1 = 0;
        this.state.Operation = "/";
        this.setState({display:0});        
    }
    multiply=()=> {
        this.state.num2 = this.state.display;
        this.state.num1 = 0;
        this.state.Operation = "*";
        this.setState({display:0});        
    }

    result=()=>{
        this.state.num3 = this.state.display;
        this.state.num1 = 0;
        if (this.state.Operation == "+")
        {       
            let result = parseInt(this.state.num2) + parseInt(this.state.num3);
            this.setState({display:result});
        }
        if (this.state.Operation == "-")
        {            
            let result = parseInt(this.state.num2) - parseInt(this.state.num3);
            this.setState({display:result});
        }
        if (this.state.Operation == "*")
        {            
            let result = parseInt(this.state.num2) * parseInt(this.state.num3);
            this.setState({display:result});
        }
        if (this.state.Operation == "/")
        {            
            let result = parseInt(this.state.num2) / parseInt(this.state.num3);
            this.setState({display:result});
        }
    }
    render() { 
        return (
            <div className="container">
              <h2>Calculator</h2>
              <div className="form-group">
                {/* <label htmlFor="">Display</label> */}
                <input type="text" className="form-control"                  
                  name ="display" value={this.state.display}                   
                />
              </div> &nbsp;
              <div className="form-group">                
                <input type="button" value="0" className="btn btn-success" 
                  onClick={this.num0Change.bind(this)}/>   &nbsp;             
                <input type="button" value="1" className="btn btn-success"
                  onClick={this.num1Change.bind(this)}/>  &nbsp; 
                <input type="button" value="2" className="btn btn-success"
                  onClick={this.num2Change.bind(this)}/>  &nbsp; 
                <input type="button" value="3" className="btn btn-success"
                  onClick={this.num3Change.bind(this)}/>   
              </div>

              <div className="form-group">                
                <input type="button" value="4" className="btn btn-success"
                  onClick={this.num4Change.bind(this)}/>  &nbsp;              
                <input type="button" value="5" className="btn btn-success"
                  onClick={this.num5Change.bind(this)}/>  &nbsp; 
                <input type="button" value="6" className="btn btn-success"
                  onClick={this.num6Change.bind(this)}/>  &nbsp; 
                <input type="button" value="7" className="btn btn-success"
                  onClick={this.num7Change.bind(this)}/>   
              </div>

              <div className="form-group">                
                <input type="button" value="8" className="btn btn-success"
                  onClick={this.num8Change.bind(this)}/>  &nbsp;              
                <input type="button" value="9" className="btn btn-success"
                  onClick={this.num9Change.bind(this)}/>  &nbsp;
                <input type="button" value="Clear" className="btn btn-success"
                  onClick={this.clear.bind(this)}/> 
              </div>
           
              <div className="form-group">
                <input type="button" value="+" className="btn btn-danger"
                  onClick={this.add.bind(this)}/>   &nbsp;
                <input type="button" value="-" className="btn btn-danger"
                onClick={this.subst.bind(this)}/>   &nbsp;
                <input type="button" value="*" className="btn btn-danger"
                onClick={this.multiply.bind(this)}/>   &nbsp;
                <input type="button" value="/" className="btn btn-danger"
                onClick={this.divide.bind(this)}/>   &nbsp;
                <input type="button" value="=" className="btn btn-danger"
                onClick={this.result.bind(this)}/>
              </div>
            </div>
        );
    }
}
 
export default Calculator;