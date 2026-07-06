
function TierBadge({ tier, lang = 'EN', size = 'normal' }) {
  const isRare = tier === 'rare';
  const isAr = lang === 'AR';
  const label = isRare
    ? (isAr ? 'إصدار نادر' : 'Rare Edition')
    : (isAr ? 'إصدار قياسي' : 'Standard Edition');

  return (
    <span className={isRare ? 'pc-tier-rare' : 'pc-tier-std'} style={{
      display: 'inline-flex', alignItems: 'center', gap: '5px',
      fontFamily: isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif",
      fontSize: size === 'small' ? '9px' : '10px',
      letterSpacing: isAr ? 0 : '0.14em',
      textTransform: isAr ? 'none' : 'uppercase',
      color: isRare ? '#c4a355' : 'rgba(240,234,216,0.62)',
      background: isRare ? 'rgba(196,163,85,0.1)' : 'transparent',
      border: isRare ? '1px solid rgba(196,163,85,0.3)' : '1px solid rgba(240,234,216,0.12)',
      padding: size === 'small' ? '2px 7px' : '3px 9px',
    }}>
      {isRare && <span style={{ fontSize: '8px' }}>◆</span>}
      {label}
    </span>
  );
}

function ProductCard({ artwork, onNavigate, lang = 'EN', currency = 'EGP', featured: featuredOverride = false }) {
  const t = (key, vars) => T(key, lang, vars);
  const isAr = lang === 'AR';
  const [hovered, setHovered] = React.useState(false);
  const isRare = artwork.tier === 'rare';
  const remaining = artwork.editionSize - artwork.editionsSold;
  const scarce = remaining <= 2;
  const price = window.formatPrice(artwork.prices['30×40'], currency);

  return (
    <div
      style={{
        cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '14px',
        // Rare pieces get a subtle gold left-border glow on hover
      }}
      onClick={() => onNavigate('artwork', { id: artwork.id })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        position: 'relative', overflow: 'hidden',
        aspectRatio: artwork.aspectRatio || (artwork.landscape ? '4/3' : (isRare ? '3/4' : '4/5')),
        background: artwork.fit === 'contain' ? '#fff' : '#242018',
        boxShadow: isRare && hovered ? '0 0 0 1px rgba(196,163,85,0.35)' : 'none',
        transition: 'box-shadow 0.4s ease',
      }}>
        <img
          src={artwork.image} alt={isAr ? artwork.titleAr : artwork.title}
          style={{ width: '100%', height: '100%', objectFit: artwork.fit || 'cover', display: 'block', transition: 'transform 0.7s cubic-bezier(0.25,0,0,1)', transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
        />
        {/* Hover overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(28,26,22,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: hovered ? 1 : 0, transition: 'opacity 0.4s ease' }}>
          <span style={{ fontFamily: isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif", fontSize: '11px', letterSpacing: isAr ? 0 : '0.18em', textTransform: isAr ? 'none' : 'uppercase', color: '#f0ead8', borderBottom: '1px solid rgba(240,234,216,0.5)', paddingBottom: '3px' }}>
            {t('artwork.viewEdition')}
          </span>
        </div>
        {/* Edition badge top-left — one consistent convention: "3 of 5 remaining" */}
        <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(28,26,22,0.85)', backdropFilter: 'blur(6px)', padding: '4px 10px', fontFamily: isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif", fontSize: '10px', letterSpacing: isAr ? 0 : '0.08em', color: scarce ? '#c4a355' : 'rgba(240,234,216,0.68)' }}>
          {window.editionLabel(artwork, lang)}
        </div>
        {/* Rare corner accent */}
        {isRare && (
          <div style={{ position: 'absolute', top: 0, right: 0, width: 0, height: 0, borderStyle: 'solid', borderWidth: '0 36px 36px 0', borderColor: `transparent rgba(196,163,85,0.7) transparent transparent` }}>
            <span style={{ position: 'absolute', top: '4px', right: '-30px', color: '#1b1916', fontSize: '9px' }}>◆</span>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <TierBadge tier={artwork.tier} lang={lang} size="small" />
        <p className="pc-artist" style={{ fontFamily: isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif", fontSize: '10px', letterSpacing: isAr ? 0 : '0.14em', textTransform: isAr ? 'none' : 'uppercase', color: 'rgba(240,234,216,0.62)', margin: 0 }}>{artwork.artist}</p>
        <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '20px', fontWeight: 400, color: '#f0ead8', margin: 0, lineHeight: 1.2 }}>{isAr ? artwork.titleAr : artwork.title}</h3>
        <p className="pc-price" style={{ fontFamily: isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif", fontSize: '12px', color: 'rgba(240,234,216,0.62)', margin: 0, display: 'flex', alignItems: 'baseline', gap: '6px', flexWrap: 'wrap' }}>
          <span>{isAr ? 'من' : 'From'} {price.primary}</span>
          {price.secondary && <span style={{ fontSize: '10.5px', opacity: 0.75 }}>{price.secondary}</span>}
        </p>
      </div>
    </div>
  );
}

Object.assign(window, { ProductCard, TierBadge });
