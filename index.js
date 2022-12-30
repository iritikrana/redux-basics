//----------------------- three core concepts of redux -------------------------------
// cake shop 

const { combineReducers } = require("redux");

// entities                                                                         activities
// shop  - stores cakes on shelf                                                    customer   - buy a cake 
// shopkeeper - at front of the shop                                                shopkeeper - remove a cake from the shelf
// customer - at the store entrance                                                            - receipt to keep track 



//----------------------- three core concepts contd. -------------------------------
// cake shop scenario                       Redux                                  purpose

// shop                                      Store                         holds the state of your application
// intention to BUY_CAKE                     Action                        describes what happened
// shopkeeper                                Reducer                       ties the store and action together

// a store that holds the state of your application
// an action that describes the changes in the state of the application 
// a reducer which actually carries out the state transition depending on the action



//----------------------- three core principals of redux -------------------------------

// 1. "the state of your whole application is stored in an object tree within a single store"
// maintain our application state in a single object which would be managed by redux store

// 2. "the only way to change the state is to emit an action, an object describing what happened"
// to update the state of your app, you need to let Redux know about that with an action
// cake shop 
// let the shopkeeper know about our action - BUY_CAKE 
// {
//     type: BUY_CAKE
// }

// 3. "to specify how the state tree is transformed by actions, you write pure reducers"
// Reducer - (previousState, action) => newState
// cake shop 
// Reducer is the shopkeeper 
// const reducer = (state, action) =>{
//     switch(action.type){
//         case BUY_CAKE: return {
//             numOfCakes: state.numOfCakes - 1
//         }
//     }
// }


// ------------------------Actions------------------------

// the only way your application can interact with the store
// carry some information from your app to the redux store 
// plain javascript objects
// have a 'type' property that indicates type of action being performed
// type property is typically defined as string constants

// an action is an object with a type property
// an action creator is the function that returns the action 

// const BUY_CAKE = 'BUY_CAKE'

// function buyCake(){
//     return {
//         type: BUY_CAKE,
//     }
// }



// ------------------------Reducers------------------------
// specify how the app state changes in response to actions sent to the store 
// function that accepts state and action as arguments, and returns the next state of the application
// (previousState, action) => newState

// const initialState = {
//     numOfCakes: 10
// }

// const reducer = (state = initialState, action) =>{
//     switch(action.type){
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         default: return state
//     }
// }


// ------------------------ Redux Store------------------------
// one store for the entire application 
// responsibilities - 
// holds application state 
// allows access to state via getState() 
// allows state to be updated via dispatch(action) 
// registers listeners via subscribe(listeners)
// handles unregistering of listeners via the function returned by subscribe(listener)

// const redux = require('redux') 
// const createStore = redux.createStore
// const store = createStore(reducer) 
// console.log('initial state', store.getState())
// const unsubscribe = store.subscribe(()=> console.log('updated state', store.getState()))
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// unsubscribe()

// output
// Initial state { numOfCakes: 10 }
// updated state { numOfCakes: 9 }
// updated state { numOfCakes: 8 }
// updated state { numOfCakes: 7 }


// cakes and icecreams
// cake shop 
// cakes stored on the shelf 
// shopkeeper to handle BUY_CAKE from customer 

// sell ice creams 
// ice creams stored in the freezer 
// new shopkeeper to handle BUY_ICECREAM from customer 


// ------------------------ Multiple reducers------------------------

// const initialCakeState = {
//     numOfCakes: 10
// }

// const initialIceCreamState = {
//     numOfIceCreams: 20
// }

// const cakeReducer = (state = initialCakeState, action) =>{
//     switch(action.type){
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         default: return state
//     }
// }

// const iceCreamReducer = (state = initialIceCreamState, action) =>{
//     switch(action.type){
//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         }
//         default: return state
//     }
// }


// ------------------------ combine reducers------------------------

// const redux = require('redux') 
// const createStore = redux.createStore
// const combineReducers = redux.combineReducers

// const rootReducer = combineReducers({
//     cake: cakeReducer,
//     iceCream: iceCreamReducer
// })

// const store = createStore(rootReducer)


// ------------------------ Middleware------------------------

// is the suggested way to extend redux with custom functionality
// provides third party extension point between dispatching an action, and the moment it reaches the reducer 
// use middleware for logging, crash reporting, performing asynchronous tasks etc 

// the middleware which we will be incorporating in our cake and icecream shop application is redux-logger 
// const redux = require('redux') 
// const reduxLogger = require('redux-logger')
// const applyMiddleware = redux.applyMiddleware

// const logger = reduxLogger.createLogger()

// const store = createStore(rootReducer, applyMiddleware(logger))


// ------------------------ Async Actions------------------------

// Actions 
// synchronous actions 
// as soon as action was dispatched, the state was immediately updated. 
// if you dispatch the BUY_CAKE action, the numOfCakes was right away decremented by 1.
// same with BUY_ICECREAM action as well

// asynchronous actions
// asynchronous api calls to fetch data from an endpoint and use that data in your application

// our application 
// fetches a list of user from an api endpoint and stores it in the redux store 
// State ?
// Actions ?
// Reducer ?

// State 
// state = {
//     loading: true,
//     data: [],
//     error:''
// }
// loading - display a loading spinner in your component 
// data - list of users 
// error - Display error to the user 

// Actions 
// FETCH_USERS_REQUEST - fetch list of users 
// FETCH_USERS_SUCCESS - fetched successfully
// FETCH_USERS_FAILURE - error fetching the data

// Reducers 
// case: FETCH_USERS_REQUEST
//       loading: true 

// case: FETCH_USERS_SUCCESS
//       loading: false 
//       users: data (from API)
      
// case: FETCH_USERS_FAILURE  
//       loading: false 
//       error: error ( from API )    


