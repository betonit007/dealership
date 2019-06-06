import React from 'react';
import { connect } from 'react-redux';
import { fetchCars } from '../actions';

class Inventory extends React.Component {
    componentDidMount() {
        this.props.fetchCars();
    }

    renderAdmin(car) {
      if (car.userId === this.props.currentUserId) {
          return <div>Edit/Delete</div>
      }
    }

    renderlist() {
        return (
            this.props.cars.map(car => 
                <div className="item" key={car.id}>
                  <i className="large middle aligned icon car" />
                  <div className="content">
                      {car.firstName}
                      <div className="description">{car.lastName}</div>
                </div>
                {this.renderAdmin(car)}
              </div>
                
            )
        )
    }
    
    render() {
        console.log(this.props.currentUserId);
        return (
            <div className="ui celled list">
              {this.renderlist()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        cars: Object.values(state.cars),
        currentUserId: state.auth.userId
    };
}

export default connect(mapStateToProps, { fetchCars })(Inventory);