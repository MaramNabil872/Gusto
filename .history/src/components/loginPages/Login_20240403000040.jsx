import React, { useState } from "react";

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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Implement your login logic here
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div>
        <ion-grid>
            <ion-row justify-content-center>
                <ion-col  align-self-center size-md="6" size-lg="5" size-xs="12">
                    <div text-center>
                        <span className="loginText pt-serif-bold">SIGN IN</span>
                    </div>
                    <div className="form padding">
                        <ion-item>
                            <ion-input
                            className="noto-sans"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onIonChange={(e) => setEmail(e.detail.value)}
                            ></ion-input>
                        </ion-item>
                       
                        <ion-item>
                            <ion-input
                              className="noto-sans"
                              value={password}
                              onIonChange={(e) => setPassword(e.detail.value)}
                                type="password"
                                placeholder="Password"
                                ngModel
                                required
                            ></ion-input>
                        </ion-item>
                     
                    </div>
                    
				<div padding>
					<ion-button size="large" href="/touchid" expand="block">Login</ion-button>
				</div>
                <IonFooter>
                    <IonGrid>
                        <Action
                            message="New User?"
                            text="Sign up"
                            link="/sign-up"
                        />
                    </IonGrid>
                </IonFooter>
                </ion-col>
            </ion-row>
         
            {/* <IonPage>
                <IonHeader></IonHeader>
                <IonContent fullscreen>
                    <div>
                        <IonContent>
                            <div className="login-container">
                                <h2>Login</h2>
                                <form>
                                    <div className="form-group">
                                        <IonInput
                                            type="email"
                                            placeholder="Email"
                                            value={username}
                                            onIonChange={(e) =>
                                                setEmail(e.detail.value)
                                            }
                                        ></IonInput>
                                    </div>
                                    <div className="form-group">
                                        <IonInput
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onIonChange={(e) =>
                                                setPassword(e.detail.value)
                                            }
                                        ></IonInput>
                                    </div>
                                    <IonButton
                                        expand="full"
                                        onClick={handleLogin}
                                    >
                                        Login
                                    </IonButton>
                                </form>
                            </div>
                        </IonContent>

                        <IonRouterLink
                            // routerLink="/signup"
                            className="custom-link"
                        >
                           
                                <IonButton>Login&rarr;</IonButton>
                          
                        </IonRouterLink>
                    </div>
                </IonContent>

             
            </IonPage> */}
       </ion-grid>
       </div>
    );
};

export default Login;
