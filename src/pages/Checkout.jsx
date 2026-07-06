
function CheckoutPage({ navigate, cart = [], region = 'egypt', setRegion, placeOrder, lang = 'EN', currency = 'EGP' }) {
  const isAr = lang === 'AR';
  const bodyFont = isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif";
  const gold = '#c4a355';

  React.useEffect(() => { window.scrollTo({ top: 0 }); if (!cart.length) navigate('cart'); }, []);

  const [form, setForm] = React.useState({ name: '', email: '', phone: '', address: '', city: '', country: region === 'intl' ? '' : 'Egypt' });
  const [gatewayOverride, setGatewayOverride] = React.useState(null); // null = auto
  const [payMethod, setPayMethod] = React.useState('instapay');
  const [errors, setErrors] = React.useState({});
  const [processing, setProcessing] = React.useState(false);

  const subtotal = cart.reduce((s, i) => s + i.price, 0);
  const framedCount = cart.filter(i => i.framed).length;
  const shipping = window.SHIPPING.cost(region, framedCount);
  const total = subtotal + shipping;
  const R = window.SHIPPING.regions;

  const autoGateway = region === 'intl' ? 'stripe' : 'paymob';
  const gateway = gatewayOverride || autoGateway;

  React.useEffect(() => { setPayMethod(gateway === 'stripe' ? 'card' : 'instapay'); }, [gateway]);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const inputStyle = (err) => ({
    width: '100%', background: 'rgba(240,234,216,0.04)',
    border: `1px solid ${err ? 'rgba(200,90,70,0.6)' : 'rgba(240,234,216,0.14)'}`,
    color: '#f0ead8', fontFamily: bodyFont, fontSize: '14px', padding: '13px 14px', outline: 'none',
  });
  const labelStyle = { fontFamily: bodyFont, fontSize: '10px', letterSpacing: isAr ? 0 : '0.16em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(240,234,216,0.45)', marginBottom: '8px', display: 'block' };

  const field = (k, label, type, full) => (
    <div key={k} style={{ gridColumn: full ? '1 / -1' : 'auto' }}>
      <label style={labelStyle}>{label}</label>
      <input type={type || 'text'} value={form[k]} onChange={e => set(k, e.target.value)} style={inputStyle(errors[k])} />
    </div>
  );

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 1;
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 1;
    if (!form.phone.trim()) e.phone = 1;
    if (!form.address.trim()) e.address = 1;
    if (!form.city.trim()) e.city = 1;
    if (!form.country.trim()) e.country = 1;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const methodLabel = {
    instapay: 'InstaPay', fawry: 'Fawry', card: isAr ? 'بطاقة ائتمان' : 'Card',
  };

  const handlePlace = () => {
    if (!validate()) { window.scrollTo({ top: 120, behavior: 'smooth' }); return; }
    setProcessing(true);
    setTimeout(() => {
      placeOrder({
        buyer: form,
        items: cart.map(i => ({ ...i, editionNumber: i.editionsSold != null ? i.editionsSold + 1 : null })),
        region, subtotal, shipping, total,
        gateway, payMethod,
        eta: isAr ? R[region].etaAr : R[region].etaEn,
      });
    }, 1400);
  };

  const gatewayCard = (key, title, sub, methods) => {
    const active = gateway === key;
    return (
      <button onClick={() => setGatewayOverride(key)} style={{
        textAlign: 'left', width: '100%',
        background: active ? 'rgba(196,163,85,0.08)' : 'transparent',
        border: `1px solid ${active ? gold : 'rgba(240,234,216,0.14)'}`,
        cursor: 'pointer', padding: '16px 18px', transition: 'all 0.2s',
        display: 'flex', flexDirection: 'column', gap: '4px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ width: 14, height: 14, borderRadius: '50%', border: `1px solid ${active ? gold : 'rgba(240,234,216,0.3)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {active && <span style={{ width: 7, height: 7, borderRadius: '50%', background: gold }} />}
          </span>
          <span style={{ fontFamily: bodyFont, fontSize: '14px', color: '#f0ead8' }}>{title}</span>
        </div>
        <span style={{ fontFamily: bodyFont, fontSize: '11.5px', color: 'rgba(240,234,216,0.4)', paddingLeft: '24px' }}>{sub}</span>
      </button>
    );
  };

  return (
    <div style={{ background: '#1b1916', color: '#f0ead8', paddingTop: '108px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: 'clamp(36px,5vw,72px) clamp(20px,4vw,72px)' }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '24px' }}>
          <button onClick={() => navigate('cart')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: bodyFont, fontSize: '11px', color: 'rgba(240,234,216,0.35)', padding: 0 }}>{isAr ? 'السلة' : 'Cart'}</button>
          <span style={{ color: 'rgba(240,234,216,0.2)', fontSize: '11px' }}>·</span>
          <span style={{ fontFamily: bodyFont, fontSize: '11px', color: 'rgba(240,234,216,0.55)' }}>{isAr ? 'الدفع' : 'Checkout'}</span>
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(34px,4.5vw,56px)', margin: '0 0 40px' }}>{isAr ? 'إتمام الشراء' : 'Checkout'}</h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,380px)', gap: 'clamp(32px,4vw,64px)', alignItems: 'start' }} className="cart-grid">

          {/* Form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

            {/* Contact & delivery */}
            <section>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: '24px', margin: '0 0 20px' }}>{isAr ? '١ · التوصيل' : '1 · Delivery Details'}</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {field('name', isAr ? 'الاسم الكامل' : 'Full name', 'text', true)}
                {field('email', isAr ? 'البريد الإلكتروني' : 'Email', 'email')}
                {field('phone', isAr ? 'رقم الهاتف' : 'Phone', 'tel')}
                {field('address', isAr ? 'عنوان التوصيل' : 'Delivery address', 'text', true)}
                {field('city', isAr ? 'المدينة' : 'City', 'text')}
                {field('country', isAr ? 'الدولة' : 'Country', 'text')}
              </div>
              <div style={{ marginTop: '16px' }}>
                <label style={labelStyle}>{isAr ? 'منطقة الشحن' : 'Shipping region'}</label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {Object.keys(R).map(key => (
                    <button key={key} onClick={() => setRegion(key)} style={{
                      background: region === key ? 'rgba(196,163,85,0.1)' : 'transparent',
                      border: `1px solid ${region === key ? gold : 'rgba(240,234,216,0.14)'}`,
                      color: region === key ? gold : 'rgba(240,234,216,0.6)',
                      cursor: 'pointer', padding: '9px 16px', fontFamily: bodyFont, fontSize: '12px', transition: 'all 0.2s',
                    }}>{isAr ? R[key].labelAr : R[key].labelEn}</button>
                  ))}
                </div>
                {region === 'intl' && (
                  <p style={{ fontFamily: bodyFont, fontSize: '11px', color: 'rgba(196,163,85,0.75)', margin: '10px 0 0', lineHeight: 1.6 }}>
                    {isAr ? 'قد تطبَّق رسوم جمركية أو ضرائب استيراد حسب قوانين وجهتك، وتُدفع عند الاستلام مباشرة — غير مشمولة في هذا المبلغ.' : 'International orders may be subject to customs duties or import taxes set by your country, payable directly on delivery — not included in this total.'}
                  </p>
                )}
              </div>
            </section>

            {/* Payment */}
            <section>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: '24px', margin: 0 }}>{isAr ? '٢ · الدفع' : '2 · Payment'}</h2>
                <span style={{ fontFamily: bodyFont, fontSize: '11px', color: 'rgba(196,163,85,0.75)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Icon.Lock /> {isAr ? `تم اختياره تلقائيًا: ${gateway === 'stripe' ? 'دولي' : 'مصر'}` : `Auto-selected: ${gateway === 'stripe' ? 'International' : 'Egypt'}`}
                </span>
              </div>
              <p style={{ fontFamily: bodyFont, fontSize: '12px', color: 'rgba(240,234,216,0.4)', margin: '0 0 16px', lineHeight: 1.6 }}>
                {isAr ? 'اخترنا بوابة الدفع بناءً على وجهة الشحن. يمكنك تغييرها يدويًا.' : 'We chose a gateway based on your shipping destination. You can override it manually.'}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {gatewayCard('paymob', isAr ? 'Paymob — مصر' : 'Paymob — Egypt', isAr ? 'InstaPay · فوري · بطاقات محلية (Meeza / Visa / Mastercard)' : 'InstaPay · Fawry · local cards (Meeza / Visa / Mastercard)')}
                {gatewayCard('stripe', isAr ? 'Stripe — دولي' : 'Stripe — International', isAr ? 'Visa · Mastercard · Amex · Apple Pay' : 'Visa · Mastercard · Amex · Apple Pay')}
              </div>

              {/* Method chips */}
              <div style={{ marginTop: '16px' }}>
                <label style={labelStyle}>{isAr ? 'طريقة الدفع' : 'Payment method'}</label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {(gateway === 'paymob' ? ['instapay', 'fawry', 'card'] : ['card']).map(m => (
                    <button key={m} onClick={() => setPayMethod(m)} style={{
                      background: payMethod === m ? 'rgba(196,163,85,0.12)' : 'transparent',
                      border: `1px solid ${payMethod === m ? gold : 'rgba(240,234,216,0.14)'}`,
                      color: payMethod === m ? gold : 'rgba(240,234,216,0.6)',
                      cursor: 'pointer', padding: '9px 16px', fontFamily: bodyFont, fontSize: '12px', transition: 'all 0.2s',
                    }}>{methodLabel[m]}</button>
                  ))}
                </div>
                <div style={{ marginTop: '16px', border: '1px dashed rgba(240,234,216,0.14)', padding: '18px', textAlign: 'center', fontFamily: bodyFont, fontSize: '12px', color: 'rgba(240,234,216,0.35)', lineHeight: 1.6 }}>
                  {isAr ? `ستُفتح نافذة ${gateway === 'stripe' ? 'Stripe' : 'Paymob'} الآمنة لإتمام الدفع عبر ${methodLabel[payMethod]}.` : `The secure ${gateway === 'stripe' ? 'Stripe' : 'Paymob'} window opens here to complete ${methodLabel[payMethod]} payment.`}
                </div>
              </div>
            </section>
          </div>

          {/* Summary */}
          <div style={{ position: 'sticky', top: '130px', border: '1px solid rgba(240,234,216,0.1)', background: 'rgba(240,234,216,0.02)', padding: 'clamp(24px,3vw,32px)', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: '24px', margin: 0 }}>{isAr ? 'طلبك' : 'Your Order'}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxHeight: '280px', overflowY: 'auto' }}>
              {cart.map((i, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '12px' }}>
                  <img src={i.image} alt={i.title} style={{ width: 48, height: 60, objectFit: 'cover', flexShrink: 0, background: '#242018' }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '16px', margin: '0 0 2px', lineHeight: 1.15 }}>{i.title}</p>
                    <p style={{ fontFamily: bodyFont, fontSize: '11px', color: 'rgba(240,234,216,0.4)', margin: 0 }}>{i.size} cm · {i.framed ? (isAr ? 'مؤطّرة' : 'Framed') : (isAr ? 'بدون إطار' : 'Unframed')}</p>
                  </div>
                  <span style={{ fontFamily: bodyFont, fontSize: '12px', color: 'rgba(240,234,216,0.7)' }}>{window.formatPrice(i.price, currency).primary}</span>
                </div>
              ))}
            </div>
            <div style={{ height: '1px', background: 'rgba(240,234,216,0.1)' }} />
            <Row label={isAr ? 'المجموع الفرعي' : 'Subtotal'} val={window.formatPrice(subtotal, currency).primary} font={bodyFont} />
            <Row label={isAr ? 'الشحن' : 'Shipping'} val={window.formatPrice(shipping, currency).primary} font={bodyFont} />
            <div style={{ height: '1px', background: 'rgba(240,234,216,0.1)' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontFamily: bodyFont, fontSize: '11px', letterSpacing: isAr ? 0 : '0.16em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(240,234,216,0.55)' }}>{isAr ? 'الإجمالي' : 'Total'}</span>
              <span style={{ textAlign: 'right' }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '30px', fontWeight: 300, display: 'block' }}>{window.formatPrice(total, currency).primary}</span>
                {window.formatPrice(total, currency).secondary && <span style={{ fontFamily: bodyFont, fontSize: '11px', color: 'rgba(240,234,216,0.5)' }}>{window.formatPrice(total, currency).secondary}</span>}
              </span>
            </div>
            <button onClick={handlePlace} disabled={processing} style={{ background: processing ? 'rgba(196,163,85,0.4)' : gold, color: '#1b1916', border: 'none', cursor: processing ? 'default' : 'pointer', padding: '16px', fontFamily: bodyFont, fontSize: '11px', letterSpacing: isAr ? 0 : '0.18em', textTransform: isAr ? 'none' : 'uppercase', fontWeight: 600, transition: 'all 0.2s' }}>
              {processing ? (isAr ? 'جارٍ المعالجة…' : 'Processing…') : (isAr ? `ادفع ${window.formatPrice(total, currency).primary}` : `Pay ${window.formatPrice(total, currency).primary}`)}
            </button>
            {currency !== 'EGP' && (
              <p style={{ fontFamily: bodyFont, fontSize: '10.5px', color: 'rgba(240,234,216,0.4)', textAlign: 'center', margin: '-8px 0 0' }}>
                {isAr ? `سيتم الخصم فعليا بالجنيه المصري: ${window.formatPrice(total, 'EGP').primary}` : `You'll be charged in EGP: ${window.formatPrice(total, 'EGP').primary}`}
              </p>
            )}
            <p style={{ fontFamily: bodyFont, fontSize: '11px', color: 'rgba(240,234,216,0.35)', textAlign: 'center', margin: 0, lineHeight: 1.6, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
              <Icon.Lock /> {isAr ? 'دفع مشفّر وآمن' : 'Encrypted, secure payment'}
            </p>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 820px){ .cart-grid{ grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

Object.assign(window, { CheckoutPage });
