
function Header({ navigate, cartCount, onCartOpen, lang, setLang }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  const [openDropdown, setOpenDropdown] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const lastY = React.useRef(0);
  const closeTimer = React.useRef(null);

  const openDrop = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };
  const closeDrop = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 220);
  };

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y < 60) { setVisible(true); }
      else if (Math.abs(y - lastY.current) > 8) { setVisible(y < lastY.current); }
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isAr = lang === 'AR';

  const navItems = [
    {
      label: isAr ? 'المجموعة' : 'Collection',
      sections: [
        { title: isAr ? 'الإصدارات' : 'Editions', links: [
          { label: isAr ? '◆ إصدار نادر' : '◆ Rare Edition', page: 'collection', params: { filter: 'rare' } },
          { label: isAr ? 'إصدار قياسي' : 'Standard Edition', page: 'collection', params: { filter: 'standard' } },
        ]},
        { title: isAr ? 'المميزة' : 'Featured', links: [
          { label: isAr ? 'جميع الأعمال' : 'All Works', page: 'collection' },
          { label: isAr ? 'وصل حديثاً' : 'New Arrivals', page: 'collection' },
          { label: isAr ? 'الأكثر مبيعاً' : 'Best Sellers', page: 'collection' },
        ]},
        { title: isAr ? 'المواضيع' : 'Themes', links: [
          { label: isAr ? 'العمارة' : 'Architecture', page: 'collection' },
          { label: isAr ? 'المناظر الطبيعية' : 'Landscape', page: 'collection' },
          { label: isAr ? 'البورتريه' : 'Portrait', page: 'collection' },
        ]},
      ],
    },
    {
      label: isAr ? 'الفنانون' : 'Artists',
      sections: [
        { title: isAr ? 'مصورونا' : 'Our Photographers', links: [
          { label: 'Karim Hassan', page: 'artist', params: { id: 'karim-hassan' } },
          { label: 'Layla Mansour', page: 'artist', params: { id: 'layla-mansour' } },
          { label: 'Omar Farouk', page: 'artist', params: { id: 'omar-farouk' } },
          { label: 'Nadia El-Sayed', page: 'artist', params: { id: 'nadia-el-sayed' } },
          { label: isAr ? 'عرض الكل ←' : 'All Artists →', page: 'artists' },
        ]},
        { title: isAr ? 'اختيار المحرر' : "Editor's Choice", links: [
          { label: isAr ? 'هندسة الظلال' : 'Shadow Geometry', page: 'artwork', params: { id: 'shadow-geometry' } },
          { label: isAr ? 'ضوء بستان الزيتون' : 'Olive Grove Light', page: 'artwork', params: { id: 'olive-grove-light' } },
          { label: isAr ? 'أعمدة الزمن' : 'Columns of Time', page: 'artwork', params: { id: 'columns-of-time' } },
        ]},
      ],
    },
    {
      label: isAr ? 'من نحن' : 'About',
      sections: [
        { title: isAr ? 'الاستوديو' : 'Olive Studios', links: [
          { label: isAr ? 'قصتنا' : 'Our Story', page: 'about' },
          { label: isAr ? 'سياسة الخصوصية' : 'Privacy Policy', page: 'privacy' },
          { label: isAr ? 'الشروط والأحكام' : 'Terms & Conditions', page: 'terms' },
        ]},
      ],
    },
    {
      label: isAr ? 'اكتشف' : 'Discover',
      sections: [
        { title: isAr ? 'الاستوديو' : 'The Studio', links: [
          { label: isAr ? 'نجم الشهر' : 'Star of the Month', page: 'star-of-month' },
          { label: isAr ? 'من الكواليس' : 'Behind the Scenes', page: 'behind-scenes' },
          { label: isAr ? 'أدلّة' : 'Guides', page: 'guides' },
        ]},
        { title: isAr ? 'الخدمات' : 'Services', links: [
          { label: isAr ? 'طلبات مخصصة' : 'Bespoke Inquiries', page: 'bespoke' },
          { label: isAr ? 'الشركات' : 'Corporate', page: 'corporate' },
          { label: isAr ? 'دائرة الجامعين' : "Collector's Circle", page: 'collectors' },
        ]},
        { title: isAr ? 'اعرف المزيد' : 'Learn More', links: [
          { label: isAr ? 'سياسة الإصدارات' : 'Edition Policy', page: 'editions' },
          { label: isAr ? 'جودة الطباعة' : 'Print Quality', page: 'printquality' },
          { label: isAr ? 'الأسئلة الشائعة' : 'FAQs', page: 'faq' },
          { label: isAr ? 'تواصل معنا' : 'Contact', page: 'contact' },
        ]},
      ],
    },
  ];

  const scrolled_bg = scrolled ? 'rgba(27,25,21,0.97)' : 'transparent';
  const scrolled_border = scrolled ? 'rgba(240,234,216,0.08)' : 'transparent';

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled_bg,
        borderBottom: `1px solid ${scrolled_border}`,
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.4s cubic-bezier(0.25,0,0,1), background 0.4s ease',
      }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 clamp(20px,4vw,72px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px', position: 'relative' }}>

            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', zIndex: 1 }}
              onClick={() => { navigate('home'); setMobileOpen(false); }}>
              <img src={window.__resources&&window.__resources.oliveLogo||'src/assets/olive-logo.png'} alt="Olive Studios" style={{ height: '64px', width: 'auto' }} />
              <span style={{
                fontFamily: "'Jost', sans-serif", fontSize: '17px', letterSpacing: '0.08em',
                color: '#f0ead8', fontWeight: 400,
              }}>Olive Studios</span>
            </div>

            {/* Desktop Nav */}
            <nav style={{
              position: 'absolute', left: '50%', transform: 'translateX(-50%)',
              display: 'flex', alignItems: 'center', gap: '36px',
            }} className="desktop-nav">
              {navItems.map(item => (
                <div key={item.label} style={{ position: 'relative' }}
                  onMouseEnter={() => item.sections ? openDrop(item.label) : null}
                  onMouseLeave={() => item.sections ? closeDrop() : null}>
                  <button
                    onClick={() => { if (item.page) navigate(item.page); }}
                    className="nav-link"
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      fontFamily: "'Jost', sans-serif", fontSize: '12px',
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: openDropdown === item.label ? '#f0ead8' : 'rgba(240,234,216,0.65)',
                      transition: 'color 0.25s', padding: '4px 0',
                      display: 'flex', alignItems: 'center', gap: '4px',
                      position: 'relative',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#f0ead8'}
                    onMouseLeave={e => { if (openDropdown !== item.label) e.currentTarget.style.color = 'rgba(240,234,216,0.65)'; }}
                  >
                    {item.label}
                    {item.sections && <span style={{ fontSize: '8px', opacity: 0.5 }}>▾</span>}
                  </button>
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              {/* Language toggle */}
              <button onClick={() => setLang(l => l === 'EN' ? 'AR' : 'EN')} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: "'Jost', sans-serif", fontSize: '11px',
                letterSpacing: '0.12em', color: 'rgba(240,234,216,0.55)',
                padding: '4px 2px', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#f0ead8'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(240,234,216,0.55)'}>
                {lang === 'EN' ? 'AR' : 'EN'}
              </button>

              {/* Cart */}
              <button onClick={onCartOpen} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'rgba(240,234,216,0.7)', position: 'relative', padding: '4px',
                display: 'flex', alignItems: 'center',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
                {cartCount > 0 && (
                  <span style={{
                    position: 'absolute', top: '-2px', right: '-4px',
                    width: '16px', height: '16px', borderRadius: '50%',
                    background: '#c4a355', color: '#1b1916',
                    fontFamily: "'Jost', sans-serif", fontSize: '9px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>{cartCount}</span>
                )}
              </button>

              {/* Mobile menu */}
              <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(240,234,216,0.7)', padding: '4px' }}>
                {mobileOpen
                  ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
                }
              </button>
            </div>
          </div>
        </div>

        {/* Dropdown mega menu */}
        {openDropdown && navItems.find(n => n.label === openDropdown)?.sections && (
          <div
            onMouseEnter={() => openDrop(openDropdown)}
            onMouseLeave={() => closeDrop()}
            style={{
              background: 'rgba(15,13,10,0.1)',
              backdropFilter: 'blur(48px) saturate(200%)',
              WebkitBackdropFilter: 'blur(48px) saturate(200%)',
              borderTop: '1px solid rgba(240,234,216,0.06)',
              borderBottom: '1px solid rgba(240,234,216,0.06)',
              padding: '36px 0',
            }}>
            <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 clamp(20px,4vw,72px)', display: 'flex', gap: '64px', justifyContent: 'center' }}>
              {navItems.find(n => n.label === openDropdown).sections.map(sec => (
                <div key={sec.title} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,234,216,0.3)', margin: 0 }}>{sec.title}</p>
                  {sec.links.map(link => (
                    <button key={link.label}
                      onClick={() => { navigate(link.page, link.params); setOpenDropdown(null); }}
                      style={{
                        background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                        fontFamily: "'Jost', sans-serif", fontSize: '13px',
                        color: 'rgba(240,234,216,0.6)', letterSpacing: '0.03em',
                        transition: 'color 0.2s', padding: 0,
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = '#f0ead8'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(240,234,216,0.6)'}
                    >{link.label}</button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{
            background: 'rgba(20,18,15,0.99)', backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(240,234,216,0.08)',
            padding: '32px clamp(20px,5vw,40px) 40px',
            display: 'flex', flexDirection: 'column', gap: '28px',
          }}>
            {navItems.map(item => (
              <div key={item.label}>
                <button onClick={() => { item.page && navigate(item.page); if (!item.sections) setMobileOpen(false); }}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', fontWeight: 300, color: '#f0ead8', letterSpacing: '0.03em', padding: 0 }}>
                  {item.label}
                </button>
                {item.sections && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 24px', marginTop: '12px', paddingLeft: '4px' }}>
                    {item.sections.flatMap(s => s.links).map(link => (
                      <button key={link.label + (link.params?.id || '')}
                        onClick={() => { navigate(link.page, link.params); setMobileOpen(false); }}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: '12px', color: 'rgba(240,234,216,0.5)', letterSpacing: '0.05em', padding: 0 }}>
                        {link.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </header>
    </>
  );
}

Object.assign(window, { Header });
