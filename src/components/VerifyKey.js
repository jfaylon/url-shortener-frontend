"use client";
import { useState } from "react";
import axios from "axios";

const VerifyKey = () => {
  const [key, setKey] = useState("");
  const [apiResult, setApiResult] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setKey(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/${key}`
      );
      setApiResult(data);
      setError("");
    } catch (error) {
      setApiResult("");
      setError(error.response.data.message);
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-y-2.5">
      <h1 className="text-lg">Verify Key</h1>
      <label>
        Key:
        <input
          className="text-black"
          type="text"
          value={key}
          onChange={handleInputChange}
        />
      </label>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleButtonClick}
        >
          Verify
        </button>
      </div>

      {apiResult && (
        <div className="text-center">
          <h2>URL Found from Key:</h2>
          <pre>
            <a
              href={`${apiResult.url}`}
              target="_blank"
            >{`${apiResult.url}`}</a>
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

export default VerifyKey;
