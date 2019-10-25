import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import './UserPage.css';
import Grid from '@material-ui/core/Grid';




const styles = muiBaseTheme => ({
  card: {

    width: 300,
    margin: muiBaseTheme.spacing.unit,
    transition: "0.3s",


    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    },
    height: '400px'
  },
  media: {
    paddingTop: "56.25%",
    width: '100%',
    height: '20%'

  },
  content: {
    textAlign: "center",
    padding: muiBaseTheme.spacing.unit * 3
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 3}px 0`
  },
  heading: {
    fontWeight: "bold"
  },
  subHeading: {
    lineHeight: 1.8
  },

});

class UserPage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'GET_PLANTS' });
  }

  handleClick = (item) => {
    this.props.history.push(`/plant/${item.id}`)
  }

  handleAddClick = () => {
    this.props.history.push(`/addplant`)

  };

  render() {

    const { classes } = this.props;

    let plants = this.props.storeInstance.plantReducer;

    return (
      <div>

        <button className="button" type="submit" onClick={() => this.handleAddClick()}>Add New Plant</button>
        <h1 id="welcome">
          <p><center>The Morel of the Story</center></p>
        </h1>
        <p><center>Click on a plant to learn more about it</center></p>

        <Grid className="center" container spacing={12}>
          <Grid item xs={3}>
          </Grid>
          {plants.map(item =>
            <Card key={item.id} className={classes.card} onClick={() => this.handleClick(item)}>
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

            </Card>
          )}

        </Grid>
      </div>
    )
  }
};

const mapStateToProps = storeInstance => ({
  storeInstance
})
// this allows us to use <App /> in index.js
export default withStyles(styles)(connect(mapStateToProps)(UserPage));