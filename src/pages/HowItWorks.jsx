
function HowItWorksPage({ navigate, lang = 'EN' }) {
  const isAr = lang === 'AR';
  const bodyFont = isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif";
  const gold = '#c4a355';

  React.useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  const label = { fontFamily: bodyFont, fontSize: '10px', letterSpacing: isAr ? 0 : '0.22em', textTransform: isAr ? 'none' : 'uppercase', color: gold, marginBottom: '16px', display: 'block' };
  const h2 = { fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(26px,3.2vw,40px)', margin: '0 0 18px', lineHeight: 1.12 };
  const body = { fontFamily: bodyFont, fontSize: '15px', color: 'rgba(240,234,216,0.55)', lineHeight: 1.9, fontWeight: 300, margin: 0 };
  const container = { maxWidth: '900px', margin: '0 auto', padding: '0 clamp(20px,5vw,48px)' };

  const sections = [
    {
      icon: <Icon.Package />,
      tag: isAr ? 'شراء مباشر' : 'Buy directly',
      title: isAr ? 'الإصدارات القياسية' : 'Standard Editions',
      body: isAr
        ? 'المطبوعات القياسية غير المؤطّرة متاحة للشراء المباشر عبر الموقع. أضِفها إلى السلة، اختر المقاس، وادفع بأمان — تصلك مرقّمة ضمن إصدار من ١٠ نسخ، مصحوبة بشهادة أصالة موقّعة. لا حاجة لأي محادثة؛ يمكنك إتمام الطلب في دقائق.'
        : 'Standard Edition unframed prints are available for direct purchase on the site. Add to cart, choose your size, and pay securely — each arrives edition-numbered within an edition of 10, with a signed Certificate of Authenticity. No conversation required; you can complete an order in minutes.',
    },
    {
      icon: <Icon.Sparkles />,
      tag: isAr ? 'عبر أمين المجموعة' : 'Through a curator',
      title: isAr ? 'الإصدارات النادرة والقطع المؤطّرة' : 'Rare Editions & Framed Pieces',
      body: isAr
        ? 'الإصدارات النادرة (٥ نسخ فقط) وجميع الطلبات المؤطّرة تُدار عبر أمين المجموعة على واتساب. يضمن ذلك محادثة صحيحة حول سلامة الإصدار، وخيارات التأطير، والتوصيل. يبقى زر "أضف إلى السلة" متاحًا دائمًا كخيار ثانوي إن فضّلت الشراء الذاتي.'
        : 'Rare Editions (just 5 copies) and all framed orders are handled through a curator on WhatsApp. This ensures a proper conversation about edition integrity, framing options, and delivery. "Add to Cart" always remains available as a secondary option if you prefer to self-serve.',
    },
    {
      icon: <Icon.WA />,
      tag: isAr ? 'الخدمة الشخصية' : 'The human touch',
      title: isAr ? 'تجربة أمين المجموعة' : 'The Curator Experience',
      body: isAr
        ? 'إن اخترت التحدّث مع أمين المجموعة، توقّع ردًّا خلال ساعتين أثناء ساعات عمل القاهرة (١٠ص–٨م). ستحصل على إرشاد شخصي، وتنسيق حول التأطير والشحن، وإجابات عن أي سؤال حول العمل أو الفنان — دون أي التزام بالشراء.'
        : 'If you choose to speak with a curator, expect a response within 2 hours during Cairo business hours (10am–8pm). You will receive personalized guidance, coordination on framing and shipping, and answers to any question about the work or the artist — with no obligation to buy.',
    },
    {
      icon: <Icon.Truck />,
      tag: isAr ? 'من الاستوديو إلى جدارك' : 'Studio to your wall',
      title: isAr ? 'التوصيل والعناية' : 'Delivery & Care',
      body: isAr
        ? 'تُطبع كل قطعة عند الطلب على ورق هانيموله الفني وتُفحص يدويًا. تُشحن المطبوعات غير المؤطّرة ملفوفة في أنبوب أرشيفي؛ أما القطع المؤطّرة فتُشحن في صندوق مخصّص. مدّة التوصيل: ٣–٥ أيام داخل القاهرة، ٥–٨ أيام لباقي مصر، و١٠–١٥ يومًا دوليًا.'
        : 'Every piece is printed to order on Hahnemühle fine art paper and inspected by hand. Unframed prints ship rolled in an archival tube; framed pieces ship in a custom crate. Delivery timelines: 3–5 days within Cairo, 5–8 days for the rest of Egypt, and 10–15 days internationally.',
    },
  ];

  return (
    <div style={{ background: '#1b1916', color: '#f0ead8', paddingTop: '108px', minHeight: '100vh' }}>

      {/* Intro */}
      <section style={{ ...container, padding: 'clamp(56px,7vw,110px) clamp(20px,5vw,48px) clamp(32px,4vw,56px)' }}>
        <span style={label}>{isAr ? 'كيف نبيع' : 'How It Works'}</span>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(38px,6vw,74px)', margin: '0 0 28px', lineHeight: 1.05, letterSpacing: '-0.01em' }}>
          {isAr ? 'اشترِ مباشرة. وتحدّث معنا حين تريد.' : 'Buy directly. Talk to us when you want.'}
        </h1>
        <p style={{ ...body, fontSize: '17px', maxWidth: '640px' }}>
          {isAr
            ? 'في أوليڤ ستوديوز نبيع مطبوعات فنية بمستوى المقتنين بطريقتين معًا: يمكنك شراء الإصدارات القياسية مباشرة عبر الموقع في دقائق، أو الاستعانة بأمين مجموعة يرافقك في القطع النادرة والمؤطّرة والطلبات المتعدّدة. اليسر حين تريده، واللمسة الإنسانية حين تحتاجها.'
            : 'At Olive Studios we sell collector-grade prints two ways at once: you can buy Standard Editions directly on the site in minutes, or lean on a curator who accompanies you through Rare, framed, and multi-piece purchases. Convenience when you want it, the human touch when you need it.'}
        </p>
      </section>

      {/* Sections */}
      <section style={{ ...container, paddingBottom: 'clamp(48px,6vw,88px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {sections.map((s, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 'clamp(20px,3vw,40px)', padding: 'clamp(32px,4vw,48px) 0', borderTop: '1px solid rgba(240,234,216,0.1)' }} className="hiw-row">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
                <span style={{ width: 52, height: 52, borderRadius: '50%', border: `1px solid rgba(196,163,85,0.4)`, color: gold, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.icon}</span>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: 'rgba(240,234,216,0.18)' }}>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div>
                <span style={{ ...label, marginBottom: '12px' }}>{s.tag}</span>
                <h2 style={h2}>{s.title}</h2>
                <p style={body}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ ...container, paddingBottom: 'clamp(72px,9vw,120px)' }}>
        <div style={{ borderTop: '1px solid rgba(240,234,216,0.1)', paddingTop: 'clamp(40px,5vw,64px)', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(22px,2.6vw,30px)', color: 'rgba(240,234,216,0.7)', margin: '0 0 32px', lineHeight: 1.4 }}>
            {isAr ? '"نجعل الشراء المباشر سهلاً، ونبقى هنا حين ترغب في اللمسة الإنسانية."' : '"We make it easy to buy directly, and we\'re here when you want the human touch."'}
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('collection')} style={{ ...PAGE.goldBtn, fontFamily: bodyFont }}>{isAr ? 'تصفّح المجموعة' : 'Browse the Collection'}</button>
            <a href={`https://wa.me/${window.CURATOR_WA}`} target="_blank" rel="noopener noreferrer" style={{ ...PAGE.outlineBtn, fontFamily: bodyFont, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Icon.WA /> {isAr ? 'تحدّث مع أمين المجموعة' : 'Speak with a Curator'}
            </a>
          </div>
        </div>
      </section>

      <style>{`@media (max-width: 640px){ .hiw-row{ grid-template-columns: 1fr !important; } .hiw-row > div:first-child{ flex-direction: row !important; justify-content: flex-start !important; } }`}</style>
    </div>
  );
}

Object.assign(window, { HowItWorksPage });
