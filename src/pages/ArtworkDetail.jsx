
function ArtworkDetailPage({ navigate, params = {}, addToCart, tweaks = {}, lang = 'EN', currency = 'EGP' }) {
  const t = (key, vars) => T(key, lang, vars);
  const isAr = lang === 'AR';
  const artwork = window.ARTWORKS.find(a => a.id === params.id) || window.ARTWORKS[0];
  const isRare = artwork.tier === 'rare';

  const [size, setSize] = React.useState('50×70');
  const [framed, setFramed] = React.useState(false);
  const [frameColor, setFrameColor] = React.useState('black'); // 'black' | 'white'
  const [added, setAdded] = React.useState(false);
  const [roomOpen, setRoomOpen] = React.useState(false);
  const [detailsOpen, setDetailsOpen] = React.useState(false);

  const artistObj = window.ARTISTS.find(a => a.id === artwork.artistId);
  // Which purchase path this configuration routes to.
  const routing = window.purchaseTier(artwork, framed); // 'direct' | 'concierge'

  // Lock body scroll when room modal is open
  React.useEffect(() => {
    if (roomOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [roomOpen]);

  // Independent state inside the room modal so user can preview sizes/framing without changing selection
  const [roomSize, setRoomSize] = React.useState(size);
  const [roomFramed, setRoomFramed] = React.useState(framed);
  const [roomFrameColor, setRoomFrameColor] = React.useState(frameColor);
  React.useEffect(() => { if (roomOpen) { setRoomSize(size); setRoomFramed(framed); setRoomFrameColor(frameColor); } }, [roomOpen]);

  // Real-world art dimensions in cm — width × height. Landscape pieces flip.
  const baseDims = { '30×40': [30, 40], '50×70': [50, 70], '70×100': [70, 100] };
  const [baseW, baseH] = baseDims[roomSize] || baseDims['50×70'];
  const [wCm, hCm] = artwork.landscape ? [baseH, baseW] : [baseW, baseH];
  // Room scene calibration: image is 1575×998 px, representing a wall ~3m wide
  // → ~3 px per cm on the wall plane. The wall fills the image width fully.
  // Width % of room image: cm * 3 / 1575 * 100
  const artW = (wCm * 3 / 1575) * 100;
  const artH = (hCm * 3 / 998) * 100;

  const price = framed ? artwork.framedPrices[size] : artwork.prices[size];
  const remaining = artwork.editionSize - artwork.editionsSold;
  const nextEdition = artwork.editionsSold + 1;
  const relatedWorks = window.ARTWORKS.filter(a => a.artistId === artwork.artistId && a.id !== artwork.id).slice(0, 3);

  React.useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [params.id]);

  const handleAddToCart = () => {
    addToCart({
      id: artwork.id + '-' + size + '-' + framed + (framed ? '-' + frameColor : ''),
      artworkId: artwork.id,
      title: isAr ? artwork.titleAr : artwork.title,
      artist: artwork.artist,
      image: artwork.image,
      size, framed, price,
      frameColor: framed ? frameColor : null,
      number: artwork.number,
      tier: artwork.tier,
      editionsSold: artwork.editionsSold,
      editionSize: artwork.editionSize,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const name = () => isAr ? artwork.titleAr : artwork.title;
  const tierLabelEn = isRare ? 'Rare Edition' : 'Standard Edition';
  const framingEn = framed ? `, framed (${frameColor} frame)` : ', unframed';
  const framingAr = framed ? `، مؤطّرة (${frameColor === 'white' ? 'إطار أبيض' : 'إطار أسود'})` : '، بدون إطار';
  const tierLabelAr = isRare ? 'إصدار نادر' : 'إصدار قياسي';

  // Curator-reserve message (concierge path) — full context per the brief.
  const reserveMsg = () => isAr
    ? encodeURIComponent(`مرحبًا، أودّ حجز "${name()}" لـ${artwork.artist} — ${tierLabelAr}، ${size} سم${framingAr}. ممكن ترشدني في التفاصيل؟`)
    : encodeURIComponent(`Hi, I'd like to reserve "${name()}" by ${artwork.artist} — ${tierLabelEn}, ${size} cm${framingEn}. Could you walk me through the details?`);

  // Soft-enquiry message (curator text link on direct-buy pieces).
  const enquireMsg = () => isAr
    ? encodeURIComponent(`مرحبًا، أنظر إلى "${name()}" (${tierLabelAr}). أفكّر في عدة قطع / تأطير مخصّص وأودّ معرفة المزيد عن الفنان.`)
    : encodeURIComponent(`Hi, I'm looking at "${name()}" (${tierLabelEn}). I'm considering multiple pieces / custom framing and would love to know more about the artist.`);

  const reserveHref = `https://wa.me/${window.CURATOR_WA}?text=${reserveMsg()}`;
  const enquireHref = `https://wa.me/${window.CURATOR_WA}?text=${enquireMsg()}`;

  const availabilityLabel = () => {
    const tierWord = isRare ? (isAr ? 'إصدار نادر' : 'Rare Edition') : (isAr ? 'إصدار قياسي' : 'Standard Edition');
    return isAr
      ? `${tierWord} — ${remaining} من ${artwork.editionSize} متبقية`
      : `${tierWord} — ${remaining} of ${artwork.editionSize} remaining`;
  };

  const C = { container: { maxWidth: '1360px', margin: '0 auto', padding: '0 clamp(20px,4vw,72px)' } };
  const bodyFont = isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif";

  return (
    <div style={{ background: tweaks.bg || '#1b1916', color: '#f0ead8', paddingTop: '108px' }}>

      {/* Breadcrumb */}
      <div style={{ ...C.container, paddingTop: '32px' }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button onClick={() => navigate('collection')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: bodyFont, fontSize: '11px', color: 'rgba(240,234,216,0.55)', padding: 0 }}>
            {isAr ? 'المجموعة' : 'Collection'}
          </button>
          <span style={{ color: 'rgba(240,234,216,0.2)', fontSize: '11px' }}>·</span>
          <span style={{ fontFamily: bodyFont, fontSize: '11px', color: 'rgba(240,234,216,0.55)' }}>{isAr ? artwork.titleAr : artwork.title}</span>
        </div>
      </div>

      <section style={{ ...C.container, padding: 'clamp(32px,5vw,64px) clamp(20px,4vw,72px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(40px,6vw,96px)', alignItems: 'start' }}>

          {/* Image */}
          <FadeUp>
            <div style={{ position: 'sticky', top: '130px' }}>
              <div style={{
                aspectRatio: artwork.landscape ? '4/3' : '4/5', overflow: 'hidden', background: '#242018',
                boxShadow: isRare ? '0 0 0 1px rgba(196,163,85,0.2), 0 24px 64px rgba(0,0,0,0.4)' : '0 24px 64px rgba(0,0,0,0.3)',
                position: 'relative',
              }}>
                <img src={artwork.image} alt={isAr ? artwork.titleAr : artwork.title} style={{ width: '100%', height: '100%', objectFit: artwork.fit || 'cover' }} />
              </div>
              {/* See in a Room button */}
              <button onClick={() => setRoomOpen(true)} style={{
                marginTop: '12px',
                width: '100%',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                padding: '14px 20px',
                background: 'rgba(240,234,216,0.04)',
                border: '1px solid rgba(240,234,216,0.15)',
                color: 'rgba(240,234,216,0.75)',
                cursor: 'pointer',
                fontFamily: bodyFont,
                fontSize: '11px',
                letterSpacing: isAr ? 0 : '0.18em',
                textTransform: isAr ? 'none' : 'uppercase',
                fontWeight: 500,
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(196,163,85,0.5)'; e.currentTarget.style.color = '#c4a355'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(240,234,216,0.15)'; e.currentTarget.style.color = 'rgba(240,234,216,0.75)'; }}>
                <Icon.Eye />
                <span>{isAr ? 'شاهدها في الغرفة' : 'See in a Room'}</span>
              </button>
              {/* Edition progress */}
              <div style={{ marginTop: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontFamily: bodyFont, fontSize: '11px', color: 'rgba(240,234,216,0.55)' }}>
                    {artwork.editionsSold} {isAr ? 'مباعة' : 'sold'}
                  </span>
                  <span style={{ fontFamily: bodyFont, fontSize: '11px', color: remaining <= 2 ? '#c4a355' : 'rgba(240,234,216,0.55)' }}>
                    {isAr ? `${remaining} من ${artwork.editionSize} متبقية` : `${remaining} of ${artwork.editionSize} remaining`}
                  </span>
                </div>
                <div style={{ height: '2px', background: 'rgba(240,234,216,0.08)', borderRadius: '1px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${(artwork.editionsSold / artwork.editionSize) * 100}%`, background: isRare ? '#c4a355' : 'rgba(240,234,216,0.4)', transition: 'width 1s ease' }} />
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Details */}
          <FadeUp delay={0.15}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

              {/* Tier + artist + title */}
              <div>
                <TierBadge tier={artwork.tier} lang={lang} />
                <div style={{ height: '12px' }} />
                <button onClick={() => navigate('artist', { id: artwork.artistId })} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: bodyFont, fontSize: '11px', letterSpacing: isAr ? 0 : '0.16em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(196,163,85,0.8)', marginBottom: '12px', display: 'block' }}>
                  {artwork.artist}
                </button>
                <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px,4vw,56px)', fontWeight: 300, margin: '0 0 16px', lineHeight: 1.1 }}>
                  {isAr ? artwork.titleAr : artwork.title}
                </h1>
                {/* Edition availability badge */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', padding: '7px 14px', marginBottom: '18px', border: `1px solid ${(isRare || remaining <= 2) ? 'rgba(196,163,85,0.35)' : 'rgba(240,234,216,0.14)'}`, background: (isRare || remaining <= 2) ? 'rgba(196,163,85,0.06)' : 'rgba(240,234,216,0.02)' }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: (isRare || remaining <= 2) ? '#c4a355' : 'rgba(240,234,216,0.5)', flexShrink: 0 }} />
                  <span style={{ fontFamily: bodyFont, fontSize: '11px', letterSpacing: isAr ? 0 : '0.1em', textTransform: isAr ? 'none' : 'uppercase', color: (isRare || remaining <= 2) ? '#c4a355' : 'rgba(240,234,216,0.6)' }}>{availabilityLabel()}</span>
                </div>
                <p style={{ fontFamily: bodyFont, fontSize: '14px', color: 'rgba(240,234,216,0.5)', lineHeight: 1.85, margin: 0, fontWeight: 300 }}>
                  {isAr ? artwork.descriptionAr : artwork.description}
                </p>
              </div>

              <div style={{ height: '1px', background: 'rgba(240,234,216,0.08)' }} />

              {/* Edition info box */}
              <div style={{ padding: '20px 24px', background: isRare ? 'rgba(196,163,85,0.05)' : 'rgba(240,234,216,0.03)', border: `1px solid ${isRare ? 'rgba(196,163,85,0.2)' : 'rgba(240,234,216,0.07)'}`, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <p style={{ fontFamily: bodyFont, fontSize: '10px', letterSpacing: isAr ? 0 : '0.16em', textTransform: isAr ? 'none' : 'uppercase', color: isRare ? '#c4a355' : 'rgba(240,234,216,0.55)', margin: '0 0 4px' }}>
                  {isAr ? 'الإصدار' : 'Edition'}
                </p>
                {[
                  { label: isAr ? 'النوع' : 'Tier', val: isRare ? (isAr ? 'إصدار نادر' : 'Rare Edition') : (isAr ? 'إصدار قياسي' : 'Standard Edition') },
                  { label: isAr ? 'حجم الإصدار' : 'Edition size', val: isAr ? `${artwork.editionSize} نسخ لكل حجم` : `${artwork.editionSize} copies per size` },
                  { label: isAr ? 'الإصدار التالي (رقم الطبعة)' : 'Next print (edition no.)', val: isAr ? `رقم ${nextEdition}` : `No. ${nextEdition}` },
                  { label: isAr ? 'متبقية' : 'Remaining', val: isAr ? `${remaining} من ${artwork.editionSize}` : `${remaining} of ${artwork.editionSize}`, highlight: remaining <= 2 },
                  { label: isAr ? 'الوسيط' : 'Medium', val: isAr ? 'أحبار أرشيفية على هانيموله' : 'Archival pigment on Hahnemühle' },
                  { label: isAr ? 'الشهادة' : 'Certificate', val: isAr ? 'مرقمة وموقعة' : 'Numbered & signed' },
                ].map(row => (
                  <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
                    <span style={{ fontFamily: bodyFont, fontSize: '11px', color: 'rgba(240,234,216,0.55)' }}>{row.label}</span>
                    <span style={{ fontFamily: bodyFont, fontSize: '11px', color: row.highlight ? '#c4a355' : 'rgba(240,234,216,0.7)', textAlign: 'right' }}>{row.val}</span>
                  </div>
                ))}
              </div>

              <div style={{ height: '1px', background: 'rgba(240,234,216,0.08)' }} />

              {/* Size selector */}
              <div>
                <p style={{ fontFamily: bodyFont, fontSize: '10px', letterSpacing: isAr ? 0 : '0.18em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(240,234,216,0.55)', marginBottom: '14px' }}>
                  {isAr ? 'الحجم (سم)' : 'Size (cm)'}
                </p>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {['30×40', '50×70', '70×100'].map(s => (
                    <button key={s} onClick={() => setSize(s)} style={{ background: size === s ? `rgba(196,163,85,${isRare ? '0.18' : '0.1'})` : 'transparent', border: `1px solid ${size === s ? '#c4a355' : 'rgba(240,234,216,0.15)'}`, color: size === s ? '#c4a355' : 'rgba(240,234,216,0.55)', cursor: 'pointer', padding: '10px 20px', fontFamily: bodyFont, fontSize: '12px', transition: 'all 0.2s' }}>{s}</button>
                  ))}
                </div>
              </div>

              {/* Framing */}
              <div>
                <p style={{ fontFamily: bodyFont, fontSize: '10px', letterSpacing: isAr ? 0 : '0.18em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(240,234,216,0.55)', marginBottom: '14px' }}>
                  {isAr ? 'التأطير' : 'Framing'}
                </p>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {[{ label: isAr ? 'بدون إطار' : 'Unframed', val: false }, { label: isAr ? 'مع إطار' : 'Framed', val: true }].map(opt => (
                    <button key={opt.label} onClick={() => setFramed(opt.val)} style={{ background: framed === opt.val ? 'rgba(196,163,85,0.12)' : 'transparent', border: `1px solid ${framed === opt.val ? '#c4a355' : 'rgba(240,234,216,0.15)'}`, color: framed === opt.val ? '#c4a355' : 'rgba(240,234,216,0.55)', cursor: 'pointer', padding: '10px 20px', fontFamily: bodyFont, fontSize: '12px', transition: 'all 0.2s' }}>{opt.label}</button>
                  ))}
                </div>
                {framed && <p style={{ fontFamily: bodyFont, fontSize: '11px', color: 'rgba(240,234,216,0.5)', marginTop: '10px' }}>{isAr ? 'إطار صندوقي متحفي · بلوط طبيعي · زجاج واقٍ' : 'Museum box frame · natural oak · UV-protective glass'}</p>}
              </div>

              {/* Frame color */}
              <div>
                <p style={{ fontFamily: bodyFont, fontSize: '10px', letterSpacing: isAr ? 0 : '0.18em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(240,234,216,0.55)', marginBottom: '14px' }}>
                  {isAr ? 'لون الإطار' : 'Frame Colour'}
                </p>
                {framed ? (
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {[{ label: isAr ? 'أسود' : 'Black', val: 'black', swatch: '#1a1410' }, { label: isAr ? 'أبيض' : 'White', val: 'white', swatch: '#f0ead8' }].map(opt => (
                      <button key={opt.val} onClick={() => setFrameColor(opt.val)} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: frameColor === opt.val ? 'rgba(196,163,85,0.12)' : 'transparent', border: `1px solid ${frameColor === opt.val ? '#c4a355' : 'rgba(240,234,216,0.15)'}`, color: frameColor === opt.val ? '#c4a355' : 'rgba(240,234,216,0.55)', cursor: 'pointer', padding: '8px 16px 8px 12px', fontFamily: bodyFont, fontSize: '12px', transition: 'all 0.2s' }}>
                        <span style={{ width: 14, height: 14, background: opt.swatch, border: '1px solid rgba(240,234,216,0.2)', display: 'inline-block' }} />
                        {opt.label}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div style={{ display: 'inline-flex', alignItems: 'center', padding: '10px 20px', border: '1px dashed rgba(240,234,216,0.12)', color: 'rgba(240,234,216,0.3)', fontFamily: bodyFont, fontSize: '12px', letterSpacing: isAr ? 0 : '0.08em' }}>
                    {isAr ? 'غير متاح — لم يتم اختيار إطار' : 'N/A — no frame selected'}
                  </div>
                )}
              </div>

              {/* Price + tier-aware CTA */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '38px', fontWeight: 300 }}>{window.formatPrice(price, currency).primary}</span>
                  <span style={{ fontFamily: bodyFont, fontSize: '11px', color: 'rgba(240,234,216,0.5)' }}>{isAr ? 'شامل الضريبة' : 'inc. VAT'}</span>
                  {isRare && <span style={{ fontFamily: bodyFont, fontSize: '10px', color: 'rgba(196,163,85,0.6)', marginLeft: '4px' }}>◆</span>}
                </div>
                {window.formatPrice(price, currency).secondary && (
                  <p style={{ fontFamily: bodyFont, fontSize: '12px', color: 'rgba(240,234,216,0.5)', margin: 0 }}>{window.formatPrice(price, currency).secondary}</p>
                )}

                {routing === 'direct' ? (
                  <>
                    {/* Tier 1 — direct cart checkout */}
                    <button onClick={handleAddToCart} style={{ width: '100%', background: added ? 'rgba(196,163,85,0.15)' : '#c4a355', color: added ? '#c4a355' : '#1b1916', border: added ? '1px solid #c4a355' : 'none', cursor: 'pointer', padding: '16px', fontFamily: bodyFont, fontSize: '11px', letterSpacing: isAr ? 0 : '0.18em', textTransform: isAr ? 'none' : 'uppercase', fontWeight: 500, transition: 'all 0.3s' }}>
                      {added ? (isAr ? '✓ تمت الإضافة إلى السلة' : '✓ Added to Cart') : (isAr ? 'أضف إلى السلة' : 'Add to Cart')}
                    </button>
                    <p style={{ fontFamily: bodyFont, fontSize: '12px', color: 'rgba(240,234,216,0.4)', textAlign: 'center', margin: '2px 0 0', lineHeight: 1.7 }}>
                      {isAr ? 'تفكّر في عدة قطع أو تأطير مخصّص أو تودّ معرفة المزيد عن الفنان؟ ' : 'Considering multiple pieces, custom framing, or want to know more about the artist? '}
                      <a href={enquireHref} target="_blank" rel="noopener noreferrer" style={{ color: '#c4a355', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{isAr ? 'تحدّث مع أمين المجموعة' : 'Speak with a curator'}</a>
                    </p>
                  </>
                ) : (
                  <>
                    {/* Tier 2 — concierge-primary with cart fallback */}
                    <p style={{ fontFamily: bodyFont, fontSize: '12px', color: 'rgba(196,163,85,0.7)', margin: '0 0 2px', lineHeight: 1.65 }}>
                      {isRare
                        ? (isAr ? 'تُدار القطع النادرة عبر أمين المجموعة لضمان سلامة الإصدار والإجابة عن أي سؤال حول العمل.' : 'Rare Edition pieces are handled through our curator to ensure edition integrity and answer any questions about the work.')
                        : (isAr ? 'تُرتَّب القطع المؤطّرة مع أمين المجموعة لتأكيد خيارات التأطير والمواد والتوصيل الآمن.' : 'Framed pieces are arranged with our curator to confirm framing options, materials, and safe delivery.')}
                    </p>
                    <a href={reserveHref} target="_blank" rel="noopener noreferrer" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '16px', background: '#c4a355', color: '#1b1916', border: 'none', fontFamily: bodyFont, fontSize: '11px', letterSpacing: isAr ? 0 : '0.18em', textTransform: isAr ? 'none' : 'uppercase', textDecoration: 'none', fontWeight: 500 }}>
                      <Icon.WA /> {isAr ? 'احجز عبر أمين المجموعة' : 'Reserve Through Curator'}
                    </a>
                    <button onClick={handleAddToCart} style={{ width: '100%', background: 'transparent', color: added ? '#c4a355' : 'rgba(240,234,216,0.7)', border: `1px solid ${added ? '#c4a355' : 'rgba(240,234,216,0.22)'}`, cursor: 'pointer', padding: '15px', fontFamily: bodyFont, fontSize: '11px', letterSpacing: isAr ? 0 : '0.15em', textTransform: isAr ? 'none' : 'uppercase', fontWeight: 500, transition: 'all 0.3s' }}>
                      {added ? (isAr ? '✓ تمت الإضافة إلى السلة' : '✓ Added to Cart') : (isAr ? 'أضف إلى السلة' : 'Add to Cart')}
                    </button>
                  </>
                )}
              </div>

              {/* Photographer blurb */}
              {artistObj && (
                <>
                  <div style={{ height: '1px', background: 'rgba(240,234,216,0.08)' }} />
                  <div>
                    <p style={{ fontFamily: bodyFont, fontSize: '10px', letterSpacing: isAr ? 0 : '0.18em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(240,234,216,0.55)', margin: '0 0 12px' }}>{isAr ? 'المصوّر' : 'The Photographer'}</p>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 400, margin: '0 0 10px' }}>{artistObj.name}</p>
                    <p style={{ fontFamily: bodyFont, fontSize: '13px', color: 'rgba(240,234,216,0.58)', lineHeight: 1.8, margin: '0 0 14px', fontWeight: 300 }}>
                      {((isAr ? artistObj.bioAr : artistObj.bio) || '').split('. ').slice(0, 2).join('. ').replace(/\.?$/, '.')}
                    </p>
                    <button onClick={() => navigate('artist', { id: artwork.artistId })} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: bodyFont, fontSize: '11px', letterSpacing: isAr ? 0 : '0.12em', textTransform: isAr ? 'none' : 'uppercase', color: '#c4a355' }}>
                      {isAr ? 'الملف الكامل للفنان ←' : 'View full artist profile →'}
                    </button>
                  </div>
                </>
              )}

              {/* Print Details expandable */}
              <div style={{ borderTop: '1px solid rgba(240,234,216,0.08)' }}>
                <button onClick={() => setDetailsOpen(o => !o)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', padding: '18px 0', fontFamily: bodyFont, fontSize: '11px', letterSpacing: isAr ? 0 : '0.16em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(240,234,216,0.65)' }}>
                  <span>{isAr ? 'تفاصيل الطباعة' : 'Print Details'}</span>
                  <span style={{ fontSize: '16px', color: 'rgba(240,234,216,0.4)' }}>{detailsOpen ? '−' : '+'}</span>
                </button>
                {detailsOpen && (
                  <div style={{ paddingBottom: '10px', display: 'flex', flexDirection: 'column', gap: '13px' }}>
                    {[
                      { l: isAr ? 'الورق' : 'Paper', v: isAr ? 'ورق فني أرشيفي (هانيموله)' : 'Archival fine art paper (Hahnemühle)' },
                      { l: isAr ? 'الحافة' : 'Border', v: isAr ? 'حافة بيضاء ٣ سم على جميع الجوانب' : '3 cm white border on all sides' },
                      { l: isAr ? 'التوقيع' : 'Signature', v: isAr ? "نسخة من توقيع المصوّر" : "Photographer's signature reproduction" },
                      { l: isAr ? 'الشهادة' : 'Certificate', v: isAr ? 'شهادة أصالة مُرفقة' : 'Certificate of Authenticity included' },
                      { l: isAr ? 'التوصيل' : 'Delivery', v: framed ? (isAr ? 'صندوق مخصّص للقطع المؤطّرة' : 'Custom crate for framed pieces') : (isAr ? 'ملفوفة في أنبوب أرشيفي' : 'Rolled in an archival tube') },
                    ].map(row => (
                      <div key={row.l} style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
                        <span style={{ fontFamily: bodyFont, fontSize: '11px', color: 'rgba(240,234,216,0.55)' }}>{row.l}</span>
                        <span style={{ fontFamily: bodyFont, fontSize: '11px', color: 'rgba(240,234,216,0.7)', textAlign: 'right', maxWidth: '62%' }}>{row.v}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Related works */}
      {relatedWorks.length > 0 && (
        <section style={{ ...C.container, paddingBottom: 'clamp(72px,9vw,120px)' }}>
          <div style={{ height: '1px', background: 'rgba(240,234,216,0.07)', marginBottom: 'clamp(40px,5vw,64px)' }} />
          <FadeUp>
            <p style={{ fontFamily: isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif", fontSize: '10px', letterSpacing: isAr ? 0 : '0.22em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(240,234,216,0.5)', marginBottom: '32px' }}>
              {isAr ? `المزيد من أعمال ${artwork.artist}` : `More by ${artwork.artist}`}
            </p>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 'clamp(20px,3vw,40px)' }}>
            {relatedWorks.map((w, i) => <FadeUp key={w.id} delay={i * 0.1}><ProductCard artwork={w} onNavigate={navigate} lang={lang} currency={currency} /></FadeUp>)}
          </div>
        </section>
      )}
      {/* See in a Room modal */}
      {roomOpen && (
        <div onClick={() => setRoomOpen(false)} style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'rgba(10,9,7,0.92)',
          backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 'clamp(16px,4vw,48px)',
          animation: 'fadeIn 0.3s ease',
        }}>
          <style>{`@keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } } @keyframes roomIn { from { opacity: 0; transform: translateY(20px) } to { opacity: 1; transform: translateY(0) } }`}</style>

          {/* Close button */}
          <button onClick={() => setRoomOpen(false)} style={{
            position: 'absolute', top: 24, right: 24, zIndex: 5,
            background: 'rgba(240,234,216,0.08)', border: '1px solid rgba(240,234,216,0.15)',
            color: '#f0ead8', cursor: 'pointer',
            width: 44, height: 44, borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: bodyFont, fontSize: 18,
          }}>×</button>

          <div onClick={e => e.stopPropagation()} style={{
            width: '100%', maxWidth: 1100, animation: 'roomIn 0.5s cubic-bezier(0.25,0,0,1)',
          }}>
            {/* Room scene */}
            <div style={{
              position: 'relative',
              aspectRatio: '1575 / 998',
              width: '100%',
              overflow: 'hidden',
              background: '#fafaf7',
              boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
            }}>
              <img src={(window.__resources&&window.__resources.roomScene)||'src/assets/room-scene.png'} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />

              {/* Artwork on wall — anchored so its bottom sits at the typical hanging eye-level above sofa.
                  Sofa back ≈ y=62% in the source image; hang the artwork so its bottom is ~y=58%. */}
              <div style={{
                position: 'absolute',
                left: '46.5%',
                bottom: '42%',
                transform: 'translateX(-50%)',
                width: `${artW}%`,
                height: `${artH}%`,
                background: roomFramed ? (roomFrameColor === 'white' ? '#f0ead8' : '#221a13') : 'transparent',
                padding: roomFramed ? '1.2%' : 0,
                boxShadow: roomFramed
                  ? (roomFrameColor === 'white'
                    ? '0 6px 16px rgba(0,0,0,0.18), 0 2px 5px rgba(0,0,0,0.12), inset 0 0 0 1px rgba(0,0,0,0.08)'
                    : '0 6px 16px rgba(0,0,0,0.22), 0 2px 5px rgba(0,0,0,0.15), inset 0 0 0 1px rgba(255,240,200,0.08)')
                  : '0 6px 16px rgba(0,0,0,0.18), 0 2px 4px rgba(0,0,0,0.12)',
                transition: 'all 0.45s cubic-bezier(0.25,0,0,1)',
              }}>
                <div style={{ width: '100%', height: '100%', overflow: 'hidden', background: artwork.fit === 'contain' ? '#fff' : '#242018' }}>
                  <img src={artwork.image} alt="" style={{ width: '100%', height: '100%', objectFit: artwork.fit || 'cover' }} />
                </div>
              </div>
            </div>

            {/* Controls — size + framing */}
            <div style={{ marginTop: 24, display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center', alignItems: 'flex-start' }}>
              {/* Size */}
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: bodyFont, fontSize: 10, letterSpacing: isAr ? 0 : '0.22em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(240,234,216,0.4)', margin: '0 0 12px' }}>
                  {isAr ? 'الحجم (سم)' : 'Size (cm)'}
                </p>
                <div style={{ display: 'flex', gap: 8 }}>
                  {['30×40', '50×70', '70×100'].map(s => (
                    <button key={s} onClick={() => setRoomSize(s)} style={{
                      background: roomSize === s ? 'rgba(196,163,85,0.15)' : 'transparent',
                      border: `1px solid ${roomSize === s ? '#c4a355' : 'rgba(240,234,216,0.18)'}`,
                      color: roomSize === s ? '#c4a355' : 'rgba(240,234,216,0.6)',
                      cursor: 'pointer', padding: '10px 18px', fontFamily: bodyFont, fontSize: 12, transition: 'all 0.2s',
                    }}>{s}</button>
                  ))}
                </div>
              </div>
              {/* Framing */}
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: bodyFont, fontSize: 10, letterSpacing: isAr ? 0 : '0.22em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(240,234,216,0.4)', margin: '0 0 12px' }}>
                  {isAr ? 'التأطير' : 'Framing'}
                </p>
                <div style={{ display: 'flex', gap: 8 }}>
                  {[{ label: isAr ? 'بدون إطار' : 'Unframed', val: false }, { label: isAr ? 'مع إطار' : 'Framed', val: true }].map(opt => (
                    <button key={opt.label} onClick={() => setRoomFramed(opt.val)} style={{
                      background: roomFramed === opt.val ? 'rgba(196,163,85,0.15)' : 'transparent',
                      border: `1px solid ${roomFramed === opt.val ? '#c4a355' : 'rgba(240,234,216,0.18)'}`,
                      color: roomFramed === opt.val ? '#c4a355' : 'rgba(240,234,216,0.6)',
                      cursor: 'pointer', padding: '10px 18px', fontFamily: bodyFont, fontSize: 12, transition: 'all 0.2s',
                    }}>{opt.label}</button>
                  ))}
                </div>
              </div>
              {/* Frame color */}
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: bodyFont, fontSize: 10, letterSpacing: isAr ? 0 : '0.22em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(240,234,216,0.4)', margin: '0 0 12px' }}>
                  {isAr ? 'لون الإطار' : 'Frame Colour'}
                </p>
                {roomFramed ? (
                  <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
                    {[{ label: isAr ? 'أسود' : 'Black', val: 'black', swatch: '#1a1410' }, { label: isAr ? 'أبيض' : 'White', val: 'white', swatch: '#f0ead8' }].map(opt => (
                      <button key={opt.val} onClick={() => setRoomFrameColor(opt.val)} style={{
                        display: 'flex', alignItems: 'center', gap: 8,
                        background: roomFrameColor === opt.val ? 'rgba(196,163,85,0.15)' : 'transparent',
                        border: `1px solid ${roomFrameColor === opt.val ? '#c4a355' : 'rgba(240,234,216,0.18)'}`,
                        color: roomFrameColor === opt.val ? '#c4a355' : 'rgba(240,234,216,0.6)',
                        cursor: 'pointer', padding: '8px 14px 8px 10px', fontFamily: bodyFont, fontSize: 12, transition: 'all 0.2s',
                      }}>
                        <span style={{ width: 14, height: 14, background: opt.swatch, border: '1px solid rgba(240,234,216,0.2)', display: 'inline-block' }} />
                        {opt.label}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div style={{ display: 'inline-flex', alignItems: 'center', padding: '10px 18px', border: '1px dashed rgba(240,234,216,0.12)', color: 'rgba(240,234,216,0.3)', fontFamily: bodyFont, fontSize: 12 }}>
                    {isAr ? 'غير متاح' : 'N/A'}
                  </div>
                )}
              </div>
            </div>

            {/* Caption */}
            <div style={{ marginTop: 18, textAlign: 'center' }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 300, color: '#f0ead8', margin: '0 0 4px', fontStyle: 'italic' }}>
                {isAr ? artwork.titleAr : artwork.title}
              </p>
              <p style={{ fontFamily: bodyFont, fontSize: 10, letterSpacing: isAr ? 0 : '0.18em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(240,234,216,0.35)', margin: 0 }}>
                {isAr ? 'معاينة بالمقياس الحقيقي' : 'Shown to scale'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
Object.assign(window, { ArtworkDetailPage });
