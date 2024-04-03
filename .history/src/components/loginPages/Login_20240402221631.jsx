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
        <div >
            
            {/* <ion-row justify-content-center>
                <ion-col>
                    <div className="loginText">
                        <h3>Sign in</h3>
                    </div>
                    <div className="form">
                        <ion-item>
                            <ion-input
                                  type="email"
                                  placeholder="Email"
                                  value={email}
                                  onIonChange={(e) =>
                                      setEmail(e.detail.value)}
                            ></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-input
                                name="email"
                                type="email"
                                placeholder="your@email.com"
                                ngModel
                                required
                            ></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-input
                                name="password"
                                type="password"
                                placeholder="Password"
                                ngModel
                                required
                            ></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-input
                                name="confirm"
                                type="password"
                                placeholder="Password again"
                                ngModel
                                required
                            ></ion-input>
                        </ion-item>
                    </div>
                </ion-col>
            </ion-row>
            <div>
                <ion-button size="large" type="submit">
                    Register
                </ion-button>
            </div> */}
        </div>
    );
};

export default Login;
