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

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/?page=1`)
            .then((res) => {
                setPeoples(prevState => [...prevState, ...res.data.results]);
                if (all === 0) setAll(res.data.count);
            })
    }, [all]);

    const [modalActive, setModalActive] = useState(true)

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
                    <button onClick={() => setModalActive(true)}>Нажми на меня</button>
                    {peoples.map((people, index) => <Card key={index} person={people} />)}
                </div>
            </div>
            <div>
                <div className={Styles.changeButton}>
                    <img src={ChangeButton} alt='ChangeButton' />
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                Jabba Desilijic Tiure
            </Modal>
        </div>
    )
}