
function ArtistsPage({ navigate, tweaks = {}, lang = 'EN' }) {
  const t = (key, vars) => T(key, lang, vars);
  const isAr = lang === 'AR';
  const C = { container: { maxWidth: '1360px', margin: '0 auto', padding: '0 clamp(20px,4vw,72px)' } };
  return (
    <div style={{ background: tweaks.bg || '#1b1916', color: '#f0ead8', paddingTop: '108px' }}>
      <section style={{ padding: 'clamp(56px,8vw,112px) clamp(20px,4vw,72px) clamp(40px,5vw,64px)', maxWidth: '1360px', margin: '0 auto' }}>
        <FadeUp>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(196,163,85,0.8)', marginBottom: '16px' }}>{t('artists.pageLabel')}</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px,6vw,80px)', fontWeight: 300, margin: 0 }}>{t('artists.pageTitle')}</h1>
        </FadeUp>
      </section>
      <section style={{ ...C.container, paddingBottom: 'clamp(72px,9vw,120px)' }}>
        {window.ARTISTS.map((artist, i) => {
          const works = window.ARTWORKS.filter(a => a.artistId === artist.id);
          const cover = works[0];
          return (
            <FadeUp key={artist.id}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(32px,5vw,72px)', alignItems: 'center', padding: 'clamp(48px,6vw,80px) 0', borderBottom: '1px solid rgba(240,234,216,0.07)' }}>
                <div style={{ display: 'flex', gap: '12px', flexDirection: i % 2 === 0 ? 'row' : 'row-reverse' }}>
                  {cover && <div style={{ flex: '0 0 auto', width: 'clamp(160px,25vw,280px)', aspectRatio: '3/4', overflow: 'hidden', cursor: 'pointer' }} onClick={() => navigate('artwork', { id: cover.id })}>
                    <img src={cover.image} alt={artist.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', filter: 'brightness(0.85)' }} onMouseEnter={e => e.target.style.transform = 'scale(1.04)'} onMouseLeave={e => e.target.style.transform = 'scale(1)'} />
                  </div>}
                  {works[1] && <div style={{ flex: '0 0 auto', width: 'clamp(100px,15vw,160px)', aspectRatio: '3/4', overflow: 'hidden', alignSelf: 'flex-end', cursor: 'pointer' }} onClick={() => navigate('artwork', { id: works[1].id })}>
                    <img src={works[1].image} alt={works[1].title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.75)' }} />
                  </div>}
                </div>
                <div style={{ padding: 'clamp(0px,2vw,40px) 0' }}>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(240,234,216,0.35)', marginBottom: '12px' }}>{isAr ? artist.locationAr : artist.location}</p>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px,4vw,52px)', fontWeight: 300, margin: '0 0 20px' }}>{artist.name}</h2>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '14px', color: 'rgba(240,234,216,0.5)', lineHeight: 1.85, margin: '0 0 32px', fontWeight: 300, maxWidth: '440px' }}>{isAr ? artist.bioAr : artist.bio}</p>
                  <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                    <button onClick={() => navigate('artist', { id: artist.id })} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c4a355', padding: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {t('artists.viewWorks')} <span>{isAr ? '←' : '→'}</span>
                    </button>
                    <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '11px', color: 'rgba(240,234,216,0.25)' }}>
                      {works.length} {works.length === 1 ? t('artists.available') : t('artists.availables')}
                    </span>
                  </div>
                </div>
              </div>
            </FadeUp>
          );
        })}
      </section>
    </div>
  );
}

