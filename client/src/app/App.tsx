import { useEffect, useState } from "react";
import { useServer } from "../useServer";

export const App = () => {
  const { send } = useServer((msg) => {
    setServerResponse(msg.data);
  });

  const [serverResponse, setServerResponse] = useState();

  useEffect(() => {
    send("hello from client");
  }, []);
  return <h1>{serverResponse}</h1>;
};
