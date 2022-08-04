import React, { useState, useEffect } from "react";
import { GET_ALL_PROPERTIES } from "../Graphql/Queries";
import { DELETE_PROPERTY } from "../Graphql/Mutation";
import { useQuery, useMutation } from "@apollo/client";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function ListProperties() {
  const { data } = useQuery(GET_ALL_PROPERTIES);
  const [propertyId, setPropertyId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [propertiesData, setPropertyData] = useState([]);
  const [deleteProperty, { error }] = useMutation(DELETE_PROPERTY);

  if(error) {
    console.log(error);
  }

  const deleteItem = (eindex: number) => {
    setPropertyData((items) => items.filter((_, i) => i !== eindex));

    if(propertiesData?.length === 0) {
        console.log("chegou");
        window.location.reload();
    }
  };
  const handleDeleteAction = (id: any, index: number) => {
    setPropertyId(id);
    deleteItem(index);
  };

  useEffect(() => {
    deleteProperty({ variables: { id: propertyId } });
  }, [deleteProperty, propertyId]);

  if (data?.getAllProperties?.length > 0 && propertiesData?.length === 0 && isLoading === false) {
    setPropertyData(data?.getAllProperties);
    setIsLoading(true);
  } 

  if (propertiesData?.length === 0) {
    return (<div><h2>No properties found</h2></div>);
  }

  return (
    <div>
      <h1>List of properties</h1>
      <ul>
        {propertiesData &&
            propertiesData.map((property: any, index) => {
            return (
                <li key={property.id}>
                <b>ID:</b> {property.id} <b>Address:</b> {property.address}
                <IconButton
                    aria-label="delete"
                    color="primary"
                    onClick={() => {
                    handleDeleteAction(property.id, index);
                    }}
                >
                    <DeleteIcon />
                </IconButton>
                </li>
            );
            })}
      </ul>
    </div>
  );
}

export default ListProperties;
