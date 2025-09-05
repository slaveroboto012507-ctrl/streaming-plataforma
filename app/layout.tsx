import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold text-center">Streaming Plataforma</h1>
        </header>
        {children}
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>© 2025 Streaming Plataforma</p>
        </footer>
      </body>
    </html>
  );
}