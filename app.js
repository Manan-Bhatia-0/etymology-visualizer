// --- Language metadata: codes, display names, coordinates, rough dates ---

const LANG = {
    // Modern English
    'en':      { name: 'English',              place: 'London, England',           coords: [51.51, -0.13],   era: 1500 },
    'en-US':   { name: 'American English',     place: 'Washington, USA',           coords: [38.90, -77.04],  era: 1700 },
    'enm':     { name: 'Middle English',       place: 'Oxford, England',           coords: [51.75, -1.26],   era: 1300 },
    'ang':     { name: 'Old English',          place: 'Canterbury, England',       coords: [51.38, 1.44],    era: 700  },

    // Romance
    'fr':      { name: 'French',               place: 'Paris, France',             coords: [48.86, 2.35],    era: 1500 },
    'frm':     { name: 'Middle French',        place: 'Paris, France',             coords: [48.86, 2.35],    era: 1400 },
    'fro':     { name: 'Old French',           place: 'Paris, France',             coords: [48.86, 2.35],    era: 1100 },
    'es':      { name: 'Spanish',              place: 'Madrid, Spain',             coords: [40.42, -3.70],   era: 1500 },
    'osp':     { name: 'Old Spanish',          place: 'Toledo, Spain',             coords: [40.42, -3.70],   era: 1100 },
    'pt':      { name: 'Portuguese',           place: 'Lisbon, Portugal',          coords: [38.72, -9.14],   era: 1500 },
    'it':      { name: 'Italian',              place: 'Florence, Italy',           coords: [41.90, 12.50],   era: 1400 },
    'ro':      { name: 'Romanian',             place: 'Bucharest, Romania',        coords: [44.43, 26.10],   era: 1500 },
    'ca':      { name: 'Catalan',              place: 'Barcelona, Spain',          coords: [41.39, 2.17],    era: 1300 },

    // Latin & Greek
    'la':      { name: 'Latin',                place: 'Rome, Italy',               coords: [41.90, 12.50],   era: -100 },
    'ML.':     { name: 'Medieval Latin',       place: 'Rome, Italy',               coords: [41.90, 12.50],   era: 800  },
    'LL.':     { name: 'Late Latin',           place: 'Rome, Italy',               coords: [41.90, 12.50],   era: 400  },
    'VL.':     { name: 'Vulgar Latin',         place: 'Rome, Italy',               coords: [41.90, 12.50],   era: 200  },
    'grc':     { name: 'Ancient Greek',        place: 'Athens, Greece',            coords: [37.98, 23.73],   era: -400 },
    'el':      { name: 'Greek',                place: 'Athens, Greece',            coords: [37.98, 23.73],   era: 1500 },
    'gkm':     { name: 'Medieval Greek',       place: 'Constantinople',            coords: [41.01, 28.98],   era: 800  },

    // Germanic
    'de':      { name: 'German',               place: 'Berlin, Germany',           coords: [52.52, 13.41],   era: 1500 },
    'gmh':     { name: 'Middle High German',   place: 'Frankfurt, Germany',        coords: [50.11, 8.68],    era: 1200 },
    'goh':     { name: 'Old High German',      place: 'Frankfurt, Germany',        coords: [50.11, 8.68],    era: 800  },
    'nl':      { name: 'Dutch',                place: 'Amsterdam, Netherlands',    coords: [52.37, 4.90],    era: 1500 },
    'dum':     { name: 'Middle Dutch',         place: 'Bruges, Flanders',          coords: [52.37, 4.90],    era: 1200 },
    'odt':     { name: 'Old Dutch',            place: 'Utrecht, Netherlands',      coords: [52.37, 4.90],    era: 800  },
    'non':     { name: 'Old Norse',            place: 'Stockholm, Scandinavia',    coords: [59.33, 18.07],   era: 800  },
    'da':      { name: 'Danish',               place: 'Copenhagen, Denmark',       coords: [55.68, 12.57],   era: 1500 },
    'sv':      { name: 'Swedish',              place: 'Stockholm, Sweden',         coords: [59.33, 18.07],   era: 1500 },
    'no':      { name: 'Norwegian',            place: 'Oslo, Norway',              coords: [59.91, 10.75],   era: 1500 },
    'is':      { name: 'Icelandic',            place: 'Reykjavik, Iceland',        coords: [64.15, -21.94],  era: 1200 },

    // Proto-languages
    'gem-pro': { name: 'Proto-Germanic',       place: 'Jutland, Denmark',          coords: [55.38, 9.54],    era: -500 },
    'gmw-pro': { name: 'Proto-West Germanic',  place: 'Northern Germany',          coords: [52.00, 8.00],    era: -200 },
    'ine-pro': { name: 'Proto-Indo-European',  place: 'Pontic Steppe',             coords: [46.50, 36.00],   era: -3500},
    'itc-pro': { name: 'Proto-Italic',         place: 'Central Italy',             coords: [42.00, 13.00],   era: -1000},
    'cel-pro': { name: 'Proto-Celtic',         place: 'Central Europe',            coords: [48.00, 6.00],    era: -800 },
    'sla-pro': { name: 'Proto-Slavic',         place: 'Eastern Europe',            coords: [50.00, 25.00],   era: -500 },

    // Celtic
    'ga':      { name: 'Irish',                place: 'Dublin, Ireland',           coords: [53.35, -6.26],   era: 1500 },
    'gd':      { name: 'Scottish Gaelic',      place: 'Scottish Highlands',        coords: [56.82, -5.10],   era: 1500 },
    'cy':      { name: 'Welsh',                place: 'Wales',                     coords: [52.13, -3.78],   era: 1500 },
    'sga':     { name: 'Old Irish',            place: 'Ireland',                   coords: [53.35, -6.26],   era: 700  },

    // Semitic
    'ar':      { name: 'Arabic',               place: 'Mecca, Arabia',             coords: [24.71, 46.68],   era: 700  },
    'he':      { name: 'Hebrew',               place: 'Jerusalem',                 coords: [31.77, 35.23],   era: -500 },
    'akk':     { name: 'Akkadian',             place: 'Babylon, Mesopotamia',      coords: [33.31, 44.37],   era: -2000},
    'arc':     { name: 'Aramaic',              place: 'Aleppo, Syria',             coords: [36.20, 37.16],   era: -500 },

    // Indo-Iranian
    'sa':      { name: 'Sanskrit',             place: 'Varanasi, India',           coords: [25.32, 82.99],   era: -1000},
    'fa':      { name: 'Persian',              place: 'Tehran, Persia',            coords: [35.69, 51.39],   era: 900  },
    'peo':     { name: 'Old Persian',          place: 'Persepolis, Persia',        coords: [30.00, 52.00],   era: -500 },
    'hi':      { name: 'Hindi',                place: 'Delhi, India',              coords: [28.61, 77.21],   era: 1500 },
    'ur':      { name: 'Urdu',                 place: 'Lahore, Pakistan',          coords: [33.69, 73.04],   era: 1500 },

    // East Asian
    'zh':      { name: 'Chinese',              place: 'Beijing, China',            coords: [39.90, 116.40],  era: -500 },
    'ltc':     { name: 'Middle Chinese',       place: "Xi'an, China",              coords: [34.26, 108.94],  era: 600  },
    'och':     { name: 'Old Chinese',          place: "Xi'an, China",              coords: [34.26, 108.94],  era: -500 },
    'nan':     { name: 'Min Nan',              place: 'Fujian, China',             coords: [26.08, 119.30],  era: 1000 },
    'yue':     { name: 'Cantonese',            place: 'Guangzhou, China',          coords: [23.13, 113.26],  era: 1000 },
    'ja':      { name: 'Japanese',             place: 'Tokyo, Japan',              coords: [35.68, 139.69],  era: 700  },
    'ko':      { name: 'Korean',               place: 'Seoul, Korea',              coords: [37.57, 126.98],  era: 700  },

    // Other
    'tr':      { name: 'Turkish',              place: 'Ankara, Turkey',            coords: [39.93, 32.85],   era: 1200 },
    'ota':     { name: 'Ottoman Turkish',      place: 'Istanbul, Ottoman Empire',  coords: [41.01, 28.98],   era: 1400 },
    'ru':      { name: 'Russian',              place: 'Moscow, Russia',            coords: [55.76, 37.62],   era: 1400 },
    'pl':      { name: 'Polish',               place: 'Warsaw, Poland',            coords: [52.23, 21.01],   era: 1400 },
    'ml':      { name: 'Malay',                place: 'Malacca, Malaysia',         coords: [2.20, 102.25],   era: 1400 },
    'ta':      { name: 'Tamil',                place: 'Madurai, India',            coords: [13.08, 80.27],   era: -300 },
    'xno':     { name: 'Anglo-Norman',         place: 'Normandy, France',          coords: [49.18, -0.37],   era: 1100 },
    'la-med':  { name: 'Medieval Latin',       place: 'Rome, Italy',               coords: [41.90, 12.50],   era: 800  },
    'NL.':     { name: 'New Latin',            place: 'Rome, Italy',               coords: [41.90, 12.50],   era: 1500 },

    // Mesoamerican & Indigenous
    'nci':     { name: 'Classical Nahuatl',    place: 'Tenochtitlan, Mexico',      coords: [19.43, -99.13],  era: 1400 },
    'nah':     { name: 'Nahuatl',              place: 'Mexico City, Mexico',       coords: [19.43, -99.13],  era: 1500 },
    'qu':      { name: 'Quechua',              place: 'Cusco, Peru',               coords: [-13.52, -71.97], era: 1400 },
    'car':     { name: 'Carib',                place: 'Trinidad, Caribbean',       coords: [10.50, -61.31],  era: 1500 },
    'tnq':     { name: 'Taíno',               place: 'Hispaniola, Caribbean',     coords: [18.47, -69.90],  era: 1500 },
    'tno':     { name: 'Taíno',               place: 'Hispaniola, Caribbean',     coords: [18.47, -69.90],  era: 1500 },

    // African
    'sw':      { name: 'Swahili',              place: 'Zanzibar, East Africa',     coords: [-6.79, 39.28],   era: 1000 },
    'yo':      { name: 'Yoruba',               place: 'Ibadan, Nigeria',           coords: [7.40, 3.92],     era: 1000 },
    'zu':      { name: 'Zulu',                 place: 'KwaZulu-Natal, S. Africa',  coords: [-29.86, 31.02],  era: 1000 },
    'bnt-pro': { name: 'Proto-Bantu',          place: 'Great Lakes, Africa',       coords: [-1.94, 29.87],   era: -1000},

    // Slavic
    'cs':      { name: 'Czech',                place: 'Prague, Czechia',           coords: [50.08, 14.44],   era: 1400 },
    'sk':      { name: 'Slovak',               place: 'Bratislava, Slovakia',      coords: [48.15, 17.11],   era: 1400 },
    'uk':      { name: 'Ukrainian',            place: 'Kyiv, Ukraine',             coords: [50.45, 30.52],   era: 1400 },
    'bg':      { name: 'Bulgarian',            place: 'Sofia, Bulgaria',           coords: [42.70, 23.32],   era: 1400 },
    'sr':      { name: 'Serbian',              place: 'Belgrade, Serbia',          coords: [44.79, 20.50],   era: 1400 },
    'hr':      { name: 'Croatian',             place: 'Zagreb, Croatia',           coords: [45.81, 15.98],   era: 1400 },
    'cu':      { name: 'Old Church Slavonic',  place: 'Ohrid, Macedonia',          coords: [42.70, 25.49],   era: 900  },
    'orv':     { name: 'Old East Slavic',      place: 'Kyiv, Rus',                 coords: [50.45, 30.52],   era: 900  },
    'zlw':     { name: 'West Slavic',          place: 'Bohemia',                   coords: [50.08, 14.44],   era: 800  },

    // Additional
    'af':      { name: 'Afrikaans',            place: 'Cape Town, S. Africa',      coords: [-33.93, 18.42],  era: 1700 },
    'sq':      { name: 'Albanian',             place: 'Tirana, Albania',           coords: [41.33, 19.82],   era: 1500 },
    'hy':      { name: 'Armenian',             place: 'Yerevan, Armenia',          coords: [40.18, 44.51],   era: 400  },
    'ka':      { name: 'Georgian',             place: 'Tbilisi, Georgia',          coords: [41.72, 44.79],   era: 400  },
    'fi':      { name: 'Finnish',              place: 'Helsinki, Finland',         coords: [60.17, 24.94],   era: 1500 },
    'hu':      { name: 'Hungarian',            place: 'Budapest, Hungary',         coords: [47.50, 19.04],   era: 1000 },
    'frk':     { name: 'Frankish',             place: 'Cologne, Rhineland',        coords: [50.94, 6.96],    era: 500  },
    'mga':     { name: 'Middle Irish',         place: 'Dublin, Ireland',           coords: [53.35, -6.26],   era: 1000 },
    'la-lat':  { name: 'Late Latin',           place: 'Rome, Italy',               coords: [41.90, 12.50],   era: 400  },
    'la-cla':  { name: 'Classical Latin',      place: 'Rome, Italy',               coords: [41.90, 12.50],   era: -100 },
    'ML':      { name: 'Medieval Latin',       place: 'Rome, Italy',               coords: [41.90, 12.50],   era: 800  },
    'pi':      { name: 'Pali',                 place: 'Pataliputra, India',        coords: [25.61, 85.14],   era: -300 },
};

