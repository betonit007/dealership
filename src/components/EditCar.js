import React from 'react';
import { connect } from 'react-redux';
import { fetchCar, editName } from '../actions';
import CarForm from '../components/CarForm';
import _ from 'lodash';

class EditCar extends React.Component {
    componentDidMount() {
        this.props.fetchCar(this.props.match.params.id)

    }

    onSubmit =(formValues) => {
        this.props.editName(this.props.match.params.id, formValues);
    }


    render() {
        if (!this.props.car) {
            return <>Loading...</>
        }
        return (
                <>
                  <h3>
                      Eidt a Stream
                  </h3>
                  <CarForm 
                    initialValues = {_.pick(this.props.car, 'firstName', 'lastName')}
                    onSubmit = {this.onSubmit}
                  />
                </>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    
    return { car: state.cars[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchCar, editName })(EditCar);