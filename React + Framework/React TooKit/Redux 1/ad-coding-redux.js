const redux = require('redux');         // import redux from node js 

const INITIAL_VALUE ={
    counter: 0
}
const reducer = (store =INITIAL_VALUE , action)=>{
    let newStore= store
    if(action.type === 'INCREMENT'){
       newStore= {counter: store.counter + 1}
    }else if(action.type === 'DECREMENT'){
        newStore= {counter: store.counter - 1}
    }else if(action.type === 'ADDITION'){
        newStore= {counter: store.counter + action.payload.number}
    }

    return newStore
}

const store =redux.createStore(reducer);            // create a Store from redux


const subscriber = ()=>{
    const state =store.getState()            // current state value
    console.log(state)
}

store.subscribe(subscriber);

store.dispatch({type:'INCREMENT'});

store.dispatch({type:'INCREMENT'});
store.dispatch({type:'DECREMENT'});
store.dispatch({type:'ADDITION' , payload: {number: 7} });
