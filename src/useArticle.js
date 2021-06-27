import { useEffect, useState } from "react";
import apiClient from "./apiClient";

const useArticle = (id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log("useArticle run");

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    console.log("useArticle effect");

    apiClient
      .get(`/posts/${id}`)
      .then((res) => {
        console.log("useArticle effect data");

        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [id]);

  return { data, loading, error };
};

export default useArticle;
