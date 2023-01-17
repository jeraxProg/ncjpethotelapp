import { useReservationsContext } from '../hooks/useReservationsContext'
import {  useState } from 'react'
//date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import EditReservationForm from './editReservationForm'

const ReservationDetails = ({ reservation }) => {
  const { dispatch } = useReservationsContext()

  
  const [openModal, setOpenModal] = useState(false);

  const handleClick = async () => {
    const response = await fetch(`/api/reservations/${reservation._id}`, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_RESERVATIONS', payload: json})
    }

  }


  return (
    <div className='reservation-details'>
        {openModal && <EditReservationForm closeModal={setOpenModal} />}
        <h3>Referrence ID: {reservation._id}</h3>
        <h4>Petname: {reservation.petname}</h4> 
        <p>Type Of Pet: {reservation.typeOfPet}</p>
        <p>Breed: {reservation.breed}</p>
        <p>Owner: {reservation.name}</p>
        <p>Email: {reservation.email}</p>
        <p>Phone No: {reservation.phone}</p>
        <p>Size: {reservation.size}</p>
        <p>Reservation date: {reservation.startDate} to {reservation.endDate}</p>
        <p>{formatDistanceToNow(new Date(reservation.createdAt), {addSuffix:true})}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        <span  onClick={() => { setOpenModal(true) }} className="material-symbols-outlined edit">edit</span>
        
    </div>
  )
}

export default ReservationDetails