import { FunctionComponent } from 'react'
import Link from 'next/link'

type Props = {
  sideBarLinks: Array<{ link: string; name: string }>
}

const SideBar: FunctionComponent<Props> = ({ sideBarLinks }) => (
  <aside>
    <h1>SideBar</h1>
    {sideBarLinks.map(({ link, name }) => (
      <li key={link}>
        <Link href={link}>
          <a>{name}</a>
        </Link>
      </li>
    ))}
  </aside>
)

export default SideBar
