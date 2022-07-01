
import React from 'react';
import styled from 'styled-components';
import Dashboard from './components/Dashboard/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <Div>
      <Sidebar/>
      <Dashboard/>
    </Div>
  );
}

const Div = styled.div``;

export default App;
