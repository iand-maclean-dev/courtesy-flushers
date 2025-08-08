import React, { useId } from "react";
import styles from "./Hero.module.css";

export type Cta = {
  label: string;
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
  variant?: "primary" | "secondary" | "link";
};

export type Stat = {
  label: string;
  value: string;
};

export type Badge = {
  src: string;
  alt: string;
  href?: string;
};

export type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  backgroundImage?: string;
  overlay?: "none" | "gradient" | "scrim";
  align?: "left" | "center";
  stats?: Stat[];
  badges?: Badge[];
  className?: string;
  "data-testid"?: string;
  children?: React.ReactNode; // allow custom content (e.g., small form)
  overlayTint?: "light" | "medium" | "heavy"; // new: controls overlay strength
};

function Button({ cta }: { cta: Cta }) {
  const { label, href, onClick, ariaLabel, variant = "primary" } = cta;
  const className = [
    styles.button,
    variant === "secondary" ? styles.buttonSecondary : "",
    variant === "link" ? styles.buttonLink : "",
  ]
    .join(" ")
    .trim();

  if (href) {
    return (
      <a className={className} href={href} aria-label={ariaLabel || label}>
        {label}
      </a>
    );
  }
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      aria-label={ariaLabel || label}
    >
      {label}
    </button>
  );
}

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundImage,
  overlay = "gradient",
  align = "left",
  stats = [],
  badges = [],
  className,
  "data-testid": dataTestId,
  children, // new slot
  overlayTint = "light", // new: lighter by default
}: HeroProps) {
  const headingId = useId();

  // new: compute a lighter overlay while preserving contrast
  const overlayStyle =
    overlay === "none"
      ? undefined
      : (() => {
          const levels = {
            light: { r1: 0.28, r2: 0.22, top: 0.4, bottom: 0.65 },
            medium: { r1: 0.35, r2: 0.28, top: 0.6, bottom: 0.85 },
            heavy: { r1: 0.45, r2: 0.36, top: 0.7, bottom: 0.9 },
          } as const;
          const t = levels[overlayTint] ?? levels.light;

          if (overlay === "gradient") {
            return {
              background: `
                radial-gradient(1200px 600px at 10% 10%, rgba(37,99,235,${t.r1}), transparent 60%),
                radial-gradient(1000px 500px at 90% 20%, rgba(14,165,233,${t.r2}), transparent 55%),
                linear-gradient(180deg, rgba(8,12,28,${t.top}), rgba(8,12,28,${t.bottom}))
              `,
            } as React.CSSProperties;
          }
          // scrim
          return {
            background: `linear-gradient(180deg, rgba(6,10,22,${t.top}), rgba(6,10,22,${t.bottom}))`,
          } as React.CSSProperties;
        })();

  return (
    <section
      className={[
        styles.hero,
        align === "center" ? styles.alignCenter : styles.alignLeft,
        className || "",
      ]
        .join(" ")
        .trim()}
      aria-labelledby={headingId}
      data-overlay={overlay}
      data-testid={dataTestId}
    >
      {backgroundImage && (
        <div
          className={styles.bg}
          aria-hidden="true"
          style={{
            backgroundImage: `url("${backgroundImage}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* decorative background */}
        </div>
      )}
      <div className={styles.overlay} aria-hidden="true" style={overlayStyle} />
      <div className={styles.inner}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h1 id={headingId} className={styles.title}>
          {title}
        </h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

        {(primaryCta || secondaryCta) && (
          <div className={styles.ctas}>
            {primaryCta && <Button cta={primaryCta} />}
            {secondaryCta && (
              <Button cta={{ variant: "secondary", ...secondaryCta }} />
            )}
          </div>
        )}

        {children && <div className={styles.slot}>{children}</div>}

        {stats.length > 0 && (
          <ul className={styles.stats} aria-label="Service highlights">
            {stats.map((s, i) => (
              <li key={i} className={styles.statItem}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </li>
            ))}
          </ul>
        )}

        {badges.length > 0 && (
          <div className={styles.badges} aria-label="Trusted by">
            {badges.map((b, i) =>
              b.href ? (
                <a
                  key={i}
                  href={b.href}
                  className={styles.badgeLink}
                  aria-label={b.alt}
                >
                  <img
                    className={styles.badgeImg}
                    src={b.src}
                    alt={b.alt}
                    loading="lazy"
                  />
                </a>
              ) : (
                <img
                  key={i}
                  className={styles.badgeImg}
                  src={b.src}
                  alt={b.alt}
                  loading="lazy"
                />
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
