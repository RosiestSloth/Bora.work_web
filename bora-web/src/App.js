import React, { useState, useEffect } from 'react';

function linkBora () {
  window.open('https://bora.work/map', '_blank');
};

function LinkLuma() {
  window.open('https://luma-dev.com/', '_blank')
}

//Pega as horas e minutos atuais do servidor e escreve no HTML
const Horas = () => {
  const horas = new Date().getHours().toString().padStart(2, '0')
  const minutos = new Date().getMinutes().toString().padStart(2, '0')
  return (
    <p className='text-white/50 mr-5'>
      {horas}:{minutos} BRT
    </p>
  )
}

export default function App() {
  return (
    <main>
      <header className='backdrop-blur-lg bg-white/10 border-white/20 rounded-8 p-1 m-4 shadow-black'>
        <nav className='flex items-center m-2'>
          <button onClick={linkBora} className='mr-auto  shadow-mg rounded-8 transition duration-300 ease-in-out transform hover:bg-white/20'>
            <img className='size-10' src='/logo-bora.png' alt='Logo do bora'/>
          </button >
            <Horas />
          <button className='text-white/50 hover:text-white rounded-8 mx-4 w-10 transition duration-300 ease-in-out transform hover:text-white' onClick={LinkLuma}>
            <p>
              Explorar ↗️
            </p>  
          </button>
          <button className='text-white rounded-12 bg-white/10 h-8 w-10 transition duration-300 ease-in-out transform hover:bg-white/40'>
            <p>
              Entrar
            </p>
          </button>
        </nav>
      </header>
      <section>
        {/*Container do texto*/}
        <div className="flex justify-center items-center h-screen p-4 mx-auto max-w-screen-lg">
        <div className="flex flex-col justify-center mr-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-100 to-orange-400 bg-clip-text text-transparent">
            Eventos encantadores começam aqui.
          </h2>
          <p className="mt-4 max-w-xl text-white/50 text-justify">
            Crie uma página de evento, convide amigos e venda ingressos. Organize um evento memorável hoje.
          </p>
        </div>

        {/* Contêiner do vídeo */}
        <div className="flex-shrink-0">
            <video
            autoPlay
            muted
            loop
            className="h-80 rounded-lg"
            src="/phone-dark.webm"
            type="video/webm"
            />
          </div>
        </div>


      </section>
  </main>
  );
}
