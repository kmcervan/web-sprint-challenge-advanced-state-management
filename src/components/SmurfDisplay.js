import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';
import Smurf from './Smurf';

export class SmurfDisplay extends React.Component {

    componentDidMount() {
        this.props.getSmurfs();
    }
    render() {
    if (this.props.isLoading) {
        return <h2>Fetching Details From Papa Smurf!</h2>
    }
   
        return(<div>
            <h2>Smurfs</h2>
            <Smurf smurf={this.props.smurfs} />
        </div>)
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {  
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    };
};

export default connect(mapStateToProps, { getSmurfs })(SmurfDisplay);
// export default ;

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.