import React,{/*Component*/} from  'react';
import {Input,Button,List} from "antd";

//无状态组件 只有render函数 性能高一些
const TodoListUI = (props)=>{
        return (
            <div>
                <Input placeholder='todo info' value={props.inputValue}
                       onChange={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleBtnClick} >提交</Button>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item,index)=>(<List.Item onClick={(index)=>{props.handleItemDelete(index)}}>{item}</List.Item>)}
                ></List>
            </div>
        );

}

/*class TodoListUI extends Component{
    render(){
        return (
            <div>
                <Input placeholder='todo info' value={this.props.inputValue}
                       onChange={this.props.handleInputChange}
                />
                <Button type="primary" onClick={this.props.handleBtnClick} >提交</Button>
                <List
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item,index)=>(<List.Item onClick={(index)=>{this.props.handleItemDelete(index)}}>{item}</List.Item>)}
                ></List>
            </div>
        );
    }
}*/

export  default TodoListUI;