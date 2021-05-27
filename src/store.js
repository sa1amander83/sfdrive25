import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import rootReducer from './redux/reducers/rootReducer';
import { reducer as reduxFormReducer } from 'redux-form';
const inititalState = {};

const rootReducer = combineReducers({
        form: reduxFormReducer,
        
    });
    
// const reducer = combineReducers({
//   form: reduxFormReducer, // mounted under "form"
// });
// const store = (window.devToolsExtension
//   ? window.devToolsExtension()(createStore)
//   : createStore)(reducer);

// export default store;




const store = createStore(
        rootReducer, 
        inititalState, 
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        // );
        compose(applyMiddleware(thunk), 
                window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()));
                
export default store;