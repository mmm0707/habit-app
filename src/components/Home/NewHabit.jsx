import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import List from "../List";

const NewHabit = ({ addHabit }) => {

    const [ text,setText ] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addHabit(text);
        setText('');
        console.log('value: ', text);
    };

    // <コンポーネント名　props名=値/>  親から子に値を渡す方法

    return (
     <>
        <p>新たに習慣を追加する</p>
        <form onSubmit={handleSubmit}>
             <TextField 
                value={text}
                label="習慣を追加"
                variant="outlined"
                onChange={(e) => setText(e.target.value)}
                addHabit={addHabit}
            />
            <Button
                variant="contained"
                type="submit"
                color="primary"
                disabled={text.trim() === ''}
                // component={Link} to="/"
                >
                追加する
            </Button>
        </form>

        <Button
            variant="contained"
            color="primary"
            component={Link} to="/">
            TOPへ
        </Button>

         {/* <List /> */}
         {/* habits={habits} deleteHabit={deleteHabit} addHabit={addHabit}  */}
     </>
    )
}

export default NewHabit