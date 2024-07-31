import React, { useState, useEffect } from 'react';

function linkBora () {
  window.open('https://bora.work/map', '_blank');
};

//Pega as horas atuais do servidor e escreve no HTML

const Horas = () => {
  const horas = new Date().getHours().toString()
  const minutos = new Date().getMinutes()
  return (
    <p className='text-white mr-4'>
      {horas}:{minutos}
    </p>
  )
}

export default function App() {
  return (
    <main>
      <header className='backdrop-blur-lg bg-white/10 border-white/20 rounded-8 p-1 m-4 shadow- shadow-black'>
        <nav className='flex items-center m-2'>
          <button onClick={linkBora} className='mr-auto hover:bg-white/10 shadow-mg
          d hover:shadow-black rounded-8'>
            <img className='size-10' src='/logo-bora.png' alt='Logo do bora'/>
          </button >
            <Horas />
          <button className='text-white/50 hover:text-white hover:bg-white/10 rounded-8'>
            <p>
              Explorar
            </p>
            <img src='/seta-link.svg' className='size-4'/>
          </button>
        </nav>
      </header>
      <section>
        <div className=''>
          <h2 className=''>
            Eventos encantadores começam aqui.
          </h2>
          <p>
            Crie uma página de evento, convide amigos e venda ingressos. Organize um evento memorável hoje.
          </p>
          <button>
          
          </button>
        </div>
        <video autoplay muted loop typeof='video/webm' src='/phone-dark.webm' className='size-80 ml-auto mr-3/6 mt-20'/>
      </section>
    </main>
  );
}