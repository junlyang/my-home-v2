import { MakeStore, createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
import { createStore } from "redux";

const reducer = (state = {tick : 'init'}, action ) => {
    switch(action.type) {
      case HYDRATE :
        return{...state, ...action.payload}
      case 'TICK' :
        return{...state, tick : action.payload}
      default :
        return state;
    }
};

const configureStore = () => {
    const store = createStore(reducer);
    return store
}

const wrapper =createWrapper(configureStore, {
    debug: process.env.NODE_ENV === ' development'
})

export default wrapper;