import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

export default function Container(props) {
    return (
        <DropTarget 
            targetKey="container"
            onHit={() => {}} >
                <div style={{
                    backgroundColor: '#f5f5f5',
                    borderRadius: '5px',
                    textAlign: 'center',
                    margin: '10px'
                }} className="h-25">
                </div>
        </DropTarget>
    );
}