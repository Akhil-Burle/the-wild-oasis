import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings() {
  const {
    isPending,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"],
    // needs to be a function which returns a promise
    queryFn: getSettings,
  });
  return { isPending, error, settings };
}
