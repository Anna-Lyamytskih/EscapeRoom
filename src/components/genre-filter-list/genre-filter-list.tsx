import { listGenre } from '../../constants';
import GenreFilter from '../genre-filter/genre-filter';

const GenreFilterList = () => (
  <ul className="filter__list">
    {listGenre.map((genre) => (<GenreFilter id={genre.value} value={genre.title} key={genre.value} />))}
  </ul>
);

export default GenreFilterList;
