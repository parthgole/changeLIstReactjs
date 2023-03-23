import React, { Component } from 'react';
import Button from './Button';

const candidate=["shyam","ram","digvijay"];
const candidate1=["meena","sonam","rahul"];
const candidate2=["veda","veer","varun"];
class Student extends Component {
 constructor(props) {
 super(props);
 this.state = {
 nameStudent: candidate
 };

 this.onClick = this.onClick.bind(this);
//  this.onClick1 = this.onClick1.bind(this);
 }

 onClick() {
   if(this.state.nameStudent === candidate)
   {
 this.setState({nameStudent: candidate1});
   }
   else if(this.state.nameStudent === candidate1)
   {
 this.setState({nameStudent: candidate2});
   }
   else if(this.state.nameStudent === candidate2)
   {
      this.setState({nameStudent: candidate});
   }
 }
 onClick1() {
//  this.setState({nameStudent: candidate2});
 }
 
 render() {
 return (
 <>
    <ul>
    {this.state.nameStudent.map((name)=>
    <li>{name}</li>
    )}
    </ul>
 {/* <button onClick={this.onClick}>update</button> */}

 <Button changeData={this.onClick}/>
 </>
 );
 }
}
export default Student;
