import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wind, Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import ctgLogo from "@/assets/ctg-brasil-logo.png.asset.json";
import wtgImage from "@/assets/wtg-serra-palmeira.png.asset.json";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(usuario, senha)) {
      navigate("/", { replace: true });
    } else {
      setErro("Usuário ou senha inválidos.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sidebar p-6">
      <div className="w-full max-w-4xl grid md:grid-cols-2 rounded-2xl overflow-hidden border border-sidebar-border shadow-xl bg-card">
        <div className="hidden md:block relative">
          <img
            src={wtgImage.url}
            alt="Parque eólico Serra da Palmeira ao pôr do sol"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="p-8 md:p-10">
          <div className="flex items-center gap-3 mb-8">
            <Wind className="h-8 w-8 text-primary" />
            <img src={ctgLogo.url} alt="CTG Brasil" className="h-8 w-auto" />
          </div>

          <h1 className="text-xl font-bold">Painel de Falhas e Alarmes WTG</h1>
          <p className="text-sm text-muted-foreground mt-1 mb-6">
            Complexo Serra da Palmeira · GWH171 - V11
          </p>

          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="usuario" className="text-sm font-medium">Usuário</label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  id="usuario"
                  value={usuario}
                  onChange={e => { setUsuario(e.target.value); setErro(""); }}
                  autoComplete="username"
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div>
              <label htmlFor="senha" className="text-sm font-medium">Senha</label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  id="senha"
                  type="password"
                  value={senha}
                  onChange={e => { setSenha(e.target.value); setErro(""); }}
                  autoComplete="current-password"
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            {erro && <p className="text-sm text-destructive">{erro}</p>}

            <Button type="submit" className="w-full">Entrar</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
