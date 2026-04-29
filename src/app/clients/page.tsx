import Link from "next/link";
import { ArrowLeft, Users } from "lucide-react";

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 lg:p-8">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white"><ArrowLeft className="h-4 w-4" /> Retour</Link>
      <h1 className="mt-6 text-3xl font-semibold text-white">Clients</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {["M. Martin", "SAS Prado", "Mme Lopez"].map((name) => (
          <div key={name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-3"><Users className="h-4 w-4 text-cyan-300" /><p className="font-medium text-white">{name}</p></div>
          </div>
        ))}
      </div>
    </main>
  );
}
