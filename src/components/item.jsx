import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

export default function Item(props) {
    const deleteMe = () => {
        console.log(props.num, "gets deleted")
        props.kill(props.num);
      };

    return (
        <DragDropContainer targetKey="container" onDrop={deleteMe} className="row" dragData={{PoNum: props.num}}
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