
function AboutPage({ navigate, tweaks = {}, lang = 'EN' }) {
  const t = (key, vars) => T(key, lang, vars);
  const isAr = lang === 'AR';

  const storyEN = [
    "Olive Studios was founded with a simple conviction: the photographers of Egypt and the wider region deserve the same platform and quality that their international peers enjoy.",
    "Too often, remarkable work remains unseen outside gallery walls or Instagram feeds. We bridge that gap—producing museum-grade editions that transform photographs into heirloom art objects.",
    "Every print in our collection is produced to the same standards as leading international galleries. Hahnemühle papers, archival inks, individual quality control, and authentic certificates. Locally curated, globally executed.",
    "Our mission is twofold: to give collectors access to exceptional, authenticated photography—and to create meaningful opportunities for artists to reach discerning audiences.",
    "We believe in limited editions because scarcity creates value. We believe in white-glove service because the buying experience should match the quality of the art.",
    "Whether you're decorating a villa in Sahel or an office in Sheikh Zayed, building a collection, or giving a meaningful gift—we're here to guide you to the right piece.",
  ];
  const storyAR = [
    "تأسست أوليف ستوديوز بقناعة بسيطة: يستحق مصورو مصر والمنطقة الأوسع نفس المنصة والجودة التي يتمتع بها أقرانهم الدوليون.",
    "كثيراً ما تظل الأعمال الرائعة غير مرئية خارج جدران المعارض أو خلاصات إنستغرام. نحن نسد هذه الفجوة — ننتج إصدارات بجودة المتاحف تحوّل الصور إلى قطع فنية تتوارثها الأجيال.",
    "كل طبعة في مجموعتنا تُنتج وفق المعايير ذاتها للمعارض الدولية الكبرى. أوراق هانيموله، وأحبار أرشيفية، وفحص جودة فردي، وشهادات أصالة حقيقية. منتقاة محلياً، منفذة عالمياً.",
    "مهمتنا مزدوجة: منح الجامعين إمكانية الوصول إلى تصوير استثنائي موثق — وخلق فرص ذات معنى للفنانين للوصول إلى جماهير متذوقة.",
    "نؤمن بالإصدارات المحدودة لأن الندرة تخلق قيمة. ونؤمن بالخدمة الراقية لأن تجربة الشراء يجب أن ترقى إلى مستوى جودة الفن.",
    "سواء كنت تزين فيلا في الساحل أو مكتباً في الشيخ زايد، أو تبني مجموعة، أو تقدم هدية ذات معنى — نحن هنا لنرشدك إلى القطعة المناسبة.",
  ];
  const story = isAr ? storyAR : storyEN;

  return (
    <div style={{ background: tweaks.bg || '#1b1916', color: '#f0ead8', paddingTop: '108px' }}>
      <section style={{ padding: 'clamp(56px,8vw,112px) clamp(20px,4vw,72px) clamp(40px,5vw,72px)', maxWidth: '1360px', margin: '0 auto' }}>
        <FadeUp>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(196,163,85,0.8)', marginBottom: '20px' }}>{t('about.label')}</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px,6vw,84px)', fontWeight: 300, lineHeight: 1.05, margin: 0, maxWidth: '800px' }}>
            {t('about.title1')}<br /><em>{t('about.title2')}</em>
          </h1>
        </FadeUp>
      </section>

      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 clamp(20px,4vw,72px)' }}>
        <div style={{ height: '1px', background: 'rgba(240,234,216,0.08)' }} />
      </div>

      <section style={{ padding: 'clamp(56px,7vw,96px) clamp(20px,4vw,72px)', maxWidth: '1360px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(40px,6vw,96px)' }}>
          <FadeUp>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(18px,2vw,22px)', color: '#f0ead8', lineHeight: 1.75, margin: 0, fontStyle: 'italic' }}>{story[0]}</p>
              {story.slice(1, 3).map((p, i) => <p key={i} style={{ fontFamily: "'Jost', sans-serif", fontSize: '14px', color: 'rgba(240,234,216,0.58)', lineHeight: 1.9, margin: 0, fontWeight: 300 }}>{p}</p>)}
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {story.slice(3).map((p, i) => <p key={i} style={{ fontFamily: "'Jost', sans-serif", fontSize: '14px', color: 'rgba(240,234,216,0.58)', lineHeight: 1.9, margin: 0, fontWeight: 300 }}>{p}</p>)}
            </div>
          </FadeUp>
        </div>
      </section>

      <section style={{ background: '#131210', padding: 'clamp(56px,7vw,96px) clamp(20px,4vw,72px)', borderTop: '1px solid rgba(240,234,216,0.07)', borderBottom: '1px solid rgba(240,234,216,0.07)' }}>
        <FadeUp>
          <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(18px,2.5vw,28px)', fontStyle: 'italic', fontWeight: 300, color: 'rgba(240,234,216,0.7)', lineHeight: 1.6, display: 'block' }}>{t('about.quote')}</span>
            <span style={{ display: 'block', marginTop: '28px', fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(196,163,85,0.6)' }}>{t('about.quoteBy')}</span>
          </div>
        </FadeUp>
      </section>

      <section style={{ padding: 'clamp(56px,7vw,96px) clamp(20px,4vw,72px)', maxWidth: '1360px', margin: '0 auto' }}>
        <FadeUp><p style={{ fontFamily: "'Jost', sans-serif", fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(240,234,216,0.3)', marginBottom: '48px', textAlign: 'center' }}>{t('about.valuesLabel')}</p></FadeUp>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'clamp(32px,5vw,72px)' }}>
          {t('about.values').map((v, i) => (
            <FadeUp key={v.n} delay={i * 0.1}>
              <div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '40px', fontWeight: 300, color: 'rgba(196,163,85,0.2)', margin: '0 0 20px', lineHeight: 1 }}>{v.n}</p>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', color: '#f0ead8', margin: '0 0 14px' }}>{v.t}</h3>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '13px', color: 'rgba(240,234,216,0.58)', lineHeight: 1.85, margin: 0, fontWeight: 300 }}>{v.d}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section style={{ background: '#131210', padding: 'clamp(56px,7vw,96px) clamp(20px,4vw,72px)', borderTop: '1px solid rgba(240,234,216,0.07)', textAlign: 'center' }}>
        <FadeUp>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px,4vw,52px)', fontWeight: 300, margin: '0 0 16px' }}>{t('about.ctaTitle')}</h2>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '13px', color: 'rgba(240,234,216,0.56)', margin: '0 auto 40px', lineHeight: 1.8, maxWidth: '420px' }}>{t('about.ctaDesc')}</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('collection')} style={{ background: '#c4a355', color: '#1b1916', border: 'none', cursor: 'pointer', padding: '14px 36px', fontFamily: "'Jost', sans-serif", fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500 }}>{t('about.ctaBrowse')}</button>
            <a href={`https://wa.me/${window.CURATOR_WA}`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '14px 36px', background: 'transparent', border: '1px solid rgba(240,234,216,0.2)', color: '#f0ead8', fontFamily: "'Jost', sans-serif", fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none' }}>{t('about.ctaWA')}</a>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
Object.assign(window, { AboutPage });
