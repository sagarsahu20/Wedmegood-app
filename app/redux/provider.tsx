"use client"

import React from 'react'

import Store from './Store'

import { Provider } from 'react-redux'

export function ReduxProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={Store} >{children}</Provider>
}