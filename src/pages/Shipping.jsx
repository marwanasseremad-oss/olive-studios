
function ShippingPage({ navigate, tweaks = {}, lang = 'EN' }) {
  const isAr = lang === 'AR';

  const content = {
    EN: {
      label: 'Policies', title: 'Shipping &', titleItalic: 'Returns',
      intro: 'We take the same care in delivering your art as we do in creating it. Clear policies, secure packaging, and dedicated support.',
      pillars: [
        { t: 'Free Cairo Delivery', d: 'White-glove service in Greater Cairo' },
        { t: '7–14 Days', d: 'Production and delivery time' },
        { t: 'Damage Replacement', d: 'Full replacement for transit damage' },
        { t: 'Flexible Payment', d: 'Cards, bank transfer, or deposit' },
      ],
      sections: [
        {
          title: 'Delivery Within Egypt',
          paras: [
            { strong: 'Greater Cairo (New Cairo, Maadi, Zamalek, Sheikh Zayed, 6th October):', body: 'Free white-glove delivery. Your print arrives with a dedicated handler who ensures safe handover. Installation services available upon request.' },
            { strong: 'Alexandria & North Coast:', body: 'Flat rate of 250 EGP. Secure courier delivery with tracking.' },
            { strong: 'Other Governorates:', body: 'Flat rate of 400 EGP. Secure courier delivery with tracking and insurance.' },
            { strong: 'Production Time:', body: 'All prints are made to order. Please allow 7–14 business days from order confirmation to delivery. Framed prints may require an additional 3–5 days.' },
          ]
        },
        {
          title: 'International Shipping',
          paras: [
            { strong: 'Rates & Timing:', body: 'A flat 1,800 EGP shipping fee (3,500 EGP for framed pieces, which travel in a custom crate). Delivery takes 10–15 business days via insured, trackable courier.' },
            { strong: 'Customs & Import Duties:', body: 'International orders may be subject to customs duties, VAT, or import taxes levied by the destination country. These are set by your local authority, payable on delivery, and are not included in the print or shipping price.' },
            { strong: 'Currency:', body: 'Prices are charged in Egyptian Pounds (EGP). USD/EUR figures shown on the site are indicative estimates to help you budget — your card issuer sets the final exchange rate.' },
          ]
        },
        {
          title: 'Packaging',
          paras: [
            { strong: 'Unframed Prints:', body: 'Shipped flat in rigid acid-free packaging with protective tissue. Outer cardboard box reinforced at corners.' },
            { strong: 'Framed Prints:', body: 'Custom wooden crate with foam padding. Glass protected with painter\'s tape to prevent shattering in transit.' },
          ]
        },
        {
          title: 'Returns & Replacements',
          paras: [
            { strong: 'Damage in Transit:', body: 'If your print arrives damaged, contact us within 48 hours with photographs. We will produce and ship a replacement at no additional cost.' },
            { strong: 'Quality Issues:', body: 'If you believe your print has a defect, please contact us. We stand behind our quality and will assess any concerns promptly.' },
            { strong: 'Change of Mind:', body: 'As prints are produced to order, we cannot accept returns for change of mind. We encourage customers to speak with our concierge before purchasing.' },
          ]
        },
        {
          title: 'Payment Options',
          paras: [
            { strong: 'Credit/Debit Cards:', body: 'We accept Visa, Mastercard, and local Egyptian bank cards through our secure checkout.' },
            { strong: 'Bank Transfer:', body: 'Available for orders over 5,000 EGP. Contact us for account details.' },
            { strong: 'Deposit + Cash on Delivery:', body: 'For orders in Greater Cairo, we offer a 50% deposit with the balance paid on delivery in cash or card.' },
          ]
        },
      ],
      ctaTitle: 'Questions?', ctaDesc: 'Our concierge is available to assist with any shipping or delivery questions.', ctaBtn: 'Contact via WhatsApp',
    },
    AR: {
      label: 'السياسات', title: 'الشحن', titleItalic: 'والإرجاع',
      intro: 'نولي تسليم أعمالك الفنية نفس العناية التي نمنحها لإنتاجها. سياسات واضحة، وتغليف آمن، ودعم متخصص.',
      pillars: [
        { t: 'توصيل مجاني بالقاهرة', d: 'خدمة متكاملة في القاهرة الكبرى' },
        { t: '٧–١٤ يوم', d: 'وقت الإنتاج والتسليم' },
        { t: 'استبدال في حال التلف', d: 'استبدال كامل لأي تلف أثناء الشحن' },
        { t: 'دفع مرن', d: 'بطاقات، تحويل بنكي، أو دفعة مقدمة' },
      ],
      sections: [
        {
          title: 'التوصيل داخل مصر',
          paras: [
            { strong: 'القاهرة الكبرى (مدينة نصر، المعادي، الزمالك، الشيخ زايد، أكتوبر):', body: 'توصيل مجاني مع مندوب متخصص يضمن التسليم الآمن. خدمة التركيب متاحة عند الطلب.' },
            { strong: 'الإسكندرية والساحل الشمالي:', body: 'رسوم ثابتة ٢٥٠ جنيه. توصيل آمن مع تتبع الشحنة.' },
            { strong: 'المحافظات الأخرى:', body: 'رسوم ثابتة ٤٠٠ جنيه. توصيل آمن مع تتبع الشحنة والتأمين.' },
            { strong: 'وقت الإنتاج:', body: 'جميع الطبعات تُنتج حسب الطلب. يرجى السماح بـ ٧–١٤ يوم عمل من تأكيد الطلب حتى التسليم. الطبعات المؤطرة قد تحتاج إلى ٣–٥ أيام إضافية.' },
          ]
        },
        {
          title: 'الشحن الدولي',
          paras: [
            { strong: 'الرسوم والمدة:', body: 'رسوم ثابتة ١٬٨٠٠ جنيه (٣٬٥٠٠ جنيه للقطع المؤطّرة التي تُشحن في صندوق مخصّص). التسليم خلال ١٠–١٥ يوم عمل عبر شركة شحن موثوقة مع تتبع وتأمين.' },
            { strong: 'الجمارك ورسوم الاستيراد:', body: 'قد تخضع الطلبات الدولية لرسوم جمركية أو ضريبة قيمة مضافة أو رسوم استيراد تفرضها سلطات بلدك. تُدفع هذه الرسوم عند التسليم ولا تشملها تكلفة الطباعة أو الشحن.' },
            { strong: 'العملة:', body: 'يتم تحصيل المبلغ بالجنيه المصري (EGP). أرقام الدولار/اليورو الظاهرة على الموقع تقديرية لمساعدتك على التخطيط — يحدد مُصدر بطاقتك سعر الصرف النهائي.' },
          ]
        },
        {
          title: 'التغليف',
          paras: [
            { strong: 'الطبعات غير المؤطرة:', body: 'تُشحن مسطحة في تغليف صلب خالٍ من الحموضة مع ورق حماية. صندوق خارجي مقوى عند الزوايا.' },
            { strong: 'الطبعات المؤطرة:', body: 'صندوق خشبي مخصص مبطن بالإسفنج. الزجاج محمي بشريط لاصق لمنع التكسر أثناء النقل.' },
          ]
        },
        {
          title: 'الإرجاع والاستبدال',
          paras: [
            { strong: 'التلف أثناء الشحن:', body: 'إذا وصلت طبعتك تالفة، تواصل معنا خلال ٤٨ ساعة مع صور للتلف. سنقوم بإنتاج وشحن بديل بدون أي تكلفة إضافية.' },
            { strong: 'مشكلات الجودة:', body: 'إذا كنت تعتقد أن طبعتك تحتوي على عيب، يرجى التواصل معنا. نقف خلف جودتنا ونتعامل مع أي مخاوف بسرعة.' },
            { strong: 'تغيير الرأي:', body: 'نظراً لأن الطبعات تُنتج حسب الطلب، لا يمكننا قبول الإرجاع لتغيير الرأي. نشجع العملاء على التحدث مع فريقنا قبل الشراء.' },
          ]
        },
        {
          title: 'خيارات الدفع',
          paras: [
            { strong: 'بطاقات الائتمان/الخصم:', body: 'نقبل فيزا وماستركارد والبطاقات البنكية المصرية عبر موقعنا الآمن.' },
            { strong: 'التحويل البنكي:', body: 'متاح للطلبات التي تتجاوز ٥٠٠٠ جنيه. تواصل معنا للحصول على التفاصيل.' },
            { strong: 'دفعة مقدمة + كاش عند التسليم:', body: 'للطلبات في القاهرة الكبرى، نقدم ٥٠٪ دفعة مقدمة والباقي نقداً أو بالبطاقة عند التسليم.' },
          ]
        },
      ],
      ctaTitle: 'لديك أسئلة؟', ctaDesc: 'فريقنا متاح للمساعدة في أي استفسارات تتعلق بالشحن أو التوصيل.', ctaBtn: 'تواصل عبر واتساب',
    }
  };

  const c = content[lang] || content.EN;

  return (
    <div style={PAGE.wrap(tweaks.bg)}>
      <div style={PAGE.section()}>
        <FadeUp>
          <span style={PAGE.label}>{c.label}</span>
          <h1 style={PAGE.h1}>{c.title}<br /><em style={{ fontStyle: 'italic' }}>{c.titleItalic}</em></h1>
          <p style={{ ...PAGE.body, maxWidth: '520px' }}>{c.intro}</p>
        </FadeUp>
      </div>

      <div style={{ borderTop: '1px solid rgba(240,234,216,0.07)', background: '#151310' }}>
        <div style={PAGE.section()}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'clamp(24px,4vw,48px)' }}>
            {c.pillars.map((item, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ color: '#c4a355', display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
                    {[<Icon.Truck />, <Icon.Shield />, <Icon.Refresh />, <Icon.Card />][i]}
                  </span>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', color: '#f0ead8', margin: '0 0 6px' }}>{item.t}</p>
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
            {c.sections.map((sec) => (
              <FadeUp key={sec.title}>
                <h2 style={PAGE.h2}>{sec.title}</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {sec.paras.map((p, j) => (
                    <p key={j} style={{ ...PAGE.body, margin: 0 }}>
                      <strong style={{ color: '#f0ead8', fontWeight: 500 }}>{p.strong}</strong><br />{p.body}
                    </p>
                  ))}
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp>
            <div style={{ ...PAGE.card, marginTop: 'clamp(48px,6vw,72px)', textAlign: 'center', padding: '40px', maxWidth: '480px' }}>
              <h2 style={{ ...PAGE.h2, fontSize: '22px', marginBottom: '12px' }}>{c.ctaTitle}</h2>
              <p style={{ ...PAGE.body, marginBottom: '24px' }}>{c.ctaDesc}</p>
              <a href={`https://wa.me/${window.CURATOR_WA}`} target="_blank" rel="noopener noreferrer" style={PAGE.outlineBtn}>{c.ctaBtn}</a>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { ShippingPage });
