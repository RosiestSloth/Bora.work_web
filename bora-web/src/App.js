import React from 'react';

const teste = () => {
  window.open('https://www.youtube.com')
}

function MeuBotão() {
  return (
    <button onClick={teste} className='text-white bg-gray rounded-8 w-10 hover:bg-black active:bg-white active:text-black h-9 relative m-auto'
    >
      Click Me
    </button>
  );
}

export default function App() {
  return (
    <main className='bg-white h-20 absolute size-'>
      <MeuBotão />

    </main>
  );
}
