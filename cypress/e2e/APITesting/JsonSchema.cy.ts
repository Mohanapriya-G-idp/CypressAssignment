import Ajv from 'ajv'
const ajv =new Ajv()
context('Json schema validation using AJV',()=>{
describe('API Testing with AJV', () => {
    const schema = {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "type": "array",
        "items": [
          {
            "type": "object",
            "properties": {
              "data": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer"
                  },
                  "email": {
                    "type": "string"
                  },
                  "first_name": {
                    "type": "string"
                  },
                  "last_name": {
                    "type": "string"
                  },
                  "avatar": {
                    "type": "string"
                  }
                },
                "required": [
                  "id",
                  "email",
                  "first_name",
                  "last_name",
                  "avatar"
                ]
              },
              "support": {
                "type": "object",
                "properties": {
                  "url": {
                    "type": "string"
                  },
                  "text": {
                    "type": "string"
                  }
                },
                "required": [
                  "url",
                  "text"
                ]
              }
            },
            "required": [
              "data",
              "support"
            ]
          }
        ]
      }

    it('should validate API response against JSON schema', () => {

      cy.request('GET','https://reqres.in/api/users/2').
      then((response) => {
         // Validate response against schema
        const validate = ajv.compile(schema);
        const isValid = validate(response.body);
        expect(isValid).to.be.true;
      });
    });
  });
})
  