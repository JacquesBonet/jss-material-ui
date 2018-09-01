import React from 'react'
import style from '../src/styled'
import { Map } from 'react-leaflet'

const SMap = style(Map)({
    root: {
        margin: 0,
        display: 'flex',
        flex: '1',
        flexDirection: 'row',
        height: '100%',
        width: '100%',
    },
})

class Ref extends React.Component {
    state = {
        mapElement: null
    }
    mapElement = React.createRef()

    componentDidMount = () => {
        this.setState({ mapElement: this.mapElement.current.leafletElement });
    };

    render() {
        return (
            <div>
                <div>
                    <p>Test get ref on Map Leaflet</p>
                    <p>Get Zoom = {this.state.mapElement ? this.state.mapElement.getZoom() : null}</p>
                </div>
                <div>
                    <SMap sref={this.mapElement} zoom={10} />
                </div>
            </div>
        );
    }
};

export default Ref;
