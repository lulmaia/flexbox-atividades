import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Aula00 from './aulas/aula-00/Aula00';
import Aula01 from './aulas/aula-01/Aula01';
import Aula02 from './aulas/aula-02/Aula02';
import Aula03 from './aulas/aula-03/Aula03'; // Importando Aula 3

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/aula00" element={<Aula00 />} />
          <Route path="/aula01" element={<Aula01 />} />
          <Route path="/aula02" element={<Aula02 />} />
          <Route path="/aula03" element={<Aula03 />} /> {/* Rota para Aula 3 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
