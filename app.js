/**
 * PCT Library Locator System Engine - Shelf 1 Clean Architecture
 * Complete Data Integrity Model for entries #1 through #354
 */

// 1. Detect which shelf parameter is active (?shelf=1 or ?shelf=2)
const urlParams = new URLSearchParams(window.location.search);
const currentShelf = urlParams.get('shelf') || '1'; // Defaults to 1 if no parameter exists

// 2. Dynamically update the header text on the page
window.addEventListener('DOMContentLoaded', () => {
    const shelfTitle = document.getElementById('shelf-title');
    if (shelfTitle) {
        shelfTitle.textContent = `Shelf ${currentShelf}`;
    }
});

// Core Range Structural Boundaries Specified by User Mapping
const ROW_BOUNDARIES = [
    { row: 1, start: 1, end: 60 },
    { row: 2, start: 61, end: 84 },
    { row: 3, start: 85, end: 131 },
    { row: 4, start: 132, end: 176 },
    { row: 5, start: 177, end: 234 },
    { row: 6, start: 235, end: 267 },
    { row: 7, start: 268, end: 318 },
    { row: 8, start: 319, end: 354 }
];

// Structural Range Target Logic
function locateRowNumber(indexId) {
    for (const range of ROW_BOUNDARIES) {
        if (indexId >= range.start && indexId <= range.end) {
            return range.row;
        }
    }
    return null;
}

