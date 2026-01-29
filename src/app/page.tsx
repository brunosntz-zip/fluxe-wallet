"use client";

import { useAuth } from "@/contexts/AuthContext";

export default function Home() {
  const { user, loading, signInWithGoogle, logout } = useAuth();

  // 1. Estado de Carregamento (Loading)
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-emerald-500"></div>
      </div>
    );
  }

  // 2. Tela Principal
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 p-4 text-white">
      <div className="w-full max-w-md space-y-8 text-center">
        
        {/* Logo / Título */}
        <h1 className="text-4xl font-bold tracking-tighter">
          FLUXE <span className="text-emerald-500">Wallet</span>
        </h1>
        
        {/* Lógica de Exibição: Logado vs Deslogado */}
        {!user ? (
          // Se NÃO tem usuário logado, mostra botão de entrar
          <div className="space-y-4">
            <p className="text-zinc-400">
              Controle seus gastos sem burocracia.
            </p>
            <button
              onClick={signInWithGoogle}
              className="w-full rounded-lg bg-white px-4 py-3 text-black font-medium transition hover:bg-gray-200 flex items-center justify-center gap-2"
            >
              {/* Ícone do Google (SVG) */}
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Entrar com Google
            </button>
          </div>
        ) : (
          // Se JÁ TEM usuário, mostra os dados dele
          <div className="space-y-6 animate-in fade-in zoom-in duration-300">
            <div className="flex flex-col items-center gap-3">
              {user.photoURL && (
                <img 
                  src={user.photoURL} 
                  alt="Foto de Perfil" 
                  className="w-20 h-20 rounded-full border-4 border-emerald-500/20"
                />
              )}
              <div>
                <p className="text-xl font-medium">Fala, {user.displayName?.split(" ")[0]}!</p>
                <p className="text-sm text-zinc-500">{user.email}</p>
              </div>
            </div>
            
            <div className="p-4 bg-zinc-900 rounded-lg border border-zinc-800">
              <p className="text-sm text-zinc-400 mb-1">Status do Sistema</p>
              <div className="flex items-center justify-center gap-2 text-emerald-400 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Conectado ao Firebase
              </div>
            </div>

            <button
              onClick={logout}
              className="text-sm text-zinc-500 hover:text-red-400 transition-colors underline"
            >
              Sair da conta
            </button>
          </div>
        )}
      </div>
    </div>
  );
}