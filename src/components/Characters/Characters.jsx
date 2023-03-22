import Styles from './Characters.module.css'
import axios from "axios"
import { useEffect, useState } from "react"
import { Card } from '../Card/Card';

export const Characters = () => {
    const [peoples, setPeoples] = useState([]);
    const [all, setAll] = useState(0);

    useEffect(() => {
            axios.get(`https://swapi.dev/api/people/?page=1`)
            .then((res) => {
                setPeoples(prevState => [...prevState, ...res.data.results]);
                if (all === 0) setAll(res.data.count);
            })
    }, []);

    return (
        <div>
            <p>{all}</p>
            <div className={Styles.container}>
                {peoples.map(people => <Card person={people}/>)}
            </div>
        </div>
    )
}