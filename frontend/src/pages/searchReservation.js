import {useEffect, useState} from 'react'
// import { FaSearch } from "react-icons/fa";
import UserReservationDetails from '../components/userReservationDetails'
import { useReservationsContext } from '../hooks/useReservationsContext'

const SearchReservation = () => {
    const {reservations, dispatch} = useReservationsContext()
    const [searchValue, setSearchValue] = useState('')


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
    <div className='reserve'>
        <div className='reservations'><h1>Search Reservation Here</h1>
        <form className='searchbox' action="">
      <input type="text" placeholder="Please put your Referrence ID" name="search" onChange={(e) => setSearchValue(e.target.value)}/>
    </form>
       
            {reservations && reservations.filter(reservation=>reservation._id.toLowerCase().includes(searchValue)).map((reservation) => (
                <UserReservationDetails key={reservation.id} reservation={reservation} />                                           
                
            ))}
        </div>
    </div>
  ) 
}

export default SearchReservation