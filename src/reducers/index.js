import couterReducers from './counter';
import isLoggedReducers from './isLogged';
import {combineReducers} from 'redux';


const allReducers= combineReducers({
    counter : couterReducers,
    isLogged: isLoggedReducers
});

export default allReducers;