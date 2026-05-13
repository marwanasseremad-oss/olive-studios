
function CorporatePage({ navigate, tweaks = {}, lang = 'EN' }) {
  const [form, setForm] = React.useState({ name:'', company:'', email:'', phone:'', projectType:'', message:'' });
  const set = k => e => setForm(f => ({...f, [k]: e.target.value}));
  const [sent, setSent] = React.useState(false);
  const isAr = lang === 'AR';

  const c = {
    EN: {
      label: 'For Business', title: 'Corporate &', italic: 'Interior Designers',
      intro: 'Curated art packages for offices, hotels, and residential projects. Bulk pricing, dedicated account management, and installation services.',
      services: [
        { icon: <Icon.Building />, t: 'Corporate Offices', d: 'Transform your workspace with meaningful art. We curate collections that reflect your brand values and inspire your team.' },
        { icon: <Icon.Hotel />, t: 'Hotels & Hospitality', d: 'Create distinctive spaces with region-specific photography. From lobbies to suites, we provide cohesive visual stories.' },
        { icon: <Icon.Palette />, t: 'Interior Designers', d: 'Partner with us for client projects. Trade pricing, dedicated support, and a curated selection of works.' },
      ],
      offerTitle: 'What We Offer',
      offers: [
        { t: 'Curated Packages', d: "Tell us about your space and vision. We'll propose a selection of works, sizes, and framing options tailored to your project." },
        { t: 'Bulk Pricing', d: 'Significant discounts for orders of 5+ prints. Custom pricing for large-scale hospitality and commercial projects.' },
        { t: 'Custom Editions', d: 'For exclusive projects, we work with artists to create unique editions or sizes not available in our standard collection.' },
        { t: 'Installation Services', d: 'Our team handles delivery, placement, and professional hanging for projects in Greater Cairo and Alexandria.' },
        { t: 'Invoicing & Terms', d: 'Flexible payment terms for corporate clients. VAT invoicing available.' },
      ],
      formTitle: 'Request a Consultation', sent: "Inquiry received. We'll be in touch within 24 hours.",
      fields: { name: 'Name', company: 'Company', email: 'Email', phone: 'Phone', projectType: 'Project Type', message: 'Message', msgPlaceholder: 'Tell us about your project, timeline, and requirements…', submit: 'Send Inquiry', waBtn: 'WhatsApp Corporate Team',
        projectOptions: ['', 'Corporate Office', 'Hotel / Hospitality', 'Residential Project', 'Retail Space', 'Other'], projectDefault: 'Select project type' },
    },
    AR: {
      label: 'للأعمال', title: 'الشركات', italic: 'والمصممين الداخليين',
      intro: 'باقات فنية مختارة للمكاتب والفنادق والمشاريع السكنية. أسعار خاصة للكميات، إدارة حسابات مخصصة، وخدمات تركيب.',
      services: [
        { icon: <Icon.Building />, t: 'مكاتب الشركات', d: 'حوّل بيئة عملك بفن ذي معنى. نختار مجموعات تعكس قيم علامتك التجارية وتلهم فريقك.' },
        { icon: <Icon.Hotel />, t: 'الفنادق والضيافة', d: 'أنشئ فضاءات مميزة بتصوير فوتوغرافي إقليمي. من ردهات الاستقبال إلى الأجنحة، نقدم قصصاً بصرية متناسقة.' },
        { icon: <Icon.Palette />, t: 'المصممون الداخليون', d: 'تعاون معنا في مشاريع عملائك. أسعار تجارية خاصة، دعم متخصص، ومجموعة منتقاة من الأعمال.' },
      ],
      offerTitle: 'ما نقدمه',
      offers: [
        { t: 'باقات مختارة', d: 'أخبرنا عن فضائك ورؤيتك. سنقترح مجموعة من الأعمال والأحجام وخيارات التأطير المناسبة لمشروعك.' },
        { t: 'أسعار الكميات', d: 'خصومات كبيرة للطلبات التي تبلغ ٥ طبعات أو أكثر. أسعار مخصصة للمشاريع الضخمة.' },
        { t: 'إصدارات مخصصة', d: 'للمشاريع الحصرية، نتعاون مع الفنانين لإنشاء إصدارات فريدة أو أحجام غير متوفرة في مجموعتنا القياسية.' },
        { t: 'خدمات التركيب', d: 'يتولى فريقنا التسليم والتموضع والتعليق الاحترافي للمشاريع في القاهرة الكبرى والإسكندرية.' },
        { t: 'الفوترة والشروط', d: 'شروط دفع مرنة لعملاء الشركات. فواتير ضريبة القيمة المضافة متاحة.' },
      ],
      formTitle: 'طلب استشارة', sent: 'تم استلام استفسارك. سنتواصل معك خلال ٢٤ ساعة.',
      fields: { name: 'الاسم', company: 'الشركة', email: 'البريد الإلكتروني', phone: 'الهاتف', projectType: 'نوع المشروع', message: 'الرسالة', msgPlaceholder: 'أخبرنا عن مشروعك والجدول الزمني والمتطلبات…', submit: 'إرسال الاستفسار', waBtn: 'واتساب فريق الشركات',
        projectOptions: ['', 'مكتب شركة', 'فندق / ضيافة', 'مشروع سكني', 'مساحة تجزئة', 'أخرى'], projectDefault: 'اختر نوع المشروع' },
    }
  };

  const content = c[lang] || c.EN;
  const fl = content.fields;
  const inputStyle = { width: '100%', background: 'rgba(240,234,216,0.04)', border: 'none', borderBottom: '1px solid rgba(240,234,216,0.15)', color: '#f0ead8', fontFamily: isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif", fontSize: '13px', padding: '12px 4px', outline: 'none', boxSizing: 'border-box' };
  const lbl = { fontFamily: isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif", fontSize: '10px', letterSpacing: isAr ? 0 : '0.16em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(240,234,216,0.4)', display: 'block', marginBottom: '8px' };

  return (
    <div style={PAGE.wrap(tweaks.bg)}>
      <div style={PAGE.section()}>
        <FadeUp>
          <span style={PAGE.label}>{content.label}</span>
          <h1 style={PAGE.h1}>{content.title}<br /><em style={{ fontStyle: 'italic' }}>{content.italic}</em></h1>
          <p style={{ ...PAGE.body, maxWidth: '520px', marginBottom: '64px' }}>{content.intro}</p>
        </FadeUp>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'clamp(28px,4vw,48px)', marginBottom: 'clamp(48px,7vw,96px)' }}>
          {content.services.map((s, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div style={{ ...PAGE.card, textAlign: 'center', padding: 'clamp(28px,4vw,48px) clamp(20px,3vw,36px)' }}>
                <span style={{ color: '#c4a355', display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>{s.icon}</span>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', color: '#f0ead8', margin: '0 0 12px' }}>{s.t}</h3>
                <p style={{ ...PAGE.body, fontSize: '13px', margin: 0 }}>{s.d}</p>
              </div>
            </FadeUp>
          ))}
        </div>
        <div style={{ height: '1px', background: 'rgba(240,234,216,0.07)', marginBottom: 'clamp(48px,7vw,80px)' }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(40px,6vw,80px)' }}>
          <FadeUp>
            <h2 style={PAGE.h2}>{content.offerTitle}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {content.offers.map(item => (
                <div key={item.t}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', color: '#f0ead8', margin: '0 0 8px' }}>{item.t}</h3>
                  <p style={{ ...PAGE.body, fontSize: '13px', margin: 0 }}>{item.d}</p>
                </div>
              ))}
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div style={PAGE.card}>
              <h2 style={{ ...PAGE.h2, fontSize: '22px', marginBottom: '28px' }}>{content.formTitle}</h2>
              {sent ? (
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '20px', color: '#c4a355', padding: '32px 0' }}>{content.sent}</p>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div><label style={lbl}>{fl.name}</label><input required style={inputStyle} value={form.name} onChange={set('name')} /></div>
                    <div><label style={lbl}>{fl.company}</label><input required style={inputStyle} value={form.company} onChange={set('company')} /></div>
                  </div>
                  <div><label style={lbl}>{fl.email}</label><input type="email" required style={inputStyle} value={form.email} onChange={set('email')} /></div>
                  <div><label style={lbl}>{fl.phone}</label><input style={inputStyle} value={form.phone} onChange={set('phone')} /></div>
                  <div>
                    <label style={lbl}>{fl.projectType}</label>
                    <select style={{ ...inputStyle, appearance: 'none' }} value={form.projectType} onChange={set('projectType')}>
                      {fl.projectOptions.map((o, i) => <option key={i} value={o}>{i === 0 ? fl.projectDefault : o}</option>)}
                    </select>
                  </div>
                  <div><label style={lbl}>{fl.message}</label><textarea required rows={4} placeholder={fl.msgPlaceholder} style={{ ...inputStyle, resize: 'vertical' }} value={form.message} onChange={set('message')} /></div>
                  <button type="submit" style={PAGE.goldBtn}>{fl.submit}</button>
                  <a href="https://api.whatsapp.com/send?phone=201001161776?text=Hi%2C%20I'm%20interested%20in%20corporate%20art%20packages." target="_blank" rel="noopener noreferrer" style={{ ...PAGE.outlineBtn, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <Icon.WA /> {fl.waBtn}
                  </a>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { CorporatePage });