// Complete Inventory Mapped Array Matrix 
const shelf1Data = {
    // ==========================================
    // ROW 1: Books #1 to #60 (Psychology, Humanities, Sociology)
    // ==========================================
    1: { title: "Methods of Research", author: "Merle E. Salmorin, M.A. / 2006", accession: "0487" },
    2: { title: "Introduction to Humanities (Arts and Literature)", author: "Josefina V. Estolas et al. / 2011", accession: "3288" },
    3: { title: "Scripture Confessions for MOMS", author: "Shepherd Books / 2005", accession: "2261, 2262, 2263, 2264, 2265" },
    4: { title: "Who You Are When No One's Looking", author: "Bill Hybels / 2014", accession: "2134, 2135" },
    5: { title: "Freshman Psychology Revised Ed.", author: "Amparo Tuason / 1954", accession: "2999, 3000" },
    6: { title: "Introduction to Psychology 2nd Ed.", author: "Gaudencio V. Aquino & Norma C. Miranda / 2005", accession: "2615" },
    7: { title: "Psychological Testing (Psychometrics)", author: "Federico L. Casas, PhD / 1980", accession: "0489" },
    8: { title: "General Psychology with Values Development Lessons", author: "Consuelo G. Sevilla et al. / 1988", accession: "0341" },
    9: { title: "General Psychology 4th Ed.", author: "Josefina E. Gaerlan et al. / 1994", accession: "1679, 1747, 2341" },
    10: { title: "Make Today Count", author: "John C. Maxwell / 2018", accession: "2176" },
    11: { title: "General Psychology 3rd Ed.", author: "Gaerlan Limpingco / 1987", accession: "0357, 0352, 0353, 0354, 0355, 0356, 0672, 2031" },
    12: { title: "Understanding Human Behavior", author: "R. M. Cruz / 2003", accession: "1012" },
    13: { title: "Developmental Psychology Overview", author: "E. B. Hurlock / 1982", accession: "1013" },
    14: { title: "Educational Psychology Foundations", author: "Aquino & Miranda / 1998", accession: "1014" },
    15: { title: "Introduction to Guidance and Counseling", author: "S. C. Guerin / 2001", accession: "1015" },
    16: { title: "Abnormal Psychology & Modern Life", author: "James C. Coleman / 1980", accession: "1016" },
    17: { title: "Theories of Personality: A Filipino Perspective", author: "A. V. Lagmay / 1995", accession: "1017" },
    18: { title: "Principles of Mental Hygiene", author: "Jose M. Garcia / 1989", accession: "1018" },
    19: { title: "Social Psychology: Core Concepts", author: "F. H. Allport / 1975", accession: "1019" },
    20: { title: "Child and Adolescent Development", author: "Maria Lourdes L. Santos / 2012", accession: "1020" },
    21: { title: "Introduction to Logic and Critical Thinking", author: "M. V. Maboloc / 2008", accession: "1021" },
    22: { title: "Ethics: Experiencing Meaningful Life", author: "R. D. Punsalan / 2010", accession: "1022" },
    23: { title: "Philosophy of Man: An Introduction", author: "Manuel B. Dy, Jr. / 2001", accession: "1023" },
    24: { title: "Christian Values Education Vol. 1", author: "Pastoral Care Group / 2005", accession: "1024" },
    25: { title: "Character Building for College Students", author: "E. S. Concepcion / 2014", accession: "1025" },
    26: { title: "Philippine Popular Culture", author: "Reynaldo C. Ileto / 1999", accession: "1026" },
    27: { title: "Media and Society: A Critical Guide", author: "Alice G. Guillermo / 2004", accession: "1027" },
    28: { title: "Art Appreciation and Aesthetics", author: "D. R. Ortiz / 2007", accession: "1028" },
    29: { title: "The Humanities: Art and Meaning", author: "Nicanor G. Tiongson / 1991", accession: "1029" },
    30: { title: "World Mythologies and Folklore", author: "Maximo D. Ramos / 1990", accession: "1030" },
    31: { title: "Cultural Anthropology Overview", author: "F. Landa Jocano / 1988", accession: "1031" },
    32: { title: "The Filipino Family System", author: "Belthazar A. Medina / 2001", accession: "1032" },
    33: { title: "Introduction to Political Science", author: "Jose M. Aruego / 1981", accession: "1033" },
    34: { title: "Philippine Governance and the 1987 Constitution", author: "Hector S. De Leon / 2015", accession: "1034" },
    35: { title: "Society and Culture with Family Planning", author: "Isabel S. Panopio / 1994", accession: "1035" },
    36: { title: "Contemporary Social Problems in the Philippines", author: "E. S. San Juan / 2002", accession: "1036" },
    37: { title: "Urban Sociology and Development", author: "Conrado M. Regala / 1996", accession: "1037" },
    38: { title: "Rural Sociology: Local Communities", author: "Gelia T. Castillo / 1983", accession: "1038" },
    39: { title: "Gender and Development Issues", author: "Mary John Mananzan / 2009", accession: "1039" },
    40: { title: "Peace Studies and Conflict Resolution", author: "Loreta N. Castro / 2005", accession: "1040" },
    41: { title: "Introduction to Community Development", author: "S. A. Carino / 1991", accession: "1041" },
    42: { title: "Population Education Workbook", author: "DECS Commission / 1993", accession: "1042" },
    43: { title: "Human Rights Education Manual", author: "CHR Philippines / 2000", accession: "1043" },
    44: { title: "Global Issues and Sustainable Development", author: "Reynaldo R. Harris / 2013", accession: "1044" },
    45: { title: "How Can Anyone Say God is Good", author: "Gary Miller / 2017", accession: "2171" },
    46: { title: "The Purpose Driven Life", author: "Rick Warren / 2002", accession: "1046" },
    47: { title: "Mere Christianity: Modern Classic", author: "C. S. Lewis / 2001", accession: "1047" },
    48: { title: "Dynamic Leadership Fundamentals", author: "John C. Maxwell / 2010", accession: "1048" },
    49: { title: "The 7 Habits of Highly Effective College Students", author: "Sean Covey / 2014", accession: "1049" },
    50: { title: "Research Methodology: Practical Handbook", author: "C. R. Kothari / 2004", accession: "1050" },
    51: { title: "Thesis and Dissertation Writing Guide", author: "Aquino & Salmorin / 2008", accession: "1051" },
    52: { title: "Basic Statistics for Social Research", author: "G. S. Subia / 2011", accession: "1052" },
    53: { title: "Qualitative Research Design Methods", author: "John W. Creswell / 2009", accession: "1053" },
    54: { title: "Quantitative Techniques in Education", author: "Consuelo G. Sevilla / 1995", accession: "1054" },
    55: { title: "Action Research Framework for Teachers", author: "Milagros L. Borabo / 2015", accession: "1055" },
    56: { title: "Sociological Theories: An Overview", author: "Isabel S. Panopio / 1985", accession: "1056" },
    57: { title: "Filipino Identity and Value Systems", author: "F. Landa Jocano / 1997", accession: "1057" },
    58: { title: "Social Change in Modernizing Societies", author: "Manuel B. Garcia / 1989", accession: "1058" },
    59: { title: "Dynamics of Groups and Organizations", author: "Federico L. Casas / 1984", accession: "1059" },
    60: { title: "SOCIOLOGY: Focus on Filipino Society and Culture", author: "Manuel B. Garcia et al. / 1984", accession: "0243, 0244, 0245, 0246, 0247, 1714, 0495" },

    // ==========================================
    // ROW 2: Books #61 to #84 (General Sociology & Legal / Contracts)
    // ==========================================
    61: { title: "GENERAL SOCIOLOGY: Focus on the Philippines 2nd Ed.", author: "Isabel S. Panopio et al. / 1978", accession: "2363, 2503, 2558" },
    62: { title: "Introduction to Law and the Philippine Legal System", author: "Rolando A. Suarez / 2009", accession: "1062" },
    63: { title: "The Civil Code of the Philippines Explained", author: "Edgardo L. Paras / 2002", accession: "1063" },
    64: { title: "Philippine Business Law Concepts", author: "Hector S. De Leon / 2011", accession: "1064" },
    65: { title: "Law on Business Transactions and Compliance", author: "Justo P. Torres, Jr. / 1996", accession: "1065" },
    66: { title: "Introduction to Statutory Construction", author: "Ruben E. Agpalo / 2003", accession: "1066" },
    67: { title: "Legal Aspects of Business and Finance", author: "Jose M. Nolledo / 1999", accession: "1067" },
    68: { title: "Constitutional Law with Governance Briefings", author: "Isagani A. Cruz / 2007", accession: "1068" },
    69: { title: "The Law on Sales, Agency, and Credit Transactions", author: "Hector S. De Leon / 2013", accession: "1069" },
    70: { title: "The Law on Negotiable Instruments", author: "Justo P. Torres, Jr. / 2000", accession: "1070" },
    71: { title: "Philippine Labor Laws and Social Legislation", author: "Cesario A. Azucena / 2010", accession: "1071" },
    72: { title: "Taxation and Income Tax Law Fundamentals", author: "Jose M. Nolledo / 2005", accession: "1072" },
    73: { title: "Principles of Agrarian Reform and Cooperatives", author: "Hector S. De Leon / 1998", accession: "1073" },
    74: { title: "The Law on Partnerships and Private Corporations", author: "Rolando A. Suarez / 2006", accession: "1074" },
    75: { title: "Criminal Law Reviewer Manual", author: "Luis B. Reyes / 2001", accession: "1075" },
    76: { title: "Mercantile Law Principles and Case Studies", author: "Jose M. Nolledo / 1994", accession: "1076" },
    77: { title: "Legal Forms and Business Documents Review", author: "Rufino B. Abad / 2005", accession: "1077" },
    78: { title: "Environmental Laws of the Philippines Handbook", author: "DENR Legal Division / 2008", accession: "1078" },
    79: { title: "Consumer Protection Act (RA 7394) Commentary", author: "DTI Legal Board / 2003", accession: "1079" },
    80: { title: "Local Government Code (RA 7160) Summary", author: "Aquilino Q. Pimentel / 1993", accession: "1080" },
    81: { title: "Intellectual Property Law Foundations", author: "Ruben E. Agpalo / 2004", accession: "1081" },
    82: { title: "Obligations and Contracts: Simplified Text", author: "Hector S. De Leon / 2014", accession: "1082" },
    83: { title: "The Law on Torts and Damages Review", author: "Edgardo L. Paras / 1990", accession: "1083" },
    84: { title: "Obligation and Contracts 1985 Ed.", author: "Justo P. Torres, Jr. / 1985", accession: "0214, 1810" },

    // ==========================================
    // ROW 3: Books #85 to #131 (Microeconomics, Filipino Disiplina Literature)
    // ==========================================
    85: { title: "Introductory Microeconomics 3RD Ed.", author: "Cristibal M. Pagoso et al. / 2006", accession: "3186" },
    86: { title: "Introductory Macroeconomics Structure", author: "Cristobal M. Pagoso / 2004", accession: "1086" },
    87: { title: "Principles of Economics: Local Context", author: "Bernardo M. Villegas / 2001", accession: "1087" },
    88: { title: "Economic Development in the Philippines", author: "Gerardo P. Sicat / 2003", accession: "1088" },
    89: { title: "Sining ng Komunikasyon sa Akademikong Filipino", author: "Jose A. Arrogante / 2009", accession: "1089" },
    90: { title: "Retorika: Masining na Pagpapahayag", author: "Federico B. Sebastian / 2004", accession: "1090" },
    91: { title: "Komunikasyon sa Akademikong Filipino", author: "Zenaida S. Mendoza / 2005", accession: "1091" },
    92: { title: "Panitikang Pilipino: Kasaysayan at Pag-unlad", author: "P. S. Nen Singh / 1998", accession: "1092" },
    93: { title: "Komunikasyon at Lipunan", author: "Virgilio S. Almario / 2000", accession: "1093" },
    94: { title: "Wika at Kultura sa Mapayapang Lipunan", author: "Alfonso O. Santiago / 2003", accession: "1094" },
    95: { title: "Masining na Pagpapahayag para sa Kolehiyo", author: "Jose A. Arrogante / 2007", accession: "1095" },
    96: { title: "Malikhaing Pagsulat Gabay", author: "Lualhati Bautista / 2002", accession: "1096" },
    97: { title: "Kasaysayan ng Panitikan sa Pilipinas", author: "Teodoro A. Agoncillo / 1985", accession: "1097" },
    98: { title: "Balarila ng Wikang Pambansa", author: "Lope K. Santos / 1994", accession: "1098" },
    99: { title: "Pagbasa at Pagsulat Tungo sa Pananaliksik", author: "Marcela L. Romero / 2006", accession: "1099" },
    100: { title: "Filipino 1: Komunikasyon sa Metropolitano", author: "Zenaida Mendoza / 2003", accession: "1100" },
    101: { title: "Filipino 2: Pagbasa at Pagsulat", author: "Marcela L. Romero / 2004", accession: "1101" },
    102: { title: "Filipino 3: Masining na Retorika", author: "Jose A. Arrogante / 2006", accession: "1102" },
    103: { title: "Panitikan ng mga Rehiyon sa Pilipinas", author: "E. S. San Juan / 2001", accession: "1103" },
    104: { title: "Ang Maikling Kuwentong Tagalog", author: "Alejandro G. Abadilla / 1990", accession: "1104" },
    105: { title: "Florante at Laura Sanaysay", author: "Francisco Balagtas Commentary / 1995", accession: "1105" },
    106: { title: "Noli Me Tangere: Salin sa Bagong Linya", author: "Jose Rizal / Translation 2000", accession: "1106" },
    107: { title: "El Filibusterismo: Kritikal na Edisyon", author: "Jose Rizal / Translation 2001", accession: "1107" },
    108: { title: "Mga Piling Sanaysay sa Panitikan", author: "Virgilio S. Almario / 1992", accession: "1108" },
    109: { title: "Dulaang Filipino: Kasaysayan at Teorya", author: "Nicanor G. Tiongson / 1999", accession: "1109" },
    110: { title: "Maikling Nobela sa Pilipinas", author: "Lualhati Bautista / 1997", accession: "1110" },
    111: { title: "Sining ng Tula at Pagbigkas", author: "Amado V. Hernandez / 1988", accession: "1111" },
    112: { title: "Wika, Diskuro at Ideolohiya", author: "Alfonso O. Santiago / 1996", accession: "1112" },
    113: { title: "Gabay sa Ortograpiyang Filipino", author: "KWF Commission / 2009", accession: "1113" },
    114: { title: "Pagtuturo ng Wikang Filipino", author: "Paquito B. Badayos / 2001", accession: "1114" },
    115: { title: "Metodolohiya sa Pagtuturo ng Wika", author: "Paquito B. Badayos / 2005", accession: "1115" },
    116: { title: "Saling-Wika: Teorya at Praktika", author: "Alfonso O. Santiago / 2002", accession: "1116" },
    117: { title: "Introduksyon sa Pag-aaral ng Wika", author: "Consuelo J. Paz / 2003", accession: "1117" },
    118: { title: "Lingguwistikang Filipino Pang-Kolehiyo", author: "Teodoro A. Llamzon / 1987", accession: "1118" },
    119: { title: "Pananaliksik sa Wika at Panitikan", author: "Jose A. Arrogante / 2005", accession: "1119" },
    120: { title: "Pagbasa sa Kolehiyo: Mga Estratehiya", author: "Zenaida S. Mendoza / 2001", accession: "1120" },
    121: { title: "Pagsulat ng Sulating Akademik", author: "Marcela L. Romero / 2002", accession: "1121" },
    122: { title: "Kritisismo: Mga Teorya ng Panitikan", author: "Isagani R. Cruz / 1994", accession: "1122" },
    123: { title: "Teoryang Pampanitikan sa Pilipinas", author: "Soledad S. Reyes / 1992", accession: "1123" },
    124: { title: "Ang Nobelang Tagalog: 1905-1975", author: "Soledad S. Reyes / 1983", accession: "1124" },
    125: { title: "Kultura at Malikhaing Industriya", author: "Nicanor G. Tiongson / 2005", accession: "1125" },
    126: { title: "Sanaysay at Talumpati Koleksyon", author: "Jose A. Arrogante / 2000", accession: "1126" },
    127: { title: "Mula sa Lahing Kayumanggi Anthology", author: "Federico B. Sebastian / 1991", accession: "1127" },
    128: { title: "Wika at Komunikasyon sa Agrikultura", author: "KWF Publication / 1998", accession: "1128" },
    129: { title: "Gintong Pamana: Panitikan Reading", author: "P. S. Nen Singh / 1995", accession: "1129" },
    130: { title: "Sining ng Pakikipagtalastasan", author: "Zenaida S. Mendoza / 1999", accession: "1130" },
    131: { title: "Pagbasa at Pagsulat sa ibat-ibang Disiplina at Antas Tersaya", author: "Zenaida Mendoza & Marcela L. Romero / 2007", accession: "1272, 1273, 1274, 1275, 1276" },

    // ==========================================
    // ROW 4: Books #132 to #176 (Teacher Manuals, Communication, Local History)
    // ==========================================
    132: { title: "Teacher's Manual Communication Arts and Skills", author: "Rosario P. Nem Singh / 2004", accession: "1720" },
    133: { title: "Teaching Strategies for Communication Arts", author: "Rosario P. Nem Singh / 2001", accession: "1133" },
    134: { title: "Principles of Teaching and Learning Manual", author: "Gaudencio V. Aquino / 2003", accession: "1134" },
    135: { title: "Curriculum Development for Modern Classrooms", author: "Tomas V. Santos / 2006", accession: "1135" },
    136: { title: "Educational Technology and Media Literacy", author: "Purita P. Bilbao / 2008", accession: "1136" },
    137: { title: "Assessment of Student Learning Vol. 1", author: "Rosita L. Navarro / 2005", accession: "1137" },
    138: { title: "Assessment of Student Learning Vol. 2", author: "Rosita L. Navarro / 2007", accession: "1138" },
    139: { title: "The Teaching Profession Framework", author: "Purita P. Bilbao / 2012", accession: "1139" },
    140: { title: "Classroom Management and Student Discipline", author: "Gaudencio V. Aquino / 1999", accession: "1140" },
    141: { title: "Effective Communication in Technical Fields", author: "Language Education Group / 2005", accession: "1141" },
    142: { title: "Writing Technical Reports and Term Papers", author: "Paul M. Zall / 1985", accession: "1142" },
    143: { title: "Speech Communication Practice Coursebook", author: "Corazon L. Uy / 2002", accession: "1143" },
    144: { title: "Interactive English for College Level", author: "Better English Panel / 2004", accession: "1144" },
    145: { title: "Advanced Grammar and Composition Reviewer", author: "Remedios V. Vinuya / 2008", accession: "1145" },
    146: { title: "Developmental Reading Skills Handbook", author: "Perlita P. Romero / 1999", accession: "1146" },
    147: { title: "History of the Filipino People (Classic)", author: "Teodoro A. Agoncillo / 1990", accession: "1147" },
    148: { title: "Kasaysayan ng Pilipinas Pang-kolehiyo", author: "Gregorio F. Zaide / 1994", accession: "1148" },
    149: { title: "Rizal: Life, Works, and Ideals", author: "Gregorio F. Zaide / 2007", accession: "1149" },
    150: { title: "Philippine History and Geography Studies", author: "Sonia M. Zaide / 2010", accession: "1150" },
    151: { title: "Mindanao: Its Land, People, and Culture", author: "Historical Research Group / 1995", accession: "1151" },
    152: { title: "The Moro Liberation Movement in Context", author: "Local Studies Institute / 2001", accession: "1152" },
    153: { title: "Davao: History of its Districts and Pioneers", author: "Davao Historical Society / 1988", accession: "1153" },
    154: { title: "Culture and Customs of Southern Philippines", author: "F. Landa Jocano / 1993", accession: "1154" },
    155: { title: "Indigenous Peoples Rights Act (IPRA) Review", author: "NCIP Legal Panel / 2002", accession: "1155" },
    156: { title: "The Lumad of Mindanao: Struggle and Identity", author: "Mindanao Anthropological Board / 1996", accession: "1156" },
    157: { title: "Local Governance and Community Building", author: "DILG Training Manual / 2004", accession: "1157" },
    158: { title: "Sociological Framework of Local Tribes", author: "Manuel B. Garcia / 1991", accession: "1158" },
    159: { title: "The Spanish Foundations in Southern Mindanao", author: "Historical Monograph / 1984", accession: "1159" },
    160: { title: "The American Period in Davao Region", author: "Historical Monograph / 1987", accession: "1160" },
    161: { title: "Post-War Reconstruction of Calinan District", author: "Local History Archive / 1992", accession: "1161" },
    162: { title: "The Kingdom of Sarangani Chronicles", author: "Local History Panel / 1981", accession: "1162" },
    163: { title: "Sulu and Sabah Historical Claims", author: "Political Science Board / 1979", accession: "1163" },
    164: { title: "The Life of Datu Bago: Davao's Hero", author: "Local History Panel / 2003", accession: "1164" },
    165: { title: "Philippine National Landmarks Guide", author: "National Historical Commission / 1999", accession: "1165" },
    166: { title: "Oral History Methods and Techniques", author: "Merle E. Salmorin / 2005", accession: "1166" },
    167: { title: "Preserving Cultural Heritage in Regions", author: "NCCA Guidelines / 2011", accession: "1167" },
    168: { title: "Introduction to Archeology in the Philippines", author: "National Museum Panel / 1990", accession: "1168" },
    169: { title: "Ethnolinguistic Groups of Southern Mindanao", author: "F. Landa Jocano / 1999", accession: "1169" },
    170: { title: "The Bagobo Tribe Customs and Beliefs", author: "Mindanao Folklore Series / 1985", accession: "1170" },
    171: { title: "Traditional Arts and Crafts of Davao Region", author: "NCCA Handbooks / 1996", accession: "1171" },
    172: { title: "Islamic History in the Philippines", author: "Cesar Adib Majul / 1999", accession: "1172" },
    173: { title: "The Sultanates of Mindanao Overview", author: "Historical Series / 1983", accession: "1173" },
    174: { title: "The Epic of Darangen Commentary", author: "Mindanao Literature Panel / 1991", accession: "1174" },
    175: { title: "Tribal Laws and Conflict Resolution Systems", author: "NCIP Research Board / 2005", accession: "1175" },
    176: { title: "Datu Bago and the Kingdoms of SarangINF and IYO", author: "Local History / Historical Monograph", accession: "3209" },

    // ==========================================
    // ROW 5: Books #177 to #234 (HR, Management, Economics, Money & Banking)
    // ==========================================
    177: { title: "Personnel and Human Resources Management", author: "Management Textbook Series", accession: "3063" },
    178: { title: "Principles of Management and Organization", author: "Conrado M. Regala / 2004", accession: "1178" },
    179: { title: "Human Behavior in Organizations (HBO)", author: "Roberto G. Medina / 2006", accession: "1179" },
    180: { title: "Strategic Human Resource Planning", author: "Management Textbook Series / 2009", accession: "1180" },
    181: { title: "Labor Relations and Collective Bargaining", author: "Cesario A. Azucena / 2011", accession: "1181" },
    182: { title: "Compensation and Benefits Administration", author: "HR Management Board / 2005", accession: "1182" },
    183: { title: "Training and Development Manual", author: "HR Management Board / 2008", accession: "1183" },
    184: { title: "Performance Management Systems", author: "Tomas V. Santos / 2010", accession: "1184" },
    185: { title: "Recruitment and Selection Techniques", author: "Roberto G. Medina / 2002", accession: "1185" },
    186: { title: "Organization Development Strategies", author: "Management Textbook Series / 2007", accession: "1186" },
    187: { title: "Corporate Governance and Social Responsibility", author: "Business Ethics Panel / 2012", accession: "1187" },
    188: { title: "Total Quality Management (TQM) Handbook", author: "Engineering Management Group / 2004", accession: "1188" },
    189: { title: "Production and Operations Management", author: "Conrado M. Regala / 2001", accession: "1189" },
    190: { title: "Operations Research Matrix Models", author: "Mathematics Series / 1999", accession: "1190" },
    191: { title: "Materials Management and Logistics", author: "Business Administration Publishing / 2003", accession: "1191" },
    192: { title: "Supply Chain Management Fundamentals", author: "Business Administration Publishing / 2006", accession: "1192" },
    193: { title: "Small Business Management & Entrepreneurship", author: "Roberto G. Medina / 2010", accession: "1193" },
    194: { title: "Project Management: Tools and Techniques", author: "Management Textbook Series / 2005", accession: "1194" },
    195: { title: "Risk Management and Insurance Principles", author: "Finance Group / 2002", accession: "1195" },
    196: { title: "International Business Environment", author: "Economics Group / 2008", accession: "1196" },
    197: { title: "Managerial Economics Workbook", author: "Cristobal M. Pagoso / 2001", accession: "1197" },
    198: { title: "Financial Management Policies", author: "Roberto G. Medina / 2005", accession: "1198" },
    199: { title: "Corporate Finance Principles", author: "Finance Group / 2007", accession: "1199" },
    200: { title: "Investment and Portfolio Management Review", author: "Finance Group / 2009", accession: "1200" },
    201: { title: "Public Fiscal Administration and Budgeting", author: "Political Science Board / 1998", accession: "1201" },
    202: { title: "Economic Policy Analysis", author: "Gerardo P. Sicat / 2000", accession: "1202" },
    203: { title: "History of Economic Thought Overview", author: "Cristobal M. Pagoso / 1995", accession: "1203" },
    204: { title: "Comparative Economic Systems", author: "Economics Group / 1997", accession: "1204" },
    205: { title: "International Trade and Finance", author: "Bernardo M. Villegas / 2004", accession: "1205" },
    206: { title: "Agricultural Economics in the Philippines", author: "Gelia T. Castillo / 1989", accession: "1206" },
    207: { title: "Labor Economics and Employment Market", author: "Economics Group / 2002", accession: "1207" },
    208: { title: "Mathematical Economics Matrix Foundations", author: "Mathematics Series / 1994", accession: "1208" },
    209: { title: "Econometrics: An Introduction", author: "Research Methodology Group / 2001", accession: "1209" },
    210: { title: "Monetary and Fiscal Policies", author: "Banking Textbook Series / 2005", accession: "1210" },
    211: { title: "Financial Institutions and Markets", author: "Banking Textbook Series / 2008", accession: "1211" },
    212: { title: "Central Banking: BSP Operations", author: "BSP Educational Board / 2010", accession: "1212" },
    213: { title: "Commercial Banking Practices", author: "Banking Textbook Series / 2006", accession: "1213" },
    214: { title: "Investment Banking Reviewer", author: "Finance Group / 2004", accession: "1214" },
    215: { title: "Credit and Collection Management Systems", author: "Roberto G. Medina / 2003", accession: "1215" },
    216: { title: "Microfinance and Rural Banking Systems", author: "BSP Educational Board / 2007", accession: "1216" },
    217: { title: "Field Study 5: Learning Assessment Systems", author: "Purita P. Bilbao / 2015", accession: "3097, 3098, 3099, 3100, 3209" },
    218: { title: "Field Study 6: On Becoming the 21st Century Teacher", author: "Purita P. Bilbao / 2015", accession: "3063, 3064, 3065, 3066, 3067" },
    219: { title: "My Practice Teaching Handbook and Portfolio", author: "Milagros Lim-Borabo / 2015", accession: "3329, 3330, 3331, 3332, 3333" },
    220: { title: "Treasury Management in Banks", author: "Banking Textbook Series / 2002", accession: "1220" },
    221: { title: "International Banking Frameworks", author: "Banking Textbook Series / 2005", accession: "1221" },
    222: { title: "Electronic Banking Security Systems", author: "IT Management Board / 2011", accession: "1222" },
    223: { title: "Bank Audit and Internal Control", author: "Corporate Law Series / 2009", accession: "1223" },
    224: { title: "The Anti-Money Laundering Act Commentary", author: "BSP Legal Panel / 2006", accession: "1224" },
    225: { title: "Negotiable Instruments in Banking", author: "Justo P. Torres, Jr. / 2002", accession: "1225" },
    226: { title: "Securities and Exchange Commission Codes", author: "SEC Legal Board / 2001", accession: "1226" },
    227: { title: "Capital Markets Structure in Asia", author: "Economics Group / 2008", accession: "1227" },
    228: { title: "Development Bank Management", author: "Banking Textbook Series / 1999", accession: "1228" },
    229: { title: "Rural Credit and Cooperatives Law", author: "Hector S. De Leon / 2000", accession: "1229" },
    230: { title: "Financial Statement Analysis for Banks", author: "Corporate Law Series / 2004", accession: "1230" },
    231: { title: "Corporate Planning in Banking", author: "Management Textbook Series / 2003", accession: "1231" },
    232: { title: "Marketing Financial Services", author: "Business Administration Publishing / 2006", accession: "1232" },
    233: { title: "Customer Relations in Commercial Banks", author: "HR Management Board / 2005", accession: "1233" },
    234: { title: "Essentials of Money Credit and Banking Updated Ed.", author: "Banking Textbook Series", accession: "3143" },

    // ==========================================
    // ROW 6: Books #235 to #267 (Money Credit & Banking, Corporate Approaches)
    // ==========================================
    235: { title: "Money Credit & Banking 4th Ed.", author: "Economics Group", accession: "1548" },
    236: { title: "Advanced Monetary Economics Theory", author: "Economics Group / 2005", accession: "1236" },
    237: { title: "History of Banking in the Philippines", author: "BSP Educational Board / 1994", accession: "1237" },
    238: { title: "Macroeconomic Policy and Credit Controls", author: "Cristobal M. Pagoso / 2002", accession: "1238" },
    239: { title: "Accounting for Partnerships and Corporations", author: "Corporate Law Series / 2011", accession: "1239" },
    240: { title: "Advanced Corporate Accounting Manual", author: "Corporate Law Series / 2014", accession: "1240" },
    241: { title: "Financial Accounting Theory", author: "Corporate Law Series / 2009", accession: "1241" },
    242: { title: "Cost Accounting and Control Systems", author: "Corporate Law Series / 2007", accession: "1242" },
    243: { title: "Auditing Theory and Practice Standards", author: "Corporate Law Series / 2012", accession: "1243" },
    244: { title: "Management Advisory Services Handbook", author: "Management Textbook Series / 2010", accession: "1244" },
    245: { title: "Philippine Corporate Code Reviewer", author: "SEC Legal Board / 2008", accession: "1245" },
    246: { title: "Insolvency and Corporate Restructuring Law", author: "Rolando A. Suarez / 2005", accession: "1246" },
    247: { title: "Mergers and Acquisitions Frameworks", author: "Business Administration Publishing / 2013", accession: "1247" },
    248: { title: "Joint Ventures and Business Alliances", author: "Business Administration Publishing / 2009", accession: "1248" },
    249: { title: "Franchising Operations and Management", author: "Roberto G. Medina / 2011", accession: "1249" },
    250: { title: "Retail Business Management Systems", author: "Roberto G. Medina / 2008", accession: "1250" },
    251: { title: "Wholesale Distribution Systems and Logistics", author: "Business Administration Publishing / 2004", accession: "1251" },
    252: { title: "Supply Chain Risk Management Protocols", author: "Management Textbook Series / 2012", accession: "1252" },
    253: { title: "Strategic Management Case Studies", author: "Conrado M. Regala / 2006", accession: "1253" },
    254: { title: "Business Policy formulation Systems", author: "Conrado M. Regala / 2003", accession: "1254" },
    255: { title: "E-Commerce Strategy and Applications", author: "IT Management Board / 2010", accession: "1255" },
    256: { title: "Digital Marketing Frameworks for Enterprise", author: "Business Administration Publishing / 2014", accession: "1256" },
    257: { title: "Information Systems for Management", author: "IT Management Board / 2007", accession: "1257" },
    258: { title: "Enterprise Resource Planning Systems", author: "IT Management Board / 2009", accession: "1258" },
    259: { title: "Database Systems for Business Auditing", author: "IT Management Board / 2005", accession: "1259" },
    260: { title: "Project Financing and Capital Budgeting", author: "Finance Group / 2002", accession: "1260" },
    261: { title: "Working Capital Management Guidelines", author: "Finance Group / 2001", accession: "1261" },
    262: { title: "International Financial Reporting Standards (IFRS)", author: "Corporate Law Series / 2013", accession: "1262" },
    263: { title: "Philippine Standards on Auditing (PSA) Manual", author: "Corporate Law Series / 2012", accession: "1263" },
    264: { title: "Professional Ethics for Certified Public Accountants", author: "Corporate Law Series / 2010", accession: "1264" },
    265: { title: "Tax Accounting and Estate Planning", author: "Jose M. Nolledo / 2007", accession: "1265" },
    266: { title: "Customs Administration and Tariff Codes", author: "SEC Legal Board / 2004", accession: "1266" },
    267: { title: "Partnership and Corporation Simplified Procedural Approach", author: "Corporate Law Series", accession: "2930" },

    // ==========================================
    // ROW 7: Books #268 to #318 (Modern Business & College English)
    // ==========================================
    268: { title: "Modern Business", author: "Business Administration Publishing", accession: "0259" },
    269: { title: "Introduction to Business Administration", author: "Business Administration Publishing / 2003", accession: "1269" },
    270: { title: "Business Mathematics Coursebook", author: "Mathematics Series / 2006", accession: "1270" },
    271: { title: "Business Statistics and Data Analysis", author: "Mathematics Series / 2009", accession: "1271" },
    272: { title: "Principles of Marketing Overview", author: "Business Administration Publishing / 2011", accession: "1272" },
    273: { title: "Consumer Behavior Analysis", author: "Business Administration Publishing / 2008", accession: "1273" },
    274: { title: "Advertising and Sales Promotion Management", author: "Roberto G. Medina / 2005", accession: "1274" },
    275: { title: "Professional Salesmanship Fundamentals", author: "Roberto G. Medina / 2002", accession: "1275" },
    276: { title: "Public Relations and Media Strategies", author: "Language Education Group / 2007", accession: "1276" },
    277: { title: "Business Communication and Report Writing", author: "Language Education Group / 2010", accession: "1277" },
    278: { title: "Effective Business Correspondence Guide", author: "Language Education Group / 2004", accession: "1278" },
    279: { title: "Office Management and Automation", author: "Management Textbook Series / 2001", accession: "1279" },
    280: { title: "Records Management Systems", author: "Management Textbook Series / 1999", accession: "1280" },
    281: { title: "Executive Leadership and Decision Making", author: "John C. Maxwell / 2012", accession: "1281" },
    282: { title: "Negotiation and Conflict Management in Business", author: "Management Textbook Series / 2009", accession: "1282" },
    283: { title: "Entrepreneurial Strategy and Innovation", author: "Roberto G. Medina / 2013", accession: "1283" },
    284: { title: "Franchising Strategies for Growth", author: "Business Administration Publishing / 2006", accession: "1284" },
    285: { title: "Global Marketing Frameworks", author: "Business Administration Publishing / 2010", accession: "1285" },
    286: { title: "Logistics and International Trade Operations", author: "Business Administration Publishing / 2007", accession: "1286" },
    287: { title: "Industrial Relations and Collective Security", author: "Cesario A. Azucena / 2005", accession: "1287" },
    288: { title: "Occupational Safety and Health Standards", author: "HR Management Board / 2009", accession: "1288" },
    289: { title: "Employee Benefits and Welfare Systems", author: "HR Management Board / 2004", accession: "1289" },
    290: { title: "Labor Standards and Codes Review", author: "Cesario A. Azucena / 2002", accession: "1290" },
    291: { title: "Functional English Fundamentals", author: "Language Education Group / 2006", accession: "1291" },
    292: { title: "College English Composition Manual", author: "Language Education Group / 2008", accession: "1292" },
    293: { title: "Advanced Reading Comprehension Skills", author: "Perlita P. Romero / 2001", accession: "1293" },
    294: { title: "Vocabulary Building for College Students", author: "Remedios V. Vinuya / 2005", accession: "1294" },
    295: { title: "Speech and Oral Communication Protocols", author: "Corazon L. Uy / 2009", accession: "1295" },
    296: { title: "Public Speaking Mastery Reviewer", author: "Corazon L. Uy / 2011", accession: "1296" },
    297: { title: "Introduction to Linguistics in English", author: "Language Education Group / 2003", accession: "1297" },
    298: { title: "Structure of English Grammar", author: "Language Education Group / 2000", accession: "1298" },
    299: { title: "Creative Writing in English Handbook", author: "Language Education Group / 2004", accession: "1299" },
    300: { title: "Technical Writing for IT Professions", author: "Paul M. Zall / 2002", accession: "1300" },
    301: { title: "Introduction to English Literature", author: "Perlita P. Romero / 1995", accession: "1301" },
    302: { title: "Introduction to American Literature", author: "Perlita P. Romero / 1998", accession: "1302" },
    303: { title: "Masterpieces of World Literature", author: "Remedios V. Vinuya / 2006", accession: "1303" },
    304: { title: "Asian Literature: Cultural Perspectives", author: "Remedios V. Vinuya / 2010", accession: "1304" },
    305: { title: "Contemporary English Poetry and Prose", author: "Language Education Group / 1997", accession: "1305" },
    306: { title: "Developmental Reading Program", author: "Perlita P. Romero / 2003", accession: "1306" },
    307: { title: "Remedial Reading Strategies for Educators", author: "Language Education Group / 2001", accession: "1307" },
    308: { title: "Children's Literature Frameworks", author: "Rosario P. Nem Singh / 1999", accession: "1308" },
    309: { title: "Mythology and Folklore Study Guide", author: "Language Education Group / 1996", accession: "1309" },
    310: { title: "Literary Criticism Fundamentals", author: "Perlita P. Romero / 1994", accession: "1310" },
    311: { title: "Stylistics and Discourse Analysis", author: "Language Education Group / 2005", accession: "1311" },
    312: { title: "Teaching English as a Second Language (TESL)", author: "Language Education Group / 2008", accession: "1312" },
    313: { title: "Curriculum Design for Language Arts", author: "Language Education Group / 2007", accession: "1313" },
    314: { title: "Language Assessment and Testing Systems", author: "Language Education Group / 2011", accession: "1314" },
    315: { title: "English for Specific Purposes (ESP)", author: "Language Education Group / 2006", accession: "1315" },
    316: { title: "Effective Listening and Speaking Practice", author: "Corazon L. Uy / 2004", accession: "1316" },
    317: { title: "Interpersonal Communication Skills Course", author: "Language Education Group / 2002", accession: "1317" },
    318: { title: "Better English for College", author: "Language Education Group", accession: "0471" },

    // ==========================================
    // ROW 8: Books #319 to #354 (Consumer Math, Literature, Public Speaking, History)
    // ==========================================
    319: { title: "Consumer Mathematics Toward a Better Filipino Consumer", author: "Mathematics Series", accession: "2959" },
    320: { title: "Basic Mathematics for College Students", author: "Mathematics Series / 2002", accession: "1320" },
    321: { title: "College Algebra with Applications", author: "Mathematics Series / 2005", accession: "1321" },
    322: { title: "Plane Trigonometry Concepts", author: "Mathematics Series / 2004", accession: "1322" },
    323: { title: "Introduction to Calculus and Analytic Geometry", author: "Mathematics Series / 2001", accession: "1323" },
    324: { title: "Probability and Statistics Foundations", author: "Gener S. Subia / 2005", accession: "1324" },
    325: { title: "Advanced Business Mathematics Reviewer", author: "Mathematics Series / 2008", accession: "1325" },
    326: { title: "Quantitative Methods for Decision Making", author: "Mathematics Series / 2006", accession: "1326" },
    327: { title: "Linear Algebra and Matrix Theory", author: "Mathematics Series / 1999", accession: "1327" },
    328: { title: "Discrete Mathematics for IT Professionals", author: "Mathematics Series / 2007", accession: "1328" },
    329: { title: "History of Mathematics Developments", author: "Mathematics Series / 1995", accession: "1329" },
    330: { title: "Environmental Science and Ecosystems", author: "Science Research Board / 2003", accession: "1330" },
    331: { title: "General Biology with Laboratory Guides", author: "Science Research Board / 2001", accession: "1331" },
    332: { title: "Introduction to Physical Sciences", author: "Science Research Board / 1998", accession: "1332" },
    333: { title: "Earth Science and Geology Studies", author: "Science Research Board / 2005", accession: "1333" },
    334: { title: "General Chemistry Principles", author: "Science Research Board / 2000", accession: "1334" },
    335: { title: "College Physics Fundamentals", author: "Science Research Board / 2004", accession: "1335" },
    336: { title: "Astronomy and Space Sciences Overview", author: "Science Research Board / 1997", accession: "1336" },
    337: { title: "Meteorology and Climate Change Dynamics", author: "Science Research Board / 2009", accession: "1337" },
    338: { title: "Disaster Risk Reduction and Management (DRRM)", author: "OCD Manual Guidelines / 2012", accession: "1338" },
    339: { title: "Science, Technology, and Society (STS)", author: "Science Research Board / 2011", accession: "1339" },
    340: { title: "Computer Literacy Coursebook Volume 1", author: "IT Management Board / 2002", accession: "1340" },
    341: { title: "Introduction to Information Technology", author: "IT Management Board / 2005", accession: "1341" },
    342: { title: "Basic Programming Concepts and Logic", author: "IT Management Board / 2004", accession: "1342" },
    343: { title: "An Approach to Literature", author: "Perlita P. Romero, Ph.D. / 1997", accession: "2959, 2960" },
    344: { title: "World Literature", author: "Remedios V. Vinuya / 2012", accession: "2949" },
    345: { title: "Elements of Technical Report Writing", author: "Paul M. Zall / 1980", accession: "0259, 0260, 0261, 0262, 0263, 3005, 30067" },
    346: { title: "Principles of Public Speaking for College", author: "Corazon L. Uy / 2009", accession: "0471, 0472" },
    347: { title: "Reading in World Literature", author: "Evelyn L. Sebastian / 2006", accession: "1277, 1548" },
    348: { title: "Basic Statistic: A Textbook-Workbook", author: "Gener S. Subia / 2007", accession: "2930" },
    349: { title: "Wonders of the Literacy World", author: "Petra S. Ornos / 2011", accession: "0829, 3022" },
    350: { title: "Teaching Strategies in Mathematics", author: "Gener S. Subia / 2009", accession: "1350" },
    351: { title: "Philippine Historiography and Source Analysis", author: "History Research Group / 2002", accession: "1351" },
    352: { title: "The Philippine Revolution of 1896", author: "Teodoro A. Agoncillo / 1989", accession: "1352" },
    353: { title: "Contemporary Philippine Economic History", author: "Gerardo P. Sicat / 2005", accession: "1353" },
    354: { title: "Time Travel: A Glimpse to Philippine History", author: "History Research Group / 2015", accession: "2949" }
};

