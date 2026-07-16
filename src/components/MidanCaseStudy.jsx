import Reveal from './Reveal.jsx'
import { ArrowUpRight } from './Icons.jsx'

// Prefix a public asset path with Vite's base URL (see CaseStudies.jsx).
const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

const meta = [
  { label: 'My Role', value: 'UX Research · UI & Design System · Testing · Front-End' },
  { label: 'Team', value: '6 members · Supervised by Dr. Mohammad Jamaan AlGhamdi' },
  { label: 'Client', value: 'Al-Wehda FC — youth squad (ages 15–18)' },
  { label: 'Timeline', value: 'Graduation Project 2 · 1447H / 2026' },
  { label: 'Platform', value: 'Cross-platform mobile (iOS & Android)' },
  { label: 'Tools', value: 'Figma · React Native · Supabase · PostgreSQL' },
]

const problemStats = [
  { figure: '50%', text: 'of coaches had previously lost player data' },
  { figure: '70%', text: 'of information scattered across unofficial files' },
  { figure: '~20 min', text: 'spent manually entering data for each player' },
  { figure: '0', text: 'standardized evaluation model — results relied on memory' },
]

const users = [
  { role: 'Coaches', need: 'A unified digital system to manage and evaluate players — instead of scattered paper files.' },
  { role: 'Players (15–18)', need: 'A personal record with technical statistics and immediate feedback on evaluations.' },
  { role: 'Guardians', need: 'Visibility into their child’s progress and disciplinary status, with behavioural guidance.' },
  { role: 'Admins', need: 'Control over the club hierarchy — accounts, teams, and coach assignments.' },
]

const findings = [
  {
    tag: 'What worked',
    text: 'Users found the app very easy to use and agreed it solved a real problem by unifying scattered information into one place.',
  },
  {
    tag: 'Interaction fix',
    text: 'Tapping to pick the lineup felt tedious — testers asked for a swipe gesture to make selection smoother and more natural.',
  },
  {
    tag: 'Visual clarity',
    text: 'Some early colours were hard to read on the field, so contrast was reworked to be clear for everyone.',
  },
  {
    tag: 'New from users',
    text: 'Voice notes so coaches can dictate feedback pitch-side, and a “Top 3 Players” leaderboard for healthy competition.',
  },
]

const features = [
  { title: 'Rapid Slider Evaluation', text: 'Coaches score skills 1–10 with sliders during field sessions — replacing paper files with instant input.' },
  { title: 'Skill Radar Charts', text: 'Technical ability visualised as a radar chart so strengths and weaknesses read at a glance.' },
  { title: 'Progress Timeline', text: 'Line graphs track a player’s development over time, with a compare mode for past vs. current.' },
  { title: 'Real-time Alerts', text: 'Players are notified the moment a new evaluation or schedule update is published.' },
  { title: 'Gamification', text: 'Achievement badges (e.g. “Discipline King”) and an auto-updating Top-3 leaderboard drive motivation.' },
  { title: 'Digital Athletic Passport', text: 'A one-tap PDF report compiles a player’s full performance record for formal sharing.' },
]

const contributions = [
  {
    title: 'UX Research & Validation',
    text: 'Helped run testing with real Al-Wehda coaches and players and gathered feedback at the college exhibition — turning it into concrete design fixes (swipe lineup, contrast, voice notes).',
  },
  {
    title: 'UI Design & Design System',
    text: 'Contributed to the high-fidelity Figma prototype and the hybrid design system — pairing Al-Wehda’s visual identity with the Saudi Digital Government design language.',
  },
  {
    title: 'Player & Coach Cards',
    text: 'Designed the player/coach card component — a unified card with photo, position, and quick stats (PAC/SHO/PAS) plus colour-coded disciplinary indicators.',
  },
  {
    title: 'Testing & Front-End',
    text: 'Led interaction and usability testing (Nielsen’s heuristics, realistic scenarios) and helped implement the interface in React Native.',
  },
]

const tech = ['React Native', 'Expo', 'Supabase', 'PostgreSQL', 'WebSockets (Realtime)', 'Victory Native charts', 'Clean Architecture', 'Docker / TrueNAS (self-hosted)']

