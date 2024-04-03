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
            <IonPage>
                <IonHeader></IonHeader>
          

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
            </IonPage>
        </div>
    );
};

export default Login;
