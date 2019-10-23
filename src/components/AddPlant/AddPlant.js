import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';


const theme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: green,
    },
    status: {
        danger: 'orange',
    },
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
    }

    handleChange = (propertyName, event) => {
        console.log('event happened')
        this.setState({
            newPlant: {
                ...this.state.newPlant,
                [propertyName]: event.target.value,
            }
        });
    }

    addNewPlant = event => {
        event.preventDefault();

        // if statement to prevent onClick from happening without required
        // information in specific fields 
        // common_name and date
        
        if ( this.state.newPlant.common_name === '' || 
        this.state.newPlant.date === '') {
            return alert ('fill out common name and date fields')
        };

        // let images = []
        // images.push(this.state.newPlant.image);
        
        // , this.state.newPlant.image2, this.state.newPlant.image3);
        // let objectToSend = {
        //     ...this.state.newPlant, images
        // }

        this.props.dispatch({ type: 'ADD_PLANT', payload: this.state.newPlant })
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
        // this.props.dispatch({ type: 'FETCH_PLANTS' });
    }

    // formData = () => {
    //     this.setState({
    //         newPlant: {
    //             common_name: 'milkweed',
    //             scientific_name: 'milkweedio',
    //             date: '10/10/2019',
    //             location: '22nd and 32nd',
    //             stem: 'round',
    //             leaves: 'pointed',
    //             image: ''
    //         }
    //     })
    // }

    render() {
        console.log(this.state.newPlant)
        return (
            <div class="form">

                <h3 class="add" onClick={this.formData}>
                    Add New Plant
                </h3>
                <form onSubmit={this.addNewPlant}>
                    All fields with an * are required to complete the new plant.
                     <br />
                    <br />

                    * Common Name: <input id="textbox" type="text" placeholder="ex. Swamp Milkweed"
                        value={this.state.newPlant.common_name}
                        onChange={(event) => this.handleChange('common_name', event)}></input>
                    <br />

                    Scientific Name: <input id="textbox" type="text" placeholder="ex. Asclepias incarnata"
                        value={this.state.newPlant.scientific_name}
                        onChange={(event) => this.handleChange('scientific_name', event)}></input>
                    <br />

                    Date Found: <input id="textbox" type="text" placeholder="ex. 10-19-2019"
                        value={this.state.newPlant.date}
                        onChange={(event) => this.handleChange('date', event)}></input>
                    <br />

                    Location: <input id="textbox" type="text" placeholder="ex. 3201 22nd Ave S"
                        value={this.state.newPlant.location}
                        onChange={(event) => this.handleChange('location', event)}></input>
                    <br />

                    Stem: <input id="textbox" type="text" placeholder="ex. Branched"
                        value={this.state.newPlant.stem}
                        onChange={(event) => this.handleChange('stem', event)}></input><br />

                    Leaves: <input id="textbox" type="text" placeholder="ex. Opposite arrangement, 4 inches long, narrow"
                        value={this.state.newPlant.image1}
                        onChange={(event) => this.handleChange('leaves', event)}
                    ></input><br />

                    <br />
                    <br />


                    <button type="submit">Save</button>

                </form>

            </div>
        )
    }
};

const mapStateToProps = storeInstance => ({
    storeInstance
})

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(AddPlant);