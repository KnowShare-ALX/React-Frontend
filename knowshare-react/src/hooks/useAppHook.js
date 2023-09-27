import { useDispatch } from "react-redux";
import userService from "../services/userService";
import { setUserData } from "../redux/auth";

const useAppHook = () => {
  const dispatch = useDispatch();
  const getProfile = async (userEmail) => {
    try {
      const result = await userService.getProfile(userEmail);
      if (result.data) {
        dispatch(setUserData(result.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProfilePicture = async (userId) => {
    try {
      const result = await userService.getProfilePicture(userId);
      if (result.data) {
        dispatch(setUserData(result.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { getProfile, getProfilePicture };
};

export default useAppHook;
