import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App.tsx";
import "./index.css";
const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 20000,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={client}>
    <Router>
      <App />
    </Router>
    <ReactQueryDevtools initialIsOpen={true} />
  </QueryClientProvider>
);
