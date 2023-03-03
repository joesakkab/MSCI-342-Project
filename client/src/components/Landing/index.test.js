import React from 'react';
import renderer from 'react-test-renderer';
import Landing from '../Landing';

describe('LandingPage', () => {
  test('renders Sign In and Sign Up buttons', () => {
    const component = renderer.create(<Landing />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
