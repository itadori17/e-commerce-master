import { Navbar } from '../../Components/Navbar'
import React, { useState, useEffect } from 'react'
import fire, { auth, db } from '../../Config/Config'
import { onAuthStateChanged, } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
const Summer = (props) => {
    function GetUserUid() {
        const [uid, setUid] = useState(null);
        useEffect(() => {
            auth.onAuthStateChanged(user => {
                if (user) {
                    setUid(user.uid);
                }
            })
        }, [])
        return uid;
    }
    const uid = GetUserUid();
    function GetCurrentUser() {
        const [user, setUser] = useState(null)
        useEffect(() => {
            const unbn = onAuthStateChanged(auth, user => {
                if (user) {
                    fire.firestore().collection("user").doc(user.uid).get().then(snapshot => {
                        setUser(snapshot.data().FullName)
                    })
                } else {


                    setUser(null)
                }
            })
            return unbn
        }, [])
        return user;


    }
    const user = GetCurrentUser()
  return (
    <div>
      Summer
    </div>
  )
}

export default Summer
