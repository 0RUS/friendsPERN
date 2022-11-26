import Following from './pages/Following';
import Friends from './pages/Friends';
import Person from './pages/Person';
import Persons from './pages/Persons';
import {FRIENDS_ROUTE, MAX_FOLLOWING_ROUTE, NOT_FOLLOWING_ROUTE, PERSONS_ROUTE} from './utils/consts';

export const routes = [
    {
        path: PERSONS_ROUTE,
        Component: Persons
    },
    {
        path: PERSONS_ROUTE + '/:id',
        Component: Person
    },
    {
        path: PERSONS_ROUTE + '/:id' + FRIENDS_ROUTE,
        Component: Friends
    },
    {
        path: MAX_FOLLOWING_ROUTE,
        Component: Following
    },
    {
        path: NOT_FOLLOWING_ROUTE,
        Component: Following
    }
]