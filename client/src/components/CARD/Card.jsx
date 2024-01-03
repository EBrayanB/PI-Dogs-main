import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../CARD/Card.module.css';
import { deleteDog } from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';

const Card = ({ id, name, weight, image, temperaments, temperament, createInDb }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleDelete = async () => {
      try {
        setIsDeleting(true);
        await dispatch(deleteDog(id));
        setIsDeleted(true);
      } catch (error) {
        console.error(error);
      } finally {
        setIsDeleting(false);
      }
    };

    if (isDeleting) {
      handleDelete();
    }
  }, [dispatch, id, isDeleting]);

  const handleDeleteDog = () => {
    setIsDeleting(true);
  };

  return (
    <div className={styles.card}>
      <Link className={styles.Link} to={`/dogs/${id}`}>
        <h3 className={styles.title}>{name}</h3>
        <div className={styles.text}>
          {createInDb && Array.isArray(temperaments) && temperaments.length ? (
            <p>Temperaments: {temperaments.join(', ')}</p>
          ) : Array.isArray(temperament) && temperament.length ? (
            <p>Temperaments: {temperament?.join(', ')}</p>
          ) : null}
          <p>Weight:{weight}</p>

          <div>
            <img className={styles.circleImg} src={image} alt={name} />
          </div>
        </div>
      </Link>
      {createInDb && (
        <button className={styles.ButtonDelete} onClick={handleDeleteDog}>
          DELETE
        </button>
      )}
      {isDeleted && <p>Dog was deleted successfully!</p>}
    </div>
  );
};

export default Card;

