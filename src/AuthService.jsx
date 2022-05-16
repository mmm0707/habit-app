import React, { useState, useEffect } from 'react';
import { 
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
 } from 'firebase/auth';
import { auth } from './firebase/config';

const AuthContext = React.createContext();

const AuthProvider = ({ chileren }) => {
    // ログイン済みのユーザーについて
    const [user, setUser] = useState(null);

    const signup = async (email, password) => {
        try {
            //emailとpasswordからユーザを作成
            const res = await createUserWithEmailAndPassword(auth, email, password);
        } catch(error) {
            console.error(error);
        }
    };

    // ユーザーのログイン時、ログアウト時に必ず呼び出されるメソッド
    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
        // 第二引数=空の配列を与えた場合、初回描写時にのみ実行    
    },[]);

    return (
    <AuthContext.Provider value={user}>
      {chileren}
    </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };