import {useEffect} from 'react'
// import React, {useEffect, useState} from 'react'
import { useReservationsContext } from '../hooks/useReservationsContext'


//Components
import ReservationDetails from '../components/ReservationDetails'
import ReservationForm from '../components/ReservationForm'
import UserReservationDetails from '../components/userReservationDetails'



const Home = () => {
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
    <div className='home'>
        <div className='reservations'><h1>HOME</h1>
       
            {reservations && reservations.map((reservation) => (
                <UserReservationDetails key={reservation.id} reservation={reservation} />                                           
                
            ))}
        </div>
        
        <ReservationForm />
    </div>
  ) 
}

export default Home