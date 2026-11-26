function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <p className="about-label">Rreth nesh</p>
        <h1>Mirë se vjen në Allora Market</h1>
        <p className="about-intro">
          Allora Market është një mini dyqan online ku mund të zbulosh
          produkte të ndryshme për bukuri, ushqim, shtëpi dhe nevoja të
          përditshme. Ideja jonë është t’i mbledhim produktet në një vend
          dhe ta bëjmë shfletimin të lehtë e të këndshëm.
        </p>
      </section>

      <section className="about-section">
        <h2>Çfarë mund të gjesh këtu?</h2>

        <div className="about-cards">
          <article className="about-card">
            <span>🧴</span>
            <h3>Bukuri dhe kujdes</h3>
            <p>Produkte për kujdesin personal dhe rutinën tënde të bukurisë.</p>
          </article>

          <article className="about-card">
            <span>🍎</span>
            <h3>Ushqim</h3>
            <p>Produkte ushqimore për përdorim të përditshëm.</p>
          </article>

          <article className="about-card">
            <span>🏠</span>
            <h3>Shtëpi dhe më shumë</h3>
            <p>Artikuj të ndryshëm që mund të të duhen në përditshmëri.</p>
          </article>
        </div>
      </section>

    </main>
  );
}

export default About;