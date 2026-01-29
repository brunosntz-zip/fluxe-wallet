"use client";

import { useAuth } from "@/contexts/AuthContext";

export default function Home() {
  const { user, loading, signInWithGoogle, logout } = useAuth();

  if (loading) {
    return (
      // Spinner Roxo
      <div className="flex min-h-screen items-center justify-center bg-[#09090b]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    // Fundo Preto Profundo com degradê sutil
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#050505] text-white overflow-hidden relative">
      
      {/* Efeito de Luz Roxa de Fundo (Glow) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[120px]" />

      <div className="w-full max-w-md space-y-8 text-center z-10 p-6">
        
        {/* Logo / Título */}
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-extrabold tracking-tighter mb-2">
            FLUXE
          </h1>
          <span className="text-purple-500 tracking-[0.2em] text-sm font-semibold uppercase">
            Personal Wallet
          </span>
        </div>
        
        {!user ? (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="text-zinc-400 max-w-xs mx-auto">
              Domine seu dinheiro com a frieza de um jogador de poker.
            </p>
            <button
              onClick={signInWithGoogle}
              className="w-full rounded-xl bg-white text-black h-12 font-bold transition hover:bg-zinc-200 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Entrar com Google
            </button>
          </div>
        ) : (
          <div className="space-y-8 animate-in zoom-in duration-300">
            
            {/* Avatar com Glow Roxo */}
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur opacity-75"></div>
              {user.photoURL && (
                <img 
                  src={user.photoURL} 
                  alt="Foto" 
                  className="relative w-24 h-24 rounded-full border-2 border-black object-cover"
                />
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">Fala, {user.displayName?.split(" ")[0]}!</h2>
              <p className="text-zinc-500 text-sm mt-1">Pronto para o grind?</p>
            </div>
            
            {/* Card de Status Estilizado */}
            <div className="p-px bg-gradient-to-r from-zinc-800 via-purple-900/40 to-zinc-800 rounded-xl">
              <div className="bg-[#0A0A0A] rounded-xl p-4">
                <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Status do Sistema</p>
                <div className="flex items-center justify-center gap-2 text-purple-400 text-sm font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                  </span>
                  Banco de Dados Conectado
                </div>
              </div>
            </div>

            <button
              onClick={logout}
              className="text-xs text-zinc-600 hover:text-purple-400 transition-colors uppercase tracking-widest"
            >
              Sair da conta
            </button>
          </div>
        )}
      </div>
    </div>
  );
}