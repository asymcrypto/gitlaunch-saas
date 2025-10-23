// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'GitLaunch SaaS',
  description: 'Launch and manage projects with GitLaunch',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'GitLaunch SaaS',
  description: 'Your GitHub projects manager',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
