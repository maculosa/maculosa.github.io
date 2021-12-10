import React from 'react';
import Layout from '@theme/Layout';

function Hello() {
  return (
    <Layout title="Hello" noFooter >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px'
        }}
      >
        <div>
          <h2>Hello</h2>
        </div>
        <p>
          Edit <code>pages/helloReact.tsx</code> and save to reload.
        </p>
      </div>
    </Layout>
  )
}

export default Hello;
