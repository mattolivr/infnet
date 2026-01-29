import { Card, CardContent, CardHeader } from '@mui/material'
import Section from '../section'
import style from './style.module.css'

export default function Agenda() {
  return (
    <Section
      id="agenda"
      title="Agenda"
    >
      <div className={style.eventosContainer}>
        {retornaEventos().map((evento, index) => (
          <Card key={index} className={style.eventoCard}>
            <CardHeader 
              title={evento.titulo} 
              subheader={`${evento.data} • ${evento.local}`}
            />
            <CardContent>
              <p>{evento.descricao}</p>
              {evento.horario && <p className={style.horario}>Horário: {evento.horario}</p>}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}

function retornaEventos() {
  return [
    {
      id: 1,
      titulo: 'Encontro com Comerciantes',
      data: '15/12/2025',
      horario: '14h00',
      local: 'Centro Comunitário',
      descricao: 'Reunião para discutir propostas de apoio ao comércio local e ouvir as demandas dos empresários da região.'
    },
    {
      id: 2,
      titulo: 'Caminhada no Bairro Esperança',
      data: '18/12/2025',
      horario: '9h00',
      local: 'Praça Central',
      descricao: 'Caminhada pela comunidade para conversar com os moradores e apresentar propostas para melhorias no bairro.'
    },
    {
      id: 3,
      titulo: 'Debate sobre Educação',
      data: '20/12/2025',
      horario: '19h00',
      local: 'Auditório Municipal',
      descricao: 'Debate aberto sobre as propostas para a educação pública, com participação de professores e pais de alunos.'
    },
    {
      id: 4,
      titulo: 'Reunião com Agricultores',
      data: '22/12/2025',
      horario: '10h00',
      local: 'Sindicato Rural',
      descricao: 'Discussão sobre incentivos à agricultura familiar e programas de desenvolvimento rural sustentável.'
    },
    {
      id: 5,
      titulo: 'Plenária Popular',
      data: '27/12/2025',
      horario: '18h00',
      local: 'Ginásio Municipal',
      descricao: 'Grande encontro com a população para apresentar o plano de governo e responder perguntas da comunidade.'
    },
    {
      id: 6,
      titulo: 'Café com Mulheres Empreendedoras',
      data: '29/12/2025',
      horario: '15h00',
      local: 'Casa da Cultura',
      descricao: 'Encontro para discutir políticas de apoio ao empreendedorismo feminino e geração de renda.'
    }
  ]
}
