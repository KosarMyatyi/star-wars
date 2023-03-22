import Styles from './Characters.module.css'
import axios from "axios"
import { useEffect, useState } from "react"

export const Characters = () => {

    const [peoples, setPeoples] = useState([
        {
            "name": "Luke Skywalker",
            "height": "172",
            "mass": "77",
            "hair_color": "blond",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "19BBY",
            "gender": "male",
            "homeworld": "https://swapi.dev/api/planets/1/",
            "films": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/6/"
            ],
            "species": [],
            "vehicles": [
            "https://swapi.dev/api/vehicles/14/",
            "https://swapi.dev/api/vehicles/30/"
            ],
            "starships": [
            "https://swapi.dev/api/starships/12/",
            "https://swapi.dev/api/starships/22/"
            ],
            "created": "2014-12-09T13:50:51.644000Z",
            "edited": "2014-12-20T21:17:56.891000Z",
            "url": "https://swapi.dev/api/people/1/"
            },
    ])

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/1/')
            .then((res) => {
                setPeoples(res.data)
            })
    }, [])

    return (
        <div className={Styles.cards}>
            {/* {peoples.map((people) => (
                <div className={Styles.card} key={people.id}>
                    <p>{people.name}</p>
                    <p>{people.height}</p>
                    <p>{people.mass}</p>
                    <p>{people.gender}</p>
                    <p>{people.birth_year}</p>
                </div>
            ))} */}
            <div className={Styles.card} key={peoples.id}>
                    <p>{peoples.name}</p>
                    <p>{peoples.height}</p>
                    <p>{peoples.mass}</p>
                    <p>{peoples.gender}</p>
                    <p>{peoples.birth_year}</p>
                </div>
        </div>
    )
}