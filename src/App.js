import React from 'react';
import './App.css';
import Card from './Card';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#121212',
};

function App() {
  return (
    <div className="App">
      <Card
        title="ZillaKami"
        content="Zillakami est un artiste américain connu pour son style unique de rap et de metal. Il est né le 20 juin 1999 à Bay Shore, dans l'État de New York."
        imageUrl="https://bodyartguru.com/wp-content/uploads/2020/03/ZillaKami.jpg"
      />
    </div>
  );
}

export default App;
