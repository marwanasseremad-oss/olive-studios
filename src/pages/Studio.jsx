
/* ─────────────────────────────────────────
   The Studio — three editorial subsections
───────────────────────────────────────── */

// ── Posts data — extend or replace from CMS later ──────────────
const STUDIO_POSTS = {
  starOfMonth: [
    {
      id: 'star-may-2026',
      date: 'May 2026',
      dateAr: 'مايو ٢٠٢٦',
      title: 'Menna Hossam',
      titleAr: 'منّة حسام',
      subtitle: 'Fairytales, staged.',
      subtitleAr: 'حكاياتٌ خرافيةٌ تُمسرَح.',
      cover: 'src/assets/menna-le-renard.jpg',
      coverFit: 'cover',
      excerpt: "Menna Hossam's photographs build worlds the way novelists do — slowly, with conviction. We sat with her in the studio between shoots to talk about Enchanted, the year she became a Canon Africa Ambassador, and why she keeps casting children alongside animals.",
      excerptAr: 'صور منّة حسام تبني عوالم كما يفعل الروائيون — ببطء وقناعة. جلسنا معها في الاستوديو بين جلستَي تصوير لنتحدث عن Enchanted، والسنة التي صارت فيها سفيرة لـ Canon أفريقيا، ولماذا تواصل تصوير الأطفال إلى جوار الحيوانات.',
      readMins: 6,
      tag: 'Featured Artist',
      tagAr: 'الفنانة المختارة',
      // Pieces by this artist to feature inline
      relatedArtworkIds: ['hera', 'swan-maiden', 'le-renard-et-lenfant'],
    },
  ],
  behindScenes: [
    {
      id: 'btw-hera-build',
      date: 'May 8, 2026',
      dateAr: '٨ مايو ٢٠٢٦',
      title: 'Building Hera',
      titleAr: 'بناء هيرا',
      subtitle: 'Four months. Twelve fittings. One peacock that refused to cooperate.',
      subtitleAr: 'أربعة أشهر. اثنتا عشرة تجربة أزياء. وطاووس واحد رفض التعاون.',
      cover: 'src/assets/menna-hera.jpg',
      coverFit: 'contain',
      coverBg: '#fff',
      excerpt: "The Rare Edition that opens Collection 01 didn't happen in a day. Inside the four-month build of Menna Hossam's Hera — from the original sketch on a café napkin to the final shoot at sunrise in October.",
      excerptAr: 'لم تتحقق الإصدار النادر الذي يفتتح المجموعة ٠١ في يوم واحد. داخل بناء هيرا لمنّة حسام على مدى أربعة أشهر — من الرسم الأول على منديل مقهى حتى التصوير الأخير عند شروق الشمس في أكتوبر.',
      readMins: 8,
      tag: 'Production',
      tagAr: 'الإنتاج',
    },
    {
      id: 'btw-paper-test',
      date: 'April 22, 2026',
      dateAr: '٢٢ أبريل ٢٠٢٦',
      title: 'The Paper Test',
      titleAr: 'اختبار الورق',
      subtitle: 'Why we keep ten papers in the studio and only ship on three.',
      subtitleAr: 'لماذا نحتفظ بعشرة أنواع من الورق في الاستوديو ونشحن على ثلاثة فقط.',
      cover: 'src/assets/artwork-5.jpg',
      coverFit: 'cover',
      excerpt: "Every new collection starts with a paper round. We compare Hahnemühle Photo Rag, German Etching, and Baryta side by side — same image, same ink, same light — and choose the one that lets the photograph breathe.",
      excerptAr: 'تبدأ كل مجموعة جديدة بجولة ورق. نقارن Hahnemühle Photo Rag وGerman Etching وBaryta جنباً إلى جنب — نفس الصورة، ونفس الحبر، ونفس الضوء — ونختار النوع الذي يدع الصورة تتنفس.',
      readMins: 4,
      tag: 'Craft',
      tagAr: 'الحرفة',
    },
    {
      id: 'btw-numbering',
      date: 'March 30, 2026',
      dateAr: '٣٠ مارس ٢٠٢٦',
      title: 'Numbering Night',
      titleAr: 'ليلة الترقيم',
      subtitle: 'How an edition gets numbered, witnessed, and locked.',
      subtitleAr: 'كيف يُرَقَّم الإصدار ويُشهَد عليه ويُغلَق.',
      cover: 'src/assets/artwork-3.jpg',
      coverFit: 'cover',
      excerpt: 'A single evening turns 80 unsigned sheets into 80 signed editions. The bench, the pen, the witness, and the lock-box — the small ritual that keeps scarcity honest.',
      excerptAr: 'مساء واحد يحوّل ٨٠ ورقة غير موقّعة إلى ٨٠ طبعة موقّعة. الطاولة، والقلم، والشاهد، وصندوق الإقفال — الطقس الصغير الذي يجعل الندرة صادقة.',
      readMins: 3,
      tag: 'Studio Ritual',
      tagAr: 'طقس الاستوديو',
    },
  ],
  guides: [
    {
      id: 'guide-hanging',
      title: 'Hanging Heights',
      titleAr: 'ارتفاعات التعليق',
      subtitle: 'The 57-inch rule, and when to break it.',
      subtitleAr: 'قاعدة الـ١٤٥ سم، ومتى تكسرها.',
      excerpt: 'Galleries hang the centre of a piece at 57 inches (145 cm). Living rooms are not galleries — your eye is sitting down. A short guide to making a wall feel right.',
      excerptAr: 'تعلّق المعارض مركز القطعة على ارتفاع ١٤٥ سم. غرف المعيشة ليست معارض — عينك جالسة. دليل قصير لتجعل الجدار يبدو صحيحاً.',
      readMins: 5,
      icon: 'Eye',
    },
    {
      id: 'guide-sizing',
      title: 'Choosing a Size',
      titleAr: 'اختيار الحجم',
      subtitle: 'When 30×40 is plenty, and when 70×100 is right.',
      subtitleAr: 'متى يكون ٣٠×٤٠ كافياً، ومتى يكون ٧٠×١٠٠ الصحيح.',
      excerpt: 'A 30×40 sits beside a chair. A 50×70 anchors a corner. A 70×100 holds a wall on its own. How to match the work to the room without measuring twice.',
      excerptAr: 'يجلس ٣٠×٤٠ بجوار كرسي. يثبت ٥٠×٧٠ زاوية. ويحمل ٧٠×١٠٠ جداراً بنفسه. كيف توائم العمل مع الغرفة دون قياس مرتين.',
      readMins: 4,
      icon: 'Package',
    },
    {
      id: 'guide-light',
      title: 'Light & Longevity',
      titleAr: 'الضوء والديمومة',
      subtitle: 'Where to hang. Where not to.',
      subtitleAr: 'أين تعلّق. وأين لا تعلّق.',
      excerpt: "Direct sun fades pigment faster than anything else. UV glass slows it. Wall position decides it. The half-day rule, the bathroom rule, and a quick test you can do yourself.",
      excerptAr: 'تُبهت الشمس المباشرة الصبغة أسرع من أي شيء آخر. زجاج الـUV يبطّئها. ومكان الحائط يحسمها. قاعدة نصف اليوم، وقاعدة الحمام، واختبار سريع يمكنك إجراؤه بنفسك.',
      readMins: 3,
      icon: 'Sun',
    },
    {
      id: 'guide-framing',
      title: 'Framing Decisions',
      titleAr: 'قرارات التأطير',
      subtitle: 'Black, white, or none — and what each one does.',
      subtitleAr: 'أسود، أبيض، أو بلا — وماذا يفعل كل خيار.',
      excerpt: "A black frame contains, a white frame floats, no frame disappears. The choice depends as much on the room as on the work. A simple decision tree.",
      excerptAr: 'يحوي الإطار الأسود، ويُطفو الأبيض، ويختفي بلا إطار. الخيار يعتمد على الغرفة بقدر اعتماده على العمل. شجرة قرار بسيطة.',
      readMins: 4,
      icon: 'Sparkles',
    },
    {
      id: 'guide-care',
      title: 'Caring for a Print',
      titleAr: 'العناية بالطبعة',
      subtitle: 'Dust, humidity, and one thing never to use.',
      subtitleAr: 'الغبار، والرطوبة، وشيء واحد لا تستخدمه أبداً.',
      excerpt: "Microfibre, not paper towel. Distilled water, never tap. And keep it away from the kitchen extractor fan. The full short list, in one page.",
      excerptAr: 'قماش الميكروفايبر، لا المنشفة الورقية. ماء مقطّر، لا ماء الصنبور. وأبعدها عن شفّاط المطبخ. القائمة القصيرة كاملة في صفحة واحدة.',
      readMins: 4,
      icon: 'Droplet',
    },
    {
      id: 'guide-gifting',
      title: 'Gifting Art',
      titleAr: 'إهداء الفن',
      subtitle: 'A piece of someone\'s wall, for years.',
      subtitleAr: 'قطعة من جدار شخص ما، لسنوات.',
      excerpt: "Art is the gift that gets remembered. How to choose for someone else without choosing for them — and the gift card option if you'd rather they pick.",
      excerptAr: 'الفن هو الهدية التي تُذكَر. كيف تختار لشخص آخر دون أن تختار عنه — وخيار بطاقة الهدية إن فضّلت أن يختار هو.',
      readMins: 3,
      icon: 'Gift',
    },
  ],
};

