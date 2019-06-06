import cars from '../apis/cars';

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

}

export const fetchCars = () => async dispatch => {
    const res = await cars.get('/cars');

    dispatch({ type: 'FETCH_CARS', payload: res.data });
}

export const fetchCar = (id) => async dispatch => {
    const res = await cars.get(`/cars/${id}`);

    dispatch ({ type: 'FETCH_STREAM', payload: res.data });
};

export const editName = (id, formValues) => async dispatch => {
    const res = await cars.put(`/cars/${id}`, formValues);

    dispatch({ type: 'EDIT_NAME', payload: res.data });
}

export const deleteName = (id) => async dispatch => {
    await cars.delete(`/streams${id}`);

    dispatch ({ type: 'DELETE_STREAM', payload: id});
}