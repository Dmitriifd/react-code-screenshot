import { useState } from 'react';
import CodeEditor from './components/CodeEditor';
import { fonts, themes } from './options';
import useStore from './store';

function App() {
  const theme = useStore((state) => state.theme);
  const padding = useStore((state) => state.padding);
  const fontStyle = useStore((state) => state.fontStyle);
  const showBackground = useStore((state) => state.showBackground);

  return (
    <main className='dark min-h-screen flex justify-center items-center bg-neutral-950 text-white'>
      <link
        rel='stylesheet'
        href={themes[theme].theme}
        crossOrigin='anonymous'
      />
      <link
        rel='stylesheet'
        href={fonts[fontStyle].src}
        crossOrigin='anonymous'
      />

      <CodeEditor />
    </main>
  );
}

export default App;
