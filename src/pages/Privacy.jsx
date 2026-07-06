
function PrivacyPage({ navigate, tweaks = {}, lang = 'EN' }) {
  const isAr = lang === 'AR';
  const bodyFont = isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif";

  const en = {
    label: 'Legal',
    title: 'Privacy Policy',
    updated: 'Last updated: May 14, 2026',
    intro: "Olive Studios respects your privacy. This policy explains what information we collect, why we collect it, and how we keep it safe. By using our website or placing an order, you agree to the practices described below.",
    sections: [
      { h: '1. Information we collect', body: [
        'When you browse our site, we automatically log basic technical data — device type, browser, anonymised IP, and pages viewed — to keep the site secure and to improve performance.',
        'When you enquire, subscribe, or place an order, we collect the information you provide: name, email address, phone number, delivery address, and any details you share in your message. Payment is handled by trusted partners (Stripe and bank transfer); we never see your full card details.',
      ]},
      { h: '2. How we use it', body: [
        'To process your enquiry or order, arrange delivery, and provide aftercare for your artwork.',
        'To send you the newsletter you signed up for, and occasional updates about new editions or events. You can unsubscribe at any time.',
        'To respond to messages sent via WhatsApp, email, or our contact form.',
        'To meet our legal obligations — for example tax records and customer-protection law.',
      ]},
      { h: '3. Who we share it with', body: [
        'Couriers (DHL, Aramex, local partners) — only the address and contact required to deliver your order.',
        'Payment processors (Stripe, bank transfer providers) — only the data needed to take payment.',
        'Email and analytics tools we use to run the site. We do not sell your data to anyone.',
      ]},
      { h: '4. Cookies', body: [
        "We use a small number of cookies — strictly necessary cookies that make the site work, and basic analytics cookies (such as Google Analytics or Plausible) so we can see which pages people read. You can disable cookies in your browser; the site will still work.",
      ]},
      { h: '5. How long we keep it', body: [
        "Order and customer records — six years, to meet Egyptian tax and customer-protection law.",
        'Newsletter contacts — until you unsubscribe.',
        'WhatsApp and email conversations — up to two years, then deleted unless tied to an active order.',
      ]},
      { h: '6. Your rights', body: [
        'You can ask us at any time to see what data we hold about you, to correct it, or to delete it. Write to privacy@olivestudios.com and we will respond within 14 days.',
      ]},
      { h: '7. Children', body: [
        'Olive Studios sells fine art to adult collectors. We do not knowingly collect data from anyone under 18.',
      ]},
      { h: '8. Changes to this policy', body: [
        "When we update this policy, we'll change the date at the top of the page and, for material changes, email anyone whose contact information we already hold.",
      ]},
      { h: '9. Contact', body: [
        'Questions? Email privacy@olivestudios.com or WhatsApp the studio at +20 100 116 1776. We read every message.',
      ]},
    ],
  };

  const ar = {
    label: 'القانوني',
    title: 'سياسة الخصوصية',
    updated: 'آخر تحديث: ١٤ مايو ٢٠٢٦',
    intro: 'تحترم أوليف ستوديوز خصوصيتك. توضح هذه السياسة المعلومات التي نجمعها، ولماذا نجمعها، وكيف نحافظ على أمانها. باستخدامك لموقعنا أو إجراء طلب شراء، فإنك توافق على الممارسات الموضّحة أدناه.',
    sections: [
      { h: '١. المعلومات التي نجمعها', body: [
        'عند تصفّح موقعنا، نسجّل تلقائياً بيانات تقنية أساسية — نوع الجهاز، والمتصفح، وعنوان IP مجهول الهوية، والصفحات المُشاهَدة — لحماية الموقع وتحسين أدائه.',
        'عند الاستفسار أو الاشتراك أو إجراء طلب، نجمع المعلومات التي تقدّمها: الاسم، والبريد الإلكتروني، ورقم الهاتف، وعنوان التسليم، وأي تفاصيل تشاركها في رسالتك. تتم معالجة الدفع عبر شركاء موثوقين (سترايب والتحويل البنكي)، ولا نطّلع أبداً على تفاصيل بطاقتك بالكامل.',
      ]},
      { h: '٢. كيف نستخدمها', body: [
        'لمعالجة استفسارك أو طلبك، وترتيب التسليم، وتقديم خدمة ما بعد البيع لقطعتك الفنية.',
        'لإرسال النشرة البريدية التي اشتركت فيها، وتحديثات عرضية عن الإصدارات أو الفعاليات الجديدة. يمكنك إلغاء الاشتراك في أي وقت.',
        'للرد على الرسائل المُرسَلة عبر واتساب أو البريد الإلكتروني أو نموذج التواصل.',
        'للوفاء بالتزاماتنا القانونية — مثل السجلات الضريبية وقانون حماية المستهلك.',
      ]},
      { h: '٣. مع من نشاركها', body: [
        'شركات الشحن (DHL، أرامكس، شركاء محليّون) — فقط العنوان وبيانات التواصل اللازمة لتسليم طلبك.',
        'معالجات الدفع (سترايب، مزوّدو التحويلات البنكية) — فقط البيانات اللازمة لإتمام الدفع.',
        'أدوات البريد والتحليلات التي نستخدمها لتشغيل الموقع. نحن لا نبيع بياناتك لأي طرف.',
      ]},
      { h: '٤. ملفات الكوكيز', body: [
        'نستخدم عدداً قليلاً من ملفات الكوكيز — ملفات أساسية تجعل الموقع يعمل، وأدوات تحليل بسيطة (مثل Google Analytics أو Plausible) لمعرفة الصفحات الأكثر قراءة. يمكنك تعطيل الكوكيز من متصفّحك، وسيستمر الموقع في العمل.',
      ]},
      { h: '٥. كم من الوقت نحتفظ بها', body: [
        'سجلات الطلبات والعملاء — ست سنوات، استيفاءً للقوانين الضريبية وحماية المستهلك في مصر.',
        'جهات الاتصال بالنشرة البريدية — حتى تطلب إلغاء الاشتراك.',
        'محادثات واتساب والبريد الإلكتروني — حتى عامَين، ثم تُحذف ما لم تكن مرتبطة بطلب نشط.',
      ]},
      { h: '٦. حقوقك', body: [
        'يحقّ لك في أي وقت أن تطلب الاطّلاع على البيانات التي نحتفظ بها عنك، أو تصحيحها، أو حذفها. راسلنا على privacy@olivestudios.com وسنردّ خلال ١٤ يوماً.',
      ]},
      { h: '٧. الأطفال', body: [
        'تبيع أوليف ستوديوز قطعاً فنية للجامعين البالغين. نحن لا نجمع بيانات عمداً من أي شخص دون الثامنة عشرة.',
      ]},
      { h: '٨. التعديلات على هذه السياسة', body: [
        'عند تحديث هذه السياسة، سنغيّر التاريخ في أعلى الصفحة، وفي حالة التغييرات الجوهرية، سنُبلغ كلّ مَن نملك بيانات التواصل الخاصة بهم.',
      ]},
      { h: '٩. التواصل', body: [
        'لديك سؤال؟ راسلنا على privacy@olivestudios.com أو عبر واتساب على ‎+٢٠ ١٠٠ ١١٦ ١٧٧٦. نقرأ كل رسالة.',
      ]},
    ],
  };

  const c = isAr ? ar : en;

  return (
    <div style={{ background: tweaks.bg || '#1b1916', color: '#f0ead8', paddingTop: '108px' }}>
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
Object.assign(window, { PrivacyPage });
