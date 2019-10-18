import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
