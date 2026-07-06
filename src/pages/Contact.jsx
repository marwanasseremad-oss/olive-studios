
function ContactPage({ navigate, tweaks = {}, lang = 'EN' }) {
  const [form, setForm] = React.useState({ firstName:'', lastName:'', email:'', subject:'', message:'' });
  const [sent, setSent] = React.useState(false);
  const set = k => e => setForm(f => ({...f, [k]: e.target.value}));
  const isAr = lang === 'AR';

  const c = {
    EN: {
      label: 'Get in Touch', title: "We're Here", italic: 'to Help',
      intro: 'Questions about a piece? Need help choosing the right size? Our concierge is here to assist.',
      infoTitle: 'Contact Information',
      cards: [
        { icon: <Icon.WA />, title: 'WhatsApp Concierge', sub: 'Fastest response. Available 10am–8pm Cairo time.', detail: '+20 123 456 7890', href: 'https://wa.me/+201234567890' },
        { icon: <Icon.Mail />, title: 'Email', sub: 'For detailed inquiries and documentation.', detail: 'hello@olivestudios.com', href: 'mailto:hello@olivestudios.com' },
        { icon: <Icon.IG />, title: 'Instagram', sub: 'Follow for new releases and behind-the-scenes.', detail: '@_olivestudios', href: 'https://www.instagram.com/_olivestudios/' },
        { icon: <Icon.MapPin />, title: 'Location', sub: 'Cairo, Egypt', detail: 'By appointment only', href: null },
      ],
      formTitle: 'Send a Message',
      fields: { first: 'First Name', last: 'Last Name', email: 'Email', subject: 'Subject', message: 'Message', subjectOptions: ['', 'Purchasing Inquiry', 'Question about an Artwork', 'Shipping Question', 'Corporate / Designer Inquiry', 'Other'], subjectDefault: 'Select a topic', msgPlaceholder: 'How can we help?', submit: 'Send Message', thanks: "Message sent. We'll respond within 24 hours.", note: 'We respond to all inquiries within 24 hours.' },
    },
    AR: {
      label: 'تواصل معنا', title: 'نحن هنا', italic: 'لمساعدتك',
      intro: 'لديك سؤال عن قطعة؟ تحتاج مساعدة في اختيار الحجم المناسب؟ فريقنا هنا لمساعدتك.',
      infoTitle: 'معلومات التواصل',
      cards: [
        { icon: <Icon.WA />, title: 'واتساب', sub: 'أسرع وسيلة للرد. متاح ١٠ص–٨م بتوقيت القاهرة.', detail: '+20 123 456 7890', href: 'https://wa.me/+201234567890' },
        { icon: <Icon.Mail />, title: 'البريد الإلكتروني', sub: 'للاستفسارات المفصلة والوثائق.', detail: 'hello@olivestudios.com', href: 'mailto:hello@olivestudios.com' },
        { icon: <Icon.IG />, title: 'إنستغرام', sub: 'تابعنا للإصدارات الجديدة وكواليس الاستوديو.', detail: '@_olivestudios', href: 'https://www.instagram.com/_olivestudios/' },
        { icon: <Icon.MapPin />, title: 'الموقع', sub: 'القاهرة، مصر', detail: 'بموعد مسبق فقط', href: null },
      ],
      formTitle: 'أرسل رسالة',
      fields: { first: 'الاسم الأول', last: 'اسم العائلة', email: 'البريد الإلكتروني', subject: 'الموضوع', message: 'الرسالة', subjectOptions: ['', 'استفسار شراء', 'سؤال عن عمل فني', 'سؤال عن الشحن', 'استفسار شركات / مصمم داخلي', 'أخرى'], subjectDefault: 'اختر موضوعاً', msgPlaceholder: 'كيف يمكننا مساعدتك؟', submit: 'إرسال', thanks: 'تم إرسال رسالتك. سنرد خلال ٢٤ ساعة.', note: 'نرد على جميع الاستفسارات خلال ٢٤ ساعة.' },
    }
  };

  const content = c[lang] || c.EN;
  const f = content.fields;

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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(40px,6vw,80px)' }}>
          <FadeUp>
            <h2 style={{ ...PAGE.h2, fontSize: '24px' }}>{content.infoTitle}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {content.cards.map(card => (
                <a key={card.title} href={card.href || '#'} target={card.href ? '_blank' : undefined} rel="noopener noreferrer"
                  style={{ ...PAGE.card, display: 'flex', gap: '20px', alignItems: 'flex-start', textDecoration: 'none', transition: 'border-color 0.25s', cursor: card.href ? 'pointer' : 'default' }}
                  onMouseEnter={e => { if (card.href) e.currentTarget.style.borderColor = 'rgba(196,163,85,0.4)'; }}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(240,234,216,0.08)'}>
                  <span style={{ color: '#c4a355', flexShrink: 0, marginTop: '2px' }}>{card.icon}</span>
                  <div>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', color: '#f0ead8', margin: '0 0 4px' }}>{card.title}</p>
                    <p style={{ ...PAGE.body, fontSize: '12px', margin: '0 0 4px' }}>{card.sub}</p>
                    <p style={{ fontFamily: isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif", fontSize: '12px', color: 'rgba(240,234,216,0.6)' }}>{card.detail}</p>
                  </div>
                </a>
              ))}
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <h2 style={{ ...PAGE.h2, fontSize: '24px' }}>{content.formTitle}</h2>
            {sent ? (
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '22px', color: '#c4a355', padding: '32px 0' }}>{f.thanks}</p>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div><label style={lbl}>{f.first}</label><input required style={inputStyle} value={form.firstName} onChange={set('firstName')} /></div>
                  <div><label style={lbl}>{f.last}</label><input required style={inputStyle} value={form.lastName} onChange={set('lastName')} /></div>
                </div>
                <div><label style={lbl}>{f.email}</label><input type="email" required style={inputStyle} value={form.email} onChange={set('email')} /></div>
                <div>
                  <label style={lbl}>{f.subject}</label>
                  <select required style={{ ...inputStyle, appearance: 'none' }} value={form.subject} onChange={set('subject')}>
                    {f.subjectOptions.map((o, i) => <option key={i} value={o}>{i === 0 ? f.subjectDefault : o}</option>)}
                  </select>
                </div>
                <div><label style={lbl}>{f.message}</label><textarea required rows={5} placeholder={f.msgPlaceholder} style={{ ...inputStyle, resize: 'vertical' }} value={form.message} onChange={set('message')} /></div>
                <button type="submit" style={PAGE.goldBtn}>{f.submit}</button>
                <p style={{ ...PAGE.body, fontSize: '11px', textAlign: 'center', margin: 0 }}>{f.note}</p>
              </form>
            )}
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { ContactPage });
