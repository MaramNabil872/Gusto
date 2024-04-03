import React from "react";
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
} from "@ionic/react";
import  Login  from "../components/loginPages/Login.jsx";
const Welcome = () => {
    return (
        <div>
            {" "}
           <Login/>
        </div>
    );
};

export default Welcome;
