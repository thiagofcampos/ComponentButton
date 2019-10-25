import React, { Component } from 'react';

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

export default class OrderItens extends Component {
    state = initialState;
    render() {
        return (
            <div>
                <h1>Aqui</h1>
            </div>
        )
    }
}