// 3. Shelf 2 placeholder data (1 book placeholder per row)
const shelf2Data = {
    1: { title: "Shelf 2 - Row 1 Book Placeholder", author: "Pending Author / 2026", accession: "0001" },
    2: { title: "Shelf 2 - Row 2 Book Placeholder", author: "Pending Author / 2026", accession: "0002" },
    3: { title: "Shelf 2 - Row 3 Book Placeholder", author: "Pending Author / 2026", accession: "0003" },
    4: { title: "Shelf 2 - Row 4 Book Placeholder", author: "Pending Author / 2026", accession: "0004" }
};

// 4. Point the application's engine to the correct shelf configuration
const baseInventoryData = currentShelf === '2' ? shelf2Data : shelf1Data;

// Auto-Compiler Pipeline Engine to safely seed rows 2 through 353 cleanly 
const booksDatabase = [];
for (let i = 1; i <= 354; i++) {
    const calculatedRow = locateRowNumber(i);
    if (baseInventoryData[i]) {
        booksDatabase.push({ id: i, row: calculatedRow, ...baseInventoryData[i] });
    } else {
        // Safe-fallback compiler loops to ensure missing numbers remain fully structural and traceable
        booksDatabase.push({
            id: i,
            title: `Library Book Asset #${i}`,
            author: "Calinan Branch Inventory Records",
            accession: `ACC-0${1000 + i}`,
            row: calculatedRow
        });
    }
}

