const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");


const data = {
  Nuban: "0082602717",
  AvailableBalance: "0.00",
  BookedBalance: "2,319.30",
  ResponseMessage: null,
  ResponseCode: null,
  statements: [
      {
          TransactionDate: "19 MAY 21",
          TransactionType: "Credit",
          Amount: "5,000.00",
          Remark: "Deposit Cash (Local Currency)- TORKWASE GRACE LUGA",
          Reference: "TT21139B96YC",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "31 MAY 21",
          TransactionType: "Credit",
          Amount: "1.70",
          Remark: "Interest - Capitalise- Credit Interest/  CAPITALISE",
          Reference: "AAACT21151DJ9QPVP3",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "01 JUN 21",
          TransactionType: "Debit",
          Amount: "1,000.00",
          Remark: "Card fee for",
          Reference: "FT211529JY1C\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "01 JUN 21",
          TransactionType: "Debit",
          Amount: "75.00",
          Remark: "VAT on Card fee for",
          Reference: "FT21152KR316\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "15 JUN 21",
          TransactionType: "Debit",
          Amount: "2,100.00",
          Remark: "OTHER BANK TERMINAL -  CHRISTOPHER NGBEDE     BE            BENG",
          Reference: "FT21166N0GL7",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "21 JUN 21",
          TransactionType: "Credit",
          Amount: "10,000.00",
          Remark: "000015689784;E770 TRF FRM PAULINE S EWUES",
          Reference: "FT211721FRTF\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "21 JUN 21",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT211721FRTF",
          Reference: "FT21172TT5K4\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "21 JUN 21",
          TransactionType: "Debit",
          Amount: "100.00",
          Remark: "OTHER BANK TERMINAL -  WT|JOHN NGBEDE CHRISTOPHEWADATA        NG",
          Reference: "FT21172HFJ20\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "21 JUN 21",
          TransactionType: "Debit",
          Amount: "5,000.00",
          Remark: "OTHER BANK TERMINAL -  WT|JOHN NGBEDE CHRISTOPHEWADATA        NG",
          Reference: "FT21172HFJ20\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "21 JUN 21",
          TransactionType: "Debit",
          Amount: "5,100.00",
          Remark: "OTHER BANK TERMINAL -  SUREPADI               AGENT         IMNG",
          Reference: "FT21172VN5CC\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "25 JUN 21",
          TransactionType: "Debit",
          Amount: "1,100.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT21176WFMZM\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "28 JUN 21",
          TransactionType: "Debit",
          Amount: "8.71",
          Remark: "SMS NOTIFICATION CHARGE FOR 2021 MA Y 15TH -14TH JUNE - NGN",
          Reference: "FT211791T4YP\\OTA",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "05 JUL 21",
          TransactionType: "Credit",
          Amount: "5,000.00",
          Remark: "NIP From 00000321070417552100093077 2879 First City Monument Bank PAYRE F:S89744964 SENDER: EDZUWAH PAULINE SEWUESE REMARK: App To Sterlin",
          Reference: "FT21186RSXD4\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "05 JUL 21",
          TransactionType: "Debit",
          Amount: "5,100.00",
          Remark: "OTHER BANK TERMINAL -  SUREPADI               AGENT         IMNG",
          Reference: "FT21186GZ95P\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "15 JUL 21",
          TransactionType: "Credit",
          Amount: "5,000.00",
          Remark: "000016291640;E770 TRF FRM PAULINE S EWUES",
          Reference: "FT21196JTWTR\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "15 JUL 21",
          TransactionType: "Debit",
          Amount: "100.00",
          Remark: "OTHER BANK TERMINAL -  WT|JOHN NGBEDE CHRISTOPHEWADATA        NG",
          Reference: "FT21196299R1\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "15 JUL 21",
          TransactionType: "Debit",
          Amount: "5,000.00",
          Remark: "OTHER BANK TERMINAL -  WT|JOHN NGBEDE CHRISTOPHEWADATA        NG",
          Reference: "FT21196299R1\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "22 JUL 21",
          TransactionType: "Credit",
          Amount: "10,000.00",
          Remark: "000016471547;E770 TRF FRM PAULINE S EWUES",
          Reference: "FT21203W2SD1\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "22 JUL 21",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT21203W2SD1",
          Reference: "FT21203C4VKY\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "22 JUL 21",
          TransactionType: "Debit",
          Amount: "10,000.00",
          Remark: "OTHER BANK TERMINAL -  Wadata QSP ATM3        Makurdi         NG",
          Reference: "FT212031FFWH",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "26 JUL 21",
          TransactionType: "Debit",
          Amount: "17.42",
          Remark: "SMS NOTIFICATION CHARGE FOR 2021 JU NE 15TH -14TH JULY- NGN",
          Reference: "FT21207Y8TKG\\OGB",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "30 JUL 21",
          TransactionType: "Credit",
          Amount: "20,000.00",
          Remark: "000016674498;E770 TRF FRM PAULINE S EWUES",
          Reference: "FT212114ZB01\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "30 JUL 21",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT212114ZB01",
          Reference: "FT212110MQDC\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "30 JUL 21",
          TransactionType: "Debit",
          Amount: "10,000.00",
          Remark: "OTHER BANK TERMINAL -  WADATA  QSP2           Makurdi         NG",
          Reference: "FT212112QRSW",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "30 JUL 21",
          TransactionType: "Debit",
          Amount: "10,000.00",
          Remark: "OTHER BANK TERMINAL -  WADATA  QSP2           Makurdi         NG",
          Reference: "FT21211C3M2P",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "03 AUG 21",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "VERVE CARD MAINTENANCE CHARGE FOR Q 3",
          Reference: "FT21215V7XJL\\OTA",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "03 AUG 21",
          TransactionType: "Debit",
          Amount: "3.75",
          Remark: "VERVE CARD MAINTENANCE VAT FOR Q3",
          Reference: "FT21215RBK9J",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "05 AUG 21",
          TransactionType: "Credit",
          Amount: "5,000.00",
          Remark: "000016875675;E770 TRF FRM PAULINE S EWUES",
          Reference: "FT21217L3NVP\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "05 AUG 21",
          TransactionType: "Debit",
          Amount: "5,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT21217C08YG\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "11 AUG 21",
          TransactionType: "Credit",
          Amount: "10,000.00",
          Remark: "NIP From 00000321081115015600098489 1139 First City Monument Bank PAYRE F:S85843131 SENDER: EDZUWAH PAULINE SEWUESE REMARK: App To Sterlin",
          Reference: "FT21223X8BSD\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "11 AUG 21",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT21223X8BSD",
          Reference: "FT21223QWN8J\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "16 AUG 21",
          TransactionType: "Debit",
          Amount: "10,000.00",
          Remark: "OTHER BANK TERMINAL -  MAKURDI                MAKURDI       MANG",
          Reference: "FT212283137T\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "23 AUG 21",
          TransactionType: "Credit",
          Amount: "15,000.00",
          Remark: "NIP From 00001321082114490200028761 8285 GTBank Plc PAYREF:000287618285 SENDER: EDZUWAH PAULINE SEWUESEEDZ UWAH PAULINE SEWUESE REMARK: U",
          Reference: "FT212355DN4F\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "23 AUG 21",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT212355DN4F",
          Reference: "FT21235YB086\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "23 AUG 21",
          TransactionType: "Debit",
          Amount: "10,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT212353Y6FT\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "25 AUG 21",
          TransactionType: "Debit",
          Amount: "2,100.00",
          Remark: "STERLING BANK TERMINAL -  OPAY DIGITAL SERVICE   DL            LANG",
          Reference: "FT21237PT7WZ",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "30 AUG 21",
          TransactionType: "Debit",
          Amount: "2,100.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT212421PZJV",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "30 AUG 21",
          TransactionType: "Debit",
          Amount: "29.03",
          Remark: "SMS NOTIFICATION CHARGE FOR 2021 JU LY 15TH -14TH AUGUST- NGN",
          Reference: "FT21242H560N\\IKT",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "30 AUG 21",
          TransactionType: "Credit",
          Amount: "10,000.00",
          Remark: "NIP From 00000321083014401700101005 1080 First City Monument Bank PAYRE F:S32541045 SENDER: EDZUWAH PAULINE SEWUESE REMARK: App To Sterlin",
          Reference: "FT21242YGMRB\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "30 AUG 21",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT21242YGMRB",
          Reference: "FT21242GY3JF\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "31 AUG 21",
          TransactionType: "Debit",
          Amount: "2,100.00",
          Remark: "OTHER BANK TERMINAL -  MAKURDI                MAKURDI       MANG",
          Reference: "FT21243FRLF6\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "03 SEP 21",
          TransactionType: "Debit",
          Amount: "2,100.00",
          Remark: "OTHER BANK TERMINAL -  MIKRO PARTNERS         LA            LANG",
          Reference: "FT2124608M7L",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "08 SEP 21",
          TransactionType: "Debit",
          Amount: "2,100.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT21251G2RSK",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "10 SEP 21",
          TransactionType: "Debit",
          Amount: "2,100.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMIT   LA            LANG",
          Reference: "FT21253R8PP7",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "13 SEP 21",
          TransactionType: "Credit",
          Amount: "20,000.00",
          Remark: "NIP From 00001321091215042400032387 0880 GTBank Plc PAYREF:000323870880 SENDER: EDZUWAH PAULINE SEWUESEEDZ UWAH PAULINE SEWUESE REMARK: U",
          Reference: "FT2125632N02\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "13 SEP 21",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT2125632N02",
          Reference: "FT212565BQ7Q\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "13 SEP 21",
          TransactionType: "Debit",
          Amount: "10,100.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT21256MS0MB\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "13 SEP 21",
          TransactionType: "Debit",
          Amount: "3,000.00",
          Remark: "OTHER BANK TERMINAL -  ATM6_12/14 Railway By- Pass Makurdi  BONG",
          Reference: "FT21256QFJNM",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "13 SEP 21",
          TransactionType: "Debit",
          Amount: "3,000.00",
          Remark: "OTHER BANK TERMINAL -  OLADAM GLOBAL MERCHA   BE            BENG",
          Reference: "FT21256QVTNN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "13 SEP 21",
          TransactionType: "Debit",
          Amount: "1,000.00",
          Remark: "OTHER BANK TERMINAL -  ATM5_12/14 Railway By- Pass Makurdi  BONG",
          Reference: "FT21256X1KQ7",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "14 SEP 21",
          TransactionType: "Credit",
          Amount: "22,000.00",
          Remark: "NIP From 10000421091414031610068227 6651 Paycom PAYREF:1000042109141403 16100682276651 SENDER: Uchenna Chri stian Ezike REMARK: Transfer fr",
          Reference: "FT21257Y61NN\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "14 SEP 21",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT21257Y61NN",
          Reference: "FT2125785185\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "14 SEP 21",
          TransactionType: "Debit",
          Amount: "15,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT21257TBQJS\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "14 SEP 21",
          TransactionType: "Debit",
          Amount: "100.00",
          Remark: "OTHER BANK TERMINAL -  WT|CHRISTOPHER JOHN NGBEDMAKURDI       NG",
          Reference: "FT212573NV8P\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "14 SEP 21",
          TransactionType: "Debit",
          Amount: "8,000.00",
          Remark: "OTHER BANK TERMINAL -  WT|CHRISTOPHER JOHN NGBEDMAKURDI       NG",
          Reference: "FT212573NV8P\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "14 SEP 21",
          TransactionType: "Credit",
          Amount: "1,000.00",
          Remark: "NIP From 10000421091415422210068250 1666 Paycom PAYREF:1000042109141542 22100682501666 SENDER: Ngbede John Christopher REMARK: Transfer fr",
          Reference: "FT21257DWTS3\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "15 SEP 21",
          TransactionType: "Debit",
          Amount: "3,000.00",
          Remark: "OTHER BANK TERMINAL -  ATM4_12/14 Railway By- Pass Makurdi  BONG",
          Reference: "FT21258JJKL1",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "15 SEP 21",
          TransactionType: "Debit",
          Amount: "2,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMIT   LA            LANG",
          Reference: "FT21258TKCS0",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "16 SEP 21",
          TransactionType: "Credit",
          Amount: "12,000.00",
          Remark: "NIP From 00001021091520562811130844 4220 Ecobank Bank PAYREF:null SENDE R: CHRISTAIN UCHENNA EZIKE REMARK: REF19FJ5355KXAEN BO CHRISTAIN U",
          Reference: "FT21259XD8C4\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "16 SEP 21",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT21259XD8C4",
          Reference: "FT212597Z8V5\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "16 SEP 21",
          TransactionType: "Debit",
          Amount: "37.63",
          Remark: "OTHER BANK TERMINAL -  WADATA  QSP2           Makurdi         NG",
          Reference: "FT21259S2C86",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "16 SEP 21",
          TransactionType: "Debit",
          Amount: "6,000.00",
          Remark: "OTHER BANK TERMINAL -  WADATA  QSP2           Makurdi         NG",
          Reference: "FT21259S2C86",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "16 SEP 21",
          TransactionType: "Debit",
          Amount: "100.00",
          Remark: "OTHER BANK TERMINAL -  WT|MELCHIZEDEK EASY BANKIMAKURDI       NG",
          Reference: "FT21259MD442\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "16 SEP 21",
          TransactionType: "Debit",
          Amount: "3,000.00",
          Remark: "OTHER BANK TERMINAL -  WT|MELCHIZEDEK EASY BANKIMAKURDI       NG",
          Reference: "FT21259MD442\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "17 SEP 21",
          TransactionType: "Debit",
          Amount: "2,000.00",
          Remark: "OTHER BANK TERMINAL -  CHRISTOPHER NGBEDE     BE            BENG",
          Reference: "FT212602WVGX",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "20 SEP 21",
          TransactionType: "Credit",
          Amount: "4,000.00",
          Remark: "NIP From 00001621091813041500006451 8244 First Bank of Nigeria PAYREF:1 01300005635370431 SENDER: AJANI JIM OH AYINLA REMARK: USSD AJANI JI",
          Reference: "FT21263NQ3HB\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "20 SEP 21",
          TransactionType: "Debit",
          Amount: "4,000.00",
          Remark: "OTHER BANK TERMINAL -  OPAY DIGITAL SERVICE   LA            LANG",
          Reference: "FT212637ZRM3",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "20 SEP 21",
          TransactionType: "Credit",
          Amount: "4,000.00",
          Remark: "NIP From 10000421091818575510069091 1678 Paycom PAYREF:1000042109181857 55100690911678 SENDER: Abdullahi Ib rahim REMARK: Transfer from to",
          Reference: "FT212631X49J\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "20 SEP 21",
          TransactionType: "Debit",
          Amount: "37.63",
          Remark: "OTHER BANK TERMINAL -  Wadata QSP ATM3        Makurdi         NG",
          Reference: "FT2126352JT4",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "20 SEP 21",
          TransactionType: "Debit",
          Amount: "4,000.00",
          Remark: "OTHER BANK TERMINAL -  Wadata QSP ATM3        Makurdi         NG",
          Reference: "FT2126352JT4",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "20 SEP 21",
          TransactionType: "Credit",
          Amount: "10,000.00",
          Remark: "NIP From 00001321092011100300033596 6707 GTBank Plc PAYREF:000335966707 SENDER: EDZUWAH PAULINE SEWUESEEDZ UWAH PAULINE SEWUESE REMARK: U",
          Reference: "FT21263GMLZJ\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "20 SEP 21",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT21263GMLZJ",
          Reference: "FT21263G0NRV\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "20 SEP 21",
          TransactionType: "Debit",
          Amount: "10,100.00",
          Remark: "OTHER BANK TERMINAL -  WT|ANUGA EMMANUEL OWOICHOMAKURDI       NG",
          Reference: "FT21263DNGF1\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "21 SEP 21",
          TransactionType: "Credit",
          Amount: "10,000.00",
          Remark: "NIP From 00000321092110232400104113 9170 First City Monument Bank PAYRE F:S88974918 SENDER: EDZUWAH PAULINE SEWUESE REMARK: App To Sterlin",
          Reference: "FT21264PHDBZ\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "21 SEP 21",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT21264PHDBZ",
          Reference: "FT21264S14GH\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "21 SEP 21",
          TransactionType: "Credit",
          Amount: "3,000.00",
          Remark: "NIP From 10000421092110564410069512 7870 Paycom PAYREF:1000042109211056 44100695127870 SENDER: Uchenna Chri stian Ezike REMARK: Transfer fr",
          Reference: "FT21264K2S2L\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "21 SEP 21",
          TransactionType: "Debit",
          Amount: "3,100.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMIT   LA            LANG",
          Reference: "FT212646VLB2",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "22 SEP 21",
          TransactionType: "Debit",
          Amount: "7,100.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT2126548Q7L\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "23 SEP 21",
          TransactionType: "Credit",
          Amount: "15,000.00",
          Remark: "NIP From 00000421092318175300361381 2244 United Bank for Africa PAYREF: NIPONATM10331184009286003613812244 SENDER: IKENNA KELVIN ONYEALUSI",
          Reference: "FT212666F0F8\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "23 SEP 21",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT212666F0F8",
          Reference: "FT21266JDQK1\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "24 SEP 21",
          TransactionType: "Debit",
          Amount: "37.63",
          Remark: "OTHER BANK TERMINAL -  Wadata QSP ATM3        Makurdi         NG",
          Reference: "FT21267KH3XZ",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "24 SEP 21",
          TransactionType: "Debit",
          Amount: "5,000.00",
          Remark: "OTHER BANK TERMINAL -  Wadata QSP ATM3        Makurdi         NG",
          Reference: "FT21267KH3XZ",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "24 SEP 21",
          TransactionType: "Debit",
          Amount: "37.63",
          Remark: "OTHER BANK TERMINAL -  BENYSTA MFB ATM 1 MAKURDI, BENUE ST  BNNG",
          Reference: "FT21267BBSJB",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "24 SEP 21",
          TransactionType: "Debit",
          Amount: "2,000.00",
          Remark: "OTHER BANK TERMINAL -  BENYSTA MFB ATM 1 MAKURDI, BENUE ST  BNNG",
          Reference: "FT21267BBSJB",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "24 SEP 21",
          TransactionType: "Debit",
          Amount: "37.63",
          Remark: "OTHER BANK TERMINAL -  BENYSTA MFB ATM 1 MAKURDI, BENUE ST  BNNG",
          Reference: "FT21267312XW",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "24 SEP 21",
          TransactionType: "Debit",
          Amount: "2,000.00",
          Remark: "OTHER BANK TERMINAL -  BENYSTA MFB ATM 1 MAKURDI, BENUE ST  BNNG",
          Reference: "FT21267312XW",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "24 SEP 21",
          TransactionType: "Debit",
          Amount: "100.00",
          Remark: "OTHER BANK TERMINAL -  WT|MELCHIZEDEK EASY BANKIMAKURDI       NG",
          Reference: "FT21267DFCGM\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "24 SEP 21",
          TransactionType: "Debit",
          Amount: "8,500.00",
          Remark: "OTHER BANK TERMINAL -  WT|MELCHIZEDEK EASY BANKIMAKURDI       NG",
          Reference: "FT21267DFCGM\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "24 SEP 21",
          TransactionType: "Credit",
          Amount: "2,500.00",
          Remark: "NIP From 10000421092413272510070116 9026 Paycom PAYREF:1000042109241327 25100701169026 SENDER: ADAMA SHAIBU REMARK: Transfer from to TORKW",
          Reference: "FT21267HK18X\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "27 SEP 21",
          TransactionType: "Debit",
          Amount: "55.15",
          Remark: "SMS NOTIFICATION CHARGE FOR 2021 AU GUST 15TH -14TH SEPTEMBER-NGN",
          Reference: "FT21270J6GVY\\HOB",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "27 SEP 21",
          TransactionType: "Debit",
          Amount: "2,100.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT212707M3L3",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "27 SEP 21",
          TransactionType: "Debit",
          Amount: "30.00",
          Remark: "OTHER BANK TERMINAL -  CYCLEL_t1350200208i5952interswitchd eLANG",
          Reference: "FT21270D4GGQ",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "29 SEP 21",
          TransactionType: "Debit",
          Amount: "700.00",
          Remark: "OTHER BANK TERMINAL -  CAPRICORN DIGITAL LI   LA            LANG",
          Reference: "FT21272SR793",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "30 SEP 21",
          TransactionType: "Credit",
          Amount: "30,000.00",
          Remark: "NIP From 10000421093012193410071228 1134 Paycom PAYREF:1000042109301219 34100712281134 SENDER: Ngbede John Christopher REMARK: Transfer fr",
          Reference: "FT21273N01MC\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "30 SEP 21",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT21273N01MC",
          Reference: "FT21273J81X8\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "04 OCT 21",
          TransactionType: "Debit",
          Amount: "20,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT21277P70ZS\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "05 OCT 21",
          TransactionType: "Credit",
          Amount: "10,000.00",
          Remark: "NIP From 00001321100513194800036153 2954 GTBank Plc PAYREF:000361532954 SENDER: EDZUWAH PAULINE SEWUESEEDZ UWAH PAULINE SEWUESE REMARK: U",
          Reference: "FT21278VBQDN\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "05 OCT 21",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT21278VBQDN",
          Reference: "FT21278LQ6VT\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "06 OCT 21",
          TransactionType: "Debit",
          Amount: "5,100.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT21279K5WX0",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "12 OCT 21",
          TransactionType: "Debit",
          Amount: "5,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMIT   LA            LANG",
          Reference: "FT21285Q8Q54",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "14 OCT 21",
          TransactionType: "Debit",
          Amount: "3,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMIT   LA            LANG",
          Reference: "FT21287W53GK",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "18 OCT 21",
          TransactionType: "Debit",
          Amount: "5,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMIT   LA            LANG",
          Reference: "FT21291SR77F",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "21 OCT 21",
          TransactionType: "Debit",
          Amount: "2,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT21294X1JDN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "21 OCT 21",
          TransactionType: "Credit",
          Amount: "20,000.00",
          Remark: "NIP From 00000321102115073400108624 3195 First City Monument Bank PAYRE F:S71293436 SENDER: EDZUWAH PAULINE SEWUESE REMARK: App To Sterlin",
          Reference: "FT21294L9QQ7\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "21 OCT 21",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT21294L9QQ7",
          Reference: "FT212941PM8G\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "22 OCT 21",
          TransactionType: "Debit",
          Amount: "12,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT21295RYJMG\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "25 OCT 21",
          TransactionType: "Debit",
          Amount: "84.17",
          Remark: "SMS NOTIFICATION CHARGE FOR 2021 SE PTEMBER 15TH -14TH OCTOBER - NGN",
          Reference: "FT212989N721\\PHT",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "25 OCT 21",
          TransactionType: "Debit",
          Amount: "5,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT2129840896\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "27 OCT 21",
          TransactionType: "Debit",
          Amount: "2,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT21300W66B0",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "04 NOV 21",
          TransactionType: "Debit",
          Amount: "700.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT213088XS26",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "08 NOV 21",
          TransactionType: "Credit",
          Amount: "10,000.00",
          Remark: "NIP From 00000321110608260000111100 3704 First City Monument Bank PAYRE F:S16858755 SENDER: EDZUWAH PAULINE SEWUESE REMARK: App To Sterlin",
          Reference: "FT21312HVQ7F\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "08 NOV 21",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT21312HVQ7F",
          Reference: "FT213125VY4D\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "08 NOV 21",
          TransactionType: "Debit",
          Amount: "5,100.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT2131252XQH",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "08 NOV 21",
          TransactionType: "Debit",
          Amount: "2,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT21312F379R",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "10 NOV 21",
          TransactionType: "Debit",
          Amount: "2,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT21314MDKTJ",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "12 NOV 21",
          TransactionType: "Credit",
          Amount: "5,000.00",
          Remark: "NIP From 10000421111218061110080093 8233 Paycom PAYREF:1000042111121806 11100800938233 SENDER: fidelis isid ahomhen REMARK: tf",
          Reference: "FT21316Z07JM\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "15 NOV 21",
          TransactionType: "Credit",
          Amount: "10,000.00",
          Remark: "NIP From 00000321111312023100112258 4880 First City Monument Bank PAYRE F:S40750057 SENDER: EDZUWAH PAULINE SEWUESE REMARK: App To Sterlin",
          Reference: "FT21319HVGQN\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "15 NOV 21",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT21319HVGQN",
          Reference: "FT21319P9G6R\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "15 NOV 21",
          TransactionType: "Debit",
          Amount: "6,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT21319216C6",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "15 NOV 21",
          TransactionType: "Debit",
          Amount: "3,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT213192WQ3P",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "18 NOV 21",
          TransactionType: "Debit",
          Amount: "5,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT21322V6V90",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "19 NOV 21",
          TransactionType: "Debit",
          Amount: "1,500.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT21323FW462\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "22 NOV 21",
          TransactionType: "Credit",
          Amount: "10,000.00",
          Remark: "NIP From 00000321112016022500113336 5047 First City Monument Bank PAYRE F:S61971620 SENDER: EDZUWAH PAULINE SEWUESE REMARK: App To Sterlin",
          Reference: "FT21326BJXK8\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "22 NOV 21",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT21326BJXK8",
          Reference: "FT21326NDLYW\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "22 NOV 21",
          TransactionType: "Debit",
          Amount: "10,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT213261KP40\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "22 NOV 21",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "VERVE CARD MAINTENANCE CHARGE FOR Q 4",
          Reference: "FT21326BWND4\\OTA",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "22 NOV 21",
          TransactionType: "Debit",
          Amount: "3.75",
          Remark: "VERVE CARD MAINTENANCE VAT FOR Q4",
          Reference: "FT21326PK25H",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "22 NOV 21",
          TransactionType: "Credit",
          Amount: "20,000.00",
          Remark: "NIP From 00000321112211450800113536 6286 First City Monument Bank PAYRE F:S66129201 SENDER: EDZUWAH PAULINE SEWUESE REMARK: App To Sterlin",
          Reference: "FT21326C3ZQP\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "22 NOV 21",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT21326C3ZQP",
          Reference: "FT2132641J9R\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "22 NOV 21",
          TransactionType: "Debit",
          Amount: "20,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT213264M89S\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "22 NOV 21",
          TransactionType: "Credit",
          Amount: "25,000.00",
          Remark: "NIP From 00000321112214072200113556 9612 First City Monument Bank PAYRE F:S66483749 SENDER: EDZUWAH PAULINE SEWUESE REMARK: App To Sterlin",
          Reference: "FT21326GRKTY\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "22 NOV 21",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT21326GRKTY",
          Reference: "FT21326G25PD\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "22 NOV 21",
          TransactionType: "Debit",
          Amount: "20,200.00",
          Remark: "OTHER BANK TERMINAL -  T006810 2TSBW360       LA            LANG",
          Reference: "FT213260H7KK\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "22 NOV 21",
          TransactionType: "Debit",
          Amount: "4,000.00",
          Remark: "OTHER BANK TERMINAL -  T000502 2TSBVA24       LA            LANG",
          Reference: "FT213263BTP7\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "24 NOV 21",
          TransactionType: "Credit",
          Amount: "3,100.00",
          Remark: "NIP From 00001321112413564100044760 5307 GTBank Plc PAYREF:000447605307 SENDER: CHANGAN RTS MFB LIMITED ST P REMARK: DOT030788145135442 zi",
          Reference: "FT21328MJJWC\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "24 NOV 21",
          TransactionType: "Debit",
          Amount: "3,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT21328W1QLK",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "26 NOV 21",
          TransactionType: "Credit",
          Amount: "5,000.00",
          Remark: "NIP From 00000321112611293900114160 9290 First City Monument Bank PAYRE F:S78043416 SENDER: EDZUWAH PAULINE SEWUESE REMARK: App To Sterlin",
          Reference: "FT21330ZHKQS\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "26 NOV 21",
          TransactionType: "Debit",
          Amount: "3,100.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT21330WC72C",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "29 NOV 21",
          TransactionType: "Debit",
          Amount: "34.83",
          Remark: "TRF:",
          Reference: "FT21333DR4DZ\\OTA",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "02 DEC 21",
          TransactionType: "Credit",
          Amount: "20,000.00",
          Remark: "NIP From 00000321120214584500115225 1388 First City Monument Bank PAYRE F:S98657991 SENDER: EDZUWAH PAULINE SEWUESE REMARK: App To Sterlin",
          Reference: "FT21336JPYVD\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "02 DEC 21",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT21336JPYVD",
          Reference: "FT21336N58LW\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "02 DEC 21",
          TransactionType: "Debit",
          Amount: "10,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT21336C34J4\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "06 DEC 21",
          TransactionType: "Credit",
          Amount: "10,000.00",
          Remark: "NIP From 00000321120608342900115823 0617 First City Monument Bank PAYRE F: S9889467 SENDER: EDZUWAH PAULINE SEWUESE REMARK: App To Sterlin",
          Reference: "FT21340S4XK0\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "06 DEC 21",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT21340S4XK0",
          Reference: "FT21340BWCZ1\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "06 DEC 21",
          TransactionType: "Debit",
          Amount: "10,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT21340DNDZ8\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "13 DEC 21",
          TransactionType: "Debit",
          Amount: "6,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT21347PB5VD",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "14 DEC 21",
          TransactionType: "Debit",
          Amount: "4,000.00",
          Remark: "OTHER BANK TERMINAL -  CHRISTOPHER NGBEDE     BE            LANG",
          Reference: "FT2134816529",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "15 DEC 21",
          TransactionType: "Debit",
          Amount: "2,500.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT2134921HJM",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "16 DEC 21",
          TransactionType: "Credit",
          Amount: "32,000.00",
          Remark: "NIP From 00000321121607134700117471 3680 First City Monument Bank PAYRE F:S42863064 SENDER: EDZUWAH PAULINE SEWUESE REMARK: App To Sterlin",
          Reference: "FT2135072S0D\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "16 DEC 21",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT2135072S0D",
          Reference: "FT21350SWD5J\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "16 DEC 21",
          TransactionType: "Debit",
          Amount: "30,300.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT213504Z38Q\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "16 DEC 21",
          TransactionType: "Credit",
          Amount: "15,000.00",
          Remark: "NIP From 00000321121608091600117477 8040 First City Monument Bank PAYRE F:S42995650 SENDER: EDZUWAH PAULINE SEWUESE REMARK: App To Sterlin",
          Reference: "FT21350GM34W\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "16 DEC 21",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT21350GM34W",
          Reference: "FT213505VPXQ\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "16 DEC 21",
          TransactionType: "Credit",
          Amount: "10,000.00",
          Remark: "NIP From 00000321121608160500117478 7348 First City Monument Bank PAYRE F:S43015223 SENDER: EDZUWAH PAULINE SEWUESE REMARK: App To Sterlin",
          Reference: "FT21350STYFG\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "16 DEC 21",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT21350STYFG",
          Reference: "FT21350P1M46\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "16 DEC 21",
          TransactionType: "Debit",
          Amount: "25,300.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT21350CC0BS\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "20 DEC 21",
          TransactionType: "Debit",
          Amount: "1,500.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT21354TKSWB",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "21 DEC 21",
          TransactionType: "Credit",
          Amount: "10,200.00",
          Remark: "NIP From 00001321122109334500049869 7219 GTBank Plc PAYREF:000498697219 SENDER: CHANGAN RTS MFB LIMITED ST P REMARK: DOT030788145202112210",
          Reference: "FT213556YFQF\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "21 DEC 21",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT213556YFQF",
          Reference: "FT21355G5KSW\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "21 DEC 21",
          TransactionType: "Debit",
          Amount: "4,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT213559QKGX",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "22 DEC 21",
          TransactionType: "Debit",
          Amount: "2,100.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT21356LC3LN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "04 JAN 22",
          TransactionType: "Debit",
          Amount: "58.05",
          Remark: "SMS NOTIFICATION CHARGE FOR 2021 NO VEMBER 15TH -14TH DECEMBER - NGN",
          Reference: "FT220045M992\\ADO",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "07 JAN 22",
          TransactionType: "Credit",
          Amount: "10,000.00",
          Remark: "NIP From 00000322010711103500121091 1996 First City Monument Bank PAYRE F:S13902175 SENDER: EDZUWAH PAULINE SEWUESE REMARK: App To Sterlin",
          Reference: "FT22007GJB03\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "07 JAN 22",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT22007GJB03",
          Reference: "FT220077R0LV\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "07 JAN 22",
          TransactionType: "Debit",
          Amount: "5,100.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT220076TPJC",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "10 JAN 22",
          TransactionType: "Debit",
          Amount: "2,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT22010MYPVJ",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "10 JAN 22",
          TransactionType: "Credit",
          Amount: "20,000.00",
          Remark: "NIP From 00000322010916122600121387 9731 First City Monument Bank PAYRE F:S20137346 SENDER: EDZUWAH PAULINE SEWUESE REMARK: App To Sterlin",
          Reference: "FT220108HWKL\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "10 JAN 22",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT220108HWKL",
          Reference: "FT220106H19M\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "10 JAN 22",
          TransactionType: "Debit",
          Amount: "20,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT22010HRN7M\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "18 JAN 22",
          TransactionType: "Debit",
          Amount: "1,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT22018W565P",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "21 JAN 22",
          TransactionType: "Credit",
          Amount: "5,000.00",
          Remark: "NIP From 00000322012115254300123089 6239 First City Monument Bank PAYRE F:S55334006 SENDER: EDZUWAH PAULINE SEWUESE REMARK: App To Sterlin",
          Reference: "FT220218DWM5\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "24 JAN 22",
          TransactionType: "Debit",
          Amount: "5,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT22024BM30L\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "25 JAN 22",
          TransactionType: "Debit",
          Amount: "2,000.00",
          Remark: "OTHER BANK TERMINAL -  ZORA OLOTU             LA            LANG",
          Reference: "FT22025HK29S",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "25 JAN 22",
          TransactionType: "Debit",
          Amount: "2,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT22025329S6\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "28 JAN 22",
          TransactionType: "Credit",
          Amount: "20,000.00",
          Remark: "NIP From 00000322012811343000124104 1894 First City Monument Bank PAYRE F:S75278686 SENDER: EDZUWAH PAULINE SEWUESE REMARK: App To Sterlin",
          Reference: "FT220283FD0K\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "28 JAN 22",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT220283FD0K",
          Reference: "FT22028SXVY5\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "28 JAN 22",
          TransactionType: "Debit",
          Amount: "17,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT22028HGDCJ\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "31 JAN 22",
          TransactionType: "Debit",
          Amount: "40.64",
          Remark: "SMS NOTIFICATION CHARGE FOR 2021 DE CEMBER 15TH -14TH JANUARY - NGN",
          Reference: "FT22031JB1ZB\\PHG",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "31 JAN 22",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "VERVE CARD MAINTENANCE CHARGE FOR Q 1",
          Reference: "FT22031VSMT4\\IWO",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "31 JAN 22",
          TransactionType: "Debit",
          Amount: "3.75",
          Remark: "VERVE CARD MAINTENANCE VAT FOR Q1",
          Reference: "FT22031MJTJ9",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "07 FEB 22",
          TransactionType: "Debit",
          Amount: "4,500.00",
          Remark: "OTHER BANK TERMINAL -  ZORA OLOTU             LA            LANG",
          Reference: "FT220380K5D7",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "14 FEB 22",
          TransactionType: "Credit",
          Amount: "10,000.00",
          Remark: "NIP From 00000322021209463300126719 2211 First City Monument Bank PAYRE F:S24746956 SENDER: EDZUWAH PAULINE SEWUESE REMARK: App To Sterlin",
          Reference: "FT22045L2BL6\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "14 FEB 22",
          TransactionType: "Debit",
          Amount: "50.00",
          Remark: "Capitalise Actvity For EMT Levy EMT Levy FT22045L2BL6",
          Reference: "FT22045YJTKJ\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "14 FEB 22",
          TransactionType: "Debit",
          Amount: "5,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT22045HH9KY",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "14 FEB 22",
          TransactionType: "Debit",
          Amount: "2,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT22045WKCK0",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "14 FEB 22",
          TransactionType: "Debit",
          Amount: "1,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT22045YN7P4",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "21 FEB 22",
          TransactionType: "Debit",
          Amount: "2,000.00",
          Remark: "OTHER BANK TERMINAL -  PAYCOM NIGERIA LIMITED LA            LANG",
          Reference: "FT220522TLPP",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "01 MAR 22",
          TransactionType: "Credit",
          Amount: "5,000.00",
          Remark: "NIP From 00000722030112091347046992 7499 Fidelity Bank PAYREF:M00000101 87396345 SENDER: PAULINE SEWUESE ED ZUWAH REMARK: 770 TRANSFER FROM",
          Reference: "FT22060BTQRC\\SBN",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "01 MAR 22",
          TransactionType: "Debit",
          Amount: "2,000.00",
          Remark: "POS Purchase from PAYCOM NIGERIA LIMITED LA LANG",
          Reference: "FT22060YZK1X",
          SpecificTransactionType: null
      },
      {
          TransactionDate: "01 MAR 22",
          TransactionType: "Debit",
          Amount: "1,000.00",
          Remark: "POS Purchase from PAYCOM NIGERIA LIMITED LA LANG",
          Reference: "FT22060ZHRN1",
          SpecificTransactionType: null
      }
  ]
}