Object.assign(window, { STUDIO_POSTS });

/* ── Shared studio page chrome ───────────────────────────── */
function StudioHero({ kicker, title, subtitle, lang }) {
  const isAr = lang === 'AR';
  const bodyFont = isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif";
  return (
    <section style={{ padding: 'clamp(56px,8vw,112px) clamp(20px,4vw,72px) clamp(32px,4vw,56px)', maxWidth: '1100px', margin: '0 auto' }}>
      <FadeUp>
        <p style={{ fontFamily: bodyFont, fontSize: '10px', letterSpacing: isAr ? 0 : '0.22em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(196,163,85,0.8)', marginBottom: '20px' }}>{kicker}</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px,6vw,84px)', fontWeight: 300, margin: '0 0 20px', lineHeight: 1.05 }}>{title}</h1>
        {subtitle && <p style={{ fontFamily: bodyFont, fontSize: '15px', color: 'rgba(240,234,216,0.5)', lineHeight: 1.85, maxWidth: '620px', fontWeight: 300 }}>{subtitle}</p>}
      </FadeUp>
    </section>
  );
}

/* ── Star of the Month page ──────────────────────────────── */
const STAR_BODY_EN = [
  "Hossam came up inside Egyptian editorial fashion and then walked past it, into a territory that magazine photography doesn't serve. She borrows equally from the Pre-Raphaelites and from the stories grandmothers tell, and she builds images that look iconic before they're even printed.",
  '"When I\'m on set I\'m not thinking commercial work, I\'m thinking quiet storytelling. The camera is the way of listening." — Menna Hossam, in the studio, April 2026.',
  'Three pieces from that world open Collection 01. The editions below are fixed and signed.',
];
const STAR_BODY_AR = [
  'تأسست هوسام داخل أزياء التحرير المصرية ثم مضت أبعد، نحو منطقة لا تخدمها صور المنشورات. تستعير من حركة ما قبل الرفائيلية ومن قصص الجدّات حداً سواء، وتبني صوراً بدت أيقونية حتى قبل أن تُطبع.',
  '"حين أكون في الموقع لا أفكر بأنه عملٌ تجاري، بل بأنه قصة تُقال بصوتٍ خافت. الكاميرا هي طريقة الاستماع." — منّة حسام، في الاستوديو، أبريل ٢٠٢٦.',
  'ثلاث قطع من عالمها افتتاح المجموعة ٠١. الإصدارات أدناه ثابتة وموقّعة.',
];

