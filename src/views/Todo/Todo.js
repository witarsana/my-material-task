import React from 'react';
import TodoList from '../../components/TodoList';
import FormInput from '../../components/FormInput';
import './Todo.scss';
import { Grid, Typography } from '@material-ui/core';
const Todo = () => {
    return (
        <Grid container justify="center" spacing={4}>
            <Grid item xs={4}>
                <Typography style={{ margin: "2rem 0" }} align="center" color="primary" variant="h5">My Todo List</Typography>
                <FormInput />
                <TodoList />
            </Grid>
        </Grid>
    )
}

export default Todo;