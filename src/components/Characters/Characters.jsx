import Styles from './Characters.module.css'
import axios from "axios"
import { useEffect, useState } from "react"
import Cards from '../Card/Cards';
import ColorEyeSelect from '../ColorEyeSelect/ColorEyeSelect';

export const Characters = () => {
    const [peoples, setPeoples] = useState([]);
    const [all, setAll] = useState(0);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/?page=1`)
            .then((res) => {
                setPeoples(prevState => [...prevState, ...res.data.results]);
                if (all === 0) setAll(res.data.count);
            })
    }, [all]);

    return (
        <div className={Styles.container}>
            <div>
                <h1> {all} Peoples for you to choose your favorite</h1>
            </div>
            <div>
                <ColorEyeSelect />
            </div>
            <div className={Styles.containerCard}>
            {peoples.map(people => <Cards person={people} />)}
                {/* {peoples.map(people => <Card person={people} />)} */}
            </div>
        </div>
    )
}