import React from 'react';
import ListItem from './component/ListItem';

function List({ animals }) {
    return (
      <ul>
        {animals.map((animal) => (
          <ListItem key={animal} animal={animal} />
        ))}
      </ul>
    );
  }

export default List;
