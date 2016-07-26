import React from 'react';
import {render} from 'react-dom';

export class Happy extends React.Component {
    render() {
        return (
            <div className="birthday">
                <h1>Happy Birthday {this.props.name}!</h1>
            </div>
         );
    }
}
