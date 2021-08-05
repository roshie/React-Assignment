import './App.css';
import PO from './components/PO';
import Container from './components/Container';
import { DropTarget } from 'react-drag-drop-container';


function App() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
      <div className="card border-gray shadow rounded-2" style={{ width: '80vw', height: '80vh'}}>
        <div className="card-body">
          <div className="row h-100">
            <div className="col-12 col-md-3">
              <h5>PO Number</h5>
                <DropTarget targetKey="container">
                    <PO PoID="#123455"/>
                    <PO PoID="#123455"/>
                    <PO PoID="#123455"/>
                    <PO PoID="#123455"/>
                    <PO PoID="#123455"/>
                    <PO PoID="#123455"/>
                </DropTarget>
            </div>
            <div className="col-12 col-md-8">
              <h5>Containers</h5>
                  <Container name=""/>
                  <Container name=""/>
                  <Container name=""/>
            </div>
          </div>
          
        </div>
        <div className="card-footer d-flex justify-content-end">
          <button className="btn btn-primary">Proceed</button>
        </div>
      </div>
    </div>
  );
}

export default App;

