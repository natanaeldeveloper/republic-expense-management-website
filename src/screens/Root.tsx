import { createBrowserRouter } from "react-router-dom";
import ScreensUserRegister from "./User/Register";

export const routes = createBrowserRouter([
    {
        path: 'users/create',
        element: <ScreensUserRegister />
    }
])