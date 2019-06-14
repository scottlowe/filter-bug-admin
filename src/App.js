import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} />
        <Resource name="posts" list={ListGuesser} />
    </Admin>
);

export default App;
