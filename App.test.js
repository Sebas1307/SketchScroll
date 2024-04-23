import renderer from 'react-test-renderer'
import App from './src/app'

describe('App', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree.children.length).toBe(1)
  })
})