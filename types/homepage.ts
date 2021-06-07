type HomePageIntro = {
  title: string
  description: string
  getStartedUrl: string
  imageUrl: string
}

type HomePageBlockNames = 'payments' | 'the-hub'

type HomePageBlockLinks = {
  id: number
  name: string
  url: string
}

type HomePageBlock = {
  id: number
  title: string
  description: string
  imageUrl: string
  links: HomePageBlockLinks[]
}

export type HomePageBlockLinksData = {
  [key in HomePageBlockNames]: HomePageBlockLinks[]
}

export type HomePageContent = {
  intro: HomePageIntro
  blocks: HomePageBlock[]
}
