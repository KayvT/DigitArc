import React from "react";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class MyMap extends React.Component {
  render() {
    return (
      <div className="MapHolder">
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
          <div className="w-100">
            <h1 className="clients-text">Contact Us!</h1>
          </div>
        </div>
        <Map
          google={this.props.google}
          zoom={14}
          style={
            {
              // width: "50%",
              // height: "100%",
              // display: "flex",
              // saturation: "-100",
            }
          }
          containerStyle={{
            height: "60%",
            backgroundColor: "#f6f8fc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>{/* <h1>{this.state.selectedPlace.name}</h1> */}</div>
          </InfoWindow>
        </Map>
        <div />
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCdCpeuXZF3kqbG_T835tG497xa3wMGZ3U",
})(MyMap);
