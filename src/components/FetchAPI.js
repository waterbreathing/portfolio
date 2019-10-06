import React, { Component } from 'react';

import './FetchAPI.css'
import User from './User'
import Img2 from '../img/world2.jpg'



class FetchAPI extends Component {
    state = {
        users: [],
        weather: [],
        usersAndWeather: []
    }

    backgndImageStyle = {

        backgroundImage: `url(${Img2})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        display: 'flex',
        flexDirection: 'column'

    }


    getUsers = () => {


        fetch('https://randomuser.me/api/?results=5')
            .then(response => {
                if (response.ok) {
                    // console.log('response - ', response);
                    return response
                }

                throw Error(response.statusText)
            })
            .then(response => response.json())
            .then(data => {

                this.setState({
                    users: [...this.state.users, ...data.results],
                })

            })



            .then(() => {

                let weather = [];
                let usersAndWeather = []
                for (let i = this.state.users.length - 5; i < this.state.users.length; i++) {


                    const latitude = this.state.users[i].location.coordinates.latitude;
                    const longitude = this.state.users[i].location.coordinates.longitude;

                    // console.log(`numer: ${i}, latitude: ${latitude}, longitude: ${longitude}`)

                    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=d351f368fe4ffd5173ebed33fd69d508&units=metric`)

                        .then(response => {
                            if (response.ok) {
                                return response
                            }

                            throw Error(response.statusText)
                        })
                        .then(response => response.json())

                        .then(data => {


                            let objectNo = i
                            data = { ...data, objectNo }

                            //wartosc objectNo w obiekcie weather odpowiada indeksowi usera!
                            weather.push(data)
                            // console.log(weather)
                            if (weather.length === 5) {
                                const sortedWeatherResults = weather.sort((a, b) => {
                                    if (a.objectNo < b.objectNo) return -1
                                    if (a.objectNo > b.objectNo) return 1
                                    return 0

                                })
                                this.setState({
                                    weather: [...this.state.weather, ...sortedWeatherResults]

                                })
                            }
                        }
                        )
                        .then((x) => {
                            if (weather.length % 5 === 0) {

                                for (let i = this.state.users.length - 5; i < this.state.users.length; i++) {

                                    let weather = this.state.weather[i]
                                    // console.log('weather oraz iterator i', i, weather)
                                    let user = this.state.users[i]


                                    usersAndWeather[i] = { user, weather }

                                }



                                const weatherToAdd = usersAndWeather.filter(element => element !== undefined)
                                this.setState({
                                    usersAndWeather: [...this.state.usersAndWeather, ...weatherToAdd]
                                })

                            }
                        }
                        )

                        .catch(error => {
                            console.log('UPS!', error);
                            alert(`Ups! There was a problem gettig weather data: ${error}`)
                        }
                        )

                }
            }
            )


            .catch(error => {
                console.log('UPS!', error);
                alert(`Ups! There was a problem gettig user data: ${error}`)
            }
            )

    }


    componentDidMount() {
        this.getUsers();
    }


    loadMore = () => {
        this.getUsers();

    }

    render() {


        const userElements = this.state.usersAndWeather.map(element => <User user={element.user} key={element.user.login.uuid} weatherX={element.weather} />)


        return (


            <div style={this.backgndImageStyle}>


                {userElements}
                <button onClick={this.loadMore} className='loadMoreUsers' >load more users</button>
                <p className='disclaimer'>Small disclaimer: This app handles two fetch() requests. First to get 5 random users from randomuser.me, second
                to get some weather info from openweathermap.org based on coordinates from randomuser.me. However, not only users' names etc are random in the randomuser.me service but also their coordinates,
                so it is often that a lot of users live in Antarctica :) etc. The application is still working properly.
                </p>

            </div>
        )
    }
}

export default FetchAPI;