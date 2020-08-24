import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import './CurrentPlant.css';
import Grid from '@material-ui/core/Grid';

class CurrentPlant extends Component {
  state = {
    plantToEdit: {
      user_id: 'this.props.storeInstance.currentPlantReducer.user_id',
      common_name: '',
      scientific_name: '',
      date: '',
      location: '',
      stem: '',
      leaves: '',
      image: 'this.props.storeInstance.currentPlantReducer.image'
    }
  };
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_CURRENT_PLANT',
      payload: this.props.match.params.id
    });
  }

  handleClick = item => {
    this.props.history.push(`/edit/${item.id}`);
  };

  cancelButton = event => {
    this.props.history.push('/home');
  };

  render() {
    let pizza = this.props.storeInstance.currentPlantReducer;
    let plants = this.props.storeInstance.plantReducer;

    return (
      <div className='current-plant'>
        {/* <div className="card"> */}
        <button
          className='current_plant_info'
          onClick={() => this.props.history.push(`/edit/${pizza.id}`)}
        >
          <ul>
            <li>{pizza.common_name}</li>
            <li>also known as {pizza.scientific_name}</li>
            <li>was found on {pizza.date}</li>
            <li>near {pizza.location}</li>
            <br></br>
            <li>The stems were {pizza.stem}</li>
            <li>and the leaves were {pizza.leaves}</li>
            {/* <li>{pizza.image}</li> */}
          </ul>
        </button>
        {/* </div> */}
        {/* <p>{JSON.stringify(this.props.storeInstance.currentPlantReducer)}</p> */}
        <br></br>
        <button
          className='currentCancel'
          onClick={this.cancelButton}
          type='submit'
        >
          Cancel
        </button>
      </div>
    );
  }
}

const mapStateToProps = storeInstance => ({
  storeInstance
});

export default connect(mapStateToProps)(CurrentPlant);
