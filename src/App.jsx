import { useState } from 'react';
import CodeEditor from './components/CodeEditor';

function App() {

  return (
    <main className='dark min-h-screen flex justify-center items-center bg-neutral-950 text-white'>
      <CodeEditor />
    </main>
  );
}

export default App;
