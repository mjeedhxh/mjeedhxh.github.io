import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import { ArrowUpRight } from './Icons.jsx'

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

const reports = [
  {
    id: 'khatib-alami',
    title: 'Khatib & Alami — Final Report',
    kicker: 'Cooperative Training',
    pages: 38,
    file: '/reports/khatib-alami-report.pdf',
    description:
      'My cooperative-training final report: the full journey of redeveloping the Khatib & Alami corporate website — from requirements and Figma design to a responsive, RTL site deployed on GitHub Pages.',
  },
  {
    id: 'nathr',
    title: 'Nathr — Digital Library',
    kicker: 'UI/UX Design',
    pages: 20,
    file: '/reports/nathr-report.pdf',
    description:
      'A UI/UX report for Nathr, a digital-library reading app — the research and interface decisions behind an innovative, responsive reading experience.',
  },
  {
    id: 'serialized',
    title: 'Serialized App',
    kicker: 'UX Design Process',
    pages: 30,
    file: '/reports/serialized-app.pdf',
    description:
      'A UX case study for a serialized-content app (series & episodes), walking the design process from prototyping through usability testing, validation, and iteration.',
  },
  {
    id: 'a11y-games',
    title: 'Accessibility in Games',
    kicker: 'Research',
    pages: 31,
    file: '/reports/accessibility-in-games.pdf',
    description:
      'A research report on accessibility in video games — how inclusive design choices make games more playable and welcoming for people with disabilities.',
  },
]

function PdfModal({ report, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    // lock background scroll while the viewer is open
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${report.title} — PDF viewer`}
    >
      <div
        className="flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-[#1F1D1B] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-3.5">
          <div className="min-w-0">
            <p className="truncate font-display text-lg text-white">{report.title}</p>
            <p className="text-xs text-white/50">{report.kicker} · {report.pages} pages</p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={asset(report.file)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-4 py-2 text-xs font-semibold text-white/90 transition-colors hover:border-white hover:bg-white hover:text-[#1F1D1B]"
            >
              Open tab
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close PDF viewer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#7B3034] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span aria-hidden="true" className="text-lg leading-none">×</span>
            </button>
          </div>
        </div>
        <iframe
          src={asset(report.file)}
          title={`${report.title} (PDF)`}
          className="h-full w-full flex-1 bg-white"
        />
      </div>
    </div>
  )
}

export default function Reports() {
  const [openId, setOpenId] = useState(null)
  const open = reports.find((r) => r.id === openId)

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
            A few standout reports from my university journey. Open any one to read it right here —
            no downloads, no new tabs.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {reports.map((r, i) => (
            <Reveal key={r.id} delay={i * 80}>
              <button
                type="button"
                onClick={() => setOpenId(r.id)}
                aria-haspopup="dialog"
                className="group flex h-full w-full flex-col rounded-2xl border border-[#1F1D1B]/10 bg-white/40 p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#1F1D1B]/25 hover:bg-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B3034]"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7B3034] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-white">
                    PDF
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#1F1D1B]/55">
                    {r.kicker} · {r.pages} pp
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl tracking-tight text-[#1F1D1B]">{r.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#1F1D1B]/70">{r.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#7B3034]">
                  Read report
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {open && <PdfModal report={open} onClose={() => setOpenId(null)} />}
    </section>
  )
}
