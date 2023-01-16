import React, {createContext, useReducer} from 'react'

export const ReservationsContext = createContext()

export const reservationsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_RESERVATIONS':
            return {
                reservations: action.payload
            }
        case 'CREATE_RESERVATIONS':
            return {
                reservations: [action.payload, ...state.reservations]
            }
        case 'DELETE_RESERVATIONS':
            return {
                reservations: state.reservations.filter((r) => r._id !== action.payload._id)
            }
            default:
                return state
    }

}

export const ReservationsContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reservationsReducer, {
        reservations: null
    })

    // dispatch({type: 'SET_RERSERVATIONS', payload: [{}, {}] })

  return (
    <ReservationsContext.Provider value={{...state, dispatch}}>
        { children }
    </ReservationsContext.Provider>
  )
}
