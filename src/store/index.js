import {applyMiddleware,createStore,compose} from "redux";
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga'
import todoSagas from './sagas'
/*import thunk from 'redux-thunk';*/

//github Redux DevTools Extension库指南
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

        }) : compose;
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

//使用thunk中间件
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware)
  //  applyMiddleware(thunk),
);


const  store = createStore(reducer,enhancer);
// then run the saga
sagaMiddleware.run(todoSagas);

export default  store;