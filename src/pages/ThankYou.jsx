
function ThankYouPage({ navigate, order, lang = 'EN' }) {
  const isAr = lang === 'AR';
  const bodyFont = isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif";
  const gold = '#c4a355';

  React.useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  if (!order) {
    return (
      <div style={{ background: '#1b1916', color: '#f0ead8', paddingTop: '160px', minHeight: '100vh', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '24px', color: 'rgba(240,234,216,0.5)', margin: '0 0 24px' }}>{isAr ? 'لا يوجد طلب حديث.' : 'No recent order found.'}</p>
        <button onClick={() => navigate('collection')} style={{ ...PAGE.goldBtn, fontFamily: bodyFont }}>{isAr ? 'تصفّح المجموعة' : 'Browse the Collection'}</button>
      </div>
    );
  }

  const label = { fontFamily: bodyFont, fontSize: '10px', letterSpacing: isAr ? 0 : '0.2em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(240,234,216,0.4)' };
  const waHref = `https://wa.me/${window.CURATOR_WA}?text=${encodeURIComponent(isAr ? `مرحبًا، لديّ سؤال بخصوص طلبي رقم ${order.confirmation}` : `Hi, I have a question about my order ${order.confirmation}`)}`;

  return (
    <div style={{ background: '#1b1916', color: '#f0ead8', paddingTop: '108px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: 'clamp(48px,6vw,88px) clamp(20px,4vw,48px)' }}>

        {/* Confirmation header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', border: `1px solid ${gold}`, color: gold, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <p style={{ ...label, color: gold, marginBottom: '14px' }}>{isAr ? 'تم تأكيد الطلب' : 'Order Confirmed'}</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(30px,4vw,48px)', margin: '0 0 16px', lineHeight: 1.1 }}>
            {isAr ? `شكرًا لك، ${order.buyer.name.split(' ')[0]}.` : `Thank you, ${order.buyer.name.split(' ')[0]}.`}
          </h1>
          <p style={{ fontFamily: bodyFont, fontSize: '14px', color: 'rgba(240,234,216,0.5)', margin: 0, lineHeight: 1.8 }}>
            {isAr ? 'طلبك قيد التحضير في الاستوديو. أرسلنا تأكيدًا إلى بريدك الإلكتروني.' : 'Your order is being prepared in the studio. A confirmation has been sent to your email.'}
          </p>
        </div>

        {/* Key facts */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1px', background: 'rgba(240,234,216,0.1)', border: '1px solid rgba(240,234,216,0.1)', marginBottom: '40px' }}>
          {[
            { l: isAr ? 'رقم التأكيد' : 'Confirmation number', v: order.confirmation },
            { l: isAr ? 'مدّة التوصيل المتوقّعة' : 'Expected delivery', v: order.eta },
            { l: isAr ? 'طريقة الدفع' : 'Paid via', v: order.gateway === 'stripe' ? 'Stripe' : 'Paymob' },
          ].map(f => (
            <div key={f.l} style={{ background: '#1b1916', padding: '22px 24px' }}>
              <p style={{ ...label, margin: '0 0 8px' }}>{f.l}</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', color: '#f0ead8', margin: 0 }}>{f.v}</p>
            </div>
          ))}
        </div>

        {/* Edition confirmation per item */}
        <div style={{ border: '1px solid rgba(196,163,85,0.25)', background: 'rgba(196,163,85,0.04)', padding: 'clamp(24px,3vw,32px)', marginBottom: '40px' }}>
          <p style={{ ...label, color: gold, margin: '0 0 20px' }}>{isAr ? 'إصداراتك' : 'Your Editions'}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {order.items.map((i, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <img src={i.image} alt={i.title} style={{ width: 52, height: 65, objectFit: 'cover', flexShrink: 0, background: '#242018' }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '19px', margin: '0 0 3px' }}>{i.title}</p>
                  <p style={{ fontFamily: bodyFont, fontSize: '12px', color: 'rgba(240,234,216,0.5)', margin: 0 }}>
                    {i.artist} · {i.size} cm · {i.framed ? (isAr ? 'مؤطّرة' : 'Framed') : (isAr ? 'بدون إطار' : 'Unframed')}
                  </p>
                  {i.editionNumber != null && (
                    <p style={{ fontFamily: bodyFont, fontSize: '12px', color: gold, margin: '5px 0 0' }}>
                      {isAr ? `أنت تستلم النسخة ${i.editionNumber} من ${i.editionSize} من "${i.title}"` : `You are receiving copy ${i.editionNumber} of ${i.editionSize} of "${i.title}"`}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate note */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '0 4px', marginBottom: '40px', color: 'rgba(240,234,216,0.55)' }}>
          <span style={{ color: gold, flexShrink: 0, marginTop: '2px' }}><Icon.Shield /></span>
          <p style={{ fontFamily: bodyFont, fontSize: '13px', margin: 0, lineHeight: 1.75 }}>
            {isAr
              ? 'يتضمّن بريد التأكيد نسخة مبدئية (PDF) من شهادة الأصالة. تُسلّم الشهادة النهائية المرقّمة والموقّعة مع المطبوعة الفعلية.'
              : 'Your confirmation email includes a placeholder PDF Certificate of Authenticity. The final numbered and signed Certificate is delivered with your physical print.'}
          </p>
        </div>

        {/* Post-purchase contact */}
        <div style={{ textAlign: 'center', borderTop: '1px solid rgba(240,234,216,0.1)', paddingTop: '40px' }}>
          <p style={{ fontFamily: bodyFont, fontSize: '13px', color: 'rgba(240,234,216,0.5)', margin: '0 0 18px', lineHeight: 1.7 }}>
            {isAr ? 'أي سؤال بعد الشراء؟ أمين المجموعة في خدمتك.' : 'Any questions after your purchase? A curator is here to help.'}
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={waHref} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 26px', border: `1px solid ${gold}`, color: gold, fontFamily: bodyFont, fontSize: '11px', letterSpacing: isAr ? 0 : '0.15em', textTransform: isAr ? 'none' : 'uppercase', textDecoration: 'none' }}>
              <Icon.WA /> {isAr ? 'تواصل مع أمين المجموعة' : 'Message a Curator'}
            </a>
            <button onClick={() => navigate('collection')} style={{ padding: '13px 26px', background: 'transparent', border: '1px solid rgba(240,234,216,0.2)', color: 'rgba(240,234,216,0.7)', fontFamily: bodyFont, fontSize: '11px', letterSpacing: isAr ? 0 : '0.15em', textTransform: isAr ? 'none' : 'uppercase', cursor: 'pointer' }}>
              {isAr ? 'متابعة التصفّح' : 'Continue Browsing'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ThankYouPage });
