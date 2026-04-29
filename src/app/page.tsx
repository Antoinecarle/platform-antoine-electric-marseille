export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Antoine Electric
            </p>
            <p className="text-xs text-slate-500">Électricien à Marseille · Rue d’Adoume</p>
          </div>
          <a
            href="tel:+33400000000"
            className="rounded-full bg-yellow-400 px-4 py-3 text-sm font-bold text-slate-900 shadow-lg transition hover:bg-yellow-300"
            aria-label="Appeler Antoine Electric maintenant"
          >
            Appeler maintenant
          </a>
        </div>
      </header>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit rounded-full bg-blue-600/20 px-4 py-2 text-sm font-semibold text-blue-200">
              Intervention rapide à Marseille
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Électricien à Marseille, rue d’Adoume : dépannage, mise aux normes et installation
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Antoine Electric intervient à Marseille et dans les quartiers proches de la rue d’Adoume pour les particuliers, commerces et syndics.
              Dépannage, rénovation électrique, mise en sécurité et urgences 7j/7 selon disponibilité.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+33400000000"
                className="rounded-lg bg-yellow-400 px-6 py-4 text-center font-bold text-slate-900 shadow-lg transition hover:bg-yellow-300"
              >
                Demander une intervention
              </a>
              <a
                href="#reservation"
                className="rounded-lg border border-white/20 px-6 py-4 text-center font-bold text-white transition hover:bg-white/10"
              >
                Réserver un créneau
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 text-slate-800 shadow-2xl ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold">Services d’électricien à Marseille</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["Dépannage urgent", "Panne, court-circuit, disjoncteur"],
                ["Mise aux normes", "Tableau, sécurité, conformité"],
                ["Installation", "Prises, éclairage, équipements"],
                ["Rénovation", "Maison, appartement, commerce"],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">{title}</p>
                  <p className="mt-1 text-sm text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-green-50 p-4 text-sm text-slate-700">
              <p className="font-semibold text-green-700">Zone d’intervention locale</p>
              <p className="mt-1">Marseille centre, rue d’Adoume et alentours</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            ["Artisan local", "Basé à Marseille, intervention de proximité."],
            ["Réponse rapide", "Appel direct et créneau de réservation simple."],
            ["Travail propre", "Conseils clairs, finitions soignées, sécurité."],
            ["Confiance", "Page claire, contact visible, CTA mobile immédiat."],
          ].map(([title, desc]) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Dépannage électrique à Marseille", "Panne, disjoncteur qui saute, court-circuit, prise défectueuse, urgence électrique."],
            ["Installation et rénovation", "Prises, éclairage, tableaux, circuits, extension et modernisation d’installation."],
            ["Mise aux normes et sécurité", "Vérification, protection, conformité et sécurisation de votre logement ou local."],
          ].map(([title, desc]) => (
            <article key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">{title}</h3>
              <p className="mt-3 text-slate-600">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-900">
              SEO local Marseille
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Votre électricien local à Marseille, rue d’Adoume et quartiers proches
            </h2>
            <p className="mt-4 text-slate-600">
              Cette page cible les recherches locales comme électricien Marseille, dépannage électrique Marseille, mise aux normes Marseille,
              intervention rue d’Adoume et électricien Marseille centre. L’objectif est simple : rassurer, être trouvé localement et générer des appels.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              ["Marseille 7e et centre", "Intervention de proximité pour limiter les délais et augmenter la réactivité."],
              ["Rue d’Adoume", "Adresse locale claire pour renforcer la confiance et la pertinence géographique."],
              ["Appel direct", "CTA visible partout pour convertir les visiteurs en demandes d’intervention."],
            ].map(([title, desc]) => (
              <article key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-slate-600">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reservation" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-900">
              Réservation en 3 clics
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Réservez votre intervention en ligne à Marseille
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              Choisissez votre besoin, votre créneau et laissez vos coordonnées. Antoine vous rappelle rapidement pour confirmer le rendez-vous.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Dépannage", "Panne, disjoncteur, urgence"],
                ["Installation", "Prises, luminaires, équipements"],
                ["Devis", "Projet, rénovation, mise aux normes"],
              ].map(([title, desc]) => (
                <button
                  key={title}
                  type="button"
                  className="rounded-2xl border-2 border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-blue-700 hover:shadow-md"
                >
                  <p className="font-semibold text-slate-900">{title}</p>
                  <p className="mt-1 text-sm text-slate-600">{desc}</p>
                </button>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Créneaux disponibles
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["Aujourd’hui", "Disponible"],
                  ["Demain", "8h - 12h"],
                  ["Jeudi", "14h - 18h"],
                  ["Vendredi", "Urgences"],
                ].map(([day, slot]) => (
                  <button
                    key={day}
                    type="button"
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-yellow-500 hover:bg-yellow-50"
                  >
                    <p className="font-semibold text-slate-900">{day}</p>
                    <p className="mt-1 text-sm text-slate-600">{slot}</p>
                  </button>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-500">
                Créneaux indicatifs — confirmation par téléphone après réservation.
              </p>
            </div>
          </div>

          <form className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900">Demande de réservation</h3>
            <p className="mt-2 text-slate-600">
              Laissez vos infos et on vous rappelle pour bloquer le créneau.
            </p>
            <div className="mt-6 grid gap-4">
              <input className="rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none ring-blue-600 focus:ring-2" placeholder="Votre nom" />
              <input className="rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none ring-blue-600 focus:ring-2" placeholder="Votre téléphone" />
              <input type="date" className="rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none ring-blue-600 focus:ring-2" />
              <textarea className="min-h-32 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none ring-blue-600 focus:ring-2" placeholder="Décrivez votre besoin" />
              <button type="submit" className="rounded-xl bg-yellow-400 px-6 py-4 font-bold text-slate-900 shadow-lg transition hover:bg-yellow-300">
                Confirmer la réservation
              </button>
            </div>
          </form>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Contact rapide
            </h2>
            <p className="mt-4 text-slate-600">
              Électricien à Marseille, rue d’Adoume : expliquez votre besoin, et nous vous rappelons rapidement pour organiser l’intervention.
            </p>
            <div className="mt-6 space-y-3 text-slate-700">
              <p><span className="font-semibold">Téléphone :</span> <a className="text-blue-700 underline" href="tel:+33400000000">+33 4 00 00 00 00</a></p>
              <p><span className="font-semibold">Adresse :</span> Marseille, rue d’Adoume</p>
              <p><span className="font-semibold">Zone :</span> Marseille centre, quartiers proches, interventions locales</p>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900 p-8 text-white">
            <h3 className="text-2xl font-bold">Pourquoi ce site convertit mieux</h3>
            <ul className="mt-5 space-y-3 text-slate-200">
              <li>• Couleurs cohérentes : bleu confiance, jaune action, vert sécurité</li>
              <li>• SEO local clair pour Marseille et rue d’Adoume</li>
              <li>• Sections complètes pour rassurer et convertir</li>
              <li>• Réservation et appel visibles partout</li>
            </ul>
            <div className="mt-8 rounded-2xl bg-emerald-500/15 p-4 text-sm text-emerald-100">
              <p className="font-semibold text-emerald-300">Conseil couleur</p>
              <p className="mt-1">
                Bleu pour la structure, jaune pour les CTA, vert pour les badges de confiance. C’est le meilleur équilibre pour un artisan local.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