function ArtistDetailPage({ navigate, params = {}, tweaks = {}, lang = 'EN' }) {
  const t = (key, vars) => T(key, lang, vars);
  const isAr = lang === 'AR';
  const artist = window.ARTISTS.find(a => a.id === params.id) || window.ARTISTS[0];
  const works = window.ARTWORKS.filter(a => a.artistId === artist.id);
  const C = { container: { maxWidth: '1360px', margin: '0 auto', padding: '0 clamp(20px,4vw,72px)' } };
  const hero = artist.heroImage;
  return (
    <div style={{ background: tweaks.bg || '#1b1916', color: '#f0ead8', paddingTop: hero ? 0 : '108px' }}>
      {hero ? (
        <section style={{ position: 'relative', minHeight: 'min(94vh, 900px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '148px clamp(20px,4vw,72px) clamp(72px,9vw,110px)', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${hero})`, backgroundSize: 'cover', backgroundPosition: 'center 22%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15,14,12,0.86) 0%, rgba(15,14,12,0.72) 30%, rgba(15,14,12,0.74) 70%, rgba(27,25,21,0.97) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 62% 48% at 50% 52%, rgba(12,11,9,0.62) 0%, rgba(12,11,9,0.34) 55%, rgba(12,11,9,0) 100%)' }} />
          <div style={{ position: 'relative', maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
            <FadeUp>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#d8bd76', marginBottom: '14px', textShadow: '0 1px 12px rgba(0,0,0,0.6)' }}>{isAr ? artist.locationAr : artist.location}</p>
              <h1 style={{ fontFamily: "Futura, 'Futura PT', 'Jost', sans-serif", fontSize: 'clamp(34px,5vw,66px)', fontWeight: 300, letterSpacing: '0.06em', margin: '0 0 28px', color: '#fbf6e9', textShadow: '0 2px 26px rgba(0,0,0,0.55)' }}>{artist.name}</h1>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '14.5px', color: 'rgba(251,246,233,0.9)', lineHeight: 1.95, fontWeight: 300, margin: 0, textWrap: 'pretty', textShadow: '0 1px 16px rgba(0,0,0,0.7)' }}>{isAr ? artist.bioAr : artist.bio}</p>
            </FadeUp>
          </div>
          <button onClick={() => navigate('artists')} style={{ position: 'absolute', top: '124px', left: 'clamp(20px,4vw,72px)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: '11px', letterSpacing: '0.12em', color: 'rgba(251,246,233,0.75)', textTransform: 'uppercase', padding: 0, display: 'flex', alignItems: 'center', gap: '8px', textShadow: '0 1px 12px rgba(0,0,0,0.7)' }}>
            {isAr ? 'جميع الفنانين ←' : '← All Artists'}
          </button>
        </section>
      ) : (
      <section style={{ padding: 'clamp(56px,8vw,96px) clamp(20px,4vw,72px)', maxWidth: '1360px', margin: '0 auto' }}>
        <button onClick={() => navigate('artists')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: '11px', letterSpacing: '0.12em', color: 'rgba(240,234,216,0.35)', textTransform: 'uppercase', padding: 0, marginBottom: '36px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          {isAr ? 'جميع الفنانين ←' : '← All Artists'}
        </button>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 'clamp(40px,6vw,80px)', alignItems: 'start' }}>
          <FadeUp>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(196,163,85,0.8)', marginBottom: '12px' }}>{isAr ? artist.locationAr : artist.location}</p>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px,5vw,68px)', fontWeight: 300, margin: '0 0 24px' }}>{artist.name}</h1>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '14px', color: 'rgba(240,234,216,0.5)', lineHeight: 1.9, fontWeight: 300 }}>{isAr ? artist.bioAr : artist.bio}</p>
          </FadeUp>
          {works[0] && <FadeUp delay={0.1}><div style={{ aspectRatio: '3/4', overflow: 'hidden', cursor: 'pointer' }} onClick={() => navigate('artwork', { id: works[0].id })}><img src={works[0].image} alt={artist.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div></FadeUp>}
        </div>
      </section>
      )}
      <section style={{ ...C.container, paddingBottom: 'clamp(72px,9vw,120px)' }}>
        <FadeUp><p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(240,234,216,0.3)', marginBottom: '36px' }}>{isAr ? `أعمال ${artist.name}` : `Works by ${artist.name}`}</p></FadeUp>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px,1fr))', gap: 'clamp(24px,3vw,48px)' }}>
          {works.map((w, i) => <FadeUp key={w.id} delay={i * 0.1}><ProductCard artwork={w} onNavigate={navigate} lang={lang} /></FadeUp>)}
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { ArtistsPage, ArtistDetailPage });