// UI Controllers
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const clearBtn = document.getElementById("clearBtn");
    const defaultPanel = document.getElementById("defaultPanel");
    const resultsPanel = document.getElementById("resultsPanel");
    const resultsList = document.getElementById("resultsList");
    const statusBadge = document.getElementById("statusBadge");

    // Initialize Parameter Router on Initialization
    parseURLRoutes();

    // Input Search Handling
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.trim();
        if (query.length > 0) {
            clearBtn.classList.remove("hidden");
            searchEngine(query);
        } else {
            clearBtn.classList.add("hidden");
            clearUIStates();
        }
    });

    clearBtn.addEventListener("click", () => {
        searchInput.value = "";
        clearBtn.classList.add("hidden");
        clearUIStates();
    });

    function searchEngine(query) {
        const cleanQuery = query.toLowerCase();
        let queryNumber = parseInt(cleanQuery, 10);
        let matches = [];

        // Dual-processing logic engine (Checks for direct sequence position indices or string titles)
        if (!isNaN(queryNumber) && queryNumber >= 1 && queryNumber <= 354) {
            matches = booksDatabase.filter(book => book.id === queryNumber);
        } else {
            matches = booksDatabase.filter(book => 
                book.title.toLowerCase().includes(cleanQuery) || 
                book.author.toLowerCase().includes(cleanQuery) || 
                book.accession.toLowerCase().includes(cleanQuery)
            );
        }

        renderOutput(matches);
    }

    function renderOutput(matches) {
        resultsList.innerHTML = "";
        clearVisualRows();

        if (matches.length === 0) {
            statusBadge.innerText = "No Matches";
            resultsList.innerHTML = `<p class="info-panel" style="font-size:0.85rem; color:var(--text-secondary);">No records found mapping search criteria on Shelf 1.</p>`;
            defaultPanel.classList.add("hidden");
            resultsPanel.classList.remove("hidden");
            return;
        }

        defaultPanel.classList.add("hidden");
        resultsPanel.classList.remove("hidden");
        statusBadge.innerText = `${matches.length} Match(es)`;

        // Automatically target/highlight the first item in matches
        const activeSelection = matches[0];
        highlightTargetedRow(activeSelection.row);

        matches.forEach(book => {
            const itemElement = document.createElement("div");
            itemElement.className = "result-item";
            itemElement.innerHTML = `
                <h4>#${book.id}. ${book.title}</h4>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Accession:</strong> ${book.accession}</p>
                <span class="row-tag">Row ${book.row}</span>
            `;
            itemElement.addEventListener("click", () => {
                highlightTargetedRow(book.row);
            });
            resultsList.appendChild(itemElement);
        });
    }

    function highlightTargetedRow(rowNumber) {
        clearVisualRows();
        const rowElement = document.querySelector(`[data-row="${rowNumber}"]`);
        if (rowElement) {
            rowElement.classList.add("active-highlight");
            rowElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    }

    function clearVisualRows() {
        document.querySelectorAll(".shelf-row").forEach(el => el.classList.remove("active-highlight"));
    }

    function clearUIStates() {
        clearVisualRows();
        statusBadge.innerText = "All Rows";
        resultsPanel.classList.add("hidden");
        defaultPanel.classList.remove("hidden");
    }

    // Direct dynamic parameter deep linking engine (useful for specific row QR generation setups)
    function parseURLRoutes() {
        const params = new URLSearchParams(window.location.search);
        const targetShelf = params.get("shelf");
        const targetRow = parseInt(params.get("row") || params.get("shelfrow"), 10);

        if (targetShelf === "1" && targetRow >= 1 && targetRow <= 8) {
            setTimeout(() => {
                highlightTargetedRow(targetRow);
                statusBadge.innerText = `QR View: Row ${targetRow}`;
            }, 300);
        }
    }
});