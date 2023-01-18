import { useEffect } from 'react'
// import React, {useEffect, useState} from 'react'
import { useReservationsContext } from '../hooks/useReservationsContext'


//Components
// import ReservationDetails from '../components/ReservationDetails'
// import ReservationForm from '../components/ReservationForm'
import UserReservationForm from '../components/UserReservationForm'
import Navbar from '../components/Navbar'
// import UserReservationDetails from '../components/userReservationDetails'



const UserForm = () => {
    const { reservations, dispatch } = useReservationsContext()

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
    }, [dispatch])

    return (

        <>
            <Navbar />
            <div className='home'>

                {/* <div className='reservations'><h1>Reservations</h1>
       
            {reservations && reservations.map((reservation) => (
                <UserReservationDetails key={reservation.id} reservation={reservation} />                                           
                
            ))}
        </div> */}

                <UserReservationForm />
            </div>
        </>
    )
}

export default UserForm