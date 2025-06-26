import { useState } from "react";
import axios from "axios";
import "./App.css";
import ModernThreeBackground from "./ThreeBackground";
import SearchForm from "./SearchForm";
import ResultDisplay from "./ResultDisplay";

function App() {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (url) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post("/api/fetch", {
        url,
      });
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.error || "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setError(null);
  };

  return (
    <div className="app-root">
      <ModernThreeBackground />
      <div className="overlay-form">
        {!result ? (
          <SearchForm
            onSearch={handleSearch}
            isLoading={isLoading}
            error={error}
          />
        ) : (
          <ResultDisplay data={result} onReset={handleReset} />
        )}
      </div>
    </div>
  );
}

export default App;
