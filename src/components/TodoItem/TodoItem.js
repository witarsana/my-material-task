import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo, deleteTodo } from '../../stores/actions/todos';
import DeleteIcon from '@material-ui/icons/Delete';
const TodoItem = ({ item }) => {
    const dispatch = useDispatch();
    const { isLoadingAdd } = useSelector(state => state.todo);
    const [isEdit, setIsEdit] = useState(false);
    const [text, setText] = useState(item.title);
    const toogleEdit = (status) => {
        setIsEdit(status);
    }
    const saveEdit = () => {
        toogleEdit(false);
        const data = {
            title: text
        }
        dispatch(editTodo(item._id, data));

    }
    const del = () => {
        dispatch(deleteTodo(item._id))
    }
    return (
        <Card style={{ marginBottom: "1rem" }} raised>
            <CardContent style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {isEdit ?
                    (
                        <TextField
                            onChange={(e) => { setText(e.target.value) }}
                            style={{ width: "100%" }}
                            autoFocus value={text}
                            onBlur={saveEdit}
                            type="text"
                            variant="standard"
                        />
                    ) : (
                        <Typography style={{ cursor: "pointer" }} align="center">
                            <span onClick={() => { toogleEdit(true) }}>{item.title}</span>
                        </Typography>
                    )
                }

                <IconButton disabled={isLoadingAdd ? true : false} onClick={del} aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </CardContent>
        </Card>
    )
}

export default TodoItem;