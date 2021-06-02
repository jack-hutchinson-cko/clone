import { homePageContent } from 'mocks/homepage'
import { HomePageContent } from 'types/homepage'

export const getHomePageContent = async (): Promise<HomePageContent> => {
  return new Promise((resolve) => resolve(homePageContent))
}
