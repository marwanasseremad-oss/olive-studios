
function CarePage({ navigate, tweaks = {}, lang = 'EN' }) {
  const isAr = lang === 'AR';

  const c = {
    EN: {
      label: 'Preservation', title: 'Care &', italic: 'Installation',
      intro: 'Your print is built to last a century. Follow these guidelines to ensure it looks its best for generations.',
      pillars: [
        { t: 'Avoid Direct Sunlight', d: 'Keep away from prolonged direct UV exposure, even with framed prints.' },
        { t: 'Control Humidity', d: 'Maintain 40–60% relative humidity. Avoid bathrooms and exterior walls.' },
        { t: 'Handle with Care', d: 'Always handle by the edges. Never touch the print surface with bare hands.' },
      ],
      sections: [
        { icon: <Icon.Package />, title: 'Unpacking Your Print', paras: [
          { body: 'Open the packaging carefully from one end. Do not use sharp objects near the print surface.' },
          { body: 'Unframed prints are wrapped in acid-free tissue — leave this in place until you are ready to hang or store the piece.' },
          { body: 'Inspect the print in good natural light before discarding packaging. Any transit damage should be reported within 48 hours.' },
        ]},
        { icon: <Icon.Hammer />, title: 'Installation', paras: [
          { strong: 'Location:', body: 'Avoid walls with direct sunlight or strong artificial UV light. North-facing walls are ideal.' },
          { strong: 'Height:', body: 'Hang artwork with the centre at eye level — approximately 145–155 cm from the floor.' },
          { strong: 'Hardware:', body: 'Use appropriate wall anchors for the weight of your print. Our team can advise.' },
          { strong: 'Professional Service:', body: 'We offer a white-glove installation service in Greater Cairo and Alexandria. Reach out via WhatsApp to arrange.' },
        ]},
        { icon: <Icon.Sun />, title: 'Environment', paras: [
          { strong: 'Light:', body: 'Prolonged direct sunlight will degrade any fine art print over time, even with UV-protective glass. Use indirect or diffused lighting.' },
          { strong: 'Humidity:', body: 'Keep between 40–60% relative humidity. Bathrooms and kitchens are not suitable.' },
          { strong: 'Temperature:', body: 'Avoid extreme heat or cold. Do not hang above radiators or air conditioning units.' },
        ]},
        { icon: <Icon.Sparkles />, title: 'Cleaning & Maintenance', paras: [
          { strong: 'Framed prints:', body: 'Clean the glass with a soft, dry microfibre cloth. Never spray liquid directly onto the glass.' },
          { strong: 'Unframed prints:', body: 'Do not attempt to clean the print surface. If dust accumulates, use a very soft brush with light strokes.' },
          { strong: 'Avoid:', body: 'Any chemical cleaners, wet cloths, or abrasive materials near the print surface.' },
        ]},
      ],
      ctaTitle: 'Need Help?', ctaDesc: 'Our team is happy to advise on care, framing, or installation.', ctaBtn: 'Contact via WhatsApp',
    },
    AR: {
      label: 'الحفاظ على العمل', title: 'العناية', italic: 'والتركيب',
      intro: 'طبعتك مصممة لتدوم مئة عام. اتبع هذه الإرشادات لضمان أن تبقى في أفضل حالاتها لأجيال.',
      pillars: [
        { t: 'تجنب أشعة الشمس المباشرة', d: 'ابتعد عن التعرض المطول للأشعة فوق البنفسجية، حتى مع الطبعات المؤطرة.' },
        { t: 'تحكم في الرطوبة', d: 'حافظ على رطوبة نسبية بين ٤٠–٦٠٪. تجنب الحمامات والجدران الخارجية.' },
        { t: 'التعامل بحرص', d: 'أمسك دائماً بحواف الطبعة. لا تلمس السطح بأصابعك العارية.' },
      ],
      sections: [
        { icon: <Icon.Package />, title: 'فتح العبوة', paras: [
          { body: 'افتح التغليف بعناية من أحد الجوانب. لا تستخدم أدوات حادة بالقرب من سطح الطبعة.' },
          { body: 'الطبعات غير المؤطرة ملفوفة بورق نسيج خالٍ من الحموضة — أبقه في مكانه حتى تصبح جاهزاً للتعليق أو التخزين.' },
          { body: 'افحص الطبعة في ضوء طبيعي جيد قبل التخلص من التغليف. يجب الإبلاغ عن أي تلف في الشحن خلال ٤٨ ساعة.' },
        ]},
        { icon: <Icon.Hammer />, title: 'التركيب', paras: [
          { strong: 'الموقع:', body: 'تجنب الجدران ذات أشعة الشمس المباشرة. الجدران الشمالية مثالية.' },
          { strong: 'الارتفاع:', body: 'علّق العمل الفني بحيث يكون مركزه على مستوى العينين — تقريباً ١٤٥–١٥٥ سم من الأرضية.' },
          { strong: 'الأدوات:', body: 'استخدم مراسي جدارية مناسبة لوزن طبعتك. فريقنا يمكنه تقديم النصيحة.' },
          { strong: 'خدمة احترافية:', body: 'نقدم خدمة تركيب متكاملة في القاهرة الكبرى والإسكندرية. تواصل معنا عبر واتساب لترتيبها.' },
        ]},
        { icon: <Icon.Sun />, title: 'البيئة المحيطة', paras: [
          { strong: 'الضوء:', body: 'أشعة الشمس المباشرة المطولة ستتلف أي طبعة فنية بمرور الوقت. استخدم إضاءة غير مباشرة أو منتشرة.' },
          { strong: 'الرطوبة:', body: 'حافظ على ٤٠–٦٠٪ رطوبة نسبية. الحمامات والمطابخ غير مناسبة.' },
          { strong: 'درجة الحرارة:', body: 'تجنب الحرارة الشديدة أو البرودة. لا تعلّق فوق المدفأة أو مكيف الهواء.' },
        ]},
        { icon: <Icon.Sparkles />, title: 'التنظيف والصيانة', paras: [
          { strong: 'الطبعات المؤطرة:', body: 'نظّف الزجاج بقطعة قماش ميكروفايبر ناعمة وجافة. لا ترش سائلاً على الزجاج مباشرة.' },
          { strong: 'الطبعات غير المؤطرة:', body: 'لا تحاول تنظيف سطح الطبعة. إذا تراكم الغبار، استخدم فرشاة ناعمة جداً بضربات خفيفة.' },
          { strong: 'تجنب:', body: 'أي منظفات كيميائية أو قماش رطب أو مواد كاشطة بالقرب من سطح الطبعة.' },
        ]},
      ],
      ctaTitle: 'تحتاج مساعدة؟', ctaDesc: 'فريقنا سعيد بتقديم النصيحة حول العناية والتأطير والتركيب.', ctaBtn: 'تواصل عبر واتساب',
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'clamp(24px,4vw,48px)' }}>
            {content.pillars.map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ color: '#c4a355', display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
                    {[<Icon.Sun />, <Icon.Droplet />, <Icon.Package />][i]}
                  </span>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', color: '#f0ead8', margin: '0 0 8px' }}>{item.t}</p>
                  <p style={{ ...PAGE.body, fontSize: '12px', margin: 0 }}>{item.d}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(240,234,216,0.07)' }}>
        <div style={PAGE.section()}>
          <div style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: 'clamp(40px,5vw,64px)' }}>
            {content.sections.map((sec) => (
              <FadeUp key={sec.title}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <span style={{ color: '#c4a355', flexShrink: 0, marginTop: '2px' }}>{sec.icon}</span>
                  <h2 style={{ ...PAGE.h2, margin: 0, fontSize: 'clamp(20px,2.5vw,28px)' }}>{sec.title}</h2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingLeft: isAr ? 0 : '38px', paddingRight: isAr ? '38px' : 0 }}>
                  {sec.paras.map((p, j) => (
                    <p key={j} style={{ ...PAGE.body, margin: 0 }}>
                      {p.strong && <><strong style={{ color: '#f0ead8', fontWeight: 500 }}>{p.strong}</strong><br /></>}{p.body}
                    </p>
                  ))}
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp>
            <div style={{ ...PAGE.card, marginTop: 'clamp(48px,6vw,72px)', textAlign: 'center', padding: '40px', maxWidth: '480px' }}>
              <h2 style={{ ...PAGE.h2, fontSize: '22px', marginBottom: '12px' }}>{content.ctaTitle}</h2>
              <p style={{ ...PAGE.body, marginBottom: '24px' }}>{content.ctaDesc}</p>
              <a href="https://wa.me/+201234567890" target="_blank" rel="noopener noreferrer" style={PAGE.outlineBtn}>{content.ctaBtn}</a>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { CarePage });
