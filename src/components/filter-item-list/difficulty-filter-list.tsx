import { listLevel } from '../../constants';
import FilterItem from '../difficulty-filter/difficulty-filter';

const FilterItemList = () => (
  <ul className="filter__list">
    {listLevel.map((level) => (<FilterItem id={level.value} value={level.title} key={level.value} />))}
  </ul>
);

export default FilterItemList;
