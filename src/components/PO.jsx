import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

export default function PO(props) {
    const deleteMe = () => {
        console.log(props.num, "gets deleted")
        props.kill(props.num);
      };

    return (
        <DragDropContainer targetKey="container" className="row" onDrop={deleteMe} dragData={{PoNum: props.num}}>
            <div style={{
                width: '100px',
                margin: '5px',
                height: '30px',
                backgroundColor: '#e4e7f7',
                borderRadius: '5px',
                textAlign: 'center'
            }}>
                {props.num}
            </div>
        </DragDropContainer>
    );
}