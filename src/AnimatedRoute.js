import React from 'react';
import { Route } from 'react-router-dom';

export const AnimatedRoute = (props) => (
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }}>
    <Route {...props} />
  </div>
  );


