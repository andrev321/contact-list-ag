import React from "react";
import { Contact } from "../types";
import apiData from "../api";

export function useFetchData() {
  const [data, setData] = React.useState<Contact[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState<string>();

  const fetchMore = React.useCallback(async () => {
    setLoading(true);
    setErrorMsg(undefined);
    await apiData()
      .then((result) => setData((prevData) => [...prevData, ...result]))
      .catch((error: Error) => setErrorMsg(error.message))
      .finally(() => setLoading(false));
  }, []);

  React.useEffect(() => {
    fetchMore();
  }, [fetchMore]);

  return { data, loading, errorMsg, fetchMore };
}
