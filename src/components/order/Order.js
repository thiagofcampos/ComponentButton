import React, { Component, Fragment } from 'react';
import orderStyles from './OrderStyle';
import Fabbutton from '../fabbutton/FabButton'
import Container from '@material-ui/core/Container';



const styles = orderStyles();

const initialState = {
    order:{
        number:''
    },
    orderItem:[],
    ingredient:{
        id:'',
        name:''
    }
}

export default class Order extends Component {
    state = initialState;
    render() {
        return (
            <Fragment>
                <div style={styles.backGround}>
                <Container maxWidth="sm">
                    <h1>Teste FabButton</h1>
                    <Fabbutton
                        typeAdd={false}
                        text='Texto teste'
                        iconPosition= 'teste'
                    />
                </Container>
                </div>
            </Fragment>
        )
    }
}
