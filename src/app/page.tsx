import { Phone, Calendar, CheckCircle2, ShieldCheck, MapPin, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFCFB] text-[#2C2C2C] selection:bg-[#1E3A8A]/10">
      <header className="sticky top-0 z-50 border-b border-[#E5E1DA] bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <div className="group cursor-default">
            <p className="font-serif text-xl font-medium tracking-tight text-[#1E3A8A]">
              Antoine Electric<span className="text-[#fbbf24]">.</span>
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#8C8C8C] transition-colors group-hover:text-[#1E3A8A]">
              Marseille · Rue d’Adoume
            </p>
          </div>
          <a
            href="tel:+33400000000"
            className="group flex items-center gap-2 rounded-full border border-[#1E3A8A] bg-transparent px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#1E3A8A] transition-all hover:bg-[#1E3A8A] hover:text-white active:scale-95"
          >
            <Phone className="h-3.5 w-3.5" />
            Nous Contacter
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#121926] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.3),transparent_60%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-12 lg:py-32 items-center">
          <div className="flex flex-col">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-8 bg-[#fbbf24]" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#fbbf24]">
                Excellence & Réactivité
              </span>
            </div>
            <h1 className="font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Électricien de <span className="italic">confiance</span> à Marseille.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#B0B8C4] sm:text-lg">
              Antoine Electric intervient rue d’Adoume et dans tout Marseille.
              Une expertise artisanale au service de vos urgences, rénovations et mises en conformité.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="tel:+33400000000" className="flex items-center justify-center gap-3 rounded-lg bg-[#fbbf24] px-7 py-4 text-xs font-bold uppercase tracking-widest text-[#121926] shadow-[0_10px_30px_-10px_rgba(251,191,36,0.5)] transition-all hover:translate-y-[-2px] hover:bg-[#fcd34d]">
                Demander un devis
              </a>
              <a href="#reservation" className="flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-7 py-4 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:bg-white/10">
                Réserver en ligne
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-[#fbbf24]/20 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl transition-transform hover:scale-[1.02]">
              <img src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Électricien professionnel en intervention" className="h-72 w-full object-cover opacity-90" />
              <div className="p-8">
                <h2 className="font-serif text-xl font-light sm:text-2xl">Services Premium</h2>
                <div className="mt-8 grid gap-4">
                  {[["Dépannage urgent", "Panne, court-circuit, disjoncteur"],["Mise aux normes", "Sécurité tableau & conformité"],["Installation", "Domotique & éclairage design"],["Rénovation", "Projets résidentiels complets"]].map(([title, desc]) => (
                    <div key={title} className="group flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-5 transition-all hover:bg-white/[0.08]">
                      <div className="mt-1 rounded-full bg-[#fbbf24]/10 p-2 text-[#fbbf24]"><Zap className="h-4 w-4" /></div>
                      <div>
                        <p className="text-sm font-medium text-white sm:text-base">{title}</p>
                        <p className="mt-1 text-xs text-[#8C8C8C] sm:text-sm">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.05] p-4">
                  <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[#fbbf24]" /><span className="text-xs font-medium sm:text-sm">Marseille & Secteur Adoume</span></div>
                  <div className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E5E1DA] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:px-12 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, title: "Artisan local", desc: "Expertise de proximité à Marseille." },
            { icon: Calendar, title: "7j / 7", desc: "Réponse et intervention rapide." },
            { icon: CheckCircle2, title: "Travail soigné", desc: "Finitions haute facture et propreté." },
            { icon: Phone, title: "Contact direct", desc: "Standard ouvert en permanence." },
          ].map((item) => (
            <div key={item.title} className="flex gap-4">
              <item.icon className="h-5 w-5 shrink-0 text-[#1E3A8A]" strokeWidth={1.5} />
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#121926] sm:text-sm">{item.title}</h3>
                <p className="mt-1 text-[11px] leading-relaxed text-[#6E6E6E] sm:text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-12 lg:px-24 lg:py-24">
        <div className="mb-14 text-center">
          <h2 className="font-serif text-3xl text-[#121926] sm:text-4xl">Expertise & Solutions</h2>
          <div className="mx-auto mt-4 h-1 w-12 bg-[#fbbf24]" />
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {[
            ["Dépannage Électrique", "Identification rapide et sécurisation immédiate de vos circuits défaillants."],
            ["Installation Neuve", "Modernisation de tableaux et déploiement de réseaux électriques intelligents."],
            ["Mise en Sécurité", "Diagnostic complet et mise aux normes NF C 15-100 pour votre sérénité."],
          ].map(([title, desc]) => (
            <article key={title} className="group relative">
              <div className="absolute -inset-4 -z-10 rounded-2xl bg-[#F8F7F4] opacity-0 transition-opacity group-hover:opacity-100" />
              <h3 className="font-serif text-lg text-[#121926] sm:text-xl">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#6E6E6E] sm:text-base">{desc}</p>
              <div className="mt-6 flex h-1 w-0 bg-[#1E3A8A]/20 transition-all group-hover:w-full" />
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#121926] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
          <div className="flex flex-col gap-8 border-l border-white/10 pl-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#fbbf24]">Ancrage Local</span>
              <h2 className="mt-5 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                Votre électricien de quartier à Marseille, Rue d’Adoume.
              </h2>
              <p className="mt-6 text-base text-[#B0B8C4] sm:text-lg">
                Spécialiste du dépannage et de la rénovation à Marseille centre.
                Nous privilégions une approche de proximité pour garantir réactivité et tarifs justes.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {[["Marseille 7e & Centre", "Réactivité maximale pour les interventions dans l'hypercentre."],["Secteur Adoume", "Une connaissance parfaite des spécificités techniques du bâti local."],["Devis Transparent", "Engagement sur les prix et les délais avant chaque début de chantier."]].map(([title, desc]) => (
              <div key={title} className="border-t border-white/10 pt-8">
                <h3 className="text-base font-medium text-white sm:text-lg">{title}</h3>
                <p className="mt-4 text-xs leading-relaxed text-[#8C8C8C] sm:text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reservation" className="mx-auto max-w-7xl px-6 py-24 sm:px-12 lg:px-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#1E3A8A]">Conciergerie Digitale</span>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-[#121926] sm:text-4xl">Planifiez votre rendez-vous</h2>
            <p className="mt-5 text-sm text-[#6E6E6E] sm:text-base">Une interface simplifiée pour choisir votre créneau. Confirmation immédiate par SMS.</p>
            <div className="mt-10 space-y-8">
              <div className="grid gap-4 sm:grid-cols-3">
                {["Dépannage", "Installation", "Devis"].map((title) => (
                  <button key={title} className="flex flex-col items-center justify-center rounded-xl border border-[#E5E1DA] bg-white p-5 shadow-sm transition-all hover:border-[#fbbf24] hover:shadow-md">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#121926]">{title}</span>
                  </button>
                ))}
              </div>
              <div className="rounded-2xl border border-[#E5E1DA] bg-[#FDFCFB] p-7">
                <div className="flex items-center gap-3 border-b border-[#E5E1DA] pb-4">
                  <Calendar className="h-4 w-4 text-[#1E3A8A]" />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#1E3A8A]">Disponibilités</p>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
                  {[ ["Aujourd’hui", "Libre"], ["Demain", "Matin"], ["Jeudi", "14h-18h"], ["Vendredi", "Urgence"] ].map(([day, slot]) => (
                    <div key={day} className="text-center">
                      <p className="text-xs font-medium text-[#121926]">{day}</p>
                      <p className="mt-1 text-[10px] font-bold uppercase text-[#fbbf24]">{slot}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <form className="relative overflow-hidden rounded-[2.5rem] bg-[#121926] p-8 shadow-2xl sm:p-10">
            <div className="relative z-10">
              <h3 className="font-serif text-2xl text-white sm:text-3xl">Réservation</h3>
              <div className="mt-8 grid gap-4">
                <input type="text" placeholder="Votre nom" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#8C8C8C] outline-none focus:border-[#fbbf24]" />
                <input type="tel" placeholder="Téléphone" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#8C8C8C] outline-none focus:border-[#fbbf24]" />
                <input type="date" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-[#fbbf24]" />
                <textarea rows={4} placeholder="Décrivez votre besoin" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#8C8C8C] outline-none focus:border-[#fbbf24]" />
              </div>
              <button type="submit" className="mt-6 w-full rounded-xl bg-[#fbbf24] px-6 py-4 text-xs font-bold uppercase tracking-[0.25em] text-[#121926] transition-all hover:bg-[#fcd34d]">
                Confirmer la demande
              </button>
            </div>
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#1E3A8A]/20 blur-3xl" />
          </form>
        </div>
      </section>

      <footer className="border-t border-[#E5E1DA] bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 sm:px-12 lg:flex-row lg:items-center lg:justify-between lg:px-24">
          <div>
            <p className="font-serif text-lg text-[#121926]">Antoine Electric Marseille</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#8C8C8C]">Électricien local · Marseille centre · Rue d’Adoume</p>
          </div>
          <p className="text-[11px] text-[#8C8C8C]">Dépannage · Installation · Mise aux normes · Réservation en ligne</p>
        </div>
      </footer>
    </main>
  );
}
