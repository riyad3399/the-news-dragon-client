import React from "react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <div className="text-center">
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      </div>
    );
  }

  if (user) {
    return children;
  } else {
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
  }
};

export default PrivateRoute;

/**
 * -----------
 *    STEPS
 * -----------
 * 1. check user is logged in or not.
 * 2. if user is logged in, then allow them to visit the route
 * 3. else redirect the user to the login page
 * 4. set the PorivateRouter
 *
 * */
