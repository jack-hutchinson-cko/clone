import { FC } from 'react'
import Link from 'next/link'
import { IconActionAlert } from '@cko/icons'
import { PrimaryButton } from '@cko/primitives'

type Props = {
  sideBarLinks: { link: string; name: string }[]
}

const SideBar: FC<Props> = ({ sideBarLinks }) => {
  return (
    <aside>
      <h1>
        SideBar <IconActionAlert />
      </h1>
      <PrimaryButton onClick={() => alert('👻')}>Primary button</PrimaryButton>
      {sideBarLinks.map(({ link, name }) => (
        <li key={link}>
          <Link href={link}>
            <a>{name}</a>
          </Link>
        </li>
      ))}
    </aside>
  )
}

export default SideBar
