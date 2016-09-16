import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import { Jumbotron } from 'react-bootstrap';
// Import RaisedButton Component from materialUI
import RaisedButton from 'material-ui/RaisedButton';
// Import themes 
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Import colors
import {deepOrange500} from 'material-ui/styles/colors';

// Build palette
var muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

var Blank = React.createClass({
  render: function() {
    return (
      <div className="overview-page" key="overview"> 
        <Link to="/dashboard/reports" className="pull-right btn btn-primary btn-outline btn-rounded">Reports</Link> 
        <h2>Overview</h2> 
        <Jumbotron> 
          <h1>Welcome!</h1>
          <p> Some content goes here ...</p>
          <br /><br /> 
            <MuiThemeProvider muiTheme={muiTheme}>
          <RaisedButton
            label="RaisedButton"
            secondary={true}
          />
          </MuiThemeProvider>
        </Jumbotron> 
      </div>    
    );
  }
});

export default Blank;
