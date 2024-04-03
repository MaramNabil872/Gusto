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
                   <div class="container">
                <div class="">
                    <div class="screen__content">
                        <form class="login">
                            <div class="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <ion-input
                                    type="email"
                                    placeholder="Email"
                                    class="login__input"
                                    value={email}
                                    onIonChange={(e) =>
                                        setEmail(e.detail.value)
                                    }
                                ></ion-input>
                            </div>
                            <div class="login__field">
                                <i class="login__icon fas fa-lock"></i>
                                <ion-input
                                    name="password"
                                    class="login__input"
                                    type="password"
                                    placeholder="Password"
                                    ngModel
                                    required
                                ></ion-input>
                            </div>
                            <button class="button login__submit">
                                <span class="button__text">Log In Now</span>
                                <i class="button__icon fas fa-chevron-right"></i>
                            </button>
                        </form>
                        <div class="social-login">
                            <h3>log in via</h3>
                            <div class="social-icons">
                                <a
                                    href="#"
                                    class="social-login__icon fab fa-instagram"
                                ></a>
                                <a
                                    href="#"
                                    class="social-login__icon fab fa-facebook"
                                ></a>
                                <a
                                    href="#"
                                    class="social-login__icon fab fa-twitter"
                                ></a>
                            </div>
                        </div>
                    </div>
                    <IonFooter>
         <IonGrid>
             <Action
                 message="New User?"
                 text="Sign up"
                 link="/sign-up"
             />
    
     </IonFooter>
                    <div class="screen__background">
                        <span class="screen__background__shape screen__background__shape4"></span>
                        <span class="screen__background__shape screen__background__shape3"></span>
                        <span class="screen__background__shape screen__background__shape2"></span>
                        <span class="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
       
        </div>
    );
};

export default Login;
