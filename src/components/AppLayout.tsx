import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Shield, Wind, ChevronLeft, ChevronRight, LogOut } from "lucide-react";
import wtgImage from "@/assets/wtg-serra-palmeira.png.asset.json";
import ctgLogo from "@/assets/ctg-brasil-logo.png.asset.json";
import { useAuth } from "@/hooks/useAuth";


const navItems = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/matriz", label: "Painel de Falhas e Alarmes", icon: Shield },
];


export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`flex flex-col bg-sidebar text-sidebar-foreground transition-all duration-300 ${collapsed ? "w-16" : "w-64"}`}
      >
        <div className="flex items-center gap-3 px-4 h-16 border-b border-sidebar-border">
          <Wind className="h-7 w-7 text-sidebar-primary shrink-0" />
        </div>

        {!collapsed && (
          <div className="px-3 pt-3">
            <div className="overflow-hidden rounded-lg border border-sidebar-border bg-sidebar-accent/30">
              <img
                src={wtgImage.url}
                alt="Parque eólico Serra da Palmeira ao pôr do sol"
                loading="lazy"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        )}

        <nav className="flex-1 py-4 space-y-1 px-2">

          {navItems.map(({ path, label, icon: Icon }) => {
            const active = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-sidebar-accent text-sidebar-primary"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                }`}
              >
                <Icon className="h-5 w-5 shrink-0" />
                {!collapsed && <span>{label}</span>}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center justify-center h-12 border-t border-sidebar-border text-sidebar-foreground/50 hover:text-sidebar-foreground transition-colors"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 bg-card/95 backdrop-blur-sm border-b border-border h-14 flex items-center px-6">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <img src={ctgLogo.url} alt="CTG Brasil" className="h-8 w-auto" />
            <span className="h-6 w-px bg-border" />
            <span className="font-medium text-foreground">Painel de Falhas e Alarmes WTG</span>
            <span>·</span>
            <span>Complexo Serra da Palmeira</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse-slow" />
              GWH171 - V11
            </span>
          </div>
        </header>
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
