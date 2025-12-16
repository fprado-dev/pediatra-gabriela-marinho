import { getContent } from '@/lib/content';
import { Clock, Heart, Phone, Stethoscope, Users } from 'lucide-react';

const { services: servicesContent } = getContent();
const items = servicesContent.items;

export const services = [
  {
    id: 'pediatric-consultation',
    ...items['pediatric-consultation'],
    icon: Stethoscope,
  },
  {
    id: 'emergency-care',
    ...items['emergency-care'],
    icon: Heart,
  },
  {
    id: 'preventive-care',
    ...items['preventive-care'],
    icon: Users,
  },
  {
    id: 'online-consultation',
    ...items['online-consultation'],
    icon: Phone,
  },
  {
    id: 'specialized-follow-up',
    ...items['specialized-follow-up'],
    icon: Clock,
  }
];
