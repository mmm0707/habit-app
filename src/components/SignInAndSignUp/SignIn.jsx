import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { Form } from './Styled'

const SignIn = () => {

    return(
        <>
        <p>ログインしよう</p>
            
        <Form>
            <TextField 
                type="email"
                label="Eメール"
                />
            <TextField 
                type="password"
                label="パスワード"
                />
        </Form>

        <Button
        variant="contained"
        type="submit"
        color="primary"
        >
        ログイン
        </Button>
        </>
    )
}

export default SignIn