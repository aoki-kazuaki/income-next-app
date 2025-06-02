import { CURRENT_USER_DEFAULT } from "@/constants/storeDefault";
import { currentUserAtom } from "@/store/currentUserAtom";
import { currentUserLoadingAtom } from "@/store/currentUserLoadingAtom";
import { useAtomValue } from "jotai";

export const useCurrentUser = () => {
  const currentUser = useAtomValue(currentUserAtom);

  const currentUserLoading = useAtomValue(currentUserLoadingAtom);

  const isGuest = currentUser.role === CURRENT_USER_DEFAULT.role;

  const isLoggedIn = !isGuest;

  return { currentUser, currentUserLoading, isGuest, isLoggedIn };
};
