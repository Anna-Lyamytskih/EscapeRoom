import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSortLevel } from '../../store/question-process/question-process';
import { SortingTypesLevel } from '../../types/quests';

type FilterItemProps = {
  id: SortingTypesLevel;
  value: string;
};

const FilterItem = ({ id, value }: FilterItemProps) => {
  const filter = useAppSelector((state) => state.QUESTS.filter);
  const dispatch = useAppDispatch();

  const handleSortClick = (sortName: SortingTypesLevel) => {
    dispatch(changeSortLevel(sortName));
  };

  return (
    <li className="filter__item">
      <input type="radio"
        defaultValue=''
        name="level"
        id={`${id}-level`}
        checked={filter.level === id}
        onChange={() => { handleSortClick(id); }}
      />
      <label className="filter__label" htmlFor={`${id}-level`}><span className="filter__label-text">{value}</span>
      </label>
    </li>
  );
};

export default FilterItem;