// Full-name lookup for plain-text parsing
const LANG_BY_NAME = {};
for (const [code, info] of Object.entries(LANG)) {
    LANG_BY_NAME[info.name.toLowerCase()] = { code, ...info };
}


// ============================================================
// Etymology data fetcher — queries Wiktionary, parses templates
// ============================================================

class EtymologyService {

    constructor() {
        // Cache wikitext fetches to avoid redundant requests during recursive lookups
        this._cache = {};
    }

    async lookup(word) {
        // 1. Curated sample data
        if (SAMPLE_DATA[word.toLowerCase()]) {
            return SAMPLE_DATA[word.toLowerCase()];
        }

        // 2. Wiktionary wikitext (with recursive base-word support)
        try {
            const data = await this.fetchWiktionary(word, 0);
            if (data) return data;
        } catch (e) {
            console.warn('Wiktionary fetch failed:', e);
        }

        // 3. Free Dictionary API fallback
        try {
            const data = await this.fetchFreeDictionary(word);
            if (data) return data;
        } catch (e) {
            console.warn('Free Dictionary fetch failed:', e);
        }

        return null;
    }

    // --- Wiktionary ---

    async getWikitext(word) {
        if (this._cache[word]) return this._cache[word];

        const url = `https://en.wiktionary.org/w/api.php?action=parse&page=${encodeURIComponent(word)}&prop=wikitext&format=json&origin=*`;
        const resp = await fetch(url);
        if (!resp.ok) return null;

        const json = await resp.json();
        const wt = json?.parse?.wikitext?.['*'] || null;
        this._cache[word] = wt;
        return wt;
    }

