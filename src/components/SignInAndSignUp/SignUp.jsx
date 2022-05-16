import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Form } from './Styled';
// import { getAuth } from 'firebase/auth';
import { auth } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { AuthContext } from '../../AuthService';
import { Navigate } from 'react-router-dom';
// import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  //({history})↑入れるあとで　エラー解消後

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //パスワード表示について
  // const handleClickShowPassword = (prop) => (event) => {
  //     setValues({...values,[prop]: event.target.value })
  // }

  const handleSubmit = (event) => {
    const auth = getAuth();
    event.preventDefault();
    const { email, password } = event.target.elements;
    createUserWithEmailAndPassword(auth, email.value, password.value)
    // .then((userCredential) => {
    //   const user = userCredential.user;
    // })
    // try {
    //   console.log('user created');  
    // .catch((error) => {
    //   console.log(error);
    // });
    console.log(email, password);
  };

  //handleChange
  const handleChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };

  // const user = useContext(AuthContext);

  // if(user) {
  //     return <Navigate to={'/'}/>
  // }

  return (
    <>
      <p>ユーザ登録</p>

      <Form onSubmit={handleSubmit}>
        <TextField
          type="email"
          label="Eメール"
          onChange={(event) => handleChangeEmail(event)}
        />
        <TextField
          type="password"
          label="パスワード"
          onChange={(event) => handleChangePassword(event)}
        // onClick={handleClickShowPassword}
        />
        <Button
          variant="contained"
          type="submit"
          color="primary"
        >
          サインアップ
        </Button>
      </Form>
    </>
  )
}

export default SignUp