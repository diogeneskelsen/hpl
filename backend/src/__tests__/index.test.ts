const url = 'http://127.0.0.1:3001';
const request = require("supertest")(url);

jest.setTimeout(45000);

let countProperties = 0;
let lastProperty: {
    id: number,
    address: String
};

describe("GraphQL Tests", () => {
    test("List all properties", (done) => {
        let query = `{ getAllProperties { id, address } }`;

        request.post("/graphql").send({query: query}).expect(200).end((err : any, res : any) => {
            if (err) 
                return done(err);
            
            countProperties = res.body.data.getAllProperties.length;
            done();
        })
    });

    test("Create a new property", (done) => {
        let query = `mutation {
        createProperty(address: "Fake Street") {
          id
          address
        }
      }`;

        request.post("/graphql").send({query}).expect(200).end((err : any, res : any) => {
            if (err) 
                return done(err);
            
            expect(res.body.data.createProperty.address).toContain("Fake Street");
            done();
        })
    });

    test("List all properties and check if the new Property was created", (done) => {
        let query = `{ getAllProperties { id, address } }`;

        request.post("/graphql").send({query: query}).expect(200).end((err : any, res : any) => {
            if (err) 
                return done(err);
            
            expect(res.body.data.getAllProperties[0]).not.toBeNull();
            expect(res.body.data.getAllProperties.length).toEqual(countProperties + 1);
            lastProperty = res.body.data.getAllProperties[Object.keys(res.body.data.getAllProperties)[Object.keys(res.body.data.getAllProperties).length - 1]];
            done();
        })
    });

    test("Update the new property address", (done) => {
        let query = `mutation {
        updateProperty(id: ` + lastProperty.id + `, address: "Fake Street Changed") {
          successful
          message
        }
      }`;

        request.post("/graphql").send({query}).expect(200).end((err : any, res : any) => {
            if (err) 
                return done(err);
            
            expect(res.body.data.updateProperty.successful).toEqual(true);
            expect(res.body.data.updateProperty.message).toContain("address updated");
            done();
        })
    })

    test("Try to update a property that doesn't exist", (done) => {
        let query = `mutation {
        updateProperty(id: 9999999, address: "Fake Street To Fail") {
          successful
          message
        }
      }`;

        request.post("/graphql").send({query}).expect(200).end((err : any, res : any) => {
            if (err) 
                return done(err);
            
            expect(res.body.errors[0].message).toContain("This is a custom error");
            done();
        })
    })

    test("Try to delete a property that doesn't exist", (done) => {
        let query = `mutation {
        deleteProperty(id: null) {
          successful
          message
        }
      }`;

        request.post("/graphql").send({query}).expect(200).end((err : any, res : any) => {
            if (err) 
                return done(err);
            
            expect(res.body.errors[0].message).toContain("This is a custom error");
            done();
        })
    });

    test("Delete a property", (done) => {
        let query = `mutation {
        deleteProperty(id: ` + lastProperty.id + `) {
          successful
          message
        }
      }`;

        request.post("/graphql").send({query}).expect(200).end((err : any, res : any) => {
            if (err) 
                return done(err);
            
            expect(res.body.data.deleteProperty.successful).toEqual(true);
            expect(res.body.data.deleteProperty.message).toContain("property deleted");
            done();
        })
    });

    test("Check if the property was deleted", (done) => {
        let query = `{ getAllProperties { id, address } }`;

        request.post("/graphql").send({query: query}).expect(200).end((err : any, res : any) => {
            if (err) 
                return done(err);
            
            expect(res.body.data.getAllProperties[0]).not.toBeNull();
            expect(res.body.data.getAllProperties.length).toEqual(countProperties);
            done();
        })
    })
})

export {}
