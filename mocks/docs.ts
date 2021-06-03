import { DocContentItem, DocContentItemType } from 'types/content'

const getDefaultContent = (name: string): DocContentItem[] => [
  {
    id: 1,
    type: DocContentItemType.TEXT,
    data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    params: {},
  },
  {
    id: 2,
    type: DocContentItemType.ANCHOR,
    data: `Anchor ${name} 1`,
    params: { anchorHref: 'anchor1' },
  },
  {
    id: 3,
    type: DocContentItemType.TEXT,
    data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    params: {},
  },
  {
    id: 4,
    type: DocContentItemType.ANCHOR,
    data: `Anchor ${name} 2`,
    params: { anchorHref: 'anchor2' },
  },
  {
    id: 5,
    type: DocContentItemType.TEXT,
    data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    params: {},
  },
  {
    id: 6,
    type: DocContentItemType.ANCHOR,
    data: `Anchor ${name} 3`,
    params: { anchorHref: 'anchor3' },
  },
  {
    id: 7,
    type: DocContentItemType.TEXT,
    data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    params: {},
  },
  {
    id: 8,
    type: DocContentItemType.ANCHOR,
    data: `Anchor ${name} 4`,
    params: { anchorHref: 'anchor4' },
  },
  {
    id: 9,
    type: DocContentItemType.TEXT,
    data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    params: {},
  },
]

export const docsItems = [
  {
    name: 'Payment',
    url: 'payments',
    id: 1,
    parentId: null,
    content: getDefaultContent('Payment'),
  },
  {
    name: 'Accept payment',
    url: 'accept-payments',
    id: 2,
    parentId: 1,
    content: getDefaultContent('Accept payment'),
  },
  {
    name: 'Request a card payment',
    url: 'request-a-card-payment',
    id: 3,
    parentId: 2,
    content: getDefaultContent('Request a card payment'),
  },
  {
    name: 'Use an existing card',
    url: 'use-an-existing-card',
    id: 4,
    parentId: 2,
    content: getDefaultContent('Use an existing card'),
  },
  {
    name: 'Hot sale',
    url: 'hot-sale',
    id: 5,
    parentId: null,
    content: getDefaultContent('Hot sale'),
  },
  {
    name: 'Best deals',
    url: 'best-deals',
    id: 6,
    parentId: 5,
    content: getDefaultContent('Best deals'),
  },
  {
    name: 'Only today',
    url: 'today-offer',
    id: 7,
    parentId: 5,
    content: getDefaultContent('Only today'),
  },
  {
    name: 'News',
    url: 'news',
    id: 8,
    parentId: null,
    content: getDefaultContent('News'),
  },
]
