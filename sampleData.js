const SAMPLE_DATA = {
    democracy: {
        word: "democracy",
        stages: [
            { period: "Ancient Greek", year: "5th c. BCE", form: "δημοκρατία (dēmokratía)", language: "Ancient Greek", description: "From δῆμος (dêmos, 'people') + κράτος (krátos, 'power'). Coined in Athens to describe rule by the people." },
            { period: "Latin", year: "1st c. BCE", form: "dēmocratia", language: "Latin", description: "Borrowed directly from Greek during the Roman Republic." },
            { period: "Middle French", year: "14th c.", form: "démocratie", language: "Middle French", description: "Entered French from Latin scholarly texts." },
            { period: "Modern English", year: "16th c.", form: "democracy", language: "English", description: "Adopted into English during the Renaissance revival of classical learning." }
        ],
        path: [
            { place: "Athens, Greece",       coords: [37.98, 23.73],   year: -500,  note: "Coined during the classical Athenian period" },
            { place: "Rome, Italy",          coords: [41.90, 12.50],   year: -100,  note: "Adopted into Latin by Roman scholars" },
            { place: "Paris, France",        coords: [48.86, 2.35],    year: 1300,  note: "Evolved through Medieval French" },
            { place: "London, England",      coords: [51.51, -0.13],   year: 1600,  note: "Entered English during the Renaissance" }
        ]
    },

    philosophy: {
        word: "philosophy",
        stages: [
            { period: "Ancient Greek", year: "6th c. BCE", form: "φιλοσοφία (philosophía)", language: "Ancient Greek", description: "From φίλος (phílos, 'loving') + σοφία (sophía, 'wisdom'). Attributed to Pythagoras." },
            { period: "Latin", year: "1st c. BCE", form: "philosophia", language: "Latin", description: "Direct borrowing from Greek by Roman intellectuals." },
            { period: "Old French", year: "12th c.", form: "filosofie", language: "Old French", description: "Transmitted through medieval universities." },
            { period: "Modern English", year: "14th c.", form: "philosophy", language: "English", description: "Established in English academic tradition." }
        ],
        path: [
            { place: "Samos, Greece",        coords: [37.75, 26.98],   year: -570,  note: "Pythagoras is said to have coined the term" },
            { place: "Athens, Greece",       coords: [37.98, 23.73],   year: -400,  note: "Developed by Plato and Aristotle" },
            { place: "Alexandria, Egypt",    coords: [31.20, 29.92],   year: -300,  note: "Spread through the Hellenistic world" },
            { place: "Rome, Italy",          coords: [41.90, 12.50],   year: -100,  note: "Adopted by Roman scholars like Cicero" },
            { place: "Paris, France",        coords: [48.86, 2.35],    year: 1200,  note: "Medieval European universities" },
            { place: "Oxford, England",      coords: [51.75, -1.26],   year: 1400,  note: "Entered English academic vocabulary" }
        ]
    },

    tea: {
        word: "tea",
        stages: [
            { period: "Old Chinese", year: "~7th c.", form: "茶 (tú)", language: "Old Chinese", description: "Ancient word for the tea plant, first cultivated in Sichuan province." },
            { period: "Min Nan Chinese", year: "~10th c.", form: "茶 (tê)", language: "Min Nan", description: "Coastal dialect pronunciation used by traders in Fujian." },
            { period: "Malay", year: "16th c.", form: "teh", language: "Malay", description: "Adopted through maritime Southeast Asian trade routes." },
            { period: "Dutch", year: "17th c.", form: "thee", language: "Dutch", description: "Brought to Europe by Dutch East India Company traders." },
            { period: "Modern English", year: "1660s", form: "tea", language: "English", description: "Popularized in England, becoming a cultural institution." }
        ],
        path: [
            { place: "Sichuan, China",       coords: [30.57, 104.07],  year: 700,   note: "First cultivation of tea plants" },
            { place: "Fujian, China",        coords: [26.08, 119.30],  year: 1000,  note: "Min Nan trading ports" },
            { place: "Malacca, Malaysia",    coords: [2.20, 102.25],   year: 1500,  note: "Southeast Asian spice trade hub" },
            { place: "Amsterdam, Netherlands", coords: [52.37, 4.90],  year: 1610,  note: "Dutch East India Company imports" },
            { place: "London, England",      coords: [51.51, -0.13],   year: 1660,  note: "Tea becomes a staple in England" }
        ]
    },

    algorithm: {
        word: "algorithm",
        stages: [
            { period: "Arabic", year: "9th c.", form: "الخوارزمي (al-Khwārizmī)", language: "Arabic", description: "From the name of Persian mathematician Muḥammad ibn Mūsā al-Khwārizmī, who was from Khwarezm." },
            { period: "Medieval Latin", year: "12th c.", form: "algorismus", language: "Medieval Latin", description: "Latinized form of al-Khwārizmī, referring to decimal arithmetic." },
            { period: "Middle English", year: "13th c.", form: "algorisme", language: "Middle English", description: "Used to mean the Arabic numeral system and arithmetic." },
            { period: "Modern English", year: "17th c.", form: "algorithm", language: "English", description: "Broadened to mean any step-by-step computational procedure." }
        ],
        path: [
            { place: "Khiva, Uzbekistan",    coords: [41.38, 60.36],   year: 780,   note: "Birthplace of al-Khwārizmī" },
            { place: "Baghdad, Iraq",        coords: [33.31, 44.37],   year: 820,   note: "al-Khwārizmī works at the House of Wisdom" },
            { place: "Toledo, Spain",        coords: [39.86, -4.02],   year: 1150,  note: "Arabic texts translated into Latin" },
            { place: "Paris, France",        coords: [48.86, 2.35],    year: 1250,  note: "Spread through European universities" },
            { place: "London, England",      coords: [51.51, -0.13],   year: 1600,  note: "Adopted into English mathematical vocabulary" }
        ]
    },

    run: {
        word: "run",
        stages: [
            { period: "Proto-Germanic", year: "~500 BCE", form: "*rinnaną", language: "Proto-Germanic", description: "Reconstructed root meaning 'to run, to flow.'" },
            { period: "Old Norse", year: "~8th c.", form: "rinna", language: "Old Norse", description: "Norse form that influenced the Middle English spelling." },
            { period: "Old English", year: "5th–12th c.", form: "rinnan", language: "Old English", description: "To run, flow, or move swiftly." },
            { period: "Middle English", year: "14th c.", form: "runnen", language: "Middle English", description: "Vowel shifted under Norse influence." },
            { period: "Modern English", year: "16th c.", form: "run", language: "English", description: "One of the most polysemous words in English with 645+ senses in the OED." }
        ],
        path: [
            { place: "Jutland, Denmark",     coords: [55.38, 9.54],    year: -500,  note: "Proto-Germanic origins" },
            { place: "Schleswig, Germany",   coords: [54.79, 9.45],    year: -200,  note: "Early Germanic migration" },
            { place: "York, England",        coords: [53.96, -1.08],   year: 500,   note: "Anglo-Saxon and Norse settlement" },
            { place: "London, England",      coords: [51.51, -0.13],   year: 1500,  note: "Modern English usage established" }
        ]
    },

    liberty: {
        word: "liberty",
        stages: [
            { period: "Latin", year: "~3rd c. BCE", form: "lībertās", language: "Latin", description: "From līber ('free'). The condition of a free person, as opposed to a slave." },
            { period: "Old French", year: "12th c.", form: "liberté", language: "Old French", description: "Evolved in French with the same core meaning of freedom." },
            { period: "Modern English", year: "14th c.", form: "liberty", language: "English", description: "Entered English through Norman French influence on legal and political vocabulary." }
        ],
        path: [
            { place: "Rome, Italy",          coords: [41.90, 12.50],   year: -200,  note: "Roman concept of libertas for citizens" },
            { place: "Paris, France",        coords: [48.86, 2.35],    year: 1150,  note: "Medieval French liberté" },
            { place: "London, England",      coords: [51.51, -0.13],   year: 1380,  note: "Entered English legal vocabulary" }
        ]
    },

    music: {
        word: "music",
        stages: [
            { period: "Ancient Greek", year: "5th c. BCE", form: "μουσική τέχνη (mousikḗ tékhnē)", language: "Ancient Greek", description: "Literally 'art of the Muses,' encompassing music, poetry, and dance." },
            { period: "Latin", year: "1st c. BCE", form: "mūsica", language: "Latin", description: "Narrowed to mean the science of harmonics and musical art." },
            { period: "Old French", year: "12th c.", form: "musique", language: "Old French", description: "Carried through medieval church and court traditions." },
            { period: "Modern English", year: "13th c.", form: "music", language: "English", description: "Fully established in English by the late medieval period." }
        ],
        path: [
            { place: "Athens, Greece",       coords: [37.98, 23.73],   year: -500,  note: "Greek concept of mousikē" },
            { place: "Rome, Italy",          coords: [41.90, 12.50],   year: -50,   note: "Latin musica in Roman culture" },
            { place: "Paris, France",        coords: [48.86, 2.35],    year: 1150,  note: "Medieval church and court music" },
            { place: "London, England",      coords: [51.51, -0.13],   year: 1300,  note: "English music established" }
        ]
    },

    sugar: {
        word: "sugar",
        stages: [
            { period: "Sanskrit", year: "~4th c. BCE", form: "शर्करा (śárkarā)", language: "Sanskrit", description: "Originally meant 'ground or candied sugar,' from a root meaning 'grit' or 'gravel.'" },
            { period: "Arabic", year: "8th c.", form: "سُكَّر (sukkar)", language: "Arabic", description: "Adopted as sugarcane cultivation spread through the Islamic world." },
            { period: "Medieval Latin", year: "12th c.", form: "succarum", language: "Medieval Latin", description: "Entered Latin through Arabic-speaking traders." },
            { period: "Old French", year: "12th c.", form: "sucre", language: "Old French", description: "French adaptation brought by returning Crusaders." },
            { period: "Modern English", year: "13th c.", form: "sugar", language: "English", description: "Established in English as the commodity became widely traded." }
        ],
        path: [
            { place: "Bihar, India",         coords: [25.60, 85.12],   year: -300,  note: "Earliest sugarcane crystallization" },
            { place: "Baghdad, Iraq",        coords: [33.31, 44.37],   year: 750,   note: "Sugar refining in the Islamic Golden Age" },
            { place: "Cairo, Egypt",         coords: [30.04, 31.24],   year: 1000,  note: "Major sugar production center" },
            { place: "Venice, Italy",        coords: [45.44, 12.32],   year: 1150,  note: "Venetian merchants trade sugar to Europe" },
            { place: "Paris, France",        coords: [48.86, 2.35],    year: 1200,  note: "Old French sucre" },
            { place: "London, England",      coords: [51.51, -0.13],   year: 1300,  note: "Sugar enters English vocabulary and kitchens" }
        ]
    }
};
