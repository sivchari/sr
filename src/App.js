import React from 'react';

import SvelteComponent from './svelte';
import * as Inside from './Inside.svelte';

function App(props) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>😆</h1>
      <SvelteComponent this={Inside} name={props.name} />
    </div>
  )
}

export default App;
