// app/disease/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Expert Care at mediEND',
    default: 'Expert Care at mediEND',
  },
  
};

export default function DiseaseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
