import { useEffect, useState } from 'react'
// import React, {useEffect, useState} from 'react'
import { useReservationsContext } from '../hooks/useReservationsContext'


//Components
import ReservationDetails from '../components/ReservationDetails'
// import UserReservationDetails from '../components/userReservationDetails'
import ReservationForm from '../components/ReservationForm'
const Admin = () => {
    const { reservations, dispatch } = useReservationsContext()

    const [openModal, setOpenModal] = useState(false);

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
    }, [])

    return (
        <div className='reserver'>

            <button className='openModalBtn' onClick={() => { setOpenModal(true) }}>Add Reservation</button>
            {openModal && <ReservationForm closeModal={setOpenModal} />}
            <h1>Reservations</h1>
            <div className='reservations'>
                {reservations && reservations.map((reservation) => (
                    <ReservationDetails key={reservation.id} reservation={reservation} />

                ))}
            </div>

        </div>
    )
};
export default Admin