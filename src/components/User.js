import React from 'react';
import './User.css'


const User = (props) => {



    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // console.log(props.weatherX.cod)

    const { name, location, login, picture } = props.user;
    const { coord, main, weather } = props.weatherX

    return (


        <div className='shortUserContainer'>

            <div className='imageSmall'>
                <img src={picture.medium} alt="user" />
            </div>
            <div className='userShortInfo'>
                < p style={{ fontWeight: 'bold' }}> {capitalizeFirstLetter(name.title)} {capitalizeFirstLetter(name.first)} {capitalizeFirstLetter(name.last)} </ p>
                <p> Login: {login.username} </p>
                <p> Location: {capitalizeFirstLetter(location.city)} <br /> Street: {location.street.name}</p >
            </div>
            <div className="weatherContainer">
                <p>
                    Latitude: {coord.lat} <br /> Longitude: {coord.lon} <br /> Sky: {weather[0].description} <br />Temperature: {main.temp} Celsius
                </p>
            </div>
        </div >


    )
}

export default User
