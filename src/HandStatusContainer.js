import React, { Component } from "react";
import { connect } from "react-redux";

class HandStatusContainer extends Component {
    render() {
        return <div className="handStatusContainer">{this.props.status}</div>;
    }
}

const mapStateToProps = (state) => ({
    roundEnded: state.data.roundEnded,
    status: state.data.handWin.name
});
export default connect(mapStateToProps)(HandStatusContainer);