function StarOfMonthPage({ navigate, tweaks = {}, lang = 'EN' }) {
  const isAr = lang === 'AR';
  const bodyFont = isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif";
  const post = STUDIO_POSTS.starOfMonth[0];
  const related = (post.relatedArtworkIds || []).map(id => window.ARTWORKS.find(a => a.id === id)).filter(Boolean);
  const body = isAr ? STAR_BODY_AR : STAR_BODY_EN;

  return (
    <div style={{ background: tweaks.bg || '#1b1916', color: '#f0ead8', paddingTop: '72px' }}>
      <StudioHero
        kicker={isAr ? (post.tagAr + ' · ' + post.dateAr) : (post.tag + ' · ' + post.date)}
        title={isAr ? post.subtitleAr : post.subtitle}
        subtitle={isAr ? (post.titleAr + ' — معرض الاستوديو، ' + post.dateAr) : (post.title + ' — Studio Profile, ' + post.date)}
        lang={lang}
      />

      <section style={{ padding: '0 clamp(20px,4vw,72px)', maxWidth: '1360px', margin: '0 auto clamp(56px,7vw,96px)' }}>
        <FadeUp>
          <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: post.coverBg || '#242018', boxShadow: '0 24px 60px rgba(0,0,0,0.4)' }}>
            <img src={post.cover} alt="" style={{ width: '100%', height: '100%', objectFit: post.coverFit || 'cover' }} />
          </div>
        </FadeUp>
      </section>

      <section style={{ padding: '0 clamp(20px,5vw,72px) clamp(56px,7vw,96px)', maxWidth: '780px', margin: '0 auto' }}>
        <FadeUp>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(20px,2.2vw,26px)', fontStyle: 'italic', color: 'rgba(240,234,216,0.85)', lineHeight: 1.7, marginBottom: '32px', fontWeight: 300 }}>
            {isAr ? post.excerptAr : post.excerpt}
          </p>
          {body.map((p, i) => (
            <p key={i} style={{ fontFamily: bodyFont, fontSize: '15px', color: 'rgba(240,234,216,0.6)', lineHeight: 1.95, marginBottom: '20px', fontWeight: 300 }}>{p}</p>
          ))}
        </FadeUp>
      </section>

      {related.length > 0 && (
        <section style={{ padding: 'clamp(40px,5vw,72px) clamp(20px,4vw,72px) clamp(72px,9vw,120px)', maxWidth: '1360px', margin: '0 auto', borderTop: '1px solid rgba(240,234,216,0.07)' }}>
          <FadeUp>
            <p style={{ fontFamily: bodyFont, fontSize: '10px', letterSpacing: isAr ? 0 : '0.22em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(240,234,216,0.3)', marginBottom: 'clamp(24px,3vw,40px)' }}>{isAr ? 'الأعمال' : 'The Works'}</p>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 'clamp(20px,3vw,40px)' }}>
            {related.map((w, i) => <FadeUp key={w.id} delay={i * 0.08}><ProductCard artwork={w} onNavigate={navigate} lang={lang} /></FadeUp>)}
          </div>
        </section>
      )}
    </div>
  );
}
Object.assign(window, { StarOfMonthPage });

