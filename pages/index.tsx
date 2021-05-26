import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { Post } from '../types/posts'
import { getPosts } from '../lib/posts'

interface HomePageProps {
  posts: Array<Post>
}

const HomePage: NextPage<HomePageProps> = ({ posts }) => {
  return (
    <main>
      <h1>Checkout documentation</h1>
      {posts.map(({ id, title }) => (
        <Link key={id} href={`/posts/${id}`}>
          <div>
            <a>{title}</a>
          </div>
        </Link>
      ))}
      <p>Will come soon...</p>
    </main>
  )
}
export default HomePage

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const posts = await getPosts()
  return {
    props: {
      posts,
    },
  }
}
