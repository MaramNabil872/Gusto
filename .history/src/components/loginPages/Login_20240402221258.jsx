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
        <div class="container">
	<div class="screen">
		<div class="screen__content">
			<form class="login">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="User name / Email">
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Password">
				</div>
				<button class="button login__submit">
					<span class="button__text">Log In Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div class="social-login">
				<h3>log in via</h3>
				<div class="social-icons">
					<a href="#" class="social-login__icon fab fa-instagram"></a>
					<a href="#" class="social-login__icon fab fa-facebook"></a>
					<a href="#" class="social-login__icon fab fa-twitter"></a>
				</div>
			</div>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
{/* //         <div  class="container">
//             <div class="screen">
// 		<div class="screen__content"> */}
			
// 				<div class="login__field">
// 					<i class="login__icon fas fa-user"></i>
//             <ion-row justify-content-center>
//                 <ion-col>
//                     <div className="loginText">
//                         <h3>Sign in</h3>
//                     </div>
//                     <div className="login">
//                         <ion-item>
//                             <ion-input
//                                   type="email"
//                                   placeholder="Email"
//                                   value={email}
//                                   onIonChange={(e) =>
//                                       setEmail(e.detail.value)}
//                             ></ion-input>
//                         </ion-item>
//                         <ion-item>
//                             <ion-input
//                                 name="email"
//                                 type="email"
//                                 placeholder="your@email.com"
//                                 ngModel
//                                 required
//                             ></ion-input>
//                         </ion-item>
//                         <ion-item>
//                             <ion-input
//                                 name="password"
//                                 type="password"
//                                 placeholder="Password"
//                                 ngModel
//                                 required
//                             ></ion-input>
//                         </ion-item>
//                         <ion-item>
//                             <ion-input
//                                 name="confirm"
//                                 type="password"
//                                 placeholder="Password again"
//                                 ngModel
//                                 required
//                             ></ion-input>
//                         </ion-item>
//                     </div>
//                 </ion-col>
//             </ion-row>
//             <div>
//                 <ion-button size="large" type="submit">
//                     Register
//                 </ion-button>
                
//             </div>
//             <div class="social-login">
// 				<h3>log in via</h3>
// 				<div class="social-icons">
// 					<a href="#" class="social-login__icon fab fa-instagram"></a>
// 					<a href="#" class="social-login__icon fab fa-facebook"></a>
// 					<a href="#" class="social-login__icon fab fa-twitter"></a>
// 				</div>
// 			</div>
//             </div>		
            
// 	</div>
//     <div class="screen__background">
// 			<span class="screen__background__shape screen__background__shape4"></span>
// 			<span class="screen__background__shape screen__background__shape3"></span>		
// 			<span class="screen__background__shape screen__background__shape2"></span>
// 			<span class="screen__background__shape screen__background__shape1"></span>
// 		</div>	
// </div>

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
