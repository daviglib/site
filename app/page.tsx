import Image from 'next/image'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Sobre o Escritório',
  description:
    'Conheça nosso escritório de advocacia, nossa história, valores e áreas de atuação. Compromisso com a ética, excelência jurídica e atendimento personalizado.',
})

const areas = [
  {
    title: 'Advocacia Extrajudicial',
    description:
      'Atuamos na prevenção e solução de conflitos sem a necessidade de acionar o Poder Judiciário, proporcionando agilidade, economia e segurança jurídica para nossos clientes. Prestamos serviços de elaboração, análise e revisão de contratos, emissão de pareceres jurídicos personalizados, além de mediação e conciliação extrajudicial para resolução eficiente de disputas. Nossa atuação também abrange regularização de imóveis, planejamento sucessório e assessoria jurídica preventiva para empresas e indivíduos.',
  },
  {
    title: 'Direito Civil',
    description:
      'Oferecemos assessoria jurídica completa em responsabilidade civil, atuando em casos de indenizações por danos morais e materiais, revisão e anulação de contratos, além de ações de obrigações de fazer ou não fazer e concessão de medidas liminares. Também possuímos expertise no Direito Imobiliário, auxiliando em questões como compra e venda de imóveis, usucapião, locações e regularizações. Atuamos, ainda, em processos de inventário e sucessões, garantindo a correta partilha de bens e a segurança jurídica da herança.',
  },
  {
    title: 'Defesa dos direitos dos concurseiros',
    description:
      'Oferecemos suporte jurídico qualificado em todas as etapas do certame. Nosso objetivo é assegurar que o seu esforço seja respeitado e que seus direitos como candidato sejam plenamente garantidos. Atuamos com estratégia e comprometimento em casos como: Impugnação de editais com cláusulas abusivas ou ilegais, Recursos administrativos contra questões de prova e resultados, Injustiças na fase de títulos, investigação social ou avaliação médica, Eliminações indevidas por critérios subjetivos ou não previstos, Ingresso judicial para garantir nomeação após aprovação, Casos de preterição ou desrespeito à ordem de classificação, Defesa de candidatos PCD ou em ações afirmativas (cotas)',
  },
  {
    title: 'Demandas na Justiça Federal',
    description:
      'Representamos nossos clientes em litígios contra entes públicos federais, assegurando seus direitos perante órgãos como a União, autarquias e fundações. Atuamos em processos administrativos e judiciais relacionados a cobrança indevida de tributos, restituição de valores pagos indevidamente, revisão de débitos fiscais e defesa em ações promovidas por entidades federais. Nossa atuação também inclui demandas voltadas à concessão e revisão de benefícios previdenciários e assistenciais.',
  },
  {
    title: 'Direito Previdenciário',
    description:
      'Prestamos assessoria especializada em revisão e concessão de benefícios previdenciários, garantindo que nossos clientes recebam corretamente seus direitos junto ao INSS. Atuamos em processos de aposentadoria, pensão por morte, auxílio-doença, Benefício de Prestação Continuada (BPC/LOAS) e demais benefícios. Além disso, oferecemos suporte jurídico para a revisão de valores pagos e reconhecimento de tempo de contribuição e atividade especial, assegurando uma aposentadoria mais vantajosa para o segurado.',
  },
  {
    title: 'Remédios Constitucionais',
    description:
      'Garantimos a defesa de direitos fundamentais por meio de ações estratégicas perante o Poder Judiciário. Nossa equipe tem expertise na impetração de Mandados de Segurança, garantindo a proteção contra atos ilegais ou abusivos praticados por autoridades públicas.',
  },
]

export default function SobreOEscritorio() {
  return (
    <section className="pt-0 pb-12">
      {/* Banner com efeito Parallax e largura total */}
      {/*<div className="relative right-1/2 left-1/2 mr-[-50vw] ml-[-50vw] w-screen max-w-none">
        <div
          className="relative flex h-[500px] w-full items-center justify-center bg-cover bg-fixed bg-center"
          style={{ backgroundImage: "url('/static/images/balanca.png')" }}
        >
          <div className="absolute inset-0 z-10" />
          <div className="relative z-20 px-4 text-center">
            <h1 className="text-4xl font-bold text-white drop-shadow-xl sm:text-2xl md:text-3xl">
              Transformamos conhecimento jurídico em segurança para você.
            </h1>
          </div>
        </div>
      </div>*/}

      {/* Seção Sobre o Escritório */}
      <div className="grid grid-cols-1 gap-8 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:px-8">
        <div>
          <h2 id="sobre" className="dark mb-4 text-3xl font-bold tracking-tight text-gray-900">
            Sobre o Escritório
          </h2>
          <p className="dark:text-[#4a4034 mb-4 text-justify text-lg leading-relaxed text-gray-700">
            Nosso escritório tem como missão oferecer soluções jurídicas inteligentes e
            estratégicas, garantindo a melhor abordagem para cada caso. Atuamos com excelência na
            prevenção e resolução de conflitos, sempre buscando agilidade, segurança e efetividade
            na defesa dos interesses de nossos clientes.
          </p>
          <p className="dark:text-[#4a4034 text-justify text-lg leading-relaxed text-gray-700">
            Com uma atuação especializada em Advocacia Extrajudicial, Direito Civil, Direito
            Previdenciário, Demandas na Justiça Federal e Remédios Constitucionais, combinamos
            técnica, inovação e planejamento jurídico personalizado para proporcionar resultados
            sólidos e eficientes.
          </p>
        </div>
        <div className="w-full">
          <Image
            src="/static/images/Imagem_escritorio.png"
            alt="Imagem do Escritório"
            width={600}
            height={400}
            className="h-auto w-full rounded-xl object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Áreas de Atuação */}
      <div className="px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="dark: mb-8 text-3xl font-bold tracking-tight text-gray-900">
          Áreas de Atuação
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <div
              key={area.title}
              className="flex min-h-[160px] flex-col justify-start gap-3 rounded-xl border border-gray-200 bg-[#f2edcf] bg-[#f4edcf] p-6 shadow-sm transition hover:shadow-md dark:border-gray-700"
            >
              <h3 className="text-base font-bold whitespace-nowrap text-gray-900">{area.title}</h3>
              <p className="text-justify text-sm leading-relaxed text-gray-700 dark:text-[#172d57]">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
