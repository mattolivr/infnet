import { Card, CardContent, CardHeader, CardMedia } from '@mui/material'
import Section from '../section'
import style from './style.module.css'

export default function Propostas() {
  const propostas = retornaPropostas()
  const propostasComImagem = propostas.filter(p => p.imagem)
  const outrasPropostas = propostas.filter(p => !p.imagem).slice(0, 5)

  return (
    <Section
      id="propostas"
      title="Propostas"
    >
      <div className={style.cardsContainer}>
        {propostasComImagem.map((proposta, index) => (
          <Card key={index} className={style.propostaCard}>
            <CardMedia 
              component="img" 
              height="194" 
              image={`./src/assets/propostas/${proposta.imagem}`} 
              alt={proposta.titulo} 
            />
            <CardHeader title={proposta.titulo} subheader={proposta.categoria} />
            <CardContent>{proposta.descricao}</CardContent>
          </Card>
        ))}
      </div>

      <div className={style.listaOutrasPropostas}>
        <h3>Outras Propostas</h3>
        <ul>
          {outrasPropostas.map((proposta, index) => (
            <li key={index}>{proposta.titulo}</li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

function retornaPropostas() {
  return [
    {
      id: 1,
      titulo: 'Programa "Onda Verde Inteligente"',
      descricao:
        "Implementar um sistema de semáforos inteligentes que se adaptam ao fluxo de trânsito em tempo real, reduzindo congestionamentos e melhorando a mobilidade urbana.",
      categoria: "Mobilidade Urbana",
      imagem: "onda-verde-inteligente.jpg",
    },
    {
      id: 2,
      titulo: "Incentivo à Energia Renovável",
      descricao:
        "Criar programas de incentivo para a instalação de painéis solares e outras fontes de energia renovável em residências e empresas, promovendo a sustentabilidade ambiental.",
      categoria: "Sustentabilidade",
      imagem: "energia-renovavel.jpg",
    },
    {
      id: 3,
      titulo: "Educação Digital nas Escolas Públicas",
      descricao:
        "Implementar um programa de educação digital que forneça dispositivos eletrônicos e acesso à internet para estudantes de escolas públicas, garantindo igualdade de oportunidades educacionais.",
      categoria: "Educação",
      imagem: "educacao-digital.jpg",
    },
    {
      id: 4,
      titulo: "Programa de Reciclagem Comunitária",
      descricao:
        "Estabelecer pontos de coleta seletiva em bairros e promover campanhas educativas sobre a importância da reciclagem para o meio ambiente.",
      categoria: "Sustentabilidade",
      imagem: "reciclagem-comunitaria.jpg",
    },
    {
      id: 5,
      titulo: "Apoio ao Pequeno Empreendedor",
      descricao:
        "Criar linhas de crédito facilitadas e programas de capacitação para pequenos empreendedores, estimulando o crescimento econômico local.",
      categoria: "Economia",
      imagem: "apoio-pequeno-empreendedor.jpg",
    },
    {
      id: 6,
      titulo: "Melhoria da Infraestrutura de Saúde",
      descricao:
        "Investir na modernização de unidades de saúde, aquisição de equipamentos e capacitação de profissionais para melhorar o atendimento à população.",
      categoria: "Saúde",
    },
    {
      id: 7,
      titulo: "Cultura e Lazer para Todos",
      descricao:
        "Desenvolver espaços culturais e de lazer acessíveis à população, promovendo a inclusão social e o bem-estar comunitário.",
      categoria: "Cultura",
    },
    {
      id: 8,
      titulo: "Segurança Pública Integrada",
      descricao:
        "Implementar um sistema de monitoramento e integração entre as forças de segurança para aumentar a eficiência no combate à criminalidade.",
      categoria: "Segurança",
    },
    {
      id: 9,
      titulo: "Transporte Público Sustentável",
      descricao:
        "Investir em frotas de ônibus elétricos e melhorar a infraestrutura de ciclovias para promover um transporte público mais sustentável e acessível.",
      categoria: "Mobilidade Urbana",
    },
    {
      id: 10,
      titulo: "Incentivo à Agricultura Urbana",
      descricao:
        "Criar hortas comunitárias e programas de incentivo à agricultura urbana para promover a segurança alimentar e o desenvolvimento sustentável nas cidades.",
      categoria: "Sustentabilidade",
    },
  ];
}