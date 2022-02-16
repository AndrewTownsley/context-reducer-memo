import React from 'react'


const CountContext = React.createContext();

const countReducer = (state, action) => {
    switch(action.type) {
        case 'increment': {
            return {count: state.count + 1}
        }
        case 'decrement': {
            return {count: state.count - 1}
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

const CountProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(countReducer, {count: 0})
    const value = {state, dispatch}
    return <CountContext.Provider value={value}>
            {children}
           </CountContext.Provider>
}   

export {CountProvider}