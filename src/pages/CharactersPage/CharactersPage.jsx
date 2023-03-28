import Styles from './CharactersPage.module.css'
import axios from "axios"
import { useEffect, useState } from "react"
import ColorEyeSelect from '../../components/ColorEyeSelect/ColorEyeSelect.jsx';
import { Language } from '../../components/Language/Language.jsx';
import { Card } from '../../components/Card/Card';
import ChangeButton from '../../assets/img/ChangeButton.svg'
import Modal from '../../components/Modal/Modal';

export const CharactersPage = () => {
    const [peoples, setPeoples] = useState([]);
    const [all, setAll] = useState(0);
    const [modalActive, setModalActive] = useState(false)
    const [people, setPeople] = useState({})

    const cardClick = (person) => {
        setPeople(person) 
        setModalActive(true)
    }

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/?page=4`)
            .then((res) => {
                setPeoples(prevState => [...prevState, ...res.data.results]);
                if (all === 0) setAll(res.data.count);
            })
    }, []);

    return (
        <div className={Styles.container}>
            <div>
                <div className={Styles.language}>
                    <Language />
                </div>
                <h1 className={Styles.peoples}> {all} Peoples for you to choose your favorite</h1>
                <div className={Styles.colorEyeSelect}>
                    <ColorEyeSelect />
                </div>
                <div className={Styles.containerCard}>
                    {peoples.map((people, index) => <Card key={index} person={people} setPerson={cardClick} />)}
                </div>
            </div>
            <div>
                <div className={Styles.changeButton}>
                    <img src={ChangeButton} alt='ChangeButton' />
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive} people={people}></Modal>
        </div>
    )
}