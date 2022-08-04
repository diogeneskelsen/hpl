import {GraphQLObjectType, GraphQLID, GraphQLString} from "graphql"

export const PropertyType = new GraphQLObjectType({
    name: "Property",
    fields: () => (
        {
            id: {
                type: GraphQLID
            },
            address: {
                type: GraphQLString
            }
        }
    )
});
