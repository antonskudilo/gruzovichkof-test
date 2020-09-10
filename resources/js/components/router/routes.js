import Home from "../pages/Home";
import Random from "../pages/Random";
import List from "../pages/List";
import Retrieve from "../pages/Retrieve";

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: 'Домашняя'
        }
    },
    {
        path: '/random',
        name: 'random',
        component: Random,
        meta: {
            title: 'Получение случайного числа'
        }
    },
    {
        path: '/retrieve',
        name: 'retrieve',
        component: Retrieve,
        meta: {
            title: 'Найти число по ID'
        }
    },
    {
        path: '/list',
        name: 'list',
        component: List,
        meta: {
            title: 'Список полученных чисел'
        }
    },
    {
        path: '/*',
        redirect: '/'
    }
];
