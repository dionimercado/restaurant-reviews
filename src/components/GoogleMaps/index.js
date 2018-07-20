import React, { Component } from "react";
import { connect } from "react-redux";
import { FETCHED_PLACES } from "../../actions/types";

import { Map, GoogleApiWrapper } from "google-maps-react";

import { searchNearby } from "../../utils/googleApiHelpers";

export class GoogleMaps extends Component {
  onReady(mapProps, map) {
    const { google } = this.props;
    const opts = {
      location: map.center,
      radius: "500",
      types: ["cafe"]
    };
    searchNearby(google, map, opts)
      .then((results, pagination) => {
        // We got some results and a pagination object
        console.log(results);
        this.props.places(results);
      })
      .catch((status, result) => {
        console.log(result);
        // There was an error
      });
  }
  render() {
    return (
      <div>
        <Map onReady={this.onReady.bind(this)} google={this.props.google} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchedPlaces: state.places
  };
};

const mapDispatchToProps = dispatch => {
  return {
    places: places => dispatch({ type: FETCHED_PLACES, places })
  };
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCuMV8HTZCAxl1GN1VNKOYMUn2_DUttqcs"
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(GoogleMaps)
);
