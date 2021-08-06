import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

export default function Item(props) {

    return (
        <DragDropContainer targetKey="container" className="row" dragData={{PoNum: props.num, items: props.items}}
         >
            <div style={{
                width: '50px',
                margin: '5px',
                height: '50px',
                backgroundColor: '#e4e7f7',
                borderRadius: '5px',
                textAlign: 'center'
            }}>
                {props.num}
            </div>
        </DragDropContainer>
    );
}