import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";
import styled from "styled-components";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //1. Load authenticated user
  const { isLoading, isAutenticated } = useUser();

  //2. If there is no authenticated user , redirect to the /login
  useEffect(
    function () {
      if (!isAutenticated && !isLoading) navigate("/login");
    },
    [isAutenticated, isLoading, navigate]
  );

  //3.While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4. If there is a user, render the app

  if (isAutenticated) return children;
}

export default ProtectedRoute;
