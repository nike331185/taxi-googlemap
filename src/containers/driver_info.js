import React, { Component } from 'react';
import { connect } from 'react-redux';

class LocationInfo extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const { LocationInfo } = this.props;
        if (!LocationInfo || LocationInfo.name === 'ALL') {
            return <div></div>;
        }
        const icon = `/images/car/${this.props.filter.selectId}.png`;
        //console.log(icon);

        return(
            <div>
                <div><h3>地點資訊:<br></br> <img height="80" width="120" src={icon} /></h3></div>
                <div>目的地: {LocationInfo.name}</div>
                <div>地址: {LocationInfo.addr}</div><br></br>
            </div>
        );
    }
}

function mapStateToProps(state){

    return { LocationInfo: state.location.info, filter: state.filter };
}

export default connect(mapStateToProps)(LocationInfo);
