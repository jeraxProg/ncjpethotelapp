import { useReservationsContext } from '../hooks/useReservationsContext'

//date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const UserReservationDetails = ({ reservation, noDetail }) => {
  const { dispatch } = useReservationsContext()

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
        {/* <h3>Referrence ID: {reservation._id}</h3> */}
        <h4>Petname: {reservation.petname}</h4>
        <p>Type of Pet: {reservation.typeOfPet}</p> 
        <p>Breed: {reservation.breed}</p>
        {/* <p>Owner: {reservation.name}</p> */}
        {/* <p>Email: {reservation.email}</p> */}
        {/* <p>Phone No: {reservation.phone}</p> */}
        <p>Size: {reservation.size}</p>
        <p>Reservation date: {reservation.startDate} to {reservation.endDate}</p>
        <p>{formatDistanceToNow(new Date(reservation.createdAt), {addSuffix:true})}</p>
        {/* <span className="material-symbols-outlined" onClick={handleClick}>delete</span> */}
    </div>
  )
}

export default UserReservationDetails