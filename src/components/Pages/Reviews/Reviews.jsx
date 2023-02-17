import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchReviewsMovie } from 'components/api/themoviedb';

import Loader from 'components/Loader/Loader';
import styles from '../Reviews/reviews.module.scss';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);

      try {
        const { data } = await fetchReviewsMovie(id);
        setReviews(data.results);
      } catch ({ response }) {
        console.log(response.data.massage);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews(id);
  }, [id]);

  const reviewList = reviews?.map(({ id, author, content }) => {
    return (
      <li key={id}>
        <p className={styles.author}>Author: {author}</p>
        <p>{content}</p>
      </li>
    );
  });

  return (
    <div>
      {loading && <Loader />}
      <ul>{reviewList}</ul>
    </div>
  );
};

export default Reviews;
