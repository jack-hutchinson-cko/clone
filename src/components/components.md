# MDX components reference 

**NOTE**: Capitalisation of components is important.

## Tables

Tables should consist of:
* `<Table>` opening **and** closing component that contains all the table content.
* `<TableHead/>` self-closing component that includes the `headers` prop, which should be an object containing an array of headers as strings.
* `<TableBody>` opening **and** closing component that wraps around the rows and cells.
* `<TableRow>` opening **and** closing component.
* `<TableCell>` opening **and** closing component around the content. Content in a cell should have a line break both above and below.

### Example

```
<Table>
<TableHead headers={["Heading 1", "Heading 2"]} />
<TableBody>
<TableRow>
<TableCell>

content

</TableCell>
<TableCell>

content

</TableCell>
</TableRow>
</TableBody>
</Table>
```

### Changing the width of columns

In the `<TableHead />` component add a `sizes` prop that is an object with an array of sizes. They accept the same attributes as CSS, but try to use percentage (for responsiveness) and to only size the column that is too small. For example, imagine our first column is too small, we can say that should take up 60% of the width of the table, and the other column can fit automatically: `sizes={['60%', 'auto']}`.

You can add as many sizes to the array as there are columns.

### Adding a header column

If you have a table that has both a header row **and** header column, add the prop `withBackground` to the `<TableCell>` that contains the header. For example:

```
<TableCell withBackground>

**I am a header column cell**

</TableCell>
```

### Adding a sub-head row

Sometimes tables need more than one heading. This is when you can use `<TableSubhead>` to wrap around the sub-heading content. It accepts the following props:
* `colspan`– enter a value that is a number to indicate the amount of columns you would like it to span across.
* `rowspan` - enter a value that is a number to indicate the amount of rows you would like it to span.
* `color` – enter this as the same word values CSS takes. This will change the background colour of the cell.

#### Example

```
<TableSubhead colspan="4" color="grey">

I am a sub-heading

</TableSubhead>
```

### Adding ticks or crosses in a cell

If you have a table that is just ticks and crosses against a certain header, use the `<TableTicCell>` component and add a prop `type` with the value of either:
* `error` for a cross
* `check` for a tick

**These will be self-closing `<TableTicCell />` components.**

**NOTE**: `<TableTicCell/>` with no prop will just render a tick.

```
<TableTicCell type="error" />
<TableTicCell type="check" />
```

### Adding a subscript info icon in a cell

Sometimes cells have additional pieces of information in subscript with an 'i' icon. Use the `<InfoBox>` component to wrap around the content you would like to be subscript.

```
<TableCell>

Normal cell text

<InfoBox>

I will be additional information.

</InfoBox>

</TableCell>
```

### Remove top border of a table

For design reasons, we may need to remove the top border of a table. Simply add `withTopBorder={false}` to the `<Table>` opening component.

```
<Table withTopBorder={false}>

...

</Table>
```

---

## Tabs

Individual tab components will always have a `title` prop. Tabs are wrapped by a `<tabs>` component, with `<tab>` components in between.

**NOTE:** Be cautious of tabs, because if the spacing is not right they will not render.

## Example

```
<tabs>
<tab title="Tab 1">

Hello

</tab>
<tab title="Tab 2">

world

</tab>
</tabs>
```

---

## Code blocks

