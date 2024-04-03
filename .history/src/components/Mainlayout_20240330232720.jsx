import React from 'react'
import { IonCol, IonRouterLink, IonRow } from "@ionic/react";
import { Outlet } from 'react-router-dom'
export const Action = props => (

    <IonRow className="ion-text-center ion-justify-content-center">
        <IonCol size="12">
            <p>
                { props.message }
                <IonRouterLink className="custom-link" routerLink={ props.link }> { props.text } &rarr;</IonRouterLink>
            </p>
        </IonCol>
    </IonRow>
);

export default Mainlayout