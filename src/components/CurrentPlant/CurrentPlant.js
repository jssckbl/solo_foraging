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


// const styles = muiBaseTheme => ({
//     card: {

//         width: 350,
//         margin: muiBaseTheme.spacing.unit,
//         transition: "0.3s",


//         boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
//         "&:hover": {
//             boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
//         },
//         height: '400px'
//     },
//     media: {
//         paddingTop: "56.25%",
//         width: '100%',
//         height: '20%'

//     },
//     content: {
//         textAlign: "center",
//         padding: muiBaseTheme.spacing.unit * 3
//     },
//     divider: {
//         margin: `${muiBaseTheme.spacing.unit * 3}px 0`
//     },
//     heading: {
//         fontWeight: "bold"
//     },
//     subHeading: {
//         lineHeight: 1.8
//     },

// });


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
    }
    componentDidMount() {
        this.props.dispatch({ type: 'GET_CURRENT_PLANT', payload: this.props.match.params.id })
    };

    handleClick = (item) => {
        this.props.history.push(`/edit/${item.id}`)
    }

    cancelButton = (event) => {
        this.props.history.push('/home')
    }


    render() {
        let pizza = this.props.storeInstance.currentPlantReducer;
        let plants = this.props.storeInstance.plantReducer;

        return (
            <div className="current-plant">
                    {/* <div className="card"> */}
                        <button className="current_plant_info" onClick={() => this.props.history.push(`/edit/${pizza.id}`)}>
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
                    <button className="currentCancel" onClick={this.cancelButton} type="submit">Cancel</button>





            </div>

        )
    }
};

const mapStateToProps = storeInstance => ({
    storeInstance
})

export default connect(mapStateToProps)(CurrentPlant);


// connect to the store to get the currentPlantReducer
// use userPage as reference and the line below
//    use something like the following 
// let plants = this.props.storeInstance.currentPlantReducer;
{/* <Card key={item.id} className={classes.card} onClick={() => this.handleClick(item)}>
    <CardMedia
        className={classes.media}
        image={item.url}
    />
    <CardContent className={classes.content}>
        <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
        >
            Plant: {item.common_name}
        </Typography>
        <Typography
            className={"MuiTypography--subheading"}
            variant={"caption"}
        >
            Date: {item.date}
        </Typography>
        <br />
    </CardContent>

</Card> */}
