import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1> Opps!!!</h1>
      <h2>Something went wrong!!</h2>
      {err.status} : {err.statusText}
    </>
  );
};

export default Error;
