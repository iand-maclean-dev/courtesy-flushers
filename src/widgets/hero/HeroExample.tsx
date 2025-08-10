import Hero from "./Hero";

export default function HeroExample() {
  return (
    <Hero
      eyebrow="Fast. Reliable. Clean."
      title="Portable toilet rentals made simple"
      subtitle="Same-day delivery, flexible schedules, and spotless units for events, sites, and emergencies—serving your area with 24/7 support."
      primaryCta={{ label: "Get a free quote", href: "#quote" }}
      secondaryCta={{ label: "Call now", href: "tel:+18001234567" }}
      backgroundImage="/truck-toilets.jpeg"
      backgroundImageAlt="Truck delivering portable toilets"
      overlay="gradient"
      align="left"
      stats={[
        { value: "24/7", label: "Support" },
        { value: "Same-day", label: "Delivery" },
        { value: "4.9/5", label: "Avg. rating" },
      ]}
      // badges={[
      //   {
      //     src: "https://dummyimage.com/100x32/ffffff/000000&text=BBB",
      //     alt: "BBB Accredited",
      //   },
      //   {
      //     src: "https://dummyimage.com/120x32/ffffff/000000&text=Google",
      //     alt: "Google Reviews",
      //   },
      //   {
      //     src: "https://dummyimage.com/90x32/ffffff/000000&text=Yelp",
      //     alt: "Yelp",
      //   },
      // ]}
    >
      {/* Example inline form slot */}
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        aria-label="Get a quote"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 8,
          maxWidth: 480,
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: 12,
          padding: 8,
          backdropFilter: "blur(6px)",
        }}
      >
        <input
          type="text"
          name="postal"
          placeholder="Enter ZIP/Postal Code"
          aria-label="ZIP or Postal Code"
          required
          style={{
            height: 44,
            borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.25)",
            background: "rgba(0,0,0,0.25)",
            color: "#fff",
            padding: "0 12px",
          }}
        />
        <button
          type="submit"
          style={{
            height: 44,
            borderRadius: 10,
            padding: "0 16px",
            background: "#2563eb",
            color: "#fff",
            fontWeight: 700,
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          Check availability
        </button>
      </form> */}
    </Hero>
  );
}
