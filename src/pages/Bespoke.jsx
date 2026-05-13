
function BespokePage({ navigate, tweaks = {}, lang = 'EN' }) {
  const [form, setForm] = React.useState({ name:'', email:'', phone:'', projectType:'', budget:'', timeline:'', description:'' });
  const set = k => e => setForm(f => ({...f, [k]: e.target.value}));
  const isAr = lang === 'AR';

  const c = {
    EN: {
      label: 'Bespoke Inquiries', title: 'A Piece Made', italic: 'for You.',
      intro: "Whether you're seeking a custom artwork for your private collection, a personalised gift, or a piece that captures a specific moment or place — our artists are ready to bring your vision to life.",
      processLabel: 'Our Process',
      steps: [
        { n: '01', t: 'Consultation', d: 'We begin with a detailed conversation to understand your vision, preferences, and requirements.' },
        { n: '02', t: 'Artist Matching', d: 'Based on your brief, we connect you with the artist whose style best aligns with your vision.' },
        { n: '03', t: 'Concept Development', d: 'The artist creates preliminary sketches and concepts for your review and feedback.' },
        { n: '04', t: 'Creation & Delivery', d: 'Once approved, the final piece is created with care and delivered to your doorstep.' },
      ],
      formTitle: 'Submit Your Inquiry',
      fields: { name: 'Full Name', email: 'Email', phone: 'Phone', projectType: 'Project Type', projectPlaceholder: 'e.g. Custom portrait, Landscape', budget: 'Budget Range', budgetPlaceholder: 'e.g. EGP 5,000–15,000', timeline: 'Desired Timeline', timelinePlaceholder: 'e.g. 2 months, Flexible', description: 'Describe Your Vision', descPlaceholder: "Tell us about your idea, the space it's intended for, preferred style, colours, dimensions…", submit: 'Submit via WhatsApp' },
    },
    AR: {
      label: 'طلبات مخصصة', title: 'قطعة مصممة', italic: 'خصيصاً لك.',
      intro: 'سواء كنت تبحث عن عمل فني مخصص لمجموعتك الخاصة، أو هدية شخصية، أو قطعة تلتقط لحظة أو مكاناً معيناً — فنانونا مستعدون لتحقيق رؤيتك.',
      processLabel: 'عمليتنا',
      steps: [
        { n: '٠١', t: 'الاستشارة', d: 'نبدأ بمحادثة مفصلة لفهم رؤيتك وتفضيلاتك ومتطلباتك.' },
        { n: '٠٢', t: 'اختيار الفنان', d: 'بناءً على موجزك، نوصلك بالفنان الذي يتوافق أسلوبه مع رؤيتك.' },
        { n: '٠٣', t: 'تطوير المفهوم', d: 'يقوم الفنان بإنشاء رسومات أولية ومفاهيم لمراجعتك وملاحظاتك.' },
        { n: '٠٤', t: 'الإنشاء والتسليم', d: 'بمجرد الموافقة، يتم إنشاء القطعة النهائية بعناية وتسليمها إلى بابك.' },
      ],
      formTitle: 'أرسل استفسارك',
      fields: { name: 'الاسم الكامل', email: 'البريد الإلكتروني', phone: 'رقم الهاتف', projectType: 'نوع المشروع', projectPlaceholder: 'مثال: بورتريه مخصص، منظر طبيعي', budget: 'نطاق الميزانية', budgetPlaceholder: 'مثال: ٥٠٠٠–١٥٠٠٠ جنيه', timeline: 'الجدول الزمني المطلوب', timelinePlaceholder: 'مثال: شهران، مرن', description: 'صف رؤيتك', descPlaceholder: 'أخبرنا عن فكرتك، المساحة المخصصة لها، الأسلوب المفضل، الألوان، الأبعاد…', submit: 'إرسال عبر واتساب' },
    }
  };

  const content = c[lang] || c.EN;
  const fl = content.fields;
  const inputStyle = { width: '100%', background: 'rgba(240,234,216,0.04)', border: 'none', borderBottom: '1px solid rgba(240,234,216,0.15)', color: '#f0ead8', fontFamily: isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif", fontSize: '13px', padding: '12px 4px', outline: 'none', boxSizing: 'border-box' };
  const lbl = { fontFamily: isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif", fontSize: '10px', letterSpacing: isAr ? 0 : '0.16em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(240,234,216,0.4)', display: 'block', marginBottom: '8px' };

  const handleSubmit = e => {
    e.preventDefault();
    const msg = encodeURIComponent(`${isAr ? 'طلب مخصص من' : 'Bespoke Inquiry from'} ${form.name}\n\n${form.email}\n${form.phone}\n${form.projectType}\n${form.budget}\n${form.timeline}\n\n${form.description}`);
    window.open(`https://api.whatsapp.com/send?phone=201001161776?text=${msg}`, '_blank');
  };

  return (
    <div style={PAGE.wrap(tweaks.bg)}>
      <div style={{ ...PAGE.section(), paddingBottom: 'clamp(32px,4vw,56px)' }}>
        <FadeUp>
          <span style={PAGE.label}>{content.label}</span>
          <h1 style={PAGE.h1}>{content.title}<br /><em style={{ fontStyle: 'italic' }}>{content.italic}</em></h1>
          <p style={{ ...PAGE.body, maxWidth: '540px' }}>{content.intro}</p>
        </FadeUp>
      </div>
      <div style={{ borderTop: '1px solid rgba(240,234,216,0.07)', background: '#151310' }}>
        <div style={PAGE.section()}>
          <FadeUp><p style={{ ...PAGE.label, marginBottom: '40px' }}>{content.processLabel}</p></FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'clamp(28px,4vw,48px)' }}>
            {content.steps.map((s, i) => (
              <FadeUp key={s.n} delay={i * 0.1}>
                <div>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', fontWeight: 300, color: 'rgba(196,163,85,0.3)', margin: '0 0 16px', lineHeight: 1 }}>{s.n}</p>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', color: '#f0ead8', margin: '0 0 10px' }}>{s.t}</h3>
                  <p style={{ ...PAGE.body, fontSize: '12px', margin: 0 }}>{s.d}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(240,234,216,0.07)' }}>
        <div style={PAGE.section()}>
          <FadeUp>
            <h2 style={{ ...PAGE.h2, marginBottom: '40px' }}>{content.formTitle}</h2>
            <form onSubmit={handleSubmit} style={{ maxWidth: '640px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div><label style={lbl}>{fl.name}</label><input required style={inputStyle} value={form.name} onChange={set('name')} /></div>
                <div><label style={lbl}>{fl.email}</label><input type="email" required style={inputStyle} value={form.email} onChange={set('email')} /></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div><label style={lbl}>{fl.phone}</label><input style={inputStyle} value={form.phone} onChange={set('phone')} /></div>
                <div><label style={lbl}>{fl.projectType}</label><input required placeholder={fl.projectPlaceholder} style={inputStyle} value={form.projectType} onChange={set('projectType')} /></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div><label style={lbl}>{fl.budget}</label><input placeholder={fl.budgetPlaceholder} style={inputStyle} value={form.budget} onChange={set('budget')} /></div>
                <div><label style={lbl}>{fl.timeline}</label><input placeholder={fl.timelinePlaceholder} style={inputStyle} value={form.timeline} onChange={set('timeline')} /></div>
              </div>
              <div><label style={lbl}>{fl.description}</label><textarea required rows={6} placeholder={fl.descPlaceholder} style={{ ...inputStyle, resize: 'vertical' }} value={form.description} onChange={set('description')} /></div>
              <button type="submit" style={PAGE.goldBtn}>{fl.submit}</button>
            </form>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { BespokePage });
