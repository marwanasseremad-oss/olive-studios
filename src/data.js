
// Collection 01: مصر اتصّورت بعيون ناسها
// Two tiers: 'standard' (edition of 10) | 'rare' (edition of 5, +20% pricing)

const STD_PRICES    = { '30×40': 1950, '50×70': 3900, '70×100': 5900 };
const STD_FRAMED    = { '30×40': 3200, '50×70': 5400, '70×100': 8500 };
const RARE_PRICES   = { '30×40': 2340, '50×70': 4680, '70×100': 7080 };
const RARE_FRAMED   = { '30×40': 3840, '50×70': 6480, '70×100': 10200 };

window.COLLECTION_NAME    = 'Collection 01';
window.COLLECTION_SUBTITLE = 'مصر اتصّورت بعيون ناسها';

window.ARTWORKS = [
  // ── MENNA HOSSAM (Collection 01 — featured artist) ─────────────
  {
    id: 'hera',
    tier: 'rare',
    title: 'Hera', titleAr: 'هيرا',
    artist: 'Menna Hossam', artistId: 'menna-hossam',
    image: (window.__resources&&window.__resources.mennaHera||'src/assets/menna-hera.jpg'),
    description: 'A staged invocation of the queen of the gods. Costume, light, and animal companion compose a single image that feels less photographed than remembered — myth made physical.',
    descriptionAr: 'استدعاء مسرحي لملكة الآلهة. تتآلف الأزياء والضوء والرفيق الحيواني في صورة واحدة لا تبدو ملتقطة بقدر ما تبدو متذكَّرة — أسطورة تتجسد.',
    editionSize: 5, editionsSold: 0, category: 'portrait', featured: true, number: 'OE-001',
    landscape: true, fit: 'contain',
    prices: RARE_PRICES, framedPrices: RARE_FRAMED,
  },
  {
    id: 'swan-maiden',
    tier: 'standard',
    title: 'Swan Maiden', titleAr: 'فتاة البجع',
    artist: 'Menna Hossam', artistId: 'menna-hossam',
    image: (window.__resources&&window.__resources.mennaSwan||'src/assets/menna-swan-maiden.jpg'),
    description: 'Drawn from folklore that crosses every culture — the woman who is also a swan. Hossam stages the story as a portrait, the bird neither prop nor pet but the maiden\'s second self.',
    descriptionAr: 'مستوحاة من حكاية شعبية تتكرر في كل الثقافات — المرأة التي هي أيضاً بجعة. تخرج هوسام القصة كصورة شخصية، حيث الطائر ليس أداةً ولا أليفاً بل النصف الآخر للفتاة.',
    editionSize: 10, editionsSold: 1, category: 'portrait', featured: true, number: 'OE-002',
    fit: 'contain',
    prices: STD_PRICES, framedPrices: STD_FRAMED,
  },
  {
    id: 'le-renard-et-lenfant',
    tier: 'standard',
    title: "Le Renard et l'Enfant", titleAr: 'الثعلب والطفلة',
    artist: 'Menna Hossam', artistId: 'menna-hossam',
    image: (window.__resources&&window.__resources.mennaRenard||'src/assets/menna-le-renard.jpg'),
    description: 'A fox, a child, a quiet pact between them. Hossam draws on the French fable tradition to compose a scene that is intimate, theatrical, and a little uncanny — the natural world meeting the imagined one.',
    descriptionAr: 'ثعلب، وطفلة، وميثاق صامت بينهما. تستلهم هوسام تقليد الحكاية الفرنسية لتؤلف مشهداً حميمياً ومسرحياً وغرائبياً قليلاً — حيث يلتقي العالم الطبيعي بالعالم المتخيَّل.',
    editionSize: 10, editionsSold: 0, category: 'portrait', featured: true, number: 'OE-003',
    fit: 'contain',
    prices: STD_PRICES, framedPrices: STD_FRAMED,
  },

  // ── RARE EDITIONS ──────────────────────────────────────────────
  {
    id: 'geometry-of-faith',
    tier: 'rare',
    title: 'Geometry of Faith', titleAr: 'هندسة الإيمان',
    artist: 'Karim Hassan', artistId: 'karim-hassan',
    image: (window.__resources&&window.__resources.artwork3||'src/assets/artwork-3.jpg'),
    description: 'An ornate doorway in Islamic Cairo, where geometry becomes devotion. The soft light reveals centuries of craftsmanship in carved stone.',
    descriptionAr: 'مدخل مزخرف في القاهرة الإسلامية، حيث تصبح الهندسة عبادة. يكشف الضوء الناعم قروناً من الحرفية في الحجر المنحوت.',
    editionSize: 5, editionsSold: 2, category: 'architecture', featured: true, number: 'OE-004',
    prices: RARE_PRICES, framedPrices: RARE_FRAMED,
  },
  {
    id: 'desert-curve-i',
    tier: 'rare',
    title: 'Desert Curve I', titleAr: 'منحنى الصحراء I',
    artist: 'Omar Farouk', artistId: 'omar-farouk',
    image: (window.__resources&&window.__resources.artwork1||'src/assets/artwork-1.jpg'),
    description: 'Light traces the spine of a dune in the Western Desert. A meditation on form and emptiness, captured in the hour before dawn.',
    descriptionAr: 'يتتبع الضوء عمود الكثيب في الصحراء الغربية. تأمل في الشكل والفراغ، ملتقط في الساعة قبل الفجر.',
    editionSize: 5, editionsSold: 1, category: 'landscape', featured: true, number: 'OE-001',
    prices: RARE_PRICES, framedPrices: RARE_FRAMED,
  },

  // ── STANDARD EDITIONS (8) ──────────────────────────────────────
  {
    id: 'mediterranean-stillness',
    tier: 'standard',
    title: 'Mediterranean Stillness', titleAr: 'سكون البحر المتوسط',
    artist: 'Layla Mansour', artistId: 'layla-mansour',
    image: (window.__resources&&window.__resources.artwork2||'src/assets/artwork-2.jpg'),
    description: 'A solitary boat rests on calm waters as morning light paints the sea in soft olive tones. The essence of Mediterranean tranquility.',
    descriptionAr: 'قارب وحيد يرتاح على مياه هادئة بينما يرسم ضوء الصباح البحر بدرجات الزيتون الناعمة. جوهر هدوء البحر المتوسط.',
    editionSize: 10, editionsSold: 4, category: 'landscape', featured: true, number: 'OE-002',
    prices: STD_PRICES, framedPrices: STD_FRAMED,
  },
  {
    id: 'columns-of-time',
    tier: 'standard',
    title: 'Columns of Time', titleAr: 'أعمدة الزمن',
    artist: 'Karim Hassan', artistId: 'karim-hassan',
    image: (window.__resources&&window.__resources.artwork4||'src/assets/artwork-4.jpg'),
    description: 'Ancient columns at Karnak catch the warm light of afternoon. A study in the endurance of stone and the passage of millennia.',
    descriptionAr: 'أعمدة الكرنك القديمة تلتقط ضوء فترة ما بعد الظهيرة الدافئ. دراسة في صمود الحجر ومرور الآلاف من السنين.',
    editionSize: 10, editionsSold: 3, category: 'architecture', featured: true, number: 'OE-004',
    prices: STD_PRICES, framedPrices: STD_FRAMED,
  },
  {
    id: 'shadow-geometry',
    tier: 'standard',
    title: 'Shadow Geometry', titleAr: 'هندسة الظلال',
    artist: 'Karim Hassan', artistId: 'karim-hassan',
    image: (window.__resources&&window.__resources.artwork5||'src/assets/artwork-5.jpg'),
    description: 'Afternoon light creates bold geometric shadows on a Cairo facade. Minimalist architecture meets the drama of Mediterranean sun.',
    descriptionAr: 'ضوء فترة ما بعد الظهيرة يخلق ظلالاً هندسية جريئة على واجهة قاهرية. العمارة البسيطة تلتقي بدراما شمس البحر المتوسط.',
    editionSize: 10, editionsSold: 6, category: 'architecture', featured: true, number: 'OE-005',
    prices: STD_PRICES, framedPrices: STD_FRAMED,
  },
  {
    id: 'coastal-calm',
    tier: 'standard',
    title: 'Coastal Calm', titleAr: 'هدوء الساحل',
    artist: 'Nadia El-Sayed', artistId: 'nadia-el-sayed',
    image: (window.__resources&&window.__resources.artwork6||'src/assets/artwork-6.jpg'),
    description: 'Soft waves meet the shore in quiet rhythm. The muted palette of sea and stone speaks to the timeless calm of coastal Egypt.',
    descriptionAr: 'موجات ناعمة تلتقي الشاطئ في إيقاع هادئ. لوحة ألوان البحر والحجر الخافتة تتحدث عن الهدوء الخالد لساحل مصر.',
    editionSize: 10, editionsSold: 2, category: 'landscape', featured: false, number: 'OE-006',
    prices: STD_PRICES, framedPrices: STD_FRAMED,
  },
  {
    id: 'olive-grove-light',
    tier: 'standard',
    title: 'Olive Grove Light', titleAr: 'ضوء بستان الزيتون',
    artist: 'Layla Mansour', artistId: 'layla-mansour',
    image: (window.__resources&&window.__resources.artwork7||'src/assets/artwork-7.jpg'),
    description: 'Morning sun filters through ancient olive trees. A portrait of the Mediterranean landscape that has nourished civilizations.',
    descriptionAr: 'شمس الصباح تتسلل عبر أشجار الزيتون القديمة. صورة للمشهد المتوسطي الذي غذى الحضارات.',
    editionSize: 10, editionsSold: 3, category: 'landscape', featured: true, number: 'OE-007',
    prices: STD_PRICES, framedPrices: STD_FRAMED,
  },
  {
    id: 'desert-silence',
    tier: 'standard',
    title: 'Desert Silence', titleAr: 'صمت الصحراء',
    artist: 'Omar Farouk', artistId: 'omar-farouk',
    image: (window.__resources&&window.__resources.artwork8||'src/assets/artwork-8.jpg'),
    description: 'The vast quiet of the Siwa oasis at dusk. Palm silhouettes against a sky of muted gold, where time seems suspended.',
    descriptionAr: 'الهدوء الشاسع لواحة سيوة عند الغسق. صور ظلية للنخيل على سماء من الذهب الخافت، حيث يبدو الزمن معلقاً.',
    editionSize: 10, editionsSold: 4, category: 'landscape', featured: true, number: 'OE-008',
    prices: STD_PRICES, framedPrices: STD_FRAMED,
  },
  {
    id: 'cairo-dusk',
    tier: 'standard',
    title: 'Cairo at Dusk', titleAr: 'القاهرة عند الغسق',
    artist: 'Karim Hassan', artistId: 'karim-hassan',
    image: (window.__resources&&window.__resources.artwork4||'src/assets/artwork-4.jpg'),
    description: "The city exhales as afternoon gold turns to rose. A rooftop study of Cairo's layered skyline, from minarets to concrete, all softened by the hour.",
    descriptionAr: 'المدينة تتنفس حين يتحول ذهب العصر إلى وردي. دراسة من فوق أسطح القاهرة لخطها السماوي المتراكب، من مآذن إلى خرسانة، كلها لطّفتها الساعة.',
    editionSize: 10, editionsSold: 1, category: 'landscape', featured: true, number: 'OE-009',
    prices: STD_PRICES, framedPrices: STD_FRAMED,
  },
  {
    id: 'nile-morning',
    tier: 'standard',
    title: 'Nile Morning', titleAr: 'صباح النيل',
    artist: 'Nadia El-Sayed', artistId: 'nadia-el-sayed',
    image: (window.__resources&&window.__resources.artwork6||'src/assets/artwork-6.jpg'),
    description: "First light on the river before Cairo wakes. The Nile at stillness — a silver surface, a felucca's silhouette, the hush before the city begins.",
    descriptionAr: 'أول ضوء على النهر قبل أن تستيقظ القاهرة. النيل في سكينته — سطح فضي، ظل فلوكة، صمت قبل أن تبدأ المدينة.',
    editionSize: 10, editionsSold: 2, category: 'landscape', featured: false, number: 'OE-010',
    prices: STD_PRICES, framedPrices: STD_FRAMED,
  },
];

