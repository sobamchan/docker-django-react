import React from 'react';
import {render} from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

export class Happy extends React.Component {
    render() {
        return (
            <div className="birthDay">
                <h1>Happy Birthday {this.props.name}!</h1>
                <MuiThemeProvider>
                    <RaisedButton label="何も起きないボタン" primary={true}/>
                </MuiThemeProvider>
            </div>
         );
    }
}
