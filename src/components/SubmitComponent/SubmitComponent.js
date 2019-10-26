import React, { Component } from 'react';
import axios, { post } from 'axios';
import { connect } from 'react-redux';


class SubmitComponent extends Component {

    onChange(e)
    {
        let image = e.target.files;
        console.log('data file', image)

        let reader= new FileReader();
        reader.readAsDataURL(image[0]);
         reader.onload=(e)=>{
            console.log('image data', e.target.result)

            const formData = {image:e.target.result}
            this.props.setPic(formData);
        }
    }

    render() {
        return (
            <div >
                <h1>UPLOAD PHOTO</h1>
                <input type="file" name="image" onChange={(e) =>this.onChange(e)} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    errors: state.errors,
});

export default connect(mapStateToProps)(SubmitComponent);

// onSubmit = { this.onFormSubmit }