import React from 'react';
import Header from './Components/Header';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import Footer from './Components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <ListEmployeeComponent />
      <Footer />
    </div>
  );
};

export default App;
