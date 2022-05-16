import React, { useState } from 'react';
import List from "../List";
import NewHabit from './NewHabit';
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { nanoid } from "nanoid";

// <コンポーネント名　props名=値/>  親から子に値を渡す方法
// export default したものを import するときには {} を使わない

const Top = () => {

    const [ habits, setHabits ] = useState ([
        { content: 'study', id: nanoid()},
        { content: 'room', id: nanoid()},
        { content: 'pc', id: nanoid()},
    ]);

    const addHabit = (text) => {
        setHabits([...habits, { content: text, id: nanoid() }]);
    };

    const deleteHabit = (id) => {
        console.log(id);
        let deleteAlert = window.confirm("本当に削除しますか？");
        if ( deleteAlert == true ) {
            const newHabits = habits.filter((habit) => habit.id !== id);
            setHabits(newHabits);
            alert("削除しました");
        };
    };

    return (
        <>
            <header>
                <h1>Top Page</h1>
                    <Button 
                        variant="contained"
                        color="secondary"
                        component={Link}
                        to="../components/Home/NewHabit"
                    >
                        New
                    </Button>
            </header>
            <NewHabit addHabit={addHabit} />
            <List habits={habits} deleteHabit={deleteHabit} />
        </>
    )
}

export default Top