import Reveal from './Reveal.jsx'
import { ArrowUpRight } from './Icons.jsx'

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

const reports = [
  {
    id: 'khatib-alami',
    title: 'Khatib & Alami — Final Report',
    kicker: 'Cooperative Training',
    image: '/reports/khatib-alami.webp',
    file: '/reports/khatib-alami-report.pdf',
    description:
      'My cooperative-training final report: redeveloping the Khatib & Alami corporate website end-to-end — from requirements and Figma design to a responsive, RTL site deployed on GitHub Pages.',
  },
  {
    id: 'nathr',
    title: 'Nathr — Digital Library',
    kicker: 'UI/UX Design',
    image: '/reports/nathr.webp',
    file: '/reports/nathr-report.pdf',
    description:
      'My UI design project for Nathr, a digital-library app — designing every interface in Figma (login, book lists, profile, and customizable reading with dark mode and font sizing) to elevate the reading experience.',
  },
  {
    id: 'serialized',
    title: 'Serialized App',
    kicker: 'UX/UI Analysis',
    image: '/reports/serialized-app.webp',
    file: '/reports/serialized-app.pdf',
    description:
      'A UX/UI analysis of Serialized, a TV-show & episode tracking app — evaluated through the full app design cycle and benchmarked against Letterboxd.',
  },
  {
    id: 'a11y-games',
    title: 'Accessibility in Games',
    kicker: 'Research',
    image: '/reports/accessibility-in-games.webp',
    file: '/reports/accessibility-in-games.pdf',
    description:
      'A research report on accessibility for visual impairment and colour blindness in games — analysing Ghost of Tsushima, Celeste, and Silent Hill 2 Remake against WCAG.',
  },
]

export default function Reports() {
  return (
    <section id="reports" aria-labelledby="reports-heading" className="bg-[#AEB1AD]">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7B3034]">
            Writing &amp; Research
          </p>
          <h2
            id="reports-heading"
            className="mt-4 font-display text-4xl tracking-tight text-[#1F1D1B] sm:text-5xl lg:text-6xl"
          >
            Selected Reports
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#1F1D1B]/70 lg:text-lg">
            Optional further reading — a few reports from my university work, for anyone who
            wants a closer look at how I research and design.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {reports.map((r, i) => (
            <Reveal key={r.id} delay={i * 80}>
              <a
                href={asset(r.file)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#1F1D1B]/10 bg-white/40 transition-all duration-300 hover:-translate-y-1 hover:border-[#1F1D1B]/25 hover:bg-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B3034]"
              >
                <div className="h-40 overflow-hidden border-b border-[#1F1D1B]/10 bg-white">
                  <img
                    src={asset(r.image)}
                    alt=""
                    loading="lazy"
                    aria-hidden="true"
                    className="w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-[#7B3034] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-white">
                      PDF
                    </span>
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#1F1D1B]/55">
                      {r.kicker}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl tracking-tight text-[#1F1D1B]">{r.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#1F1D1B]/70">{r.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#7B3034]">
                    Open PDF
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