    async fetchWiktionary(word, depth) {
        const wikitext = await this.getWikitext(word);
        if (!wikitext) return null;

        const etymSection = this.extractEtymologySection(wikitext);
        if (!etymSection) return null;

        // Parse all templates to build language chain
        let chain = this.parseTemplates(etymSection);

        // If this word is formed by affixation (compute + -er), try the base word
        if (chain.length < 2 && depth < 2) {
            const baseWord = this.extractBaseWord(etymSection, word);
            if (baseWord && baseWord.toLowerCase() !== word.toLowerCase()) {
                console.log(`"${word}" is derived from "${baseWord}", looking up base word...`);
                const baseResult = await this.fetchWiktionary(baseWord, depth + 1);
                if (baseResult) {
                    // Prepend current English form
                    baseResult.word = word;
                    if (baseResult.stages[0]?.period !== 'English') {
                        baseResult.stages.unshift({
                            period: 'English', year: '~1500', form: word,
                            language: 'English', description: `Current form in Modern English (from ${baseWord} + suffix).`
                        });
                    } else {
                        baseResult.stages[0].form = word;
                        baseResult.stages[0].description = `Current form in Modern English (from ${baseWord} + suffix).`;
                    }
                    if (baseResult.path[0]?.place !== 'English') {
                        baseResult.path.unshift({ place: 'English', coords: [51.51, -0.13], year: 1500, note: `Modern English — ${word}` });
                    } else {
                        baseResult.path[0].note = `Modern English — ${word}`;
                    }
                    return baseResult;
                }
            }
        }

        // Fall back to plain-text language name matching
        if (chain.length < 2) {
            const textChain = this.parsePlainText(etymSection);
            if (textChain.length > chain.length) chain = textChain;
        }

        // Also parse {{root|en|LANG|...}} for the proto-root
        const rootLang = this.parseRootTemplate(etymSection);
        if (rootLang && !chain.find(c => c.code === rootLang.code)) {
            chain.push(rootLang);
        }

        if (chain.length === 0) return null;

        // Ensure modern English is first
        if (!chain.find(c => c.code === 'en')) {
            chain.unshift({ code: 'en', form: word });
        }

        return this.buildResult(word, chain);
    }

