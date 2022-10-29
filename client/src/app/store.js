import { configureStore } from '@reduxjs/toolkit'
import MessageReducer from '../features/MessageSlice'
import walletReducer from '../features/WalletSlice'

export const store = configureStore({
    reducer: {
        wallet: walletReducer,
        message: MessageReducer
    },
})