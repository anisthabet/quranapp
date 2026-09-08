import { DhikrCategory, DhikrItem } from '../types';

export const ADHKAR_CATEGORIES: DhikrCategory[] = [
  {
    id: 'morning',
    name_ar: 'أذكار الصباح',
    name_en: 'Morning Adhkar',
    translations: {
      ar: 'أذكار الصباح',
      en: 'Morning Adhkar',
      fr: 'Invocations du Matin',
      ur: 'صبح کے اذکار',
      id: 'Dzikir Pagi',
      tr: 'Sabah Zikirleri'
    },
    icon: 'Sun',
    color: 'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30'
  },
  {
    id: 'evening',
    name_ar: 'أذكار المساء',
    name_en: 'Evening Adhkar',
    translations: {
      ar: 'أذكار المساء',
      en: 'Evening Adhkar',
      fr: 'Invocations du Soir',
      ur: 'شام کے اذکار',
      id: 'Dzikir Petang',
      tr: 'Akşam Zikirleri'
    },
    icon: 'Moon',
    color: 'from-indigo-500/20 to-purple-500/20 text-indigo-400 border-indigo-500/30'
  },
  {
    id: 'after_prayer',
    name_ar: 'أذكار بعد الصلاة',
    name_en: 'After Prayer',
    translations: {
      ar: 'أذكار بعد الصلاة',
      en: 'After Prayer Adhkar',
      fr: 'Après la Prière',
      ur: 'نماز کے بعد کے اذکار',
      id: 'Dzikir Setelah Shalat',
      tr: 'Namaz Sonrası Zikirler'
    },
    icon: 'Compass',
    color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30'
  },
  {
    id: 'sleep',
    name_ar: 'أذكار النوم والاستيقاظ',
    name_en: 'Sleep & Waking',
    translations: {
      ar: 'أذكار النوم والاستيقاظ',
      en: 'Sleep & Waking',
      fr: 'Sommeil & Réveil',
      ur: 'سونے اور جاگنے کے اذکار',
      id: 'Dzikir Tidur & Bangun',
      tr: 'Uyku ve Uyanma'
    },
    icon: 'CloudMoon',
    color: 'from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30'
  },
  {
    id: 'quranic_duas',
    name_ar: 'أدعية قرآنية',
    name_en: 'Quranic Duas',
    translations: {
      ar: 'أدعية قرآنية',
      en: 'Quranic Duas',
      fr: 'Douas du Coran',
      ur: 'قرآنی دعائیں',
      id: 'Doa Al-Quran',
      tr: 'Kurani Dualar'
    },
    icon: 'BookOpen',
    color: 'from-emerald-500/20 to-green-500/20 text-emerald-300 border-emerald-500/30'
  },
  {
    id: 'prophetic_duas',
    name_ar: 'أدعية نبوية مأثورة',
    name_en: 'Prophetic Duas',
    translations: {
      ar: 'أدعية نبوية مأثورة',
      en: 'Prophetic Duas',
      fr: 'Invocations Prophétiques',
      ur: 'نبوی دعائیں',
      id: 'Doa Nabawi',
      tr: 'Nebevi Dualar'
    },
    icon: 'HeartHandshake',
    color: 'from-rose-500/20 to-pink-500/20 text-rose-400 border-rose-500/30'
  }
];

