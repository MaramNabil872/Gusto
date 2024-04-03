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
import { Action } from "../components/loginPages/Action";
const Welcome = () => {
    return (
        <div>
            {" "}
            <IonPage className={}>
                <IonHeader>
                    {/* <IonToolbar className="ion-no-margin ion-no-padding"> */}
                    {/* <IonImg src="/assets/login2.jpeg" /> */}
                    {/* </IonToolbar> */}
                </IonHeader>
                <IonContent fullscreen>
                    <div >
                        <IonGrid>
                            <IonRow
                               
                            >
                                <IonCol
                                    size="11"
                                    className={styles.headingText}
                                >
                                    <IonCardTitle>
                                        Join millions of other people
                                        discovering their creative side
                                    </IonCardTitle>
                                </IonCol>
                            </IonRow>

                            <IonRow
                                className={`ion-text-center ion-justify-content-center`}
                            >
                                <IonRouterLink
                                    routerLink="/signup"
                                    className="custom-link"
                                >
                                    <IonCol size="11">
                                        <IonButton
                                            className={`${styles.getStartedButton} custom-button`}
                                        >
                                            Get started &rarr;
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
                            message="Already got an account?"
                            text="Login"
                            link="/login"
                        />
                    </IonGrid>
                </IonFooter>
            </IonPage>
        </div>
    );
};

export default Welcome;
