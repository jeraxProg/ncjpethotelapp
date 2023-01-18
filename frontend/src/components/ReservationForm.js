import React, { useState } from 'react'
import { useReservationsContext } from '../hooks/useReservationsContext'
import {useAuthContext} from "../hooks/useAuthContext"


const ReservationForm = ({closeModal}) => {
    const { dispatch } = useReservationsContext()
    const {user} = useAuthContext()

    const [petname, setPetname] = useState('')
    const [breed, setBreed] = useState('')
    const [size, setSize] = useState('')
    const [typeOfPet, setTypeOfPet] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in')
            return 
        }

        const reservation = { petname, breed, name, email, phone, size, startDate, endDate, typeOfPet }

        const response = await fetch('/api/reservations', {
            method: 'POST',
            body: JSON.stringify(reservation),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }

        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setPetname('')
            setBreed('')
            setName('')
            setEmail('')
            setPhone('')
            setError(null)
            setEmptyFields([])
            setStartDate('')
            setEndDate('')
            alert('New reservation added', json)
            dispatch({ type: 'CREATE_RESERVATIONS', payload: json })
        }
    }

    return (

        <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='titleCloseBtn'>
            <button  onClick={() => closeModal(false)}>X</button>
            </div>
            <form className='create' onSubmit={handleSubmit}>
               
                    <h3>Make a Reservation</h3>

                    {error && <div className='error'>{error}</div>}
                    <label for='name'>Your Name</label>
                    <input type='text'
                        onChange={(e) => setName(e.target.value)}
                        name='name'
                        value={name}
                        id='name'
                        placeholder='Your Name'
                        className={emptyFields.includes('name') ? 'error' : ''} />

                    <label for='email'>Email</label>
                    <input type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        name='email'
                        value={email}
                        id='email'
                        placeholder='Your Email'
                        className={emptyFields.includes('email') ? 'error' : ''} />

                    <label for='phone'>Phone No:</label>
                    <input type='number'
                        onChange={(e) => setPhone(e.target.value)}
                        name='phone'
                        value={phone}
                        id='phone'
                        placeholder='Your Mobile'
                        className={emptyFields.includes('phone') ? 'error' : ''} />

                    <label for='petname'>Pet Name</label>
                    <input type='text'
                        onChange={(e) => setPetname(e.target.value)}
                        name='petname'
                        value={petname}
                        id='petname'
                        placeholder='Your Pet Name'
                        className={emptyFields.includes('petname') ? 'error' : ''} />
                 


          

           
                    <label for='size'>Pet Size</label>
                    <select onChange={(e) => setSize(e.target.value)} >
                        <option value='' >--Please Select Size--</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                    <label for='typeOfPet'>Pet Name</label>
                    <select onChange={(e) => setTypeOfPet(e.target.value)} >
                        <option value='' >--Type Of Pet--</option>
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                    </select>


                    <label for='breed'>Breed</label>
                    <input type='text'
                        onChange={(e) => setBreed(e.target.value)}
                        name='breed'
                        value={breed}
                        id='breed'
                        placeholder='Breed'
                        className={emptyFields.includes('breed') ? 'error' : ''} />

            
       

                    <label for='startDate'>Start Date Reservation</label>
                    <input type='date'
                        onChange={(e) => setStartDate(e.target.value)}
                        name='startDate'
                        value={startDate}
                        id='startDate'
                        placeholder='Your StartDate'
                    />
                    <label for='endDate'>Start Date Reservation</label>
                    <input type='date'
                        onChange={(e) => setEndDate(e.target.value)}
                        name='endDate'
                        value={endDate}
                        id='endDate'
                        placeholder='Your EndDate'
                    />

               

<button className='btnSubmit' type='submit'>Submit</button>
            </form>
            
            </div>

        </div>
    )
}

export default ReservationForm