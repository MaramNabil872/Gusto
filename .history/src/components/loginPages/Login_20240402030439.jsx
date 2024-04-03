import React from 'react'
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
import "./loginPage.css";
import{Action} from "./Action"
const Login = () => {
  return (
    <div>
         <IonPage >
                <IonHeader>
               
                </IonHeader>
                <IonContent fullscreen>
                    <div >
                        <IonGrid>
                            <IonRow
                               
                            >
                                <IonCol
                                    size="11"
                                    
                                >
                                    1     <h4 text-center margin-top>Insert your credentials</h4>
2
3     <ion-item>
4       <ion-label stacked>Username</ion-label>
5       <ion-input [(ngModel)]="username"/>
6     </ion-item>
7
8     <ion-item>
9       <ion-label stacked>Password</ion-label>
10      <ion-input type="password" [(ngModel)]="password"></ion-input>
11    </ion-item>
12
13    <div text-center margin-top>
14      <button ion-button margin-right (click)="signUp()">
15        SIGN UP
16      </button>
17
18      <button ion-button color="secondary" (click)="signIn()">
19        SIGN IN
20      </button>
21    </div>
                                </IonCol>
                            </IonRow>

                            <IonRow
                                
                            >
                                <IonRouterLink
                                    // routerLink="/signup"
                                    className="custom-link"
                                >
                                    <IonCol size="11">
                                        <IonButton
                                           
                                        >
                                            Login&rarr;
                                        </IonButton>
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
  )
}

export default Login;