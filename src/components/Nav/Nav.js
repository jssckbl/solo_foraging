import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

const Nav = (props) => (
  <>
    <img src='Morels.png' className='morelsLogo' alt='morelsLogo' />

    <div className='nav'>
      <Link to='/home'>
        <h2 className='nav-title'></h2>
      </Link>
      <Link className='nav-link' to='/home'>
        {props.user.id ? 'Home' : 'Login  Register'}
      </Link>
      {props.user.id && (
        <>
          <Link className='nav-link' to='/about'>
            About
          </Link>
          {/* <<<<<<below code might need adjustment>>>>>>>  */}
          <Link className='nav-link' to='/addPlant'>
            Add Plant
          </Link>
          <LogOutButton className='nav-link' />
        </>
      )}
    </div>
  </>
);

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(Nav);
