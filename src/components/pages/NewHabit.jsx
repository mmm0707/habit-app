import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, TextField } from '@material-ui/core'

const NewHabit = ({ addhabit }) => {

    const [text,setText] = useState('')  

    const handleSubmit = e => {
        e.preventDefault()
        if (text.trim() === '') {
            return alert('習慣を入力してください')
        }
        addhabit(text);
        setText('');
        console.log('value: ', text);
    }

    return (
     <>
        <p>新たに習慣を追加する</p>
        <form onSubmit={handleSubmit}>
             <TextField 
                value={text}
                label="習慣を追加"
                variant="outlined"
                onChange={ (e) => 
                    setText(e.target.value)
                }
                addhabit={addhabit}
            />
            <Button
                variant="contained"
                type="submit"
                color="primary"
                disabled={text.trim() === ''}
            >
                追加する
            </Button>
        </form>

        <Button variant="contained" color="primary" component={Link} to="/">
            TOPへ
        </Button>
     </>
    )
}

export default NewHabit