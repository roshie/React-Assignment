import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import { createRef, useState } from 'react';
import Item from './item';

export default function Container(props) {
    var [state, setState] = useState({ items: [] });

    const HandleHit = (e) => {
        // let prevItems = e.dragData.items.slice();
        // var index = prevItems.indexOf(e.dragData.PoNum);
        // if (index > -1) {
        //   prevItems.splice(index, 1);
        //   console.log('PO dropped: ', e.dragData.PoNum)
        // }
        let items = state.items.slice();     
        items.push(e.dragData.PoNum);
        setState({ items: items });
        e.containerElem.style.display = "none"

    }
    // const removeData = (e) => {
    //     var item = e.dragData.PoNum;
    //     let items = state.items.slice();
    //     var index = items.indexOf(item);
    //     if (index > -1) {
    //         items.splice(index, 1);
    //         setState({ items: items });
    //     }
    //     console.log('dropped', item , items)

    // }

    return (
        <DropTarget 
            targetKey="container"
            onHit={HandleHit} >
                <div style={{
                    backgroundColor: '#f5f5f5',
                    borderRadius: '5px',
                    textAlign: 'center',
                    margin: '10px',
                    height: '30%'
                }}>
                    {state.items.map((item, index) => {
                        return (
                        <Item key={index} num={item} items={state.items}>
                            {item}
                        </Item>
                        )
                  })}
                </div>
        </DropTarget>
    );
}