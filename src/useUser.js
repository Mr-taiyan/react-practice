import { useEffect, useState } from "react";
import apiClient from "./apiClient";

export default function useUser(id) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log("useUser run");

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setData(null);
    setError(null);

    console.log("useUser effect");

    apiClient
      .get(`/users/${id}`)
      .then((res) => {
        setLoading(false);
        setData(res.data);
        console.log("useUser effect data");
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [id]);

  return { data, loading, error };
}
