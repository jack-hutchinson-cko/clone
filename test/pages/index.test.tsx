import renderer from 'react-test-renderer'
import IndexPage from '../../pages/index'

describe('Index page', () => {
  it('should match the snapshot', () => {
    const posts = [
      {
        userId: 1,
        id: 1,
        title: 'title',
        body: 'body',
      },
    ]
    const tree = renderer.create(<IndexPage posts={posts} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
