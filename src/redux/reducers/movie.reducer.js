import { SET_MOVIE} from '../constants';
const initialState = {
    movie:{},
}
const movieReducer = (state = initialState, action) => {
switch(action.type) {
    case SET_MOVIE:
    return {
        ...state,
        movie:action.movie
    };
    
    default:
    return state;
    }
}
export default movieReducer;