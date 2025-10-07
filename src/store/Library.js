const filtersData = [
    {
        category: "ALL",
        description: "Collection of all devotional categories including Aarti, Bhajan, Mantra, Chalisa, Katha, Paath, and Temple information.",
    },
    {
        category: "Aarti",
        description: "Sacred devotional songs sung during worship to honor deities.",
        items: [
            {
                name: "Shri Ganesh Aarti",
                deity: "Lord Ganesha",
                whyRead: "Removes obstacles and ensures success before beginning any new task.",
                fullAarti: `Jai Ganesh Jai Ganesh, Jai Ganesh Deva  

Mata Jaki Parvati Pita Mahadeva  

Jai Ganesh Jai Ganesh, Jai Ganesh Deva  

Mata Jaki Parvati Pita Mahadeva  

Ek Dant Daya Want  
Char Bhuja Dhari  
Mastak Sindoor Shoye  
Muse Ki Sawari  

Paan Chadhe Phool Chadhe  
Aur Chadhe Mewa  
Laduvan Ka Bhog Lage  
Sant Kare Seva  

Jai Ganesh Jai Ganesh, Jai Ganesh Deva  
Mata Jaki Parvati Pita Mahadeva  

Andhan Ko Aankh Dett Kodhin Ko Kaya  
Banjhan Ko Garbh Dett Nirdhan Ko Maya  
Surshyaam Sharan Aaye Safal Kije Seva  

Jai Ganesh Jai Ganesh, Jai Ganesh Deva  
Mata Jaki Parvati Pita Mahadeva`,
                language: "Hindi",
                duration: "5 min",
                source: "Traditional Hindu Prayer",
            }
            ,
            {
                name: "Maa Durga Aarti",
                deity: "Goddess Durga",
                whyRead: "Invokes protection, strength, and prosperity from Maa Durga.",
                fullAarti: "Ambe Tu Hai Jagdambe Kali...",
                language: "Hindi",
                duration: "6 min",
                source: "Durga Saptashati",
            },
            {
                name: "Shri Hanuman Aarti",
                deity: "Lord Hanuman",
                whyRead: "Reciting this Aarti grants courage and wards off negative energies.",
                fullAarti: "Aarti Kije Hanuman Lala Ki...",
                language: "Hindi",
                duration: "5 min",
                source: "Hanuman Chalisa Tradition",
            },
        ],
    },
    {
        category: "Bhajan",
        description: "Bhakti songs sung in devotion, often expressing love for deities.",
        items: [
            {
                name: "Raghupati Raghav Raja Ram",
                whyListen: "Chants the glory of Lord Rama and spreads peace.",
                lyricsSnippet: "Raghupati Raghav Raja Ram Patit Pavan Sita Ram...",
                artist: "Mahatma Gandhi’s Ashram Choir (Traditional)",
                mood: "Peaceful",
            },
            {
                name: "Achyutam Keshavam Krishna Damodaram",
                whyListen: "Reminds devotees of different forms of Lord Vishnu and Krishna.",
                lyricsSnippet: "Achyutam Keshavam Krishna Damodaram...",
                artist: "Jubin Nautiyal (Devotional rendition)",
                mood: "Calming",
            },
            {
                name: "Om Jai Jagdish Hare",
                whyListen: "A universal bhajan of devotion to Lord Vishnu, sung daily in homes and temples.",
                lyricsSnippet: "Om Jai Jagdish Hare, Swami Jai Jagdish Hare...",
                artist: "Traditional Devotional",
                mood: "Gratitude and reverence",
            },
        ],
    },
    {
        category: "Mantra",
        description: "Sacred syllables and verses believed to have spiritual and energetic power.",
    },
    {
        category: "Chalisa",
        description: "Forty-verse devotional hymns dedicated to specific deities.",
    },
    {
        category: "Katha",
        description: "Spiritual stories and narratives that teach moral and devotional lessons.",
    },
    {
        category: "Paath",
        description: "Recitations from sacred scriptures for blessings and spiritual growth.",
    },
    {
        category: "Temple",
        description: "Information about temples, locations, and associated deities.",
    },
];

export default filtersData;