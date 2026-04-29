import Link from "next/link";
import { BarChart3, Bell, CalendarDays, ClipboardList, CreditCard, LayoutDashboard, MessageSquare, Search, Settings, Users } from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/clients", label: "Clients", icon: Users },
  { href: "/projets", label: "Projets", icon: ClipboardList },
  { href: "/facturation", label: "Facturation", icon: CreditCard },
  { href: "/messages", label: "Messages", icon: MessageSquare },
  { href: "/parametres", label: "Paramètres", icon: Settings },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 shrink-0 border-r border-white/10 bg-slate-900/80 px-6 py-8 lg:flex lg:flex-col">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">Antoine Electric</p>
            <h1 className="mt-3 text-2xl font-semibold text-white">SaaS Admin</h1>
            <p className="mt-2 text-sm text-slate-400">Gestion des clients, projets et factures.</p>
          </div>

          <nav className="mt-10 space-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white">
                <item.icon className="h-4 w-4 text-cyan-300" />
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-medium text-white">Statut du compte</p>
            <p className="mt-1 text-xs text-slate-400">Plan Pro · 128 clients actifs</p>
            <div className="mt-4 h-2 rounded-full bg-white/10">
              <div className="h-2 w-[72%] rounded-full bg-cyan-400" />
            </div>
          </div>
        </aside>

        <section className="flex-1">
          <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
            <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Dashboard</p>
                <h2 className="mt-1 text-lg font-semibold text-white sm:text-2xl">Vue d’ensemble</h2>
              </div>
              <div className="flex items-center gap-3">
                <button className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 hover:text-white">
                  <Search className="h-4 w-4" />
                </button>
                <button className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 hover:text-white">
                  <Bell className="h-4 w-4" />
                </button>
              </div>
            </div>
          </header>

          <div className="px-4 py-6 sm:px-6 lg:px-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                ["Chiffre d'affaires", "24 800 €", "+12%"],
                ["Nouveaux leads", "38", "+8"],
                ["Projets en cours", "14", "3 urgents"],
                ["Taux de réponse", "97%", "Excellent"],
              ].map(([title, value, meta]) => (
                <article key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">{title}</p>
                  <div className="mt-3 flex items-end justify-between gap-4">
                    <p className="text-3xl font-semibold text-white">{value}</p>
                    <span className="text-xs font-medium text-cyan-300">{meta}</span>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1.6fr_1fr]">
              <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">Activité récente</h3>
                  <BarChart3 className="h-5 w-5 text-cyan-300" />
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    ["Installation tableau électrique", "Marseille 7e", "Aujourd’hui"],
                    ["Devis rénovation appartement", "Endoume", "Hier"],
                    ["Dépannage urgent disjoncteur", "Prado", "Hier"],
                    ["Facture envoyée", "Client pro", "Lundi"],
                  ].map(([title, place, date]) => (
                    <div key={title} className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3">
                      <div>
                        <p className="font-medium text-white">{title}</p>
                        <p className="text-sm text-slate-400">{place}</p>
                      </div>
                      <p className="text-xs text-slate-500">{date}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/20 to-indigo-500/10 p-5">
                <h3 className="text-lg font-semibold text-white">Actions rapides</h3>
                <div className="mt-5 space-y-3">
                  {[
                    [CalendarDays, "Créer un rendez-vous"],
                    [Users, "Ajouter un client"],
                    [CreditCard, "Émettre une facture"],
                  ].map(([Icon, label]) => (
                    <button key={label as string} className="flex w-full items-center gap-3 rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-left text-sm text-white hover:bg-slate-950/60">
                      <Icon className="h-4 w-4 text-cyan-300" />
                      {label as string}
                    </button>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
