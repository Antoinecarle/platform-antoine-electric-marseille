import Link from "next/link";
import { ArrowLeft, MessageSquare } from "lucide-react";

export default function MessagesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 lg:p-8">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white"><ArrowLeft className="h-4 w-4" /> Retour</Link>
      <h1 className="mt-6 text-3xl font-semibold text-white">Messages</h1>
      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 flex items-center gap-3"><MessageSquare className="h-4 w-4 text-cyan-300" /> Nouveau message client</div>
    </main>
  );
}
