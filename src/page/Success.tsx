import { styled } from "styled-components";
import { useAppSelector } from "../../redux/store";
import { Navigate } from "react-router-dom";

const StyledSuccess = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

const Success = () => {
  const { name, age } = useAppSelector((state) => state.messageReducer.user);
  if (name === "") {
    return <Navigate to="/" />;
  }
  return (
    <StyledSuccess>
      <p>
        {" "}
        Your name{" "}
        <span style={{ fontWeight: "bold" }}>
          {name.toUpperCase()}
        </span> aged{" "}
        <span style={{ fontWeight: "bold" }}>{age}</span> has
        been added to student system. You can leave this page now.
      </p>
    </StyledSuccess>
  );
};

export default Success;
