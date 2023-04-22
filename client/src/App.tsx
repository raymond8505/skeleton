import { GlobalStyles } from "./components/common/styles/GlobalStyles";
import { ConfigProvider } from "antd";
import { useServer } from "./useServer";
import { useEffect } from "react";
import { ReadyState } from "react-use-websocket";

function App() {
  const { send, readyState } = useServer((msg) => {
    console.log(msg.data);
  });

  useEffect(() => {
    if (readyState === ReadyState.OPEN) {
      send("test");
    }
  }, [readyState, send]);
  return (
    <ConfigProvider>
      <GlobalStyles />
    </ConfigProvider>
  );
}

export default App;