window.ARTISTS = [
  {
    id: 'menna-hossam', name: 'Menna Hossam',
    location: 'Cairo, Egypt', locationAr: 'القاهرة، مصر',
    bio: "Cairo-based fine art and fashion photographer whose work moves between fairytale and editorial, building elaborate visual worlds where mythology, costume, and the natural world collide. A Canon Africa Ambassador, Hossam published her first photo book, Enchanted, alongside a solo exhibition at Photopia Cairo, presenting a body of work that has come to define her signature aesthetic: imagined, theatrical, deeply staged, and yet quietly intimate. Her three images in Collection 01 — Swan Maiden, Hera, and Le Renard et l'Enfant — each carry a sense of myth made physical, where the subject and her animal companion appear less like model and prop than like figures from a story passed down. Hossam's contribution brings a register of fine art photography to Collection 01 that no other Egyptian platform is currently presenting in print form.",
    bioAr: 'مصوّرة فنية ومصوّرة أزياء مقيمة في القاهرة، يتحرّك عملها بين الحكاية الخرافية والإيديتوريال، ويبني عوالم بصرية مفصّلة تتشابك فيها الأسطورة والأزياء والطبيعة. سفيرة لـ Canon أفريقيا، أصدرت هوسام كتابها المصوّر الأول Enchanted بالتزامن مع معرضها الفردي في Photopia القاهرة، مقدّمةً مجموعة عمل صارت تُعرّف جماليتها المميَّزة: متخيَّلة، مسرحية، مدروسة المشهد، وحميمية في الوقت ذاته. أعمالها الثلاثة في المجموعة ٠١ — فتاة البجع، وهيرا، والثعلب والطفلة — تحمل كلها إحساس الأسطورة المتجسّدة، حيث يبدو الموضوع ورفيقه الحيواني أقرب إلى شخصيات في حكاية متوارثة منهما إلى عارضة وأداة. مساهمة هوسام تُدخل إلى المجموعة ٠١ سجلاً من التصوير الفني لا تقدّمه أي منصة مصرية أخرى في صورة مطبوعة حالياً.',
    artworkIds: ['hera', 'swan-maiden', 'le-renard-et-lenfant'],
  },
  {
    id: 'karim-hassan', name: 'Karim Hassan',
    location: 'Cairo, Egypt', locationAr: 'القاهرة، مصر',
    bio: 'Cairo-born photographer whose work explores the interplay of light and geometry in Islamic architecture. His minimalist approach distills centuries of craftsmanship into contemplative visual meditations.',
    bioAr: 'مصور من مواليد القاهرة تستكشف أعماله التفاعل بين الضوء والهندسة في العمارة الإسلامية. نهجه البسيط يختزل قروناً من الحرفية في تأملات بصرية عميقة.',
    artworkIds: ['geometry-of-faith', 'columns-of-time', 'shadow-geometry', 'cairo-dusk'],
  },
  {
    id: 'layla-mansour', name: 'Layla Mansour',
    location: 'Alexandria, Egypt', locationAr: 'الإسكندرية، مصر',
    bio: 'Documentary photographer capturing the quiet dignity of everyday Mediterranean life. Her work has been exhibited at the Venice Biennale and acquired by private collections across the Gulf.',
    bioAr: 'مصورة وثائقية تلتقط الكرامة الهادئة للحياة المتوسطية اليومية. عُرضت أعمالها في بينالي البندقية واقتنتها مجموعات خاصة في الخليج.',
    artworkIds: ['mediterranean-stillness', 'olive-grove-light'],
  },
  {
    id: 'omar-farouk', name: 'Omar Farouk',
    location: 'Siwa, Egypt', locationAr: 'سيوة، مصر',
    bio: 'Landscape photographer known for his ethereal desert studies. His large-format work reveals the sculptural beauty of Egypt\'s Western Desert through patient observation.',
    bioAr: 'مصور مناظر طبيعية معروف بدراساته الصحراوية الأثيرية. تكشف أعماله كبيرة التنسيق عن الجمال النحتي للصحراء الغربية المصرية من خلال المراقبة الصبورة.',
    artworkIds: ['desert-curve-i', 'desert-silence'],
  },
  {
    id: 'nadia-el-sayed', name: 'Nadia El-Sayed',
    location: 'El Gouna, Egypt', locationAr: 'الجونة، مصر',
    bio: 'Coastal photographer documenting the light and calm of the Mediterranean shores. Her work combines scientific precision with an artist\'s eye for color and composition.',
    bioAr: 'مصورة ساحلية توثق الضوء والهدوء على شواطئ البحر المتوسط. تجمع أعمالها بين الدقة العلمية وعين الفنان للون والتكوين.',
    artworkIds: ['coastal-calm', 'nile-morning'],
  },
];
