import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditPlant extends Component {

    state = {
        editPlant: {
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
        console.log('event happened', this.state)
        this.setState({
            editPlant: {
                ...this.state.editPlant,
                [propertyName]: event.target.value,
            }
        });
    }

    updatePlant = () => {
        console.log('updatePlant on EditPage.js');
        this.props.dispatch({ type: 'EDIT_PLANT', payload: this.state })
    }

    editPlant = event => {
        event.preventDefault();
        // this.props.dispatch({ type: 'EDIT_PLANT', payload: this.state })
        console.log(this.state)

        this.props.dispatch({ type: 'GET_PLANTS' });
        this.props.history.push(`/home`);
    }

    render() {
        // console.log(this.state.editPlant.images)
        return (
            <div class="form">

                <h2>
                    Edit Plant
                </h2>
                <form onSubmit={this.editPlant} >
                    Edit Plant:
                     <br />
                    <br />

                    Common Name: <input id="textbox" type="text" placeholder="Common Name"
                        value={this.state.newPlant.name}
                        onChange={(event) => this.handleChange('plant_name', event)}></input>
                    <br />

                    Common Name: <input id="textbox" type="text" placeholder="Common Name"
                        value={this.state.newPlant.common_name}
                        onChange={(event) => this.handleChange('common_name', event)}></input>
                    <br />

                    Scientific Name: <input id="textbox" type="text" placeholder="Scientific Name"
                        value={this.state.newPlant.scientific_name}
                        onChange={(event) => this.handleChange('scientific_name', event)}></input>
                    <br />

                    Date Found: <input id="textbox" type="text" placeholder="Date Found"
                        value={this.state.newPlant.date}
                        onChange={(event) => this.handleChange('date', event)}></input>
                    <br />

                    Location: <input id="textbox" type="text" placeholder="Location"
                        value={this.state.newPlant.location}
                        onChange={(event) => this.handleChange('location', event)}></input>
                    <br />

                    Stem: <input id="textbox" type="text" placeholder="Stem"
                        value={this.state.newPlant.stem}
                        onChange={(event) => this.handleChange('stem', event)}></input><br />

                    * Upload Image <input id="textbox" type="text" placeholder="Image"
                        value={this.state.newPlant.image}
                        onChange={(event) => this.handleChange('image1', event)}
                    ></input><br />
                    <br />
                    <button onClick={() => this.updatePlant()} type="submit">Save</button>
                </form>
            </div>
        )
    }
};
const mapStateToProps = storeInstance => ({
    storeInstance
})
export default connect(mapStateToProps)(EditPlant);