import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import './EditPage.css';


class EditPlant extends Component {

    state = {
        editPlant: {
            user_id: this.props.storeInstance.currentPlantReducer.user_id,
            common_name: '',
            scientific_name: '',
            date: '',
            location: '',
            stem: '',
            leaves: '',
            image: ''
        }
    }

componentDidMount () {
    this.props.dispatch({ type: 'GET_CURRENT_PLANT', payload: this.props.match.params.id })
}

componentDidUpdate (preProps) {
    if (this.props.storeInstance.currentPlantReducer !== preProps.storeInstance.currentPlantReducer) {
        this.setEventToEdit();
    }
}

setEventToEdit = () => {
    // this.props.storeInstance.currentPlantReducer
    let plant = this.props.storeInstance.currentPlantReducer;
    console.log('set event to edit', this.props.storeInstance.currentPlantReducer
);
        this.setState({
                editPlant: {
                    user_id: this.props.storeInstance.currentPlantReducer.user_id,
                    common_name: plant.common_name,
                    scientific_name: plant.scientific_name,
                    date: plant.date,
                    location: plant.location,
                    stem: plant.stem,
                    leaves: plant.leaves,
                    image: plant.image
            }
        })
    // })
}


    handleChange = (propertyName, event) => {
        event.preventDefault ();
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

    deleteButton = () => {
        this.props.dispatch({ type: 'DELETE_PLANT', payload: this.props.match.params })
        this.props.history.push('/home')
    }

    // updatePlant = () => {
    //     console.log('updatePlant on EditPage.js');
    //     this.props.dispatch({ type: 'EDIT_PLANT', payload: {...this.state.editPlant, id: this.props.match.params.id } })
    // }

// below is new code as of Wednesday evening
    updatePlant = event => {
        event.preventDefault();

        // if statement to prevent onClick from happening without required
        // information in specific fields 
        // common_name and date

        if (this.state.editPlant.common_name === '' ||
            this.state.editPlant.date === '') {
            return alert('fill out common name and date fields')
        };

        this.props.dispatch({ type: 'EDIT_PLANT', payload: { ...this.state.editPlant, id: this.props.match.params.id } })
        // this.props.dispatch({ type: 'GET_CURRENT_PLANT', payload: this.props.match.params.id })

        // this.setState({
        //     editCurrentPlant: {
        //         common_name: '',
        //         scientific_name: '',
        //         date: '',
        //         location: '',
        //         stem: '',
        //         leaves: '',
        //         image: ''
        //     }

        // });
        this.props.history.push(`/plant/${this.props.match.params.id}`);
        // this.props.dispatch({ type: 'FETCH_PLANTS' });
    }

    render() {
        // console.log(this.state.editPlant.images)
        return (
            <div class="form" id="grad">

                <h2>
                    Edit Plant
                </h2>
                <form onSubmit={this.updatePlant} >
  
                    Common Name: <input id="textbox" type="text" placeholder="Common Name"
                        defaultValue={this.state.editPlant.common_name}
                        onChange={(event) => this.handleChange('common_name', event)}></input>
                    <br />

                    Scientific Name: <input id="textbox" type="text" placeholder="Scientific Name"
                        defaultValue={this.state.editPlant.scientific_name}
                        onChange={(event) => this.handleChange('scientific_name', event)}></input>
                    <br />

                    Date Found: <input id="textbox" type="text" placeholder="Date Found"
                        defaultValue={this.state.editPlant.date}
                        onChange={(event) => this.handleChange('date', event)}></input>
                    <br />

                    Location: <input id="textbox" type="text" placeholder="Location"
                        defaultValue={this.state.editPlant.location}
                        onChange={(event) => this.handleChange('location', event)}></input>
                    <br />

                    Stem: <input id="textbox" type="text" placeholder="Stem"
                        defaultValue={this.state.editPlant.stem}
                        onChange={(event) => this.handleChange('stem', event)}></input><br />

                    Leaves: <input id="textbox" type="text" placeholder="Leaves"
                        defaultValue={this.state.editPlant.leaves}
                        onChange={(event) => this.handleChange('leaves', event)}></input><br />

                    {/* * Upload Image <input id="textbox" type="text" placeholder="Image"
                        defaultValue={this.state.editPlant.image}
                        onChange={(event) => this.handleChange('image1', event)}
                    ></input><br /> */}
                    <br />

                    {/* <Button variant="contained" color="primary" type="submit" >
                        SAVE
                    </Button>

                    <Button variant="contained" color="primary" onClick={this.deleteButton}>
                        DELETE
                    </Button>

                    <Button variant="contained" color="primary" onClick={this.cancelButton}>
                        CANCEL
                    </Button> */}

                    <button type="submit">SAVE</button> 
                    <button onClick={this.cancelButton} >CANCEL</button>

                     <button onClick={this.deleteButton} >DELETE</button> 

                </form>
            </div>
        )
    }
};
const mapStateToProps = storeInstance => ({
    storeInstance
})
export default connect(mapStateToProps)(EditPlant);