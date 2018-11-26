import React,{ Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFlat } from '../actions';

class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.flat);
  }

  render() {
    const props = this.props;
    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${props.flat.imageUrl}')`
    };

    let containerClasses = "flat card-container";
    if (this.props.flat === this.props.selectedFlat) {
      containerClasses += " selected";
    }

    return (
      <div className={containerClasses} onClick={this.handleClick} role="link" tabIndex={this.props.tabIndex + 1}>
        <div className="card-description">
          <h2>{this.props.name}</h2>
          <p>{this.props.flat.price} {this.props.flat.priceCurrency}
          </p>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(state) {
  return {
    selectFlat: state.selectFlat
  };
}

function mapStateToProps(dispatch) {
  return bindActionCreators({ selectFlat }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Flat);
