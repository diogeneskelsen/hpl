import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PROPERTY } from "../Graphql/Mutation";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function CreateProperty() {
  const [address, setAddress] = useState("");

  const [createProperty, { error }] = useMutation(CREATE_PROPERTY);

  if(error) {
    console.log(error);
  }

  return (
    <div className="createProperty">
      <h1>Create a new property</h1>
      <TextField
        id="standard-address-new"
        label="Address"
        variant="standard"
        onChange={(event) => {
          setAddress(event.target.value);
        }}
      />
      <Button
        variant="contained"
        onClick={() => {
          createProperty({ variables: { address: address } });
          window.location.reload();
        }}
      >
        Create Property
      </Button>
    </div>
  );
}

export default CreateProperty;