    extractEtymologySection(wikitext) {
        // Find ==English== section first
        const engMatch = wikitext.match(/==\s*English\s*==([\s\S]*?)(?:\n==[^=]|$)/);
        const engSection = engMatch ? engMatch[1] : wikitext;

        // Find ===Etymology=== or ===Etymology 1===
        const etymMatch = engSection.match(/===\s*Etymology(?:\s*\d*)?\s*===([\s\S]*?)(?:\n===[^=]|$)/);
        return etymMatch ? etymMatch[1] : null;
    }

    parseTemplates(text) {
        const chain = [];
        const seen = new Set();

        const addLang = (code, form) => {
            code = code.trim();
            // Handle sub-codes like "la-lat", "la-cla" → "la"
            if (!LANG[code] && code.includes('-')) {
                const base = code.split('-')[0];
                if (LANG[base]) code = base;
            }
            if (!seen.has(code) && LANG[code]) {
                seen.add(code);
                form = (form || '').replace(/^-$/, '').replace(/<[^>]*>/g, '').trim();
                chain.push({ code, form });
            }
        };

        // 1. Standard etymology templates: {{inh|en|LANG|word}}, {{bor|en|LANG|word}}, etc.
        //    Also matches inh+, bor+, der+, bor-lite, inherited, borrowed, derived
        const stdRe = /\{\{(?:inh|bor|der|inherited|borrowed|derived|bor-lite)(?:\+)?\|[^|]*\|([a-zA-Z][a-zA-Z0-9_.-]+)(?:\|([^|}]*))?/g;
        let m;
        while ((m = stdRe.exec(text)) !== null) {
            addLang(m[1], m[2]);
        }

        // 2. {{etymon|en|:TYPE|LANG:word}} — newer etymon template
        const etymonRe = /\{\{etymon\|[^|]*\|:(?:inh|bor|der|af)\|([a-z-]+):([^|}<]*)/g;
        while ((m = etymonRe.exec(text)) !== null) {
            addLang(m[1], m[2]);
        }

        // 3. {{m|LANG|word}} mentions and {{cog|LANG|word}} cognates
        //    Only if we haven't found a full chain yet
        if (chain.length < 2) {
            const mentionRe = /\{\{(?:m|cog|l|ll)\|([a-zA-Z][a-zA-Z0-9_.-]+)(?:\|([^|}]*))?/g;
            while ((m = mentionRe.exec(text)) !== null) {
                addLang(m[1], m[2]);
            }
        }

        return chain;
    }

    parseRootTemplate(text) {
        // {{root|en|ine-pro|*pewH-}} → gives us the proto-root language
        const m = text.match(/\{\{root\|[^|]*\|([a-zA-Z][a-zA-Z0-9_.-]+)(?:\|([^|}]*))?/);
        if (m) {
            const code = m[1].trim();
            const form = (m[2] || '').trim();
            if (LANG[code]) return { code, form };
        }
        return null;
    }

    extractBaseWord(etymSection, word) {
        // Look for {{affix|en|BASE|-suffix}} or {{af|en|BASE|-suffix}}
        const affixRe = /\{\{(?:affix|af|suffix|suf)\|en\|([^|}<-]+)/;
        const m = etymSection.match(affixRe);
        if (m) return m[1].replace(/<[^>]*>/g, '').trim();

        // Look for {{etymon|en|...|:af|BASE<...>|-suffix}}
        const etymonAf = etymSection.match(/\{\{etymon\|[^}]*:af\|([^|}<-]+)/);
        if (etymonAf) return etymonAf[1].replace(/<[^>]*>/g, '').trim();

        // Look for "from {{m|en|BASE}}" as base word reference
        const fromEn = etymSection.match(/from\s+\{\{m\|en\|([^|}]+)/i);
        if (fromEn) return fromEn[1].trim();

        return null;
    }

    parsePlainText(text) {
        const chain = [];
        const seen = new Set();

        // Strip wikitext markup
        const plain = text
            .replace(/\{\{[^}]*\}\}/g, ' ')
            .replace(/\[\[[^\]]*\]\]/g, ' ')
            .replace(/<[^>]*>/g, ' ');

        // Sort language names longest-first to match "Old English" before "English"
        const names = Object.keys(LANG_BY_NAME).sort((a, b) => b.length - a.length);

        for (const name of names) {
            const re = new RegExp(`\\b${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
            if (re.test(plain)) {
                const info = LANG_BY_NAME[name];
                if (!seen.has(info.code)) {
                    seen.add(info.code);
                    chain.push({ code: info.code, form: '' });
                }
            }
        }

        // Sort by era (most recent first)
        chain.sort((a, b) => (LANG[b.code]?.era || 0) - (LANG[a.code]?.era || 0));

        return chain;
    }

    buildResult(word, chain) {
        const stages = [];
        const path = [];

        // Deduplicate by coordinates to avoid overlapping markers on the map
        const coordsSeen = new Set();

        for (const entry of chain) {
            const info = LANG[entry.code];
            if (!info) continue;

            const yearLabel = info.era < 0 ? `~${Math.abs(info.era)} BCE` : `~${info.era}`;

            stages.push({
                period: info.name,
                year: yearLabel,
                form: entry.form || word,
                language: info.name,
                description: entry.code === 'en'
                    ? `Current form in Modern English.`
                    : `From ${info.name}${entry.form ? ': ' + entry.form : ''}.`
            });

            const coordKey = info.coords.join(',');
            if (!coordsSeen.has(coordKey)) {
                coordsSeen.add(coordKey);
                path.push({
                    place: info.place || info.name,
                    coords: info.coords,
                    year: info.era,
                    note: entry.code === 'en'
                        ? 'Modern English'
                        : `${info.name}${entry.form ? ' — ' + entry.form : ''}`
                });
            }
        }

        if (stages.length < 2) return null;

        return { word, stages, path };
    }

    // --- Free Dictionary API fallback ---

    async fetchFreeDictionary(word) {
        const resp = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
        if (!resp.ok) return null;

        const data = await resp.json();
        if (!Array.isArray(data) || data.length === 0) return null;

        const origin = data[0].origin;
        if (!origin) return null;

        const chain = [{ code: 'en', form: word }];
        const seen = new Set(['en']);

        const names = Object.keys(LANG_BY_NAME).sort((a, b) => b.length - a.length);
        for (const name of names) {
            const re = new RegExp(`\\b${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
            if (re.test(origin)) {
                const info = LANG_BY_NAME[name];
                if (!seen.has(info.code)) {
                    seen.add(info.code);
                    chain.push({ code: info.code, form: '' });
                }
            }
        }

        chain.sort((a, b) => (LANG[b.code]?.era || 0) - (LANG[a.code]?.era || 0));

        return this.buildResult(word, chain);
    }
}


// ============================================================
// UI & Map
// ============================================================

class EtymologyVisualizer {
    constructor() {
        this.map = L.map('map').setView([30, 20], 2);
        this.layers = [];
        this.service = new EtymologyService();

        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
            maxZoom: 19
        }).addTo(this.map);

        document.getElementById('trace-btn').addEventListener('click', () => this.trace());
        document.getElementById('word-input').addEventListener('keydown', (e) => {
            if (e.key === 'Enter') this.trace();
        });

        // Suggestion chips
        document.querySelectorAll('.chip').forEach(chip => {
            chip.addEventListener('click', () => {
                document.getElementById('word-input').value = chip.dataset.word;
                this.trace();
            });
        });
    }

    async trace() {
        const input = document.getElementById('word-input');
        const word = input.value.trim();
        if (!word) return;

        this.setLoading(true);
        this.clearMap();
        document.getElementById('timeline').innerHTML = '';
        document.getElementById('details').innerHTML = '';

        try {
            const data = await this.service.lookup(word);
            if (!data) {
                this.showNotFound(word);
                return;
            }
            this.renderDetails(data);
            this.renderTimeline(data.path);
            this.animatePath(data.path);
        } catch (err) {
            console.error(err);
            this.showNotFound(word);
        } finally {
            this.setLoading(false);
        }
    }

    setLoading(on) {
        document.querySelector('.search').classList.toggle('loading', on);
        document.getElementById('trace-btn').disabled = on;
    }

    clearMap() {
        this.layers.forEach(l => this.map.removeLayer(l));
        this.layers = [];
    }

    // --- Map ---

    animatePath(path) {
        if (path.length === 0) return;

        const bounds = L.latLngBounds(path.map(p => p.coords));
        this.map.fitBounds(bounds, { padding: [50, 50], maxZoom: 5 });

        // Shadow line
        const shadow = L.polyline(path.map(p => p.coords), {
            color: '#0e94d8', weight: 6, opacity: 0.15
        }).addTo(this.map);
        this.layers.push(shadow);

        // Main dashed line
        const line = L.polyline(path.map(p => p.coords), {
            color: '#07578c', weight: 3, opacity: 0.7, dashArray: '8,8'
        }).addTo(this.map);
        this.layers.push(line);

        // Stagger markers
        path.forEach((stop, i) => setTimeout(() => this.addMarker(stop), i * 500));

        // Traveling dot
        this.animateTraveler(path);
    }

    addMarker(stop) {
        const dot = L.divIcon({
            className: '',
            html: `<div style="width:14px;height:14px;background:#07578c;border:2.5px solid #fff;border-radius:50%;box-shadow:0 0 0 2px rgba(7,87,140,.25), 0 2px 8px rgba(0,0,0,.15)"></div>`,
            iconSize: [14, 14], iconAnchor: [7, 7]
        });
        const marker = L.marker(stop.coords, { icon: dot }).addTo(this.map);
        const yearStr = stop.year < 0 ? `${Math.abs(stop.year)} BCE` : String(stop.year);
        marker.bindPopup(`<b>${stop.place}</b><br>${yearStr}<br>${stop.note}`);
        this.layers.push(marker);

        const label = L.divIcon({
            className: '',
            html: `<div style="color:#00172e;font-size:11px;font-weight:600;background:rgba(255,255,255,.88);padding:2px 7px;border-radius:6px;white-space:nowrap;box-shadow:0 1px 4px rgba(0,0,0,.1);backdrop-filter:blur(4px)">${stop.place}</div>`,
            iconAnchor: [-4, 6]
        });
        const lbl = L.marker(stop.coords, { icon: label, interactive: false }).addTo(this.map);
        this.layers.push(lbl);
    }

    animateTraveler(path) {
        if (path.length < 2) return;

        const icon = L.divIcon({
            className: '',
            html: `<div style="width:10px;height:10px;background:#10d0b7;border:2px solid #fff;border-radius:50%;box-shadow:0 0 8px rgba(16,208,183,.6)"></div>`,
            iconSize: [10, 10], iconAnchor: [5, 5]
        });
        const marker = L.marker(path[0].coords, { icon }).addTo(this.map);
        this.layers.push(marker);

        let seg = 0, t = 0;
        const step = () => {
            if (seg >= path.length - 1) { this.map.removeLayer(marker); return; }
            const a = path[seg].coords, b = path[seg + 1].coords;
            marker.setLatLng([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]);
            t += 0.02;
            if (t >= 1) { seg++; t = 0; }
            requestAnimationFrame(step);
        };
        setTimeout(step, 200);
    }

    // --- Timeline ---

    renderTimeline(path) {
        const el = document.getElementById('timeline');
        el.innerHTML = '';
        path.forEach(stop => {
            const div = document.createElement('div');
            div.className = 'timeline-stop';
            const yr = stop.year < 0 ? `${Math.abs(stop.year)} BCE` : String(stop.year);
            div.innerHTML = `<div class="year">${yr}</div><div class="place">${stop.place}</div>`;
            div.addEventListener('click', () => this.map.flyTo(stop.coords, 8, { duration: 1 }));
            el.appendChild(div);
        });
    }

    // --- Details ---

    renderDetails(data) {
        const el = document.getElementById('details');
        el.innerHTML = `<h2>Etymology of "${data.word}"</h2>`;
        data.stages.forEach(s => {
            const div = document.createElement('div');
            div.className = 'stage';
            div.innerHTML = `<h3>${s.period} (${s.year})</h3><div class="form">${s.form}</div><p>${s.description}</p>`;
            el.appendChild(div);
        });
    }

    showNotFound(word) {
        document.getElementById('details').innerHTML = `
            <h2>No etymology found for "${word}"</h2>
            <p style="color:var(--text-secondary)">Try a different spelling, or one of these: ${Object.keys(SAMPLE_DATA).join(', ')}</p>`;
    }
}

document.addEventListener('DOMContentLoaded', () => new EtymologyVisualizer());
