import { useState, useEffect } from "react";
import apiClient from "./apiClient";

// eslint-disable-next-line import/no-anonymous-default-export
export default (id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log("useComment run");

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);
    console.log("useComment useEffect");
    apiClient
      .get(`/comments`)
      .then((res) => {
        setLoading(false);
        setData(res.data);
        console.log("useComment useEffect data");
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [id]);
  return {
    loading,
    error,
    data,
  };
};
