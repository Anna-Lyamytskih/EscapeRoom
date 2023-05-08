import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSortGenre } from '../../store/question-process/question-process';
import { SortingTypesGenre } from '../../types/quests';

type GenreFilterProps = {
  id: SortingTypesGenre;
  value: string;
};

const GenreFilter = ({ id, value }: GenreFilterProps) => {
  const filter = useAppSelector((state) => state.QUESTS.filter);
  const dispatch = useAppDispatch();

  const handleSortClick = (sortName: SortingTypesGenre) => {
    dispatch(changeSortGenre(sortName));
  };

  return (
    <li className="filter__item">
      <input
        type="radio"
        name="type"
        id={`${id}-genre`}
        onClick={() => { handleSortClick(id); }}
        checked={filter.genre === id}
      />
      <label className="filter__label" htmlFor={`${id}-genre`}>
        <svg className="filter__icon" width="36" height="30" aria-hidden="true">
          <use xlinkHref={(id === 'all') ? '#icon-' + id + '-quests' : '#icon-' + id}></use>
        </svg><span className="filter__label-text">{value}</span>
      </label>
    </li >
  );
};

export default GenreFilter;
