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
        console.log("email:", email);
        console.log("Password:", password);
    };

    return (
        <div>
         
        </div>
    );
};

export default Login;
