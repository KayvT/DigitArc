import React from "react";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Styles from "../Styles/MapStyle";
class MyMap extends React.Component {
  state = {
    showInfoWindow: false,
  };
  onMarkerClick(props, marker, e) {
    console.log("Whoop! A marker was clicked");
  }

  render() {
    return (
      <>
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
          <div className="w-100">
            <h1 id="location" className="clients-text">
              Contact Us!
            </h1>
          </div>
        </div>
        <div className="MapHolder">
          <div>
            <Map
              google={this.props.google}
              zoom={15}
              initialCenter={{ lat: 50.77603, lng: 7.275839 }}
              styles={this.props.mapStyle}
              containerStyle={{
                marginLeft: "150px",
                width: "40%",
                height: "50%",
              }}
            >
              <Marker
                onClick={this.onMarkerClick}
                title={"Turkey Branch"}
                name={"DigitArc"}
                position={{ lat: 50.77603, lng: 7.275839 }}
              />
            </Map>
          </div>
          <div>
            <Map
              google={this.props.google}
              zoom={15}
              styles={this.props.mapStyle}
              initialCenter={{ lat: 41.003485, lng: 29.071986 }}
              containerStyle={{
                // display: "grid",
                // display: "flex",
                // justifyContent: "center",
                width: "40%",
                height: "50%",
              }}
            >
              <Marker
                onClick={this.onMarkerClick}
                name={"DigitArc"}
                position={{ lat: 41.003234, lng: 29.071857 }}
                title={"Germany Branch"}
              />
            </Map>
          </div>
        </div>
      </>
    );
  }
}

MyMap.defaultProps = Styles;
export default GoogleApiWrapper({
  apiKey: "AIzaSyCYixf7o4Ucu1_6tKbeRp0g0LdieTdqayE",
})(MyMap);

/*
<Map
          google={this.props.google}
          zoom={5}
          styles={this.props.mapStyle}
          initialCenter={
            { lat: 50.77603, lng: 7.275839 }
            // { lat: 41.003234, lng: 29.071857 })
          }
          style={{
            width: "50%",
            // height: "100%",
            // display: "flex",
            // saturation: "-100",
          }}
          containerStyle={{
            height: "60%",
            width: "50%",
            backgroundColor: "#f6f8fc",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
     
          <Marker
            onClick={this.onMarkerClick}
            title={"Turkey Branch"}
            name={"DigitArc"}
            position={{ lat: 50.77603, lng: 7.275839 }}
          />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>{/* <h1>{this.state.selectedPlace.name}</h1> }</div>
          </InfoWindow>
        </Map>
        <Map
          google={this.props.google}
          zoom={5}
          styles={this.props.mapStyle}
          initialCenter={
            { lat: 50.77603, lng: 7.275839 }
            // { lat: 41.003234, lng: 29.071857 })
          }
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
            width: "50",
            backgroundColor: "#f6f8fc",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={"DigitArc"}
            position={{ lat: 41.003234, lng: 29.071857 }}
            title={"Germany Branch"}
          />
          <Marker
            onClick={this.onMarkerClick}
            title={"Turkey Branch"}
            name={"DigitArc"}
            position={{ lat: 50.77603, lng: 7.275839 }}
          />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>{/* <h1>{this.state.selectedPlace.name}</h1> }</div>
          </InfoWindow>
        </Map>
*/
