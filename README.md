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

That results in:

!(example.png)[example.png]
