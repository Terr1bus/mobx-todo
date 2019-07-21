import React, { ReactElement, FC } from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';

import StoreContext from '../../context';
import { StoreInterface } from '../../stores';
import { Filter, allFilters } from '../../stores/TodosStore';

import styles from './Filters.module.css';

const Filters: FC = (): ReactElement<HTMLDivElement> => {
  const { todosStore: { setFilter, currentFilter } } = React.useContext<StoreInterface>(StoreContext);

  const onClick = (filterName: Filter): void => {
    if (filterName !== currentFilter) {
      setFilter(filterName);
    }
  };

  return (
    <div className={styles.filters}>
      {allFilters.map((filter: Filter): ReactElement<HTMLButtonElement> => (
        <button
          key={filter}
          type="button"
          onClick={(): void => onClick(filter)}
          className={cn(
            styles.filter,
            { [styles.filter_active]: filter === currentFilter },
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default observer(Filters);