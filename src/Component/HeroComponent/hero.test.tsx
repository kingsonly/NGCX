/**
 * @jest-environment jsdom
 */

 import '@testing-library/jest-dom'


import renderer from 'react-test-renderer';
import {render, screen, fireEvent, queryByLabelText, queryByTestId} from '@testing-library/react'


import React from 'react';
import Hero from './index';


describe('should render component', ()=>{

    it('renders correctly', () => {
        const tree = renderer
          .create(<Hero/>)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });


    test('render email input', () => {
        render(<Hero />);
        const element = screen.getByTestId('email-input')
        expect(element).toHaveAttribute("type", "search");

      });
     
})





 