import {useContext} from 'react'
import { ReservationsContext } from '../context/ReservationsContext'

export const useReservationsContext = () => {
    const context = useContext(ReservationsContext)

    if (!context) {
        throw Error('useReservationsContext must be used inside an ReservationContextProvider')
    }

    return context

}

