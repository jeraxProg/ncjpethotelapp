import { useEffect, useState } from 'react'
// import React, {useEffect, useState} from 'react'
import { useReservationsContext } from '../hooks/useReservationsContext'
import { useAuthContext } from '../hooks/useAuthContext'


//Components
import ReservationDetails from '../components/ReservationDetails'
import ReservationForm from '../components/ReservationForm'
import Login from './login'
const Admin = () => {
    const { reservations, dispatch } = useReservationsContext()
    const { user } = useAuthContext()

    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        const fetchReservations = async () => {
            const response = await fetch('api/reservations', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                // setReservations(json)
                dispatch({
                    type: 'SET_RESERVATIONS',
                    payload: json
                })

            }
        }

        if (user) {
            fetchReservations()
        }

    }, [dispatch, user])

    return (
        <div className='reserver'>
            {user && (
            <button className='openModalBtn' onClick={() => { setOpenModal(true) }}>Add Reservation</button>
            )}  {openModal && <ReservationForm closeModal={setOpenModal} />}
            <h1>Reservations</h1>
            {user && (
            <div className='reservations'>
                {reservations && reservations.map((reservation) => (
                    <ReservationDetails key={reservation.id} reservation={reservation} />

                ))}
            </div>
             )} 
            
                {!user && (
                    <Login />
                )}      
        </div>

    )
};
export default Admin