import {store} from '../index'


export const getLocalState = () => {
    try {
      const serializedState = localStorage.getItem('readingList');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  }; 


  export const saveLocalState = () => {

    localStorage.setItem('readingList', JSON.stringify(store.getState()))
    console.log('reduxState',    store.getState())
    console.log('localstoarge', localStorage.getItem('readingList'))
  
  }