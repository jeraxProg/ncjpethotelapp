import {useEffect, useState} from 'react'
// import { FaSearch } from "react-icons/fa";
import UserReservationDetails from '../components/userReservationDetails'
import { useReservationsContext } from '../hooks/useReservationsContext'

const SearchReservation = () => {
    const {reservations, dispatch} = useReservationsContext()
    const [searchValue, setSearchValue] = useState('')
    const [showDetail, setShowDetail] = useState(false);



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

        <div className='reservationsUser'><h1>Search Reservation Here</h1>
    <div className='searchId'>
      <input type="text" placeholder="Please put your Referrence ID" name="search" onChange={(e) => setSearchValue(e.target.value)} />
      <button className='showDetailBtn' onClick={() => {setShowDetail(true)}}>Search</button>
      </div>
            {showDetail && reservations && reservations.filter(reservation=>reservation._id.toLowerCase().includes(searchValue)).map((reservation) => (
                <UserReservationDetails noDetail={setShowDetail} key={reservation.id} reservation={reservation} />                                          
            ))}
        </div>
        <div className='sample'>
        <div className='reservation-details'>
        <h3>Referrence ID: Sample10239102</h3>
        <h4>Petname: Sample</h4>
        <p>Type of Pet: Sample</p> 
        <p>Breed: Sample</p>
        <p>Owner: Sample</p>
        <p>Email: Sample</p>
        <p>Phone No:Sample</p>
        <p>Size: Sample</p>
        <p>Reservation date: Sample Date</p>
        {/* <span className="material-symbols-outlined" onClick={handleClick}>delete</span> */}
    </div>
    </div>
    </div>
  ) 
}

export default SearchReservation