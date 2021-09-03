import todoItem from '../css/todoitem.module.css';
import todolist from '../css/todolist.module.css';

function TodoItem({todo, removeTodo}) {
    return (
        <li className={todoItem['todo-item']}>
            <input type="checkbox" className={todoItem.check} />
            <mark className={todoItem.text}>{todo.todoContent}</mark>
            <button type="button" className={todoItem.del} onClick={
                function(){
                    return(
                        removeTodo(todo.id)
                    );
                }
            }>
                <img src="add_button.svg" alt="" className={todoItem.img} />
            </button>
        </li>
    );
}

function TodoList ({todoArray, removeTodo}) {
    return(
        <section className={todolist.section}>
            <ul className="todo-list">
                {
                    todoArray.map(function(todo){
                        return(
                            <TodoItem todo={todo} key={todo.id} removeTodo={removeTodo} />
                        );
                    })
                }
            </ul>
        </section>
    );

}

export default TodoList;