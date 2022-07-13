import { SET_MOVIE} from '../constants/index';

export function setMovie(payload) {
    return {
        type: SET_MOVIE,
        movie:payload
    }
}
