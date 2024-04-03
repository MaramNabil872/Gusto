import React from 'react'
import { IonCol, IonRouterLink, IonRow } from "@ionic/react";

import { Outlet } from 'react-router-dom'

const Mainlayout = () => {
  return (
 <>
 <Navbar/>
 <React.Suspense fallback={<></>}><Outlet/></React.Suspense>
 </>
  )
}

export default Mainlayout