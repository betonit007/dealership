import React from 'react';
import { connect } from 'react-redux';
import Modal from '../components/modal';
import history from '../history';
import { fetchCar, deleteCar } from '../actions';
import { Link } from 'react-router-dom';

class CarDelete extends React.Component {

    componentDidMount() {
        this.props.fetchCar(this.props.match.params.id);
    }
    
    renderActions() {
        return (
            <>
                <button onClick={()=> this.props.deleteCar(this.props.match.params.id)} className='ui button negative'>Delete</button>
                <Link to='/' className='ui button'>Cancel</Link>
            </>
        )
    }

    renderContent() {
        console.log(this.props);
        if (!this.props.stream) {
            return 'Are you sure you want to delete this car?'
        }
        return `Are you sure you want to delete this car: ${this.props.stream.firstName} ${this.props.stream.lastName}`
    }

    render() {

        return(
            <div>
                Car Delete
                <Modal 
                title='Delete Stream'
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
                />
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    
  return { stream: state.cars[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchCar, deleteCar } )(CarDelete);
