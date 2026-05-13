
function CollectorsPage({ navigate, tweaks = {}, lang = 'EN' }) {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [joined, setJoined] = React.useState(false);
  const isAr = lang === 'AR';

  const c = {
    EN: {
      label: 'Invitation Only', title: "The Collector's", italic: 'Circle',
      desc: 'Be among the first to access Collection 002 — a new series of limited edition prints exploring untold stories of the Mediterranean.',
      launching: 'Launching Summer 2026 · Limited to 25 editions per print',
      namePlaceholder: 'Your name', emailPlaceholder: 'Your email address', joinBtn: 'Join the Circle →',
      privacy: 'No spam, ever. Unsubscribe anytime.',
      joinedTitle: "You're on the list.", joinedDesc: "We'll notify you 48 hours before Collection 002 goes live.",
      benefitsTitle: 'Circle Benefits', benefitsDesc: 'Exclusive privileges for early supporters',
      benefits: [
        { t: 'Private Preview', d: '48-hour early access before public release' },
        { t: 'Reserved Editions', d: 'Priority selection of limited edition numbers' },
        { t: 'Exclusive Pricing', d: 'Collector-only pricing on first editions' },
      ],
      teaserLabel: 'Coming Soon', teaserTitle: 'Collection 002',
      teaserDesc: 'A deeper exploration into the textures, colours, and quiet moments of Mediterranean life. New artists. New perspectives. Same uncompromising quality.',
      stats: [{ n: '10', l: 'New Works' }, { n: '5', l: 'Artists' }, { n: '25', l: 'Editions Each' }],
    },
    AR: {
      label: 'بدعوة فقط', title: 'دائرة', italic: 'الجامعين',
      desc: 'كن من أوائل من يصل إلى المجموعة ٠٠٢ — سلسلة جديدة من الطبعات المحدودة تستكشف قصصاً غير مروية عن البحر المتوسط.',
      launching: 'الإطلاق صيف ٢٠٢٦ · محدودة بـ ٢٥ إصداراً لكل طبعة',
      namePlaceholder: 'اسمك', emailPlaceholder: 'بريدك الإلكتروني', joinBtn: 'انضم إلى الدائرة →',
      privacy: 'لا رسائل مزعجة أبداً. إلغاء الاشتراك في أي وقت.',
      joinedTitle: 'أنت على القائمة.', joinedDesc: 'سنخطرك قبل ٤٨ ساعة من إطلاق المجموعة ٠٠٢.',
      benefitsTitle: 'مزايا الدائرة', benefitsDesc: 'امتيازات حصرية للمؤيدين الأوائل',
      benefits: [
        { t: 'معاينة خاصة', d: 'وصول مبكر لمدة ٤٨ ساعة قبل الإطلاق العام' },
        { t: 'إصدارات محجوزة', d: 'أولوية اختيار أرقام الإصدارات المحدودة' },
        { t: 'أسعار حصرية', d: 'أسعار مخصصة للجامعين على الإصدارات الأولى' },
      ],
      teaserLabel: 'قريباً', teaserTitle: 'المجموعة ٠٠٢',
      teaserDesc: 'استكشاف أعمق لملمس الألوان واللحظات الهادئة لحياة البحر المتوسط. فنانون جدد. منظورات جديدة. نفس الجودة التي لا تتنازل.',
      stats: [{ n: '١٠', l: 'أعمال جديدة' }, { n: '٥', l: 'فنانون' }, { n: '٢٥', l: 'إصدار لكل عمل' }],
    }
  };

  const content = c[lang] || c.EN;

  return (
    <div style={PAGE.wrap(tweaks.bg)}>
      <div style={{ minHeight: '75vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 'clamp(80px,10vw,140px) clamp(20px,5vw,72px) clamp(48px,6vw,80px)' }}>
        <FadeUp>
          <span style={PAGE.label}>{content.label}</span>
          <h1 style={{ ...PAGE.h1, fontSize: 'clamp(40px,6vw,80px)', maxWidth: '700px', margin: '0 auto 20px' }}>
            {content.title}<br /><em style={{ fontStyle: 'italic' }}>{content.italic}</em>
          </h1>
          <p style={{ ...PAGE.body, maxWidth: '500px', margin: '0 auto 12px' }}>{content.desc}</p>
          <p style={{ fontFamily: isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif", fontSize: '11px', letterSpacing: isAr ? 0 : '0.12em', color: 'rgba(196,163,85,0.6)', marginBottom: '48px' }}>{content.launching}</p>
          {joined ? (
            <div style={{ ...PAGE.card, maxWidth: '400px', margin: '0 auto', padding: '40px', textAlign: 'center' }}>
              <span style={{ color: '#c4a355', display: 'flex', justifyContent: 'center', marginBottom: '16px' }}><Icon.Gift /></span>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', color: '#f0ead8', margin: '0 0 8px' }}>{content.joinedTitle}</p>
              <p style={{ ...PAGE.body, fontSize: '12px', margin: 0 }}>{content.joinedDesc}</p>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); if (email) setJoined(true); }} style={{ maxWidth: '380px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <input type="text" placeholder={content.namePlaceholder} value={name} onChange={e => setName(e.target.value)}
                style={{ width: '100%', background: 'rgba(240,234,216,0.06)', border: '1px solid rgba(240,234,216,0.12)', color: '#f0ead8', fontFamily: isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif", fontSize: '13px', padding: '14px 16px', outline: 'none', boxSizing: 'border-box' }} />
              <input type="email" required placeholder={content.emailPlaceholder} value={email} onChange={e => setEmail(e.target.value)}
                style={{ width: '100%', background: 'rgba(240,234,216,0.06)', border: '1px solid rgba(240,234,216,0.12)', color: '#f0ead8', fontFamily: isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif", fontSize: '13px', padding: '14px 16px', outline: 'none', boxSizing: 'border-box' }} />
              <button type="submit" style={{ ...PAGE.goldBtn, width: '100%', padding: '14px' }}>{content.joinBtn}</button>
              <p style={{ fontFamily: isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif", fontSize: '10px', color: 'rgba(240,234,216,0.25)', textAlign: 'center' }}>{content.privacy}</p>
            </form>
          )}
        </FadeUp>
      </div>

      <div style={{ borderTop: '1px solid rgba(240,234,216,0.07)', background: '#151310' }}>
        <div style={PAGE.section()}>
          <FadeUp>
            <h2 style={{ ...PAGE.h2, textAlign: 'center', marginBottom: '8px' }}>{content.benefitsTitle}</h2>
            <p style={{ ...PAGE.body, textAlign: 'center', marginBottom: '48px' }}>{content.benefitsDesc}</p>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'clamp(28px,4vw,48px)' }}>
            {content.benefits.map((b, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(240,234,216,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: '#c4a355' }}>
                    {[<Icon.Eye />, <Icon.Lock />, <Icon.Gift />][i]}
                  </div>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '19px', color: '#f0ead8', margin: '0 0 8px' }}>{b.t}</p>
                  <p style={{ ...PAGE.body, fontSize: '12px', margin: 0 }}>{b.d}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(240,234,216,0.07)' }}>
        <div style={{ ...PAGE.section(), textAlign: 'center' }}>
          <FadeUp>
            <span style={PAGE.label}>{content.teaserLabel}</span>
            <h2 style={{ ...PAGE.h2, fontSize: 'clamp(28px,4vw,52px)', margin: '0 0 20px' }}>{content.teaserTitle}</h2>
            <p style={{ ...PAGE.body, maxWidth: '480px', margin: '0 auto 40px' }}>{content.teaserDesc}</p>
            <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {content.stats.map(s => (
                <div key={s.l} style={{ textAlign: 'center' }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '40px', fontWeight: 300, color: '#f0ead8', display: 'block', lineHeight: 1 }}>{s.n}</span>
                  <span style={{ fontFamily: isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif", fontSize: '11px', color: 'rgba(240,234,216,0.35)' }}>{s.l}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { CollectorsPage });
