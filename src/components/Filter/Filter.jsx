import { Input, Label } from 'components/Form/Form.styled';
import React from 'react';
import { Filters } from './Filter.styled';

const Filter = ({onChange, value }) => {
    return (
      <Filters>
        <Label>
          Finde contacts by name
          <Input
            type="text"
            onChange={onChange}
            name="filter"
            value={value}
          ></Input>
        </Label>
      </Filters>
    );
};
export default Filter;
