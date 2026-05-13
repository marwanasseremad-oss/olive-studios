
function Footer({ navigate, lang = 'EN' }) {
  const t = (key, vars) => T(key, lang, vars);
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const col = { display: 'flex', flexDirection: 'column', gap: '14px' };
  const colHead = { fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(240,234,216,0.35)', marginBottom: '4px' };
  const colLink = { fontFamily: "'Jost', sans-serif", fontSize: '13px', color: 'rgba(240,234,216,0.55)', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.25s', letterSpacing: '0.02em' };

  return (
    <footer style={{ background: '#131210', borderTop: '1px solid rgba(240,234,216,0.06)', paddingTop: '72px', paddingBottom: '40px' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 clamp(24px,5vw,80px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '48px 40px', marginBottom: '64px' }}>

          {/* Brand */}
          <div style={{ ...col }}>
            <img src={window.__resources&&window.__resources.oliveLogo||'src/assets/olive-logo.png'} alt="Olive Studios" style={{ height: '100px', width: 'auto', maxWidth: '220px', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.85, cursor: 'pointer', marginBottom: '8px' }} onClick={() => navigate('home')} />
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '12px', color: 'rgba(240,234,216,0.35)', lineHeight: 1.7, maxWidth: '200px' }}>{t('footer.tagline')}</p>
            <div style={{ display: 'flex', gap: '20px', marginTop: '8px', alignItems: 'center' }}>
              {[
                { href: 'https://www.instagram.com/_olivestudios/', label: 'Instagram', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg> },
                { href: 'https://api.whatsapp.com/send?phone=201001161776', label: 'WhatsApp', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg> },
                { href: 'https://www.facebook.com/olivestudios', label: 'Facebook', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ color: 'rgba(240,234,216,0.4)', textDecoration: 'none', display: 'flex', alignItems: 'center', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#c4a355'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(240,234,216,0.4)'}>
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div style={col}>
            <p style={colHead}>{t('footer.shop')}</p>
            {t('footer.shopLinks').map(l => (
              <span key={l.label} style={colLink} onClick={() => navigate(l.page, l.params || {})}
                onMouseEnter={e => e.target.style.color = '#f0ead8'}
                onMouseLeave={e => e.target.style.color = 'rgba(240,234,216,0.55)'}>{l.label}</span>
            ))}
          </div>

          {/* Services */}
          <div style={col}>
            <p style={colHead}>{t('footer.services')}</p>
            {t('footer.serviceLinks').map(l => (
              <span key={l.label} style={colLink} onClick={() => navigate(l.page)}
                onMouseEnter={e => e.target.style.color = '#f0ead8'}
                onMouseLeave={e => e.target.style.color = 'rgba(240,234,216,0.55)'}>{l.label}</span>
            ))}
          </div>

          {/* Help */}
          <div style={col}>
            <p style={colHead}>{t('footer.help')}</p>
            {t('footer.helpLinks').map(l => (
              <span key={l.label} style={colLink} onClick={() => navigate(l.page)}
                onMouseEnter={e => e.target.style.color = '#f0ead8'}
                onMouseLeave={e => e.target.style.color = 'rgba(240,234,216,0.55)'}>{l.label}</span>
            ))}
          </div>

          {/* Newsletter */}
          <div style={{ ...col }}>
            <p style={colHead}>{t('footer.newsletter')}</p>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '12px', color: 'rgba(240,234,216,0.4)', lineHeight: 1.7 }}>{t('footer.newsletterDesc')}</p>
            {submitted ? (
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '16px', fontStyle: 'italic', color: '#c4a355' }}>{t('footer.newsletterThanks')}</p>
            ) : (
              <form onSubmit={e => { e.preventDefault(); if (email) setSubmitted(true); }} style={{ display: 'flex', gap: 0, marginTop: '4px' }}>
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com"
                  style={{ flex: 1, background: 'transparent', border: 'none', borderBottom: '1px solid rgba(240,234,216,0.2)', color: '#f0ead8', fontFamily: "'Jost', sans-serif", fontSize: '12px', padding: '8px 0', outline: 'none', minWidth: 0 }} />
                <button type="submit" style={{ background: 'none', border: 'none', borderBottom: '1px solid rgba(240,234,216,0.2)', color: '#c4a355', cursor: 'pointer', padding: '8px 12px', fontFamily: "'Jost', sans-serif", fontSize: '14px' }}>→</button>
              </form>
            )}
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(240,234,216,0.06)', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '11px', color: 'rgba(240,234,216,0.25)', margin: 0 }}>{t('footer.copyright')}</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {[t('footer.privacy'), t('footer.terms')].map(l => (
              <span key={l} style={{ fontFamily: "'Jost', sans-serif", fontSize: '11px', color: 'rgba(240,234,216,0.25)', cursor: 'pointer' }}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
Object.assign(window, { Footer });