These aren't components, but it's good to highlight here. Whenever you want to show an example code block, use three back ticks (`) and specify the language of the code block, so the correct type of syntax highlighting shows. 

See a list of [supported languages](https://prismjs.com/#supported-languages)

```

```html
<h1>I am a page title</h1>
<p>Here's some HTML that will be highlighted correctly.
```

``` 

## TipBox

This component has an opening **and** closing tag with the content in between. Use the `<TipBox>` component; if you would like the box to have a title, add an optional prop of `title`. Use the prop `variant` to indicate which box you would like to render.

Tip boxes are the components with an icon, a coloured border and content inside. There are four types:

* Tip – green with a tick. `variant` prop not needed.
* Info – blue with an i icon. Use `variant="info"`.
* Note – yellow with an exclamation mark in a triangle. Use `variant="note"`.
* Warning - red with an exclamation mark in a diamond. Use `variant="warning"`.


### Example

```
<TipBox variant="info" title="I am a title">

Hello world.

</TipBox>
```

## Content panels

When we direct users to another guide at the bottom of the page, we often use the `<ContentPanel>` component with both opening **and** closing tags. You can add the following **optional** props:

* `title`
* `imgSrc` – for icons (see [marketplaces](/marketplaces))
* `withBorder={false}` – default is true, so we only need to add this if we do not want the bottom border appearing for design reasons.

### Example

```
<ContentPanel title="About onboarding sub-entities" imgSrc="/NAS/Marketplaces/onboard-sub-entities.svg" withBorder={false}>

Find out more about onboarding and verification for your sub-entities.

</ContentPanel>
```

---

## Card wrapper

Use `<CardWrapper>` when you would like a content to be contained in a card. These can be used to wrap around [content panels](#Content_panels).

They accept the following props: 
* `cardsInRow` which accepts an object that specifies how many cards should be in a row on desktop and mobile. See an example below. 
* `isWithHover` this is defaulted to true, which means it has a hover affect. When you set this to `false`, it will not have this state.

```
<CardWrapper cardsInRow={{ desktop: 2, mobile: 1 }}>
<ContentPanel title="About onboarding sub-entities" imgSrc="/NAS/Marketplaces/onboard-sub-entities.svg" withBorder={false}>

Find out more about onboarding and verification for your sub-entities.

</ContentPanel>
<ContentPanel title="About onboarding sub-entities" imgSrc="/NAS/Marketplaces/onboard-sub-entities.svg" withBorder={false}>

Find out more about onboarding and verification for your sub-entities.

</ContentPanel>
</CardWrapper>
```

---

## Images

### Standard images

Use the HTML `img` tag with a standard `src` attribute to point to the image's location.

* `withFullscreenPreview` is default true. Set to false if you shouldn't be able to open image into a bigger display.
* Src path relates to the location of the image in the public directory. Watch capitalisation, as it must match.

#### Example

`<img maxWidth={170} src="/docs/Integrate/SDKs/Android SDK/Android.png" />`

### Portrait

Images that are long but not wide, can be wrapped in a `Box` and an `Iframe` component.

`<Box>` takes the props `horizontal="sm"` and `align="center"`.

`<IFrame>` takes the props `src`, `height`, and `width`.

#### Example

```
<Box horizontal="sm" align="center">
  <Iframe
    src="/docs/four/NAS/Dashboard/View_your_sub-entities/mk_user_permissions.png"
    height='406'
    width='242'
  />
</Box>
```

---

## Videos

When you need to show a video, simply use the `<Video/>` **self-closing** component. It accepts one prop `src` which is the path to the video. 

```
<Video src="https://assets.checkout.com/docs/videos/create_merchant_id.mp4" /> 
```

---

## Accordion

When you need to hide content in a dropdown, use `<Accordion>`. This is a self **and** closing component that wraps around the content. Accordions take the prop `title`.

```
<Accordion title="View available payment methods">

I will be hidden in the dropdown.

</Accordion>
```

---

## Links

When referencing an internal link, i.e. (/integrate) use the markdown format for links. Remember to simple use `#` for anchor links within the same page.

For external links, use the `<ExternalLinks>` component. With external links, `target="_blank"` is the default behaviour to open in a new tab.

### Example

Internal Links: `[cards](/payments/payment-methods/cards)`
External Links: `<ExternalLinks href="www.google.com">Go to Google</ExternalLink>`

---

## Styled numbered lists

If you are creating a numbered list, you can make use of the styled component. The numbers will appear in a grey circle.

These styled lists consist of:
* `<List>` opening **and** closing component that wraps around all list items.
* `<ListItem>` opening **and** closing component that wraps around the content.

### Example

**NOTE:** There should be a line break above and below the content, as shown in the example below.

```
<List>
<ListIconItem>

Item 1

</ListIconItem>
<ListIconItem>

Item 2

</ListIconItem>
<ListIconItem>

Item 3

</ListIconItem>
</List>
```

---

## Inline components

### Buttons

There are two button components: 
* `<Button>`
* `<ButtonLink>` 

You are unlikely to need to use these links. They are used for the search bar, landing page and subscribe buttons. However, each component only takes one prop – `href` – which will be the link you want the button to take users to. 

If you think a button requires this style, speak to Will Cheyney (Design). 

### Request tag

When you need to reference an API method inline use the **self-closing** `<RequestTag />`. Use the prop `type` to indicate which method it should show.

For example, `<RequestTag type="post" />`

### Status tag

We try not to use API reference-like tables in our guides. However, if you feel it is required and are marking whether it is an optional or required field, use a **self-closing** `<StatusTag />` component with the prop `type` to indicate what the label should say.

For example, `<StatusTag type="required" />`

### Endpoints

This component is usually only used when we are showing the endpoint the page is referring to. This component has both opening **and** closing tags, with the endpoint in between these tags. Use `<LineCodeWrapper>` with a prop of `type` to indicate the API method.

#### Example

```

<LineCodeWrapper type="post">

`https://example.com/checkout_com/api/v1`

</LineCodeWrapper>

```
---

