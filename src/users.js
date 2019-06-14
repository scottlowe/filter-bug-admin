import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    Filter,
    TextInput
} from 'react-admin';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput source="username" />
        <TextInput source="company.name" />
    </Filter>
);

export const UserList = props => (
    <List {...props} filters={<UserFilter />}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);