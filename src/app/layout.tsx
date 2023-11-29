import type { Metadata } from 'next';
import './globals.css';
import ThemeRegistry from '@app/utils/theme-registry';
import { ColorModeProvider } from './contexts/color-mode';

export const metadata: Metadata = {
  title: 'Consultar Tabela Fipe',
  description: 'Consulte a tabela fipe do seu carro'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <ColorModeProvider>
        <ThemeRegistry>{children}</ThemeRegistry>
      </ColorModeProvider>
    </html>
  );
}
