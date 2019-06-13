import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_CARS':
            return {...state, ..._.mapKeys(action.payload, 'id') };
        case 'FETCH_CAR':
            console.log(state, action);
            return { ...state, [action.payload.id]: action.payload };
        case 'CREATE_CAR':
            return { ...state, [action.payload.id]: action.payload };
        case 'EDIT_CAR':
            return { ...state, [action.payload.id]: action.payload };
        case 'DELETE_STREAM':
            return _.omit(state, action.payload);
        default:
            return state;
    }
}