function Chip({ children }) {
  return (
    <li className="rounded-full border border-[#1F1D1B]/20 bg-white/40 px-4 py-1.5 text-xs font-medium tracking-wide text-[#1F1D1B]/80">
      {children}
    </li>
  )
}

function SectionLabel({ children }) {
  return <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7B3034]">{children}</p>
}

export default function MidanCaseStudy() {
  return (
    <div className="bg-[#AEB1AD] font-sans text-[#1F1D1B]">
      {/* Top bar */}
      <div className="sticky top-0 z-50 border-b border-[#1F1D1B]/10 bg-[#AEB1AD]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#/" className="group inline-flex items-center gap-2 text-sm font-medium text-[#1F1D1B] transition-colors hover:text-[#7B3034]">
            <span aria-hidden="true" className="transition-transform group-hover:-translate-x-0.5">←</span>
            Back to portfolio
          </a>
          <a
            href="mailto:abdulmjeedalqurashi@gmail.com"
            className="rounded-full bg-[#1F1D1B] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#7B3034]"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden bg-[#7B3034] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16 lg:px-8 lg:py-28">
          <div className="min-w-0">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/60">
                Case Study · Graduation Project · Umm Al-Qura University
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-5 font-display text-6xl tracking-tight sm:text-7xl">Midan</h1>
              <p className="mt-3 font-display text-2xl italic text-white/80 sm:text-3xl">
                Digital Sports Talent Management System
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/85">
                An end-to-end platform built for Al-Wehda Club that replaces paper-based player
                evaluation with a single, real-time system — connecting coaches, players, and
                guardians around clear, visual performance data.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="https://www.figma.com/design/MgW3g5o5ttX74B320i8R5m/Untitled?node-id=0-1&t=KyJkqiN0QDfqavNn-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#7B3034] transition-colors hover:bg-[#AEB1AD] hover:text-[#1F1D1B]"
                >
                  Figma
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="https://github.com/osama147854/maydan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-[#7B3034]"
                >
                  Source Code
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200} className="flex justify-center lg:justify-end">
            <img
              src={asset('/player-card.webp')}
              alt="Midan player card — Al-Wehda FC"
              className="w-56 drop-shadow-[0_25px_55px_rgba(0,0,0,0.4)] sm:w-64"
            />
          </Reveal>
        </div>

        {/* Meta strip */}
        <div className="relative border-t border-white/15">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-6 px-6 py-10 sm:grid-cols-3 lg:px-8">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">{m.label}</dt>
                <dd className="mt-1.5 text-sm leading-snug text-white/90">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <main>
        {/* Problem */}
        <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-display text-4xl tracking-tight sm:text-5xl">
              Sports data lost to paperwork and memory
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#1F1D1B]/75">
              At Al-Wehda Club, evaluating and monitoring players relied on traditional paperwork.
              Information was fragmented, decisions leaned on the coach’s memory, and players rarely
              understood their real level.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {problemStats.map((s, i) => (
              <Reveal key={s.figure + i} delay={i * 80}>
                <div className="h-full rounded-2xl border border-[#1F1D1B]/10 bg-white/40 p-6">
                  <p className="font-display text-4xl text-[#7B3034]">{s.figure}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#1F1D1B]/75">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Users */}
        <section className="bg-[#1F1D1B] text-white">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#AEB1AD]">Who we designed for</p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl tracking-tight sm:text-5xl">
                Four roles, one source of truth
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {users.map((u, i) => (
                <Reveal key={u.role} delay={i * 80}>
                  <div className="flex h-full gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                    <span className="font-display text-lg italic text-white/40">0{i + 1}</span>
                    <div>
                      <h3 className="font-display text-xl">{u.role}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">{u.need}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Research */}
        <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionLabel>Research & Validation</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-display text-4xl tracking-tight sm:text-5xl">
              Tested with real coaches and players
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#1F1D1B]/75">
              We validated the prototype with Al-Wehda’s coaches and players — after meeting their
              technical director — and gathered feedback at the college exhibition. Here’s what shaped
              the build.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {findings.map((f, i) => (
              <Reveal key={f.tag} delay={i * 80}>
                <div className="h-full rounded-2xl border border-[#1F1D1B]/10 bg-white/40 p-6">
                  <span className="inline-block rounded-full bg-[#7B3034] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    {f.tag}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-[#1F1D1B]/80">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Solution + screens */}
        <section className="bg-[#7B3034] text-white">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/60">The Solution</p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl tracking-tight sm:text-5xl">
                Two tailored flows, built on live data
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                A coach dashboard for managing lineups and evaluating skills, and a player interface
                for transparent, motivating feedback — kept in sync in real time.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <ul className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-5 [scrollbar-color:rgba(255,255,255,0.35)_transparent] [scrollbar-width:thin]">
                {[
                  { src: '/midan/login.webp', label: 'Onboarding' },
                  { src: '/midan/team.webp', label: 'Team & Formation' },
                  { src: '/midan/stats.png', label: 'Player Ratings' },
                  { src: '/midan/players.webp', label: 'Squad' },
                  { src: '/midan/accessibility.png', label: 'Accessibility' },
                ].map((s) => (
                  <li key={s.src} className="shrink-0 snap-start">
                    <figure className="flex flex-col items-center">
                      <img
                        src={asset(s.src)}
                        alt={`Midan — ${s.label} screen`}
                        loading="lazy"
                        className="h-[380px] w-auto rounded-[2rem] drop-shadow-2xl sm:h-[440px]"
                      />
                      <figcaption className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
                        {s.label}
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 60}>
                  <div className="h-full rounded-2xl border border-white/15 bg-white/[0.06] p-6">
                    <h3 className="font-display text-lg">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/75">{f.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Design system */}
        <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <SectionLabel>Design System</SectionLabel>
                <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
                  A hybrid, unmistakably Al-Wehda
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-[#1F1D1B]/75">
                  The visual identity was drawn from Al-Wehda FC’s official palette, while structure,
                  spacing, and typography followed the Saudi Digital Government design language for a
                  familiar, easy-to-read experience.
                </p>
                <ul className="mt-8 space-y-3 text-sm text-[#1F1D1B]/80">
                  <li className="flex gap-3"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#7B3034]" /> Red primary from the club logo; yellow &amp; red as semantic card/discipline colours.</li>
                  <li className="flex gap-3"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#7B3034]" /> Sans-serif type (IBM Plex Sans Arabic), sized so stats stay legible pitch-side.</li>
                  <li className="flex gap-3"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#7B3034]" /> Atomic Design — a unified player card (PAC / SHO / PAS) I designed, reused across the app.</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120} className="flex justify-center">
              <img
                src={asset('/player-card.webp')}
                alt="Midan player card component"
                className="w-60 drop-shadow-[0_25px_55px_rgba(123,48,52,0.3)] sm:w-72"
              />
            </Reveal>
          </div>
        </section>

        {/* Accessibility */}
        <section className="bg-[#AEB1AD]">
          <div className="mx-auto max-w-6xl px-6 pb-20 lg:px-8 lg:pb-28">
            <div className="grid items-center gap-12 rounded-3xl border border-[#1F1D1B]/10 bg-white/40 p-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:p-12">
              <Reveal className="order-2 flex justify-center lg:order-1">
                <img
                  src={asset('/midan/accessibility.png')}
                  alt="Midan accessibility settings screen"
                  className="w-[150px] rounded-xl shadow-2xl shadow-black/30 ring-1 ring-black/5 sm:w-[170px]"
                />
              </Reveal>
              <Reveal delay={120} className="order-1 lg:order-2">
                <div>
                  <SectionLabel>Accessibility &amp; Inclusivity</SectionLabel>
                  <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">
                    Built to work for everyone, on the field
                  </h2>
                  <div className="mt-8 grid gap-6 sm:grid-cols-3">
                    <div>
                      <p className="font-display text-3xl text-[#7B3034]">6.46:1</p>
                      <p className="mt-2 text-sm text-[#1F1D1B]/75">Contrast ratio — passes WCAG AA</p>
                    </div>
                    <div>
                      <p className="font-display text-3xl text-[#7B3034]">2</p>
                      <p className="mt-2 text-sm text-[#1F1D1B]/75">Screen readers verified — VoiceOver &amp; TalkBack</p>
                    </div>
                    <div>
                      <p className="font-display text-3xl text-[#7B3034]">AR / EN</p>
                      <p className="mt-2 text-sm text-[#1F1D1B]/75">Full RTL &amp; LTR localization</p>
                    </div>
                  </div>
                  <p className="mt-8 text-sm leading-relaxed text-[#1F1D1B]/75">
                    High contrast keeps stats readable in bright outdoor training; adjustable text size
                    and colour-blind support make the app usable for a wider range of people.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Tech + role */}
        <section className="bg-[#1F1D1B] text-white">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#AEB1AD]">Architecture</p>
                  <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">
                    Real-time, and privacy-first
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-white/75">
                    Midan runs cross-platform from a single React Native codebase, backed by Supabase
                    and PostgreSQL. To keep minors’ data under the club’s control, the backend is
                    self-hosted (Docker on TrueNAS) rather than cloud-only — an edge-computing approach
                    to data sovereignty.
                  </p>
                  <ul className="mt-8 flex flex-wrap gap-2.5">
                    {tech.map((t) => (
                      <li key={t} className="rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-white/85">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#AEB1AD]">My Contribution</p>
                  <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">What I worked on</h2>
                  <div className="mt-8 space-y-6">
                    {contributions.map((c) => (
                      <div key={c.title} className="border-l-2 border-[#7B3034] pl-5">
                        <h3 className="font-display text-lg">{c.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-white/70">{c.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Testing + reflection */}
        <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <SectionLabel>Testing</SectionLabel>
                <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">Validated against reality</h2>
                <ul className="mt-8 space-y-4 text-sm leading-relaxed text-[#1F1D1B]/80">
                  <li className="rounded-xl border border-[#1F1D1B]/10 bg-white/40 p-4"><strong className="font-semibold text-[#1F1D1B]">Heuristics &amp; parity:</strong> submitting a report takes the same 4 steps in the coded app as in Figma — no added friction.</li>
                  <li className="rounded-xl border border-[#1F1D1B]/10 bg-white/40 p-4"><strong className="font-semibold text-[#1F1D1B]">Endurance:</strong> a full 22-player evaluation session ran with no lag or memory leaks.</li>
                  <li className="rounded-xl border border-[#1F1D1B]/10 bg-white/40 p-4"><strong className="font-semibold text-[#1F1D1B]">Interruptions:</strong> backgrounding the app mid-task retained all unsaved state on return.</li>
                  <li className="rounded-xl border border-[#1F1D1B]/10 bg-white/40 p-4"><strong className="font-semibold text-[#1F1D1B]">One-handed:</strong> tested for thumb reach on real devices for pitch-side use.</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <SectionLabel>Reflection</SectionLabel>
                <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">What I’d carry forward</h2>
                <p className="mt-8 text-base leading-relaxed text-[#1F1D1B]/75">
                  With six people coding at once, our biggest challenge was keeping the interface
                  consistent — visual and interaction style drifted, and language-switching bugs only
                  surfaced during real implementation and testing.
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#1F1D1B]/75">
                  It taught me how much a shared design system and early, continuous testing matter on a
                  team — and reinforced an ethical call we’re proud of: we deliberately kept AI out of
                  evaluations, relying on certified coaches to keep scoring fair.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#7B3034] text-white">
          <div className="mx-auto max-w-6xl px-6 py-20 text-center lg:px-8 lg:py-24">
            <Reveal>
              <h2 className="mx-auto max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">
                Want the full walkthrough?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75">
                Explore the interactive prototype, browse the source, or reach out to talk through the
                research and design decisions behind Midan.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a
                  href="https://www.figma.com/design/MgW3g5o5ttX74B320i8R5m/Untitled?node-id=0-1&t=KyJkqiN0QDfqavNn-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#7B3034] transition-colors hover:bg-[#AEB1AD] hover:text-[#1F1D1B]"
                >
                  View the Figma
                </a>
                <a
                  href="#/"
                  className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-[#7B3034]"
                >
                  Back to portfolio
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  )
}
