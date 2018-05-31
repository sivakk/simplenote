import React, { Component } from 'react';

import './App.css';

class App extends Component {

constructor(props){
  super(props);

  this.state = {
    title:'React Note',
    act:0,
    index:'',
    datas:[]

  };
}


fsubmit=(e)=>
{
  e.preventDefault();
  let datas=this.state.datas;
  let name=this.refs.name.value;
  let adress=this.refs.adress.value;

if(this.state.act===0){
  let data={
    name,adress
  }

  datas.push(data);
}
else{
  let index=this.state.index;
  datas[index].name=name;
  datas[index].adress=adress;
}
  this.setState({
    datas: datas
  });

  this.refs.myform.reset();
  this.refs.name.focus();
}
  fremove=(i)=>{
    let dataaa=this.state.datas;
    dataaa.splice(i,1);
    this.setState({
      dataaa: dataaa
    });
    this.refs.myform.reset();
    this.refs.name.focus();
  }

  fedit=(i)=>{
    let dataaa=this.state.datas[i];
    this.refs.name.value=dataaa.name;
    this.refs.adress.value=dataaa.adress;
    this.setState({
      act:1,
      index:i
    });

    this.refs.name.focus();
  }












  render() {
    let dataa=this.state.datas;
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <form ref="myform" className="myForm">
          <input type="text" ref="name" placeholder="your name" className="formfield"/>
          <input type="text" ref="adress" placeholder="your adress" className="formfield"/>
          <button onClick={this.fsubmit} className="myButton ">Submit</button>
        </form>

        <h1>  {dataa.map((data,i)=>
                <li key={i} className="myList" >
                {i+1} . {data.name}{data.adress}
                <button onClick={()=>this.fremove(i)} className="myButton1">Delete</button>
                <button onClick={()=>this.fedit(i)} className="myButton2">Edit</button>

                </li>


                )}</h1>





      </div>
    );
  }
}

export default App;
