import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import { addTodo } from '../../stores/actions/todos';
import { useDispatch, useSelector } from 'react-redux';
const FormInput = () => {
    const dispatch = useDispatch();
    const { isLoadingAdd } = useSelector(state => state.todo);
    const [load, setLoad] = useState(false);
    const [text, setText] = useState('');
    const saveData = () => {
        if (text.length <= 0) return null;
        const newData = {
            title: text
        }
        dispatch(addTodo(newData));
    }

    useEffect(() => {
        setLoad(isLoadingAdd);
        if (!isLoadingAdd) setText('')
    }, [isLoadingAdd])

    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "1rem 0" }}>
            <TextField
                style={{ width: "100%" }}
                autoFocus
                type="text"
                variant="standard"
                value={text}
                onChange={(e) => { setText(e.target.value) }}
                disabled={load ? true : false}
            />
            <Button disabled={load ? true : false} onClick={saveData} style={{ marginLeft: "5px" }} variant="contained" color="primary">{load ? 'Loading' : 'Add'}</Button>
        </div>
    )
}

export default FormInput;