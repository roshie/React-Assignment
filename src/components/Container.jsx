import { DropTarget } from 'react-drag-drop-container';
import { useState } from 'react';
import Item from './item';

export default function Container(props) {
    var [state, setState] = useState({ items: [] });

    const HandleHit = (e) => {
        // Add Item to the DropTarget's state
        let items = state.items.slice(); 
        if (items.length < 10)  {    
            items.push(e.dragData.PoNum);
            setState({ items: items });
            e.dragData.kill(e.dragData.PoNum, e.dragData.container == "container"+props.num);
        }
    }
    const kill = (PoNum, container) => {
        // Delete Item from the previous DropTarget's state
        let items = state.items.slice();
        const index = items.indexOf(PoNum);
        if (index > -1  && !container) {
            items.splice(index, 1);
        }
        setState({items: items});
    };

    return (
        <DropTarget 
            targetKey="container"
            onHit={HandleHit} >
                <div style={{
                    backgroundColor: '#f5f5f5',
                    borderRadius: '5px',
                    textAlign: 'center',
                    margin: '0.5rem',
                    minHeight: '20vh'
                }} className="container h-auto">
                    {state.items.map((item, index) => {
                        return (
                            <Item key={index} type="square" container={"container"+props.num} num={item} kill={kill}>
                                {item}
                            </Item>
                        )
                  })}
                </div>
        </DropTarget>
    );
}