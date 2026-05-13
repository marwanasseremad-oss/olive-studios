
function PrintQualityPage({ navigate, tweaks = {}, lang = 'EN' }) {
  const isAr = lang === 'AR';

  const c = {
    EN: {
      label: 'Our Commitment', title: 'Museum-Grade', italic: 'Quality.',
      intro: 'We print only on the finest archival materials, using techniques trusted by leading galleries and collectors worldwide.',
      standardLabel: 'The Studio Standard', standardTitle: 'Crafted for Generations',
      standardP1: "Every print that leaves our studio meets the exacting standards required for museum acquisition. We believe art should be preserved for generations, not decades.",
      standardP2: "Our printing partners have produced work for the British Museum, Tate Modern, and major private collections. The same expertise is applied to every Olive Studios edition.",
      checks: [
        { t: '100+ Year Lightfastness', d: 'Archival pigment inks certified to resist fading for over a century.' },
        { t: 'Acid-Free Materials', d: 'From paper to mounting, every component is museum-grade acid-free.' },
        { t: 'Individual QC', d: 'Each print is inspected and approved before shipping.' },
        { t: 'Signed & Numbered', d: 'Hand-signed by the artist with edition number and certificate.' },
      ],
      materialsTitle: 'Materials', materialsDesc: "The finest papers and inks, sourced from the world's leading manufacturers.",
      materials: [
        { t: 'Hahnemühle Photo Rag', sub: '308 gsm Cotton Paper', d: 'Made in Germany for over 400 years. 100% cotton rag, acid-free, with a subtle matte finish that brings depth to every image.' },
        { t: 'Archival Pigment Inks', sub: '12-Color Giclée System', d: 'Premium pigment inks delivering exceptional colour accuracy and density. Tested to maintain vibrancy for 100+ years under museum conditions.' },
        { t: 'Solid Oak Frames', sub: 'European Hardwood', d: 'Sustainably sourced European oak with a natural finish. UV-protective museum glass keeps your print safe from harmful light.' },
      ],
      processTitle: 'The Process',
      steps: [
        { n: '01', t: 'File Preparation', d: 'Each image is carefully colour-profiled to match our specific paper and ink combination, with resolution optimized for the final print size.' },
        { n: '02', t: 'Proof & Approval', d: 'A proof print is created and reviewed against the original file. The artist approves the colour and tonality before the edition is produced.' },
        { n: '03', t: 'Edition Printing', d: 'Prints are produced in small batches on calibrated equipment. Each print is examined for consistency in colour, density, and paper quality.' },
        { n: '04', t: 'Signing & Certification', d: 'The artist signs each print by hand. We prepare the Certificate of Authenticity and record the edition in our permanent archive.' },
        { n: '05', t: 'Framing (Optional)', d: 'Prints selected for framing are mounted on acid-free board and secured behind UV-protective glass in solid oak frames.' },
        { n: '06', t: 'Quality Control', d: "Final inspection under controlled lighting. Any print that doesn't meet our standards is rejected and reprinted." },
      ],
    },
    AR: {
      label: 'التزامنا', title: 'جودة', italic: 'المتاحف.',
      intro: 'نطبع فقط على أفضل المواد الأرشيفية، باستخدام تقنيات موثوقة في أبرز المعارض والمجموعات الخاصة.',
      standardLabel: 'معيار الاستوديو', standardTitle: 'مصنوعة لتدوم الأجيال',
      standardP1: 'كل طبعة تغادر استوديونا تلبي المعايير الصارمة المطلوبة لاقتناء المتاحف. نؤمن بأن الفن يجب أن يُحفظ للأجيال لا للعقود.',
      standardP2: 'شركاؤنا في الطباعة أنتجوا أعمالاً للمتحف البريطاني وتيت مودرن ومجموعات خاصة كبرى. نفس الخبرة مطبقة على كل إصدار من أوليف ستوديوز.',
      checks: [
        { t: 'ثبات ألوان لأكثر من ١٠٠ عام', d: 'أحبار أرشيفية معتمدة لمقاومة البهتان لأكثر من قرن.' },
        { t: 'مواد خالية من الحموضة', d: 'من الورق إلى التثبيت، كل مكون بجودة المتاحف وخالٍ من الحموضة.' },
        { t: 'فحص جودة فردي', d: 'كل طبعة تُفحص وتُعتمد قبل الشحن.' },
        { t: 'موقعة ومرقمة', d: 'يوقعها الفنان يدوياً مع رقم الإصدار والشهادة.' },
      ],
      materialsTitle: 'المواد', materialsDesc: 'أجود الأوراق والأحبار من أبرز المصنعين في العالم.',
      materials: [
        { t: 'هانيموله فوتو راج', sub: '٣٠٨ جرام ورق قطن', d: 'مصنوع في ألمانيا منذ أكثر من ٤٠٠ عام. ١٠٠٪ قطن، خالٍ من الحموضة، بملمس مطفأ رقيق يمنح العمق لكل صورة.' },
        { t: 'أحبار صباغ أرشيفية', sub: 'نظام جيكلي ١٢ لوناً', d: 'أحبار صباغية ممتازة تقدم دقة ألوان وكثافة استثنائية. معتمدة للحفاظ على حيويتها لأكثر من ١٠٠ عام.' },
        { t: 'إطارات بلوط صلب', sub: 'خشب أوروبي صلب', d: 'بلوط أوروبي من مصادر مستدامة بطلاء طبيعي. زجاج متحفي واقٍ من الأشعة فوق البنفسجية.' },
      ],
      processTitle: 'العملية',
      steps: [
        { n: '٠١', t: 'تحضير الملف', d: 'كل صورة تُحضَّر بعناية: معايرة ألوان لتتناسب مع الورق والحبر، ودقة محسّنة للحجم النهائي.' },
        { n: '٠٢', t: 'الدليل والموافقة', d: 'تُنتج طبعة دليل وتُراجع مقابل الملف الأصلي. يوافق الفنان على الألوان والتدرج قبل إنتاج الإصدار.' },
        { n: '٠٣', t: 'طباعة الإصدار', d: 'تُنتج الطبعات على دفعات صغيرة على معدات معايرة. كل طبعة تُفحص لاتساق اللون والكثافة وجودة الورق.' },
        { n: '٠٤', t: 'التوقيع والتوثيق', d: 'يوقع الفنان كل طبعة يدوياً. نُعد شهادة الأصالة ونسجل الإصدار في أرشيفنا الدائم.' },
        { n: '٠٥', t: 'التأطير (اختياري)', d: 'الطبعات المختارة للتأطير تُثبت على لوح خالٍ من الحموضة وتُؤطر خلف زجاج واقٍ في إطارات بلوط.' },
        { n: '٠٦', t: 'مراقبة الجودة', d: 'فحص نهائي تحت إضاءة محكومة. أي طبعة لا تلبي معاييرنا تُرفض وتُعاد طباعتها.' },
      ],
    }
  };

  const content = c[lang] || c.EN;

  return (
    <div style={PAGE.wrap(tweaks.bg)}>
      <div style={PAGE.section()}>
        <FadeUp>
          <span style={PAGE.label}>{content.label}</span>
          <h1 style={PAGE.h1}>{content.title}<br /><em style={{ fontStyle: 'italic' }}>{content.italic}</em></h1>
          <p style={{ ...PAGE.body, maxWidth: '520px' }}>{content.intro}</p>
        </FadeUp>
      </div>

      <div style={{ borderTop: '1px solid rgba(240,234,216,0.07)', background: '#151310' }}>
        <div style={PAGE.section()}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }}>
            <FadeUp>
              <span style={{ ...PAGE.label, color: 'rgba(196,163,85,0.8)' }}>{content.standardLabel}</span>
              <h2 style={{ ...PAGE.h2, marginBottom: '20px' }}>{content.standardTitle}</h2>
              <p style={{ ...PAGE.body, marginBottom: '16px' }}>{content.standardP1}</p>
              <p style={{ ...PAGE.body }}>{content.standardP2}</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {content.checks.map((item) => (
                  <div key={item.t} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#c4a355', flexShrink: 0, marginTop: '2px' }}><Icon.Check /></span>
                    <div>
                      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', color: '#f0ead8', margin: '0 0 4px' }}>{item.t}</p>
                      <p style={{ ...PAGE.body, fontSize: '12px', margin: 0 }}>{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(240,234,216,0.07)' }}>
        <div style={PAGE.section()}>
          <FadeUp>
            <h2 style={{ ...PAGE.h2, textAlign: 'center', marginBottom: '8px' }}>{content.materialsTitle}</h2>
            <p style={{ ...PAGE.body, textAlign: 'center', marginBottom: '48px' }}>{content.materialsDesc}</p>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'clamp(28px,4vw,48px)' }}>
            {content.materials.map((m, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div style={{ ...PAGE.card, textAlign: 'center' }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', color: '#f0ead8', margin: '0 0 4px' }}>{m.t}</h3>
                  <span style={{ fontFamily: isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif", fontSize: '9px', letterSpacing: isAr ? 0 : '0.18em', textTransform: isAr ? 'none' : 'uppercase', color: '#c4a355', display: 'block', marginBottom: '16px' }}>{m.sub}</span>
                  <p style={{ ...PAGE.body, fontSize: '12px', margin: 0 }}>{m.d}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(240,234,216,0.07)', background: '#151310' }}>
        <div style={PAGE.section()}>
          <FadeUp><h2 style={{ ...PAGE.h2, marginBottom: '40px', color: '#f0ead8' }}>{content.processTitle}</h2></FadeUp>
          <div style={{ maxWidth: '680px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {content.steps.map((s, i) => (
              <FadeUp key={i} delay={Math.min(i * 0.07, 0.3)}>
                <div style={{ display: 'flex', gap: '28px', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', fontWeight: 300, color: 'rgba(196,163,85,0.7)', flexShrink: 0, lineHeight: 1, minWidth: '44px' }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '19px', color: '#f0ead8', margin: '0 0 8px' }}>{s.t}</h3>
                    <p style={{ ...PAGE.body, fontSize: '13px', margin: 0 }}>{s.d}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { PrintQualityPage });
