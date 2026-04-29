import Link from "next/link";
import { ArrowLeft, BarChart3, Bell, CalendarDays, CreditCard, LayoutDashboard, Search, Users } from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 shrink-0 border-r border-white/10 bg-slate-900/80 px-6 py-8 lg:flex lg:flex-col">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Retour
          </Link>
          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">Antoine Electric</p>
            <h1 className="mt-3 text-2xl font-semibold text-white">SaaS Admin</h1>
          </div>
        </aside>
        <section className="flex-1 p-6 lg:p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Dashboard</p>
              <h2 className="mt-1 text-2xl font-semibold text-white">Vue d’ensemble</h2>
            </div>
            <div className="flex items-center gap-3">
              <button className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 hover:text-white"><Search className="h-4 w-4" /></button>
              <button className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 hover:text-white"><Bell className="h-4 w-4" /></button>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[["CA", "24 800 €"], ["Leads", "38"], ["Projets", "14"], ["Réponse", "97%"]].map(([t, v]) => (
              <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-5"><p className="text-sm text-slate-400">{t}</p><p className="mt-2 text-3xl font-semibold text-white">{v}</p></div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold text-white">Activité récente</h3>
            <div className="mt-4 space-y-3">
              {["Installation tableau", "Devis rénovation", "Dépannage urgent"].map((item) => <div key={item} className="rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-slate-200">{item}</div>)}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
