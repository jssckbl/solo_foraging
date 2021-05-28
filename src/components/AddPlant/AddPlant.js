import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import SubmitComponent from '../SubmitComponent/SubmitComponent';

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

class AddPlant extends Component {
  state = {
    newPlant: {
      common_name: '',
      scientific_name: '',
      date: '',
      location: '',
      stem: '',
      leaves: '',
      image: ''
    }
  };

  handleChange = (propertyName, event) => {
    console.log('event happened');
    this.setState({
      newPlant: {
        ...this.state.newPlant,
        [propertyName]: event.target.value
      }
    });
  };

  // add setImg to

  setImg = (imgUrl) => {
    this.setState({
      newPlant: {
        ...this.state.newPlant,
        image: imgUrl
      }
    });
    console.log(this.state.newPlant);
  };

  cancelButton = (event) => {
    this.props.history.push('/home');
  };

  addNewPlant = (event) => {
    event.preventDefault();

    if (
      this.state.newPlant.common_name === '' ||
      this.state.newPlant.date === ''
    ) {
      return alert('fill out common name and date fields');
    }

    this.props.dispatch({ type: 'ADD_PLANT', payload: this.state.newPlant });
    this.setState({
      newPlant: {
        common_name: '',
        scientific_name: '',
        date: '',
        location: '',
        stem: '',
        leaves: '',
        image: ''
      }
    });
    this.props.history.push(`/home`);
  };

  render() {
    console.log(this.state.newPlant);

    const { classes } = this.props;

    return (
      <div class='form'>
        <h3 class='add' onClick={this.formData}>
          Add New Plant
        </h3>
        <form onSubmit={this.addNewPlant}>
          All fields with an * are required to complete the new plant.
          <br />
          <br />* Common Name:{' '}
          <input
            id='textbox'
            type='text'
            placeholder='ex. Swamp Milkweed'
            value={this.state.newPlant.common_name}
            onChange={(event) => this.handleChange('common_name', event)}
          ></input>
          <br />
          {/* <TextField>
    Scientific Name: < input id = "textbox"
    label="With placeholder"
    type = "text"


    placeholder = "ex. Asclepias incarnata"

    value = {
        this.state.newPlant.scientific_name
    }
    onChange = {
        (event) => this.handleChange('scientific_name', event)
    } > </input>
</TextField> */}
          Scientific Name:{' '}
          <input
            id='textbox'
            type='text'
            placeholder='ex. science name'
            value={this.state.newPlant.scientific_name}
            onChange={(event) => this.handleChange('scientific_name', event)}
          ></input>
          <br />
          <br />* Date Found:{' '}
          <input
            id='textbox'
            type='text'
            placeholder='ex. 10-19-2019'
            value={this.state.newPlant.date}
            onChange={(event) => this.handleChange('date', event)}
          ></input>
          <br />
          Location:{' '}
          <input
            id='textbox'
            type='text'
            placeholder='ex. 3201 22nd Ave S'
            value={this.state.newPlant.location}
            onChange={(event) => this.handleChange('location', event)}
          ></input>
          <br />
          Stem:{' '}
          <input
            id='textbox'
            type='text'
            placeholder='ex. Branched'
            value={this.state.newPlant.stem}
            onChange={(event) => this.handleChange('stem', event)}
          ></input>
          <br />
          Leaves:{' '}
          <input
            id='textbox'
            type='text'
            placeholder='ex. Opposite arrangement, 4 inches long, narrow'
            value={this.state.newPlant.image1}
            onChange={(event) => this.handleChange('leaves', event)}
          ></input>
          <br />
          Image: <SubmitComponent setPic={this.setImg} />
          <br />
          <br />
          <button type='submit'>Save</button>
          <button onClick={this.cancelButton} type='submit'>
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (storeInstance) => ({
  storeInstance
});

AddPlant.propTypes = {
  classes: PropTypes.object.isRequired
};

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(AddPlant);
