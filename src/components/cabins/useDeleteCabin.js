import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  // To do mutations:
  const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
    // Function which react-query will call
    mutationFn: (id) => deleteCabinApi(id),
    // Invalidating cache as soon as the above fn is executed
    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      // What to do after the above function is successfull?
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    // This onError gets access to the error thrown in the mutation function
    onError: (err) => toast.err(err.message),
  });

  return { isDeleting, deleteCabin };
}
