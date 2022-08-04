import {GraphQLList} from "graphql";
import {PropertyType} from "../TypeDefinitions/Property";
import {Property} from "../../Entities/Property";

export const GET_ALL_PROPERTIES = {
    type: new GraphQLList(PropertyType),
    resolve() {
        return Property.find();
    }
};
