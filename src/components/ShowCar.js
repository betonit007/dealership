import React from 'react';
import { connect } from 'react-redux';
import { fetchCar } from '../actions';

class ShowCar extends React.Component {
    componentDidMount() {
        this.props.fetchCar(this.props.match.params.id);
        console.log(`This is the car ${this.props.car}`);
    }

    render() {
        console.log(this.props);

        if (!this.props.car) {
            return <div>Loading....</div>
        }

        else {
            return (
                <div>
                    <h1>{this.props.car.firstName}</h1>
                    <h2>{this.props.car.lastName}</h2>
                </div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return { car: state.cars[ownProps.match.params.id] };
}


export default connect(mapStateToProps, {fetchCar})(ShowCar);