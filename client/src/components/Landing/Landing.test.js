import React from 'react';
import renderer from 'react-test-renderer';
import Landing from './index';

it('Landing Page Renders', () => {
  const tree = renderer
    .create(<Landing />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});