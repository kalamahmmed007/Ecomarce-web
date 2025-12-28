import { useSelector, useDispatch } from "react-redux";
import { login, logout, register } from "../redux/slices/authSlice";

export const useAuth = () => {
    const dispatch = useDispatch();
    const { user, token, isAuthenticated, loading } = useSelector(state => state.auth);

    const loginUser = (credentials) => dispatch(login(credentials));
    const logoutUser = () => dispatch(logout());
    const registerUser = (data) => dispatch(register(data));

    return { user, token, isAuthenticated, loading, loginUser, logoutUser, registerUser };
};
