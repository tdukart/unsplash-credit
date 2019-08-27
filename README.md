# unsplash-credit

React component to display a credit for Unsplash photos.

## Usage
```bash
npm install --save unsplash-credit
```

To overlay the credit:

```jsx harmony
import UnsplashCredit from 'unsplash-credit';

<div style={{ position: 'relative', width: '400px', height: '267px', background: 'url("./berkay.jpg")' }}>
  <UnsplashCredit display="bottom-left" userName="berkaygumustekin" name="Berkay Gumustekin" />
</div>
```

That results in (this is a screenshot, so you won't see the interaction):

![dog photo](/example.png)

When the user hovers over the credit, the full credit will appear.

## Options

### `userName`
String, required.

The photographer's username (found by the '@' symbol on the photo information page)


### `name`
String, required

The photographer's real name

### `display`
String, optional

One of `inline` (default), `top-left`, `bottom-left`, `top-right`, `bottom-right`.

How to display the credit. The options other than <code>inline</code> require that the credit and the photo be in a relatively-position element, as in the example above.

### `active`
Boolean, optional

If true, forces the credit in the "hover" mode to show the photo credit. Probably desired if you're using `display="inline"`.

# Notes

This project is not affiliated with or endorsed by Unsplash. Dog photo used in the example is by Berkay Gumustekin on Unplash.
