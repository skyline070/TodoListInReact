import React from "react"
import img from './todolist.png'
import './App.css'

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      newItem:"",
      list:[]
    }
  }

  updateInput(input){
    this.setState({newItem:input})
    // this.state.newItem = input
  }
  
  addItem(todoValue){
    if(todoValue!=""){
      const newItem = {
        id:Date.now(),
        value:todoValue,
        isDone:false
      }
      const newlist = [...this.state.list] //assure copy
      newlist.push(newItem)
      this.setState({
        list:newlist,
        newItem:''
      })
    }
  }

  deleteItem(id){ //3
    const newlist = [...this.state.list]  // [1,2,3]
    const updatedList = newlist.filter(item =>item.id!=id)
    this.setState({
      list:updatedList,
      newItem:''
    })
  }

render(){
  // console.log("test",this.state.newItem)
  return(
  <div>
      <img src={img} width={100} height={100} className="logo"/>
    <h1 className='app-title '>React Todo App</h1>
    <div className='container'>
      Add an Item...
      <br/>
      <input
      type="text"
      className='input-text'
      placeholder='Enter Your Task'
      value={this.state.newItem}
      onChange={e => this.updateInput(e.target.value)}            //onChange={e => console.log(e.target.value)}
      />
      <button
      className='add-btn'
      onClick={()=>this.addItem(this.state.newItem)}
      >
        Add
        </button>
        <div className='list'>
          <ul>
            {this.state.list.map(item =>{
              return (
                <li>
                   <input type="checkbox" name=' id=' />
                   {item.value}
                   <button className='btn' 
                   onClick={()=>this.deleteItem(item.id)}
                   >Delete </button>
                </li>
              )
            })}
            <li>
              <input type="checkbox" name=' id=' />
              Go to Gym
              <button className='btn'>Delete</button>
            </li>
          </ul>
          </div>
    </div>
    </div>
  )  
}

}

export default App