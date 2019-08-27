import React from 'react';

import UnsplashCredit from 'unsplash-credit';

const App = () => (
  <div className="container">
    <h1>Unsplash Credit</h1>
    <h2>
      Basic Usage
    </h2>
    <div className="card bg-light" style={{ marginBottom: '.5em' }}>
      <div className="card-header">
        Import
      </div>
      <pre className="card-body">
        import UnsplashCredit from 'unsplash-credit';
      </pre>
    </div>
    <div className="card bg-light" style={{ marginBottom: '.5em' }}>
      <div className="card-header">
        Use
      </div>
      <pre className="card-body">
        &lt;UnsplashCredit userName="user-name" name="Photographer's Name" /&gt;
      </pre>
    </div>
    <h2>
      Options
    </h2>
    <dl>
      <dt>
        <code>userName</code>
        {' '}
        string, required
      </dt>
      <dd>
        The photographer's username (found by the '@' symbol on the photo information page)
      </dd>

      <dt>
        <code>name</code>
        {' '}
        string, required
      </dt>
      <dd>
        The photographer's real name
      </dd>
      <dt>
        <code>display</code>
        {' '}
        string
      </dt>
      <dd>
        One
        of <code>inline</code> (default), <code>top-left</code>, <code>bottom-left</code>, <code>top-right</code>, <code>bottom-right</code>.
        <br />
        How to display the credit. The options other than <code>inline</code> require that the credit and the photo be
        in a relatively-position element.
      </dd>
      <dt>
        <code>active</code>
        {' '}
        boolean
      </dt>
      <dd>
        Show the photographer's name. Otherwise, it will display when the user hovers on the credit icon.
      </dd>
    </dl>
    <h2>Example</h2>
    <div style={{ position: 'relative', width: '400px', height: '267px', background: 'url("./berkay.jpg")' }}>
      <UnsplashCredit display="bottom-left" userName="berkaygumustekin" name="Berkay Gumustekin" />
    </div>
    <div className="card bg-light">
      <pre className="card-body">
        &lt;div style=&#123;&#123; position: 'relative', width: '400px', height: '267px', background: 'url(&quot;./berkay.jpg&quot;)' }}&gt;
        {'\n'}
        {'  '}
        &lt;UnsplashCredit display=&quot;bottom-left&quot; userName=&quot;berkaygumustekin&quot; name=&quot;Berkay Gumustekin&quot; /&gt;
        {'\n'}
        &lt;/div&gt;
      </pre>
    </div>
  </div>
);

export default App;
