import React, {Component} from 'react';

class SimpleComponent extends Component {

  constructor(props){
        super(props);
        this.state = {
            pname: 'Poonkundran'
        };

  }
render(){
    return (
        <div>
           <h1>The Simple Component</h1>
           <div>{this.props.msg}</div>
           <br/>
         <div>{this.props.data}</div>
         <br/>
         <FirstChildComponent name={this.state.pname}></FirstChildComponent>
        </div>
    );
}

}

class FirstChildComponent extends Component {
    render(){
        return (
            <div>
              <h2>The First Child Component</h2>
              <div>{this.props.name}</div>
            </div>
        );
    }
}

export default SimpleComponent;