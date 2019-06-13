import React from 'react';
import { connect } from 'react-redux';
import { createCar } from '../actions';
import CarForm from '../components/CarForm';


class FormField extends React.Component {
    
    onSubmit = (formValues) => {
        this.props.createCar(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create a Stream</h3>
                <CarForm onSubmit={this.onSubmit} />
            </div>
            
        )
    }
}



export default connect(null, { createCar })(FormField);