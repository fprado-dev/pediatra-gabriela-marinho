import { Stethoscope, Heart, Baby, Users, Phone, Clock } from 'lucide-react'

export const services = [
  {
    id: 'pediatric-consultation',
    title: 'Consultoria Pediátrica',
    description: 'Acompanhamento completo do desenvolvimento infantil, desde o nascimento até a adolescência',
    icon: Stethoscope,
    features: ['Acompanhamento mensal', 'Vacinação', 'Nutrição infantil', 'Desenvolvimento motor']
  },
  {
    id: 'emergency-care',
    title: 'Atendimento de Urgência',
    description: 'Orientação rápida para situações emergenciais, 24 horas por dia',
    icon: Heart,
    features: ['24h disponível', 'Orientação imediata', 'Encaminhamento hospitalar', 'Suporte telefônico']
  },
  {
    id: 'newborn-care',
    title: 'Cuidados com Recém-Nascidos',
    description: 'Consultas especializadas para bebês nos primeiros meses de vida',
    icon: Baby,
    features: ['Primeira consulta aos 15 dias', 'Avaliação do desenvolvimento', 'Orientação para mamães', 'Acompanhamento da amamentação']
  },
  {
    id: 'preventive-care',
    title: 'Medicina Preventiva',
    description: 'Prevenção de doenças e promoção da saúde infantil',
    icon: Users,
    features: ['Calendário vacinal', 'Exames de rotina', 'Nutrição preventiva', 'Educação em saúde']
  },
  {
    id: 'online-consultation',
    title: 'Consultas Online',
    description: 'Atendimento remoto para maior comodidade dos pais',
    icon: Phone,
    features: ['Vídeo chamada', 'Sem deslocamento', 'Horários flexíveis', 'Prescrição digital']
  },
  {
    id: 'specialized-follow-up',
    title: 'Acompanhamento Especializado',
    description: 'Cuidado contínuo para crianças com condições especiais',
    icon: Clock,
    features: ['Planos personalizados', 'Monitoramento constante', 'Equipe multidisciplinar', 'Apoio familiar']
  }
]