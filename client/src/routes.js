import {
    ABOUT_ROUTE, CARD_ROUTE,
    GROUP_ROUTE,
    LOGIN_ROUTE,
    MODULE_ROUTE,
    REGISTRATION_ROUTE,
    WORKOUT_ROUTE
} from "./utils/consts";
import Workout from "./page/Workout";
import Group from "./page/Group";
import Module from "./page/Module";
import About from "./page/About";
import Auth from "./page/Auth";
import Card from "./page/Card";

// {
//     path:,
//     component:
// },

export const authRoutes = [
    {
        path: WORKOUT_ROUTE,
        component: <Workout />
    },
    {
        path: GROUP_ROUTE,
        component: <Group />
    },
    {
        path: MODULE_ROUTE + '/:id',
        component: <Module />
    },
    {
        path: CARD_ROUTE,
        component: <Card />
    },
]

export const publicRoutes = [
    {
        path: ABOUT_ROUTE,
        component: <About />
    },
    {
        path: LOGIN_ROUTE,
        component: <Auth />
    },
    {
        path: REGISTRATION_ROUTE,
        component: <Auth />
    },
]