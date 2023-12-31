import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDogs,
  getTemperaments,
  FilterByTemperament,
  FilterByWeight,
  orderByName,
  filteredByOrigin
} from "../../redux/actions/actions";
import { Link } from "react-router-dom";
import Card from "../CARD/Card";
import Paginado from "../PAGINADO/Paginado";
import SearchBar from '../SEARCH BAR/SearchBar';
import styles from '../HOME/Home.module.css';

function Home() {
  const dispatch = useDispatch();
  const dogs = useSelector(state => state.dogs);
  const temperamentsState = useSelector(state => state.temperaments);

  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 8;

  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  }, [dispatch]);

  const handleFilterByTemperament = (e) => {
    e.preventDefault();
    dispatch(FilterByTemperament(e.target.value));
  };

  const handleFilterByWeight = (e) => {
    e.preventDefault();
    dispatch(FilterByWeight(e.target.value));
    setCurrentPage(1);
  };

  const handleFilterByBreed = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
  };

  const handleFilteredByOrigin = (e) => {
    e.preventDefault();
    dispatch(filteredByOrigin(e.target.value));
  };

  const currentDogs = useMemo(() => {
    return dogs.slice(indexOfFirstDog, indexOfLastDog);
  }, [dogs, indexOfFirstDog, indexOfLastDog]);
  

  return (
    <div className={styles.div}>
      <Link to="/" className={styles.text}>🐾 Regresar</Link>
      <div className={styles.labelContainer}>
        <label className={styles.labelCreate}>¿Quieres crear un perro?</label>
      </div>
      <Link to="/form" className={styles.ButtonCreate}>
        Create
      </Link>
      <SearchBar className={styles.SearchBar} />
      <div className={styles.filterbar}>
        <select onChange={(event) => handleFilterByBreed(event)}>
          <option value="asc">Ascending by Breed</option>
          <option value="desc">Descending by Breed</option>
        </select>
        <select onChange={(event) => handleFilterByWeight(event)}>
          <option value="max">Max-Min weight</option>
          <option value="min">Min-Max weight</option>
        </select>
        <select onChange={(event) => handleFilteredByOrigin(event)}>
          <option value="all">All dogs</option>
          <option value="created">Created</option>
          <option value="api">Existent</option>
        </select>
        <select onChange={(event) => handleFilterByTemperament(event)}>
          <option value="All">All Temperaments</option>
          {temperamentsState?.map((t, index) => (
            <option key={index} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.cardContainer}>
        {currentDogs?.map((dog) => (
          <Card
            key={dog.id}
            id={dog.id}
            name={dog.name}
            image={dog.image}
            weight={dog.weight}
            temperaments={dog.temperaments}
            temperament={dog.temperament}
            createInDb={dog.createInDb}
            className={styles.card}
          />
        ))}
      </div>
      <div style={{ marginBottom: '50px', marginTop: '50px' }}>
        <Paginado
          dogsPerPage={dogsPerPage}
          dogs={dogs.length}
          paginado={paginado}
        />
      </div>
      <>
        <br />
        <h3 className={styles.currentPage}>Page: {currentPage} </h3>
      </>
    </div>
  );
}

export default Home;
