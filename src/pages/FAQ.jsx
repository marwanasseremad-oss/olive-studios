
function FAQPage({ navigate, tweaks = {}, lang = 'EN' }) {
  const [open, setOpen] = React.useState(null);
  const isAr = lang === 'AR';

  const faqs = {
    EN: [
      { q: 'When will my order arrive?', a: 'Orders within Greater Cairo typically arrive within 5–7 business days. Orders to Alexandria and the North Coast take 7–10 business days. Other governorates take 7–14 business days. You will receive a tracking number once your order has shipped.' },
      { q: 'How can I track my order?', a: 'Once your order has shipped, you will receive a message with your tracking number. You can also reach us on WhatsApp at any time for updates.' },
      { q: 'Am I able to change or cancel my order?', a: 'You may change or cancel your order within 24 hours of placing it by contacting our team. After this window, orders enter production and cannot be modified or cancelled.' },
      { q: 'My print arrived damaged. What should I do?', a: 'If your print arrives damaged, contact us within 48 hours with photographs. We will produce and send a replacement at no additional cost to you.' },
      { q: 'Do you offer expedited shipping?', a: 'Yes, express delivery within Greater Cairo takes 2–3 business days. Contact us via WhatsApp to arrange express delivery to other locations.' },
      { q: 'What forms of payment do you accept?', a: 'We accept all major credit cards (Visa, Mastercard), Egyptian bank cards, bank transfers for orders over 5,000 EGP, and deposit + cash on delivery for Greater Cairo orders.' },
      { q: 'Is my payment secure?', a: 'Absolutely. We use industry-standard SSL encryption to protect your information. All transactions are processed through secure payment gateways.' },
      { q: 'Is VAT included in the price?', a: 'Yes. All prices displayed on our site include VAT.' },
      { q: 'What paper do you use?', a: 'We print exclusively on Hahnemühle Fine Art papers — the same paper trusted by leading museums worldwide. Most commonly Hahnemühle Photo Rag 308 gsm, a 100% cotton rag with a beautiful matte finish.' },
      { q: 'How long will the print last?', a: 'Our archival pigment inks are rated for 100+ years of lightfastness under museum conditions. Framed behind UV-protective glass, your print will retain its vibrancy for generations.' },
    ],
    AR: [
      { q: 'متى سيصل طلبي؟', a: 'تصل الطلبات داخل القاهرة الكبرى خلال ٥–٧ أيام عمل. الإسكندرية والساحل الشمالي ٧–١٠ أيام. المحافظات الأخرى ٧–١٤ يوم عمل. ستتلقى رقم تتبع بمجرد شحن طلبك.' },
      { q: 'كيف يمكنني تتبع طلبي؟', a: 'بمجرد شحن طلبك، ستتلقى رسالة برقم التتبع. يمكنك أيضاً التواصل معنا عبر واتساب في أي وقت للاستفسار.' },
      { q: 'هل يمكنني تغيير أو إلغاء طلبي؟', a: 'يمكنك تغيير أو إلغاء طلبك خلال ٢٤ ساعة من تقديمه. بعد هذه الفترة، تدخل الطلبات مرحلة الإنتاج ولا يمكن تعديلها.' },
      { q: 'وصلت طبعتي تالفة، ماذا أفعل؟', a: 'إذا وصل طلبك تالفاً، تواصل معنا خلال ٤٨ ساعة مع صور للتلف. سنقوم بإنتاج وإرسال بديل بدون أي تكلفة إضافية.' },
      { q: 'هل تقدمون شحناً سريعاً؟', a: 'نعم، التوصيل السريع داخل القاهرة الكبرى يستغرق ٢–٣ أيام عمل. تواصل معنا عبر واتساب لترتيب التوصيل السريع لمناطق أخرى.' },
      { q: 'ما هي طرق الدفع المقبولة؟', a: 'نقبل جميع بطاقات الائتمان الرئيسية (فيزا، ماستركارد)، البطاقات البنكية المصرية، التحويل البنكي للطلبات التي تتجاوز ٥٠٠٠ جنيه، ودفعة مقدمة مع كاش عند التسليم لطلبات القاهرة الكبرى.' },
      { q: 'هل دفعتي آمنة؟', a: 'بالتأكيد. نستخدم تشفير SSL القياسي لحماية معلوماتك. تُعالج جميع المعاملات عبر بوابات دفع آمنة.' },
      { q: 'هل الأسعار تشمل ضريبة القيمة المضافة؟', a: 'نعم. جميع الأسعار المعروضة على موقعنا تشمل ضريبة القيمة المضافة.' },
      { q: 'ما نوع الورق الذي تستخدمونه؟', a: 'نطبع حصرياً على أوراق هانيموله للفنون الجميلة — نفس الورق الموثوق به في أبرز متاحف العالم. الأكثر استخداماً هو Photo Rag 308 جرام، ١٠٠٪ قطن، بملمس مطفأ جميل.' },
      { q: 'كم تدوم الطبعة؟', a: 'أحبارنا الأرشيفية معتمدة لأكثر من ١٠٠ عام في ظروف المتاحف. مع الإطار والزجاج الواقي من الأشعة فوق البنفسجية، ستحتفظ طبعتك بحيويتها لأجيال.' },
    ],
  };

  const items = faqs[lang] || faqs.EN;
  const title = isAr ? 'الأسئلة الشائعة' : 'Frequently Asked Questions';
  const stillQ = isAr ? 'لا تزال لديك أسئلة؟' : 'Still have questions?';
  const stillD = isAr ? 'فريقنا متاح سبعة أيام في الأسبوع.' : 'Our concierge is available 7 days a week.';
  const stillBtn = isAr ? 'واتساب' : 'WhatsApp Concierge';

  return (
    <div style={PAGE.wrap(tweaks.bg)}>
      <div style={PAGE.section()}>
        <FadeUp>
          <span style={PAGE.label}>{isAr ? 'دعم' : 'Support'}</span>
          <h1 style={PAGE.h1}>{title}</h1>
        </FadeUp>
      </div>
      <div style={{ borderTop: '1px solid rgba(240,234,216,0.07)' }}>
        <div style={{ ...PAGE.section(), paddingTop: 'clamp(24px,4vw,48px)' }}>
          <div style={{ maxWidth: '760px', display: 'flex', flexDirection: 'column' }}>
            {items.map((f, i) => (
              <FadeUp key={i} delay={i < 5 ? i * 0.05 : 0}>
                <div style={{ borderBottom: '1px solid rgba(240,234,216,0.07)' }}>
                  <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px 0', textAlign: isAr ? 'right' : 'left', gap: '16px' }}>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '19px', fontWeight: 400, color: '#f0ead8', lineHeight: 1.3 }}>{f.q}</span>
                    <span style={{ color: '#c4a355', fontSize: '20px', flexShrink: 0, transition: 'transform 0.3s', transform: open === i ? 'rotate(45deg)' : 'none' }}>+</span>
                  </button>
                  <div style={{ maxHeight: open === i ? '400px' : '0', overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(0.25,0,0,1)' }}>
                    <p style={{ ...PAGE.body, paddingBottom: '22px', margin: 0 }}>{f.a}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp>
            <div style={{ marginTop: '64px', ...PAGE.card, maxWidth: '560px', textAlign: 'center', padding: '40px' }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 300, color: '#f0ead8', margin: '0 0 12px' }}>{stillQ}</p>
              <p style={{ ...PAGE.body, margin: '0 0 24px' }}>{stillD}</p>
              <a href="https://wa.me/+201234567890" target="_blank" rel="noopener noreferrer" style={PAGE.goldBtn}>{stillBtn}</a>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { FAQPage });
