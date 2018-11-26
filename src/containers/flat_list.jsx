import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Flat from '../containers/flat';
import { setFlats } from '../actions';

class Flatlist extends Component {
  componentwillMount() {
    this.props.setFlats();
  }

  render() {
    return (
      <div className="flat-list col-sm-7">
        {this.props.flats.map((flat, index) => {
          return <Flat key={flat.name} flat={flat} tabIndex={index} />;
        })}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    flats: state.flats
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setFlats }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Flatlist);
