import React from 'react';
import { render } from '@testing-library/react';
import SearchEngine from './FlightSearchEngine/SearchEngine';
describe("<SearchEngine />", () => {
  it("should create an entry in component state", () => {
    // given
    const component = render(<SearchEngine />);
    const form = component.find('input');
    // when
    form.props().onChange({target: {
       name: 'orginName',
       value: 'BOM'
    }});
    expect(component.state('input')).toBeDefined();
});  });