
function CollectionPage({ navigate, tweaks = {}, lang = 'EN', params = {} }) {
  const t = (key, vars) => T(key, lang, vars);
  const isAr = lang === 'AR';
  const [filter, setFilter] = React.useState(params.filter || 'all');

  React.useEffect(() => { setFilter(params.filter || 'all'); }, [params.filter]);

  const rareWorks = window.ARTWORKS.filter(a => a.tier === 'rare');
  const stdWorks  = window.ARTWORKS.filter(a => a.tier === 'standard');

  const categories = ['all', 'rare', 'standard', 'landscape', 'architecture', 'portrait'];
  const catLabels = {
    'all':          isAr ? 'جميع الأعمال' : 'All Works',
    'rare':         isAr ? 'إصدار نادر' : 'Rare Edition',
    'standard':     isAr ? 'إصدار قياسي' : 'Standard Edition',
    'new-arrivals': isAr ? 'وصل حديثاً' : 'New Arrivals',
    'bestsellers':  isAr ? 'الأكثر مبيعاً' : 'Best Sellers',
    'landscape':    isAr ? 'مناظر طبيعية' : 'Landscape',
    'architecture': isAr ? 'عمارة' : 'Architecture',
    'portrait':     isAr ? 'بورتريه' : 'Portrait',
  };

  const newArrivalIds  = ['desert-silence', 'olive-grove-light', 'coastal-calm', 'cairo-dusk', 'nile-morning'];
  const bestsellerIds  = window.ARTWORKS.slice().sort((a,b) => b.editionsSold - a.editionsSold).slice(0,5).map(a => a.id);

  const filtered = filter === 'all'
    ? window.ARTWORKS
    : filter === 'rare'       ? rareWorks
    : filter === 'standard'   ? stdWorks
    : filter === 'new-arrivals' ? window.ARTWORKS.filter(a => newArrivalIds.includes(a.id))
    : filter === 'bestsellers'  ? window.ARTWORKS.filter(a => bestsellerIds.includes(a.id))
    : window.ARTWORKS.filter(a => a.category === filter);

  const showRareSection = filter === 'all';

  const C = { container: { maxWidth: '1360px', margin: '0 auto', padding: '0 clamp(20px,4vw,72px)' } };

  return (
    <div style={{ background: tweaks.bg || '#1b1916', color: '#f0ead8', paddingTop: '72px' }}>

      {/* Page header */}
      <div style={{ ...C.container, padding: 'clamp(48px,7vw,96px) clamp(20px,4vw,72px) clamp(24px,3vw,40px)' }}>
        <FadeUp>
          <p style={{ fontFamily: isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif", fontSize: '10px', letterSpacing: isAr ? 0 : '0.22em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(196,163,85,0.8)', marginBottom: '8px' }}>
            {window.COLLECTION_NAME}
          </p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(18px,2vw,24px)', color: 'rgba(240,234,216,0.55)', marginBottom: '16px' }}>
            {window.COLLECTION_SUBTITLE}
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px,5.5vw,72px)', fontWeight: 300, margin: '0 0 16px' }}>
            {isAr ? 'المجموعة' : 'The Collection'}
          </h1>
          <p style={{ fontFamily: isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif", fontSize: '14px', color: 'rgba(240,234,216,0.4)', maxWidth: '520px', lineHeight: 1.8, margin: 0, fontWeight: 300 }}>
            {isAr
              ? '١٠ أعمال. ٥ مصورين مصريين. إصدارات ثابتة — حين تنتهي، لن تُعاد.'
              : '10 works. 5 Egyptian photographers. Fixed editions — when they\'re gone, they\'re gone.'}
          </p>
        </FadeUp>
      </div>

      {/* Filter bar */}
      <div style={{ ...C.container, paddingBottom: 'clamp(24px,3vw,40px)' }}>
        <div style={{ display: 'flex', borderBottom: '1px solid rgba(240,234,216,0.08)', overflowX: 'auto', gap: 0 }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif",
              fontSize: '11px', letterSpacing: isAr ? 0 : '0.12em',
              textTransform: isAr ? 'none' : 'uppercase',
              color: filter === cat
                ? (cat === 'rare' ? '#c4a355' : '#f0ead8')
                : 'rgba(240,234,216,0.35)',
              padding: '12px 18px 14px',
              borderBottom: filter === cat
                ? `1px solid ${cat === 'rare' ? '#c4a355' : '#f0ead8'}`
                : '1px solid transparent',
              marginBottom: '-1px', whiteSpace: 'nowrap', transition: 'color 0.2s',
            }}>
              {cat === 'rare' && <span style={{ fontSize: '8px', marginRight: '5px' }}>◆</span>}
              {catLabels[cat]}
            </button>
          ))}
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', paddingRight: '4px', flexShrink: 0 }}>
            <span style={{ fontFamily: isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif", fontSize: '11px', color: 'rgba(240,234,216,0.2)' }}>
              {filtered.length} {isAr ? 'عمل' : 'works'}
            </span>
          </div>
        </div>
      </div>

      {/* ── RARE EDITIONS featured row (only on 'all' view) ── */}
      {showRareSection && (
        <div style={{ background: 'rgba(196,163,85,0.04)', borderTop: '1px solid rgba(196,163,85,0.12)', borderBottom: '1px solid rgba(196,163,85,0.12)', padding: 'clamp(40px,5vw,72px) 0', marginBottom: 'clamp(32px,4vw,56px)' }}>
          <div style={C.container}>
            <FadeUp>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: 'clamp(28px,3vw,48px)' }}>
                <span style={{ color: '#c4a355', fontSize: '10px' }}>◆◆</span>
                <p style={{ fontFamily: isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif", fontSize: '10px', letterSpacing: isAr ? 0 : '0.22em', textTransform: isAr ? 'none' : 'uppercase', color: '#c4a355', margin: 0 }}>
                  {isAr ? 'الإصدارات النادرة — إصدار ٥ نسخ فقط لكل حجم' : 'Rare Editions — 5 copies per size'}
                </p>
              </div>
            </FadeUp>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'clamp(24px,3vw,48px)' }}>
              {rareWorks.map((artwork, i) => (
                <FadeUp key={artwork.id} delay={i * 0.1}>
                  <ProductCard artwork={artwork} onNavigate={navigate} lang={lang} />
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main grid */}
      <div style={{ ...C.container, paddingBottom: 'clamp(72px,9vw,120px)' }}>
        {showRareSection && (
          <FadeUp>
            <p style={{ fontFamily: isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif", fontSize: '10px', letterSpacing: isAr ? 0 : '0.22em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(240,234,216,0.3)', marginBottom: 'clamp(24px,3vw,40px)' }}>
              {isAr ? 'الإصدار القياسي — ١٠ نسخ لكل حجم' : 'Standard Edition — 10 copies per size'}
            </p>
          </FadeUp>
        )}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 'clamp(24px,3vw,48px)' }}>
          {(showRareSection ? stdWorks : filtered).map((artwork, i) => (
            <FadeUp key={artwork.id} delay={Math.min(i * 0.06, 0.3)}>
              <ProductCard artwork={artwork} onNavigate={navigate} lang={lang} />
            </FadeUp>
          ))}
        </div>
      </div>

      {/* About editions CTA */}
      <div style={{ background: '#131210', borderTop: '1px solid rgba(240,234,216,0.07)', padding: 'clamp(48px,7vw,80px) 0', textAlign: 'center' }}>
        <FadeUp>
          <p style={{ fontFamily: isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif", fontSize: '10px', letterSpacing: isAr ? 0 : '0.22em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(196,163,85,0.8)', marginBottom: '20px' }}>
            {isAr ? 'سياسة الإصدارات' : 'Edition Policy'}
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px,3vw,36px)', fontWeight: 300, margin: '0 0 16px' }}>
            {isAr ? 'الندرة حقيقية، لا تسويقية.' : 'Scarcity is real, not marketed.'}
          </h2>
          <p style={{ fontFamily: isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif", fontSize: '13px', color: 'rgba(240,234,216,0.4)', margin: '0 auto 32px', lineHeight: 1.8, maxWidth: '480px', fontWeight: 300 }}>
            {isAr
              ? 'حين يُباع آخر إصدار من أي عمل، لن يُطبع مرة أخرى. أبداً.'
              : 'When the last copy of any work sells, it will never be printed again. Ever.'}
          </p>
          <button onClick={() => navigate('editions')} style={{ background: 'transparent', color: '#c4a355', border: '1px solid rgba(196,163,85,0.4)', cursor: 'pointer', padding: '12px 32px', fontFamily: isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif", fontSize: '11px', letterSpacing: isAr ? 0 : '0.15em', textTransform: isAr ? 'none' : 'uppercase' }}>
            {isAr ? 'سياستنا الكاملة' : 'Our Edition Policy'}
          </button>
        </FadeUp>
      </div>
    </div>
  );
}
Object.assign(window, { CollectionPage });