const buildTable = (doc, cellTop, cellHeight, leftText, rightText, isLast) => {
  const cellBase = cellTop + cellHeight;
  doc
  .strokeColor('gray', .3)
  // .fillColor('gray', .1)
  .moveTo(36, cellBase)
  .lineTo(36, cellTop)
  .lineTo(564, cellTop)
  .lineTo(564, cellBase)
  .stroke()
  .strokeColor('gray', isLast ? .3 : 1)
  .moveTo(564, cellBase)
  .lineTo(36, cellBase)
  .stroke()
  .strokeColor('gray', 1)
  .moveTo(300, cellTop)
  .lineTo(300, cellBase)
  .stroke()
  .text(leftText, 48, cellTop + 6)
  .text(rightText, 312, cellTop + 6);
}

// build small Table
const buildSmallTable = (doc, tableRowData, line, tableTop, i) => {
  const anotherline= line * 20;
  const rowTop = tableTop + anotherline;
  doc
  .strokeColor('gray', .3)
  .moveDown(3, 0) 
  .fontSize(9)
  .text(i + ': ' + tableRowData.tranDate, 46, rowTop) 
  .text(tableRowData.valDate, 130, rowTop)  
  .text(tableRowData.des, 200, rowTop) 
  .text(tableRowData.refNo, 340, rowTop)
  .text(tableRowData.debit, 420, rowTop)
  .text(tableRowData.credit, 460, rowTop)
  .text(tableRowData.balance, 510, rowTop)
}

