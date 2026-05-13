
function HomePage({ navigate, addToCart, tweaks = {}, lang = 'EN' }) {
  const t = (key, vars) => T(key, lang, vars);
  const featured = window.ARTWORKS.filter(a => a.featured);
  const [heroLoaded, setHeroLoaded] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);
  const isAr = lang === 'AR';

  const C = { container: { maxWidth: '1360px', margin: '0 auto', padding: '0 clamp(20px,4vw,72px)' } };

  return (
    <div style={{ background: tweaks.bg || '#1b1916', color: '#f0ead8' }}>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', height: '100vh', minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <img src={window.__resources&&window.__resources.heroCairo||'src/assets/hero-cairo.jpg'} alt="Cairo" onLoad={() => setHeroLoaded(true)}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: heroLoaded ? 1 : 0, transition: 'opacity 1.2s ease', transform: 'scale(1.04)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(27,25,22,0.35) 0%, rgba(27,25,22,0.6) 60%, rgba(27,25,22,0.85) 100%)' }} />
        <div style={{ position: 'relative', textAlign: 'center', padding: '0 24px', maxWidth: '860px' }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(196,163,85,0.85)', marginBottom: '28px', animation: 'fadeUp 1s 0.2s both' }}>
            {t('hero.tagline')}
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(42px, 7vw, 96px)', fontWeight: 300, lineHeight: 1.0, margin: '0 0 24px', animation: 'fadeUp 1s 0.45s both', letterSpacing: '-0.01em' }}>
            <span style={{ display: 'block' }}>{t('hero.title1')}</span>
            <span style={{ display: 'block', fontStyle: 'italic', color: 'rgba(240,234,216,0.75)' }}>{t('hero.title2')}</span>
          </h1>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 'clamp(13px,1.5vw,16px)', color: 'rgba(240,234,216,0.55)', lineHeight: 1.75, marginBottom: '44px', animation: 'fadeUp 1s 0.65s both', fontWeight: 300 }}>
            {t('hero.subtitle')}
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', animation: 'fadeUp 1s 0.8s both' }}>
            <button onClick={() => navigate('collection')} style={{ background: '#c4a355', color: '#1b1916', border: 'none', cursor: 'pointer', padding: '14px 36px', fontFamily: "'Jost', sans-serif", fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500 }}>
              {t('hero.cta.browse')}
            </button>
            <button onClick={() => navigate('about')} style={{ background: 'transparent', color: '#f0ead8', border: '1px solid rgba(240,234,216,0.3)', cursor: 'pointer', padding: '14px 36px', fontFamily: "'Jost', sans-serif", fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              {t('hero.cta.story')}
            </button>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', animation: 'fadeUp 1s 1.2s both' }}>
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,234,216,0.3)' }}>{isAr ? 'انزل' : 'Scroll'}</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(180deg, rgba(196,163,85,0.6) 0%, transparent 100%)' }} />
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section style={{ background: '#151310', borderBottom: '1px solid rgba(240,234,216,0.07)' }}>
        <div style={C.container}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {[
              { title: t('trust.museum.title'), sub: t('trust.museum.sub') },
              { title: t('trust.edition.title'), sub: t('trust.edition.sub') },
              { title: t('trust.delivery.title'), sub: t('trust.delivery.sub') },
            ].map((tr, i) => (
              <FadeUp key={tr.title} delay={i * 0.1}>
                <div style={{ padding: 'clamp(28px,4vw,48px) clamp(24px,3vw,40px)', borderRight: i < 2 ? '1px solid rgba(240,234,216,0.07)' : 'none', textAlign: 'center' }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', color: '#f0ead8', margin: '0 0 8px' }}>{tr.title}</p>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '11px', color: 'rgba(240,234,216,0.4)', margin: 0, lineHeight: 1.7 }}>{tr.sub}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED COLLECTION ── */}
      <section style={{ padding: 'clamp(72px,9vw,128px) 0' }}>
        <div style={C.container}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 'clamp(40px,5vw,72px)' }}>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(196,163,85,0.8)', marginBottom: '16px' }}>{t('collection.label')}</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px,5vw,64px)', fontWeight: 300, margin: '0 0 16px' }}>{t('collection.title')}</h2>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '14px', color: 'rgba(240,234,216,0.45)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.75 }}>{t('collection.desc')}</p>
            </div>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 'clamp(20px,2.5vw,40px)' }}>
            {featured.map((artwork, i) => (
              <FadeUp key={artwork.id} delay={Math.min(i * 0.07, 0.4)}>
                <ProductCard artwork={artwork} onNavigate={navigate} lang={lang} />
              </FadeUp>
            ))}
          </div>
          <FadeUp style={{ textAlign: 'center', marginTop: 'clamp(40px,5vw,64px)' }}>
            <button onClick={() => navigate('collection')} style={{ background: 'transparent', color: '#f0ead8', border: '1px solid rgba(240,234,216,0.2)', cursor: 'pointer', padding: '13px 40px', fontFamily: "'Jost', sans-serif", fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              {t('collection.viewAll')}
            </button>
          </FadeUp>
        </div>
      </section>

      {/* ── STUDIO STANDARD ── */}
      <section style={{ padding: 'clamp(72px,9vw,128px) 0', background: '#151310' }}>
        <div style={C.container}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(40px,6vw,96px)', alignItems: 'center' }}>
            <FadeUp>
              <div>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(196,163,85,0.8)', marginBottom: '20px' }}>{t('standard.label')}</p>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(30px,4vw,52px)', fontWeight: 300, lineHeight: 1.15, margin: '0 0 24px' }}>
                  {t('standard.title')}
                </h2>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '14px', color: 'rgba(240,234,216,0.5)', lineHeight: 1.85, marginBottom: '32px', fontWeight: 300 }}>{t('standard.desc')}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px' }}>
                  {t('standard.items').map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c4a355', flexShrink: 0 }} />
                      <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '12px', color: 'rgba(240,234,216,0.6)' }}>{item}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => navigate('collection')} style={{ marginTop: '36px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c4a355', padding: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {t('standard.cta')} <span>{isAr ? '←' : '→'}</span>
                </button>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {window.ARTWORKS.slice(0, 4).map(a => (
                  <div key={a.id} style={{ aspectRatio: '1', overflow: 'hidden', cursor: 'pointer' }} onClick={() => navigate('artwork', { id: a.id })}>
                    <img src={a.image} alt={isAr ? a.titleAr : a.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                      onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={e => e.target.style.transform = 'scale(1)'} />
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── ARTISTS ── */}
      <section style={{ padding: 'clamp(72px,9vw,128px) 0' }}>
        <div style={C.container}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 'clamp(40px,5vw,72px)' }}>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(196,163,85,0.8)', marginBottom: '16px' }}>{t('artists.label')}</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px,4.5vw,56px)', fontWeight: 300, margin: 0 }}>{t('artists.title')}</h2>
            </div>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 'clamp(20px,2.5vw,36px)' }}>
            {window.ARTISTS.map((artist, i) => {
              const cover = window.ARTWORKS.find(a => a.artistId === artist.id);
              return (
                <FadeUp key={artist.id} delay={i * 0.1}>
                  <div style={{ cursor: 'pointer' }} onClick={() => navigate('artist', { id: artist.id })}>
                    <div style={{ aspectRatio: '3/4', overflow: 'hidden', marginBottom: '16px', position: 'relative' }}>
                      {cover && <img src={cover.image} alt={artist.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease', filter: 'brightness(0.8)' }}
                        onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                        onMouseLeave={e => e.target.style.transform = 'scale(1)'} />}
                      <div style={{ position: 'absolute', bottom: '16px', left: '16px' }}>
                        <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(240,234,216,0.5)', background: 'rgba(20,18,14,0.7)', padding: '4px 8px' }}>
                          {artist.artworkIds.length} {artist.artworkIds.length === 1 ? t('artists.work') : t('artists.works')}
                        </span>
                      </div>
                    </div>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(240,234,216,0.4)', margin: '0 0 6px' }}>{isAr ? artist.locationAr : artist.location}</p>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 400, color: '#f0ead8', margin: '0 0 8px' }}>{artist.name}</h3>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '12px', color: 'rgba(240,234,216,0.4)', lineHeight: 1.7, margin: 0, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{isAr ? artist.bioAr : artist.bio}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: 'clamp(72px,9vw,128px) 0', background: '#151310' }}>
        <div style={C.container}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 'clamp(40px,5vw,72px)' }}>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(240,234,216,0.3)', marginBottom: '16px' }}>{t('process.label')}</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(30px,4vw,52px)', fontWeight: 300, margin: 0 }}>{t('process.title')}</h2>
            </div>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'clamp(32px,4vw,56px)' }}>
            {t('process.steps').map((s, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', fontWeight: 300, color: 'rgba(196,163,85,0.25)', margin: '0 0 16px', lineHeight: 1 }}>0{i+1}</p>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontWeight: 400, color: '#f0ead8', margin: '0 0 12px' }}>{s.t}</h3>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '12px', color: 'rgba(240,234,216,0.4)', lineHeight: 1.75, margin: 0 }}>{s.d}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section style={{ padding: 'clamp(72px,9vw,128px) 0', borderTop: '1px solid rgba(240,234,216,0.06)' }}>
        <div style={{ ...C.container, maxWidth: '680px', textAlign: 'center' }}>
          <FadeUp>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(196,163,85,0.8)', marginBottom: '20px' }}>{t('newsletter.label')}</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px,4vw,48px)', fontWeight: 300, margin: '0 0 16px' }}>{t('newsletter.title')}</h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '13px', color: 'rgba(240,234,216,0.4)', lineHeight: 1.8, marginBottom: '40px', fontWeight: 300 }}>{t('newsletter.desc')}</p>
            {subscribed ? (
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '22px', color: '#c4a355' }}>{t('newsletter.thanks')}</p>
            ) : (
              <form onSubmit={e => { e.preventDefault(); if (email) setSubscribed(true); }} style={{ display: 'flex', gap: 0, maxWidth: '420px', margin: '0 auto' }}>
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder={t('newsletter.placeholder')}
                  style={{ flex: 1, background: 'transparent', border: 'none', borderBottom: '1px solid rgba(240,234,216,0.2)', color: '#f0ead8', fontFamily: "'Jost', sans-serif", fontSize: '13px', padding: '12px 0', outline: 'none', minWidth: 0 }} />
                <button type="submit" style={{ background: '#c4a355', border: 'none', cursor: 'pointer', color: '#1b1916', padding: '12px 24px', fontFamily: "'Jost', sans-serif", fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  {t('newsletter.btn')}
                </button>
              </form>
            )}
          </FadeUp>
        </div>
      </section>

      {/* ── INSTAGRAM ── */}
      <section style={{ padding: 'clamp(72px,9vw,128px) 0', background: '#151310' }}>
        <div style={C.container}>
          <FadeUp>
            <div style={{ textAlign: 'center', marginBottom: 'clamp(32px,4vw,56px)' }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px,3vw,36px)', fontWeight: 300, margin: '0 0 8px' }}>{t('instagram.title')}</h2>
              <a href="https://www.instagram.com/_olivestudios/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Jost', sans-serif", fontSize: '12px', color: 'rgba(240,234,216,0.35)', textDecoration: 'none', letterSpacing: '0.1em' }}>@_olivestudios</a>
            </div>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
            {window.ARTWORKS.slice(0, 4).map((a, i) => (
              <FadeUp key={a.id} delay={i * 0.08}>
                <a href="https://www.instagram.com/_olivestudios/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', aspectRatio: '1', overflow: 'hidden' }}>
                  <img src={a.image} alt={isAr ? a.titleAr : a.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.06)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'} />
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HomePage });
