import { useEffect, useRef } from 'react';
import CodeEditor from './components/CodeEditor';
import { fonts, themes } from './options';
import useStore from './store';
import { cn } from './lib/utils';
import { Card, CardContent } from './components/ui/card';
import ExportOptions from './components/controls/ExportOptions';

function App() {
  const theme = useStore((state) => state.theme);
  const padding = useStore((state) => state.padding);
  const fontStyle = useStore((state) => state.fontStyle);
  const showBackground = useStore((state) => state.showBackground);

  const editorRef = useRef(null);


  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.size === 0) return;
    const state = Object.fromEntries(queryParams);

    useStore.setState({
      ...state,
      code: state.code ? atob(state.code) : '',
      autoDetectLanguage: state.autoDetectLanguage === 'true',
      darkMode: state.darkMode === 'true',
      fontSize: Number(state.fontSize || 18),
      padding: Number(state.padding || 64),
    });
  }, []);

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

      <div
        className={cn(
          'overflow-hidden mb-2 transition-all ease-out',
          showBackground ? themes[theme].background : 'ring ring-neutral-900'
        )}
        style={{ padding }}
        ref={editorRef}
      >
        <CodeEditor />
      </div>

      <Card className='fixed bottom-16 py-6 px-8 mx-6 bg-neutral-900/90 backdrop-blur'>
        <CardContent className='flex flex-wrap gap-6 p-0'>
          <div className='w-px bg-neutral-800' />
          <div className='place-self-center'>
            <ExportOptions targetRef={editorRef} />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

export default App;