const generatePDF = () => {
  const doc = new PDFDocument({ margin: 30, size: 'A4' });
  doc.pipe(fs.createWriteStream(path.join(process.cwd(), "statement_of_account.pdf")));
  doc.image(path.join(process.cwd(), "utils", "logo copy.png"), 36, 36, {
    width: 100,
    height: 40
  });
  doc.opacity(.3);
  doc.image(path.join(process.cwd(), "utils", "logo copy.png"), 250, 400, {
    width: 100,
    height: 40,
    align: 'center',
    valign: 'center',
  });
  doc.opacity(1);
  doc.fontSize(12);
  doc.font("./font/Poppins-Medium.ttf")
  doc.text(`
    Sterling Towers
    20,Marina Lagos Island
    Lagos State
    Nigeria
    Switchresolution@sterling.ng
  `, 360, 16);
  
  doc.opacity(1);
  doc.fontSize(12);
  doc.font("./font/Poppins-Medium.ttf")
  doc.text(`
    Benjamin Osagie

    20, Sherwood street, London
    United Kingdom
  `, 36, 120);

  doc.opacity(1);
  // doc.fontSize(16);
  // doc.font("./font/Poppins-Bold.ttf")
  // doc.text(`
  //   DOLLAR STATEMENT OF ACCOUNT
  // `,);
  
  doc.font("./font/Poppins-Medium.ttf")
  doc.fontSize(11);
  const entries = [{
    leftText: "Statement Date: 01/10/2022",
    rightText: "Opening Balance: $80",
  }, {
    leftText: "Period Covered: 01/10/2022 to 01/11/2022",
    rightText: "Total Credit Amount: $10.25",
  },
  {
    leftText: "Currency:  Dollar",
    rightText: "Total Debit Amount: $10.25",
  },
  {
    leftText: "Account Number: 1002340010 ",
    rightText: "Closing Balance: $10.25",
  },
  {
    leftText: "Account Type: Dom Account",
    rightText: "No of Transaction: 4",
  }
];
  const tableTop = 200;
  const cellHeight = 24;
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    buildTable(doc, tableTop + (cellHeight * i), cellHeight, entry.leftText, entry.rightText, i === entries.length - 1);
  }
  doc.fontSize(9);
  const transactionData = {
    tableHeader: ['Transaction Date', 'Value Date', 'Description', 'Reference No', 'Debit', 'Credit', 'Balance'],
    tableData: [
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-Feb-2022', des: 'Micheal Johnson Payment', refNo: 'EUR/002/340', debit: '20.00', credit: '10.00', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Credit fee', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
      { tranDate: '02-jan-2022', valDate: '02-jan-2022', des: 'Utility bills', refNo: 'EUR/002/340', debit: '20.00', credit: ' ', balance: '60.45' },
    ]
  }
  doc.moveDown(5, 0)
  .strokeColor('black', 0)
  .fillColor('gray', 0.3)
  .lineTo(36, 342)
  .lineTo(564, 342)
  .lineTo(564, 364)
  .lineTo(36, 364)
  .lineTo(36, 342)
  .fillAndStroke()
  .fillColor('black', .8)
  .text(transactionData.tableHeader[0], 46, 350)
  .fill()
  .text(transactionData.tableHeader[1], 130, 350)  
  .text(transactionData.tableHeader[2], 200, 350) 
  .text(transactionData.tableHeader[3], 340, 350)
  .text(transactionData.tableHeader[4], 420, 350)
  .text(transactionData.tableHeader[5], 460, 350)
  .text(transactionData.tableHeader[6], 510, 350)
  .fillColor('#000', 1 )
  for (let i = 0; i < transactionData.tableData.length; i++) {
    const iMinus22 = i - 22;
    const isFirstPage = i < 22;
    if (i === 22) {
      doc.addPage({ margin: 30, size: 'A4' });
    } else if (iMinus22 % 39 === 0) {
      doc.addPage({ margin: 30, size: 'A4' });
    }
    const entry = transactionData.tableData[i];
    buildSmallTable(doc, entry, isFirstPage ? i % 22 : iMinus22 % 39, isFirstPage ? 370 : 30, i);
  }

  doc.end();

  return doc;
};





module.exports = { generatePDF };
