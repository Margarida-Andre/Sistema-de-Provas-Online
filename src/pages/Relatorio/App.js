import React from 'react'
import api from '../../services/api';
//import './App.css';

import {ExportToExcel} from './ExportToExcel'

function App() {
  const [data, setData] = React.useState([])
  const fileName = "meuArquivoProva"; // here enter filename for your excel file

  React.useEffect(() => {
    const fetchData = () =>{
     api.get('/provaAll').then(r => setData(r.data) )
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <ExportToExcel apiData={data} fileName={fileName} />
    </div>
  );
}

export default App;
