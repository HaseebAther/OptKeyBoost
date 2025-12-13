import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import { getUserTestResults } from "../services/testService";

export default function useDashboardStats() {
  const { user } = useAuth();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      if (!user?.$id) {
        setResults([]);
        return;
      }
      setLoading(true);
      setError(null);
      const resp = await getUserTestResults(user.$id, 50);
      if (resp.success) {
        setResults(resp.data || []);
      } else {
        setError(resp.error || "Failed to load results");
        setResults([]);
      }
      setLoading(false);
    };
    fetch();
  }, [user]);

  const bestWpm = results.length
    ? Math.max(...results.map(r => r.wpm))
    : 0;

  const avgAccuracy = results.length
    ? Math.round(
        results.reduce((a, r) => a + r.accuracy, 0) / results.length
      )
    : 0;

  return {
    results,
    loading,
    error,
    bestWpm,
    avgAccuracy,
    totalTests: results.length,
  };
}
