import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#1f1f1f] px-6 py-16 pb-32">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-display text-3xl tracking-tight">Syntra</p>
          <p className="mt-3 text-[11px] font-extralight tracking-[0.2em] text-[#6b6b6b]">
            Precision engineered silence
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-10 gap-y-3">
            {[
              { href: "#engineering", label: "Engineering" },
              { href: "#materials", label: "Materials" },
              { href: "#colorways", label: "Colorways" },
              { href: "mailto:press@syntra.audio", label: "Press" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[11px] font-extralight uppercase tracking-[0.2em] text-[#6b6b6b] transition-colors hover:text-[#c9a55c]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-[11px] font-extralight text-[#6b6b6b]/50">
          © {new Date().getFullYear()} Syntra Audio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
