import Styles from './Characters.module.css'
import axios from "axios"
import { useEffect, useState } from "react"
import ColorEyeSelect from '../ColorEyeSelect/ColorEyeSelect.jsx';
import { Language } from '../Language/Language.jsx';
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
    }, [all]);

    return (
        <div className={Styles.container}>
            <div className={Styles.language}>
                <Language />
            </div>
            <div>
                <h1 className={Styles.peoples}> {all} Peoples for you to choose your favorite</h1>
            </div>
            <div className={Styles.colorEyeSelect}>
                <ColorEyeSelect />
            </div>
            <div className={Styles.containerCard}>
                {peoples.map(people => <Card person={people} />)}
            </div>
        </div>
    )
}