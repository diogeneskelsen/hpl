import {gql} from "@apollo/client";

export const CREATE_PROPERTY = gql `
    mutation createProperty($address: String!) {
        createProperty(address: $address) {
            address
        }
    }
`;

export const UPDATE_PROPERTY = gql `
    mutation updateProperty($id: ID! $address: String!) {
        updateProperty(id: $id, address: $address) {
            message
        }
    }
`;

export const DELETE_PROPERTY = gql `
    mutation deleteProperty($id: ID!) {
        deleteProperty(id: $id) {
            message
        }
    }
`;
