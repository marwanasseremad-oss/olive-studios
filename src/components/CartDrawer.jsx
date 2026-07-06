
function CartDrawer({ cart, onClose, onRemove, navigate, lang = 'EN', currency = 'EGP' }) {
  const t = (key, vars) => T(key, lang, vars);
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const waMessage = cart.length
    ? encodeURIComponent('Hi! I\'d like to order:\n' + cart.map(i => `• ${i.title} (${i.size}${i.framed ? `, framed${i.frameColor ? ' — ' + i.frameColor + ' frame' : ''}` : ''}) — EGP ${i.price.toLocaleString()}`).join('\n') + `\nTotal: EGP ${total.toLocaleString()}`)
    : '';

  return (
    <>
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 200 }} />
      <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 201, width: 'min(420px, 92vw)', background: '#1e1c18', borderLeft: '1px solid rgba(240,234,216,0.08)', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 28px', borderBottom: '1px solid rgba(240,234,216,0.08)' }}>
          <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 400, color: '#f0ead8', margin: 0 }}>{t('cart.title')}</h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '11px', color: 'rgba(240,234,216,0.4)', margin: '2px 0 0' }}>{cart.length} {lang === 'AR' ? 'قطعة' : (cart.length === 1 ? 'item' : 'items')}</p>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(240,234,216,0.5)', padding: '4px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div style={{ flex: 1, padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', paddingTop: '60px' }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '20px', color: 'rgba(240,234,216,0.35)' }}>{t('cart.empty')}</p>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '12px', color: 'rgba(240,234,216,0.25)', marginTop: '8px' }}>{t('cart.emptyDesc')}</p>
            </div>
          ) : (
            cart.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <img src={item.image} alt={item.title} style={{ width: '72px', height: '90px', objectFit: 'cover', flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(240,234,216,0.4)', margin: '0 0 4px' }}>{item.artist}</p>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '17px', color: '#f0ead8', margin: '0 0 4px' }}>{item.title}</p>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '11px', color: 'rgba(240,234,216,0.5)', margin: '0 0 8px' }}>{item.size} {item.framed ? `· Framed${item.frameColor ? ' (' + item.frameColor + ')' : ''}` : '· Unframed'} · {item.number}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '13px', color: '#c4a355', margin: 0 }}>{window.formatPrice(item.price, currency).primary}</p>
                    <button onClick={() => onRemove(i)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.1em', color: 'rgba(240,234,216,0.3)', textTransform: 'uppercase' }}>{t('cart.remove')}</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div style={{ padding: '24px 28px', borderTop: '1px solid rgba(240,234,216,0.08)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '12px', letterSpacing: '0.08em', color: 'rgba(240,234,216,0.55)', textTransform: 'uppercase' }}>{t('cart.subtotal')}</span>
              <span style={{ textAlign: 'right' }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', color: '#f0ead8', display: 'block' }}>{window.formatPrice(total, currency).primary}</span>
                {window.formatPrice(total, currency).secondary && <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', color: 'rgba(240,234,216,0.45)' }}>{window.formatPrice(total, currency).secondary}</span>}
              </span>
            </div>
            <button onClick={() => { onClose(); navigate && navigate('cart'); }} style={{ display: 'block', textAlign: 'center', padding: '14px', background: '#c4a355', color: '#1b1916', border: 'none', cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: '11px', letterSpacing: lang === 'AR' ? 0 : '0.15em', textTransform: lang === 'AR' ? 'none' : 'uppercase', fontWeight: 500 }}>{lang === 'AR' ? 'عرض السلة والدفع' : 'View Cart & Checkout'}</button>
            <a href={`https://wa.me/${window.CURATOR_WA}?text=${waMessage}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px', background: 'transparent', border: '1px solid rgba(240,234,216,0.18)', color: 'rgba(240,234,216,0.7)', fontFamily: "'Jost', sans-serif", fontSize: '11px', letterSpacing: lang === 'AR' ? 0 : '0.12em', textTransform: lang === 'AR' ? 'none' : 'uppercase', textDecoration: 'none' }}>{lang === 'AR' ? 'تحدّث مع أمين المجموعة' : 'Speak with a Curator'}</a>
          </div>
        )}
      </div>
    </>
  );
}
Object.assign(window, { CartDrawer });
