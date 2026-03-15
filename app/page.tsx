import Image from "next/image";
export default function Home() {
  return ( 
   
    <main className="min-h-screen bg-black text-white">
       <header>
        <div className="mb-6 flex justify-center">
  <div className="p-6 rounded-full bg-blue-500/10">
      

      
        <Image
          src="/logo-vinton-ai.png"
          alt="Vinton AI Patient Engine"
          width={220}
  height={220}
  className="drop-shadow-[0_0_25px_rgba(59,130,246,0.7)]"
        />
        </div>
        </div>
      </header>


      {/* HERO */}
      <section className="text-center py-24 px-6">
        <h1 className="text-3xl md:text-5xl font-bold">
  Vinton AI Patient Engine
</h1>

        <p className="text-xl max-w-2xl mx-auto mb-10">
          Sistema inteligente que atrai, qualifica e agenda novos pacientes
          automaticamente para clínicas de estética e odontologia.
        </p>

        <a
  href="https://wa.me/5538984031551?text=Olá,%20tenho%20interesse%20no%20projeto%20piloto%20do%20Vinton%20AI%20Patient%20Engine"
  target="_blank"
  className="bg-blue-600 px-8 py-4 rounded-lg text-lg hover:bg-blue-500"
>
  Quero participar do projeto piloto
</a>

        <p className="mt-6 text-gray-400">
          Apenas 3 clínicas
        </p>
      </section>

      {/* PROBLEMA */}
      <section className="bg-gray-900 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Por que muitas clínicas não crescem no digital?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Redes sociais sem retorno
            </h3>
            <p className="text-gray-400">
              Conteúdo sem estratégia não gera pacientes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Leads que não respondem
            </h3>
            <p className="text-gray-400">
              Muitas mensagens e poucos agendamentos.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Falta de automação
            </h3>
            <p className="text-gray-400">
              Processos manuais que atrasam o atendimento.
            </p>
          </div>

        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="py-24 text-center px-6">
        <h2 className="text-3xl font-bold mb-10">
          A solução: um motor de aquisição de pacientes com IA
        </h2>

        <p className="max-w-3xl mx-auto text-gray-400 text-lg">
          O Vinton Patient Engine combina tráfego pago, landing pages
          inteligentes e automação com inteligência artificial para
          transformar interesse em consultas agendadas.
        </p>
      </section>
<section className="py-24 flex justify-center">

  <div className="relative max-w-4xl w-full">

    <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-3xl"></div>

    <div className="relative bg-gray-900 border border-gray-800 rounded-3xl shadow-2xl p-4">

      <video
        className="rounded-2xl w-full"
        controls
        autoPlay
        muted
        loop
      >

        <source src="/videoexplicativo.mp4" type="video/mp4" />

      </video>

    </div>

  </div>

</section>

      {/* COMO FUNCIONA */}
      <section className="bg-gray-900 py-20 px-6 text-center">

        <h2 className="text-3xl font-bold mb-12">
          Como funciona
        </h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">

          <div>
            <h3 className="text-xl font-semibold mb-2">
              1. Atrair
            </h3>
            <p className="text-gray-400">
              Campanhas inteligentes geram novos leads diariamente.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              2. Qualificar
            </h3>
            <p className="text-gray-400">
              Um assistente com IA responde dúvidas automaticamente.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              3. Agendar
            </h3>
            <p className="text-gray-400">
              Pacientes são direcionados diretamente para consulta.
            </p>
          </div>

        </div>

      </section>
      <section className="py-20 px-6">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
    Como o Vinton AI Patient Engine ajuda sua clínica
  </h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

    <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
      <h3 className="text-xl font-semibold mb-4">
        Atrai novos pacientes
      </h3>
      <p className="text-gray-400">
        Estratégias de tráfego e conteúdo inteligente para gerar
        demanda constante para sua clínica.
      </p>
    </div>

    <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
      <h3 className="text-xl font-semibold mb-4">
        Qualifica automaticamente
      </h3>
      <p className="text-gray-400">
        IA identifica pacientes com maior intenção e organiza
        os contatos automaticamente.
      </p>
    </div>

    <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
      <h3 className="text-xl font-semibold mb-4">
        Agenda consultas
      </h3>
      <p className="text-gray-400">
        Automação conecta o interesse do paciente diretamente
        com sua agenda.
      </p>
    </div>

  </div>
</section>


      {/* CTA FINAL */}
      <section className="text-center py-24 px-6">

        <h2 className="text-4xl font-bold mb-6">
          Projeto Piloto
        </h2>

        <p className="text-xl mb-8">
          Apenas 3 clínicas
        </p>

        <a
  href="https://wa.me/5538984031551?text=Olá,%20gostaria%20de%20solicitar%20uma%20apresentação%20do%20Vinton%20AI%20Patient%20Engine"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 px-10 py-5 text-lg rounded-lg hover:bg-blue-500 inline-block"
>
  Solicitar apresentação
</a>

      </section>
      <a
  href="https://wa.me/5538984031551?text=Olá,%20tenho%20interesse%20no%20Vinton%20AI%20Patient%20Engine"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 bg-green-500 text-white px-5 py-4 rounded-full shadow-lg hover:bg-green-400 z-50"
>
  WhatsApp
</a>

    </main>
  )
}