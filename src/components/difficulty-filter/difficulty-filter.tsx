import { SortingTypesLevel } from '../../constants';
import { useAppDispatch } from '../../hooks';
import { changeSortLevel } from '../../store/question-process/question-process';

type FilterItemProps = {
  id: string;
  value: SortingTypesLevel;
}

const FilterItem = ({ id, value }: FilterItemProps) => {
  const dispatch = useAppDispatch();

  const handleSortClick = (sortName: SortingTypesLevel) => {
    console.log(handleSortClick)
    dispatch(changeSortLevel(sortName));
  };

  return (
    <li className="filter__item">
      <input type="radio" name="level" id={`${id}-level`} onClick={() => { handleSortClick(id); }} />
      <label className="filter__label" htmlFor={`${id}-level`}><span className="filter__label-text">{value}</span>
      </label>
    </li>
  );
};


export default FilterItem;
