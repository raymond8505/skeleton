import { GlobalStyles } from "./components/common/styles/GlobalStyles";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider>
      <GlobalStyles />
    </ConfigProvider>
  );
}

export default App;
