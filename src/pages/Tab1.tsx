import React, { useCallback } from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton
} from '@ionic/react';

import './Tab1.css';
import {connect} from "react-redux"

declare let appManager: AppManagerPlugin.AppManager;

const Tab1: React.FC = (props: any) => {

  const closeApp = useCallback( () => {
    console.log("dApp is closing!")
    appManager.close();
  }, [appManager])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <img src="/assets/shapes.svg" alt="" />
          <IonCardHeader>
            <IonCardSubtitle>Get Started</IonCardSubtitle>
            <IonCardTitle>Welcome to Elastos!</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Hello {props.profile.name}
            </p>

            <IonButton onClick={closeApp}>Close the app</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}


const mapStateToProps = (state) => {
  return {profile: state.profile}
}

export default connect(mapStateToProps)(Tab1)
