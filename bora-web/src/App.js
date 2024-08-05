import React from "react";

//Função para abrir o Bora.work
function LinkBora () {
  window.open('https://bora.work/map', '_blank');
};

//Função Link para abrir o Luma.dev
function LinkLuma() {
  window.open('https://luma-dev.com/', '_blank');
};

//Pega as horas e minutos atuais do servidor e escreve no HTML.
const Horas = () => {
  const horas = new Date().getHours().toString().padStart(2, '0')
  const minutos = new Date().getMinutes().toString().padStart(2, '0')
  return (
    <p className='text-white/50 mr-5'>
      {horas}:{minutos} BRT
    </p>
  );
};

//Main.
export default function App() {
  return (
    //Caixa principal do site.
    <main>
      {/*Rodapé do site.*/}
      <header className=' bg-white/10 border-white/20 rounded-8 p-1 m-4 shadow-xl shadow-black/20'>
        {/*Navegação principal do rodapé.*/}
        <nav className='flex items-center m-2'>
          {/*Botão principal que leva para o site do Bora!*/}
          <button onClick={LinkBora} className='mr-auto  shadow-mg rounded-8 transition duration-300 ease-in-out transform hover:bg-white/20'>
          {/*Logo bora.*/}
            <img className='size-10' src='/logo-bora.png' alt='Logo do bora'/>
          </button >
          {/*Componente das horas.*/}
            <Horas />
            {/*Botão explorar.*/}
          <button className='text-white/50 hover:text-white rounded-8 mx-4 w-10 transition duration-300 ease-in-out transform hover:text-white' onClick={LinkLuma}>
            <p>
              Explorar ↗️
            </p>  
          </button>
          {/*Botão entrar.*/}
          <button className='text-white rounded-12 bg-white/10 h-8 w-10 transition duration-300 ease-in-out transform hover:bg-white/40'>
            <p>
              Entrar
            </p>
          </button>
        </nav>
      </header>
      {/*Secão de conteúdo.*/}
      <section>
        {/*Div com o vídeo e texto.*/}
        <div className="flex justify-center items-center h-screen p-4 mx-auto max-w-screen-lg">
          {/*Div com textos.*/}
        <div className="flex flex-col justify-center mr-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-100 to-orange-400 bg-clip-text text-transparent">
            Eventos encantadores começam aqui.
          </h2>
          <p className="mt-4 max-w-xl text-white/50 text-justify items-center">
            Crie uma página de evento, convide amigos e venda ingressos. Organize um evento memorável hoje.
          </p>
          {/*Botão de criar evento.*/}
          <button className='bg-white/70 rounded-8 h-12 max-w-52 w-52 mx-auto mt-4 transition duration-300 ease-in-out transform hover:bg-white'>
            <p>
              Crie Seu Primeiro Evento
            </p>
          </button>
        </div>
        {/*Div do vídeo.*/}
        <div className="flex-shrink-0">
            <video
            autoPlay
            muted
            loop
            className="rounded-lg size-video max-w-md max-h-sm"
            src="/phone-dark.webm"
            type="video/webm"
            />
          </div>
        </div>
      </section>

      {/*Rodapé do site.*/}
      <footer className='h-24 border-solid border-white/10 border-t-1 text-white/70 p-4 w-footer m-auto max-w-7xl'>
        {/*navegação de botões.*/}
        <nav>
          <button className='px-2 text-xl transition duration-300 ease-in-out transform hover:text-white' onClick={LinkBora}>
            <p>
              Bora!
            </p>
          </button>
          <button className='px-2 transition duration-300 ease-in-out transform hover:text-white'>
            <p>
              Novidades
            </p>
          </button>
          <button className='px-2 transition duration-300 ease-in-out transform hover:text-white'>
            <p>
              Descobrir
            </p>
          </button>
          <button className='px-2 transition duration-300 ease-in-out transform hover:text-white'>
            <p>
              Preços
            </p>
          </button>
          <button className='px-2 transition duration-300 ease-in-out transform hover:text-white'>
            <p>Ajuda</p>
          </button>
        </nav>
        {/*navegação secundária.*/}
        <nav className='py-2 text-white/60'>
          <button className='px-2 transition duration-300 ease-in-out transform hover:text-white/90'>
            <p>
              Termos
            </p>
          </button>
          <button className='px-2 transition duration-300 ease-in-out transform hover:text-white/90'>
            <p>
              Privacidade
            </p>
          </button>
        </nav>
      </footer>
  </main>
  );
}