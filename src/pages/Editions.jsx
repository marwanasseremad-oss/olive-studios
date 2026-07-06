
function EditionsPage({ navigate, tweaks = {}, lang = 'EN' }) {
  const isAr = lang === 'AR';
  const bodyFont = isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif";

  const enContent = {
    label: 'Edition Policy',
    title: 'Our Editions',
    policyTitle: 'Our Edition Policy',
    policy: `Each Olive Studios print is produced in a fixed edition. Standard Edition pieces are produced in editions of 10; Rare Edition pieces in editions of 5. Once an edition is sold, no further copies of that image are produced at any size, in any format, ever. Each piece is individually numbered, signed by the photographer, and accompanied by a Certificate of Authenticity.\n\nThis is our promise: scarcity is real, not marketed.`,
    tiers: [
      {
        badge: 'Standard Edition',
        size: 'Edition of 10',
        desc: 'Eight works in our launch collection carry Standard Edition status. Each image is produced in exactly 10 copies per size variant. When the tenth copy sells, that image is retired permanently.',
        prices: [
          { size: '30×40', unframed: 'EGP 1,950', framed: 'EGP 3,200' },
          { size: '50×70', unframed: 'EGP 3,900', framed: 'EGP 5,400' },
          { size: '70×100', unframed: 'EGP 5,900', framed: 'EGP 8,500' },
        ],
      },
      {
        badge: 'Rare Edition',
        isRare: true,
        size: 'Edition of 5',
        desc: 'Two works in our launch collection — those of the greatest cultural weight and visual significance — carry Rare Edition status. Five copies per size, across all formats. No exceptions.',
        prices: [
          { size: '30×40', unframed: 'EGP 2,340', framed: 'EGP 3,840' },
          { size: '50×70', unframed: 'EGP 4,680', framed: 'EGP 6,480' },
          { size: '70×100', unframed: 'EGP 7,080', framed: 'EGP 10,200' },
        ],
      },
    ],
    promise: 'When the last copy of any work sells, no further copies will be produced. Not at a different size. Not in a different format. Not in a future collection. The edition is closed.',
    certTitle: 'Certificate of Authenticity',
    certDesc: 'Every Olive Studios print ships with a Certificate of Authenticity bearing the edition number, the photographer\'s signature, the print\'s specifications, and our studio seal. The certificate is unique to each copy and cannot be reproduced.',
    ctaTitle: 'Ready to Collect?',
    ctaBtn: 'Browse the Collection',
  };

  const arContent = {
    label: 'سياسة الإصدارات',
    title: 'إصداراتنا',
    policyTitle: 'سياسة الإصدارات',
    policy: `كل طبعة من أوليف ستوديوز تُنتج في إصدار ثابت. الإصدارات القياسية تُنتج في ١٠ نسخ؛ الإصدارات النادرة في ٥ نسخ. حين يُباع آخر إصدار من أي عمل، لن تُنتج نسخ إضافية من تلك الصورة، بأي حجم، أو أي تنسيق، أبداً. كل قطعة مرقمة بشكل فردي، موقعة من المصور، ومرفقة بشهادة أصالة.\n\nهذا وعدنا: الندرة حقيقية، لا تسويقية.`,
    tiers: [
      {
        badge: 'الإصدار القياسي',
        size: 'إصدار ١٠ نسخ',
        desc: 'ثمانية أعمال في مجموعتنا الافتتاحية تحمل صفة الإصدار القياسي. كل صورة تُنتج في ١٠ نسخ بالضبط لكل حجم. حين تُباع النسخة العاشرة، يُغلق ذلك العمل نهائياً.',
        prices: [
          { size: '٣٠×٤٠', unframed: 'EGP 1,950', framed: 'EGP 3,200' },
          { size: '٥٠×٧٠', unframed: 'EGP 3,900', framed: 'EGP 5,400' },
          { size: '٧٠×١٠٠', unframed: 'EGP 5,900', framed: 'EGP 8,500' },
        ],
      },
      {
        badge: 'الإصدار النادر',
        isRare: true,
        size: 'إصدار ٥ نسخ',
        desc: 'عملان في مجموعتنا الافتتاحية — الأكثر ثقلاً ثقافياً وأهمية بصرية — يحملان صفة الإصدار النادر. خمس نسخ فقط لكل حجم، عبر جميع التنسيقات. بلا استثناء.',
        prices: [
          { size: '٣٠×٤٠', unframed: 'EGP 2,340', framed: 'EGP 3,840' },
          { size: '٥٠×٧٠', unframed: 'EGP 4,680', framed: 'EGP 6,480' },
          { size: '٧٠×١٠٠', unframed: 'EGP 7,080', framed: 'EGP 10,200' },
        ],
      },
    ],
    promise: 'حين يُباع آخر إصدار من أي عمل، لن تُنتج نسخ إضافية. لا بحجم مختلف. لا بتنسيق مختلف. لا في مجموعة مستقبلية. الإصدار مغلق.',
    certTitle: 'شهادة الأصالة',
    certDesc: 'كل طبعة من أوليف ستوديوز تُشحن مع شهادة أصالة تحمل رقم الإصدار وتوقيع المصور ومواصفات الطبعة وختم الاستوديو. الشهادة فريدة لكل نسخة ولا يمكن إعادة إنتاجها.',
    ctaTitle: 'مستعد للاقتناء؟',
    ctaBtn: 'تصفح المجموعة',
  };

  const c = isAr ? arContent : enContent;

  return (
    <div style={{ background: tweaks.bg || '#1b1916', color: '#f0ead8', paddingTop: '108px' }}>

      {/* Hero */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: 'clamp(56px,8vw,112px) clamp(20px,5vw,72px) clamp(40px,5vw,64px)' }}>
        <FadeUp>
          <span style={{ fontFamily: bodyFont, fontSize: '10px', letterSpacing: isAr ? 0 : '0.22em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(196,163,85,0.8)', marginBottom: '16px', display: 'block' }}>{c.label}</span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px,6vw,80px)', fontWeight: 300, margin: '0 0 0', letterSpacing: '-0.01em' }}>{c.title}</h1>
        </FadeUp>
      </div>

      {/* Policy statement */}
      <div style={{ background: '#131210', borderTop: '1px solid rgba(240,234,216,0.07)', borderBottom: '1px solid rgba(240,234,216,0.07)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: 'clamp(48px,6vw,80px) clamp(20px,5vw,72px)' }}>
          <FadeUp>
            <div style={{ maxWidth: '680px' }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px,3vw,36px)', fontWeight: 300, margin: '0 0 28px' }}>{c.policyTitle}</h2>
              {c.policy.split('\n\n').map((para, i) => (
                <p key={i} style={{ fontFamily: bodyFont, fontSize: '15px', color: i === 1 ? '#f0ead8' : 'rgba(240,234,216,0.55)', lineHeight: 1.9, margin: '0 0 20px', fontWeight: i === 1 ? 400 : 300, fontStyle: i === 1 ? 'italic' : 'normal' }}>{para}</p>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Tier comparison */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: 'clamp(56px,7vw,96px) clamp(20px,5vw,72px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(32px,4vw,56px)' }}>
          {c.tiers.map((tier, i) => (
            <FadeUp key={i} delay={i * 0.12}>
              <div style={{ border: `1px solid ${tier.isRare ? 'rgba(196,163,85,0.3)' : 'rgba(240,234,216,0.08)'}`, padding: 'clamp(28px,4vw,48px)', background: tier.isRare ? 'rgba(196,163,85,0.04)' : 'transparent' }}>
                {/* Badge */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                  {tier.isRare && <span style={{ color: '#c4a355', fontSize: '10px' }}>◆</span>}
                  <span style={{ fontFamily: bodyFont, fontSize: '10px', letterSpacing: isAr ? 0 : '0.16em', textTransform: isAr ? 'none' : 'uppercase', color: tier.isRare ? '#c4a355' : 'rgba(240,234,216,0.5)' }}>{tier.badge}</span>
                </div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px,3vw,40px)', fontWeight: 300, color: '#f0ead8', margin: '0 0 16px', lineHeight: 1 }}>{tier.size}</p>
                <p style={{ fontFamily: bodyFont, fontSize: '13px', color: 'rgba(240,234,216,0.5)', lineHeight: 1.8, margin: '0 0 28px', fontWeight: 300 }}>{tier.desc}</p>
                {/* Price table */}
                <div style={{ borderTop: '1px solid rgba(240,234,216,0.08)', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ fontFamily: bodyFont, fontSize: '9px', letterSpacing: isAr ? 0 : '0.12em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(240,234,216,0.25)' }}>{isAr ? 'الحجم' : 'Size'}</span>
                    <span style={{ fontFamily: bodyFont, fontSize: '9px', letterSpacing: isAr ? 0 : '0.12em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(240,234,216,0.25)', textAlign: 'center' }}>{isAr ? 'بدون إطار' : 'Unframed'}</span>
                    <span style={{ fontFamily: bodyFont, fontSize: '9px', letterSpacing: isAr ? 0 : '0.12em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(240,234,216,0.25)', textAlign: 'right' }}>{isAr ? 'مع إطار' : 'Framed'}</span>
                  </div>
                  {tier.prices.map(row => (
                    <div key={row.size} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', borderBottom: '1px solid rgba(240,234,216,0.05)', paddingBottom: '10px' }}>
                      <span style={{ fontFamily: bodyFont, fontSize: '12px', color: 'rgba(240,234,216,0.6)' }}>{row.size}</span>
                      <span style={{ fontFamily: bodyFont, fontSize: '12px', color: 'rgba(240,234,216,0.6)', textAlign: 'center' }}>{row.unframed}</span>
                      <span style={{ fontFamily: bodyFont, fontSize: '12px', color: 'rgba(240,234,216,0.6)', textAlign: 'right' }}>{row.framed}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Promise */}
      <div style={{ background: '#131210', borderTop: '1px solid rgba(240,234,216,0.07)', borderBottom: '1px solid rgba(240,234,216,0.07)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: 'clamp(56px,7vw,96px) clamp(20px,5vw,72px)', textAlign: 'center' }}>
          <FadeUp>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(18px,2.5vw,26px)', fontStyle: 'italic', color: 'rgba(240,234,216,0.7)', lineHeight: 1.7, margin: 0 }}>{c.promise}</p>
          </FadeUp>
        </div>
      </div>

      {/* Certificate */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: 'clamp(56px,7vw,96px) clamp(20px,5vw,72px)' }}>
        <FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(32px,5vw,72px)', alignItems: 'center' }}>
            <div>
              <span style={{ fontFamily: bodyFont, fontSize: '10px', letterSpacing: isAr ? 0 : '0.22em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(196,163,85,0.8)', display: 'block', marginBottom: '20px' }}>{isAr ? 'الوثيقة' : 'Documentation'}</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px,3vw,40px)', fontWeight: 300, margin: '0 0 20px' }}>{c.certTitle}</h2>
              <p style={{ fontFamily: bodyFont, fontSize: '14px', color: 'rgba(240,234,216,0.5)', lineHeight: 1.85, fontWeight: 300 }}>{c.certDesc}</p>
            </div>
            {/* Certificate visual */}
            <div style={{ border: '1px solid rgba(196,163,85,0.2)', padding: '36px', background: 'rgba(196,163,85,0.03)' }}>
              <p style={{ fontFamily: bodyFont, fontSize: '9px', letterSpacing: isAr ? 0 : '0.2em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(196,163,85,0.6)', marginBottom: '20px' }}>Olive Studios — {isAr ? 'شهادة أصالة' : 'Certificate of Authenticity'}</p>
              {[
                { l: isAr ? 'العمل' : 'Work', v: isAr ? 'هندسة الإيمان' : 'Geometry of Faith' },
                { l: isAr ? 'الفنان' : 'Artist', v: 'Karim Hassan' },
                { l: isAr ? 'الإصدار' : 'Edition', v: isAr ? '٢ من ٥' : '2 of 5' },
                { l: isAr ? 'النوع' : 'Tier', v: isAr ? 'إصدار نادر' : 'Rare Edition' },
                { l: isAr ? 'الوسيط' : 'Medium', v: isAr ? 'هانيموله ٣٠٨ جرام' : 'Hahnemühle 308 gsm' },
                { l: isAr ? 'السنة' : 'Year', v: '2026' },
              ].map(row => (
                <div key={row.l} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(240,234,216,0.06)', padding: '8px 0' }}>
                  <span style={{ fontFamily: bodyFont, fontSize: '11px', color: 'rgba(240,234,216,0.35)' }}>{row.l}</span>
                  <span style={{ fontFamily: bodyFont, fontSize: '11px', color: 'rgba(240,234,216,0.65)' }}>{row.v}</span>
                </div>
              ))}
              <div style={{ marginTop: '20px', borderTop: '1px solid rgba(196,163,85,0.2)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '18px', color: '#c4a355', margin: 0 }}>Karim Hassan</p>
                  <p style={{ fontFamily: bodyFont, fontSize: '9px', color: 'rgba(240,234,216,0.25)', margin: '4px 0 0' }}>{isAr ? 'توقيع الفنان' : "Artist's signature"}</p>
                </div>
                <div style={{ width: '32px', height: '32px', border: '1px solid rgba(196,163,85,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#c4a355', fontSize: '10px' }}>◆</span>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>

      {/* CTA */}
      <div style={{ background: '#131210', borderTop: '1px solid rgba(240,234,216,0.07)', padding: 'clamp(56px,7vw,80px) 0', textAlign: 'center' }}>
        <FadeUp>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(26px,3.5vw,44px)', fontWeight: 300, margin: '0 0 32px' }}>{c.ctaTitle}</h2>
          <button onClick={() => navigate('collection')} style={{ background: '#c4a355', color: '#1b1916', border: 'none', cursor: 'pointer', padding: '14px 40px', fontFamily: bodyFont, fontSize: '11px', letterSpacing: isAr ? 0 : '0.18em', textTransform: isAr ? 'none' : 'uppercase', fontWeight: 500 }}>{c.ctaBtn}</button>
        </FadeUp>
      </div>
    </div>
  );
}
Object.assign(window, { EditionsPage });
