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
      <section
  className="relative text-center py-24 px-6 bg-cover bg-center"
  style={{
    backgroundImage: "url('/consultorio.png')"
  }}
>

  {/* overlay escuro */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* conteúdo */}
  <div className="relative z-10">

    <h1 className="text-3xl md:text-5xl font-bold text-white">
  Transforme seu WhatsApp em um sistema que agenda pacientes todos os dias
</h1>

    <p className="text-xl max-w-2xl mx-auto mb-10 text-gray-200">
  Automatize atendimento, follow-up e agendamentos, enquanto recupera pacientes
  que sua clínica está perdendo todos os dias.
</p>
    <a
      href="https://wa.me/5538984031551?text=Olá,%20tenho%20interesse%20no%20projeto%20piloto%20do%20Vinton%20AI%20Patient%20Engine"
      target="_blank"
      className="bg-blue-600 px-8 py-4 rounded-lg text-lg hover:bg-blue-500 text-white"
    >
      Quero participar do projeto piloto
    </a>

    <p className="mt-6 text-gray-300">
      Apenas 3 clínicas
    </p>

  </div>

</section>

      {/* PROBLEMA */}
      <section className="py-24 px-6 bg-black text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-12">
    O problema não é falta de pacientes.
  </h2>

  <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
    A maioria das clínicas já recebe contatos todos os dias…
    mas perde oportunidades por falhas no atendimento e falta de acompanhamento.
  </p>

  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">

    <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
      <p className="text-red-400 font-semibold mb-2">
        ❌ Leads ignorados
      </p>
      <p className="text-gray-400">
        Mensagens que não recebem resposta rápida simplesmente esfriam.
      </p>
    </div>

    <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
      <p className="text-red-400 font-semibold mb-2">
        ❌ Falta de follow-up
      </p>
      <p className="text-gray-400">
        Pacientes interessados somem e nunca mais são contatados.
      </p>
    </div>

    <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
      <p className="text-red-400 font-semibold mb-2">
        ❌ Agenda ociosa
      </p>
      <p className="text-gray-400">
        Horários vagos mesmo com demanda existente.
      </p>
    </div>

    <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
      <p className="text-red-400 font-semibold mb-2">
        ❌ Falta de padrão no atendimento
      </p>
      <p className="text-gray-400">
        Cada conversa é diferente e sem estratégia de conversão.
      </p>
    </div>

  </div>
</section>

      {/* SOLUÇÃO */}
      <section className="py-24 px-6 text-center bg-gray-900">
  <h2 className="text-3xl md:text-4xl font-bold mb-10">
    Mais que automação. Um sistema que executa o crescimento da sua clínica.
  </h2>

  <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-12">
    O Vinton AI Patient Engine funciona como um time digital que atende,
    acompanha, agenda e recupera pacientes automaticamente — todos os dias.
  </p>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

    <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
      <h3 className="font-semibold text-lg mb-2">
        Atendimento imediato
      </h3>
      <p className="text-gray-400">
        Respostas automáticas em segundos no WhatsApp.
      </p>
    </div>

    <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
      <h3 className="font-semibold text-lg mb-2">
        Agendamento inteligente
      </h3>
      <p className="text-gray-400">
        Pacientes são conduzidos diretamente para a agenda.
      </p>
    </div>

    <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
      <h3 className="font-semibold text-lg mb-2">
        Follow-up automático
      </h3>
      <p className="text-gray-400">
        O sistema retoma conversas e recupera pacientes.
      </p>
    </div>

  </div>
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
<section className="py-24 px-6 bg-black text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-10">
    O dinheiro está no follow-up
  </h2>

  <p className="text-gray-300 max-w-3xl mx-auto mb-12 text-lg">
    A maioria das clínicas perde pacientes não por falta de interesse,
    mas por falta de acompanhamento.
  </p>

  <div className="max-w-4xl mx-auto bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
    
    <p className="text-xl text-white mb-6">
      Enquanto você responde novos contatos, dezenas de oportunidades são perdidas:
    </p>

    <ul className="text-gray-400 space-y-3 text-left max-w-md mx-auto">
      <li>✔ Pacientes que não responderam mais</li>
      <li>✔ Pessoas que pediram preço e sumiram</li>
      <li>✔ Pacientes que faltaram e não reagendaram</li>
      <li>✔ Orçamentos que nunca foram fechados</li>
    </ul>

    <p className="text-white mt-8 font-semibold">
      Nosso sistema atua exatamente nesse ponto: recuperar essas oportunidades automaticamente.
    </p>

  </div>
