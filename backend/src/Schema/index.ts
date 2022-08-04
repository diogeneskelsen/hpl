import {GraphQLObjectType, GraphQLSchema} from "graphql";
import {GET_ALL_PROPERTIES} from "./Queries/Property";
import {CREATE_PROPERTY, DELETE_PROPERTY, UPDATE_PROPERTY} from "./Mutations/Property";

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllProperties: GET_ALL_PROPERTIES
    }
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createProperty: CREATE_PROPERTY,
        deleteProperty: DELETE_PROPERTY,
        updateProperty: UPDATE_PROPERTY
    }
});

export const schema = new GraphQLSchema({query: RootQuery, mutation: Mutation});
