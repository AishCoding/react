import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import PageDefault from './event_module/components/page_default';

//json-server --watch .\src\event_module\database_files\events.json --port 4000

function App() {
  return (
    <div className='container'>
      <div className='d-flex justify-content-center'>
        <h1 >FindMyEvents</h1>
      </div>
      <PageDefault/>
    </div>
  );
}

export default App;
