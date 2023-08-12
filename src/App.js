import { useState, useEffect} from 'react';
import './App.css';

function App() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/get_data')
      .then(response => response.json())
      .then(Data => { const parsData = JSON.parse(Data);
        console.log(typeof parsData);
        setData(parsData);})
      .catch(error => console.error("Cannot find the file", error));
  }, []); 

  return (
    <div className="App">
      <div id="contentContainer">
        {Data.map((item, index) => (
          <table>
            <tr key={index}>{item.Abdul}</tr>
          </table>
        ))}
      </div>
    </div>
  );
}

export default App;
