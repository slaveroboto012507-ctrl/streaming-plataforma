export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-100 md:p-8">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 text-blue-600">Bem-vindo ao Streaming Plataforma!</h1>
      <p className="text-lg md:text-xl text-gray-700 mb-6 text-center">Assine para acessar vídeos exclusivos sobre carros!</p>
      <div className="flex flex-col md:flex-row gap-4">
        <a href="/sign-up" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Criar Conta</a>
        <a href="/sign-in" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700">Login</a>
      </div>
    </main>
  );
}