import cars from '../apis/cars';
import history from '../history';

export const signIn = (userId) => {
    return {
        type: 'SIGN_IN',
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    };
};

export const createCar = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const res = await cars.post('/cars', {...formValues, userId });
     
    dispatch({ type: 'CREATE_CAR', payload: res.data });
    history.push('/inventory');
}

export const fetchCars = () => async dispatch => {
    const res = await cars.get('/cars');

    dispatch({ type: 'FETCH_CARS', payload: res.data });
}

export const fetchCar = (id) => async dispatch => {
    const res = await cars.get(`/cars/${id}`);

    dispatch ({ type: 'FETCH_CAR', payload: res.data });
};

export const editName = (id, formValues) => async dispatch => {
    const res = await cars.patch(`/cars/${id}`, formValues);

    dispatch({ type: 'EDIT_NAME', payload: res.data });
    history.push('/inventory');
}

export const deleteCar = (id) => async dispatch => {
    await cars.delete(`/cars/${id}`);

    dispatch ({ type: 'DELETE_CAR', payload: id});
    history.push('/');
}