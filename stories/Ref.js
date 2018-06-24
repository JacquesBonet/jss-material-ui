import React from 'react'
import style from '../src/styled'
import {Map} from 'react-leaflet'

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
    state={
        mapElement: null
    }
    mapElement = React.createRef()

    componentDidMount = () => {
        this.setState({mapElement: this.mapElement.current.leafletElement !== null});
    };

    render() {
        return (
            <div>
                <p>{this.state.mapElement}</p>
                <SMap sref={this.mapElement}/>
            </div>
        );
    }
};

export default Ref;
