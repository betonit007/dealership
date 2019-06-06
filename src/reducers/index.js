import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import carReducer from './carReducer';

export default combineReducers({ 
    auth: authReducer,
    form: formReducer,
    cars: carReducer
});