</section>
<section className="py-24 px-6 bg-gray-900 text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-10">
    Quantos pacientes você está perdendo hoje?
  </h2>

  <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
    Pequenas falhas no atendimento podem representar milhares de reais
    perdidos todos os meses — sem que você perceba.
  </p>

  <div className="max-w-3xl mx-auto bg-black border border-zinc-800 rounded-2xl p-8">
    
    <p className="text-xl text-white mb-4">
      Imagine perder apenas:
    </p>

    <ul className="text-gray-400 space-y-2 mb-6">
      <li>• 2 pacientes por dia</li>
      <li>• Ticket médio de R$ 300</li>
    </ul>

    <p className="text-white font-semibold text-lg">
      Isso representa mais de R$ 18.000 por mês em oportunidades perdidas.
    </p>

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
      <section className="text-center py-24 px-6 bg-black">

  <h2 className="text-4xl font-bold mb-6">
    Transforme seu atendimento em um sistema que gera pacientes todos os dias
  </h2>

  <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
    Vamos implementar o Vinton AI Patient Engine na sua clínica e mostrar, na prática,
    como recuperar pacientes, aumentar agendamentos e eliminar falhas no atendimento.
  </p>

  <div className="mb-8 text-gray-400">
    ✔ Atendimento automático no WhatsApp <br />
    ✔ Agendamentos diretos na agenda <br />
    ✔ Follow-up inteligente <br />
    ✔ Recuperação de pacientes perdidos
  </div>

  <a
    href="https://wa.me/5538984031551?text=Olá,%20quero%20participar%20do%20projeto%20piloto%20do%20Vinton%20AI%20Patient%20Engine"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 px-10 py-5 text-lg rounded-lg hover:bg-blue-500 inline-block"
  >
    Quero participar do projeto piloto
  </a>

  <p className="mt-6 text-sm text-gray-500">
    Vagas limitadas para implementação inicial
  </p>

</section>
<section className="py-24 px-6 bg-black">
  <h2 className="text-3xl font-bold text-center mb-12">
    Dúvidas comuns
  </h2>

  <div className="max-w-3xl mx-auto space-y-6 text-gray-400">

    <div>
      <h3 className="text-white font-semibold">
        Isso substitui minha recepcionista?
      </h3>
      <p>
        Não. O sistema trabalha junto com sua equipe, automatizando tarefas repetitivas
        e garantindo que nenhum paciente fique sem resposta.
      </p>
    </div>

    <div>
      <h3 className="text-white font-semibold">
        Funciona para qualquer clínica?
      </h3>
      <p>
        Funciona melhor para clínicas que já recebem contatos e querem aumentar
        a conversão e reduzir perdas.
      </p>
    </div>

    <div>
      <h3 className="text-white font-semibold">
        Preciso entender de tecnologia?
      </h3>
      <p>
        Não. Nós configuramos todo o sistema para você e acompanhamos a implementação.
      </p>
    </div>

    <div>
      <h3 className="text-white font-semibold">
        Em quanto tempo vejo resultado?
      </h3>
      <p>
        Já nos primeiros dias é possível perceber melhora no atendimento e aumento
        nas respostas e agendamentos.
      </p>
    </div>

  </div>
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