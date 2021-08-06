import './style.css';



const ListItem = (props) => {

    const deleteData = (id) => {
        props.singleId(id)
    }

    return (
            <div className="TodoItem">
                <div onClick={() => deleteData(props.id)} className="listitem">
                    {props.data}
                </div>
            </div>
    );
}


export default ListItem;