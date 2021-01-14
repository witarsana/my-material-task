import React, { useEffect } from 'react';
import TodoItem from '../TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../../stores/actions/todos';
import { CircularProgress } from '@material-ui/core';

const TodoList = () => {
    const dispatch = useDispatch();
    const { todos, isLoading } = useSelector(state => state.todo);

    const getData = () => {
        dispatch(getList());
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <React.Fragment>
            {todos.map((todo, idx) =>
                <TodoItem key={idx} item={todo} />
            )}
            {isLoading &&
                <CircularProgress color="primary" />
            }

        </React.Fragment>
    )
}

export default TodoList;