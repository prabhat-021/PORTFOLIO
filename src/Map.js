import { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { height, width } from "@mui/system";

class MapContainer extends Component {
    render() {
        return (
            <Map
                id="map-1"
                google={this.props.google}
                style={{ width: "90%", height: "90%"}}
                zoom={10}
                initialCenter={{
                    lat: 28.753325,
                    lng: 77.498273,
                }
                }
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey:"AIzaSyCHQssSL95cMsCQdVDMOC5jzTSWVH86hOM"
})(MapContainer)