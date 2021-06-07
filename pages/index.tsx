import { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Box,
  Flex,
  PrimaryButton,
  TextHeadingOne,
  TextHeadingTwo,
  Text,
  List,
  ListItem,
  Link as PrimitiveLink,
} from '@cko/primitives'
import { IconActionArrowRight } from '@cko/icons'
import { getHomePageContent } from 'lib/homePageContent'
import { HomePageContent } from 'types/homepage'
import styles from './index.module.scss'

type Props = HomePageContent

const HomePage: NextPage<Props> = ({ intro, blocks }) => {
  return (
    <>
      <Flex justifyContent="space-between" className={styles.introWrapper}>
        <Box className={styles.contentBlock}>
          <TextHeadingOne className={styles.introTitle}>{intro.title}</TextHeadingOne>
          <Text className={styles.introDescription}>{intro.description}</Text>
          <Link href={intro.getStartedUrl}>
            <PrimaryButton className={styles.getStartedLink}>Get started</PrimaryButton>
          </Link>
        </Box>
        <Box className={styles.contentBlock}>
          <Image src={intro.imageUrl} width={480} height={335} />
        </Box>
      </Flex>
      <Flex justifyContent="space-between" className={styles.blocksWrapper}>
        {blocks.map(({ id, title, imageUrl, description, links = [] }) => (
          <Box key={id} className={styles.contentBlock}>
            <Image src={imageUrl} width={465} height={190} alt={title} />
            <TextHeadingTwo className={styles.blockTitle}>{title}</TextHeadingTwo>
            <Text className={styles.blockDescription}>{description}</Text>
            <List className={styles.blockList}>
              {links.map(({ id, name, url }) => (
                <ListItem key={id}>
                  <Link href={url}>
                    <PrimitiveLink className={styles.blockLink}>
                      {name}
                      <IconActionArrowRight />
                    </PrimitiveLink>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Flex>
    </>
  )
}

export default HomePage

export const getStaticProps: GetStaticProps = async () => {
  const { intro, blocks } = await getHomePageContent()

  return {
    props: {
      intro,
      blocks,
    },
  }
}
