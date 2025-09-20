import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabins() {
  const { isPending, data: cabins } = useQuery({
    // This is what identifies each data
    queryKey: ["cabins"],
    // Function that is responsible for actually fetching the data
    // The function we pass below, NEEDS to return a promise, has to be a fetch() or an async func
    queryFn: getCabins,
  });
  // console.log(x); //Proxy(Object) {status: 'pending', fetchStatus: 'fetching', isPending: true, isSuccess: false, isError: false, …}

  return { isPending, cabins };
}
