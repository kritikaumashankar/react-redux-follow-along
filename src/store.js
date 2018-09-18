import { createStore } from 'redux'
import rootReducer from './reducers/index'
const enhancers = compose()
const store =createStore(rootReducer)

if(module.hot){
  module.hot.accept('./reducers', () =>{
    const nextRootReducer = require('./reducer/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store