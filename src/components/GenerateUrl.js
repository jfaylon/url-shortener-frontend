"use client";
import { useState } from "react";
import axios from "axios";
const GenerateUrl = () => {
  const [url, setUrl] = useState("");
  const [apiResult, setApiResult] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      // Perform your API call here using the inputValue
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}`, {
        url,
      });

      // Update state with the API result
      setApiResult(data);
      setError("");
    } catch (error) {
      setError(error.response.data.message);
      setApiResult("");
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-y-2.5">
      <h1 className="text-lg">Shorten URL</h1>
      <label>
        URL:
        <input
          className="text-black"
          type="text"
          value={url}
          onChange={handleInputChange}
        />
      </label>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleButtonClick}
        >
          Generate URL
        </button>
      </div>

      {apiResult && (
        <div className="text-center">
          <h2>Generated URL:</h2>
          <pre>
            <a href={`${window.location.origin}/${apiResult.key}`} target="_blank">
              {`${window.location.origin}/${apiResult.key}`}
            </a>
          </pre>
        </div>
      )}
      {error && (
        <div className="text-center bg-red-600">
          <pre>{error}</pre>
        </div>
      )}
    </div>
  );
};

export default GenerateUrl;