export const ADHKAR_ITEMS: DhikrItem[] = [
  // Morning Adhkar
  {
    id: 'm1',
    categoryId: 'morning',
    title_ar: 'سيد الاستغفار',
    title_en: 'The Master Supplication for Forgiveness',
    text_ar: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.',
    transliteration: "Allahumma anta Rabbi la ilaha illa Anta, khalaqtani wa ana 'abduka, wa ana 'ala 'ahdika wa wa'dika mastata'tu, a'udhu bika min sharri ma sana'tu, abu'u laka bini'matika 'alayya, wa abu'u bidhanbi faghfir li fa innahu la yaghfiru adh-dhunuba illa Ant.",
    translations: {
      ar: 'من قالها موقنا بها حين يصبح فمات من يومه دخل الجنة، ومن قالها موقنا بها حين يمسي فمات من ليلته دخل الجنة.',
      en: 'O Allah, You are my Lord, there is no god but You. You have created me and I am Your slave, and I am on Your covenant and promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge Your blessings upon me and I acknowledge my sin, so forgive me, for none forgives sins except You.',
      fr: 'Ô Allah, Tu es mon Seigneur, il n\'y a de divinité que Toi. Tu m\'as créé et je suis Ton serviteur. Je me conforme à Ton pacte et à Ta promesse autant que je le peux. Je cherche refuge auprès de Toi contre le mal que j\'ai commis. Je reconnais Tes bienfaits sur moi et je reconnais mes péchés. Pardonne-moi donc, car nul ne pardonne les péchés si ce n\'est Toi.',
      ur: 'اے اللہ! تو میرا رب ہے، تیرے سوا کوئی معبود نہیں۔ تو نے مجھے پیدا کیا اور میں تیرا بندہ ہوں اور اپنی بساط کے مطابق تیرے عہد اور وعدے پر قائم ہوں۔ اپنے اعمال کے شر سے تیری پناہ مانگتا ہوں، اپنی نعمتوں کا اقرار کرتا ہوں اور اپنے گناہوں کا اعتراف کرتا ہوں، پس مجھے بخش دے کیونکہ تیرے سوا کوئی گناہوں کو نہیں بخش سکتا۔',
      id: 'Ya Allah, Engkaulah Tuhanku, tiada tuhan selain Engkau. Engkau menciptakanku dan aku hamba-Mu, dan aku berpegang teguh pada janji-Mu semampuku. Aku berlindung dari keburukan yang telah kuperbuat. Aku mengakui nikmat-Mu atasku dan mengakui dosaku, maka ampunilah aku, sesungguhnya tiada yang mengampuni dosa selain Engkau.',
      tr: 'Allah\'ım! Sen benim Rabbimsin, Senden başka ilah yoktur. Beni Sen yarattın ve ben Senin kulunum. Gücüm yettiğince Sana verdiğim söz ve ahid üzerindeyim. Yaptıklarımın şerrinden Sana sığınırım. Üzerimdeki nimetini itiraf eder, günahımı kabul ederim; beni bağışla, çünkü günahları Senden başkası bağışlayamaz.'
    },
    virtue: {
      ar: 'من قالها موقناً بها حين يصبح فمات من يومه دخل الجنة (رواه البخاري).',
      en: 'Whoever says it with firm faith in the morning and dies that day will enter Paradise (Sahih Al-Bukhari).',
      fr: 'Quiconque la récite avec conviction le matin et meurt ce jour entrera au Paradis (Al-Bukhari).',
      ur: 'جو شخص یقین کے ساتھ صبح کہے اور اسی دن فوت ہو جائے تو جنتی ہے (بخاری)۔',
      id: 'Barangsiapa membacanya dengan yakin di pagi hari lalu wafat pada hari itu, niscaya masuk Surga (HR. Bukhari).',
      tr: 'Kim sabahleyin inanarak okur ve o gün vefat ederse cennetlik olur (Buhari).'
    },
    targetCount: 1,
    source: 'صحيح البخاري'
  },
  {
    id: 'm2',
    categoryId: 'morning',
    title_ar: 'الاستعاذة والحماية الشاملة',
    title_en: 'Seeking Divine Protection Against All Harm',
    text_ar: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.',
    transliteration: "Bismillahilladhi la yadurru ma'as-mihi shay'un fil-ardi wa la fis-sama'i wa Huwas-Sami'ul-'Alim.",
    translations: {
      ar: 'في اسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم.',
      en: 'In the name of Allah, with whose name nothing on earth or in heaven can cause harm, and He is the All-Hearing, the All-Knowing.',
      fr: 'Au nom d\'Allah, tel qu\'en compagnie de Son Nom rien sur terre ni dans le ciel ne peut nuire, et Il est l\'Audient, l\'Omniscient.',
      ur: 'اللہ کے نام کے ساتھ جس کے نام کی برکت سے زمین اور آسمان کی کوئی چیز نقصان نہیں پہنچا سکتی اور وہی خوب سننے والا اور جاننے والا ہے۔',
      id: 'Dengan nama Allah yang bersama nama-Nya tiada sesuatu pun di bumi dan di langit yang dapat mencelakai, dan Dia Maha Mendengar lagi Maha Mengetahui.',
      tr: 'İsmiyle yerde ve gökte hiçbir şeyin zarar veremeyeceği Allah\'ın adıyla. O hakkıyla işiten ve hakkıyla bilendir.'
    },
    virtue: {
      ar: 'من قالها ثلاثاً إذا أصبح وثلاثاً إذا أمسى لم يضره شيء.',
      en: 'Whoever says it three times in the morning and three times in the evening, nothing will harm him (Abu Dawud & Tirmidhi).',
      fr: 'Récité trois fois matin et soir, rien ne pourra nuire à celui qui le prononce.',
      ur: 'جو صبح اور شام تین مرتبہ پڑھے، اسے کوئی چیز نقصان نہیں پہنچا سکے گی۔',
      id: 'Dibaca tiga kali di waktu pagi dan petang, tiada bahaya yang dapat mencelakainya.',
      tr: 'Sabah akşam üçer kez okuyan kimseye hiçbir şey zarar vermez.'
    },
    targetCount: 3,
    source: 'سنن أبي داود والترمذي'
  },
  {
    id: 'm3',
    categoryId: 'morning',
    title_ar: 'الرضا بالله والإسلام ومحمد ﷺ',
    title_en: 'Contentment with Allah, Islam, and the Prophet',
    text_ar: 'رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا.',
    transliteration: "Raditu billahi Rabban, wa bil-Islami dinan, wa bi-Muhammadin sallallahu 'alayhi wa sallama nabiyya.",
    translations: {
      ar: 'رضيت بالله رباً وبدين الإسلام ديناً وبمحمد نبياً ورسولاً.',
      en: 'I am pleased with Allah as my Lord, with Islam as my religion, and with Muhammad (peace and blessings be upon him) as my Prophet.',
      fr: 'Je suis pleinement satisfait d\'Allah comme Seigneur, de l\'Islam comme religion, et de Muhammad (paix et bénédictions sur lui) comme Prophète.',
      ur: 'میں اللہ کے رب ہونے، اسلام کے دین ہونے اور محمد ﷺ کے نبی ہونے پر راضی ہوا۔',
      id: 'Aku rela Allah sebagai Tuhanku, Islam sebagai agamaku, dan Muhammad shallallahu \'alaihi wa sallam sebagai Nabiku.',
      tr: 'Rab olarak Allah\'tan, din olarak İslam\'dan ve nebi olarak Muhammed sallallahu aleyhi ve sellem\'den razı oldum.'
    },
    virtue: {
      ar: 'كان حقاً على الله أن يرضيه يوم القيامة.',
      en: 'Allah has promised to please the one who says this on the Day of Resurrection.',
      fr: 'Allah a promis de rendre satisfait le serviteur au Jour Dernier.',
      ur: 'قیامت کے دن اللہ پر حق ہوگا کہ وہ اسے راضی فرمائے۔',
      id: 'Pantas bagi Allah untuk meridhai orang yang mengucapkannya pada hari kiamat.',
      tr: 'Kıyamet gününde Allah\'ın onu hoşnut kılması bir hak olur.'
    },
    targetCount: 3,
    source: 'مسند أحمد وأبو داود'
  },
  {
    id: 'm4',
    categoryId: 'morning',
    title_ar: 'التوكل على الحي القيوم',
    title_en: 'Supplication of the Ever-Living, All-Sustaining',
    text_ar: 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.',
    transliteration: "Ya Hayyu ya Qayyumu birahmatika astaghith, aslih li sha'ni kullahu, wa la takilni ila nafsi tarfata 'ayn.",
    translations: {
      ar: 'يا حي يا قيوم برحمتك أستغيث، أصلح لي شأني كله ولا تكلني إلى نفسي طرفة عين.',
      en: 'O Ever-Living, O Sustainer of all existence, by Your mercy I seek assistance. Rectify for me all of my affairs, and do not leave me to myself even for the blink of an eye.',
      fr: 'Ô Vivant, Ô Subsistant par Toi-même, par Ta miséricorde j\'appelle au secours. Rectifie pour moi toutes mes affaires et ne m\'abandonne pas à moi-même ne serait-ce que le clin d\'œil.',
      ur: 'اے زندہ اور سب کو قائم رکھنے والے! میں تیری ہی رحمت سے فریاد کرتا ہوں۔ میرے تمام حالات درست فرما دے اور پلک جھپکنے کے برابر بھی مجھے میرے نفس کے سپرد نہ کر۔',
      id: 'Wahai Yang Maha Hidup, wahai Yang Maha Berdiri Sendiri, dengan rahmat-Mu aku memohon pertolongan. Perbaikilah seluruh urusanku dan jangan serahkan aku kepada diriku sendiri sekejap mata pun.',
      tr: 'Ey Hayy ve Kayyum olan! Rahmetinle yardım dilerim. Bütün işlerimi düzelt ve beni göz açıp kapayıncaya kadar bile nefsime bırakma.'
    },
    virtue: {
      ar: 'دعاء جامع لصلاح الدين والدنيا والآخرة.',
      en: 'Comprehensive supplication for peace of mind, divine assistance, and rectification of life.',
      fr: 'Invocation universelle pour la sérénité et le succès dans cette vie et l\'au-delà.',
      ur: 'دین و دنیا کے تمام معاملات کی اصلاح کے لیے جامع دعا۔',
      id: 'Doa agung untuk memohon pertolongan dan bimbingan Allah dalam setiap detik.',
      tr: 'Dünya ve ahiret işlerinin salahı için çok faziletli nebevi dua.'
    },
    targetCount: 1,
    source: 'رواه النسائي والحاكم'
  },

  // Evening Adhkar
  {
    id: 'e1',
    categoryId: 'evening',
    title_ar: 'أمسينا وأمسى الملك لله',
    title_en: 'We have reached the evening and the kingdom belongs to Allah',
    text_ar: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا.',
    transliteration: "Amsayna wa amsal-mulku lillahi, walhamdu lillahi, la ilaha illallahu wahdahu la sharika lahu, lahul-mulku wa lahul-hamdu wa Huwa 'ala kulli shay'in Qadir. Rabbi as'aluka khayra ma fi hadhihil-laylati wa khayra ma ba'daha, wa a'udhu bika min sharri ma fi hadhihil-laylati wa sharri ma ba'daha.",
    translations: {
      ar: 'ذكر المساء والتوكل على الله وسؤال خير الليلة والتعوذ من شرها.',
      en: 'We have entered the evening and to Allah belongs all sovereignty, and all praise is for Allah. None has the right to be worshipped except Allah alone, without partner. To Him belongs all sovereignty and praise and He has power over all things. My Lord, I ask You for the good of this night and the good that follows it, and I seek refuge in You from the evil of this night and the evil that follows it.',
      fr: 'Nous sommes au soir et la royauté appartient à Allah, louange à Allah. Point de divinité en dehors d\'Allah Seul, sans associé. À Lui la royauté et la louange, et Il est Puissant sur toute chose. Mon Seigneur, je Te demande le bien de cette nuit et le bien qui lui succède.',
      ur: 'ہم نے شام کی اور شام کے وقت سارا ملک اللہ ہی کے لیے ہے، اور سب تعریفیں اللہ کے لیے ہیں۔ اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں۔ اے میرے رب! میں تجھ سے اس رات کی اور اس کے بعد کی بھلائی مانگتا ہوں اور اس کے شر سے تیری پناہ چاہتا ہوں۔',
      id: 'Kami memasuki petang dan kerajaan milik Allah, segala puji bagi Allah. Tiada tuhan selain Allah yang Maha Esa tiada sekutu bagi-Nya. Ya Tuhanku, aku memohon kepada-Mu kebaikan malam ini dan kebaikan setelahnya, dan aku berlindung dari keburukan malam ini dan keburukan setelahnya.',
      tr: 'Akşama erdik, mülk de Allah\'a ait olarak akşama erdi. Hamd Allah\'a mahsustur. Allah\'tan başka ilah yoktur, O tektir, ortağı yoktur. Rabbim, bu gecenin ve sonrasının hayrını Senden diler, şerrinden Sana sığınırım.'
    },
    targetCount: 1,
    source: 'صحيح مسلم'
  },
  {
    id: 'e2',
    categoryId: 'evening',
    title_ar: 'الاستعاذة بكلمات الله التامات',
    title_en: 'Seeking Refuge in the Perfect Words of Allah',
    text_ar: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.',
    transliteration: "A'udhu bikalimatil-lahit-tammati min sharri ma khalaq.",
    translations: {
      ar: 'أعوذ بكلمات الله التامات من شر ما خلق.',
      en: 'I seek refuge in the perfect words of Allah from the evil of what He has created.',
      fr: 'Je cherche protection auprès des paroles parfaites d\'Allah contre le mal de ce qu\'Il a créé.',
      ur: 'میں اللہ کے کامل کلمات کی پناہ لیتا ہوں اس کی پیدا کردہ مخلوق کے شر سے۔',
      id: 'Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari kejahatan makhluk yang Dia ciptakan.',
      tr: 'Yarattıklarının şerrinden Allah\'ın tastamam kelimelerine sığınırım.'
    },
    virtue: {
      ar: 'من قالها لم يضره سم ولا دابة ولا شيء حتى يصبح.',
      en: 'Whoever recites it in the evening will not be harmed by any poison or pest until the morning (Sahih Muslim).',
      fr: 'Quiconque la dit le soir est protégé de toute piqûre ou nuisance jusqu\'au matin.',
      ur: 'جو شام کو کہے گا، صبح تک اسے کوئی زہریلی چیز نقصان نہیں پہنچائے گی۔',
      id: 'Barangsiapa membacanya di petang hari, racun dan gigitan binatang berbisa tidak akan membahayakannya.',
      tr: 'Akşam okuyana sabaha kadar hiçbir haşere veya zarar dokunmaz.'
    },
    targetCount: 3,
    source: 'صحيح مسلم'
  },

  // After Prayer
  {
    id: 'p1',
    categoryId: 'after_prayer',
    title_ar: 'الاستغفار والسلام',
    title_en: 'Seeking Forgiveness and Divine Peace',
    text_ar: 'أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ. اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ ذَا الْجَلَالِ وَالْإِكْرَامِ.',
    transliteration: "Astaghfirullah, Astaghfirullah, Astaghfirullah. Allahumma Antas-Salamu wa minkas-salam, tabarakta dhal-jalali wal-ikram.",
    translations: {
      ar: 'استغفار الله ثلاثاً، والاعتراف بأن الله هو السلام ومنه السلام.',
      en: 'I ask Allah for forgiveness (3 times). O Allah, You are Peace and from You comes peace. Blessed are You, O Possessor of majesty and honor.',
      fr: 'Je demande pardon à Allah (3 fois). Ô Allah, Tu es la Paix et de Toi provient la paix. Béni sois-Tu, Ô Possesseur de majesté et de noblesse.',
      ur: 'میں اللہ سے بخشش طلب کرتا ہوں (تین بار)۔ اے اللہ! تو ہی سلامتی والا ہے اور تجھی سے سلامتی ملتی ہے، تو بابرکت ہے اے جلال اور عزت والے۔',
      id: 'Aku memohon ampun kepada Allah (3x). Ya Allah, Engkaulah As-Salam (Yang Maha Menyelamatkan) dan dari-Mulah keselamatan, Maha Berkah Engkau wahai Pemilik keagungan dan kemuliaan.',
      tr: 'Allah\'tan bağışlanma dilerim (3 defa). Allah\'ım, Selam Sensin, selamet de Sendendir. Ey celal ve ikram sahibi, Sen ne yücesin.'
    },
    targetCount: 1,
    source: 'صحيح مسلم'
  },
  {
    id: 'p2',
    categoryId: 'after_prayer',
    title_ar: 'التسبيح والتحميد والتكبير عقب الصلاة',
    title_en: 'Tasbih, Tahmid, and Takbir after Obligatory Prayer',
    text_ar: 'سُبْحَانَ اللَّهِ (٣٣)، الْحَمْدُ لِلَّهِ (٣٣)، اللَّهُ أَكْبَرُ (٣٣)، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.',
    transliteration: "Subhanallah (33x), Alhamdulillah (33x), Allahu Akbar (33x), La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa Huwa 'ala kulli shay'in Qadir.",
    translations: {
      ar: 'تسبيح الله 33 وتحميده 33 وتكبيره 33 والختم بالتهليل لغفران الخطايا وإن كانت مثل زبد البحر.',
      en: 'Glory be to Allah (33x), Praise be to Allah (33x), Allah is the Greatest (33x), and completing with: None has the right to be worshipped except Allah alone, without partner; to Him belongs sovereignty and praise and He has power over all things.',
      fr: 'Gloire à Allah (33x), Louange à Allah (33x), Allah est le Plus Grand (33x), complété par l\'Unicité d\'Allah. Ses péchés seront pardonnés fussent-ils comme l\'écume de la mer.',
      ur: 'سبحان اللہ (33 بار)، الحمد للہ (33 بار)، اللہ اکبر (33 بار) اور سو کے عدد پر لا الہ الا اللہ... اس کے گناہ معاف کر دیے جاتے ہیں چاہے سمندر کے جھاگ کے برابر ہوں۔',
      id: 'Maha Suci Allah (33x), Segala puji bagi Allah (33x), Allah Maha Besar (33x), dan disempurnakan dengan kalimat tauhid. Diampuni dosa-dosanya meskipun sebanyak buih di lautan.',
      tr: '33 defa Subhanallah, 33 defa Elhamdulillah, 33 defa Allahu Ekber ve sonrasında Tevhid cümlesi. Günahları deniz köpüğü kadar da olsa affolunur.'
    },
    virtue: {
      ar: 'غُفِرَتْ خَطَايَاهُ وَإِنْ كَانَتْ مِثْلَ زَبَدِ الْبَحْرِ (رواه مسلم).',
      en: 'His sins will be forgiven even if they are like the foam of the sea (Sahih Muslim).',
      fr: 'Ses péchés sont pardonnés même s\'ils étaient abondants comme l\'écume de la mer.',
      ur: 'اس کے تمام گناہ معاف کر دیے جاتے ہیں اگرچہ سمندر کے جھاگ جتنے ہوں (مسلم)۔',
      id: 'Diampuni kesalahan-kesalahannya kendati sebanyak buih di lautan (HR. Muslim).',
      tr: 'Günahları denizlerin köpükleri kadar da olsa bağışlanır (Müslim).'
    },
    targetCount: 33,
    source: 'صحيح مسلم'
  },
  {
    id: 'p3',
    categoryId: 'after_prayer',
    title_ar: 'آية الكرسي دبر كل صلاة',
    title_en: 'Ayat Al-Kursi after Every Obligatory Prayer',
    text_ar: 'اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ.',
    transliteration: "Allahu la ilaha illa Huwal-Hayyul-Qayyum. La ta'khudhuhu sinatuw-wa la nawm. Lahu ma fis-samawati wa ma fil-ard...",
    translations: {
      ar: 'أعظم آية في كتاب الله تعالى، من قرأها دبر كل صلاة مكتوبة لم يمنعه من دخول الجنة إلا أن يموت.',
      en: 'Allah - there is no deity except Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth...',
      fr: 'Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même "Al-Qayyum". Ni somnolence ni sommeil ne Le saisissent...',
      ur: 'اللہ وہ ہے جس کے سوا کوئی معبود نہیں، وہ ہمیشہ زندہ اور قائم رکھنے والا ہے، نہ اسے اونگھ آتی ہے نہ نیند...',
      id: 'Allah, tidak ada tuhan selain Dia. Yang Maha Hidup, Yang terus-menerus mengurus (makhluk-Nya), tidak mengantuk dan tidak tidur...',
      tr: 'Allah, O\'ndan başka ilah olmayandır; Hayy\'dır, Kayyum\'dur. Kendisine ne uyuklama gelir ne de uyku...'
    },
    virtue: {
      ar: 'من قرأها دبر كل صلاة مكتوبة لم يمنعه من دخول الجنة إلا أن يموت (رواه النسائي وصححه الألباني).',
      en: 'Whoever recites it after every prescribed prayer, nothing will prevent him from entering Paradise except death.',
      fr: 'Celui qui la récite après chaque prière obligatoire, rien ne l\'empêche d\'entrer au Paradis si ce n\'est la mort.',
      ur: 'جس نے ہر فرض نماز کے بعد آیت الکرسی پڑھی، اسے جنت میں جانے سے موت کے سوا کوئی چیز نہیں روک سکتی۔',
      id: 'Barangsiapa membacanya di setiap selesai shalat fardhu, tidak ada yang menghalanginya masuk surga selain kematian.',
      tr: 'Her farz namazın ardından Ayetü\'l-Kürsi okuyan kimsenin cennete girmesine ancak ölüm engeldir.'
    },
    targetCount: 1,
    source: 'سنن النسائي الكبرى'
  },

  // Sleep Adhkar
  {
    id: 's1',
    categoryId: 'sleep',
    title_ar: 'دعاء النوم باسمك اللهم أموت وأحيا',
    title_en: 'In Your name O Allah I die and live',
    text_ar: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.',
    transliteration: "Bismika Allahumma amutu wa ahya.",
    translations: {
      ar: 'باسمك ربي أضع جنبي وبك أرفعه.',
      en: 'In Your name, O Allah, I die and I live.',
      fr: 'En Ton nom, Ô Allah, je meurs et je vis.',
      ur: 'اے اللہ! تیرے نام کے ساتھ ہی میں مرتا اور جیتا ہوں۔',
      id: 'Dengan nama-Mu ya Allah, aku mati dan aku hidup.',
      tr: 'Senin isminle Allah\'ım, ölür ve dirilirim.'
    },
    targetCount: 1,
    source: 'صحيح البخاري'
  },
  {
    id: 's2',
    categoryId: 'sleep',
    title_ar: 'دعاء الاستيقاظ من النوم',
    title_en: 'Upon Waking from Sleep',
    text_ar: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ.',
    transliteration: "Alhamdu lillahilladhi ahyana ba'da ma amatana wa ilayhin-nushur.",
    translations: {
      ar: 'الحمد لله الذي رد إلينا أرواحنا وعافانا في أجسادنا وأذن لنا بذكره.',
      en: 'All praise is due to Allah Who gave us life after having caused us to die, and to Him is the ultimate resurrection.',
      fr: 'Louange à Allah qui nous a rendu la vie après nous avoir fait mourir, et vers Lui est le retour.',
      ur: 'تمام تعریفیں اللہ کے لیے ہیں جس نے ہمیں مارنے کے بعد زندہ کیا اور اسی کی طرف لوٹ کر جانا ہے۔',
      id: 'Segala puji bagi Allah yang menghidupkan kami kembali setelah mematikan kami, dan kepada-Nya kami dibangkitkan.',
      tr: 'Bizi öldürdükten sonra dirilten Allah\'a hamdolsun. Dönüş de ancak O\'nadır.'
    },
    targetCount: 1,
    source: 'صحيح البخاري ومسلم'
  },

  // Quranic Duas
  {
    id: 'q1',
    categoryId: 'quranic_duas',
    title_ar: 'دعاء خيري الدنيا والآخرة',
    title_en: 'Supplication for Good in This World and the Hereafter',
    text_ar: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ.',
    transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar.",
    translations: {
      ar: 'طلب العافية والخير كله في الدارين والوقاية من النار (سورة البقرة: 201).',
      en: 'Our Lord, give us in this world that which is good and in the Hereafter that which is good and protect us from the punishment of the Fire. [Al-Baqarah: 201]',
      fr: 'Seigneur ! Accorde-nous belle part ici-bas, et belle part aussi dans l\'au-delà ; et protège-nous du châtiment du Feu ! [Al-Baqarah: 201]',
      ur: 'اے ہمارے رب! ہمیں دنیا میں بھی بھلائی عطا فرما اور آخرت میں بھی بھلائی عطا فرما اور ہمیں دوزخ کے عذاب سے بچا۔ [البقرۃ: 201]',
      id: 'Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat dan peliharalah kami dari siksa neraka. [QS. Al-Baqarah: 201]',
      tr: 'Ey Rabbimiz! Bize dünyada da iyilik ver, ahirette de iyilik ver ve bizi ateş azabından koru. [Bakara: 201]'
    },
    targetCount: 3,
    source: 'سورة البقرة (201)'
  },
  {
    id: 'q2',
    categoryId: 'quranic_duas',
    title_ar: 'دعاء الثبات وهداية القلب',
    title_en: 'Supplication for Steadfastness and Divine Mercy',
    text_ar: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ الْوَهَّابُ.',
    transliteration: "Rabbana la tuzigh qulubana ba'da idh hadaytana wa hab lana min ladunka rahmah, innaka Antal-Wahhab.",
    translations: {
      ar: 'طلب الثبات على الإيمان والهداية بعد الاستقامة (سورة آل عمران: 8).',
      en: 'Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower. [Ali \'Imran: 8]',
      fr: 'Seigneur ! Ne laisse pas dévier nos cœurs après que Tu nous as guidés ; et accorde-nous Ta miséricorde. C\'est Toi, certes, le Grand Donateur ! [Ali \'Imran: 8]',
      ur: 'اے ہمارے رب! ہمارے دلوں کو ٹیڑھا نہ کر اس کے بعد کہ تو نے ہمیں ہدایت دی، اور ہمیں اپنے پاس سے رحمت عطا فرما، بے شک تو ہی سب سے بڑا عطا کرنے والا ہے۔ [آل عمران: 8]',
      id: 'Ya Tuhan kami, janganlah Engkau jadikan hati kami condong kepada kesesatan sesudah Engkau beri petunjuk kepada kami, dan karuniakanlah kepada kami rahmat dari sisi-Mu; karena sesungguhnya Engkau-lah Maha Pemberi. [QS. Ali Imran: 8]',
      tr: 'Rabbimiz! Bizi hidayete erdirdikten sonra kalplerimizi eğriltme ve katından bize bir rahmet bağışla. Şüphesiz Sen çok bağışlayansın. [Al-i İmran: 8]'
    },
    targetCount: 3,
    source: 'سورة آل عمران (8)'
  },
  {
    id: 'q3',
    categoryId: 'quranic_duas',
    title_ar: 'دعاء ذي النون في بطن الحوت',
    title_en: 'The Supplication of Prophet Yunus in the Whale',
    text_ar: 'لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ.',
    transliteration: "La ilaha illa Anta subhanaka inni kuntu minadh-dhalimin.",
    translations: {
      ar: 'دعوة ذي النون التي لم يدعُ بها مسلم قط في كربة إلا استجاب الله له (سورة الأنبياء: 87).',
      en: 'There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers. [Al-Anbiya: 87]',
      fr: 'Pas de divinité à part Toi ! Pureté à Toi ! J\'ai été vraiment du nombre des injustes. [Al-Anbiya: 87]',
      ur: 'تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ہی قصورواروں میں سے تھا۔ [الانبیاء: 87]',
      id: 'Tidak ada tuhan selain Engkau. Maha Suci Engkau, sungguh aku adalah termasuk orang-orang yang zhalim. [QS. Al-Anbiya: 87]',
      tr: 'Senden başka ilah yoktur. Seni her türlü noksanlıktan tenzih ederim. Gerçekten ben zalimlerden oldum. [Enbiya: 87]'
    },
    virtue: {
      ar: 'دعوة ذي النون إذا دعا بها وهو في بطن الحوت: لم يدعُ بها رجل مسلم في شيء قط إلا استجاب الله له (رواه الترمذي).',
      en: 'No Muslim supplication with this in any difficulty except that Allah answers his call (Tirmidhi).',
      fr: 'Nul musulman n\'invoque par ces mots sans qu\'Allah n\'exauce son vœu face à l\'épreuve.',
      ur: 'کوئی بھی مسلمان کسی پریشانی میں یہ دعا مانگے تو اللہ تعالیٰ اس کی دعا ضرور قبول فرماتا ہے۔',
      id: 'Doa Nabi Yunus saat dalam perut ikan: Tiada seorang muslim pun yang berdoa dengannya melainkan Allah mengabulkan doanya.',
      tr: 'Sıkıntıya düşen hiçbir müslüman bu dua ile dua etmez ki Allah onun duasını kabul etmiş olmasın.'
    },
    targetCount: 3,
    source: 'سورة الأنبياء (87)'
  },

  // Prophetic Duas
  {
    id: 'pr1',
    categoryId: 'prophetic_duas',
    title_ar: 'دعاء الهم والغم والحزن والدين',
    title_en: 'Supplication for Relief from Anxiety, Debt, and Sorrow',
    text_ar: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ.',
    transliteration: "Allahumma inni a'udhu bika minal-hammi wal-hazan, wal-'ajzi wal-kasal, wal-bukhli wal-jubn, wa dala'id-dayni wa ghalabatir-rijal.",
    translations: {
      ar: 'الاستعاذة من الهم والحزن والكسل وغلبة الدين وقهر الرجال.',
      en: 'O Allah, I seek refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debt and from being overpowered by men.',
      fr: 'Ô Allah, je cherche refuge auprès de Toi contre les soucis et la tristesse, l\'impuissance et la paresse, la lâcheté et l\'avarice, le poids de la dette et la domination des hommes.',
      ur: 'اے اللہ! میں غم اور فکر سے، عاجزی اور سستی سے، بخل اور بزدلی سے اور قرض کے بوجھ اور لوگوں کے دباؤ سے تیری پناہ مانگتا ہوں۔',
      id: 'Ya Allah, aku berlindung kepada-Mu dari rasa gelisah dan sedih, dari kelemahan dan kemalasan, dari sifat kikir dan pengecut, dari lilitan hutang dan kesewenang-wenangan orang.',
      tr: 'Allah\'ım! Kederden, hüzünden, acizlikten, tembellikten, cimrilikten, korkaklıktan, borç yükünden ve insanların kahrından Sana sığınırım.'
    },
    targetCount: 1,
    source: 'صحيح البخاري'
  },
  {
    id: 'pr2',
    categoryId: 'prophetic_duas',
    title_ar: 'دعاء طلب الهدى والتقى والعفاف والغنى',
    title_en: 'Supplication for Guidance, Piety, Modesty, and Sufficiency',
    text_ar: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى، وَالتُّقَى، وَالْعَفَافَ، وَالْغِنَى.',
    transliteration: "Allahumma inni as'alukal-huda, wat-tuqa, wal-'afafa, wal-ghina.",
    translations: {
      ar: 'سؤال الله الهداية والتقوى والعفاف والغنى عن الناس.',
      en: 'O Allah, I ask You for guidance, piety, chastity, and self-sufficiency.',
      fr: 'Ô Allah, je Te demande la guidée, la piété, la chasteté et la suffisance.',
      ur: 'اے اللہ! میں تجھ سے ہدایت، تقویٰ، پاکدامنی اور غنا (بے نیازی) کا سوال کرتا ہوں۔',
      id: 'Ya Allah, sesungguhnya aku memohon kepada-Mu petunjuk, ketakwaan, kesucian diri, dan kecukupan.',
      tr: 'Allah\'ım! Senden hidayet, takva, iffet ve gönül zenginliği dilerim.'
    },
    targetCount: 3,
    source: 'صحيح مسلم'
  }
];
