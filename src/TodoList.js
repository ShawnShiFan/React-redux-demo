import React ,{Component} from "react";
import store from './store';
import {get_init_list, getInputChangeAction,getAddItemAction,getDeleteItemAction,/*getTodoList*/} from './store/actionCreators'
import TodoListUI from './TodoListUI';



class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        console.log(this.state);
       this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick =this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
       store.subscribe(this.handleStoreChange);
    }
  render(){
      return (
        <TodoListUI
            inputValue={this.state.inputValue}
            list={this.state.list}
            handleInputChange={this.handleInputChange}
            handleBtnClick={this.handleBtnClick}
            handleItemDelete={this.handleItemDelete}
        />
      )
  }

  componentDidMount() {
        const  action =get_init_list();
        store.dispatch(action);
   /*   axios.get('/list.json').then((res)=>{
          const data= res.data;
          const action =initListAction(data);
          store.dispatch(action);
       /!* const action =getTodoList();
       store.dispatch(action);*!/})*/
  }

    handleInputChange(e){
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);

    }
    handleStoreChange(){
        this.setState(store.getState());
    }
    handleBtnClick(){
        const action =getAddItemAction();
        store.dispatch(action);
    }
    handleItemDelete(index){
        const  action =getDeleteItemAction(index);
        store.dispatch(action);
        console.log(index);

    }

}

export  default TodoList;