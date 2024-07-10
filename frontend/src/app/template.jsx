'use client';
import { AppProvider } from "@/context/AppContext";
import React from 'react'

const Template = ({Children}) =>{
    return(
        <AppProvider>
            {Children}
        </AppProvider>
    )
}
export default Template