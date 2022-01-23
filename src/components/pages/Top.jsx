import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { nanoid } from "nanoid"
import { Button } from "@material-ui/core"
import List from "../List"
import NewHabit from './NewHabit'

// <コンポーネント名　props名=値/>  親から子に値を渡す方法

const Top = () => {
    
    const [habits, setHabits] = useState ([]);

    const deleteHabit = (id) => {

        console.log(id);
      
        let deleteAlert = window.confirm("本当に削除しますか？");
        if ( deleteAlert == true) {
            const newHabits = habits.filter((habit) => habit.id !== id);
            setHabits(newHabits);
            alert("削除しました")
        }
    };

     const addhabit = (content) => {
        setHabits([...habits, { content: content, id: nanoid() }]);
    }

    return (
        <>
            <header>
                <h1>Top Page</h1>
                    <Button 
                        variant="contained"
                        color="secondary"
                        component={Link}
                        to="../components/pages/NewHabit"
                    >
                        New
                    </Button>
            </header>
            <NewHabit addhabit={addhabit} />
            <List habits={habits} deleteHabit={deleteHabit}/>
        </>
    )
}

export default Top