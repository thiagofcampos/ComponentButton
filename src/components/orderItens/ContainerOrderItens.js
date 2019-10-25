import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addToBOx, removeFromBOx} from './ActionOrderItens'
import Order from './Order'

class ContainerOrderItens extends Component {

    render() {
        return (
            <Order
            {...this.props}
            />
        )
    }
}

const mapStateToProps = state => ({
    reducerOrderItens: state.reducerOrderItens
});

const mapDispatchToProps = dispatch => bindActionCreators({
    addToBOx,
    removeFromBOx
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContainerOrderItens);
