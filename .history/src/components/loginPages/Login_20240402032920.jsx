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
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Implement your login logic here
        console.log("Username:", username);
        console.log("Password:", password);
    };

    return (
        <div>
            
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

                <IonFooter>
                    <IonGrid>
                        <Action
                            message="New User?"
                            text="Sign up"
                            link="/sign-up"
                        />
                    </IonGrid>
                </IonFooter>
            </IonPage> */}
        </div>
    );
};

export default Login;
