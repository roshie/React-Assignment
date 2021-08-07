import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

export default function Item(props) {
    var style = {
        width: (props.type == 'square' ? '50px': '100px'),
        margin: '5px',
        height: (props.type == 'square' ? '50px': '30px'),
        backgroundColor: (props.type == 'square' ? '#a4addb': '#e4e7f7'),
        borderRadius: '5px',
        textAlign: 'center'
    };
    return (
        <DragDropContainer targetKey="container" className="row" dragData={{PoNum: props.num, kill: props.kill, container: props.container}}
         >
            <div style={style}>
                {props.num}
            </div>
        </DragDropContainer>
    );
}