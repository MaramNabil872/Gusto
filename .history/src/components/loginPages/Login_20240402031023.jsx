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
    IonContent, IonInput, IonButton
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
                                    <IonCardTitle>
                                        Join millions of other people
                                        discovering their creative side
                                    </IonCardTitle>
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