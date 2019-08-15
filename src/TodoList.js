import React,{Component,Fragment} from 'react';
import TodoItem from './TodoItem'

// 定义一个react 组件
class TodoList extends Component {
  constructor(props){
    super(props);
    this.state={
      list:[],
      val:'',
    }
    this.change=this.change.bind(this);
    this.add=this.add.bind(this)
    this.dels=this.dels.bind(this);
  }
  add(){
    this.setState({
      list:[...this.state.list,this.state.val],
      val:''
    })
  };
  change(e){
    this.setState({
      val:e.target.value,
    })
  }
  dels(index){
    const list=[...this.state.list];
    list.splice(index,1)
    this.setState({
        list
      }
    )
  }
  todoItem(){
    return (
      this.state.list.map((item,index)=>{
        return <TodoItem key={index} content={item} handleDel={this.dels}/>
      })
    )
  }
  render(){
    return (
    // jsx语法
    <Fragment>
      <div>
        <input value={this.state.val} onChange={this.change}></input>
        <button className="red-btn" onClick={this.add}>add</button>
      </div>
      <ul>{this.todoItem()}</ul>
    </Fragment>
    )
  };
}

export default TodoList;
