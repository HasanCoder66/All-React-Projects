import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id : 1 , 
            todoMessage : 'todo yes',
            completed : false
        }
    ],
    addTodo : (todoMessage) => {},
    updateTodo : ( id ,todoMessage) => {},
    deleteTodo : ( id ) => {},
    toggleComplete : ( id ) => {},
})

export const useTodo  =  () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider

 