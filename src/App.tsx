import AuthGuard from "./components/auth/AuthGuard";
import Layout from "./components/general/Layout";
import "./App.css";

function App() {
  return (
    <Layout>
      <AuthGuard />
    </Layout>
  );
}

export default App;
