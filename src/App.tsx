/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { Store } from './store/Store';
import { StoreContext } from './store';
import './App.css'
import { Editor } from './components/Editor';

function App() {
  const [store] = useState(new Store());
  return (
    <>
    <StoreContext.Provider value={store}>
         <Editor/>
    </StoreContext.Provider>
     
    </>
  )
}

export default App
