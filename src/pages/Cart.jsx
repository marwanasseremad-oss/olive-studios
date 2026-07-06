
function CartPage({ navigate, cart = [], updateCartItem, removeFromCart, lang = 'EN', region = 'egypt', setRegion, currency = 'EGP' }) {
  const isAr = lang === 'AR';
  const bodyFont = isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif";
  const gold = '#c4a355';

  React.useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  const subtotal = cart.reduce((s, i) => s + i.price, 0);
  const framedCount = cart.filter(i => i.framed).length;
  const shipping = cart.length ? window.SHIPPING.cost(region, framedCount) : 0;
  const total = subtotal + shipping;
  const R = window.SHIPPING.regions;

  const editionLabel = (item) => item.tier === 'rare'
    ? (isAr ? 'إصدار نادر' : 'Rare Edition')
    : (isAr ? 'إصدار قياسي' : 'Standard Edition');

  const waMessage = () => {
    const lines = cart.map(i =>
      `• ${i.title} — ${i.artist} · ${editionLabel(i)} · ${i.size} cm · ${i.framed ? 'Framed (' + (i.frameColor || 'black') + ')' : 'Unframed'} — EGP ${i.price.toLocaleString()}`
    ).join('\n');
    const body = isAr
      ? `مرحبًا، أفكّر في هذه القطع قبل الشراء وأودّ الاستعانة بأمين المجموعة:\n${lines}\nالمجموع الفرعي: EGP ${subtotal.toLocaleString()}`
      : `Hi, I'm considering these pieces and would like a curator's guidance before purchasing:\n${lines}\nSubtotal: EGP ${subtotal.toLocaleString()}`;
    return encodeURIComponent(body);
  };

  const L = {
    heading: { fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, letterSpacing: '-0.01em' },
    label: { fontFamily: bodyFont, fontSize: '10px', letterSpacing: isAr ? 0 : '0.2em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(240,234,216,0.4)' },
  };

  const toggleBtn = (active) => ({
    background: active ? 'rgba(196,163,85,0.12)' : 'transparent',
    border: `1px solid ${active ? gold : 'rgba(240,234,216,0.15)'}`,
    color: active ? gold : 'rgba(240,234,216,0.55)',
    cursor: 'pointer', padding: '7px 14px', fontFamily: bodyFont, fontSize: '11px', transition: 'all 0.2s',
  });

  return (
    <div style={{ background: '#1b1916', color: '#f0ead8', paddingTop: '108px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: 'clamp(36px,5vw,72px) clamp(20px,4vw,72px)' }}>

        {/* Breadcrumb + heading */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '24px' }}>
          <button onClick={() => navigate('collection')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: bodyFont, fontSize: '11px', color: 'rgba(240,234,216,0.35)', padding: 0 }}>{isAr ? 'المجموعة' : 'Collection'}</button>
          <span style={{ color: 'rgba(240,234,216,0.2)', fontSize: '11px' }}>·</span>
          <span style={{ fontFamily: bodyFont, fontSize: '11px', color: 'rgba(240,234,216,0.55)' }}>{isAr ? 'السلة' : 'Cart'}</span>
        </div>
        <h1 style={{ ...L.heading, fontSize: 'clamp(34px,4.5vw,56px)', margin: '0 0 8px' }}>{isAr ? 'سلة المشتريات' : 'Your Cart'}</h1>
        <p style={{ fontFamily: bodyFont, fontSize: '13px', color: 'rgba(240,234,216,0.4)', margin: '0 0 40px' }}>
          {cart.length} {isAr ? 'قطعة' : (cart.length === 1 ? 'piece' : 'pieces')}
        </p>

        {cart.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '26px', color: 'rgba(240,234,216,0.4)', margin: '0 0 20px' }}>{isAr ? 'سلتك فارغة.' : 'Your cart is empty.'}</p>
            <button onClick={() => navigate('collection')} style={{ ...PAGE.goldBtn, fontFamily: bodyFont }}>{isAr ? 'تصفّح المجموعة' : 'Browse the Collection'}</button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,360px)', gap: 'clamp(32px,4vw,64px)', alignItems: 'start' }} className="cart-grid">

            {/* Line items */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {cart.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 'clamp(16px,2.5vw,28px)', padding: '28px 0', borderTop: i === 0 ? '1px solid rgba(240,234,216,0.1)' : 'none', borderBottom: '1px solid rgba(240,234,216,0.1)' }}>
                  <img src={item.image} alt={item.title} style={{ width: 'clamp(84px,10vw,120px)', aspectRatio: '4/5', objectFit: 'cover', flexShrink: 0, background: '#242018' }} />
                  <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', alignItems: 'flex-start' }}>
                      <div>
                        <p style={{ ...L.label, margin: '0 0 5px', color: item.tier === 'rare' ? gold : 'rgba(240,234,216,0.45)' }}>{editionLabel(item)}{item.tier === 'rare' ? ' ◆' : ''}</p>
                        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 400, margin: '0 0 2px', lineHeight: 1.15 }}>{item.title}</h3>
                        <p style={{ fontFamily: bodyFont, fontSize: '12px', color: 'rgba(240,234,216,0.45)', margin: 0 }}>{item.artist} · {item.number}</p>
                      </div>
                      <button onClick={() => removeFromCart(i)} title={isAr ? 'إزالة' : 'Remove'} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(240,234,216,0.35)', padding: '2px', flexShrink: 0 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                      </button>
                    </div>

                    {/* Config controls */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', alignItems: 'flex-end', marginTop: '4px' }}>
                      <div>
                        <p style={{ ...L.label, margin: '0 0 7px' }}>{isAr ? 'الحجم' : 'Size'}</p>
                        <span style={{ fontFamily: bodyFont, fontSize: '13px', color: 'rgba(240,234,216,0.75)' }}>{item.size} cm</span>
                      </div>
                      <div>
                        <p style={{ ...L.label, margin: '0 0 7px' }}>{isAr ? 'التأطير' : 'Framing'}</p>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <button onClick={() => updateCartItem(i, { framed: false })} style={toggleBtn(!item.framed)}>{isAr ? 'بدون إطار' : 'Unframed'}</button>
                          <button onClick={() => updateCartItem(i, { framed: true, frameColor: item.frameColor || 'black' })} style={toggleBtn(item.framed)}>{isAr ? 'مع إطار' : 'Framed'}</button>
                        </div>
                      </div>
                      {item.framed && (
                        <div>
                          <p style={{ ...L.label, margin: '0 0 7px' }}>{isAr ? 'لون الإطار' : 'Frame'}</p>
                          <div style={{ display: 'flex', gap: '6px' }}>
                            {[{ v: 'black', sw: '#1a1410', l: isAr ? 'أسود' : 'Black' }, { v: 'white', sw: '#f0ead8', l: isAr ? 'أبيض' : 'White' }].map(o => (
                              <button key={o.v} onClick={() => updateCartItem(i, { frameColor: o.v })} style={{ ...toggleBtn(item.frameColor === o.v), display: 'flex', alignItems: 'center', gap: '7px', paddingLeft: '10px' }}>
                                <span style={{ width: 12, height: 12, background: o.sw, border: '1px solid rgba(240,234,216,0.25)' }} />{o.l}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', color: '#f0ead8', margin: '6px 0 0' }}>
                      {window.formatPrice(item.price, currency).primary}
                      {window.formatPrice(item.price, currency).secondary && <span style={{ fontFamily: bodyFont, fontSize: '12px', color: 'rgba(240,234,216,0.5)', marginLeft: 8 }}>{window.formatPrice(item.price, currency).secondary}</span>}
                    </p>
                    {(item.tier === 'rare' || item.framed) && (
                      <p style={{ fontFamily: bodyFont, fontSize: '11px', color: 'rgba(196,163,85,0.7)', margin: 0, lineHeight: 1.5 }}>
                        {item.tier === 'rare'
                          ? (isAr ? '◆ قطعة نادرة — يوصى بإتمامها عبر أمين المجموعة.' : '◆ Rare Edition — we recommend completing this with a curator.')
                          : (isAr ? 'قطعة مؤطّرة — أمين المجموعة يؤكّد تفاصيل التأطير.' : 'Framed piece — a curator confirms framing details.')}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              <p style={{ fontFamily: bodyFont, fontSize: '12px', color: 'rgba(240,234,216,0.35)', margin: '24px 0 0', lineHeight: 1.7 }}>
                {isAr ? 'تفضّل التحدث مع أمين المجموعة قبل الشراء؟ ' : 'Prefer to speak with a curator before purchasing? '}
                <a href={`https://wa.me/${window.CURATOR_WA}?text=${waMessage()}`} target="_blank" rel="noopener noreferrer" style={{ color: gold, textDecoration: 'underline', textUnderlineOffset: '3px' }}>{isAr ? 'تحدّث معنا' : 'Chat with us'}</a>
              </p>
            </div>

            {/* Summary */}
            <div style={{ position: 'sticky', top: '130px', border: '1px solid rgba(240,234,216,0.1)', background: 'rgba(240,234,216,0.02)', padding: 'clamp(24px,3vw,32px)', display: 'flex', flexDirection: 'column', gap: '22px' }}>
              <h2 style={{ ...L.heading, fontSize: '24px', margin: 0 }}>{isAr ? 'ملخّص الطلب' : 'Order Summary'}</h2>

              {/* Shipping region */}
              <div>
                <p style={{ ...L.label, margin: '0 0 10px' }}>{isAr ? 'الشحن إلى' : 'Shipping to'}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {Object.keys(R).map(key => (
                    <button key={key} onClick={() => setRegion(key)} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      background: region === key ? 'rgba(196,163,85,0.1)' : 'transparent',
                      border: `1px solid ${region === key ? gold : 'rgba(240,234,216,0.14)'}`,
                      color: region === key ? gold : 'rgba(240,234,216,0.6)',
                      cursor: 'pointer', padding: '11px 14px', fontFamily: bodyFont, fontSize: '12px', transition: 'all 0.2s',
                    }}>
                      <span>{isAr ? R[key].labelAr : R[key].labelEn}</span>
                      <span style={{ fontSize: '11px', opacity: 0.8 }}>EGP {window.SHIPPING.cost(key, framedCount).toLocaleString()}</span>
                    </button>
                  ))}
                </div>
                <p style={{ fontFamily: bodyFont, fontSize: '10.5px', color: 'rgba(240,234,216,0.45)', margin: '8px 0 0', lineHeight: 1.5 }}>
                  {isAr ? `الوصول المتوقّع: ${R[region].etaAr}` : `Est. delivery: ${R[region].etaEn}`}{framedCount > 0 ? (isAr ? ' · يشمل صندوق شحن للقطع المؤطّرة' : ' · includes crate for framed pieces') : ''}
                </p>
                {region === 'intl' && (
                  <p style={{ fontFamily: bodyFont, fontSize: '10.5px', color: 'rgba(196,163,85,0.75)', margin: '8px 0 0', lineHeight: 1.6 }}>
                    {isAr ? 'قد تطبّق رسوم جمركية أو ضرائب استيراد حسب قوانين وجهتك، وتُدفع عند الاستلام — غير مشمولة في سعر القطعة أو الشحن.' : 'International orders may be subject to customs duties or import taxes set by your country, payable on delivery — not included in the print or shipping price.'}
                  </p>
                )}
              </div>

              <div style={{ height: '1px', background: 'rgba(240,234,216,0.1)' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Row label={isAr ? 'المجموع الفرعي' : 'Subtotal'} val={window.formatPrice(subtotal, currency).primary} sub={window.formatPrice(subtotal, currency).secondary} font={bodyFont} />
                <Row label={isAr ? 'الشحن' : 'Shipping'} val={window.formatPrice(shipping, currency).primary} sub={window.formatPrice(shipping, currency).secondary} font={bodyFont} />
              </div>
              <div style={{ height: '1px', background: 'rgba(240,234,216,0.1)' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ ...L.label, fontSize: '11px' }}>{isAr ? 'الإجمالي' : 'Total'}</span>
                <span style={{ textAlign: 'right' }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '30px', fontWeight: 300, display: 'block' }}>{window.formatPrice(total, currency).primary}</span>
                  {window.formatPrice(total, currency).secondary && <span style={{ fontFamily: bodyFont, fontSize: '11px', color: 'rgba(240,234,216,0.5)' }}>{window.formatPrice(total, currency).secondary}</span>}
                </span>
              </div>

              <button onClick={() => navigate('checkout')} style={{ background: gold, color: '#1b1916', border: 'none', cursor: 'pointer', padding: '16px', fontFamily: bodyFont, fontSize: '11px', letterSpacing: isAr ? 0 : '0.18em', textTransform: isAr ? 'none' : 'uppercase', fontWeight: 500 }}>
                {isAr ? 'إتمام الشراء' : 'Proceed to Checkout'}
              </button>
              <p style={{ fontFamily: bodyFont, fontSize: '11px', color: 'rgba(240,234,216,0.35)', textAlign: 'center', margin: 0, lineHeight: 1.6 }}>
                {isAr ? 'دفع آمن عبر Paymob وInstapay وفوري (مصر) أو Stripe (دوليًا).' : 'Secure payment via Paymob, Instapay & Fawry (Egypt) or Stripe (international).'}
              </p>
            </div>
          </div>
        )}
      </div>
      <style>{`@media (max-width: 820px){ .cart-grid{ grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

function Row({ label, val, sub, font }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
      <span style={{ fontFamily: font, fontSize: '13px', color: 'rgba(240,234,216,0.58)' }}>{label}</span>
      <span style={{ textAlign: 'right' }}>
        <span style={{ fontFamily: font, fontSize: '13px', color: 'rgba(240,234,216,0.85)' }}>{val}</span>
        {sub && <span style={{ fontFamily: font, fontSize: '10.5px', color: 'rgba(240,234,216,0.45)', display: 'block' }}>{sub}</span>}
      </span>
    </div>
  );
}

Object.assign(window, { CartPage });
