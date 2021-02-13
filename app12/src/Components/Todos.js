import React from 'react'

const TodosL = (props) => {
    // have access to all the TodosL that willl pass a props parameter 
    const Todos = props.tasks.map((todo, index) => {

        //we use .map we use a unique key pass index as 
        return <Todo content={todo} key={index} id={index} onDelete={props.onDelete}/>
    })
    return (
        <div className="list-wrapper">
            {Todos}

        </div>
    );
}
const Todo = (props) =>{
    return (
        <div className='list-item'>
            {props.content}
            <button class="delete" onClick={() => { props.onDelete(props.id) }} > 😵  </button>
        </div>
    )
}


export default TodosL;