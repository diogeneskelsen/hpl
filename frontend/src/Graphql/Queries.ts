import {gql} from "@apollo/client";

export const GET_ALL_PROPERTIES = gql `
    query getAllProperties {
        getAllProperties {
            id
            address
        }
    }
`;
