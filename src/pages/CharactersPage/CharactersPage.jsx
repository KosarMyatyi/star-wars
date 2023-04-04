import Styles from './CharactersPage.module.css'
import axios from "axios"
import { useEffect, useState } from "react"
import { ColorEyeSelect } from '../../components/ColorEyeSelect/ColorEyeSelect.jsx';
import { Language } from '../../components/Language/Language.jsx';
import { Card } from '../../components/Card/Card';
import ChangeButton from '../../assets/img/ChangeButton.svg'
import Modal from '../../components/Modal/Modal';
import { Preloader } from '../../components/Preloader/Preloader';
import Pagination from '@mui/material/Pagination';

export const CharactersPage = () => {
    const [peoples, setPeoples] = useState([]);
    const [peoplesFiltered, setPeoplesFiltered] = useState([]);
    const [filter, setFilter] = useState('All');
    const [currentPage, setCurrentPage] = useState(1)
    const [all, setAll] = useState(0);
    const [modalActive, setModalActive] = useState(false)
    const [people, setPeople] = useState({})
    const [loading, setLoading] = useState(false)

    const cardClick = (person) => {
        setPeople(person)
        setModalActive(true)
    }

    const filterHandler = () => {
        if (filter === 'All') {
            setPeoplesFiltered([]);
            return;
        }
        const newArray = peoples.filter(person => person.eye_color === filter);
        if (!newArray.length) {
            // TO DO
        } else {
            setPeoplesFiltered(newArray);
        }
    }

    const changePagination = (pageNumber) => {
        setFilter('All');
        setPeoplesFiltered([]);
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        setLoading(true);
        axios.get(`https://swapi.dev/api/people/?page=${currentPage}`)
            .then((res) => {
                setPeoples(res.data.results);
                if (all === 0) setAll(res.data.count);
                setLoading(false);
            });
    }, [currentPage, all]);

    useEffect(() => {
        filterHandler();
    }, [filter]);

    return (
        <div className={Styles.container}>
            {loading ? (<Preloader />) : (<div>
                <div>
                    <div className={Styles.language}>
                        <Language />
                    </div>
                    <h1 className={Styles.peoples}> {all} Peoples for you to choose your favorite</h1>
                    <div className={Styles.colorEyeSelect}>
                        <ColorEyeSelect filter={filter} setFilter={(color) => setFilter(color)}/>
                    </div>
                    <div className={Styles.containerCard}>
                        {(peoplesFiltered.length ? peoplesFiltered  : peoples).map((people, index) => <Card key={index} person={people} setPerson={cardClick} />)}
                    </div>
                </div>
                <div>
                    <div className={Styles.changeButton}>
                        <img src={ChangeButton} alt='ChangeButton' />
                    </div>
                </div>
                <Modal active={modalActive} setActive={setModalActive} people={people}></Modal>
            </div>)}
            {all > 0 && <div className={Styles.paginationBlock}>
                <Pagination
                    variant="outlined"
                    color="secondary"
                    count={Math.ceil(all / 10)}
                    page={currentPage}
                    onChange={(_, pageNumber) => changePagination(pageNumber)}
                />
            </div>}
        </div>
    )
}