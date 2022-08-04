import React, { useState } from "react";
import { UPDATE_PROPERTY } from "../Graphql/Mutation";
import { useMutation } from "@apollo/client";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function UpdateProperty() {
  const [id, setId] = useState("");
  const [address, setAddress] = useState("");

  const [updateProperty, { error }] = useMutation(UPDATE_PROPERTY);

  if(error) {
    console.log(error);
  }

  return (
    <div>
      <h1>Update a property</h1>
      <TextField
        id="standard-id"
        label="ID"
        variant="standard"
        onChange={(event) => {
          setId(event.target.value);
        }}
      />
      <br />
      <TextField
        id="standard-address"
        label="Address"
        variant="standard"
        onChange={(event) => {
          setAddress(event.target.value);
        }}
      />
      <br />
      <Button
        variant="contained"
        onClick={() => {
          updateProperty({ variables: { id: id, address: address } });
          window.location.reload();
        }}
      >
        Update Property
      </Button>
    </div>
  );
}

export default UpdateProperty;
