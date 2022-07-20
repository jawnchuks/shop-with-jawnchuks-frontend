import { LOGIN_MUTATION_KEY } from "@config/queryKeys";
import { useMutation } from "react-query";
import Router from "next/router";
import { useUserCredentialsStore } from "@store/authStore.store";
import shallow from "zustand/shallow";
import { loginData } from "@services/mutation/login.service";

export const useLogin = () => {
  const [populateUserInfoAndJwt] = useUserCredentialsStore(
    (state) => [state.populateUserInfoAndJwt],
    shallow
  );

  const { mutate, isLoading, isError, isSuccess, reset, data } = useMutation({
    mutationKey: LOGIN_MUTATION_KEY,
    mutationFn: loginData,
    onSuccess: (returnedData) => {
      populateUserInfoAndJwt(returnedData?.data);
      Router.replace("/search-results");
    },
    onError: () => {},
  });

  return {
    mutate,
    isLoading,
    isError,
    isSuccess,
    reset,
    data,
  };
};
