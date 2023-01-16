import {useEffect} from 'react'
// import React, {useEffect, useState} from 'react'
import { useReservationsContext } from '../hooks/useReservationsContext'


//Components
import ReservationDetails from '../components/ReservationDetails'
// import UserReservationDetails from '../components/userReservationDetails'
import ReservationForm from '../components/ReservationForm'
const Reservation = () => {
    const {reservations, dispatch} = useReservationsContext()

    // const [reservations, setReservations] = useState(null)

    useEffect(() => {
        const fetchReservations = async () => {
            const response = await fetch('api/reservations')
            const json = await response.json()
           
            if (response.ok) {
                // setReservations(json)
                dispatch({
                    type: 'SET_RESERVATIONS',
                    payload: json
                })

            }
        }
        fetchReservations()
    },[])

  return (
    <div className='reserver'>
              <ReservationForm />
        <div className='reservations'><h1>Reserve</h1>
       
            {reservations && reservations.map((reservation) => (
                <ReservationDetails key={reservation.id} reservation={reservation} />                                           
                
            ))}
        </div>
  
    </div>
  ) 
}

export default Reservation