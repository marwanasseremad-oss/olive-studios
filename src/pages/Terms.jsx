
function TermsPage({ navigate, tweaks = {}, lang = 'EN' }) {
  const isAr = lang === 'AR';
  const bodyFont = isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif";

  const en = {
    label: 'Legal',
    title: 'Terms & Conditions',
    updated: 'Last updated: May 14, 2026',
    intro: 'These terms govern your use of the Olive Studios website and the purchase of artworks from us. By placing an order, you accept them.',
    sections: [
      { h: '1. About us', body: ['Olive Studios is a Cairo-based fine-art print publisher producing limited edition works by Egyptian and regional photographers. You can reach us at hello@olivestudios.com or on WhatsApp at +20 100 116 1776.'] },
      { h: '2. Orders', body: [
        "Placing an order through the website or via WhatsApp constitutes an offer to buy. The order is confirmed when we email you a written acknowledgement and proof of edition number.",
        'Each piece is made to order. Please allow 7–14 business days for production, plus delivery time.',
      ]},
      { h: '3. Editions and authenticity', body: [
        'Standard Editions are produced in exactly 10 copies per size. Rare Editions are produced in exactly 5 copies per size, across all formats. When the last copy of an edition sells, it is retired permanently — no further prints will be produced.',
        'Every print is numbered, signed, and shipped with a printed Certificate of Authenticity bearing your edition number.',
      ]},
      { h: '4. Pricing and payment', body: [
        "Prices are shown in Egyptian Pounds and include VAT. International orders may incur additional customs duties on arrival, which are the customer's responsibility.",
        'We accept Visa, Mastercard, and bank transfer. Card payments are processed by Stripe; we do not store card data.',
      ]},
      { h: '5. Delivery', body: [
        'Delivery inside Egypt: 3–7 business days after production via DHL or local courier with tracking. International delivery: 7–14 business days via DHL Express, fully insured.',
        'Risk passes to the customer on delivery. We will replace any item that arrives damaged in transit, on the condition that you photograph the damage within 48 hours of receipt and contact us at hello@olivestudios.com.',
      ]},
      { h: '6. Returns', body: [
        'Because each print is made to order, sales are final once production has begun. If you change your mind within 24 hours of placing an order — and before production begins — we will refund you in full. After production begins, refunds are at our discretion.',
        'Damaged or defective prints will be replaced or refunded at no cost.',
      ]},
      { h: '7. Intellectual property', body: [
        'All photographs remain the copyright of the artist. Purchase of a print conveys ownership of the physical object only, and does not transfer any reproduction or commercial rights.',
      ]},
      { h: '8. Liability', body: [
        "Olive Studios' liability for any single order is limited to the price paid for that order. Nothing in these terms limits liability for fraud or for harm we are not allowed to limit by law.",
      ]},
      { h: '9. Governing law', body: [
        'These terms are governed by the laws of the Arab Republic of Egypt. Disputes will be heard by the courts of Cairo.',
      ]},
      { h: '10. Contact', body: [
        'Questions about an order or these terms? Email hello@olivestudios.com or WhatsApp +20 100 116 1776.',
      ]},
    ],
  };

  const ar = {
    label: 'القانوني',
    title: 'الشروط والأحكام',
    updated: 'آخر تحديث: ١٤ مايو ٢٠٢٦',
    intro: 'تحكم هذه الشروط استخدامك لموقع أوليف ستوديوز وشراء الأعمال الفنية منا. بإجرائك أي طلب، فإنك تقبل هذه الشروط.',
    sections: [
      { h: '١. عنّا', body: ['أوليف ستوديوز ناشرة طبعات فنية مقرّها القاهرة، تنتج أعمالاً محدودة الإصدار لمصورين مصريين وإقليميين. للتواصل: hello@olivestudios.com أو عبر واتساب على ‎+٢٠ ١٠٠ ١١٦ ١٧٧٦.'] },
      { h: '٢. الطلبات', body: [
        'يُعدّ تقديم الطلب عبر الموقع أو واتساب عرضاً للشراء. ويُعتبر الطلب مؤكَّداً عندما نرسل إليك إقراراً كتابياً ودليل رقم الإصدار.',
        'كل قطعة تُصنع حسب الطلب. يُرجى السماح بـ ٧–١٤ يوم عمل للإنتاج، إضافة إلى مدة التسليم.',
      ]},
      { h: '٣. الإصدارات والأصالة', body: [
        'الإصدارات القياسية تُنتج في ١٠ نسخ بالضبط لكل حجم. والإصدارات النادرة تُنتج في ٥ نسخ بالضبط لكل حجم، عبر جميع المقاسات. حين تُباع آخر نسخة من إصدار، يُتقاعَد نهائياً، ولن تُطبع نسخ إضافية.',
        'كل طبعة مرقَّمة وموقَّعة وتُشحن مع شهادة أصالة مطبوعة تحمل رقم إصدارك.',
      ]},
      { h: '٤. الأسعار والدفع', body: [
        'الأسعار مدوَّنة بالجنيه المصري وشاملة ضريبة القيمة المضافة. قد تخضع الطلبات الدولية لرسوم جمركية إضافية عند الوصول، وتقع مسؤوليتها على العميل.',
        'نقبل فيزا وماستركارد والتحويل البنكي. تُعالَج مدفوعات البطاقات عبر سترايب، ولا نخزّن بيانات البطاقات.',
      ]},
      { h: '٥. التوصيل', body: [
        'التوصيل داخل مصر: ٣–٧ أيام عمل بعد الإنتاج عبر DHL أو شركة شحن محلية مع تتبّع. التوصيل الدولي: ٧–١٤ يوم عمل عبر DHL Express مع تأمين شامل.',
        'تنتقل المخاطر إلى العميل عند التسليم. سنستبدل أي قطعة تصل تالفة في الشحن، بشرط تصوير الضرر خلال ٤٨ ساعة من الاستلام والتواصل معنا على hello@olivestudios.com.',
      ]},
      { h: '٦. الإرجاع', body: [
        'بما أن كل طبعة تُصنع حسب الطلب، تُعدّ المبيعات نهائية بمجرد بدء الإنتاج. إذا غيّرت رأيك خلال ٢٤ ساعة من تقديم الطلب وقبل بدء الإنتاج، نُعيد المبلغ كاملاً. بعد بدء الإنتاج، يكون الاسترداد وفق تقديرنا.',
        'الطبعات التالفة أو المعيبة تُستبدل أو يُستردّ ثمنها دون تكلفة.',
      ]},
      { h: '٧. الملكية الفكرية', body: [
        'تبقى جميع الصور الفوتوغرافية ملكية حقوق نشر تخصّ الفنان. لا يمنح شراء الطبعة سوى ملكية القطعة المادية، ولا ينقل أي حقوق نسخ أو استخدام تجاري.',
      ]},
      { h: '٨. المسؤولية', body: [
        'تقتصر مسؤولية أوليف ستوديوز عن أي طلب على السعر المدفوع لهذا الطلب. لا يحدّ شيء في هذه الشروط من المسؤولية في حالات الاحتيال أو الأضرار التي لا يُسمح قانوناً بتحديد المسؤولية عنها.',
      ]},
      { h: '٩. القانون الحاكم', body: [
        'تخضع هذه الشروط لقوانين جمهورية مصر العربية. تختص محاكم القاهرة بالنظر في النزاعات.',
      ]},
      { h: '١٠. التواصل', body: [
        'أسئلة عن طلبك أو هذه الشروط؟ راسلنا على hello@olivestudios.com أو عبر واتساب ‎+٢٠ ١٠٠ ١١٦ ١٧٧٦.',
      ]},
    ],
  };

  const c = isAr ? ar : en;

  return (
    <div style={{ background: tweaks.bg || '#1b1916', color: '#f0ead8', paddingTop: '72px' }}>
      <section style={{ padding: 'clamp(56px,7vw,96px) clamp(20px,5vw,72px) clamp(32px,4vw,56px)', maxWidth: '840px', margin: '0 auto' }}>
        <FadeUp>
          <p style={{ fontFamily: bodyFont, fontSize: '10px', letterSpacing: isAr ? 0 : '0.22em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(196,163,85,0.8)', marginBottom: '16px' }}>{c.label}</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px,5vw,72px)', fontWeight: 300, margin: '0 0 12px', lineHeight: 1.05 }}>{c.title}</h1>
          <p style={{ fontFamily: bodyFont, fontSize: '11px', letterSpacing: isAr ? 0 : '0.12em', color: 'rgba(240,234,216,0.35)', textTransform: isAr ? 'none' : 'uppercase' }}>{c.updated}</p>
          <p style={{ fontFamily: bodyFont, fontSize: '15px', color: 'rgba(240,234,216,0.65)', lineHeight: 1.85, marginTop: '32px', fontWeight: 300 }}>{c.intro}</p>
        </FadeUp>
      </section>
      <section style={{ padding: '0 clamp(20px,5vw,72px) clamp(72px,9vw,120px)', maxWidth: '840px', margin: '0 auto' }}>
        {c.sections.map((s, i) => (
          <FadeUp key={i} delay={Math.min(i * 0.04, 0.3)}>
            <div style={{ paddingTop: 'clamp(28px,3vw,40px)', borderTop: i > 0 ? '1px solid rgba(240,234,216,0.07)' : 'none', marginTop: i > 0 ? 'clamp(28px,3vw,40px)' : 0 }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px,2.5vw,30px)', fontWeight: 400, margin: '0 0 16px', color: '#f0ead8' }}>{s.h}</h2>
              {s.body.map((p, j) => (
                <p key={j} style={{ fontFamily: bodyFont, fontSize: '14px', color: 'rgba(240,234,216,0.55)', lineHeight: 1.9, margin: '0 0 12px', fontWeight: 300 }}>{p}</p>
              ))}
            </div>
          </FadeUp>
        ))}
      </section>
    </div>
  );
}
Object.assign(window, { TermsPage });