/* ── Behind the Scenes page ──────────────────────────────── */
function BehindScenesPage({ navigate, tweaks = {}, lang = 'EN' }) {
  const isAr = lang === 'AR';
  const bodyFont = isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif";
  const posts = STUDIO_POSTS.behindScenes;

  return (
    <div style={{ background: tweaks.bg || '#1b1916', color: '#f0ead8', paddingTop: '72px' }}>
      <StudioHero
        kicker={isAr ? 'الاستوديو · من الكواليس' : 'The Studio · Behind the Scenes'}
        title={isAr ? 'كيف يُصنع كل شيء.' : 'How everything gets made.'}
        subtitle={isAr ? 'يوميات الاستوديو ومذكّرات الإنتاج وكل القرارات الصغيرة التي تقف خلف طبعة محدودة الإصدار.' : "Studio diaries, production notes, and the small decisions behind every limited edition."}
        lang={lang}
      />

      <section style={{ padding: '0 clamp(20px,4vw,72px) clamp(72px,9vw,120px)', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(40px,5vw,72px)' }}>
          {posts.map((p, i) => (
            <FadeUp key={p.id} delay={Math.min(i * 0.07, 0.3)}>
              <article style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1.1fr 1fr' : '1fr 1.1fr',
                gap: 'clamp(28px,4vw,56px)',
                alignItems: 'center',
                padding: 'clamp(28px,4vw,48px) 0',
                borderBottom: i < posts.length - 1 ? '1px solid rgba(240,234,216,0.07)' : 'none',
              }} className="bts-row">
                <style>{`@media (max-width: 760px){ .bts-row{ grid-template-columns: 1fr !important; } }`}</style>

                <div style={{
                  aspectRatio: '4/3',
                  overflow: 'hidden',
                  background: p.coverBg || '#242018',
                  order: i % 2 === 0 ? 1 : 2,
                  cursor: 'pointer',
                }}>
                  <img src={p.cover} alt="" style={{ width: '100%', height: '100%', objectFit: p.coverFit || 'cover', transition: 'transform 0.7s cubic-bezier(0.25,0,0,1)' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                </div>

                <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '14px' }}>
                    <span style={{ fontFamily: bodyFont, fontSize: '10px', letterSpacing: isAr ? 0 : '0.16em', textTransform: isAr ? 'none' : 'uppercase', color: '#c4a355', padding: '3px 9px', border: '1px solid rgba(196,163,85,0.3)' }}>{isAr ? p.tagAr : p.tag}</span>
                    <span style={{ fontFamily: bodyFont, fontSize: '11px', color: 'rgba(240,234,216,0.35)' }}>{isAr ? p.dateAr : p.date}</span>
                  </div>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 300, margin: '0 0 12px', lineHeight: 1.15 }}>{isAr ? p.titleAr : p.title}</h2>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(16px,1.6vw,19px)', color: 'rgba(240,234,216,0.7)', margin: '0 0 18px', lineHeight: 1.5, fontWeight: 300 }}>{isAr ? p.subtitleAr : p.subtitle}</p>
                  <p style={{ fontFamily: bodyFont, fontSize: '14px', color: 'rgba(240,234,216,0.55)', lineHeight: 1.85, margin: '0 0 24px', fontWeight: 300 }}>{isAr ? p.excerptAr : p.excerpt}</p>
                  <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: bodyFont, fontSize: '11px', letterSpacing: isAr ? 0 : '0.16em', textTransform: isAr ? 'none' : 'uppercase', color: '#c4a355', padding: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {isAr ? 'اقرأ' : 'Read'} <span>{isAr ? '←' : '→'}</span>
                    </button>
                    <span style={{ fontFamily: bodyFont, fontSize: '11px', color: 'rgba(240,234,216,0.25)' }}>{p.readMins} {isAr ? 'دقيقة' : 'min read'}</span>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>
    </div>
  );
}
Object.assign(window, { BehindScenesPage });

/* ── Guides page ─────────────────────────────────────────── */
function GuidesPage({ navigate, tweaks = {}, lang = 'EN' }) {
  const isAr = lang === 'AR';
  const bodyFont = isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif";
  const guides = STUDIO_POSTS.guides;

  return (
    <div style={{ background: tweaks.bg || '#1b1916', color: '#f0ead8', paddingTop: '72px' }}>
      <StudioHero
        kicker={isAr ? 'الاستوديو · أدلّة' : 'The Studio · Guides'}
        title={isAr ? 'كل ما تحتاج معرفته قبل التعليق.' : 'Everything you need before it goes on the wall.'}
        subtitle={isAr ? 'أدلّة قصيرة في كل ما يهمّ بعد البيع — من الارتفاع الصحيح إلى أفضل ضوء إلى كيفية العناية بالطبعة لسنوات.' : 'Short guides on everything that matters after the sale — from the right hanging height to the best light to how to keep a print clean for decades.'}
        lang={lang}
      />

      <section style={{ padding: '0 clamp(20px,4vw,72px) clamp(72px,9vw,120px)', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: 'clamp(16px,2vw,28px)' }}>
          {guides.map((g, i) => {
            const IconComp = Icon[g.icon] || Icon.Sparkles;
            return (
              <FadeUp key={g.id} delay={Math.min(i * 0.05, 0.3)}>
                <div style={{
                  background: 'rgba(240,234,216,0.03)',
                  border: '1px solid rgba(240,234,216,0.08)',
                  padding: 'clamp(24px,3vw,36px)',
                  cursor: 'pointer',
                  transition: 'border-color 0.3s, transform 0.3s',
                  height: '100%',
                  display: 'flex', flexDirection: 'column',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(196,163,85,0.35)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(240,234,216,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  <div style={{ color: '#c4a355', marginBottom: '20px' }}><IconComp /></div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', fontWeight: 400, color: '#f0ead8', margin: '0 0 8px' }}>{isAr ? g.titleAr : g.title}</h3>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '15px', color: 'rgba(240,234,216,0.55)', margin: '0 0 16px', lineHeight: 1.5 }}>{isAr ? g.subtitleAr : g.subtitle}</p>
                  <p style={{ fontFamily: bodyFont, fontSize: '13px', color: 'rgba(240,234,216,0.5)', lineHeight: 1.85, margin: '0 0 20px', flex: 1, fontWeight: 300 }}>{isAr ? g.excerptAr : g.excerpt}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(240,234,216,0.06)', paddingTop: '14px' }}>
                    <span style={{ fontFamily: bodyFont, fontSize: '10px', letterSpacing: isAr ? 0 : '0.16em', textTransform: isAr ? 'none' : 'uppercase', color: '#c4a355' }}>{isAr ? 'اقرأ الدليل' : 'Read Guide'} {isAr ? '←' : '→'}</span>
                    <span style={{ fontFamily: bodyFont, fontSize: '11px', color: 'rgba(240,234,216,0.3)' }}>{g.readMins} {isAr ? 'دقيقة' : 'min'}</span>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </section>
    </div>
  );
}
Object.assign(window, { GuidesPage });
