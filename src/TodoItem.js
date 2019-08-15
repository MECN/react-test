import React from 'react';
class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.Del=this.Del.bind(this)
      }
      Del(){
        let {handleDel,index}=this.props;
        handleDel(index)
        console.log(1)
    }
    render(){
        return (
            <li onClick={this.Del}>{this.props.content}</li>
        )
    }
}
export default TodoItem;