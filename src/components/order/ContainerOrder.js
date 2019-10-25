import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { } from './ActionOrder'
import Order from './Order'

class ContainerOrder extends Component {

    render() {
        return (
            <Order
            {...this.props}
            />
        )
    }
}

const mapStateToProps = state => ({
    reducerOrder: state.reducerOrder
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContainerOrder);
