import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {GET_INIT_LIST} from "./actionTypes";
import axios from 'axios';
import {init_list_action} from './actionCreators'

//异步的方法可以写在这里
function* genInitList() {
    try {
        const res =yield axios.get('/list.json');
        const action =init_list_action(res.data);
        yield put(action);

    } catch (e) {
        console.log("网络资源请求失败")

    }


}

//必须使用es6语法中的generator函数
function* todoSagas() {
    yield takeEvery(GET_INIT_LIST, genInitList);
}

export default todoSagas;