import React, { useCallback } from 'react'
import { connect, useDispatch } from 'react-redux'
import {IonButton, IonHeader, IonPage, IonToolbar, IonTitle, IonContent } from '@ionic/react'

import { ActionSetDID, ActionSetInfo } from '../store/redux/profile'

import { useSignIn } from '../hooks/useSignIn'

const Login: React.FC = () => {

  const dispatch = useDispatch()

  const [signIn] = useSignIn((did: string, credentials:any) => {

    if(credentials.length) {
      const user = credentials[0].credentialSubject
      const {name, country} = user

      dispatch(ActionSetInfo({name, country}))
      dispatch(ActionSetDID(did))
    }
  })

  const login = useCallback(() => {
    signIn({name: true})
  }, [signIn])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <p style={{padding: '2em', textAlign: 'center'}}>
          Click to login with your Elastos DID
        </p>
        <IonButton expand="block" onClick={login}>Login</IonButton>
      </IonContent>
    </IonPage>
  )
}

const mapStateToProps = (state) => {
  return {profile: state.profile}
}

export default connect(mapStateToProps)(Login)
