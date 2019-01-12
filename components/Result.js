import React from 'react';
import Layout from './Layout';

export default ({ score }) => (
  <div style={{ height: '100%' }}>
    <Layout>
      <div className="wrapper">
        {`Final Score: ${score}.`}
      </div>
    </Layout>
    <style jsx>{`
      .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        font-size: 36px;
      }
    `}</style>
  </div>
);