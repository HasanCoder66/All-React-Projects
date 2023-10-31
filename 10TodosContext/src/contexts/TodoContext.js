import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id : 1 , 
            todo : 'todo yes',
            completed : false
        }
    ],
    addTodo : (todoMessage) => {},
    updateTodo : ( id ,todoMessage) => {},
    deleteTodo : ( id ) => {},
    toggleCompleted : ( id ) => {},
})

export const useTodo  =  () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider

 