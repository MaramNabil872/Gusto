import React, { useState } from 'react';

import {
    IonButton,
    IonCardTitle,
    IonCol,
    IonContent,
    IonFooter,
    IonGrid,
    IonHeader,
    IonImg,
    IonPage,
    IonRouterLink,
    IonRow,
    IonToolbar,
    IonInput,
} from "@ionic/react";
import "./loginPage.css";
import { Action } from "./Action";
const Login = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const handleLogin = () => {
        // Implement your login logic here
        console.log('Username:', username);
        console.log('Password:', password);
      };
    
    return (
        <div>
            <IonPage>
                <IonHeader></IonHeader>
                <IonContent fullscreen>
                    <div>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="11">
                                    <IonContent>
                                        <IonInput
                                            placeholder="Username"
                                            value={username}
                                            onIonChange={(e) =>
                                                setUsername(e.target.value)
                                            }
                                        ></IonInput>
                                        <IonInput
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onIonChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        ></IonInput>
                                        <IonButton onClick={handleLogin}>
                                            Login
                                        </IonButton>
                                    </IonContent>
                                </IonCol>
                            </IonRow>
                            <ion-item>
              <ion-input  name="name" type="text" placeholder="Name" ngModel required></ion-input>
            </ion-item>
            <ion-item>
              <ion-input name="email" type="email" placeholder="your@email.com" ngModel required></ion-input>
            </ion-item>
            <ion-item>
              <ion-input name="password" type="password" placeholder="Password" ngModel required></ion-input>
            </ion-item>
            <ion-item>
              <ion-input name="confirm" type="password" placeholder="Password again" ngModel required></ion-input>
            </ion-item>
                            <IonRow>
                                <IonRouterLink
                                    // routerLink="/signup"
                                    className="custom-link"
                                >
                                    <IonCol size="11">
                                        <IonButton>Login&rarr;</IonButton>
                                    </IonCol>
                                </IonRouterLink>
                            </IonRow>
                        </IonGrid>
                    </div>
                </IonContent>

                <IonFooter>
                    <IonGrid>
                        <Action
                            message="New User?"
                            text="Sign up"
                            link="/sign-up"
                        />
                    </IonGrid>
                </IonFooter>
            </IonPage>
        </div>
    );
};

export default Login;
