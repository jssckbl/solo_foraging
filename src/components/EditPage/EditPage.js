import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditPlant extends Component {

    state = {
        editPlant: {
            user_id: 'this.props.storeInstance.currentPlantReducer.user_id',
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

    cancelButton = (event) => {
        this.props.history.push('/home')
    }

    updatePlant = () => {
        console.log('updatePlant on EditPage.js');
        this.props.dispatch({ type: 'EDIT_PLANT', payload: this.state })
    }

// below is new code as of Wednesday evening
    editCurrentPlant = event => {
        event.preventDefault();

        // if statement to prevent onClick from happening without required
        // information in specific fields 
        // common_name and date

        if (this.state.newPlant.common_name === '' ||
            this.state.newPlant.date === '') {
            return alert('fill out common name and date fields')
        };

        this.props.dispatch({ type: 'EDIT_PLANT', payload: this.state.editCurrentPlant })
        this.setState({
            editCurrentPlant: {
                common_name: '',
                scientific_name: '',
                date: '',
                location: '',
                stem: '',
                leaves: '',
                image: ''
            }

        });
        this.props.history.push(`/plant`);
        // this.props.dispatch({ type: 'FETCH_PLANTS' });
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
                        value={this.state.editPlant.common_name}
                        onChange={(event) => this.handleChange('common_name', event)}></input>
                    <br />

                    Scientific Name: <input id="textbox" type="text" placeholder="Scientific Name"
                        value={this.state.editPlant.scientific_name}
                        onChange={(event) => this.handleChange('scientific_name', event)}></input>
                    <br />

                    Date Found: <input id="textbox" type="text" placeholder="Date Found"
                        value={this.state.editPlant.date}
                        onChange={(event) => this.handleChange('date', event)}></input>
                    <br />

                    Location: <input id="textbox" type="text" placeholder="Location"
                        value={this.state.editPlant.location}
                        onChange={(event) => this.handleChange('location', event)}></input>
                    <br />

                    Stem: <input id="textbox" type="text" placeholder="Stem"
                        value={this.state.editPlant.stem}
                        onChange={(event) => this.handleChange('stem', event)}></input><br />

                    * Upload Image <input id="textbox" type="text" placeholder="Image"
                        value={this.state.editPlant.image}
                        onChange={(event) => this.handleChange('image1', event)}
                    ></input><br />
                    <br />
                    <button onClick={() => this.updatePlant()} type="submit">Save</button>
                    <button onClick={this.cancelButton} type="submit">Cancel</button>

                </form>
            </div>
        )
    }
};
const mapStateToProps = storeInstance => ({
    storeInstance
})
export default connect(mapStateToProps)(EditPlant);