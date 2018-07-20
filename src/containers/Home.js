import React, { Component } from "react";
import { connect } from "react-redux";

import Places from "../components/Places";
import GoogleMaps from "../components/GoogleMaps";

import "./Home.css";

class Home extends Component {
  // componentWillMount = () => {
  //   const { google } = this.props.google;
  //   searchNearby(google, map, opts)
  //     .then((results, pagination) => {
  //       // We got some results and a pagination object
  //       console.log(results);
  //     })
  //     .catch((status, result) => {
  //       console.log(result);
  //       // There was an error
  //     });
  // };

  // componentWillMount = () => {
  //   console.log(Map);
  //   this.searchNearby(Map, Map.center);
  // };

  // searchNearby = (map, center) => {
  //   const { google } = this.props;

  //   const service = new google.maps.places.PlacesService(Map);

  //   // Specify location, radius and place types for your Places API search.
  //   const request = {
  //     location: center,
  //     radius: "500",
  //     type: ["food"]
  //   };

  //   service.nearbySearch(request, (results, status) => {
  //     if (status === google.maps.places.PlacesServiceStatus.OK)
  //       this.setState({ places: results });
  //   });
  // };

  // onMapReady = (mapProps, map) => this.searchNearby(map, map.center);

  // searchNearby = (map, center) => {
  //   const { google } = this.props;

  //   const service = new google.maps.places.PlacesService(map);

  //   // Specify location, radius and place types for your Places API search.
  //   const request = {
  //     location: center,
  //     radius: "500",
  //     type: ["food"]
  //   };

  //   service.nearbySearch(request, (results, status) => {
  //     if (status === google.maps.places.PlacesServiceStatus.OK)
  //       this.setState({ places: results });
  //   });
  // };

  // componentWillMount = () => {
  //   // let data = this.onMapReady();

  //   const service = new google.maps.places.PlacesService(map);
  //   console.log("[service]", service);
  // };

  render() {
    console.log(this.props.match.params.place_id);
    return (
      <main className="main">
        <section className="googleMap">
          <GoogleMaps />
        </section>
        <aside className="sidebar">
          <Places places={this.props.places} />
        </aside>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places
  };
};

export default connect(mapStateToProps)(Home);
