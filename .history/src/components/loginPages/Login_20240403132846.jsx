
import { IonIcon } from "@ionic/react";
import { logoIonic } from "ionicons/icons";
import { IonCheckbox } from "@ionic/react";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from "axios";
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
    const handleLogin = () => {
      
            //validate inputs code not shown
            const loginData = {
              email: email,
              password: password,
            };
            const api = axios.create({
              baseURL: `https://reqres.in/api`,
            });
            api.post("/login", loginData)
              .then((res) => {
                history.push("/dashboard/" + email);
              })
              .catch((error) => {
                setMessage("Auth failure! Please create an account");
                setIserror(true);
              });
          };
      };
    return (
        <ion-grid>
            <ion-row justify-content-center>
                <ion-col align-self-center size-md="6" size-lg="5" size-xs="12">
                    <div text-center>
                        <span className="loginText pt-serif-bold">SIGN IN</span>
                    </div>
                    <ion-row justify-content-center>
                <ion-col align-self-center size-md="6" size-lg="5" size-xs="12">
                    <div className="form padding" >
                        <ion-item >
                            <IonIcon icon={logoIonic}></IonIcon>
                            <ion-input
                                className="noto-sans"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onIonChange={(e) => setEmail(e.detail.value)}
                            ></ion-input>
                        </ion-item>

                        <ion-item>
                            <IonIcon icon={logoIonic}></IonIcon>
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
                        <IonCheckbox  labelPlacement="end">
                            Keep me signed in{" "}
                        </IonCheckbox>
                    </div>
                    </ion-col>
            </ion-row>
                    <div padding>
                        <button className="button-21 noto-sans " href="/Home"  onClick={handleLogin}>
                            Login
                        </button>
                    </div>
                </ion-col>
            </ion-row>
            <IonFooter>
                <IonGrid>
                    <Action
                        message="New User?"
                        text="Sign up"
                        link="/sign-up"
                    />
                </IonGrid>
            </IonFooter>
        </ion-grid>
    );
};

export default Login;

{
    /* <IonPage>
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

             
            </IonPage> */
}