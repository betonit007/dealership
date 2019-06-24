import React from 'react';
import { connect } from 'react-redux';
import { fetchCars } from '../actions';
import { Link } from 'react-router-dom';

class Inventory extends React.Component {
    componentDidMount() {
        this.props.fetchCars();
    }

    renderCreate() {
        if (this.props.isSignedIn) {
          return (
              <div style={{ textAlign: 'right' }}>
                  <Link to="/form" className='ui button primary'>
                      Create Car
                  </Link>
              </div>
          );
        }
    }

    renderAdmin(car) {
      if (car.userId === this.props.currentUserId) {
          return (
              <div className="right floated content">
                  <Link to={`/edit/${car.id}`} className="ui button primary">
                    Edit   
                  </Link>
                  <Link to={`/delete/${car.id}`} className="ui button negative">
                      Delete
                  </Link>
              </div>
          )
      }
    }

    renderlist() {
        return (
            this.props.cars.map(car => 
                <div className="item" key={car.id}>
                    {this.renderAdmin(car)}
                  <i className="large middle aligned icon car" />
                  <div className="content">
                      <Link to={`/cars/${car.id}`} className="header">
                        {car.firstName}
                      </Link>
                      <div className="description">{car.lastName}</div>
                </div>
              </div>
                
            )
        )
    }
    
    render() {
        return (
          <div>
            <h2>Cars</h2>
                <div className="ui celled list">{this.renderlist()}</div>
                {this.renderCreate()}
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        cars: Object.values(state.cars),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn

    };
}

export default connect(mapStateToProps, { fetchCars })(Inventory);