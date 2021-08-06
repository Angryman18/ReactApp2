import Form from "./Form";
import ListItem from "./ListItem";
import React from 'react';

const Todo = (props) => {

    const defaultValue = [
        {key: 'e1', title: 'First Value'},
    ]

    const [data, setData] = React.useState(defaultValue)

    const textData = (value) => {

        if (value.trim().length > 0) {
            const object = {key: Math.random().toString(), title: value}
        setData((preState) => {
            return [object, ...preState]
        })
    }
        
}

    const singleId = (id) => {
        const filterData = data.filter(item => { return item.key != id});
        setData(filterData)
        console.log(filterData)  
    }

    return (
        <div>
            <Form text={textData}/>
            {
                data.map((single) => {
                    return <ListItem singleId={singleId} key={single.key} id={single.key} data={single.title} />
                })
            }
        </div>
    );
}

export default Todo;