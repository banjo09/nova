import React from 'react';
import { BackgroundColorProvider } from './contextFile';
import ContextContainer from './contextContainer';

export default function App() {

  return (
    <BackgroundColorProvider>
      <ContextContainer />
    </BackgroundColorProvider>
  );
}

