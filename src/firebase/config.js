import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBE5pAt60CQunnZTXDWmzBHA0m5_I-7vgI",
    authDomain: "habit-app-d8cff.firebaseapp.com",
    projectId: "habit-app-d8cff",
    storageBucket: "habit-app-d8cff.appspot.com",
    messagingSenderId: "169246365878",
    appId: "1:169246365878:web:c833c8df5ca611aca42e17"
};

// if (!getApps.length) {
//     initializeApp();
// } else {
//     getApps(); 
// }

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(firebaseConfig);
// export const firestore = getFirestore(firebaseConfig);
