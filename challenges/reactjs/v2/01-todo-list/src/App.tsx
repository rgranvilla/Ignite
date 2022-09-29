import { PlusCircle } from 'phosphor-react';

import { Header } from './components/Header';
import { IconButton } from './components/IconButton';

import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello World</h1>
      <IconButton label="Criar" icon={<PlusCircle size={20} />} />
    </div>
  );
}

export { App };
