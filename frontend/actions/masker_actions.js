import * as APIUtil from "../util/masker_api_util";

export const RECEIVE_MASKERS = "RECEIVE_MASKERS";
export const RECEIVE_MASKER = "RECEIVE_MASKER";

export const receiveMaskers = maskers => ({
    type: RECEIVE_MASKERS,
    maskers
});

export const receiveMasker = masker => ({
    type: RECEIVE_MASKER,
    masker
});

export const fetchMaskers = () => dispatch => (
    APIUtil.fetchMaskers().then(maskers => (
        dispatch(receiveMaskers(maskers))
    ))
);

export const fetchMasker = (maskerId) => dispatch => (
    APIUtil.fetchMasker(maskerId).then(masker => (
        dispatch(receiveMasker(masker))
    ))
);