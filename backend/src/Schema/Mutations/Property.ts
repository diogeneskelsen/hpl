import {GraphQLID, GraphQLString} from "graphql";
import {PropertyType} from "../TypeDefinitions/Property";
import {MessageType} from "../TypeDefinitions/Message";
import {Property} from "../../Entities/Property";

export const CREATE_PROPERTY = {
    type: PropertyType,
    args: {
        address: {
            type: GraphQLString
        }
    },
    async resolve(parent : any, args : any) {
        const {address} = args;
        await Property.insert({address});
        return args;
    }
};

export const UPDATE_PROPERTY = {
    type: MessageType,
    args: {
        id: {
            type: GraphQLID
        },
        address: {
            type: GraphQLString
        }
    },
    async resolve(parent : any, args : any) {
        const {id, address} = args;
        const property = await Property.findOne({
            where: {
                id: id
            }
        });

        if (property) {
            await Property.update({
                id: id
            }, {address: address});
            return {successful: true, message: "address updated"};
        } else {
            throw new Error("This is a custom error");
        }
    }
}

export const DELETE_PROPERTY = {
    type: MessageType,
    args: {
        id: {
            type: GraphQLID
        }
    },
    async resolve(parent : any, args : any) {
        const id = args.id;

        if (id === null) {
            throw new Error("This is a custom error");
        }

        await Property.delete(id);

        return {successful: true, message: "property deleted"}
    }
}
