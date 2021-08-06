import { createRef, useState } from 'react';
import './App.css';
import PO from './components/PO';
import Container from './components/Container';
import { DropTarget } from 'react-drag-drop-container';


function App() {

  var [state, setState] = useState({ items: ['#123454', '#123455', '#123456', '#123457', '#123458', '#123459', '#123459','#123459','#123459','#123459','#123459'] });

    const HandleHit = (e) => {
        let items = state.items.slice();   
        items.push(e.dragData.PoNum);
        setState({ items: items });
        e.containerElem.style.display = "none"
    }

    const kill = (uid) => {
      let items = state.items.slice();
      const index = items.findIndex((item) => {
        return item.uid == uid
      });
      if (index !== -1) {
        items.splice(index, 1);
      }
      setState({items: items});
    };
    
  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
      <div className="card border-gray shadow rounded-2" style={{ width: '80vw', height: '90vh'}}>
        <div className="card-body">
          <div className="row h-100 justify-content-around">
            <div className="col-12 col-md-2">
              <h5>PO Number</h5>
                <DropTarget targetKey="container" onHit={HandleHit}>
                  <div style={{height: '100%'}}>
                    {state.items.map((item, index) => {
                      return (
                        <PO key={index} num={item} kill={kill}>
                          {item}
                        </PO>
                      )
                    })}
                  </div>
                </DropTarget>
            </div>
            <div className="col-12 col-md-8">
              <h5>Containers</h5>
                  <Container name="" />
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

