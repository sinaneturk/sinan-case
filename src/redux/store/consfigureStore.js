import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/user.reducer';
import movieReducer from '../reducers/movie.reducer';

const rootReducer = combineReducers(
    { 
        userReducer,
        movieReducer

    }
);
const configureStore = () => {
return createStore(rootReducer);
}
export default configureStore;