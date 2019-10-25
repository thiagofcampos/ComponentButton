import {
    REMOVE_FROM_BOX,
    ADD_TO_BOX,
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
    POST_REQUEST,
    POST_SUCCESS,
    POST_FAILURE,
    DELETE_REQUEST,
    DELETE_SUCCESS,
    DELETE_FAILURE,
} from './ActionConstants';

export function addToBOx(ingredient) {
    return {
        type: ADD_TO_BOX,
        ingredient,
    };
}

export function removeFromBOx(id) {
    return {
        type: REMOVE_FROM_BOX,
        id,
    };
}
