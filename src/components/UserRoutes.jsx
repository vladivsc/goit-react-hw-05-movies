import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './Loader/Loader';

const Home = lazy(() => import('./Pages/Home/Home'));
const Movies = lazy(() => import('./Pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./Pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Pages/Cast/Cast'));
const Reviews = lazy(() => import('./Pages/Reviews/Reviews'));
const NotFound = lazy(() => import('./Pages/NotFound/NotFound'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
