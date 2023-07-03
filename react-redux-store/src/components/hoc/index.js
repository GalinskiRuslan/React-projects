import React from "react";
import { ConsumerItems } from "../service-context/ServiceContext";

const withStoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <ConsumerItems>
        {(itemstoreService) => {
          return <Wrapped {...props} />;
        }}
      </ConsumerItems>
    );
  };
};

export default withStoreService;