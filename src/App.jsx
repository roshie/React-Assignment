import { useState } from 'react';
import './App.css';
import Item from './components/item';
import Container from './components/Container';
import { DropTarget } from 'react-drag-drop-container';


function App() {

  var [state, setState] = useState({ 
    items: ['#123455', '#123455', '#123455', '#123455', '#123455', '#123455', '#123455','#123455','#123455','#123455','#123455'] 
  });
  
  const HandleHit = (e) => {
      // Add Item to the DropTarget's state
      let items = state.items.slice();   
      items.push(e.dragData.PoNum);
      setState({ items: items });
      e.dragData.kill(e.dragData.PoNum, e.dragData.container == "leftContainer");
  }

  const kill = (PoNum,container) => {
    // Delete Item from the previous DropTarget's state
    let items = state.items.slice();
    const index = items.indexOf(PoNum);
    if (index > -1 && !container) {
      items.splice(index, 1);
    }
    setState({items: items});
  };
    
  return (
    <div className="d-flex justify-content-center align-items-center my-4">
      <div className="card border-gray shadow rounded-2" style={{ width: '80vw', minHeight: '90vh'}}>
        <div className="card-body">
          <div className="row h-100 justify-content-around">
            <div className="col-12 col-md-3 text-center">
              <h5>PO Number</h5>
                <DropTarget targetKey="container" onHit={HandleHit} >
                  <div style={{minHeight: '5vh'}}>
                    {state.items.map((item, index) => {
                      return (
                        <Item key={index} type="rectangle" num={item} kill={kill} container="leftContainer">
                          {item}
                        </Item>
                      )
                    })}
                  </div>
                </DropTarget>
            </div>
            <div className="col-12 col-md-8 text-center">
              <h5>Containers</h5>
                <Container num="1"/>
                <Container num="2"/>
                <Container num="3"/>
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

