import renderer from 'react-test-renderer';
import NavBar from '.';

it('Navigation Bar Renders', () => {
  const tree = renderer
    .create(<NavBar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});