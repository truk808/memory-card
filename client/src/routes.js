import {
    ABOUT_ROUTES,
    LIST_MODULE_ROUTES,
    LOGIN_ROUTES,
    MODULE_ROUTES,
    REGISTRATION_ROUTES,
    WORKOUT_ROUTES
} from "./utils/consts";
import Workout from "./page/Workout";
import ModuleList from "./page/ModuleList";
import Module from "./page/Module";
import About from "./page/About";
import Auth from "./page/Auth";

// {
//     path:,
//     component:
// },

export const authRoutes = [
    {
        path: WORKOUT_ROUTES,
        component: Workout
    },
    {
        path: LIST_MODULE_ROUTES,
        component: ModuleList
    },
    {
        path: MODULE_ROUTES + '/:id',
        component: Module
    },
]

export const publicRoutes = [
    {
        path: ABOUT_ROUTES,
        component: About
    },
    {
        path: LOGIN_ROUTES,
        component: Auth
    },
    {
        path: REGISTRATION_ROUTES,
        component: Auth
    },
]