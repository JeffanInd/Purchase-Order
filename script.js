// ================= CLOCK =================
document.addEventListener("DOMContentLoaded", function () {
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        const days = [
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ];
        const months = [
            "Jan","Feb", "Mar", "Apr", "May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
        ];
        document.getElementById("clock-time").textContent =
            `${hours}:${minutes}:${seconds}`;
        document.getElementById("clock-date").textContent =
            `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;

    }
    setInterval(updateClock,1000);
    updateClock();

});
// ================= DATA PO =================
const data = {
"PO1226 Sample": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    items: [
                        {
                            item: "LM-70757-NTB",
                            qty: 3,
                            desc: "J8153-73PJW // Isadora Rattan Wide Bottle Pendant Light, Natural (18.25W Inch  x 18.25D Inch  x 36.5H Inch ) // //Materials: Iron, Natural Rattan // Finish Code: 73, Finish Name: Natural Honey // Set Up // CBM: 0.278091 // Number of Shipping Boxes: 1 // *(more...)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/LM-70757-NTB_001.jpg"
                        },
                        {
                            item: "LM-70464-NTB",
                            qty: 3,
                            desc: "J8152-73PJW // Augustina Rattan Long Bottle Pendant Light, Natural (14W Inch  x 14D Inch  x 56.75H Inch ) // //Materials: Iron, Natural Rattan // Finish Code: 73, Finish Name: Natural Honey // Set Up // CBM: 0.272536360096 // Number of Shipping Boxes: 1 /(more...)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/LM-70464-NTB_001.jpg"
                        },
                        {
                            item: "LM-70323-NTB",
                            qty: 3,
                            desc: "J8145-73PJW // Rosie Large Rattan Scallop Pendant Light, Natural (25W Inch  x 25D Inch  x 20.5H Inch ) // // Materials: Iron, Natural Rattan // Finish Code: 73, Finish Name: Natural Honey // Set Up // CBM: 0.28 // Number of Shipping Boxes: 1 // ***DROPSH(more...)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/LM-70323-NTB_001.jpg"
                        },
                        {
                            item: "LM-70191-NTB",
                            qty: 3,
                            desc: "J8144-73PJW // Rosie Small Rattan Scallop Pendant Light, Natural (14W Inch  x 14D Inch  x 15H Inch ) // // Materials: Iron, Natural Rattan // Finish Code: 73, Finish Name: Natural Honey // Set Up // CBM: 0.075 // Number of Shipping Boxes: 1 // ***DROPSHI(more...)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/LM-70191-NTB_001.jpg"
                        },
                        {
                            item: "AM-70876-NTB",
                            qty: 1,
                            desc: "J12232-2PJW // Halo Round Rattan Frame Mirror, Natural (35W Inch  x 35D Inch  x 2.5H Inch ) // // Materials: Natural Rattan, Plywood, Glass // Finish Code: 73, Finish Name: Natural Honey // Set Up // CBM: 0.12 // Number of Shipping Boxes: 1 // ***DROPSHI(more...)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70876-NTB_001.jpg"
                        },
                        {
                            item: "AM-70345-NT",
                            qty: 1,
                            desc: "J12111-1PJW // Neroli Round Water Hyacinth Fringe Mirror, Natural (48W Inch  x 3.5D Inch  x 48H Inch ) // // Materials: Wood, Plywood, Waterhyacinth // Finish Code: 1, Finish Name: Natural // Set Up // CBM: 0.281 // Number of Shipping Boxes: 1 // ***DROP(more...)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70345-NT_001.jpg"
                        },
                        {
                            item: "LM-70946-NTB",
                            qty: 1,
                            desc: "J8146-1PJW // Briar Woven Rattan 3 Tier Pendant Light, Natural (32.25W Inch  x 32.25D Inch  x 24.5H Inch ) // // Materials: Iron, Natural Rattan // Finish Code: 73, Finish Name: Natural Honey // Set Up // CBM: 0.534 // Number of Shipping Boxes: 1 // ***D(more...)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/LM-70946-NTB_001.jpg"
                        },
                        {
                            item: "AM-70238-NTB",
                            qty: 2,
                            desc: "J12235-1PJW // Marco Large Rattan Keyhole Mirror, Natural (28W Inch  x 2.25D Inch  x 52H Inch ) // //Materials: Plywood, Natural Rattan // Finish Code: 73, Finish Name: Natural Honey // Set Up // CBM: 0.13 // Number of Shipping Boxes: 1 // ***DROPSHIP PAC(more...)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70238-NTB_001.jpg"
                        },
                        {
                            item: "BN-70890-BD",
                            qty: 2,
                            desc: "J693-142PJW // Nico Banana Leaf Rush Seat Fully Woven Stool, Blonde (22W Inch  x 16.5D Inch  x 18.5H Inch ) // //Materials: Acacia Wood, Banana // Finish Code: 142, Finish Name: Natural Blonde // Set Up // CBM: 0.171 // Number of Shipping Boxes: 1 // ***D(more...)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/BN-70890-BD_001.jpg"
                        },
                        {
                            item: "BN-70121-BD",
                            qty: 2,
                            desc: "J758-142PJW // Hollis Banana Leaf Ottoman With X-Pattern Overlay, Blonde (18W Inch  x 18D Inch  x 18H Inch ) // // Materials: Acacia Wood, Banana // Finish Code: 142, Finish Name: Natural Blonde // Set Up // CBM: 0.141 // Number of Shipping Boxes: 1 // *(more...)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/BN-70121-BD_001.jpg"
                        }
                    ]
                },
                "CG2512-01": {
                    Vendor: "V68 PT. FURNILAC PRIMAGUNA",
                    ecrd: "2026-03-05",
                    items: [
                        {
                            item: "TT-VC-YK339-WH",
                            qty: 146,
                            desc: "TGG 1044 NB     York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)      Material MDF, Acacia Wood     CBM 0.1787     Packaging Brown carton  5 ply outer craft 200  Styrofoam 3 cm     Master Carton      ***Crafted Home's York 3 Drawer Wooden Accent Side Table-White (19x15x23) Material ColorBayur Wood and Mdf E2 White..CBM0.17 PackingBox K#200+Styrofoam 2cm Protection (1pc case)***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-WH_001.jpg"
                        }
                    ]
                },
                "CG2512-02": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-02-28",
                    items: [
                        {
                            item: "JV-ABL401",
                            qty: 45,
                            desc: "J20059CO87-M62Z03PJW     Abella Round Coffee Table (34.25x34.25x16.53)      Material Rotan Frame; Banana Small  Astor + Banana (Styrofoam 1) + Single Face  Master Carton Y , 1***DROPSHIP PACKAGING REQUIRED***  KD       CBM 0.397     Packaging Box Kraft #150 + Protect Styrofoam (Styrofoam 1) + Single Face     Master Carton Y , 1     ***DROPSHIP PACKAGING REQUIRED***  ******",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-ABL401_001.jpg"
                        }
                    ]
                },
                "CG2512-03": {
                    Vendor: "V75 Pijar Sukma",
                    ecrd: "2026-03-05",
                    items: [
                        {
                            item: "OT-75333-BK",
                            qty: 31,
                            desc: "Sarlat   SRT5   Sarlet 2 Tone Console Table With Drawer, 23.75 inch W, Black Brown, (23.75 inch W x 10 inch D x 31.5 inch H)   Finish Code B-NAT11 NAT02, Finish Name Top Natural - Body Black    KD   CBM 0.06   Number of Shipping Boxes 1   ***DROPSHIP PACKAGING REQUIRED***    ***ISTA 3A PACKAGING REQUIRED***   ***ANTI TIP KIT REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75333-BK_001.jpg"
                        },
                        {
                            item: "OT-75333-NV",
                            qty: 31,
                            desc: "Sarlat   SRT5   Sarlat 2 Tone Console Table With Drawer, 23.75 inch W, Navy Brown, (23.75 inch W x 10 inch D x 31.5 inch H)   Finish Code B-BM04 NAT02, Finish Name Top Natural - Body Navy    KD   CBM 0.06   Number of Shipping Boxes 1   ***DROPSHIP PACKAGING REQUIRED***    ***ISTA 3A PACKAGING REQUIRED***   ***ANTI TIP KIT REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75333-NV_001.jpg"
                        },
                        {
                            item: "OT-75333-WH",
                            qty: 21,
                            desc: "Sarlat   SRT5   Sarlet 2 Tone Console Table With Drawer, 23.75 inch W, White Brown, (23.75 inch W x 10 inch D x 31.5 inch H)   Finish Code B-BM01 NAT02, Finish Name Top Natural - Body White   KD   CBM 0.06   Number of Shipping Boxes 1   ***DROPSHIP PACKAGING REQUIRED***    ***ISTA 3A PACKAGING REQUIRED***   ***ANTI TIP KIT REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75333-WH_001.jpg"
                        },
                        {
                            item: "TT-DU-75008-LB",
                            qty: 29,
                            desc: "REM55     Dumaine Bedside Table (15.75x11.81x25.59)      Material Bayur Wood   Top MDF     Color Light Blue (W9.L2+G9)     CBM 0.066     Packaging Carton Box 200 PSI   5 ply   Plastic wrap around items + Paper oil warp around items+ foam protection + corner plastic protection     Master Carton      ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-DU-75008-LB_001.jpg"
                        },
                        {
                            item: "TT-DU-75008-WH",
                            qty: 21,
                            desc: "REM55     Dumaine Bedside Table (15.75x11.81x25.59)      Material Bayur Wood   Top MDF     Color White (BA+WBSemi)     CBM 0.066     Packaging Carton Box 200 PSI   5 ply   Plastic wrap around items + Foamsheet warp around items + foam protection + corner plastic protection     Master Carton      ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-DU-75008-WH_001.jpg"
                        },
                        {
                            item: "TT-JO-75007-BL",
                            qty: 52,
                            desc: "AGE10     Josephine Console Table, 24 inch x10 inch x31.5 inch  (23.62x9.84x31.5)      Material Bayur Wood   Top MDF     Color Black (B-W48L2+WBSEMI PG9)     CBM 0.07     Packaging Carton Box 200 PSI   5 ply   Plastic wrap around items + Paper oil warp around items+ foam protection + corner plastic protection     Master Carton      ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-JO-75007-BL_001.jpg"
                        },
                        {
                            item: "TT-JO-75007-LB",
                            qty: 26,
                            desc: "AGE10     Josephine 24 inch x10 inch x31.5 inch  Console Table (23.62x9.84x31.5)      Material Bayur Wood   Top MDF     Color Light Blue (B-W9.L2+G9 PG9)     CBM 0.07     Packaging Carton Box 200 PSI   5 ply   Plastic wrap around items + Paper oil warp around items+ foam protection + corner plastic protection     Master Carton      ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-JO-75007-LB_001.jpg"
                        },
                        {
                            item: "TT-JO-75007-WH",
                            qty: 32,
                            desc: "AGE10     Josephine 24 inch x10 inch x31.5 inch  Console Table (23.62x9.84x31.5)      Material Bayur Wood   Top MDF     Color White (B-CA.L3+G9 PO3)     CBM 0.07     Packaging Carton Box 200 PSI   5 ply   Plastic wrap around items + Foamsheet warp around items + foam protection + corner plastic protection     Master Carton      ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-JO-75007-WH_001.jpg"
                        }
                    ]
                },
                "CG2512-04": {
                    Vendor: "V68 PT. FURNILAC PRIMAGUNA",
                    ecrd: "2026-02-16",
                    items: [
                        {
                            item: "NS-68406-WHV",
                            qty: 40,
                            desc: "EEY 0584  JF  2 Drawer + 1 Shelf Nightstand, Solid White Wood Veneer (22x15x24)   Material Bayur Wood and MDF  Thin Medium Density Fiberboard - Phase 2   Antique Gold Oval Handle OV-185 E   CBM 0.21775   Packaging Brown Carton",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68406-WHV_001.jpg"
                        },
                        {
                            item: "ST-68DR16-WN",
                            qty: 40,
                            desc: "CNM 1900 JF     16 inch  Cinched Wood Drum Table, Walnut (16x16x23.5)      Material Wood, MDF     CBM 0.1725     Packaging  inch Drop ship packaging' required  5 ply outer craft 200  Styrofoam 3 cm",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-68DR16-WN_001.jpg"
                        },
                        {
                            item: "TT-VC-AD301-BK",
                            qty: 25,
                            desc: "CDA 1071 JF     Auburn Traditional One Drawer Wooden Accent Side Table (17.0x14.9x23.4)      Material MDF     CBM 0.1687     Packaging Brown carton 5 ply outer craft 200 Styrofoam 3 cm     Master Carton      ***Crafted Home's Auburn Traditional One Drawer Wooden Accent Side Table-Black (17x15x23) Material ColorBayur Wood and Mdf E2 Black..CBM0.17 PackingBox K#200+Styrofoam 3cm Protection (1pc case)***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-AD301-BK_001.jpg"
                        },
                        {
                            item: "TT-VC-AD301-WH",
                            qty: 50,
                            desc: "UDF 1071 NB     Auburn Traditional One Drawer Wooden Accent Side Table (17.0x14.9x23.4)      Material MDF     CBM 0.1687     Packaging Brown carton  5 ply outer craft 200  Styrofoam 3 cm     Master Carton      ***Crafted Home's Auburn Traditional One Drawer Wooden Accent Side Table-White (17x15x23) Material ColorBayur Wood and Mdf E2   White CBM0.17 PackingBox K#200+Styrofoam 2cm Protection***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-AD301-WH_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-BK",
                            qty: 25,
                            desc: "CDE 1180 JF     Hooper 2 Drawer Wooden Accent Side Table (17.9x14.9x22.0)      Material MDF     CBM 0.173     Packaging Brown carton 5 ply outer craft 200 Styrofoam 3 cm     Master Carton      ***Crafted Home's Hooper 2 Drawer Wooden Accent Side Table-Black..(18x15x22) Material ColorBayur Wood and Mdf E2 Black..CBM0.17 PackingBox K#200+Styrofoam 3cm Protection (1pc case)***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-BK_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-BR",
                            qty: 40,
                            desc: "UAC 1180 NB     Hooper Two Drawer Wooden Accent Side Table, Brown (17.9x14.9x22.0)      Material Bayur Wood, MDF     CBM 0.173     Packaging Brown carton  5 ply outer craft 200  Styrofoam 3 cm     Master Carton      ***Crafted Home's Hooper 2 Drawer Wooden Accent Side Table-Brown (18x15x22) Material ColorBayur Wood and Mdf E2 Brown..CBM0.17 PackingBox K#200+Styrofoam 3cm Protection (1pc case)***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-BR_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-L-GRB",
                            qty: 25,
                            desc: "CLC 0584 JF     Hooper 2 Drawer Wooden Accent Side Table (55.9x38.1x61.0)      Material MDF     CBM 0.219     Packaging Brown carton  5 ply outer craft 200  Styrofoam 3 cm     Master Carton      ***Crafted Home's Hooper 2 Drawer Wooden Accent Side Table large, Gray..(22x15x24) Material ColorBayur Wood and Mdf E2 Grey with gold finish handle and leg..CBM0.21 PackingBox K#200+Styrofoam 3cm Protection (1pc case)***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-L-GRB_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-WH",
                            qty: 40,
                            desc: "UDP 1180 NB     Hooper 2 Drawer Wooden Accent Side Table (17.9x14.9x22.0)      Material MDF, Acacia Wood     CBM 0.173     Packaging Brown carton 5 ply outer craft 200 Styrofoam 3 cm     Master Carton      ***Crafted Home's Hooper 2 Drawer Wooden Accent Side Table-White (18x15x22) Material ColorBayur Wood and Mdf E2 White..CBM0.17 PackingBox K#200+Styrofoam 3cm Protection (1pc case)***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-WH_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-NV",
                            qty: 25,
                            desc: "CDK 1044 JF     York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)      Material MDF     CBM 0.1787     Packaging Brown carton 5 ply outer craft 200 Styrofoam 3 cm     Master Carton      ***Crafted Home's York 3 Drawer Wooden Accent Side Table-Navy Blue (19x15x23) Material ColorBayur Wood and Mdf E2 Navy Blue..CBM0.18 PackingBox K#200+Styrofoam 3cm Protection (1pc case)***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-NV_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-WH",
                            qty: 31,
                            desc: "TGG 1044 NB     York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)      Material MDF, Acacia Wood     CBM 0.1787     Packaging Brown carton  5 ply outer craft 200  Styrofoam 3 cm     Master Carton      ***Crafted Home's York 3 Drawer Wooden Accent Side Table-White (19x15x23) Material ColorBayur Wood and Mdf E2 White..CBM0.17 PackingBox K#200+Styrofoam 2cm Protection (1pc case)***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-WH_001.jpg"
                        },
                        {
                            item: "VC-YK339-WB",
                            qty: 30,
                            desc: "ESH 1044 JF   York Three Drawer Wooden Accent Side Table, 18.5 inch W, Warm Brown, (18.5 inch W x 15 inch D x 23 inch H)    Materials Soli d Bayur Wood + Mdf E2 + Veneer Meranti   Finish Code WNB 01, Finish Name Warm Brown   Set Up    CBM 0.1787   Number of Shipping Boxes 1   ***DROPSHIP PACKAGING REQUIRED***    ***ISTA 3A PACKAGING REQUIRED***  ",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-YK339-WB_001.jpg"
                        }
                    ]
                },
                "CG2512-05": {
                    Vendor: "V68 PT. FURNILAC PRIMAGUNA",
                    ecrd: "2026-02-16",
                    items: [
                        {
                            item: "NS-68406-WHV",
                            qty: 40,
                            desc: "EEY 0584  JF  2 Drawer + 1 Shelf Nightstand, Solid White Wood Veneer (22x15x24)   Material Bayur Wood and MDF  Thin Medium Density Fiberboard - Phase 2   Antique Gold Oval Handle OV-185 E   CBM 0.21775   Packaging Brown Carton",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68406-WHV_001.jpg"
                        },
                        {
                            item: "ST-68DR16-WN",
                            qty: 40,
                            desc: "CNM 1900 JF     16 inch  Cinched Wood Drum Table, Walnut (16x16x23.5)      Material Wood, MDF     CBM 0.1725     Packaging  inch Drop ship packaging' required  5 ply outer craft 200  Styrofoam 3 cm",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-68DR16-WN_001.jpg"
                        },
                        {
                            item: "TT-VC-AD301-BK",
                            qty: 25,
                            desc: "CDA 1071 JF     Auburn Traditional One Drawer Wooden Accent Side Table (17.0x14.9x23.4)      Material MDF     CBM 0.1687     Packaging Brown carton 5 ply outer craft 200 Styrofoam 3 cm     Master Carton      ***Crafted Home's Auburn Traditional One Drawer Wooden Accent Side Table-Black (17x15x23) Material ColorBayur Wood and Mdf E2 Black..CBM0.17 PackingBox K#200+Styrofoam 3cm Protection (1pc case)***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-AD301-BK_001.jpg"
                        },
                        {
                            item: "TT-VC-AD301-WH",
                            qty: 50,
                            desc: "UDF 1071 NB     Auburn Traditional One Drawer Wooden Accent Side Table (17.0x14.9x23.4)      Material MDF     CBM 0.1687     Packaging Brown carton  5 ply outer craft 200  Styrofoam 3 cm     Master Carton      ***Crafted Home's Auburn Traditional One Drawer Wooden Accent Side Table-White (17x15x23) Material ColorBayur Wood and Mdf E2   White CBM0.17 PackingBox K#200+Styrofoam 2cm Protection***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-AD301-WH_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-BK",
                            qty: 25,
                            desc: "CDE 1180 JF     Hooper 2 Drawer Wooden Accent Side Table (17.9x14.9x22.0)      Material MDF     CBM 0.173     Packaging Brown carton 5 ply outer craft 200 Styrofoam 3 cm     Master Carton      ***Crafted Home's Hooper 2 Drawer Wooden Accent Side Table-Black..(18x15x22) Material ColorBayur Wood and Mdf E2 Black..CBM0.17 PackingBox K#200+Styrofoam 3cm Protection (1pc case)***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-BK_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-BR",
                            qty: 40,
                            desc: "UAC 1180 NB     Hooper Two Drawer Wooden Accent Side Table, Brown (17.9x14.9x22.0)      Material Bayur Wood, MDF     CBM 0.173     Packaging Brown carton  5 ply outer craft 200  Styrofoam 3 cm     Master Carton      ***Crafted Home's Hooper 2 Drawer Wooden Accent Side Table-Brown (18x15x22) Material ColorBayur Wood and Mdf E2 Brown..CBM0.17 PackingBox K#200+Styrofoam 3cm Protection (1pc case)***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-BR_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-L-GRB",
                            qty: 25,
                            desc: "CLC 0584 JF     Hooper 2 Drawer Wooden Accent Side Table (55.9x38.1x61.0)      Material MDF     CBM 0.219     Packaging Brown carton  5 ply outer craft 200  Styrofoam 3 cm     Master Carton      ***Crafted Home's Hooper 2 Drawer Wooden Accent Side Table large, Gray..(22x15x24) Material ColorBayur Wood and Mdf E2 Grey with gold finish handle and leg..CBM0.21 PackingBox K#200+Styrofoam 3cm Protection (1pc case)***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-L-GRB_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-WH",
                            qty: 40,
                            desc: "UDP 1180 NB     Hooper 2 Drawer Wooden Accent Side Table (17.9x14.9x22.0)      Material MDF, Acacia Wood     CBM 0.173     Packaging Brown carton 5 ply outer craft 200 Styrofoam 3 cm     Master Carton      ***Crafted Home's Hooper 2 Drawer Wooden Accent Side Table-White (18x15x22) Material ColorBayur Wood and Mdf E2 White..CBM0.17 PackingBox K#200+Styrofoam 3cm Protection (1pc case)***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-WH_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-NV",
                            qty: 25,
                            desc: "CDK 1044 JF     York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)      Material MDF     CBM 0.1787     Packaging Brown carton 5 ply outer craft 200 Styrofoam 3 cm     Master Carton      ***Crafted Home's York 3 Drawer Wooden Accent Side Table-Navy Blue (19x15x23) Material ColorBayur Wood and Mdf E2 Navy Blue..CBM0.18 PackingBox K#200+Styrofoam 3cm Protection (1pc case)***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-NV_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-WH",
                            qty: 31,
                            desc: "TGG 1044 NB     York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)      Material MDF, Acacia Wood     CBM 0.1787     Packaging Brown carton  5 ply outer craft 200  Styrofoam 3 cm     Master Carton      ***Crafted Home's York 3 Drawer Wooden Accent Side Table-White (19x15x23) Material ColorBayur Wood and Mdf E2 White..CBM0.17 PackingBox K#200+Styrofoam 2cm Protection (1pc case)***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-WH_001.jpg"
                        },
                        {
                            item: "VC-YK339-WB",
                            qty: 30,
                            desc: "ESH 1044 JF   York Three Drawer Wooden Accent Side Table, 18.5 inch W, Warm Brown, (18.5 inch W x 15 inch D x 23 inch H)    Materials Soli d Bayur Wood + Mdf E2 + Veneer Meranti   Finish Code WNB 01, Finish Name Warm Brown   Set Up    CBM 0.1787   Number of Shipping Boxes 1   ***DROPSHIP PACKAGING REQUIRED***    ***ISTA 3A PACKAGING REQUIRED***  ",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-YK339-WB_001.jpg"
                        }
                    ]
                },
                "CG2512-06": {
                    Vendor: "V68 PT. FURNILAC PRIMAGUNA",
                    ecrd: "2026-02-16",
                    items: [
                        {
                            item: "NS-68406-BKV",
                            qty: 25,
                            desc: "EEX 0584  JF   2 Drawer + 1 Shelf Nightstand, Matte Black Wood Veneer (22x15x24)   Material Bayur Wood and MDF  Thin Medium Density Fiberboard - Phase 2   Antique Gold Oval Handle OV-185 E   CBM 0.21775   Packaging Brown Carton",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68406-BKV_001.jpg"
                        },
                        {
                            item: "NS-68406-BRV",
                            qty: 25,
                            desc: "EEZ 0584 JF  2 Drawer + 1 Shelf Nightstand, Walnut Color Code DSC 6403 (22x15x24)   Material Bayur Wood and MDF  Thin Medium Density Fiberboard - Phase 2   Antique Gold Oval Handle OV-185 E   CBM 0.21775   Packaging Brown Carton",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68406-BRV_001.jpg"
                        },
                        {
                            item: "ST-68522-WH",
                            qty: 25,
                            desc: "EDR 2419 JF     22 inch  Round X Base Side Table, White (22.0x22.0x22.0)      Material Bayur Wood, MDF, Veneer     CBM 0.0922     Packaging Brown carton    5 ply outer craft 200    Styrofoam 3 cm     Master Carton      ***round end table with chunky base (KD) White oak Veneer 22x22x22 Solid Wood Veneer & MDF cbm***     ***DROPSHIP PACKAGING REQUIRED***  KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-68522-WH_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-BK",
                            qty: 25,
                            desc: "CDE 1180 JF     Hooper 2 Drawer Wooden Accent Side Table (17.9x14.9x22.0)      Material MDF     CBM 0.173     Packaging Brown carton 5 ply outer craft 200 Styrofoam 3 cm     Master Carton      ***Crafted Home's Hooper 2 Drawer Wooden Accent Side Table-Black..(18x15x22) Material ColorBayur Wood and Mdf E2 Black..CBM0.17 PackingBox K#200+Styrofoam 3cm Protection (1pc case)***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-BK_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-BR",
                            qty: 60,
                            desc: "UDO 1044 NB     York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)      Material MDF     CBM 0.1787     Packaging Brown carton 5 ply outer craft 200 Styrofoam 3 cm     Master Carton      ***Crafted Home's York 3 Drawer Wooden Accent Side Table-Brown (19x15x23) Material ColorBayur Wood and Mdf E2 Brown..CBM0.18 PackingBox K#200+Styrofoam 3cm Protection (1pc case)***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-BR_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-NV",
                            qty: 25,
                            desc: "CDK 1044 JF     York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)      Material MDF     CBM 0.1787     Packaging Brown carton 5 ply outer craft 200 Styrofoam 3 cm     Master Carton      ***Crafted Home's York 3 Drawer Wooden Accent Side Table-Navy Blue (19x15x23) Material ColorBayur Wood and Mdf E2 Navy Blue..CBM0.18 PackingBox K#200+Styrofoam 3cm Protection (1pc case)***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-NV_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-OR",
                            qty: 25,
                            desc: "UDL 1044 NB     York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)      Material MDF     CBM 0.1787     Packaging Brown carton 5 ply outer craft 200 Styrofoam 3 cm     Master Carton      ***Crafted Home's York 3 Drawer Wooden Accent Side Table-Orange..(19x15x23) Material Color  Bayur Wood and Mdf E2   Orange, CBM 0.17 Packing  Box K#200 + Protection***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-OR_001.jpg"
                        },
                        {
                            item: "VC-HP325-NV",
                            qty: 35,
                            desc: "  Hooper Two Drawer Wooden Accent Side Table, Navy, (18 inch W x 15 inch D x 22 inch H)   CBM 0.1686   Packaging Brown carton, 5 ply outer craft 200, Styrofoam 3 cm (1pc case)   Materials Bayur Wood and Mdf E2   Finish Color Navy   ***ISTA 3A Dropship Packaging Required***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-HP325-NV_001.jpg"
                        },
                        {
                            item: "VC-YK339-BK",
                            qty: 55,
                            desc: "  York Three Drawer Accent Side Table, Black, (18.5 inch W x 15 inch D x 23 inch H)   Materials Bayur Wood and Mdf E2   Finish Code , Finish Name Black   Set Up    CBM 0.1787   Number of Shipping Boxes 1   ***DROPSHIP PACKAGING REQUIRED***    ***ISTA 3A PACKAGING REQUIRED***  ",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-YK339-BK_001.jpg"
                        },
                        {
                            item: "VC-YK339-GW",
                            qty: 60,
                            desc: "ELM  1044  JF     York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)      Material MDF, Acacia Wood     CBM 0.1787     Packaging Brown carton  5 ply outer craft 200  Styrofoam 3 cm     Master Carton      ***Crafted Home's York 3 Drawer Wooden Accent Side Table- Gray Wash  (19x15x23) Material ColorBayur Wood and Mdf E2 Wheat..CBM0.17 PackingBox K#200+Styrofoam 2cm Protection (1pc case)***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-YK339-GW_001.jpg"
                        },
                        {
                            item: "VC-YK339-PK",
                            qty: 15,
                            desc: "EWG 1044 JF   York Three Drawer Accent Side Table, 18.5 inch W, Pink, (18.5 inch W x 15 inch D x 23 inch H)      Materials Bayur Wood + MDF   Finish Code SW 6296, Finish Name Fading Rose   Set Up    CBM 0.1787   Number of Shipping Boxes 1   ***DROPSHIP PACKAGING REQUIRED***  ",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-YK339-PK_001.jpg"
                        }
                    ]
                },
                "CG2512-07": {
                    Vendor: "V68 PT. FURNILAC PRIMAGUNA",
                    ecrd: "2026-02-16",
                    items: [
                        {
                            item: "NS-68406-BKV",
                            qty: 25,
                            desc: "EEX 0584  JF   2 Drawer + 1 Shelf Nightstand, Matte Black Wood Veneer (22x15x24)   Material Bayur Wood and MDF  Thin Medium Density Fiberboard - Phase 2   Antique Gold Oval Handle OV-185 E   CBM 0.21775   Packaging Brown Carton",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68406-BKV_001.jpg"
                        },
                        {
                            item: "NS-68406-BRV",
                            qty: 25,
                            desc: "EEZ 0584 JF  2 Drawer + 1 Shelf Nightstand, Walnut Color Code DSC 6403 (22x15x24)   Material Bayur Wood and MDF  Thin Medium Density Fiberboard - Phase 2   Antique Gold Oval Handle OV-185 E   CBM 0.21775   Packaging Brown Carton",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68406-BRV_001.jpg"
                        },
                        {
                            item: "ST-68522-WH",
                            qty: 25,
                            desc: "EDR 2419 JF     22 inch  Round X Base Side Table, White (22.0x22.0x22.0)      Material Bayur Wood, MDF, Veneer     CBM 0.0922     Packaging Brown carton    5 ply outer craft 200    Styrofoam 3 cm     Master Carton      ***round end table with chunky base (KD) White oak Veneer 22x22x22 Solid Wood Veneer & MDF cbm***     ***DROPSHIP PACKAGING REQUIRED***  KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-68522-WH_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-BK",
                            qty: 25,
                            desc: "CDE 1180 JF     Hooper 2 Drawer Wooden Accent Side Table (17.9x14.9x22.0)      Material MDF     CBM 0.173     Packaging Brown carton 5 ply outer craft 200 Styrofoam 3 cm     Master Carton      ***Crafted Home's Hooper 2 Drawer Wooden Accent Side Table-Black..(18x15x22) Material ColorBayur Wood and Mdf E2 Black..CBM0.17 PackingBox K#200+Styrofoam 3cm Protection (1pc case)***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-BK_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-BR",
                            qty: 60,
                            desc: "UDO 1044 NB     York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)      Material MDF     CBM 0.1787     Packaging Brown carton 5 ply outer craft 200 Styrofoam 3 cm     Master Carton      ***Crafted Home's York 3 Drawer Wooden Accent Side Table-Brown (19x15x23) Material ColorBayur Wood and Mdf E2 Brown..CBM0.18 PackingBox K#200+Styrofoam 3cm Protection (1pc case)***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-BR_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-NV",
                            qty: 25,
                            desc: "CDK 1044 JF     York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)      Material MDF     CBM 0.1787     Packaging Brown carton 5 ply outer craft 200 Styrofoam 3 cm     Master Carton      ***Crafted Home's York 3 Drawer Wooden Accent Side Table-Navy Blue (19x15x23) Material ColorBayur Wood and Mdf E2 Navy Blue..CBM0.18 PackingBox K#200+Styrofoam 3cm Protection (1pc case)***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-NV_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-OR",
                            qty: 25,
                            desc: "UDL 1044 NB     York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)      Material MDF     CBM 0.1787     Packaging Brown carton 5 ply outer craft 200 Styrofoam 3 cm     Master Carton      ***Crafted Home's York 3 Drawer Wooden Accent Side Table-Orange..(19x15x23) Material Color  Bayur Wood and Mdf E2   Orange, CBM 0.17 Packing  Box K#200 + Protection***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-OR_001.jpg"
                        },
                        {
                            item: "VC-HP325-NV",
                            qty: 35,
                            desc: "  Hooper Two Drawer Wooden Accent Side Table, Navy, (18 inch W x 15 inch D x 22 inch H)   CBM 0.1686   Packaging Brown carton, 5 ply outer craft 200, Styrofoam 3 cm (1pc case)   Materials Bayur Wood and Mdf E2   Finish Color Navy   ***ISTA 3A Dropship Packaging Required***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-HP325-NV_001.jpg"
                        },
                        {
                            item: "VC-YK339-BK",
                            qty: 55,
                            desc: "  York Three Drawer Accent Side Table, Black, (18.5 inch W x 15 inch D x 23 inch H)   Materials Bayur Wood and Mdf E2   Finish Code , Finish Name Black   Set Up    CBM 0.1787   Number of Shipping Boxes 1   ***DROPSHIP PACKAGING REQUIRED***    ***ISTA 3A PACKAGING REQUIRED***  ",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-YK339-BK_001.jpg"
                        },
                        {
                            item: "VC-YK339-GW",
                            qty: 60,
                            desc: "ELM  1044  JF     York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)      Material MDF, Acacia Wood     CBM 0.1787     Packaging Brown carton  5 ply outer craft 200  Styrofoam 3 cm     Master Carton      ***Crafted Home's York 3 Drawer Wooden Accent Side Table- Gray Wash  (19x15x23) Material ColorBayur Wood and Mdf E2 Wheat..CBM0.17 PackingBox K#200+Styrofoam 2cm Protection (1pc case)***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-YK339-GW_001.jpg"
                        },
                        {
                            item: "VC-YK339-PK",
                            qty: 15,
                            desc: "EWG 1044 JF   York Three Drawer Accent Side Table, 18.5 inch W, Pink, (18.5 inch W x 15 inch D x 23 inch H)      Materials Bayur Wood + MDF   Finish Code SW 6296, Finish Name Fading Rose   Set Up    CBM 0.1787   Number of Shipping Boxes 1   ***DROPSHIP PACKAGING REQUIRED***  ",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-YK339-PK_001.jpg"
                        }
                    ]
                },
                "CG2512-08": {
                    Vendor: "V68 PT. FURNILAC PRIMAGUNA",
                    ecrd: "2026-02-16",
                    items: [
                        {
                            item: "NS-68406-BRV",
                            qty: 25,
                            desc: "EEZ 0584 JF  2 Drawer + 1 Shelf Nightstand, Walnut Color Code DSC 6403 (22x15x24)   Material Bayur Wood and MDF  Thin Medium Density Fiberboard - Phase 2   Antique Gold Oval Handle OV-185 E   CBM 0.21775   Packaging Brown Carton",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68406-BRV_001.jpg"
                        },
                        {
                            item: "ST-68522-BK",
                            qty: 15,
                            desc: "EDN 2419 JF     22 inch  Round X Base Side Table, Black (22.0x22.0x22.0)      Material Bayur Wood, MDF     CBM 0.0922     Packaging Brown carton    5 ply outer craft 200    Styrofoam 3 cm     Master Carton      ***round end table with chunky base (KD) Black on Veneer 22x22x22 Solid Wood Veneer & MDF cbm***     ***DROPSHIP PACKAGING REQUIRED***  KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-68522-BK_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-BK",
                            qty: 25,
                            desc: "CDE 1180 JF     Hooper 2 Drawer Wooden Accent Side Table (17.9x14.9x22.0)      Material MDF     CBM 0.173     Packaging Brown carton 5 ply outer craft 200 Styrofoam 3 cm     Master Carton      ***Crafted Home's Hooper 2 Drawer Wooden Accent Side Table-Black..(18x15x22) Material ColorBayur Wood and Mdf E2 Black..CBM0.17 PackingBox K#200+Styrofoam 3cm Protection (1pc case)***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-BK_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-BR",
                            qty: 50,
                            desc: "UDO 1044 NB     York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)      Material MDF     CBM 0.1787     Packaging Brown carton 5 ply outer craft 200 Styrofoam 3 cm     Master Carton      ***Crafted Home's York 3 Drawer Wooden Accent Side Table-Brown (19x15x23) Material ColorBayur Wood and Mdf E2 Brown..CBM0.18 PackingBox K#200+Styrofoam 3cm Protection (1pc case)***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-BR_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-NV",
                            qty: 25,
                            desc: "CDK 1044 JF     York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)      Material MDF     CBM 0.1787     Packaging Brown carton 5 ply outer craft 200 Styrofoam 3 cm     Master Carton      ***Crafted Home's York 3 Drawer Wooden Accent Side Table-Navy Blue (19x15x23) Material ColorBayur Wood and Mdf E2 Navy Blue..CBM0.18 PackingBox K#200+Styrofoam 3cm Protection (1pc case)***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-NV_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-OR",
                            qty: 25,
                            desc: "UDL 1044 NB     York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)      Material MDF     CBM 0.1787     Packaging Brown carton 5 ply outer craft 200 Styrofoam 3 cm     Master Carton      ***Crafted Home's York 3 Drawer Wooden Accent Side Table-Orange..(19x15x23) Material Color  Bayur Wood and Mdf E2   Orange, CBM 0.17 Packing  Box K#200 + Protection***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-OR_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-WH",
                            qty: 35,
                            desc: "TGG 1044 NB     York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)      Material MDF, Acacia Wood     CBM 0.1787     Packaging Brown carton  5 ply outer craft 200  Styrofoam 3 cm     Master Carton      ***Crafted Home's York 3 Drawer Wooden Accent Side Table-White (19x15x23) Material ColorBayur Wood and Mdf E2 White..CBM0.17 PackingBox K#200+Styrofoam 2cm Protection (1pc case)***       KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-WH_001.jpg"
                        },
                        {
                            item: "VC-YK339-BL",
                            qty: 100,
                            desc: "ESL 1044 JF   York Three Drawer Wooden Accent Side Table, 18.5 inch W, Blue, (18.5 inch W x 15 inch D x 23 inch H)    Materials Solid Bayur Wood + Mdf E2 + Solid Meranti (NO VENEER)   Finish Code BNV 02, Finish Name Northern Air   Set Up    CBM 0.1787   Number of Shipping Boxes 1   ***DROPSHIP PACKAGING REQUIRED***    ***ISTA 3A PACKAGING REQUIRED***  ",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-YK339-BL_001.jpg"
                        },
                        {
                            item: "VC-YK339-PK",
                            qty: 70,
                            desc: "EWG 1044 JF   York Three Drawer Accent Side Table, 18.5 inch W, Pink, (18.5 inch W x 15 inch D x 23 inch H)      Materials Bayur Wood + MDF   Finish Code SW 6296, Finish Name Fading Rose   Set Up    CBM 0.1787   Number of Shipping Boxes 1   ***DROPSHIP PACKAGING REQUIRED***  ",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-YK339-PK_001.jpg"
                        }
                    ]
                },
                "CG2512-09": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-03-02",
                    items: [
                        {
                            item: "CT-70115",
                            qty: 15,
                            desc: "J20317-B3S523-PJW     Borneo Round Abaca Coffee Table (35.43x35.43x18.11)      Material Abaca       CBM 0.387     Packaging Box Kraft #150 + Protect hat model for Round Coffee Table Bl Small Natural (size  75x15)     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70115_001.jpg"
                        },
                        {
                            item: "JV-ABL401",
                            qty: 35,
                            desc: "J20059CO87-M62Z03PJW     Abella Round Coffee Table (34.25x34.25x16.53)      Material Rotan Frame; Banana Small  Astor + Banana (Styrofoam 1) + Single Face  Master Carton Y , 1***DROPSHIP PACKAGING REQUIRED***  KD       CBM 0.397     Packaging Box Kraft #150 + Protect Styrofoam (Styrofoam 1) + Single Face     Master Carton Y , 1     ***DROPSHIP PACKAGING REQUIRED***  ******",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-ABL401_001.jpg"
                        },
                        {
                            item: "JV-CR401",
                            qty: 20,
                            desc: "J20093CT-B5CL03-PJW     Cypress Cocktail Table (35.43x35.43x17.71)      Material Wood Frame; Banana Twisted Astor Lamination Natural Color       CBM 0.358     Packaging Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-CR401_001.jpg"
                        },
                        {
                            item: "JV-FR205-WF",
                            qty: 30,
                            desc: "J41038DMFB1S389JW188     Francis Double Bench (56.69x16.92x22.04)      Material Abaca       CBM 0.346     Packaging Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Protect Box Styrofoam 2cm for Headboard 6cm + Single Face     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-FR205-WF_001.jpg"
                        },
                        {
                            item: "JV-OR405-NT",
                            qty: 13,
                            desc: "J21069ST-LCMU02-PJW     Orinda Side Table (19.68x19.68x19.68)      Material Munggur Wood       CBM 0.179     Packaging Box Kraft #150 + Protect Box Styrofoam 2cm for a circle shape ( L ) + Protect hat model for Orinda Stool (bottom)(top styrofoam outside) bottom cover (size 50x50x10 + Single Face     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-OR405-NT_001.jpg"
                        },
                        {
                            item: "OR-RL301-NT",
                            qty: 50,
                            desc: "J20315ST-TWWD937-PJW     Roell Teak Top Side Table with Natural Root Base (20.47x20.47x20.47)      Material Teakwood       CBM 0.195     Packaging Box Kraft #150 + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OR-RL301-NT_001.jpg"
                        },
                        {
                            item: "TT-DF-SC301",
                            qty: 15,
                            desc: "J22432CT-K1S06-PJW     Seascape Driftwood Rattan Coffee Table With Storage (37.40x19.68x17.71)      Material Wood Frame; Full Kubu Grey; Costello color for the leg       CBM 0.246     Packaging Box Kraft#150 + Protect Box Styrofoam 2cm (elbow shape) + Single Face     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-DF-SC301_001.jpg"
                        },
                        {
                            item: "TT-NTR-OP302-NT",
                            qty: 40,
                            desc: "JG-OSW-ET-PJW     Open Slat Wooden End Table (11.81x11.81x17.71)      Material Wood       CBM 0.071     Packaging Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-NTR-OP302-NT_001.jpg"
                        },
                        {
                            item: "TT-NTR-OP401-NT",
                            qty: 15,
                            desc: "JG-OSW-CT-PJW     Open Slat Wooden Coffee Table (23.62x23.62x14.96)      Material        CBM 0.204     Packaging Box Kraft #150 + Box SW + Protect Box Styrofoam PE 2cm (L shape)     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-NTR-OP401-NT_001.jpg"
                        },
                        {
                            item: "TT-OR-LR502-NT",
                            qty: 10,
                            desc: "J20288RSTS-RGWD02PJW     Liberte Round Side Table With Stick Base (13.77x13.77x19.68)      Material        CBM 0.101     Packaging Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-OR-LR502-NT_001.jpg"
                        },
                        {
                            item: "TT-OR-NTR512",
                            qty: 15,
                            desc: "J21109S1-MUIR10-PJW     Natura Freeform Side Table With Iron Base (13.77x13.77x18.89)      Material Munggur Wood; Iron Legs       CBM 0.024     Packaging Box Kraft #150 + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Single Wall  wide 200 x 180 + wrap paper kg  wide 120 + Foam Sheet L.120 T.1mm mtr 1 roll 500 m     Master Carton Y , 1     ***DROPSHIP PACKAGING REQUIRED***  ******KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-OR-NTR512_001.jpg"
                        },
                        {
                            item: "TT-SY-AG305",
                            qty: 15,
                            desc: "JG-AGSST-PJW     Augusta Side Table (19.68x19.68x19.68)      Material        CBM 0.188     Packaging Box Kraft #150 + Protect Box Styrofoam PE 2cm (elbow shape)     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-SY-AG305_001.jpg"
                        },
                        {
                            item: "TT-SY-PL303-NT",
                            qty: 25,
                            desc: "JG-PLD-RS-PJW     Prelude Round Stool (14.96x14.96x15.74)      Material Teakwood       CBM 0.091     Packaging Box Kraft #150 + Box Single wall + Protect Box Styrofoam 2cm for a circle shape ( L )     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-SY-PL303-NT_001.jpg"
                        }
                    ]
                },
                "CG2512-10": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-03-04",
                    items: [
                        {
                            item: "JV-ABL401",
                            qty: 35,
                            desc: "J20059CO87-M62Z03PJW     Abella Round Coffee Table (34.25x34.25x16.53)      Material Rotan Frame; Banana Small  Astor + Banana (Styrofoam 1) + Single Face  Master Carton Y , 1***DROPSHIP PACKAGING REQUIRED***  KD       CBM 0.397     Packaging Box Kraft #150 + Protect Styrofoam (Styrofoam 1) + Single Face     Master Carton Y , 1     ***DROPSHIP PACKAGING REQUIRED***  ******",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-ABL401_001.jpg"
                        },
                        {
                            item: "JV-CR401",
                            qty: 20,
                            desc: "J20093CT-B5CL03-PJW     Cypress Cocktail Table (35.43x35.43x17.71)      Material Wood Frame; Banana Twisted Astor Lamination Natural Color       CBM 0.358     Packaging Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-CR401_001.jpg"
                        },
                        {
                            item: "JV-FR205-WF",
                            qty: 30,
                            desc: "J41038DMFB1S389JW188     Francis Double Bench (56.69x16.92x22.04)      Material Abaca       CBM 0.346     Packaging Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Protect Box Styrofoam 2cm for Headboard 6cm + Single Face     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-FR205-WF_001.jpg"
                        },
                        {
                            item: "JV-NHT402-4-WP-L",
                            qty: 22,
                            desc: "J20272RA-CN3B541-PJW     New Hampton Coconut Shell Round End Table, White Patina (19.68x19.68x23.22)      Material Wood; Coco Chips       CBM 0.202     Packaging Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT402-4-WP-L_001.jpg"
                        },
                        {
                            item: "JV-OR405-NT",
                            qty: 27,
                            desc: "J21069ST-LCMU02-PJW     Orinda Side Table (19.68x19.68x19.68)      Material Munggur Wood       CBM 0.179     Packaging Box Kraft #150 + Protect Box Styrofoam 2cm for a circle shape ( L ) + Protect hat model for Orinda Stool (bottom)(top styrofoam outside) bottom cover (size 50x50x10 + Single Face     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-OR405-NT_001.jpg"
                        },
                        {
                            item: "OR-RL301-NT",
                            qty: 50,
                            desc: "J20315ST-TWWD937-PJW     Roell Teak Top Side Table with Natural Root Base (20.47x20.47x20.47)      Material Teakwood       CBM 0.195     Packaging Box Kraft #150 + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OR-RL301-NT_001.jpg"
                        },
                        {
                            item: "TT-DF-SC301",
                            qty: 10,
                            desc: "J22432CT-K1S06-PJW     Seascape Driftwood Rattan Coffee Table With Storage (37.40x19.68x17.71)      Material Wood Frame; Full Kubu Grey; Costello color for the leg       CBM 0.246     Packaging Box Kraft#150 + Protect Box Styrofoam 2cm (elbow shape) + Single Face     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-DF-SC301_001.jpg"
                        },
                        {
                            item: "TT-NTR-OP302-NT",
                            qty: 40,
                            desc: "JG-OSW-ET-PJW     Open Slat Wooden End Table (11.81x11.81x17.71)      Material Wood       CBM 0.071     Packaging Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-NTR-OP302-NT_001.jpg"
                        },
                        {
                            item: "TT-NTR-OP401-NT",
                            qty: 15,
                            desc: "JG-OSW-CT-PJW     Open Slat Wooden Coffee Table (23.62x23.62x14.96)      Material        CBM 0.204     Packaging Box Kraft #150 + Box SW + Protect Box Styrofoam PE 2cm (L shape)     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-NTR-OP401-NT_001.jpg"
                        },
                        {
                            item: "TT-OR-LR502-NT",
                            qty: 10,
                            desc: "J20288RSTS-RGWD02PJW     Liberte Round Side Table With Stick Base (13.77x13.77x19.68)      Material        CBM 0.101     Packaging Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-OR-LR502-NT_001.jpg"
                        },
                        {
                            item: "TT-OR-NTR512",
                            qty: 15,
                            desc: "J21109S1-MUIR10-PJW     Natura Freeform Side Table With Iron Base (13.77x13.77x18.89)      Material Munggur Wood; Iron Legs       CBM 0.024     Packaging Box Kraft #150 + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Single Wall  wide 200 x 180 + wrap paper kg  wide 120 + Foam Sheet L.120 T.1mm mtr 1 roll 500 m     Master Carton Y , 1     ***DROPSHIP PACKAGING REQUIRED***  ******KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-OR-NTR512_001.jpg"
                        },
                        {
                            item: "TT-SY-AG305",
                            qty: 15,
                            desc: "JG-AGSST-PJW     Augusta Side Table (19.68x19.68x19.68)      Material        CBM 0.188     Packaging Box Kraft #150 + Protect Box Styrofoam PE 2cm (elbow shape)     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-SY-AG305_001.jpg"
                        },
                        {
                            item: "TT-SY-PL303-NT",
                            qty: 25,
                            desc: "JG-PLD-RS-PJW     Prelude Round Stool (14.96x14.96x15.74)      Material Teakwood       CBM 0.091     Packaging Box Kraft #150 + Box Single wall + Protect Box Styrofoam 2cm for a circle shape ( L )     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-SY-PL303-NT_001.jpg"
                        }
                    ]
                },
                "CG2512-11": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-03-06",
                    items: [
                        {
                            item: "JV-ABL401",
                            qty: 35,
                            desc: "J20059CO87-M62Z03PJW     Abella Round Coffee Table (34.25x34.25x16.53)      Material Rotan Frame; Banana Small  Astor + Banana (Styrofoam 1) + Single Face  Master Carton Y , 1***DROPSHIP PACKAGING REQUIRED***  KD       CBM 0.397     Packaging Box Kraft #150 + Protect Styrofoam (Styrofoam 1) + Single Face     Master Carton Y , 1     ***DROPSHIP PACKAGING REQUIRED***  ******",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-ABL401_001.jpg"
                        },
                        {
                            item: "JV-CR401",
                            qty: 15,
                            desc: "J20093CT-B5CL03-PJW     Cypress Cocktail Table (35.43x35.43x17.71)      Material Wood Frame; Banana Twisted Astor Lamination Natural Color       CBM 0.358     Packaging Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-CR401_001.jpg"
                        },
                        {
                            item: "JV-FR205-WF",
                            qty: 30,
                            desc: "J41038DMFB1S389JW188     Francis Double Bench (56.69x16.92x22.04)      Material Abaca       CBM 0.346     Packaging Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Protect Box Styrofoam 2cm for Headboard 6cm + Single Face     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-FR205-WF_001.jpg"
                        },
                        {
                            item: "JV-NHT402-4-WP-L",
                            qty: 48,
                            desc: "J20272RA-CN3B541-PJW     New Hampton Coconut Shell Round End Table, White Patina (19.68x19.68x23.22)      Material Wood; Coco Chips       CBM 0.202     Packaging Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT402-4-WP-L_001.jpg"
                        },
                        {
                            item: "JV-OR405-NT",
                            qty: 30,
                            desc: "J21069ST-LCMU02-PJW     Orinda Side Table (19.68x19.68x19.68)      Material Munggur Wood       CBM 0.179     Packaging Box Kraft #150 + Protect Box Styrofoam 2cm for a circle shape ( L ) + Protect hat model for Orinda Stool (bottom)(top styrofoam outside) bottom cover (size 50x50x10 + Single Face     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-OR405-NT_001.jpg"
                        },
                        {
                            item: "OR-RL301-NT",
                            qty: 50,
                            desc: "J20315ST-TWWD937-PJW     Roell Teak Top Side Table with Natural Root Base (20.47x20.47x20.47)      Material Teakwood       CBM 0.195     Packaging Box Kraft #150 + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OR-RL301-NT_001.jpg"
                        },
                        {
                            item: "TT-NTR-OP302-NT",
                            qty: 40,
                            desc: "JG-OSW-ET-PJW     Open Slat Wooden End Table (11.81x11.81x17.71)      Material Wood       CBM 0.071     Packaging Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-NTR-OP302-NT_001.jpg"
                        },
                        {
                            item: "TT-NTR-OP401-NT",
                            qty: 10,
                            desc: "JG-OSW-CT-PJW     Open Slat Wooden Coffee Table (23.62x23.62x14.96)      Material        CBM 0.204     Packaging Box Kraft #150 + Box SW + Protect Box Styrofoam PE 2cm (L shape)     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-NTR-OP401-NT_001.jpg"
                        },
                        {
                            item: "TT-OR-LR502-NT",
                            qty: 10,
                            desc: "J20288RSTS-RGWD02PJW     Liberte Round Side Table With Stick Base (13.77x13.77x19.68)      Material        CBM 0.101     Packaging Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-OR-LR502-NT_001.jpg"
                        },
                        {
                            item: "TT-OR-NTR512",
                            qty: 15,
                            desc: "J21109S1-MUIR10-PJW     Natura Freeform Side Table With Iron Base (13.77x13.77x18.89)      Material Munggur Wood; Iron Legs       CBM 0.024     Packaging Box Kraft #150 + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Single Wall  wide 200 x 180 + wrap paper kg  wide 120 + Foam Sheet L.120 T.1mm mtr 1 roll 500 m     Master Carton Y , 1     ***DROPSHIP PACKAGING REQUIRED***  ******KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-OR-NTR512_001.jpg"
                        },
                        {
                            item: "TT-SY-AG305",
                            qty: 15,
                            desc: "JG-AGSST-PJW     Augusta Side Table (19.68x19.68x19.68)      Material        CBM 0.188     Packaging Box Kraft #150 + Protect Box Styrofoam PE 2cm (elbow shape)     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-SY-AG305_001.jpg"
                        },
                        {
                            item: "TT-SY-PL303-NT",
                            qty: 20,
                            desc: "JG-PLD-RS-PJW     Prelude Round Stool (14.96x14.96x15.74)      Material Teakwood       CBM 0.091     Packaging Box Kraft #150 + Box Single wall + Protect Box Styrofoam 2cm for a circle shape ( L )     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-SY-PL303-NT_001.jpg"
                        }
                    ]
                },
                "CG2512-12": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-03-10",
                    items: [
                        {
                            item: "JV-ABL401",
                            qty: 35,
                            desc: "J20059CO87-M62Z03PJW     Abella Round Coffee Table (34.25x34.25x16.53)      Material Rotan Frame; Banana Small  Astor + Banana (Styrofoam 1) + Single Face  Master Carton Y , 1***DROPSHIP PACKAGING REQUIRED***  KD       CBM 0.397     Packaging Box Kraft #150 + Protect Styrofoam (Styrofoam 1) + Single Face     Master Carton Y , 1     ***DROPSHIP PACKAGING REQUIRED***  ******",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-ABL401_001.jpg"
                        },
                        {
                            item: "JV-CR401",
                            qty: 15,
                            desc: "J20093CT-B5CL03-PJW     Cypress Cocktail Table (35.43x35.43x17.71)      Material Wood Frame; Banana Twisted Astor Lamination Natural Color       CBM 0.358     Packaging Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-CR401_001.jpg"
                        },
                        {
                            item: "JV-FR205-WF",
                            qty: 30,
                            desc: "J41038DMFB1S389JW188     Francis Double Bench (56.69x16.92x22.04)      Material Abaca       CBM 0.346     Packaging Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Protect Box Styrofoam 2cm for Headboard 6cm + Single Face     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-FR205-WF_001.jpg"
                        },
                        {
                            item: "JV-NHT402-4-WP-L",
                            qty: 52,
                            desc: "J20272RA-CN3B541-PJW     New Hampton Coconut Shell Round End Table, White Patina (19.68x19.68x23.22)      Material Wood; Coco Chips       CBM 0.202     Packaging Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT402-4-WP-L_001.jpg"
                        },
                        {
                            item: "JV-OR405-NT",
                            qty: 30,
                            desc: "J21069ST-LCMU02-PJW     Orinda Side Table (19.68x19.68x19.68)      Material Munggur Wood       CBM 0.179     Packaging Box Kraft #150 + Protect Box Styrofoam 2cm for a circle shape ( L ) + Protect hat model for Orinda Stool (bottom)(top styrofoam outside) bottom cover (size 50x50x10 + Single Face     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-OR405-NT_001.jpg"
                        },
                        {
                            item: "OR-RL301-NT",
                            qty: 50,
                            desc: "J20315ST-TWWD937-PJW     Roell Teak Top Side Table with Natural Root Base (20.47x20.47x20.47)      Material Teakwood       CBM 0.195     Packaging Box Kraft #150 + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OR-RL301-NT_001.jpg"
                        },
                        {
                            item: "TT-NTR-OP302-NT",
                            qty: 35,
                            desc: "JG-OSW-ET-PJW     Open Slat Wooden End Table (11.81x11.81x17.71)      Material Wood       CBM 0.071     Packaging Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-NTR-OP302-NT_001.jpg"
                        },
                        {
                            item: "TT-NTR-OP401-NT",
                            qty: 10,
                            desc: "JG-OSW-CT-PJW     Open Slat Wooden Coffee Table (23.62x23.62x14.96)      Material        CBM 0.204     Packaging Box Kraft #150 + Box SW + Protect Box Styrofoam PE 2cm (L shape)     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-NTR-OP401-NT_001.jpg"
                        },
                        {
                            item: "TT-OR-LR502-NT",
                            qty: 10,
                            desc: "J20288RSTS-RGWD02PJW     Liberte Round Side Table With Stick Base (13.77x13.77x19.68)      Material        CBM 0.101     Packaging Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-OR-LR502-NT_001.jpg"
                        },
                        {
                            item: "TT-SY-AG305",
                            qty: 15,
                            desc: "JG-AGSST-PJW     Augusta Side Table (19.68x19.68x19.68)      Material        CBM 0.188     Packaging Box Kraft #150 + Protect Box Styrofoam PE 2cm (elbow shape)     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-SY-AG305_001.jpg"
                        },
                        {
                            item: "TT-SY-PL303-NT",
                            qty: 20,
                            desc: "JG-PLD-RS-PJW     Prelude Round Stool (14.96x14.96x15.74)      Material Teakwood       CBM 0.091     Packaging Box Kraft #150 + Box Single wall + Protect Box Styrofoam 2cm for a circle shape ( L )     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-SY-PL303-NT_001.jpg"
                        }
                    ]
                },
                "CG2512-13": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-02-27",
                    items: [
                        {
                            item: "JV-ABL401",
                            qty: 35,
                            desc: "J20059CO87-M62Z03PJW     Abella Round Coffee Table (34.25x34.25x16.53)      Material Rotan Frame; Banana Small  Astor + Banana (Styrofoam 1) + Single Face  Master Carton Y , 1***DROPSHIP PACKAGING REQUIRED***  KD       CBM 0.397     Packaging Box Kraft #150 + Protect Styrofoam (Styrofoam 1) + Single Face     Master Carton Y , 1     ***DROPSHIP PACKAGING REQUIRED***  ******",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-ABL401_001.jpg"
                        },
                        {
                            item: "JV-CR401",
                            qty: 15,
                            desc: "J20093CT-B5CL03-PJW     Cypress Cocktail Table (35.43x35.43x17.71)      Material Wood Frame; Banana Twisted Astor Lamination Natural Color       CBM 0.358     Packaging Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-CR401_001.jpg"
                        },
                        {
                            item: "JV-FR205-WF",
                            qty: 30,
                            desc: "J41038DMFB1S389JW188     Francis Double Bench (56.69x16.92x22.04)      Material Abaca       CBM 0.346     Packaging Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Protect Box Styrofoam 2cm for Headboard 6cm + Single Face     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-FR205-WF_001.jpg"
                        },
                        {
                            item: "JV-NHT402-4-WP-L",
                            qty: 49,
                            desc: "J20272RA-CN3B541-PJW     New Hampton Coconut Shell Round End Table, White Patina (19.68x19.68x23.22)      Material Wood; Coco Chips       CBM 0.202     Packaging Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT402-4-WP-L_001.jpg"
                        },
                        {
                            item: "JV-NHT402-WP",
                            qty: 10,
                            desc: "J20081ET-CN3B541-PJW     New Hampton End Table (16.53x16.53x18.50)      Material Coconut Shell       CBM 0.135     Packaging Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm (elbow shape) stack     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT402-WP_001.jpg"
                        },
                        {
                            item: "JV-OR405-NT",
                            qty: 25,
                            desc: "J21069ST-LCMU02-PJW     Orinda Side Table (19.68x19.68x19.68)      Material Munggur Wood       CBM 0.179     Packaging Box Kraft #150 + Protect Box Styrofoam 2cm for a circle shape ( L ) + Protect hat model for Orinda Stool (bottom)(top styrofoam outside) bottom cover (size 50x50x10 + Single Face     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-OR405-NT_001.jpg"
                        },
                        {
                            item: "OR-RL301-NT",
                            qty: 50,
                            desc: "J20315ST-TWWD937-PJW     Roell Teak Top Side Table with Natural Root Base (20.47x20.47x20.47)      Material Teakwood       CBM 0.195     Packaging Box Kraft #150 + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OR-RL301-NT_001.jpg"
                        },
                        {
                            item: "SY-EL305",
                            qty: 10,
                            desc: "JG-EL-ST-WS-PJW     Ellantra Side Table (12.59x12.59x17.71)      Material Wood       CBM 0.097     Packaging Box Corner Protect Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )        inch Drop Ship packaging inch  required",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SY-EL305_001.jpg"
                        },
                        {
                            item: "TT-NTR-OP302-NT",
                            qty: 35,
                            desc: "JG-OSW-ET-PJW     Open Slat Wooden End Table (11.81x11.81x17.71)      Material Wood       CBM 0.071     Packaging Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-NTR-OP302-NT_001.jpg"
                        },
                        {
                            item: "TT-NTR-OP401-NT",
                            qty: 10,
                            desc: "JG-OSW-CT-PJW     Open Slat Wooden Coffee Table (23.62x23.62x14.96)      Material        CBM 0.204     Packaging Box Kraft #150 + Box SW + Protect Box Styrofoam PE 2cm (L shape)     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-NTR-OP401-NT_001.jpg"
                        },
                        {
                            item: "TT-OR-LR502-NT",
                            qty: 10,
                            desc: "J20288RSTS-RGWD02PJW     Liberte Round Side Table With Stick Base (13.77x13.77x19.68)      Material        CBM 0.101     Packaging Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-OR-LR502-NT_001.jpg"
                        },
                        {
                            item: "TT-SY-AG305",
                            qty: 10,
                            desc: "JG-AGSST-PJW     Augusta Side Table (19.68x19.68x19.68)      Material        CBM 0.188     Packaging Box Kraft #150 + Protect Box Styrofoam PE 2cm (elbow shape)     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-SY-AG305_001.jpg"
                        },
                        {
                            item: "TT-SY-PL303-NT",
                            qty: 20,
                            desc: "JG-PLD-RS-PJW     Prelude Round Stool (14.96x14.96x15.74)      Material Teakwood       CBM 0.091     Packaging Box Kraft #150 + Box Single wall + Protect Box Styrofoam 2cm for a circle shape ( L )     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-SY-PL303-NT_001.jpg"
                        }
                    ]
                },
                "CG2512-14": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-03-16",
                    items: [
                        {
                            item: "JV-ABL401",
                            qty: 30,
                            desc: "J20059CO87-M62Z03PJW     Abella Round Coffee Table (34.25x34.25x16.53)      Material Rotan Frame; Banana Small  Astor + Banana (Styrofoam 1) + Single Face  Master Carton Y , 1***DROPSHIP PACKAGING REQUIRED***  KD       CBM 0.397     Packaging Box Kraft #150 + Protect Styrofoam (Styrofoam 1) + Single Face     Master Carton Y , 1     ***DROPSHIP PACKAGING REQUIRED***  ******",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-ABL401_001.jpg"
                        },
                        {
                            item: "JV-CR401",
                            qty: 15,
                            desc: "J20093CT-B5CL03-PJW     Cypress Cocktail Table (35.43x35.43x17.71)      Material Wood Frame; Banana Twisted Astor Lamination Natural Color       CBM 0.358     Packaging Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-CR401_001.jpg"
                        },
                        {
                            item: "JV-FR205-WF",
                            qty: 30,
                            desc: "J41038DMFB1S389JW188     Francis Double Bench (56.69x16.92x22.04)      Material Abaca       CBM 0.346     Packaging Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Protect Box Styrofoam 2cm for Headboard 6cm + Single Face     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-FR205-WF_001.jpg"
                        },
                        {
                            item: "JV-NHT402-4-WP-L",
                            qty: 51,
                            desc: "J20272RA-CN3B541-PJW     New Hampton Coconut Shell Round End Table, White Patina (19.68x19.68x23.22)      Material Wood; Coco Chips       CBM 0.202     Packaging Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT402-4-WP-L_001.jpg"
                        },
                        {
                            item: "JV-NHT402-WP",
                            qty: 10,
                            desc: "J20081ET-CN3B541-PJW     New Hampton End Table (16.53x16.53x18.50)      Material Coconut Shell       CBM 0.135     Packaging Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm (elbow shape) stack     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT402-WP_001.jpg"
                        },
                        {
                            item: "JV-OR405-NT",
                            qty: 25,
                            desc: "J21069ST-LCMU02-PJW     Orinda Side Table (19.68x19.68x19.68)      Material Munggur Wood       CBM 0.179     Packaging Box Kraft #150 + Protect Box Styrofoam 2cm for a circle shape ( L ) + Protect hat model for Orinda Stool (bottom)(top styrofoam outside) bottom cover (size 50x50x10 + Single Face     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-OR405-NT_001.jpg"
                        },
                        {
                            item: "OR-RL301-NT",
                            qty: 50,
                            desc: "J20315ST-TWWD937-PJW     Roell Teak Top Side Table with Natural Root Base (20.47x20.47x20.47)      Material Teakwood       CBM 0.195     Packaging Box Kraft #150 + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OR-RL301-NT_001.jpg"
                        },
                        {
                            item: "SY-EL305",
                            qty: 15,
                            desc: "JG-EL-ST-WS-PJW     Ellantra Side Table (12.59x12.59x17.71)      Material Wood       CBM 0.097     Packaging Box Corner Protect Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )        inch Drop Ship packaging inch  required",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SY-EL305_001.jpg"
                        },
                        {
                            item: "TT-NTR-OP302-NT",
                            qty: 35,
                            desc: "JG-OSW-ET-PJW     Open Slat Wooden End Table (11.81x11.81x17.71)      Material Wood       CBM 0.071     Packaging Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-NTR-OP302-NT_001.jpg"
                        },
                        {
                            item: "TT-NTR-OP401-NT",
                            qty: 20,
                            desc: "JG-OSW-CT-PJW     Open Slat Wooden Coffee Table (23.62x23.62x14.96)      Material        CBM 0.204     Packaging Box Kraft #150 + Box SW + Protect Box Styrofoam PE 2cm (L shape)     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-NTR-OP401-NT_001.jpg"
                        },
                        {
                            item: "TT-SY-AG305",
                            qty: 10,
                            desc: "JG-AGSST-PJW     Augusta Side Table (19.68x19.68x19.68)      Material        CBM 0.188     Packaging Box Kraft #150 + Protect Box Styrofoam PE 2cm (elbow shape)     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-SY-AG305_001.jpg"
                        },
                        {
                            item: "TT-SY-PL303-NT",
                            qty: 20,
                            desc: "JG-PLD-RS-PJW     Prelude Round Stool (14.96x14.96x15.74)      Material Teakwood       CBM 0.091     Packaging Box Kraft #150 + Box Single wall + Protect Box Styrofoam 2cm for a circle shape ( L )     Master Carton Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-SY-PL303-NT_001.jpg"
                        }
                    ]
                },
                "CG2601-01": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-04-08",
                    items: [
                        {
                            item: "JV-ABL401",
                            qty: 111,
                            desc: "Abella Round Coffee Table (34.25x34.25x16.53) // Material: Rotan Frame; Banana Small Astor + Banana (Styrofoam 1) + Single Face Master Carton: Y , 1***DROPSHIP PACKAGING REQUIRED*** KD // CBM: 0.397 // Packaging: Box Kraft #150 + Protect Styrofoam (Styrofoam 1) + Single Face // Master Carton: Y , 1 // ***DROPSHIP PACKAGING REQUIRED*** ******",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-ABL401_001.jpg"
                        }
                    ]
                },
                "CG2601-02": {
                    Vendor: "V75 Pijar Sukma",
                    ecrd: "2026-04-30",
                    items: [
                        {
                            item: "OT-75333-BK",
                            qty: 31,
                            desc: "Sarlet 2 Tone Console Table With Drawer, 23.75 Inch W, Black/Brown, (23.75 Inch W x 10 Inch D x 31.5 Inch H) // Finish Code: B-NAT11/NAT02, Finish Name: Top Natural - Body Black // KD // CBM: 0.06 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** // ***ANTI TIP KIT REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75333-BK_001.jpg"
                        },
                        {
                            item: "OT-75333-NV",
                            qty: 31,
                            desc: "Sarlat 2 Tone Console Table With Drawer, 23.75 Inch W, Navy/Brown, (23.75 Inch W x 10 Inch D x 31.5 Inch H) // Finish Code: B-BM04/NAT02, Finish Name: Top Natural - Body Navy // KD // CBM: 0.06 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** // ***ANTI TIP KIT REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75333-NV_001.jpg"
                        },
                        {
                            item: "OT-75333-WH",
                            qty: 21,
                            desc: "Sarlet 2 Tone Console Table With Drawer, 23.75 Inch W, White/Brown, (23.75 Inch W x 10 Inch D x 31.5 Inch H) // Finish Code: B-BM01/NAT02, Finish Name: Top Natural - Body White // KD // CBM: 0.06 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** // ***ANTI TIP KIT REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75333-WH_001.jpg"
                        },
                        {
                            item: "TT-DU-75008-LB",
                            qty: 29,
                            desc: "Dumaine Bedside Table (15.75x11.81x25.59)   //  Material: Bayur Wood / Top MDF  //  Color: Light Blue (W9.L2+G9)  //  CBM: 0.066  //  Packaging: Carton Box 200 PSI / 5 ply / Plastic wrap around items + Paper oil warp around items+ foam protection + corner plastic protection  //  Master Carton:   //  ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-DU-75008-LB_001.jpg"
                        },
                        {
                            item: "TT-DU-75008-WH",
                            qty: 21,
                            desc: "Dumaine Bedside Table (15.75x11.81x25.59)   //  Material: Bayur Wood / Top MDF  //  Color: White (BA+WBSemi)  //  CBM: 0.066  //  Packaging: Carton Box 200 PSI / 5 ply / Plastic wrap around items + Foamsheet warp around items + foam protection + corner plastic protection  //  Master Carton:   //  ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-DU-75008-WH_001.jpg"
                        },
                        {
                            item: "TT-JO-75007-BL",
                            qty: 52,
                            desc: "Josephine Console Table, 24 Inch x10 Inch x31.5 Inch  (23.62x9.84x31.5)   //  Material: Bayur Wood / Top MDF  //  Color: Black (B-W48L2+WBSEMI/PG9)  //  CBM: 0.07  //  Packaging: Carton Box 200 PSI / 5 ply / Plastic wrap around items + Paper oil warp around items+ foam protection + corner plastic protection  //  Master Carton:   //  ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-JO-75007-BL_001.jpg"
                        },
                        {
                            item: "TT-JO-75007-LB",
                            qty: 26,
                            desc: "Josephine 24 Inch x10 Inch x31.5 Inch  Console Table (23.62x9.84x31.5)   //  Material: Bayur Wood / Top MDF  //  Color: Light Blue (B-W9.L2+G9/PG9)  //  CBM: 0.07  //  Packaging: Carton Box 200 PSI / 5 ply / Plastic wrap around items + Paper oil warp around items+ foam protection + corner plastic protection  //  Master Carton:   //  ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-JO-75007-LB_001.jpg"
                        },
                        {
                            item: "TT-JO-75007-WH",
                            qty: 32,
                            desc: "Josephine 24 Inch x10 Inch x31.5 Inch  Console Table (23.62x9.84x31.5)   //  Material: Bayur Wood / Top MDF  //  Color: White (B-CA.L3+G9/PO3)  //  CBM: 0.07  //  Packaging: Carton Box 200 PSI / 5 ply / Plastic wrap around items + Foamsheet warp around items + foam protection + corner plastic protection  //  Master Carton:   //  ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-JO-75007-WH_001.jpg"
                        }
                    ]
                },
                "CG2601-03": {
                    Vendor: "V68 PT. FURNILAC PRIMAGUNA",
                    ecrd: "2026-03-05",
                    items: [
                        {
                            item: "ST-68DR16-WN",
                            qty: 25,
                            desc: "16 Inch Cinched Wood Drum Table, Walnut (16x16x23.5) // Material: Wood, MDF // CBM: 0.1725 // Packaging: Inch Drop ship packaging Inch required 5 ply outer craft 200 Styrofoam 3 cm",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-68DR16-WN_001.jpg"
                        },
                        {
                            item: "TT-VC-AD301-BK",
                            qty: 25,
                            desc: "Auburn Traditional One Drawer Wooden Accent Side Table (17.0x14.9x23.4)   //  Material: MDF  //  CBM: 0.1687  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Auburn Traditional One Drawer Wooden Accent Side Table-Black (17x15x23) Material/Color:Bayur Wood and Mdf E2/Black..CBM:0.17 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-AD301-BK_001.jpg"
                        },
                        {
                            item: "TT-VC-AD301-BR",
                            qty: 25,
                            desc: "Auburn Traditional One Drawer Wooden Accent Side Table (17.0x14.9x23.4)   //  Material: MDF, Bayur Wood  //  CBM: 0.1687  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Auburn Traditional One Drawer Wooden Accent Side Table-Brown (17x15x23) Material/Color:Bayur Wood and Mdf E2 / Brown CBM:0.17 Packing:Box K#200+Styrofoam 2cm Protection***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-AD301-BR_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-BK",
                            qty: 60,
                            desc: "Hooper 2 Drawer Wooden Accent Side Table (17.9x14.9x22.0)   //  Material: MDF  //  CBM: 0.173  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Hooper 2 Drawer Wooden Accent Side Table-Black..(18x15x22) Material/Color:Bayur Wood and Mdf E2/Black..CBM:0.17 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-BK_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-BR",
                            qty: 60,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF  //  CBM: 0.1787  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table-Brown (19x15x23) Material/Color:Bayur Wood and Mdf E2/Brown..CBM:0.18 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-BR_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-WH",
                            qty: 150,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF, Acacia Wood  //  CBM: 0.1787  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table-White (19x15x23) Material/Color:Bayur Wood and Mdf E2/White..CBM:0.17 Packing:Box K#200+Styrofoam 2cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-WH_001.jpg"
                        },
                        {
                            item: "VC-HP325-NV",
                            qty: 35,
                            desc: "Hooper Two Drawer Wooden Accent Side Table, Navy, (18 Inch W x 15 Inch D x 22 Inch H) // CBM: 0.1686 // Packaging: Brown carton, 5 ply outer craft 200, Styrofoam 3 cm (1pc/case) // Materials: Bayur Wood and Mdf E2 // Finish Color: Navy // ***ISTA 3A Dropship Packaging Required***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-HP325-NV_001.jpg"
                        }
                    ]
                },
                "CG2601-04": {
                    Vendor: "V68 PT. FURNILAC PRIMAGUNA",
                    ecrd: "2026-03-05",
                    items: [
                        {
                            item: "ST-68DR16-WN",
                            qty: 25,
                            desc: "16 Inch Cinched Wood Drum Table, Walnut (16x16x23.5) // Material: Wood, MDF // CBM: 0.1725 // Packaging: Inch Drop ship packaging Inch required 5 ply outer craft 200 Styrofoam 3 cm",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-68DR16-WN_001.jpg"
                        },
                        {
                            item: "TT-VC-AD301-BK",
                            qty: 25,
                            desc: "Auburn Traditional One Drawer Wooden Accent Side Table (17.0x14.9x23.4)   //  Material: MDF  //  CBM: 0.1687  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Auburn Traditional One Drawer Wooden Accent Side Table-Black (17x15x23) Material/Color:Bayur Wood and Mdf E2/Black..CBM:0.17 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-AD301-BK_001.jpg"
                        },
                        {
                            item: "TT-VC-AD301-BR",
                            qty: 25,
                            desc: "Auburn Traditional One Drawer Wooden Accent Side Table (17.0x14.9x23.4)   //  Material: MDF, Bayur Wood  //  CBM: 0.1687  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Auburn Traditional One Drawer Wooden Accent Side Table-Brown (17x15x23) Material/Color:Bayur Wood and Mdf E2 / Brown CBM:0.17 Packing:Box K#200+Styrofoam 2cm Protection***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-AD301-BR_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-BK",
                            qty: 60,
                            desc: "Hooper 2 Drawer Wooden Accent Side Table (17.9x14.9x22.0)   //  Material: MDF  //  CBM: 0.173  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Hooper 2 Drawer Wooden Accent Side Table-Black..(18x15x22) Material/Color:Bayur Wood and Mdf E2/Black..CBM:0.17 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-BK_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-BR",
                            qty: 60,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF  //  CBM: 0.1787  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table-Brown (19x15x23) Material/Color:Bayur Wood and Mdf E2/Brown..CBM:0.18 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-BR_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-WH",
                            qty: 150,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF, Acacia Wood  //  CBM: 0.1787  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table-White (19x15x23) Material/Color:Bayur Wood and Mdf E2/White..CBM:0.17 Packing:Box K#200+Styrofoam 2cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-WH_001.jpg"
                        },
                        {
                            item: "VC-HP325-NV",
                            qty: 35,
                            desc: "Hooper Two Drawer Wooden Accent Side Table, Navy, (18 Inch W x 15 Inch D x 22 Inch H) // CBM: 0.1686 // Packaging: Brown carton, 5 ply outer craft 200, Styrofoam 3 cm (1pc/case) // Materials: Bayur Wood and Mdf E2 // Finish Color: Navy // ***ISTA 3A Dropship Packaging Required***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-HP325-NV_001.jpg"
                        }
                    ]
                },
                "CG2601-05": {
                    Vendor: "V68 PT. FURNILAC PRIMAGUNA",
                    ecrd: "2026-03-05",
                    items: [
                        {
                            item: "OT-68RA52-NT",
                            qty: 25,
                            desc: "Raffia Wrapped K/D Console Table with Shelf, Natural (47.0x15.0x30.0) // Material: Raffia, MDF // CBM: 0.2022 // Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm // ***DROPSHIP PACKAGING REQUIRED*** // KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-68RA52-NT_001.jpg"
                        },
                        {
                            item: "TT-VC-AD301-WH",
                            qty: 25,
                            desc: "Auburn Traditional One Drawer Wooden Accent Side Table (17.0x14.9x23.4)   //  Material: MDF  //  CBM: 0.1687  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Auburn Traditional One Drawer Wooden Accent Side Table-White (17x15x23) Material/Color:Bayur Wood and Mdf E2 / White CBM:0.17 Packing:Box K#200+Styrofoam 2cm Protection***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-AD301-WH_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-BR",
                            qty: 40,
                            desc: "Hooper Two Drawer Wooden Accent Side Table, Brown (17.9x14.9x22.0)   //  Material: Bayur Wood, MDF  //  CBM: 0.173  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Hooper 2 Drawer Wooden Accent Side Table-Brown (18x15x22) Material/Color:Bayur Wood and Mdf E2/Brown..CBM:0.17 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-BR_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-WH",
                            qty: 25,
                            desc: "Hooper 2 Drawer Wooden Accent Side Table (17.9x14.9x22.0)   //  Material: MDF, Acacia Wood  //  CBM: 0.173  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Hooper 2 Drawer Wooden Accent Side Table-White (18x15x22) Material/Color:Bayur Wood and Mdf E2/White..CBM:0.17 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-WH_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-NV",
                            qty: 115,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF  //  CBM: 0.1787  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table-Navy Blue (19x15x23) Material/Color:Bayur Wood and Mdf E2/Navy Blue..CBM:0.18 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-NV_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-OR",
                            qty: 25,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF  //  CBM: 0.1787  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table-Orange..(19x15x23) Material/Color : Bayur Wood and Mdf E2 / Orange, CBM: 0.17 Packing : Box K#200 + Protection***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-OR_001.jpg"
                        },
                        {
                            item: "VC-HP325-GW",
                            qty: 25,
                            desc: "Hooper Two Drawer Wooden Accent Side Table, Gray Wash (17.9x14.9x22.0)   //  Material: Bayur Wood, MDF  //  CBM: 0.1686  //  Packaging: Brown carton   5 ply outer craft 200   Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Hooper 2 Drawer Wooden Accent Side Table-Wheat..(18x15x22) Material/Color:Bayur Wood and Mdf E2/Wheat..CBM:0.17 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-HP325-GW_001.jpg"
                        },
                        {
                            item: "VC-YK339-BL",
                            qty: 30,
                            desc: "York Three Drawer Wooden Accent Side Table, 18.5 Inch W, Blue, (18.5 Inch W x 15 Inch D x 23 Inch H) // //Materials: Solid Bayur Wood + Mdf E2 + Solid Meranti (NO VENEER) // Finish Code: BNV/02, Finish Name: Northern Air // Set Up  // CBM: 0.1787 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-YK339-BL_001.jpg"
                        },
                        {
                            item: "VC-YK339-GW",
                            qty: 25,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF, Acacia Wood  //  CBM: 0.1787  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table- Gray Wash  (19x15x23) Material/Color:Bayur Wood and Mdf E2/Wheat..CBM:0.17 Packing:Box K#200+Styrofoam 2cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-YK339-GW_001.jpg"
                        },
                        {
                            item: "VC-YK339-PK",
                            qty: 38,
                            desc: "York Three Drawer Accent Side Table, 18.5 Inch W, Pink, (18.5 Inch W x 15 Inch D x 23 Inch H) //  // Materials: Bayur Wood + MDF // Finish Code: SW 6296, Finish Name: Fading Rose // Set Up  // CBM: 0.1787 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-YK339-PK_001.jpg"
                        }
                    ]
                },
                "CG2601-06": {
                    Vendor: "V68 PT. FURNILAC PRIMAGUNA",
                    ecrd: "2026-03-05",
                    items: [
                        {
                            item: "OT-68RA52-NT",
                            qty: 25,
                            desc: "Raffia Wrapped K/D Console Table with Shelf, Natural (47.0x15.0x30.0) // Material: Raffia, MDF // CBM: 0.2022 // Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm // ***DROPSHIP PACKAGING REQUIRED*** // KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-68RA52-NT_001.jpg"
                        },
                        {
                            item: "TT-VC-AD301-WH",
                            qty: 25,
                            desc: "Auburn Traditional One Drawer Wooden Accent Side Table (17.0x14.9x23.4)   //  Material: MDF  //  CBM: 0.1687  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Auburn Traditional One Drawer Wooden Accent Side Table-White (17x15x23) Material/Color:Bayur Wood and Mdf E2 / White CBM:0.17 Packing:Box K#200+Styrofoam 2cm Protection***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-AD301-WH_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-BR",
                            qty: 40,
                            desc: "Hooper Two Drawer Wooden Accent Side Table, Brown (17.9x14.9x22.0)   //  Material: Bayur Wood, MDF  //  CBM: 0.173  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Hooper 2 Drawer Wooden Accent Side Table-Brown (18x15x22) Material/Color:Bayur Wood and Mdf E2/Brown..CBM:0.17 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-BR_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-WH",
                            qty: 25,
                            desc: "Hooper 2 Drawer Wooden Accent Side Table (17.9x14.9x22.0)   //  Material: MDF, Acacia Wood  //  CBM: 0.173  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Hooper 2 Drawer Wooden Accent Side Table-White (18x15x22) Material/Color:Bayur Wood and Mdf E2/White..CBM:0.17 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-WH_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-NV",
                            qty: 100,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF  //  CBM: 0.1787  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table-Navy Blue (19x15x23) Material/Color:Bayur Wood and Mdf E2/Navy Blue..CBM:0.18 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-NV_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-OR",
                            qty: 25,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF  //  CBM: 0.1787  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table-Orange..(19x15x23) Material/Color : Bayur Wood and Mdf E2 / Orange, CBM: 0.17 Packing : Box K#200 + Protection***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-OR_001.jpg"
                        },
                        {
                            item: "VC-HP325-GW",
                            qty: 25,
                            desc: "Hooper Two Drawer Wooden Accent Side Table, Gray Wash (17.9x14.9x22.0)   //  Material: Bayur Wood, MDF  //  CBM: 0.1686  //  Packaging: Brown carton   5 ply outer craft 200   Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Hooper 2 Drawer Wooden Accent Side Table-Wheat..(18x15x22) Material/Color:Bayur Wood and Mdf E2/Wheat..CBM:0.17 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-HP325-GW_001.jpg"
                        },
                        {
                            item: "VC-YK339-BL",
                            qty: 30,
                            desc: "York Three Drawer Wooden Accent Side Table, 18.5 Inch W, Blue, (18.5 Inch W x 15 Inch D x 23 Inch H) // //Materials: Solid Bayur Wood + Mdf E2 + Solid Meranti (NO VENEER) // Finish Code: BNV/02, Finish Name: Northern Air // Set Up  // CBM: 0.1787 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-YK339-BL_001.jpg"
                        },
                        {
                            item: "VC-YK339-GW",
                            qty: 25,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF, Acacia Wood  //  CBM: 0.1787  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table- Gray Wash  (19x15x23) Material/Color:Bayur Wood and Mdf E2/Wheat..CBM:0.17 Packing:Box K#200+Styrofoam 2cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-YK339-GW_001.jpg"
                        },
                        {
                            item: "VC-YK339-PK",
                            qty: 53,
                            desc: "York Three Drawer Accent Side Table, 18.5 Inch W, Pink, (18.5 Inch W x 15 Inch D x 23 Inch H) //  // Materials: Bayur Wood + MDF // Finish Code: SW 6296, Finish Name: Fading Rose // Set Up  // CBM: 0.1787 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-YK339-PK_001.jpg"
                        }
                    ]
                },
                "CG2601-07": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-04-17",
                    items: [
                        {
                            item: "CT-70115",
                            qty: 20,
                            desc: "Borneo Round Abaca Coffee Table (35.43x35.43x18.11) // Material: Abaca // CBM: 0.387 // Packaging: Box Kraft #150 + Protect hat model for Round Coffee Table Bl Small Natural (size : 75x15) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70115_001.jpg"
                        },
                        {
                            item: "JV-ABL401",
                            qty: 46,
                            desc: "Abella Round Coffee Table (34.25x34.25x16.53) // Material: Rotan Frame; Banana Small Astor + Banana (Styrofoam 1) + Single Face Master Carton: Y , 1***DROPSHIP PACKAGING REQUIRED*** KD // CBM: 0.397 // Packaging: Box Kraft #150 + Protect Styrofoam (Styrofoam 1) + Single Face // Master Carton: Y , 1 // ***DROPSHIP PACKAGING REQUIRED*** ******",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-ABL401_001.jpg"
                        },
                        {
                            item: "JV-CR401",
                            qty: 20,
                            desc: "Cypress Cocktail Table (35.43x35.43x17.71) // Material: Wood Frame; Banana Twisted Astor Lamination Natural Color // CBM: 0.358 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-CR401_001.jpg"
                        },
                        {
                            item: "JV-FR205-WF",
                            qty: 25,
                            desc: "Francis Double Bench (56.69x16.92x22.04) // Material: Abaca // CBM: 0.346 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Protect Box Styrofoam 2cm for Headboard 6cm + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-FR205-WF_001.jpg"
                        },
                        {
                            item: "JV-NHT402-4-WP-L",
                            qty: 50,
                            desc: "New Hampton Coconut Shell Round End Table, White Patina (19.68x19.68x23.22) // Material: Wood; Coco Chips // CBM: 0.202 // Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L ) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT402-4-WP-L_001.jpg"
                        },
                        {
                            item: "JV-OR405-NT",
                            qty: 25,
                            desc: "Orinda Side Table (19.68x19.68x19.68) // Material: Munggur Wood // CBM: 0.179 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm for a circle shape ( L ) + Protect hat model for Orinda Stool (bottom)(top styrofoam outside) bottom cover (size 50x50x10 + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-OR405-NT_001.jpg"
                        },
                        {
                            item: "SY-MR401",
                            qty: 10,
                            desc: "Marina Abaca Double Bench with Storage (39.37x13.77x17.71)   //  Material: Abaca    //  CBM: 0.219  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L )  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SY-MR401_001.jpg"
                        },
                        {
                            item: "TT-NTR-OP302-NT",
                            qty: 31,
                            desc: "Open Slat Wooden End Table (11.81x11.81x17.71)   //  Material: Wood    //  CBM: 0.071  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-NTR-OP302-NT_001.jpg"
                        },
                        {
                            item: "TT-OR-LR502-NT",
                            qty: 40,
                            desc: "Liberte Round Side Table With Stick Base (13.77x13.77x19.68)   //  Material:     //  CBM: 0.101  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-OR-LR502-NT_001.jpg"
                        },
                        {
                            item: "TT-OR-NTR512",
                            qty: 15,
                            desc: "Natura Freeform Side Table With Iron Base (13.77x13.77x18.89)   //  Material: Munggur Wood; Iron Legs    //  CBM: 0.024  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Single Wall  wide 200 x 180 + wrap paper/kg  wide 120 + Foam Sheet L.120 T.1mm mtr/1 roll 500 m  //  Master Carton: Y , 1  //  ***DROPSHIP PACKAGING REQUIRED***  ******KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-OR-NTR512_001.jpg"
                        }
                    ]
                },
                "CG2601-08": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-04-20",
                    items: [
                        {
                            item: "CT-70115",
                            qty: 20,
                            desc: "Borneo Round Abaca Coffee Table (35.43x35.43x18.11) // Material: Abaca // CBM: 0.387 // Packaging: Box Kraft #150 + Protect hat model for Round Coffee Table Bl Small Natural (size : 75x15) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70115_001.jpg"
                        },
                        {
                            item: "JV-ABL401",
                            qty: 46,
                            desc: "Abella Round Coffee Table (34.25x34.25x16.53) // Material: Rotan Frame; Banana Small Astor + Banana (Styrofoam 1) + Single Face Master Carton: Y , 1***DROPSHIP PACKAGING REQUIRED*** KD // CBM: 0.397 // Packaging: Box Kraft #150 + Protect Styrofoam (Styrofoam 1) + Single Face // Master Carton: Y , 1 // ***DROPSHIP PACKAGING REQUIRED*** ******",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-ABL401_001.jpg"
                        },
                        {
                            item: "JV-CR401",
                            qty: 20,
                            desc: "Cypress Cocktail Table (35.43x35.43x17.71) // Material: Wood Frame; Banana Twisted Astor Lamination Natural Color // CBM: 0.358 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-CR401_001.jpg"
                        },
                        {
                            item: "JV-FR205-WF",
                            qty: 25,
                            desc: "Francis Double Bench (56.69x16.92x22.04) // Material: Abaca // CBM: 0.346 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Protect Box Styrofoam 2cm for Headboard 6cm + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-FR205-WF_001.jpg"
                        },
                        {
                            item: "JV-NHT402-4-WP-L",
                            qty: 50,
                            desc: "New Hampton Coconut Shell Round End Table, White Patina (19.68x19.68x23.22) // Material: Wood; Coco Chips // CBM: 0.202 // Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L ) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT402-4-WP-L_001.jpg"
                        },
                        {
                            item: "JV-OR405-NT",
                            qty: 25,
                            desc: "Orinda Side Table (19.68x19.68x19.68) // Material: Munggur Wood // CBM: 0.179 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm for a circle shape ( L ) + Protect hat model for Orinda Stool (bottom)(top styrofoam outside) bottom cover (size 50x50x10 + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-OR405-NT_001.jpg"
                        },
                        {
                            item: "SY-MR401",
                            qty: 10,
                            desc: "Marina Abaca Double Bench with Storage (39.37x13.77x17.71)   //  Material: Abaca    //  CBM: 0.219  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L )  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SY-MR401_001.jpg"
                        },
                        {
                            item: "TT-NTR-OP302-NT",
                            qty: 31,
                            desc: "Open Slat Wooden End Table (11.81x11.81x17.71)   //  Material: Wood    //  CBM: 0.071  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-NTR-OP302-NT_001.jpg"
                        },
                        {
                            item: "TT-OR-LR502-NT",
                            qty: 40,
                            desc: "Liberte Round Side Table With Stick Base (13.77x13.77x19.68)   //  Material:     //  CBM: 0.101  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-OR-LR502-NT_001.jpg"
                        },
                        {
                            item: "TT-OR-NTR512",
                            qty: 15,
                            desc: "Natura Freeform Side Table With Iron Base (13.77x13.77x18.89)   //  Material: Munggur Wood; Iron Legs    //  CBM: 0.024  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Single Wall  wide 200 x 180 + wrap paper/kg  wide 120 + Foam Sheet L.120 T.1mm mtr/1 roll 500 m  //  Master Carton: Y , 1  //  ***DROPSHIP PACKAGING REQUIRED***  ******KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-OR-NTR512_001.jpg"
                        }
                    ]
                },
                "CG2601-09": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-04-22",
                    items: [
                        {
                            item: "CT-70115",
                            qty: 20,
                            desc: "Borneo Round Abaca Coffee Table (35.43x35.43x18.11) // Material: Abaca // CBM: 0.387 // Packaging: Box Kraft #150 + Protect hat model for Round Coffee Table Bl Small Natural (size : 75x15) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70115_001.jpg"
                        },
                        {
                            item: "JV-ABL401",
                            qty: 25,
                            desc: "Abella Round Coffee Table (34.25x34.25x16.53) // Material: Rotan Frame; Banana Small Astor + Banana (Styrofoam 1) + Single Face Master Carton: Y , 1***DROPSHIP PACKAGING REQUIRED*** KD // CBM: 0.397 // Packaging: Box Kraft #150 + Protect Styrofoam (Styrofoam 1) + Single Face // Master Carton: Y , 1 // ***DROPSHIP PACKAGING REQUIRED*** ******",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-ABL401_001.jpg"
                        },
                        {
                            item: "JV-CR401",
                            qty: 25,
                            desc: "Cypress Cocktail Table (35.43x35.43x17.71) // Material: Wood Frame; Banana Twisted Astor Lamination Natural Color // CBM: 0.358 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-CR401_001.jpg"
                        },
                        {
                            item: "JV-FR205-WF",
                            qty: 30,
                            desc: "Francis Double Bench (56.69x16.92x22.04) // Material: Abaca // CBM: 0.346 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Protect Box Styrofoam 2cm for Headboard 6cm + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-FR205-WF_001.jpg"
                        },
                        {
                            item: "JV-NHT402-4-WP-L",
                            qty: 50,
                            desc: "New Hampton Coconut Shell Round End Table, White Patina (19.68x19.68x23.22) // Material: Wood; Coco Chips // CBM: 0.202 // Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L ) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT402-4-WP-L_001.jpg"
                        },
                        {
                            item: "JV-NHT402-WP",
                            qty: 15,
                            desc: "New Hampton End Table (16.53x16.53x18.50) // Material: Coconut Shell // CBM: 0.135 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm (elbow shape) stack // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT402-WP_001.jpg"
                        },
                        {
                            item: "JV-OR405-NT",
                            qty: 30,
                            desc: "Orinda Side Table (19.68x19.68x19.68) // Material: Munggur Wood // CBM: 0.179 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm for a circle shape ( L ) + Protect hat model for Orinda Stool (bottom)(top styrofoam outside) bottom cover (size 50x50x10 + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-OR405-NT_001.jpg"
                        },
                        {
                            item: "SY-EL305",
                            qty: 15,
                            desc: "Ellantra Side Table (12.59x12.59x17.71)   //  Material: Wood    //  CBM: 0.097  //  Packaging: Box Corner Protect Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )  //     Inch Drop Ship packaging Inch  required",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SY-EL305_001.jpg"
                        },
                        {
                            item: "SY-MR401",
                            qty: 10,
                            desc: "Marina Abaca Double Bench with Storage (39.37x13.77x17.71)   //  Material: Abaca    //  CBM: 0.219  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L )  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SY-MR401_001.jpg"
                        },
                        {
                            item: "TT-NTR-OP302-NT",
                            qty: 31,
                            desc: "Open Slat Wooden End Table (11.81x11.81x17.71)   //  Material: Wood    //  CBM: 0.071  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-NTR-OP302-NT_001.jpg"
                        },
                        {
                            item: "TT-OR-LR502-NT",
                            qty: 45,
                            desc: "Liberte Round Side Table With Stick Base (13.77x13.77x19.68)   //  Material:     //  CBM: 0.101  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-OR-LR502-NT_001.jpg"
                        },
                        {
                            item: "TT-OR-NTR512",
                            qty: 15,
                            desc: "Natura Freeform Side Table With Iron Base (13.77x13.77x18.89)   //  Material: Munggur Wood; Iron Legs    //  CBM: 0.024  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Single Wall  wide 200 x 180 + wrap paper/kg  wide 120 + Foam Sheet L.120 T.1mm mtr/1 roll 500 m  //  Master Carton: Y , 1  //  ***DROPSHIP PACKAGING REQUIRED***  ******KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-OR-NTR512_001.jpg"
                        }
                    ]
                },
                "CG2601-10": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-04-24",
                    items: [
                        {
                            item: "CT-70115",
                            qty: 20,
                            desc: "Borneo Round Abaca Coffee Table (35.43x35.43x18.11) // Material: Abaca // CBM: 0.387 // Packaging: Box Kraft #150 + Protect hat model for Round Coffee Table Bl Small Natural (size : 75x15) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70115_001.jpg"
                        },
                        {
                            item: "JV-ABL401",
                            qty: 22,
                            desc: "Abella Round Coffee Table (34.25x34.25x16.53) // Material: Rotan Frame; Banana Small Astor + Banana (Styrofoam 1) + Single Face Master Carton: Y , 1***DROPSHIP PACKAGING REQUIRED*** KD // CBM: 0.397 // Packaging: Box Kraft #150 + Protect Styrofoam (Styrofoam 1) + Single Face // Master Carton: Y , 1 // ***DROPSHIP PACKAGING REQUIRED*** ******",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-ABL401_001.jpg"
                        },
                        {
                            item: "JV-CR401",
                            qty: 25,
                            desc: "Cypress Cocktail Table (35.43x35.43x17.71) // Material: Wood Frame; Banana Twisted Astor Lamination Natural Color // CBM: 0.358 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-CR401_001.jpg"
                        },
                        {
                            item: "JV-FR205-WF",
                            qty: 30,
                            desc: "Francis Double Bench (56.69x16.92x22.04) // Material: Abaca // CBM: 0.346 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Protect Box Styrofoam 2cm for Headboard 6cm + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-FR205-WF_001.jpg"
                        },
                        {
                            item: "JV-NHT402-4-WP-L",
                            qty: 50,
                            desc: "New Hampton Coconut Shell Round End Table, White Patina (19.68x19.68x23.22) // Material: Wood; Coco Chips // CBM: 0.202 // Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L ) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT402-4-WP-L_001.jpg"
                        },
                        {
                            item: "JV-NHT402-WP",
                            qty: 15,
                            desc: "New Hampton End Table (16.53x16.53x18.50) // Material: Coconut Shell // CBM: 0.135 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm (elbow shape) stack // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT402-WP_001.jpg"
                        },
                        {
                            item: "JV-OR405-NT",
                            qty: 30,
                            desc: "Orinda Side Table (19.68x19.68x19.68) // Material: Munggur Wood // CBM: 0.179 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm for a circle shape ( L ) + Protect hat model for Orinda Stool (bottom)(top styrofoam outside) bottom cover (size 50x50x10 + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-OR405-NT_001.jpg"
                        },
                        {
                            item: "SY-EL305",
                            qty: 15,
                            desc: "Ellantra Side Table (12.59x12.59x17.71)   //  Material: Wood    //  CBM: 0.097  //  Packaging: Box Corner Protect Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )  //     Inch Drop Ship packaging Inch  required",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SY-EL305_001.jpg"
                        },
                        {
                            item: "SY-MR401",
                            qty: 15,
                            desc: "Marina Abaca Double Bench with Storage (39.37x13.77x17.71)   //  Material: Abaca    //  CBM: 0.219  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L )  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SY-MR401_001.jpg"
                        },
                        {
                            item: "TT-NTR-OP302-NT",
                            qty: 32,
                            desc: "Open Slat Wooden End Table (11.81x11.81x17.71)   //  Material: Wood    //  CBM: 0.071  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-NTR-OP302-NT_001.jpg"
                        },
                        {
                            item: "TT-OR-LR502-NT",
                            qty: 45,
                            desc: "Liberte Round Side Table With Stick Base (13.77x13.77x19.68)   //  Material:     //  CBM: 0.101  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-OR-LR502-NT_001.jpg"
                        },
                        {
                            item: "TT-OR-NTR512",
                            qty: 15,
                            desc: "Natura Freeform Side Table With Iron Base (13.77x13.77x18.89)   //  Material: Munggur Wood; Iron Legs    //  CBM: 0.024  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Single Wall  wide 200 x 180 + wrap paper/kg  wide 120 + Foam Sheet L.120 T.1mm mtr/1 roll 500 m  //  Master Carton: Y , 1  //  ***DROPSHIP PACKAGING REQUIRED***  ******KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-OR-NTR512_001.jpg"
                        }
                    ]
                },
                "CG2602-01": {
                    Vendor: "V68 PT. FURNILAC PRIMAGUNA",
                    ecrd: "2026-04-24",
                    items: [
                        {
                            item: "ST-68DR16-WN",
                            qty: 50,
                            desc: "16 Inch Cinched Wood Drum Table, Walnut (16x16x23.5) // Material: Wood, MDF // CBM: 0.1725 // Packaging: Inch Drop ship packaging Inch required 5 ply outer craft 200 Styrofoam 3 cm",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-68DR16-WN_001.jpg"
                        },
                        {
                            item: "TT-VC-AD301-BR",
                            qty: 50,
                            desc: "Auburn Traditional One Drawer Wooden Accent Side Table (17.0x14.9x23.4)   //  Material: MDF, Bayur Wood  //  CBM: 0.1687  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Auburn Traditional One Drawer Wooden Accent Side Table-Brown (17x15x23) Material/Color:Bayur Wood and Mdf E2 / Brown CBM:0.17 Packing:Box K#200+Styrofoam 2cm Protection***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-AD301-BR_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-BK",
                            qty: 35,
                            desc: "Hooper 2 Drawer Wooden Accent Side Table (17.9x14.9x22.0)   //  Material: MDF  //  CBM: 0.173  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Hooper 2 Drawer Wooden Accent Side Table-Black..(18x15x22) Material/Color:Bayur Wood and Mdf E2/Black..CBM:0.17 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-BK_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-BR",
                            qty: 45,
                            desc: "Hooper Two Drawer Wooden Accent Side Table, Brown (17.9x14.9x22.0)   //  Material: Bayur Wood, MDF  //  CBM: 0.173  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Hooper 2 Drawer Wooden Accent Side Table-Brown (18x15x22) Material/Color:Bayur Wood and Mdf E2/Brown..CBM:0.17 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-BR_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-WH",
                            qty: 25,
                            desc: "Hooper 2 Drawer Wooden Accent Side Table (17.9x14.9x22.0)   //  Material: MDF, Acacia Wood  //  CBM: 0.173  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Hooper 2 Drawer Wooden Accent Side Table-White (18x15x22) Material/Color:Bayur Wood and Mdf E2/White..CBM:0.17 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-WH_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-BR",
                            qty: 25,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF  //  CBM: 0.1787  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table-Brown (19x15x23) Material/Color:Bayur Wood and Mdf E2/Brown..CBM:0.18 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-BR_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-NV",
                            qty: 80,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF  //  CBM: 0.1787  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table-Navy Blue (19x15x23) Material/Color:Bayur Wood and Mdf E2/Navy Blue..CBM:0.18 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-NV_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-WH",
                            qty: 71,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF, Acacia Wood  //  CBM: 0.1787  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table-White (19x15x23) Material/Color:Bayur Wood and Mdf E2/White..CBM:0.17 Packing:Box K#200+Styrofoam 2cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-WH_001.jpg"
                        }
                    ]
                },
                "CG2602-02": {
                    Vendor: "V68 PT. FURNILAC PRIMAGUNA",
                    ecrd: "2026-04-24",
                    items: [
                        {
                            item: "ST-68DR16-WN",
                            qty: 50,
                            desc: "16 Inch Cinched Wood Drum Table, Walnut (16x16x23.5) // Material: Wood, MDF // CBM: 0.1725 // Packaging: Inch Drop ship packaging Inch required 5 ply outer craft 200 Styrofoam 3 cm",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-68DR16-WN_001.jpg"
                        },
                        {
                            item: "TT-VC-AD301-BR",
                            qty: 50,
                            desc: "Auburn Traditional One Drawer Wooden Accent Side Table (17.0x14.9x23.4)   //  Material: MDF, Bayur Wood  //  CBM: 0.1687  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Auburn Traditional One Drawer Wooden Accent Side Table-Brown (17x15x23) Material/Color:Bayur Wood and Mdf E2 / Brown CBM:0.17 Packing:Box K#200+Styrofoam 2cm Protection***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-AD301-BR_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-BK",
                            qty: 35,
                            desc: "Hooper 2 Drawer Wooden Accent Side Table (17.9x14.9x22.0)   //  Material: MDF  //  CBM: 0.173  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Hooper 2 Drawer Wooden Accent Side Table-Black..(18x15x22) Material/Color:Bayur Wood and Mdf E2/Black..CBM:0.17 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-BK_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-BR",
                            qty: 45,
                            desc: "Hooper Two Drawer Wooden Accent Side Table, Brown (17.9x14.9x22.0)   //  Material: Bayur Wood, MDF  //  CBM: 0.173  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Hooper 2 Drawer Wooden Accent Side Table-Brown (18x15x22) Material/Color:Bayur Wood and Mdf E2/Brown..CBM:0.17 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-BR_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-WH",
                            qty: 25,
                            desc: "Hooper 2 Drawer Wooden Accent Side Table (17.9x14.9x22.0)   //  Material: MDF, Acacia Wood  //  CBM: 0.173  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Hooper 2 Drawer Wooden Accent Side Table-White (18x15x22) Material/Color:Bayur Wood and Mdf E2/White..CBM:0.17 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-WH_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-BR",
                            qty: 25,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF  //  CBM: 0.1787  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table-Brown (19x15x23) Material/Color:Bayur Wood and Mdf E2/Brown..CBM:0.18 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-BR_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-NV",
                            qty: 80,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF  //  CBM: 0.1787  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table-Navy Blue (19x15x23) Material/Color:Bayur Wood and Mdf E2/Navy Blue..CBM:0.18 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-NV_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-WH",
                            qty: 71,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF, Acacia Wood  //  CBM: 0.1787  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table-White (19x15x23) Material/Color:Bayur Wood and Mdf E2/White..CBM:0.17 Packing:Box K#200+Styrofoam 2cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-WH_001.jpg"

                        }
                    ]
                },
                "CG2602-03": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-5-25",
                    items: [
                        {
                            item: "JV-CR401",
                            qty: 20,
                            desc: "Cypress Cocktail Table (35.43x35.43x17.71) // Material: Wood Frame; Banana Twisted Astor Lamination Natural Color // CBM: 0.358 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-CR401_001.jpg"
                        },
                        {
                            item: "JV-FR205-WF",
                            qty: 60,
                            desc: "Francis Double Bench (56.69x16.92x22.04) // Material: Abaca // CBM: 0.346 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Protect Box Styrofoam 2cm for Headboard 6cm + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-FR205-WF_001.jpg"
                        },
                        {
                            item: "JV-NHT402-4-WP-L",
                            qty: 35,
                            desc: "New Hampton Coconut Shell Round End Table, White Patina (19.68x19.68x23.22) // Material: Wood; Coco Chips // CBM: 0.202 // Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L ) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT402-4-WP-L_001.jpg"
                        },
                        {
                            item: "JV-NHT402-WP",
                            qty: 9,
                            desc: "New Hampton End Table (16.53x16.53x18.50) // Material: Coconut Shell // CBM: 0.135 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm (elbow shape) stack // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT402-WP_001.jpg"
                        },
                        {
                            item: "OR-RL301-NT",
                            qty: 55,
                            desc: "Roell Teak Top Side Table with Natural Root Base (20.47x20.47x20.47) // Material: Teakwood // CBM: 0.195 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OR-RL301-NT_001.jpg"
                        },
                        {
                            item: "SY-EL305",
                            qty: 11,
                            desc: "Ellantra Side Table (12.59x12.59x17.71)   //  Material: Wood    //  CBM: 0.097  //  Packaging: Box Corner Protect Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )  //     Inch Drop Ship packaging Inch  required",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SY-EL305_001.jpg"
                        },
                        {
                            item: "TT-OR-LR502-NT",
                            qty: 56,
                            desc: "Liberte Round Side Table With Stick Base (13.77x13.77x19.68)   //  Material:     //  CBM: 0.101  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-OR-LR502-NT_001.jpg"
                        },
                        {
                            item: "TT-OR-NTR512",
                            qty: 30,
                            desc: "Natura Freeform Side Table With Iron Base (13.77x13.77x18.89)   //  Material: Munggur Wood; Iron Legs    //  CBM: 0.024  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Single Wall  wide 200 x 180 + wrap paper/kg  wide 120 + Foam Sheet L.120 T.1mm mtr/1 roll 500 m  //  Master Carton: Y , 1  //  ***DROPSHIP PACKAGING REQUIRED***  ******KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-OR-NTR512_001.jpg"
                        },
                        {
                            item: "TT-SY-AG305",
                            qty: 30,
                            desc: "Augusta Side Table (19.68x19.68x19.68)   //  Material:     //  CBM: 0.188  //  Packaging: Box Kraft #150 + Protect Box Styrofoam PE 2cm (elbow shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-SY-AG305_001.jpg"
                        },
                        {
                            item: "TT-SY-PL303-NT",
                            qty: 60,
                            desc: "Prelude Round Stool (14.96x14.96x15.74)   //  Material: Teakwood    //  CBM: 0.091  //  Packaging: Box Kraft #150 + Box Single wall + Protect Box Styrofoam 2cm for a circle shape ( L )  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-SY-PL303-NT_001.jpg"
                        }
                    ]
                },
                "CG2602-04": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-5-29",
                    items: [
                        {
                            item: "JV-CR401",
                            qty: 20,
                            desc: "Cypress Cocktail Table (35.43x35.43x17.71) // Material: Wood Frame; Banana Twisted Astor Lamination Natural Color // CBM: 0.358 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-CR401_001.jpg"
                        },
                        {
                            item: "JV-FR205-WF",
                            qty: 60,
                            desc: "Francis Double Bench (56.69x16.92x22.04) // Material: Abaca // CBM: 0.346 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Protect Box Styrofoam 2cm for Headboard 6cm + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-FR205-WF_001.jpg"
                        },
                        {
                            item: "JV-NHT402-4-WP-L",
                            qty: 30,
                            desc: "New Hampton Coconut Shell Round End Table, White Patina (19.68x19.68x23.22) // Material: Wood; Coco Chips // CBM: 0.202 // Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L ) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT402-4-WP-L_001.jpg"
                        },
                        {
                            item: "JV-NHT402-WP",
                            qty: 9,
                            desc: "New Hampton End Table (16.53x16.53x18.50) // Material: Coconut Shell // CBM: 0.135 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm (elbow shape) stack // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT402-WP_001.jpg"
                        },
                        {
                            item: "OR-RL301-NT",
                            qty: 55,
                            desc: "Roell Teak Top Side Table with Natural Root Base (20.47x20.47x20.47) // Material: Teakwood // CBM: 0.195 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OR-RL301-NT_001.jpg"
                        },
                        {
                            item: "SY-EL305",
                            qty: 11,
                            desc: "Ellantra Side Table (12.59x12.59x17.71)   //  Material: Wood    //  CBM: 0.097  //  Packaging: Box Corner Protect Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )  //     Inch Drop Ship packaging Inch  required",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SY-EL305_001.jpg"
                        },
                        {
                            item: "TT-OR-LR502-NT",
                            qty: 56,
                            desc: "Liberte Round Side Table With Stick Base (13.77x13.77x19.68)   //  Material:     //  CBM: 0.101  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-OR-LR502-NT_001.jpg"
                        },
                        {
                            item: "TT-OR-NTR512",
                            qty: 25,
                            desc: "Natura Freeform Side Table With Iron Base (13.77x13.77x18.89)   //  Material: Munggur Wood; Iron Legs    //  CBM: 0.024  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Single Wall  wide 200 x 180 + wrap paper/kg  wide 120 + Foam Sheet L.120 T.1mm mtr/1 roll 500 m  //  Master Carton: Y , 1  //  ***DROPSHIP PACKAGING REQUIRED***  ******KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-OR-NTR512_001.jpg"
                        },
                        {
                            item: "TT-SY-AG305",
                            qty: 25,
                            desc: "Augusta Side Table (19.68x19.68x19.68)   //  Material:     //  CBM: 0.188  //  Packaging: Box Kraft #150 + Protect Box Styrofoam PE 2cm (elbow shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-SY-AG305_001.jpg"
                        },
                        {
                            item: "TT-SY-PL303-NT",
                            qty: 55,
                            desc: "Prelude Round Stool (14.96x14.96x15.74)   //  Material: Teakwood    //  CBM: 0.091  //  Packaging: Box Kraft #150 + Box Single wall + Protect Box Styrofoam 2cm for a circle shape ( L )  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-SY-PL303-NT_001.jpg"
                        }
                    ]
                },
                "CG2603-01": {
                    Vendor: "V68 PT. FURNILAC PRIMAGUNA",
                    ecrd: "2026-5-25",
                    items: [
                        {
                            item: "NS-68406-BKV",
                            qty: 15,
                            desc: "2 Drawer + 1 Shelf Nightstand, Matte Black Wood Veneer (22x15x24)   Material: Bayur Wood and MDF  Thin Medium Density Fiberboard - Phase 2   Antique Gold Oval Handle: OV-185/E   CBM: 0.21775   Packaging: Brown Carton",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68406-BKV_001.jpg"
                        },
                        {
                            item: "NS-68406-BRV",
                            qty: 15,
                            desc: "2 Drawer + 1 Shelf Nightstand, Walnut Color Code DSC 6403 (22x15x24)   Material: Bayur Wood and MDF  Thin Medium Density Fiberboard - Phase 2   Antique Gold Oval Handle: OV-185/E   CBM: 0.21775   Packaging: Brown Carton",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68406-BRV_001.jpg"
                        },
                        {
                            item: "ST-68DR16-WN",
                            qty: 20,
                            desc: "16 Inch Cinched Wood Drum Table, Walnut (16x16x23.5) // Material: Wood, MDF // CBM: 0.1725 // Packaging: Inch Drop ship packaging Inch required 5 ply outer craft 200 Styrofoam 3 cm",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-68DR16-WN_001.jpg"
                        },
                        {
                            item: "TT-VC-AD301-BK",
                            qty: 25,
                            desc: "Auburn Traditional One Drawer Wooden Accent Side Table (17.0x14.9x23.4)   //  Material: MDF  //  CBM: 0.1687  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Auburn Traditional One Drawer Wooden Accent Side Table-Black (17x15x23) Material/Color:Bayur Wood and Mdf E2/Black..CBM:0.17 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-AD301-BK_001.jpg"
                        },
                        {
                            item: "TT-VC-AD301-BR",
                            qty: 20,
                            desc: "Auburn Traditional One Drawer Wooden Accent Side Table (17.0x14.9x23.4)   //  Material: MDF, Bayur Wood  //  CBM: 0.1687  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Auburn Traditional One Drawer Wooden Accent Side Table-Brown (17x15x23) Material/Color:Bayur Wood and Mdf E2 / Brown CBM:0.17 Packing:Box K#200+Styrofoam 2cm Protection***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-AD301-BR_001.jpg"
                        },
                        {
                            item: "TT-VC-AD301-WH",
                            qty: 15,
                            desc: "Auburn Traditional One Drawer Wooden Accent Side Table (17.0x14.9x23.4)   //  Material: MDF  //  CBM: 0.1687  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Auburn Traditional One Drawer Wooden Accent Side Table-White (17x15x23) Material/Color:Bayur Wood and Mdf E2 / White CBM:0.17 Packing:Box K#200+Styrofoam 2cm Protection***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-AD301-WH_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-BK",
                            qty: 20,
                            desc: "Hooper 2 Drawer Wooden Accent Side Table (17.9x14.9x22.0)   //  Material: MDF  //  CBM: 0.173  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Hooper 2 Drawer Wooden Accent Side Table-Black..(18x15x22) Material/Color:Bayur Wood and Mdf E2/Black..CBM:0.17 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-BK_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-WH",
                            qty: 15,
                            desc: "Hooper 2 Drawer Wooden Accent Side Table (17.9x14.9x22.0)   //  Material: MDF, Acacia Wood  //  CBM: 0.173  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Hooper 2 Drawer Wooden Accent Side Table-White (18x15x22) Material/Color:Bayur Wood and Mdf E2/White..CBM:0.17 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-WH_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-BR",
                            qty: 25,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF  //  CBM: 0.1787  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table-Brown (19x15x23) Material/Color:Bayur Wood and Mdf E2/Brown..CBM:0.18 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-BR_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-NV",
                            qty: 43,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF  //  CBM: 0.1787  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table-Navy Blue (19x15x23) Material/Color:Bayur Wood and Mdf E2/Navy Blue..CBM:0.18 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-NV_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-WH",
                            qty: 40,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF, Acacia Wood  //  CBM: 0.1787  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table-White (19x15x23) Material/Color:Bayur Wood and Mdf E2/White..CBM:0.17 Packing:Box K#200+Styrofoam 2cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-WH_001.jpg"
                        },
                        {
                            item: "VC-HP325-NV",
                            qty: 20,
                            desc: "Hooper Two Drawer Wooden Accent Side Table, Navy, (18 Inch W x 15 Inch D x 22 Inch H) // CBM: 0.1686 // Packaging: Brown carton, 5 ply outer craft 200, Styrofoam 3 cm (1pc/case) // Materials: Bayur Wood and Mdf E2 // Finish Color: Navy // ***ISTA 3A Dropship Packaging Required***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-HP325-NV_001.jpg"
                        },
                        {
                            item: "VC-YK339-BK",
                            qty: 25,
                            desc: "York Three Drawer Accent Side Table, Black, (18.5 Inch W x 15 Inch D x 23 Inch H) // Materials: Bayur Wood and Mdf E2 // Finish Code: , Finish Name: Black // Set Up  // CBM: 0.1787 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-YK339-BK_001.jpg"
                        },
                        {
                            item: "VC-YK339-BL",
                            qty: 25,
                            desc: "York Three Drawer Wooden Accent Side Table, 18.5 Inch W, Blue, (18.5 Inch W x 15 Inch D x 23 Inch H) // //Materials: Solid Bayur Wood + Mdf E2 + Solid Meranti (NO VENEER) // Finish Code: BNV/02, Finish Name: Northern Air // Set Up  // CBM: 0.1787 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-YK339-BL_001.jpg"
                        },
                        {
                            item: "VC-YK339-GW",
                            qty: 30,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF, Acacia Wood  //  CBM: 0.1787  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table- Gray Wash  (19x15x23) Material/Color:Bayur Wood and Mdf E2/Wheat..CBM:0.17 Packing:Box K#200+Styrofoam 2cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-YK339-GW_001.jpg"
                        },
                        {
                            item: "VC-YK339-WB",
                            qty: 20,
                            desc: "York Three Drawer Wooden Accent Side Table, 18.5 Inch W, Warm Brown, (18.5 Inch W x 15 Inch D x 23 Inch H) // //Materials: Soli d Bayur Wood + Mdf E2 + Veneer Meranti // Finish Code: WNB/01, Finish Name: Warm Brown // Set Up  // CBM: 0.1787 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-YK339-WB_001.jpg"
                        }
                    ]
                },
                "CG2603-02": {
                    Vendor: "V68 PT. FURNILAC PRIMAGUNA",
                    ecrd: "2026-6-25",
                    items: [
                        {
                            item: "NS-68406-BKV",
                            qty: 15,
                            desc: "2 Drawer + 1 Shelf Nightstand, Matte Black Wood Veneer (22x15x24)   Material: Bayur Wood and MDF  Thin Medium Density Fiberboard - Phase 2   Antique Gold Oval Handle: OV-185/E   CBM: 0.21775   Packaging: Brown Carton",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68406-BKV_001.jpg"
                        },
                        {
                            item: "NS-68406-BRV",
                            qty: 15,
                            desc: "2 Drawer + 1 Shelf Nightstand, Walnut Color Code DSC 6403 (22x15x24)   Material: Bayur Wood and MDF  Thin Medium Density Fiberboard - Phase 2   Antique Gold Oval Handle: OV-185/E   CBM: 0.21775   Packaging: Brown Carton",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68406-BRV_001.jpg"
                        },
                        {
                            item: "ST-68DR16-WN",
                            qty: 20,
                            desc: "16 Inch Cinched Wood Drum Table, Walnut (16x16x23.5) // Material: Wood, MDF // CBM: 0.1725 // Packaging: Inch Drop ship packaging Inch required 5 ply outer craft 200 Styrofoam 3 cm",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-68DR16-WN_001.jpg"
                        },
                        {
                            item: "TT-VC-AD301-BK",
                            qty: 25,
                            desc: "Auburn Traditional One Drawer Wooden Accent Side Table (17.0x14.9x23.4)   //  Material: MDF  //  CBM: 0.1687  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Auburn Traditional One Drawer Wooden Accent Side Table-Black (17x15x23) Material/Color:Bayur Wood and Mdf E2/Black..CBM:0.17 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-AD301-BK_001.jpg"
                        },
                        {
                            item: "TT-VC-AD301-BR",
                            qty: 20,
                            desc: "Auburn Traditional One Drawer Wooden Accent Side Table (17.0x14.9x23.4)   //  Material: MDF, Bayur Wood  //  CBM: 0.1687  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Auburn Traditional One Drawer Wooden Accent Side Table-Brown (17x15x23) Material/Color:Bayur Wood and Mdf E2 / Brown CBM:0.17 Packing:Box K#200+Styrofoam 2cm Protection***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-AD301-BR_001.jpg"
                        },
                        {
                            item: "TT-VC-AD301-WH",
                            qty: 15,
                            desc: "Auburn Traditional One Drawer Wooden Accent Side Table (17.0x14.9x23.4)   //  Material: MDF  //  CBM: 0.1687  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Auburn Traditional One Drawer Wooden Accent Side Table-White (17x15x23) Material/Color:Bayur Wood and Mdf E2 / White CBM:0.17 Packing:Box K#200+Styrofoam 2cm Protection***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-AD301-WH_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-BK",
                            qty: 20,
                            desc: "Hooper 2 Drawer Wooden Accent Side Table (17.9x14.9x22.0)   //  Material: MDF  //  CBM: 0.173  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Hooper 2 Drawer Wooden Accent Side Table-Black..(18x15x22) Material/Color:Bayur Wood and Mdf E2/Black..CBM:0.17 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-BK_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-WH",
                            qty: 15,
                            desc: "Hooper 2 Drawer Wooden Accent Side Table (17.9x14.9x22.0)   //  Material: MDF, Acacia Wood  //  CBM: 0.173  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Hooper 2 Drawer Wooden Accent Side Table-White (18x15x22) Material/Color:Bayur Wood and Mdf E2/White..CBM:0.17 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-WH_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-BR",
                            qty: 25,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF  //  CBM: 0.1787  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table-Brown (19x15x23) Material/Color:Bayur Wood and Mdf E2/Brown..CBM:0.18 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-BR_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-NV",
                            qty: 43,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF  //  CBM: 0.1787  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table-Navy Blue (19x15x23) Material/Color:Bayur Wood and Mdf E2/Navy Blue..CBM:0.18 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-NV_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-WH",
                            qty: 40,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF, Acacia Wood  //  CBM: 0.1787  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table-White (19x15x23) Material/Color:Bayur Wood and Mdf E2/White..CBM:0.17 Packing:Box K#200+Styrofoam 2cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-WH_001.jpg"
                        },
                        {
                            item: "VC-HP325-NV",
                            qty: 20,
                            desc: "Hooper Two Drawer Wooden Accent Side Table, Navy, (18 Inch W x 15 Inch D x 22 Inch H) // CBM: 0.1686 // Packaging: Brown carton, 5 ply outer craft 200, Styrofoam 3 cm (1pc/case) // Materials: Bayur Wood and Mdf E2 // Finish Color: Navy // ***ISTA 3A Dropship Packaging Required***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-HP325-NV_001.jpg"
                        },
                        {
                            item: "VC-YK339-BK",
                            qty: 25,
                            desc: "York Three Drawer Accent Side Table, Black, (18.5 Inch W x 15 Inch D x 23 Inch H) // Materials: Bayur Wood and Mdf E2 // Finish Code: , Finish Name: Black // Set Up  // CBM: 0.1787 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-YK339-BK_001.jpg"
                        },
                        {
                            item: "VC-YK339-BL",
                            qty: 25,
                            desc: "York Three Drawer Wooden Accent Side Table, 18.5 Inch W, Blue, (18.5 Inch W x 15 Inch D x 23 Inch H) // //Materials: Solid Bayur Wood + Mdf E2 + Solid Meranti (NO VENEER) // Finish Code: BNV/02, Finish Name: Northern Air // Set Up  // CBM: 0.1787 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-YK339-BL_001.jpg"
                        },
                        {
                            item: "VC-YK339-GW",
                            qty: 30,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF, Acacia Wood  //  CBM: 0.1787  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table- Gray Wash  (19x15x23) Material/Color:Bayur Wood and Mdf E2/Wheat..CBM:0.17 Packing:Box K#200+Styrofoam 2cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-YK339-GW_001.jpg"
                        },
                        {
                            item: "VC-YK339-WB",
                            qty: 20,
                            desc: "York Three Drawer Wooden Accent Side Table, 18.5 Inch W, Warm Brown, (18.5 Inch W x 15 Inch D x 23 Inch H) // //Materials: Soli d Bayur Wood + Mdf E2 + Veneer Meranti // Finish Code: WNB/01, Finish Name: Warm Brown // Set Up  // CBM: 0.1787 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-YK339-WB_001.jpg"
                        }
                    ]
                },
                "CG2603-04": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-6-23",
                    items: [
                        {
                            item: "JV-ABL401",
                            qty: 100,
                            desc: "Abella Round Coffee Table (34.25x34.25x16.53) // Material: Rotan Frame; Banana Small Astor + Banana (Styrofoam 1) + Single Face Master Carton: Y , 1***DROPSHIP PACKAGING REQUIRED*** KD // CBM: 0.397 // Packaging: Box Kraft #150 + Protect Styrofoam (Styrofoam 1) + Single Face // Master Carton: Y , 1 // ***DROPSHIP PACKAGING REQUIRED*** ******",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-ABL401_001.jpg"
                        },
                        {
                            item: "JV-CR401",
                            qty: 30,
                            desc: "Cypress Cocktail Table (35.43x35.43x17.71) // Material: Wood Frame; Banana Twisted Astor Lamination Natural Color // CBM: 0.358 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-CR401_001.jpg"
                        },
                        {
                            item: "SY-EL305",
                            qty: 30,
                            desc: "Ellantra Side Table (12.59x12.59x17.71)   //  Material: Wood    //  CBM: 0.097  //  Packaging: Box Corner Protect Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )  //     Inch Drop Ship packaging Inch  required",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SY-EL305_001.jpg"
                        },
                        {
                            item: "TT-NTR-OP302-NT",
                            qty: 165,
                            desc: "Open Slat Wooden End Table (11.81x11.81x17.71)   //  Material: Wood    //  CBM: 0.071  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-NTR-OP302-NT_001.jpg"
                        }
                    ]
                },
                "JW 2507-07N": {
                    Vendor: "V63 Dcofrance & Edclaire",
                    ecrd: "2025-10-21",
                    items: [
                        {
                            item: "SB-635142-WH",
                            qty: 14,
                            desc: "Atlantis 4 Door Sideboard with Weave Inset Doors, 87 Inch W, White",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-635142-WH_001.jpg"
                        },
                        {
                            item: "SB-63519-WH",
                            qty: 4,
                            desc: "Caymon 4 Door Sideboard with Wrapped Handles",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63519-WH_001.jpg"
                        },
                        {
                            item: "CB-63521-WH",
                            qty: 3,
                            desc: "Cabinet with Rattan Inset",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CB-63521-WH_001.jpg"
                        },
                        {
                            item: "SB-63513-BR",
                            qty: 4,
                            desc: "Claude Bow Front Sideboard, Large, 83 Inch W, Brown",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63513-BR_001.jpg"
                        },
                        {
                            item: "ST-63660-WH",
                            qty: 20,
                            desc: "Atlantis Side Table With Woven Rattan Detail, 15.75 Inch W, White, (15.75 Inch W x 15.75 Inch D x 19.75 Inch H)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-63660-WH_001.jpg"
                        },
                        {
                            item: "CT-63550-WH",
                            qty: 10,
                            desc: "Atlantis Coffee Table With Woven Rattan Detail, 47.25 Inch W, White, (47.25 Inch W x 27.5 Inch D x 17.75 Inch H)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-63550-WH_001.jpg"
                        },
                        {
                            item: "SB-63513",
                            qty: 5,
                            desc: "Claude Bow Front Sideboard, Light Grey",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63513_001.jpg"
                        },
                        {
                            item: "SB-63425-WH",
                            qty: 8,
                            desc: "Lillian 4 Door Sideboard With Woven Rattan Doors, 62 Inch W, White/Natural, (62 Inch W x 15.75 Inch D x 36.25 Inch H)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63425-WH_001.jpg"
                        },
                        {
                            item: "CB-63520-WH",
                            qty: 5,
                            desc: "Two Tone Cabinet, Partial KD, White with Natural Paneling",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CB-63520-WH_001.jpg"
                        },
                        {
                            item: "SB-63899-BR",
                            qty: 8,
                            desc: "Edmond 2 Door Oval Sideboard With Woven Rattan Doors, 61 Inch W, Brown, (61 Inch W x 15.75 Inch D x 35.5 Inch H)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63899-BR_001.jpg"
                        }
                    ]
                },
                "JW 2508-15N": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2025-11-20",
                    items: [
                        {
                            item: "GD-70534-WW",
                            qty: 10,
                            desc: "Fulton Accent Cabinet, Whitewash, (37.5 Inch W x 14.25 Inch D x 35.5 Inch H)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/GD-70534-WW_001.jpg"
                        },
                        {
                            item: "NS-70578-WW",
                            qty: 10,
                            desc: "Fulton Nightstand With Drawer and Self, Whitewash, (28''W x 16''D x 26''H)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-70578-WW_001.jpg"
                        },
                        {
                            item: "JV-ABL401-BD",
                            qty: 15,
                            desc: "Abella Round Coffee Table, 34.25 Inch W, Blonde, (34.25 Inch W x 34.25 Inch D x 16.5 Inch H)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-ABL401-BD_001.jpg"
                        },
                        {
                            item: "AM-LE701-L-NT",
                            qty: 15,
                            desc: "Live Edge 3D Mirror Solid Suar Wood Frame, 30 Inch W, Natural, (30 Inch W x 2 Inch D x 30 Inch H)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-LE701-L-NT_001.jpg"
                        },
                        {
                            item: "WA-70804-NT",
                            qty: 15,
                            desc: "Small Organic Banana Leaf Wall Decor, Natural",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC-5801-NV_001.jpg"
                        },
                        {
                            item: "ST-70108-NT",
                            qty: 15,
                            desc: "Kayu Petrifed Wood Top Pedestal Accent Table, 20 Inch H, Natural  (12 Inch W x12 Inch D x20 Inch H)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70108-NT_001.jpg"
                        },
                        {
                            item: "ST-70177-NT",
                            qty: 15,
                            desc: "Esme Organic Wood Side Table With Cut Out, 16 Inch W, Antique Natural, (16 Inch W x 14 Inch D x 18 Inch H)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70177-NT_001.jpg"
                        },
                        {
                            item: "ST-70199-BK",
                            qty: 15,
                            desc: "Kaia Tree Stump Side Table, 14 Inch W, Black/Natural, (14 Inch W x 14 Inch D x 18 Inch H)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70199-BK_001.jpg"
                        },
                        {
                            item: "JV-FR205-BD",
                            qty: 15,
                            desc: "Francis Double Bench, KD, 56.75 Inch W, Blonde, (56.75'W x 17''D x 22''H)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-FR205-BD_001.jpg"
                        },
                        {
                            item: "JV-OR405-IV",
                            qty: 15,
                            desc: "Orinda Side Table with Wood Top, Ivory, (19.75 Inch W x 19.75 Inch D x 19.75 Inch H)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-OR405-IV_001.jpg"
                        },
                        {
                            item: "JV-JT403-BL",
                            qty: 15,
                            desc: "Juliette Coco End Table, Blue, (15.75 Inch W x 15.75 Inch D x 16.5 Inch H)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-JT403-BL_001.jpg"
                        },
                        {
                            item: "OR-RL301-NU",
                            qty: 15,
                            desc: "Roell Teak Top Side Table with Natural Root Base, Light Natural, (20.5 Inch W x 20.5 Inch D x 20.5 Inch H)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OR-RL301-NU_001.jpg"
                        },
                        {
                            item: "JV-NHT402-4-BL-L",
                            qty: 25,
                            desc: "New Hampton Round End Table, 19.75 Inch W, Blue, (19.75 Inch W x 19.75 Inch D x 23.25 Inch H)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT402-4-BL-L_001.jpg"
                        },
                        {
                            item: "ST-70108-BK",
                            qty: 25,
                            desc: "Kayu Petrifed Wood Top Pedestal Accent Table, 20 Inch H, Black (12 Inch W x12 Inch D x20 Inch H)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70108-BK_001.jpg"
                        },
                        {
                            item: "AB-70804-WH",
                            qty: 30,
                            desc: "Crown Carved Wooden Bowl, 16 Inch W x 16 Inch D x 6 Inch H, White",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AB-70804-WH_001.jpg"
                        },
                        {
                            item: "AB-70889-NT",
                            qty: 30,
                            desc: "Organic Teak Wood Carved Bowl, 24 Inch W, Natural, (24 Inch W x 24 Inch D x 6 Inch H)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AB-70889-NT_001.jpg"
                        }
                    ]
                },
                "JW 2509-07": {
                    Vendor: "V69 Dollar Furniture",
                    ecrd: "2025-11-20",
                    items: [
                        {
                            item: "DF-PR304-BL",
                            qty: 25,
                            desc: "Promenade Console with Shelf K/D-Black",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DF-PR304-BL_001.jpg"
                        },
                        {
                            item: "DF-PR306",
                            qty: 8,
                            desc: "Promenade 3-Door Shutter Sideboard (47x16x39)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DF-PR306_001.jpg"
                        },
                        {
                            item: "DF-PR511",
                            qty: 70,
                            desc: "Promenade Side Table with Drawer and Shelf (17.75X13X25.5)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DF-PR511_001.jpg"
                        },
                        {
                            item: "DF-PR512",
                            qty: 10,
                            desc: "Promenade Tall bookcase (20x14x71)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DF-PR512_001.jpg"
                        },
                        {
                            item: "DF-PRV504",
                            qty: 10,
                            desc: "Promenade Tall Bookcase",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DF-PRV504_001.jpg"
                        },
                        {
                            item: "SB-69566",
                            qty: 35,
                            desc: "Myra Bench (47x10x16)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-69566_001.jpg"
                        },
                        {
                            item: "ST-69198-LN",
                            qty: 20,
                            desc: "Adair Bobbin Leg Side Table, Light Natural",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-69198-LN_001.jpg"
                        },
                        {
                            item: "TT-DF-PR509",
                            qty: 50,
                            desc: "Promenade Side Table (26x18x26) **Assembly Required**",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-DF-PR509_001.jpg"
                        },
                        {
                            item: "TT-DF-PR515",
                            qty: 70,
                            desc: "Promenade Round Side Table-Small K/D..(19.75X19.75X25)",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-DF-PR515_001.jpg"
                        }
                    ]
                },
                "JW 2510-21N": {
                    Vendor: "V63 Dcofrance & Edclaire",
                    ecrd: "2026-02-27",
                    items: [
                        {
                            item: "SB-63425-WH",
                            qty: 8,
                            desc: "DCCO368_X-992 // Lillian 4 Door Sideboard With Woven Rattan Doors, 62 Inch W, White/Natural, (62 Inch W x 15.75 Inch D x 36.25 Inch H) // Materials: Bayur Wood, MDF, Plywood, Veneer Mindi Wood, Rattan, Doorcore // Finish Code: X-992 (Wood C-355 / Rattan Rapat RA-432), Finish Name: White Painted / Rattan Natural // Set Up  // CBM: 0.735 // Number of Shipping Boxes: 1 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63425-WH_001.jpg"
                        },
                        {
                            item: "SB-63513",
                            qty: 6,
                            desc: "DCCO81 X-781  //  Claude Bow Front Sideboard, White (82.68x19.69x35.44)   //  Material: Bayur Wood/MDF/Plywood/Plywood Veneer Mindi/Doorcore  //  CBM: 1.173  //  Packaging: B0-JF (Box Kraft 200 + Protect)  //  Master Carton: 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63513_001.jpg"
                        },
                        {
                            item: "SB-63513-BR",
                            qty: 7,
                            desc: "DCCO81_A-123 // Claude Bow Front Sideboard, Large, 83 Inch W, Brown 82.68x19.68x35.43, N/A // Fabric Type: N/A, Fabric Code: N/A, Fabric Content: N/A, Fill Material: N/A // Finish Code: A-123 (wood A-123), Finish Name: Brown // Set Up  // CBM: 1.17 // Number of Shipping Boxes: 1 //  //  //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63513-BR_001.jpg"
                        },
                        {
                            item: "SB-63513-SM",
                            qty: 11,
                            desc: "DCCO261_X-781 // Claude Bow Front Sideboard, Small, 61 Inch W, White 60.63x19.68x35.43, N/A // Fabric Type: N/A, Fabric Code: N/A, Fabric Content: N/A, Fill Material: N/A // Finish Code: X-781 ( body C-293 / Top A-195), Finish Name: White // Set Up  // CBM: 0.87 // Number of Shipping Boxes: 1 //  //  //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63513-SM_001.jpg"
                        },
                        {
                            item: "SB-63513-SM-BR",
                            qty: 12,
                            desc: "DCCO261_A-123 // Claude Bow Front Sideboard, Small, Brown (60.75 Inch W x 19.75 Inch D x 35.5 Inch H) // // Materials: Bayur wood/MDF/Plywood/Veneer Mindi wood/Doorcore // Finish Code: A-123, Finish Name: wood A-123 // Set Up // CBM: 0.8691 // Number of Shipping Boxes: 1 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63513-SM-BR_001.jpg"
                        },
                        {
                            item: "SB-63514",
                            qty: 8,
                            desc: "DCCO162 X-714  //  Camden Tall 4 Door Cabinet with Rattan Inset (51.19x11.82x44.89)   //  Material: Bayur/Plywood veneered Mindi/MDF Wicker Cane  X-714 (ext. kayu C-293 / Rattan RA-190 / Int. dp CA Baru)  //  CBM: 0.567  //  Packaging: B0-JF (Box Kraft 200 + Protect)  //  Master Carton: 1// ***ANTI TIP KIT REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63514_001.jpg"
                        },
                        {
                            item: "SB-63518-BR",
                            qty: 1,
                            desc: "DCCO223_AA-131  //  4 Door Sideboard with Cane Inset (86.61x17.72x35.43)   //  Material: Bayur Wood/Wicker  //  CBM: 1.101   //  Packaging:",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63518-BR_001.jpg"
                        },
                        {
                            item: "SB-63519-WH",
                            qty: 6,
                            desc: "DCCO230_A-368  //  4 Door Sideboard with Wrapped Handles (86.61x19.69x33.86)   //  Material: Bayur Wood  //  CBM: 1.069   //  Packaging:",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63519-WH_001.jpg"
                        },
                        {
                            item: "SB-63522-WH",
                            qty: 4,
                            desc: "DCCO338_CC-427 // Mariana 4 Door Sideboard, 78 Inch W, White, (78 Inch W x 15.75 Inch D x 33.5 Inch H) // Materials: Bayur Wood, MDF, Plywood, Doorcore // Finish Code: C-355 (Wood C-355 / Handle Pandan PC-355), Finish Name: White Painted // Set Up  // CBM: 0.863 // Number of Shipping Boxes: 1 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63522-WH_001.jpg"
                        },
                        {
                            item: "SB-63899-BR",
                            qty: 9,
                            desc: "DCCO367_AA-117 // Edmond 2 Door Oval Sideboard With Woven Rattan Doors, 61 Inch W, Brown, (61 Inch W x 15.75 Inch D x 35.5 Inch H) // Materials: Bayur Wood, MDF, Plywood, Veneer Mindi Wood, Rattan, Doorcore // Finish Code: AA-117 (Wood A-151 / Rattan RA-190), Finish Name: Wood Natural / Rattan Natural // Set Up  // CBM: 0.711 // Number of Shipping Boxes: 1 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63899-BR_001.jpg"
                        }
                    ]
                },
                "JW 2511-04N": {
                    Vendor: "V75 Pijar Sukma",
                    ecrd: "2026-03-26",
                    items: [
                        {
                            item: "CT-75800-CBR",
                            qty: 15,
                            desc: "Rush / RSH 1 // Asher Tray Top Coffee Table With Rush Shelf, Chestnut Brown (38W Inch  x 20D Inch  x 18H Inch ) // // Materials: Bayur Wood / MDF P2 / Mindi Wood Veneer / BANANA STEAM // Finish Code: NAT 16 + BANANA STEAM , Finish Name: Natural-Natural // KD // CBM: 0.125 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-75800-CBR_001.jpg"
                        },
                        {
                            item: "CT-75855-CBR",
                            qty: 15,
                            desc: "Rush / RSH 2 // Asher Tray Top Coffee Table With Rush Shelf, Chestnut Brown (47W Inch  x 23.25D Inch  x 18H Inch ) // // Materials: Bayur Wood / MDF P2 / Mindi Wood Veneer / BANANA STEAM // Finish Code: NAT 16 + BANANA STEAM , Finish Name: Natural-Natural // KD // CBM: 0.158 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-75855-CBR_001.jpg"
                        },
                        {
                            item: "DU-75010-CBR",
                            qty: 80,
                            desc: "Rembrandt / REM19 // Dumaine Console Table with Shelf, Natural (31.5W Inch  x 10D Inch  x 31.5H Inch ) // // Materials: Bayur Wood / MDF P2 / Mindi Wood Veneer // Finish Code: NAT16(WB PG4), Finish Name: Natural-Natural // KD // CBM: 0.077 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DU-75010-CBR_001.jpg"
                        },
                        {
                            item: "NS-75675-CBR",
                            qty: 20,
                            desc: "Rush / RSH 5 // Asher Tray Top Nightstand With Drawer and Rush Shelf, Chestnut Brown (23W Inch  x 13D Inch  x 23H Inch ) // Materials: Bayur Wood / MDF P2 / Mindi Wood Veneer / BANANA STEAM // Finish Code: NAT16(WB PG4)-BANANA STEAM , Finish Name: Natural-Natural // KD // CBM: 0.071 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-75675-CBR_001.jpg"
                        },
                        {
                            item: "NS-75770-NT",
                            qty: 20,
                            desc: "PTC 7 // Ashford Turned Leg Nightstand With Drawer And Shelf, Natural (28W Inch  x 15.75D Inch  x 26H Inch ) // Materials: Bayur Wood / Mdf CARb P2 / Veneer Mindi // Finish Code: Nat 16 (WbPg4), Finish Name: Natural // Set Up // CBM: 0.264 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-75770-NT_001.jpg"
                        },
                        {
                            item: "NS-75770-OW",
                            qty: 20,
                            desc: "PTC 7 // Ashford Turned Leg Nightstand With Drawer And Shelf, Off-White/Natural (28W Inch  x 15.75D Inch  x 26H Inch ) // Materials: Bayur Wood / Mdf CARb P2 / Veneer Mindi // Finish Code: B-BM05 / NAT16, Finish Name: White and Natural top // Set Up // CBM: 0.264 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-75770-OW_001.jpg"
                        },
                        {
                            item: "OT-75100-NT",
                            qty: 100,
                            desc: "Hermine / HRN26 // Hermine Console Table w/ Drawer and Cane Shelf, 23.75 Inch W, Brown/Natural, (23.75 Inch W x 10 Inch D x 31.5 Inch H) //  // Finish Code: NAT02(WB PG4)-Raw Bamboo, Finish Name: Natural-Natural // KD // CBM: 0.068 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED*** // ***ANTI TIP KIT REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75100-NT_001.jpg"
                        },
                        {
                            item: "OT-75225-NT",
                            qty: 35,
                            desc: "Hermine / HRN27 // Hermine Demilune Console Table w Cane Shelf, 35.5 Inch W, Brown/Natural, (35.5 Inch W x 13.75 Inch D x 31.5 Inch ) // Finish Code: NAT02(WB PG4)-Raw Bamboo, Finish Name: Natural-Natural // KD // CBM: 0.087 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED*** // ***ANTI TIP KIT REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75225-NT_001.jpg"
                        },
                        {
                            item: "OT-75333-BK",
                            qty: 40,
                            desc: "Sarlat / SRT5 // Sarlet 2 Tone Console Table With Drawer, 23.75 Inch W, Black/Brown, (23.75 Inch W x 10 Inch D x 31.5 Inch H) // Finish Code: B-NAT11/NAT02, Finish Name: Top Natural - Body Black  // KD // CBM: 0.06 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED*** // ***ANTI TIP KIT REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75333-BK_001.jpg"
                        },
                        {
                            item: "OT-75333-NV",
                            qty: 40,
                            desc: "Sarlat / SRT5 // Sarlat 2 Tone Console Table With Drawer, 23.75 Inch W, Navy/Brown, (23.75 Inch W x 10 Inch D x 31.5 Inch H) // Finish Code: B-BM04/NAT02, Finish Name: Top Natural - Body Navy  // KD // CBM: 0.06 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED*** // ***ANTI TIP KIT REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75333-NV_001.jpg"
                        },
                        {
                            item: "OT-75700-CBR",
                            qty: 15,
                            desc: "Rush / RSH 4 // Asher Tray Top Console Table With Rush Shelf, Chestnut Brown (47.25W Inch  x 13.75D Inch  x 31.5H Inch ) // Materials: Bayur Wood / MDF P2 / Mindi Wood Veneer / BANANA STEAM // Finish Code: NAT 16 + BANANA STEAM , Finish Name: Natural-Natural // KD // CBM: 0.123 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75700-CBR_001.jpg"
                        },
                        {
                            item: "OT-75755-CBR",
                            qty: 15,
                            desc: "Rush / RSH 3 // Asher Tray Top Console Table With Rush Shelf, Chestnut Brown (58W Inch  x 13.75D Inch  x 34H Inch ) // Materials: Bayur Wood / MDF P2 / Mindi Wood Veneer / BANANA STEAM // Finish Code: NAT 16 + BANANA STEAM , Finish Name: Natural-Natural // KD // CBM: 0.132 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75755-CBR_001.jpg"
                        },
                        {
                            item: "SB-75110-NT",
                            qty: 6,
                            desc: "PTC 2 // Ashford Turned Leg Sideboard, Chestnut Brown (63W Inch  x 15.75D Inch  x 34H Inch ) // // Materials: Bayur Wood / Mdf CARb P2 / Veneer Mindi // Finish Code: Nat 16 (WbPg4), Finish Name: Natural // Set Up // CBM: 0.7221 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-75110-NT_001.jpg"
                        },
                        {
                            item: "SB-75110-OW",
                            qty: 7,
                            desc: "PTC 2 // Ashford Turned Leg Sideboard, Off-White/Chestnut Brown (63W Inch  x 15.75D Inch  x 34H Inch ) // // Materials: Bayur Wood / Mdf CARb P2 / Veneer Mindi // Finish Code: B-BM05 / NAT16, Finish Name: White and Natural top // Set Up // CBM: 0.7221 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-75110-OW_001.jpg"
                        },
                        {
                            item: "ST-75600-CBR",
                            qty: 30,
                            desc: "Rush / RSH 6 // Asher Tray Top Side Table With Rush Shelf, Chestnut Brown (23W Inch  x 13D Inch  x 23H Inch ) // // Materials: Bayur Wood / MDF P2 / Mindi Wood Veneer / BANANA STEAM // Finish Code: NAT 16 + BANANA STEAM , Finish Name: Natural-Natural // KD // CBM: 0.061 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-75600-CBR_001.jpg"
                        },
                        {
                            item: "TT-DU-75010-BL",
                            qty: 85,
                            desc: "REM19  //  Dumaine Console Table with Shelf (31.5x9.84x31.5)   //  Material: Bayur Wood / Top MDF  //  Color: Black ( W48.L2+WB SEMI)  //  CBM: 0.077  //  Packaging: Carton Box 200 PSI / 5 ply / Plastic wrap around items + Paper oil warp around items+ foam protection + corner plastic protection  //  Master Carton:   //  ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-DU-75010-BL_001.jpg"
                        },
                        {
                            item: "TT-JO-75007-BL",
                            qty: 50,
                            desc: "AGE10  //  Josephine Console Table, 24 Inch x10 Inch x31.5 Inch  (23.62x9.84x31.5)   //  Material: Bayur Wood / Top MDF  //  Color: Black (B-W48L2+WBSEMI/PG9)  //  CBM: 0.07  //  Packaging: Carton Box 200 PSI / 5 ply / Plastic wrap around items + Paper oil warp around items+ foam protection + corner plastic protection  //  Master Carton:   //  ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-JO-75007-BL_001.jpg"
                        },
                        {
                            item: "TT-JO-75007-WH",
                            qty: 40,
                            desc: "AGE10  //  Josephine 24 Inch x10 Inch x31.5 Inch  Console Table (23.62x9.84x31.5)   //  Material: Bayur Wood / Top MDF  //  Color: White (B-CA.L3+G9/PO3)  //  CBM: 0.07  //  Packaging: Carton Box 200 PSI / 5 ply / Plastic wrap around items + Foamsheet warp around items + foam protection + corner plastic protection  //  Master Carton:   //  ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-JO-75007-WH_001.jpg"
                        }
                    ]
                },
                "JW 2511-05N": {
                    Vendor: "V69 Dollar Furniture",
                    ecrd: "2026-02-28",
                    items: [
                        {
                            item: "DF-PR107",
                            qty: 100,
                            desc: "Promenade Antique Counter Stool (13.78x13.78x24.02)   //  Material: Mindi Wood  //  CBM: 0.1126  //  Packaging: Carton box K#200+Protcetion / Protection Styrofoam 2cm     //  Master Carton: N - 1 pcs/box",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DF-PR107_001.jpg"
                        },
                        {
                            item: "DF-PR304-BR",
                            qty: 20,
                            desc: "DF-PR304-BR // Promenade Console with Shelf, 47.25 Inch W, KD, Brown, (47.25 Inch W x 13.75 Inch D x 31.5 Inch H) //  // Materials: Mindi Wood // Finish Code: BRVI, Finish Name: Brown Vintage // KD // CBM: 0.2092 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DF-PR304-BR_001.jpg"
                        },
                        {
                            item: "DF-PR306",
                            qty: 5,
                            desc: "Promenade Three Door Shutter Sideboard (47.24x15.75x39.37)   //  Material: Mindi Wood  //  Color: Old Look  //  CBM: 0.6144  //  Packaging: Carton box K#200+Protcetion / Protection Styrofoam 2cm      //  Master Carton: N - 1 pcs/box",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DF-PR306_001.jpg"
                        },
                        {
                            item: "DF-PR511",
                            qty: 60,
                            desc: "Promenade Side Table with Drawer and Shelf (17.72x12.99x25.59)   //  Material: Mindi Wood  //  Color: Old Look  //  CBM: 0.1412  //  Packaging:  Inch Drop ship packaging Inch  required  Carton box K#200+Protection / Protection Styrofoam 2cm      //  Master Carton: N - 1 pcs/box",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DF-PR511_001.jpg"
                        },
                        {
                            item: "DF-PR512",
                            qty: 5,
                            desc: "Promenade Tall Bookcase, 20x14x71 (19.69x13.78x70.87)   //  Material: Mindi Wood  //  Color: Old Look  //  CBM: 0.4271  //  Packaging: Carton box K#200+Protcetion / Protection Styrofoam 2cm      //  Master Carton: N - 1 pcs/box",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DF-PR512_001.jpg"
                        },
                        {
                            item: "DF-PRV504",
                            qty: 12,
                            desc: "Promenade Tall Bookcase, 47x18x71 (47.24x17.72x70.87)   //  Material: Mindi Wood  //  Color: Old Look  //  CBM: 1.1952  //  Packaging: Carton box K#200+Protcetion / Protection Styrofoam 2cm      //  Master Carton: N - 1 pcs/box",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DF-PRV504_001.jpg"
                        },
                        {
                            item: "ST-69198-LN",
                            qty: 20,
                            desc: "DF20-RT0701  //  Adair Bobbin Leg Side Table (22.44x22.44x24.41)   //  Material: Mindi Wood  //  Color: Light Natural  //  CBM: 0.3376  //  Packaging:  Inch DROP SHIP PACKAGING Inch   required  Carton box K#200+Protcetion / Protection Styrofoam 2cm     + Protection with inner carton box   //  Master Carton: Y - 1 pcs/box",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-69198-LN_001.jpg"
                        },
                        {
                            item: "ST-69299-BL",
                            qty: 20,
                            desc: "ST-69299-BL // Adair Bobbin Leg Side Table, 13.75 Inch W, Black, (13.75 Inch W x 13.75 Inch D x 19.75 Inch H) //  // Materials: Top : MDF Plywood Legs : Mindi Wood // Finish Code: BLKS, Finish Name: Black Solid // Set Up  // CBM: 0.1215 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-69299-BL_001.jpg"
                        },
                        {
                            item: "ST-69299-LN",
                            qty: 40,
                            desc: "ST-69299-LN // Adair Bobbin Leg Side Table, 13.75 Inch W, Light Natural, (13.75 Inch W x 13.75 Inch D x 19.75 Inch H) //  // Materials: Top : MDF Plywood Legs : Mindi Wood // Finish Code: LN, Finish Name: Light Natural // Set Up  // CBM: 0.1215 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-69299-LN_001.jpg"
                        },
                        {
                            item: "TT-DF-PR509",
                            qty: 30,
                            desc: "Promenade Side Table (25.98x17.72x25.98)   //  Material:   //  CBM: 0.0734  //  Packaging: Carton box K#200+Protcetion / Protection Styrofoam 2cm     //  Master Carton: N - 1 pcs/box ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-DF-PR509_001.jpg"
                        },
                        {
                            item: "TT-DF-PR515",
                            qty: 30,
                            desc: "Promenade Round Side Table (19.69x19.69x24.8)   //  Material:   //  CBM: 0.1841  //  Packaging: Carton box K#200+Protcetion / Protection Styrofoam 2cm    + Protection with inner carton box   //  Master Carton: Y - 1 pcs/box ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-DF-PR515_001.jpg"
                        }
                    ]
                },
                "JW 2511-06N": {
                    Vendor: "V63 Dcofrance & Edclaire",
                    ecrd: "2026-03-31",
                    items: [
                        {
                            item: "CB-63520-BR",
                            qty: 4,
                            desc: "Two Tone Cabinet 1, Bayur Wood & Glass, Brown with White Paneling   M-DCM22 X-954   Exterior: Dark Brown, Interior: White Panel   CBM: 1.764",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CB-63520-BR_001.JPG"
                        },
                        {
                            item: "CT-63111",
                            qty: 6,
                            desc: "DCB88 AA-124  //  Wythe Coffee Table with Woven Rattan Inset (51.97x31.5x19.69)   //  Material: Bayur Wood; MDF Rattan  //  CBM: 0.699  //  Packaging: B0-JF (Box Kraft 200 + Protect)  //  Master Carton: 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-63111_001.jpg"
                        },
                        {
                            item: "CT-63550-WH",
                            qty: 12,
                            desc: "DCB227_X-992 // Atlantis Coffee Table With Woven Rattan Detail, 47.25 Inch W, White, (47.25 Inch W x 27.5 Inch D x 17.75 Inch H) // Materials: Bayur Wood, MDF, Rattan Rapat // Finish Code: X-992 (wood C-355 / Rattan Rapat RA-432), Finish Name: White painted / Rattan Natural // Set Up  // CBM: 0.497952 // Number of Shipping Boxes: 1 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-63550-WH_001.jpg"
                        },
                        {
                            item: "DC-63321-NT",
                            qty: 15,
                            desc: "DCU233-set_AA-208 // Wide Woven Dining Chair, Set of 2, Natural 23.3x19.7x41.7, N/A // Fabric Type: N/A, Fabric Code: N/A, Fabric Content: N/A, Fill Material: N/A // Finish Code: AA-208 ( wood A-123 / pandanus AS-400), Finish Name: Natural // Set Up  // CBM: 0.44 // Number of Shipping Boxes: 1 //  //  //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC-63321-NT_001.jpg"
                        },
                        {
                            item: "OT-63770-WH",
                            qty: 10,
                            desc: "DCN218_X-992 // Atlantis Console Table With Woven Rattan Detail, 47.25 Inch W, White, (47.25 Inch W x 15.75 Inch D x 31.5 Inch H) // Materials: Bayur Wood, MDF, Rattan Rapat // Finish Code: X-992 (wood C-355 / Rattan Rapat RA-432), Finish Name: White painted / Rattan Natural // Set Up  // CBM: 0.504 // Number of Shipping Boxes: 1 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-63770-WH_001.jpg"
                        },
                        {
                            item: "SB-63425-WH",
                            qty: 14,
                            desc: "DCCO368_X-992 // Lillian 4 Door Sideboard With Woven Rattan Doors, 62 Inch W, White/Natural, (62 Inch W x 15.75 Inch D x 36.25 Inch H) // Materials: Bayur Wood, MDF, Plywood, Veneer Mindi Wood, Rattan, Doorcore // Finish Code: X-992 (Wood C-355 / Rattan Rapat RA-432), Finish Name: White Painted / Rattan Natural // Set Up  // CBM: 0.735 // Number of Shipping Boxes: 1 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63425-WH_001.jpg"
                        },
                        {
                            item: "SB-63514",
                            qty: 10,
                            desc: "DCCO162 X-714  //  Camden Tall 4 Door Cabinet with Rattan Inset (51.19x11.82x44.89)   //  Material: Bayur/Plywood veneered Mindi/MDF Wicker Cane  X-714 (ext. kayu C-293 / Rattan RA-190 / Int. dp CA Baru)  //  CBM: 0.567  //  Packaging: B0-JF (Box Kraft 200 + Protect)  //  Master Carton: 1// ***ANTI TIP KIT REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63514_001.jpg"
                        },
                        {
                            item: "SB-63518-BR",
                            qty: 8,
                            desc: "DCCO223_AA-131  //  4 Door Sideboard with Cane Inset (86.61x17.72x35.43)   //  Material: Bayur Wood/Wicker  //  CBM: 1.101   //  Packaging:",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63518-BR_001.jpg"
                        },
                        {
                            item: "SB-63899-BR",
                            qty: 12,
                            desc: "DCCO367_AA-117 // Edmond 2 Door Oval Sideboard With Woven Rattan Doors, 61 Inch W, Brown, (61 Inch W x 15.75 Inch D x 35.5 Inch H) // Materials: Bayur Wood, MDF, Plywood, Veneer Mindi Wood, Rattan, Doorcore // Finish Code: AA-117 (Wood A-151 / Rattan RA-190), Finish Name: Wood Natural / Rattan Natural // Set Up  // CBM: 0.711 // Number of Shipping Boxes: 1 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63899-BR_001.jpg"
                        },
                        {
                            item: "ST-63660-L-WH",
                            qty: 10,
                            desc: "DCC535_X-992 // Atlantis Side Table With Woven Rattan Detail, White (22 Inch W x 22 Inch D x 22 Inch H) // // Materials: Bayur wood/MDF/Rattan Rapat // Finish Code: X-992, Finish Name: wood C-355 rattan Rapat RA-432 // Set Up // CBM: 0.2383 // Number of Shipping Boxes: 1 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-63660-L-WH_001.jpg"
                        }
                    ]
                },
                "JW 2511-17": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-02-10",
                    items: [
                        {
                            item: "AM-70138-BL",
                            qty: 10,
                            desc: "J51760B-HP01-PJW  //  Malta Mirror, Black (47.24x3.543x47.24)   //  Material: Branch Teak    //  CBM: 0.164  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Styrofoam 100x200x2 + wrap paper/kg  wide 120  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70138-BL_001.jpg"
                        },
                        {
                            item: "AM-70138-WH",
                            qty: 15,
                            desc: "J51683-HP12-PJW  //  Malta Mirror (49.21x3.543x49.21)   //  Material:  Hapsalan    //  CBM: 0.265  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Styrofoam 100x200x2 + wrap paper/kg  wide 120  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70138-WH_001.jpg"
                        },
                        {
                            item: "AM-70457-NT",
                            qty: 10,
                            desc: "J51680-B101-PJW  //  35 Inch  Knotted Natural Fiber Round Mirror (36.61x1.574x36.61)   //  Material: Abaca Natural Weaving knot    //  CBM: 0.114  //  Packaging: Box Kraft #150 + Box SW (stack cover) + Protect Box Styrofoam 2cm for Headboard 6cm + Styrofoam 100x200x2 + wrap paper/kg  wide 120 + Plastik Handywrap 150x10x0.02  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70457-NT_001.jpg"
                        },
                        {
                            item: "AM-70604",
                            qty: 10,
                            desc: "J51542R-A-HW12-PJW  //  Fulton Teak Mirror (26.77x1.456x78.74)   //  Material: Envi Thin    //  CBM: 0.202  //  Packaging: Box Kraft #150 + Box SW (Pizza models) + Protect Box Styrofoam 2cm for Headboard 6cm + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Styrofoam 100x200x2 + wrap paper/kg  wide 120 + Single Face  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70604_001.jpg"
                        },
                        {
                            item: "AM-70607",
                            qty: 15,
                            desc: "J51750RM-WHK01-PJW  //  Delmare Cross Hatch Leaning Mirror, Water Hyacinth (27.95x1.968x75.98)   //  Material: Water hyacinth    //  CBM: 0.196  //  Packaging: Box Kraft #150 + Box SW (Pizza models) + Protect Box Styrofoam 2cm for shape Mirror (U shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70607_001.jpg"
                        },
                        {
                            item: "AM-70912-L",
                            qty: 10,
                            desc: "J51773B-R1P5737-PJW  //  35 Inch  Marina Round Rattan Mirror, White (35.43x3.543x35.43)   //  Material: Rattan; Sanded Peel    //  CBM: 0.176  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for Headboard (width in styrofoam and sw = 11cm) + Styrofoam 100x200x2 + Medium paper/kg (m2=0.2 kg) + wrap paper/kg  wide 120  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70912-L_001.jpg"
                        },
                        {
                            item: "CT-70111",
                            qty: 10,
                            desc: "J22573CT-B5L01-PJW  //  Soren Braided Seagrass Coffee Table (35.43x35.43x17.71)   //  Material: Seagrass    //  CBM: 0.479  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70111_001.jpg"
                        },
                        {
                            item: "CT-70542",
                            qty: 11,
                            desc: "J20320BN-K1S1040-PJW  //  Bayside Coffee Table with Storage (47.24x18.30x17.71)   //  Material: Full Kubu+Wood Base    //  CBM: 0.343  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L )  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70542_001.jpg"
                        },
                        {
                            item: "JV-ABL401",
                            qty: 10,
                            desc: "J20059CO87-M62Z03PJW  //  Abella Round Coffee Table (34.25x34.25x16.53)   //  Material: Rotan Frame; Banana Small  Astor + Banana (Styrofoam 1) + Single Face  Master Carton: Y , 1***DROPSHIP PACKAGING REQUIRED***  KD    //  CBM: 0.397  //  Packaging: Box Kraft #150 + Protect Styrofoam (Styrofoam 1) + Single Face  //  Master Carton: Y , 1  //  ***DROPSHIP PACKAGING REQUIRED***  ******",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-ABL401_001.jpg"
                        },
                        {
                            item: "JV-AS504-L-WH",
                            qty: 10,
                            desc: "J51368-B-TMMD23-PJW  //  Aspen Round Mirror, White (31.10x2.244x31.10)   //  Material: Manila Rope    //  CBM: 0.093  //  Packaging: Box Kraft #150 + Box SW (Pizza models) + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Protect Box Styrofoam 2cm (elbow shape) + wrap paper/kg  wide 120 + Styrofoam 100x200x2 + Medium paper/kg (m2=0.2 kg)   / Inch Drop Ship Packaging Inch  required",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-AS504-L-WH_001.jpg"
                        },
                        {
                            item: "JV-AS504-RC",
                            qty: 10,
                            desc: "J51366-TMMD15-PJW  //  Aspen Rectangular Mirror - Natural (24x2x30) (25.19x2.244x31.10)   //  Material: Big Rope Woven; MDF    //  CBM: 0.084  //  Packaging: Box Kraft #150 + Box SW model pizza + Protect Box Styrofoam PE 2cm (elbow shape) + wrap paper/kg  wide 120 + Styrofoam 100x200x2  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-AS504-RC_001.jpg"
                        },
                        {
                            item: "JV-AS504O-L",
                            qty: 10,
                            desc: "J51368-B-TMMD15-PJW  //  Aspen Round Mirror, Natural (31.10x2.244x31.10)   //  Material: Big Rope Woven    //  CBM: 0.101  //  Packaging: Box Kraft #150 + Box SW (Pizza models) + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Protect Box Styrofoam 2cm (elbow shape) + wrap paper/kg  wide 120 + Styrofoam 100x200x2 + Medium paper/kg (m2=0.2 kg)   //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-AS504O-L_001.jpg"
                        },
                        {
                            item: "JV-AS504O-S",
                            qty: 10,
                            desc: "J51368-S-TMMD15-PJW  //  Aspen Round Mirror (23.62x2.244x23.62)   //  Material: Big Rope Woven    //  CBM: 0.108  //  Packaging: Box Kraft #150 + Box SW model pizza + Protect Box Styrofoam PE 2cm (elbow shape) + Protect Box Styrofoam PE 2cm (U shape) + Medium paper/kg (m2=0.2 kg) + wrap paper/kg  wide 120 + Styrofoam 100x200x2  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-AS504O-S_001.jpg"
                        },
                        {
                            item: "JV-CR401",
                            qty: 10,
                            desc: "J20093CT-B5CL03-PJW  //  Cypress Cocktail Table (35.43x35.43x17.71)   //  Material: Wood Frame; Banana Twisted Astor Lamination Natural Color    //  CBM: 0.358  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-CR401_001.jpg"
                        },
                        {
                            item: "JV-SM106",
                            qty: 30,
                            desc: "J40404CS-K1S12-PJW21  //  Samurai Counter Stool (18.11x20.86x40.15)   //  Material: Full Kubu Grey    //  CBM: 0.385  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Single Face  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-SM106_001.jpg"
                        },
                        {
                            item: "LM-2485",
                            qty: 10,
                            desc: "BLZ-01-5232-C-PJW  //  Driftwood Rattan Dome Pendant (19.68x19.68x18.89)   //  Material: Slimit    //  CBM: 0.16  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm for a circle shape ( L ) + Protect hat model for Slime Hanging Lamp W/ Slimit M3  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/LM-2485_001.jpg"
                        },
                        {
                            item: "OR-TG604",
                            qty: 10,
                            desc: "J51599MR-RG01-PJW  //  Twig Sunburst Mirror (43.30x2.165x43.30)   //  Material: Twig Slice    //  CBM: 0.161  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for Headboard Small H = 8 + Styrofoam 100x200x2 + wrap paper/kg  wide 120  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OR-TG604_001.jpg"
                        },
                        {
                            item: "ST-70112",
                            qty: 10,
                            desc: "J22573ST-B5L01-PJW  //  Soren Braided Seagrass Side Table (19.68x13.77x17.71)   //  Material: Seagrass 3-4 mm    //  CBM: 0.125  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70112_001.jpg"
                        },
                        {
                            item: "TT-CT-211",
                            qty: 20,
                            desc: "J20060CT-B1C03-PJW  //  Tropical Coffee Table Abaca Small Astor with Storage (48.03x30.31x18.11)   //  Material:     //  CBM: 0.446  //  Packaging: Box Kraft#150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-CT-211_001.jpg"
                        },
                        {
                            item: "TT-DF-SC301",
                            qty: 10,
                            desc: "J22432CT-K1S06-PJW  //  Seascape Driftwood Rattan Coffee Table With Storage (37.40x19.68x17.71)   //  Material: Wood Frame; Full Kubu Grey; Costello color for the leg    //  CBM: 0.246  //  Packaging: Box Kraft#150 + Protect Box Styrofoam 2cm (elbow shape) + Single Face  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-DF-SC301_001.jpg"
                        },
                        {
                            item: "TT-NTR-OP401-NT",
                            qty: 10,
                            desc: "JG-OSW-CT-PJW  //  Open Slat Wooden Coffee Table (23.62x23.62x14.96)   //  Material:     //  CBM: 0.204  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam PE 2cm (L shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-NTR-OP401-NT_001.jpg"
                        },
                        {
                            item: "TT-OR-NTR512",
                            qty: 10,
                            desc: "J21109S1-MUIR10-PJW  //  Natura Freeform Side Table With Iron Base (13.77x13.77x18.89)   //  Material: Munggur Wood; Iron Legs    //  CBM: 0.024  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Single Wall  wide 200 x 180 + wrap paper/kg  wide 120 + Foam Sheet L.120 T.1mm mtr/1 roll 500 m  //  Master Carton: Y , 1  //  ***DROPSHIP PACKAGING REQUIRED***  ******KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-OR-NTR512_001.jpg"
                        },
                        {
                            item: "WR-DE103-GR",
                            qty: 10,
                            desc: "J40430S-W3S419-PJW21  //  Daphnie Rattan Side Chair (22.04x22.83x38.97)   //  Material: Rattan Frame; Wicker 3mm; Costello Color; SR Oatmeal for the cushion    //  CBM: 0.447  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/WR-DE103-GR_001.jpg"
                        }
                    ]
                },
                "JW 2511-18": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-02-10",
                    items: [
                        {
                            item: "AM-70457-NT",
                            qty: 10,
                            desc: "J51680-B101-PJW  //  35 Inch  Knotted Natural Fiber Round Mirror (36.61x1.574x36.61)   //  Material: Abaca Natural Weaving knot    //  CBM: 0.114  //  Packaging: Box Kraft #150 + Box SW (stack cover) + Protect Box Styrofoam 2cm for Headboard 6cm + Styrofoam 100x200x2 + wrap paper/kg  wide 120 + Plastik Handywrap 150x10x0.02  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70457-NT_001.jpg"
                        },
                        {
                            item: "CT-70112",
                            qty: 15,
                            desc: "J22573CS-B5L01-PJW  //  Soren Braided Seagrass Console Table (55.11x15.74x29.92)   //  Material: Seagrass    //  CBM: 0.547  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70112_001.jpg"
                        },
                        {
                            item: "CT-70435",
                            qty: 15,
                            desc: "J22560CT-RGT1016-PJW  //  Fulton Storage Coffee Table (30.70x30.70x15.74)   //  Material:     //  CBM: 0.339  //  Packaging: Box Kraft #200 + Box SW + Protect Box Styrofoam PE 2cm (elbow shape) + Protect Box Styrofoam PE 2cm (L shape) + Medium paper/kg (m2=0.2 kg)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70435_001.jpg"
                        },
                        {
                            item: "CT-70542",
                            qty: 14,
                            desc: "J20320BN-K1S1040-PJW  //  Bayside Coffee Table with Storage (47.24x18.30x17.71)   //  Material: Full Kubu+Wood Base    //  CBM: 0.343  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L )  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70542_001.jpg"
                        },
                        {
                            item: "DF-SCHD502-TW",
                            qty: 10,
                            desc: "J50031HBTMGK1S12PJWK  //  Seascape Driftwood Rattan Headboard (44.48x2.165x55.90)   //  Material: Frame Manggo wood, Kubu Grey    //  CBM: 0.16  //  Packaging: Box kraft #275 + Protect Box Styrofoam 2cm for Headboard + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Single Face  //  Master Carton: Y , 1  //  ***DROPSHIP PACKAGING REQUIRED***  ******KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DF-SCHD502-TW_001.jpg"
                        },
                        {
                            item: "GD-70524",
                            qty: 5,
                            desc: "J30418SD2HAWT1016PJW  //  Fulton Sideboard, Two Door (47.24x15.74x35.43)   //  Material: Acacia Wood    //  CBM: 0.565  //  Packaging: Box kraft #200 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + wrap paper/kg  wide 120  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/GD-70524_001.jpg"
                        },
                        {
                            item: "JV-ABL401",
                            qty: 10,
                            desc: "J20059CO87-M62Z03PJW  //  Abella Round Coffee Table (34.25x34.25x16.53)   //  Material: Rotan Frame; Banana Small  Astor + Banana (Styrofoam 1) + Single Face  Master Carton: Y , 1***DROPSHIP PACKAGING REQUIRED***  KD    //  CBM: 0.397  //  Packaging: Box Kraft #150 + Protect Styrofoam (Styrofoam 1) + Single Face  //  Master Carton: Y , 1  //  ***DROPSHIP PACKAGING REQUIRED***  ******",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-ABL401_001.jpg"
                        },
                        {
                            item: "JV-AS504-L-WH",
                            qty: 10,
                            desc: "J51368-B-TMMD23-PJW  //  Aspen Round Mirror, White (31.10x2.244x31.10)   //  Material: Manila Rope    //  CBM: 0.093  //  Packaging: Box Kraft #150 + Box SW (Pizza models) + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Protect Box Styrofoam 2cm (elbow shape) + wrap paper/kg  wide 120 + Styrofoam 100x200x2 + Medium paper/kg (m2=0.2 kg)   / Inch Drop Ship Packaging Inch  required",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-AS504-L-WH_001.jpg"
                        },
                        {
                            item: "JV-AS504-RC",
                            qty: 10,
                            desc: "J51366-TMMD15-PJW  //  Aspen Rectangular Mirror - Natural (24x2x30) (25.19x2.244x31.10)   //  Material: Big Rope Woven; MDF    //  CBM: 0.084  //  Packaging: Box Kraft #150 + Box SW model pizza + Protect Box Styrofoam PE 2cm (elbow shape) + wrap paper/kg  wide 120 + Styrofoam 100x200x2  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-AS504-RC_001.jpg"
                        },
                        {
                            item: "JV-AS504O-L",
                            qty: 10,
                            desc: "J51368-B-TMMD15-PJW  //  Aspen Round Mirror, Natural (31.10x2.244x31.10)   //  Material: Big Rope Woven    //  CBM: 0.101  //  Packaging: Box Kraft #150 + Box SW (Pizza models) + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Protect Box Styrofoam 2cm (elbow shape) + wrap paper/kg  wide 120 + Styrofoam 100x200x2 + Medium paper/kg (m2=0.2 kg)   //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-AS504O-L_001.jpg"
                        },
                        {
                            item: "JV-AS504O-S",
                            qty: 30,
                            desc: "J51368-S-TMMD15-PJW  //  Aspen Round Mirror (23.62x2.244x23.62)   //  Material: Big Rope Woven    //  CBM: 0.108  //  Packaging: Box Kraft #150 + Box SW model pizza + Protect Box Styrofoam PE 2cm (elbow shape) + Protect Box Styrofoam PE 2cm (U shape) + Medium paper/kg (m2=0.2 kg) + wrap paper/kg  wide 120 + Styrofoam 100x200x2  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-AS504O-S_001.jpg"
                        },
                        {
                            item: "JV-CR401",
                            qty: 10,
                            desc: "J20093CT-B5CL03-PJW  //  Cypress Cocktail Table (35.43x35.43x17.71)   //  Material: Wood Frame; Banana Twisted Astor Lamination Natural Color    //  CBM: 0.358  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-CR401_001.jpg"
                        },
                        {
                            item: "OR-TG604",
                            qty: 10,
                            desc: "J51599MR-RG01-PJW  //  Twig Sunburst Mirror (43.30x2.165x43.30)   //  Material: Twig Slice    //  CBM: 0.161  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for Headboard Small H = 8 + Styrofoam 100x200x2 + wrap paper/kg  wide 120  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OR-TG604_001.jpg"
                        },
                        {
                            item: "ST-70112",
                            qty: 10,
                            desc: "J22573ST-B5L01-PJW  //  Soren Braided Seagrass Side Table (19.68x13.77x17.71)   //  Material: Seagrass 3-4 mm    //  CBM: 0.125  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70112_001.jpg"
                        },
                        {
                            item: "ST-70435",
                            qty: 20,
                            desc: "J22560ST-RGT1016PJW  //  Fulton Storage Side Table (19.68x19.68x23.22)   //  Material: Twig-Envi Thin    //  CBM: 0.207  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm (elbow shape) + Single Wall  wide 200 x 180  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70435_001.jpg"
                        },
                        {
                            item: "TT-AC-70376-L",
                            qty: 30,
                            desc: "J22566A-TWIR10-PJW  //  11 Inch  Live Edge Teak Riser with Iron Base (19.68x19.68x11.02)   //  Material: Teakwood; Iron    //  CBM: 0.042  //  Packaging: Box Kraft #150 + Protect hat model for Liberte Round Side Table Big H = 10cm (Big) + Plastik Handywrap 150x10x0.02  //  Master Carton: Y , 1  //  ***DROPSHIP PACKAGING REQUIRED***  ******KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-AC-70376-L_001.jpg"
                        },
                        {
                            item: "TT-CT-211",
                            qty: 10,
                            desc: "J20060CT-B1C03-PJW  //  Tropical Coffee Table Abaca Small Astor with Storage (48.03x30.31x18.11)   //  Material:     //  CBM: 0.446  //  Packaging: Box Kraft#150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-CT-211_001.jpg"
                        },
                        {
                            item: "TT-DF-SC301",
                            qty: 10,
                            desc: "J22432CT-K1S06-PJW  //  Seascape Driftwood Rattan Coffee Table With Storage (37.40x19.68x17.71)   //  Material: Wood Frame; Full Kubu Grey; Costello color for the leg    //  CBM: 0.246  //  Packaging: Box Kraft#150 + Protect Box Styrofoam 2cm (elbow shape) + Single Face  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-DF-SC301_001.jpg"
                        },
                        {
                            item: "TT-NTR-OP401-NT",
                            qty: 15,
                            desc: "JG-OSW-CT-PJW  //  Open Slat Wooden Coffee Table (23.62x23.62x14.96)   //  Material:     //  CBM: 0.204  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam PE 2cm (L shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-NTR-OP401-NT_001.jpg"
                        },
                        {
                            item: "TT-OR-NTR512",
                            qty: 40,
                            desc: "J21109S1-MUIR10-PJW  //  Natura Freeform Side Table With Iron Base (13.77x13.77x18.89)   //  Material: Munggur Wood; Iron Legs    //  CBM: 0.024  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Single Wall  wide 200 x 180 + wrap paper/kg  wide 120 + Foam Sheet L.120 T.1mm mtr/1 roll 500 m  //  Master Carton: Y , 1  //  ***DROPSHIP PACKAGING REQUIRED***  ******KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-OR-NTR512_001.jpg"
                        },
                        {
                            item: "WR-DE103-GR",
                            qty: 25,
                            desc: "J40430S-W3S419-PJW21  //  Daphnie Rattan Side Chair (22.04x22.83x38.97)   //  Material: Rattan Frame; Wicker 3mm; Costello Color; SR Oatmeal for the cushion    //  CBM: 0.447  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/WR-DE103-GR_001.jpg"
                        }
                    ]
                },
                "JW 2511-19N": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-02-14",
                    items: [
                        {
                            item: "CT-7005-NT",
                            qty: 20,
                            desc: "J1179-1PJW  // Live Edge Teak Wood Coffee Table, 31.5 Inch , Natural 31.49x26.18x15.66 // Fabric Type: N/A // Finish Name: Tabletop: Natural /Legs: Black // KD // CBM: 0.0833 // Number of Shipping Boxes: 1 //  //  // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-7005-NT_001.jpg"
                        },
                        {
                            item: "CT-70600-NT",
                            qty: 30,
                            desc: "J1158-1PJW  // Abella Rectangular Storage Coffee Table, 38 Inch W, Natural 37.60x19.68x17.71 // Fabric Type: N/A, Fabric Code: N/A, Fabric Content: N/A, Fill Material: N/A // Finish Name: Natural // Partial KD // CBM: 0.2659 // Number of Shipping Boxes: 1 //  //  // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70600-NT_001.jpg"
                        },
                        {
                            item: "CT-70611-NT",
                            qty: 25,
                            desc: "J1157-WL1-PJW  // Abella Round Woven Banana Leaf Coffee Table, 28 Inch W, Natural 28.15 Inch W x 28.15 Inch D x 14.75”H // Fabric Type: N/A // Finish Name: Natural // Set Up  // CBM: 0.267 // Number of Shipping Boxes: 1 //  //  // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70611-NT_001.jpg"
                        },
                        {
                            item: "GD-70514",
                            qty: 8,
                            desc: "J30418SD3HMNT1016PJW  //  Fulton Sideboard (59.84x17.71x35.43)   //  Material: Teakwood    //  CBM: 0.782  //  Packaging: Box  Corner Protect Kraft #200 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + wrap paper/kg  wide 120  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/GD-70514_001.jpg"
                        },
                        {
                            item: "JV-ABL401-BD",
                            qty: 10,
                            desc: "J3205-1PJW // Abella Round Coffee Table, 34.25 Inch W, Blonde, (34.25 Inch W x 34.25 Inch D x 16.5 Inch H) // Materials: Banana Small Natural, Mungur Wood // Finish Code: 1-97, Finish Name: Banana Natural & White Patina // CBM: 0.42 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-ABL401-BD_001.jpg"
                        },
                        {
                            item: "JV-CB605-WH",
                            qty: 30,
                            desc: "J21073CS-CN2MG541PJW  //  Cordova Counter Stool (17.32x17.32x23.62)   //  Material: Wood Frame; Coconut Chips    //  CBM: 0.155  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Single Face  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-CB605-WH_001.jpg"
                        },
                        {
                            item: "JV-CLT503",
                            qty: 8,
                            desc: "J22239DT-TW121-PJW  //  Charleston Teak Dining Table, White Patina (76.77x37.40x30.31)   //  Material: TeakWood    //  CBM: 0.371  //  Packaging: Box kraft #200 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-CLT503_001.JPG"
                        },
                        {
                            item: "JV-CR401-BD",
                            qty: 10,
                            desc: "J1604-1PJW // Cypress Cocktail Table, 35.5 Inch W, Blonde, (35.5 Inch W x 35.5 Inch D x 17.75 Inch H) // Materials: Banana Small Natural Lamination, Mungur Wood // Finish Code: 1-143, Finish Name: Banana Natural & Peanut Brown W/O Brush // Partial KD // CBM: 0.51 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-CR401-BD_001.jpg"
                        },
                        {
                            item: "JV-NHT403-WP-L",
                            qty: 15,
                            desc: "J21076RCAC3BMG495PJW  //  New Hampton Round Cocktail Table (36.61x36.61x18.50)   //  Material: Frame Wood; Plywood; Coco Chips; Wood leg    //  CBM: 0.529  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam PE 2cm (L shape) + Protect Box Styrofoam PE 2cm (elbow shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT403-WP-L_001.jpg"
                        },
                        {
                            item: "LM-2495-WH",
                            qty: 10,
                            desc: "BLZ-01-5230A2-136PJW  //  35 Inch  Kira Rattan Dome Chandelier, White (35.43x35.43x32.28)   //  Material: Core    //  CBM: 0.758  //  Packaging: Box  Kraft #150 + Protect hat model for Round H = 10cm (Spiro)(size 90x90x10) + Protect Box Styrofoam 2cm for a circle shape ( L )  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/LM-2495-WH_001.jpg"
                        },
                        {
                            item: "OS-70302-NT",
                            qty: 15,
                            desc: "J22692ST-TWM01-PJW  //  Woven Top Wood Stools, Set Of 2, Medium Brown (16x16x18)   //  Material: Teakwood Legs-Synthetic Polytwist Textured Silk Corn (BT 02041507TX1) // Natural Teak Wood Finish  //  Finish: Natural Teak Wood  // Box Craft 200mm,Protect Styrofoam // Drop shipped packaged",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OS-70302-NT_001.jpg"
                        },
                        {
                            item: "ST-70108-NT",
                            qty: 15,
                            desc: "J52071-40NB  //  Kayu Petrifed Wood Top Pedestal Accent Table, 20 Inch H, Natural (16 x 16 x 16)   //  Material: Petrified Black Munggur  //  Finish: Natural-Black  //  ***ISTA 3A Packaging Required***  //  ***INDIGO ROAD PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70108-NT_001.jpg"
                        },
                        {
                            item: "ST-70116-BK",
                            qty: 25,
                            desc: "J22889-19-B-PJW  //  Organic Petrified Wood Top Accent Table, with Hourglass base, 12 Inch W, Black (12x12x21)   //  Material: Top : Petrified Wood (Black) Base : Suar Wood (Black)  //  Finish: Black - Black // Box Craft 200mm,Protect Styrofoam",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70116-BK_001.jpg"
                        },
                        {
                            item: "SY-MR401-BD",
                            qty: 18,
                            desc: "J3196-1PJW // Marina Abaca Double Bench with Storage, 40.2 Inch W, Blonde, (40.2 Inch W x 14.2 Inch D x 17.7 Inch H) // Materials: Banana Small Natural, Mungur Wood // Finish Code: 1-97, Finish Name: Banana Natural & White Patina // CBM: 0.23 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SY-MR401-BD_001.jpg"
                        },
                        {
                            item: "TT-ST-70659-NT",
                            qty: 20,
                            desc: "JG-MGRU-ST-PJW  //  Riley Twist Wooden Side Table (11.81x11.81x23.62)   //  Material: Munggur Wood    //  CBM: 0.098  //  Packaging: Box  Kraft #150 + Protect Box Styrofoam PE 2cm (elbow shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-ST-70659-NT_001.jpg"
                        }
                    ]
                },
                "JW 2511-20N": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-02-14",
                    items: [
                        {
                            item: "AB-70804-NU",
                            qty: 15,
                            desc: "J4197-1PJW  //  Crown Carved Wooden Bowl, 16 Inch W, Natural (16x16x6)   //  Material: Mungur  //  Finish: Natural HO //Box Craft 200mm, Protect Styrofoam",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AB-70804-NU_001.jpg"
                        },
                        {
                            item: "AC-70817",
                            qty: 30,
                            desc: "JG-PRAM-PJW  //  Maples Rattan and Bamboo Antique Basket (21.25x14.96x16.14)   //  Material: Rattan Half Polish; Bamboo; Sendi Peel    //  CBM: 0.124  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Medium paper/kg (m2=0.2 kg)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AC-70817_001.jpg"
                        },
                        {
                            item: "AM-LE701-L-NT",
                            qty: 15,
                            desc: "J51707L-MU01-PJW // Live Edge 3D Mirror Solid Suar Wood Frame, 30 Inch W, Natural, (30 Inch W x 2 Inch D x 30 Inch H) // Material: Munggur Wood, Finish Code: WS-221-AU DIVA, Finish Name: Natural // Set Up  // CBM: 0.081 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-LE701-L-NT_001.jpg"
                        },
                        {
                            item: "AT2-70278-WH",
                            qty: 20,
                            desc: "J4662-SET-17PJW // Marina Rattan Tray, Set of 2, White/Natural, (23.5 Inch W x 23.5 Inch D x 2 Inch H, 17.75 Inch W x 17.75 Inch D x 2 Inch H) //  // Materials: Natural Rattan // Finish Code: 1-17, Finish Name: Natural - White // Set Up  // CBM: 0.08 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AT2-70278-WH_001.jpg"
                        },
                        {
                            item: "CT-70611-NT",
                            qty: 25,
                            desc: "J1157-WL1-PJW  // Abella Round Woven Banana Leaf Coffee Table, 28 Inch W, Natural 28.15 Inch W x 28.15 Inch D x 14.75”H // Fabric Type: N/A // Finish Name: Natural // Set Up  // CBM: 0.267 // Number of Shipping Boxes: 1 //  //  // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70611-NT_001.jpg"
                        },
                        {
                            item: "JV-ABL401-BD",
                            qty: 10,
                            desc: "J3205-1PJW // Abella Round Coffee Table, 34.25 Inch W, Blonde, (34.25 Inch W x 34.25 Inch D x 16.5 Inch H) // Materials: Banana Small Natural, Mungur Wood // Finish Code: 1-97, Finish Name: Banana Natural & White Patina // CBM: 0.42 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-ABL401-BD_001.jpg"
                        },
                        {
                            item: "JV-CR401-BD",
                            qty: 20,
                            desc: "J1604-1PJW // Cypress Cocktail Table, 35.5 Inch W, Blonde, (35.5 Inch W x 35.5 Inch D x 17.75 Inch H) // Materials: Banana Small Natural Lamination, Mungur Wood // Finish Code: 1-143, Finish Name: Banana Natural & Peanut Brown W/O Brush // Partial KD // CBM: 0.51 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-CR401-BD_001.jpg"
                        },
                        {
                            item: "JV-FR205-BD",
                            qty: 20,
                            desc: "J3440-1PJW // Francis Double Bench, Blonde (56.75W Inch  x 17D Inch  x 22H Inch ) // Fabric Type: Polyester, Fabric Code from Vendor: Mascoto, Fabric Content %: 100% Polyester, Fill Material on Upholstered Items only: Foam // Materials: Banana Natural, Gamelina Wood // Finish Code: 142-143, Finish Name: Natural Blonde - Peanut Brown w/o Brush // Partial KD // CBM: 0.348 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** // ***SOFFA COMPLIANCE REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-FR205-BD_001"
                        },
                        {
                            item: "JV-NHT402-4-BL",
                            qty: 20,
                            desc: "J535-143PJW // New Hampton Round End Table Featuring Teak Mosaic, Bluewash (15.75W Inch  x 15.75D Inch  x 18.75H Inch ) // Materials: Envi Slat , Gamelina Wood // Finish Code: 131 - 143, Finish Name: Nothern Air Wash - Peanut Brown W/O Brush // Set Up // CBM: 0.1301 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT402-4-BL_001.jpg"
                        },
                        {
                            item: "JV-NHT402-4-BL-L",
                            qty: 15,
                            desc: "J3202-127PJW // New Hampton Round End Table, 19.75 Inch W, Blue, (19.75 Inch W x 19.75 Inch D x 23.25 Inch H) // Materials: Coco With Chip 3x3, Mungur Wood // Finish Code: 127-131, Finish Name: Nothern Air - Nothern Air Wash // Set Up // CBM: 0.21 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT402-4-BL-L_001.jpg"
                        },
                        {
                            item: "JV-NHT402-4-NT",
                            qty: 20,
                            desc: "J534-97PJW // New Hampton Round End Table Featuring Teak Mosaic, Natural (15.75W Inch  x 15.75D Inch  x 18.75H Inch ) // Materials: Envi Slat , Gamelina Wood // Finish Code: 97 - 143, Finish Name: White Patina - Peanut Brown W/O Brush // Set Up // CBM: 0.1301 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT402-4-NT_001.jpg"
                        },
                        {
                            item: "JV-NHT403-WP",
                            qty: 15,
                            desc: "J1604-CNB-PJW // New Hampton Round Cocktail Table, 30.75 Inch W, White Patina, (30.75 Inch W x 30.75 Inch D x 16.25 Inch H) // Materials: Coco With Chip 3x3, Mungur Wood // Finish Code: CN3B - 4, Finish Name: White Patina / White Wash // Set Up  // CBM: 0.35 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT403-WP_001.jpg"
                        },
                        {
                            item: "JV-OR405-IV",
                            qty: 20,
                            desc: "J390-9PJW // Orinda Side Table with Wood Top, Ivory, (19.75 Inch W x 19.75 Inch D x 19.75 Inch H) // // Materials: Rattan Kor - Mungur Wood // Finish Code: 9, Finish Name: White Ivory // Set Up // CBM: 0.179 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-OR405-IV_001.jpg"
                        },
                        {
                            item: "OR-RL301-NU",
                            qty: 20,
                            desc: "J111-39PJW // Roell Teak Top Side Table with Natural Root Base, Light Natural, (20.5 Inch W x 20.5 Inch D x 20.5 Inch H) // Materials: Teakwood - Driftwood // Finish Code: 39, Finish Name: Natural HO // Set Up // CBM: 0.195 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OR-RL301-NU_001.jpg"
                        },
                        {
                            item: "ST-70177-NT",
                            qty: 20,
                            desc: "J2561L-16PJW // Pablo Organic Wood Side Table With Cut Out, 16 Inch W, Antique Natural, (16 Inch W x 16 Inch D x 18 Inch H) //  // Material: Munggur Wood, Finish Code: FN-WRN-112-RIDDIE-ST, Finish Name: Antiq Jati //  // CBM: 0.11 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***INDIGO ROAD PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70177-NT_001.jpg"
                        },
                        {
                            item: "SY-MR401-BD",
                            qty: 12,
                            desc: "J3196-1PJW // Marina Abaca Double Bench with Storage, 40.2 Inch W, Blonde, (40.2 Inch W x 14.2 Inch D x 17.7 Inch H) // Materials: Banana Small Natural, Mungur Wood // Finish Code: 1-97, Finish Name: Banana Natural & White Patina // CBM: 0.23 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SY-MR401-BD_001.jpg"
                        },
                        {
                            item: "TT-ST-70659-NT",
                            qty: 20,
                            desc: "JG-MGRU-ST-PJW  //  Riley Twist Wooden Side Table (11.81x11.81x23.62)   //  Material: Munggur Wood    //  CBM: 0.098  //  Packaging: Box  Kraft #150 + Protect Box Styrofoam PE 2cm (elbow shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-ST-70659-NT_001.jpg"
                        },
                        {
                            item: "WA-70802-NT",
                            qty: 15,
                            desc: "J6033B-B1PJW  //  Seagrass Abstract Wall Art, 39 Inch W, Natural (39x27x2)   //  Material: Bentik  //  Finish: Natural // Box Craft 200mm, Protect Styrofoam",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/WA-70802-NT_001.jpg"
                        },
                        {
                            item: "WA-70804-NT",
                            qty: 15,
                            desc: "J6033S-B1PJW  //  Small Organic Banana Leaf Wall Decor, Natural (18x18x2)   //  Material: Banana Leaf  Frame : Metal Frame / Iron  //  Finish: Natural  //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/WA-70804-NT_001.jpg"
                        }
                    ]
                },
                "JW 2511-21N": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-02-25",
                    items: [
                        {
                            item: "AB-70804-NU",
                            qty: 10,
                            desc: "Crown Carved Wooden Bowl, 16 Inch W, Natural (16x16x6)   //  Material: Mungur  //  Finish: Natural HO //Box Craft 200mm, Protect Styrofoam",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AB-70804-NU_001.jpg"
                        },
                        {
                            item: "AB-70889-NT",
                            qty: 15,
                            desc: "Organic Teak Wood Carved Bowl, 24 Inch W, Natural, (24 Inch W x 24 Inch D x 6 Inch H) //  // Materials: Teak Wood // Finish Code: 39, Finish Name: HO Natural //  // CBM: 0.054 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AB-70889-NT_001.jpg"
                        },
                        {
                            item: "AB-70909-NT",
                            qty: 15,
                            desc: "Organic Teak Wood Carved Bowl, 10 Inch H, Natural, (14 Inch W x 14 Inch D x 10 Inch H) //  // Materials: Teak Wood // Finish Code: 39, Finish Name: HO Natural //  // CBM: 0.030625 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AB-70909-NT_001.jpg"
                        },
                        {
                            item: "AM-707039-WP",
                            qty: 10,
                            desc: "New Hampton Rectangular Coconut Shell Mirror, 39.5 Inch H, White Patina 39.76x1.77x27.17 // Fabric Type: N/A // Finish Name: White Patina // Set Up  // CBM: 0.0923 // Number of Shipping Boxes: 1 //  //  // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-707039-WP_001.jpg"
                        },
                        {
                            item: "JV-ABL401-BD",
                            qty: 20,
                            desc: "Abella Round Coffee Table, 34.25 Inch W, Blonde, (34.25 Inch W x 34.25 Inch D x 16.5 Inch H) // Materials: Banana Small Natural, Mungur Wood // Finish Code: 1-97, Finish Name: Banana Natural & White Patina // CBM: 0.42 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-ABL401-BD_001.jpg"
                        },
                        {
                            item: "JV-NHT402-4-BL-L",
                            qty: 20,
                            desc: "New Hampton Round End Table, 19.75 Inch W, Blue, (19.75 Inch W x 19.75 Inch D x 23.25 Inch H) // Materials: Coco With Chip 3x3, Mungur Wood // Finish Code: 127-131, Finish Name: Nothern Air - Nothern Air Wash // Set Up // CBM: 0.21 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT402-4-BL-L_001.jpg"
                        },
                        {
                            item: "JV-NHT402-WP",
                            qty: 25,
                            desc: "New Hampton End Table (16.53x16.53x18.50)   //  Material: Coconut Shell    //  CBM: 0.135  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm (elbow shape) stack  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT402-WP_001.jpg"
                        },
                        {
                            item: "JV-NHT701-WP",
                            qty: 15,
                            desc: "New Hampton Cocktail Table (35.43x23.62x16.33)   //  Material: Coconut Shell    //  CBM: 0.315  //  Packaging: Box Kraft #200 + Protect Box Styrofoam PE 2cm (elbow shape) + PW 3mm + Protect Box Styrofoam PE 2cm (L shape) + PW 3mm + Protect Box Styrofoam PE 2cm (elbow shape + stack) + Protect Box Styrofoam PE 2cm (stacked L shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT701-WP_001.jpg"
                        },
                        {
                            item: "LM-70208-NT",
                            qty: 30,
                            desc: "Nina Water Hyacinth Pendant Light, 30.75 Inch W, Natural (30.75W Inch  x 30.75D Inch  x 20.5H Inch ) // //Materials: Iron, Waterhyacinth, Rattan Kor // Finish Code: 19-1, Finish Name: Iron (Cream), Water Hyacinth (Natural), Rattan Core (Natural) // Set Up // CBM: 0.3978 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***UL AND CSA COMPLIANCE REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/LM-70208-NT_001.jpg"
                        },
                        {
                            item: "SY-MR401-GR",
                            qty: 15,
                            desc: "Marina Rattan Double Bench with Storage, 40.2 Inch W, Grey, (40.2 Inch W x 14.2 Inch D x 17.7 Inch H) // Materials: Kubu Grey, Mungur Wood // Finish Code: 1-16, Finish Name: Natural / Antiq Unfinished // CBM: 0.23 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SY-MR401-GR_001.jpg"
                        },
                        {
                            item: "SY-SNB604-BD",
                            qty: 15,
                            desc: "Sanibel Counterstool With Swivel Seat, Blonde (17.5W Inch  x 17.5D Inch  x 24H Inch ) // Materials: Banana Natural, Gamelina Wood // Finish Code: 142-143, Finish Name: Natural Blonde - Peanut Brown w/o Brush // Set Up // CBM: 0.16 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SY-SNB604-BD_001.jpg"
                        },
                        {
                            item: "TT-CT-211-BD",
                            qty: 12,
                            desc: "Tropical Coffee Table With Storage, Blonde (48W Inch  x 30D Inch  x 18H Inch ) // Materials: Banana Natural, Gamelina Wood (Base), Teak Wood (Feet), Gunny Sack // Finish Codes & Names: 142 Natural Blonde (Banana Natural), 143 Peanut Brown W/O Brush (Gamelina and Teak Woods), 1 Natural (Gunny Sack), // Partial KD (Feet) // CBM: 0.446 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-211-BD_001.jpg"
                        },
                        {
                            item: "TT-JV-JT403-SG",
                            qty: 10,
                            desc: "Juliette Coco End Table, Sage Green (15.74x15.74x16.53)   //  Material:     //  CBM: 0.106  //  Packaging: Box Kraft #150 + Box SW Juliette Stool (Small) 40x40x42 + Protect Box Styrofoam PE 2cm (L shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-JV-JT403-SG_001.jpg"
                        },
                        {
                            item: "TT-ST-70659-NT",
                            qty: 30,
                            desc: "Riley Twist Wooden Side Table (11.81x11.81x23.62)   //  Material: Munggur Wood    //  CBM: 0.098  //  Packaging: Box  Kraft #150 + Protect Box Styrofoam PE 2cm (elbow shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-ST-70659-NT_001.jpg"
                        },
                        {
                            item: "WA-70802-NT",
                            qty: 15,
                            desc: "Seagrass Abstract Wall Art, 39 Inch W, Natural (39x27x2)   //  Material: Bentik  //  Finish: Natural // Box Craft 200mm, Protect Styrofoam",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/WA-70802-NT_001.jpg"
                        },
                        {
                            item: "WA-70804-NT",
                            qty: 15,
                            desc: "Small Organic Banana Leaf Wall Decor, Natural (18x18x2)   //  Material: Banana Leaf  Frame : Metal Frame / Iron  //  Finish: Natural  //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/WA-70804-NT_001.jpg"
                        },
                        {
                            item: "WR-DE103-NT",
                            qty: 12,
                            desc: "Daphnie Rattan Side Chair, Natural, (23 Inch W x 23 Inch D x 39 Inch H) // Fabric Type: Polyester, Fabric Code from Vendor: SR-10 NATURAL, Fabric Content %: 100% Polyester, Fill Material on Upholstered Items only: Foam // Materials: Rattan Half Polish - Slimit Grey Open Weave // Finish Code: 1, Finish Name: Natural // Set Up // CBM: 0.447 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***SOFFA COMPLIANCE REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/WR-DE103-NT_001.jpg"
                        }
                    ]
                },
     "JW 2511-22N": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-02-27",
                    items: [
                        {
                            item: "AB-70889-NT",
                            qty: 10,
                            desc: "Organic Teak Wood Carved Bowl, 24 Inch W, Natural, (24 Inch W x 24 Inch D x 6 Inch H) //  // Materials: Teak Wood // Finish Code: 39, Finish Name: HO Natural //  // CBM: 0.054 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AB-70889-NT_001.jpg"
                        },
                        {
                            item: "AM-70138-NU",
                            qty: 30,
                            desc: "Malta Mirror, Natural, (47.25 Inch W x 3.5 Inch D x 47.25 Inch H) // Materials: Hapsala  // Finish Code: 39, Finish Name: Natural HO // Set Up  // CBM: 0.25 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70138-NU_001.jpg"
                        },
                        {
                            item: "CT-70102-NU",
                            qty: 5,
                            desc: "Natura Organic Coffee Table Base (Glass Top Not Included), Natural (39x39x18)   //  Material: Teakwood  //  Finish: Natural HO  // Box Craft 200mm,Protect PE",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70102-NU_001.jpg"
                        },
                        {
                            item: "CT2-70228-BD",
                            qty: 30,
                            desc: "Navi Open Lattice Weave Storage Coffee Tables, Set of Two, Blonde, (26 Inch W x 26 Inch D x 16 Inch H , 21.5 Inch W x 21.5 Inch D x 14 Inch H) // Materials: Banana Natural, Gamelina Wood, Gunny Sack // Finish Code: 142-144, Finish Name: Natural Blonde - Peanut Brown with Brush // Set Up // CBM: 0.25 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT2-70228-BD_001.jpg"
                        },
                        {
                            item: "JV-ABL401-BD",
                            qty: 20,
                            desc: "Abella Round Coffee Table, 34.25 Inch W, Blonde, (34.25 Inch W x 34.25 Inch D x 16.5 Inch H) // Materials: Banana Small Natural, Mungur Wood // Finish Code: 1-97, Finish Name: Banana Natural & White Patina // CBM: 0.42 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-ABL401-BD_001.jpg"
                        },
                        {
                            item: "ST-7014-BR",
                            qty: 30,
                            desc: "Round Capiz Accent Table, Tea Brown, (15.5 Inch W x 15.5 Inch D x 16.25 Inch H) // // Materials: Capiz // Finish Code: 39, Finish Name: Gold // Set Up // CBM: 0.103 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-7014-BR_001.jpg"
                        },
                        {
                            item: "ST-70627-BR",
                            qty: 20,
                            desc: "Solana Capiz Martini Table, 11 Inch W, Tea Brown (11W Inch  x 11D Inch  x 22H Inch ) // Materials: Capiz, Gamelina Wood // Finish Code: 145-143, Finish Name: Tea Brown - Peanut Brown w/o Brush // Set Up // CBM: 0.07 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70627-BR_001.jpg"
                        },
                        {
                            item: "ST-70627-WH",
                            qty: 20,
                            desc: "Solana Capiz Martini Table, 11 Inch W, White (11W Inch  x 11D Inch  x 22H Inch ) // Materials: Capiz, Gamelina Wood // Finish Code: 17-143, Finish Name: White - Peanut Brown w/o Brush // Set Up // CBM: 0.07 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70627-WH_001.jpg"
                        },
                        {
                            item: "SY-SNB604-BD",
                            qty: 15,
                            desc: "Sanibel Counterstool With Swivel Seat, Blonde (17.5W Inch  x 17.5D Inch  x 24H Inch ) // Materials: Banana Natural, Gamelina Wood // Finish Code: 142-143, Finish Name: Natural Blonde - Peanut Brown w/o Brush // Set Up // CBM: 0.16 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SY-SNB604-BD_001.jpg"
                        },
                        {
                            item: "TT-CT-211-BD",
                            qty: 23,
                            desc: "JTropical Coffee Table With Storage, Blonde (48W Inch  x 30D Inch  x 18H Inch ) // Materials: Banana Natural, Gamelina Wood (Base), Teak Wood (Feet), Gunny Sack // Finish Codes & Names: 142 Natural Blonde (Banana Natural), 143 Peanut Brown W/O Brush (Gamelina and Teak Woods), 1 Natural (Gunny Sack), // Partial KD (Feet) // CBM: 0.446 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-211-BD_001.jpg"
                        },
                        {
                            item: "TT-UC-RC507-WH",
                            qty: 20,
                            desc: "Capiz Round End Table (19.29x19.29x23.03)   //  Material: Acacia Wood; Plywood; Full Capiz    //  CBM: 0.217  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam PE 2cm (L shape) + Protect Box Styrofoam PE 2cm (elbow shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-UC-RC507-WH_001.jpg"
                        },
                        {
                            item: "WA-70802-NT",
                            qty: 20,
                            desc: "Seagrass Abstract Wall Art, 39 Inch W, Natural (39x27x2)   //  Material: Bentik  //  Finish: Natural // Box Craft 200mm, Protect Styrofoam",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/WA-70802-NT_001.jpg"
                        },
                        {
                            item: "WA-70804-NT",
                            qty: 20,
                            desc: " Small Organic Banana Leaf Wall Decor, Natural (18x18x2)   //  Material: Banana Leaf  Frame : Metal Frame / Iron  //  Finish: Natural  //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/WA-70804-NT_001.jpg"
                        },
                        {
                            item: "WR-DE103-NT",
                            qty: 26,
                            desc: "Daphnie Rattan Side Chair, Natural, (23 Inch W x 23 Inch D x 39 Inch H) // Fabric Type: Polyester, Fabric Code from Vendor: SR-10 NATURAL, Fabric Content %: 100% Polyester, Fill Material on Upholstered Items only: Foam // Materials: Rattan Half Polish - Slimit Grey Open Weave // Finish Code: 1, Finish Name: Natural // Set Up // CBM: 0.447 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***SOFFA COMPLIANCE REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/WR-DE103-NT_001.jpg"
                        }
                    ]
                },
                "JW 2512-02N": {
                    Vendor: "V63 Dcofrance & Edclaire",
                    ecrd: "2026-04-28",
                    items: [
                        {
                            item: "CT-63111",
                            qty: 10,
                            desc: "Wythe Coffee Table with Woven Rattan Inset (51.97x31.5x19.69)   //  Material: Bayur Wood; MDF Rattan  //  CBM: 0.699  //  Packaging: B0-JF (Box Kraft 200 + Protect)  //  Master Carton: 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-63111_001.jpg"
                        },
                        {
                            item: "CT-63550-WH",
                            qty: 25,
                            desc: "Atlantis Coffee Table With Woven Rattan Detail, 47.25 Inch W, White, (47.25 Inch W x 27.5 Inch D x 17.75 Inch H) // Materials: Bayur Wood, MDF, Rattan Rapat // Finish Code: X-992 (wood C-355 / Rattan Rapat RA-432), Finish Name: White painted / Rattan Natural // Set Up  // CBM: 0.497952 // Number of Shipping Boxes: 1 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-63550-WH_001.jpg"
                        },
                        {
                            item: "DC-63321-NT",
                            qty: 20,
                            desc: "Wide Woven Dining Chair, Set of 2, Natural 23.3x19.7x41.7, N/A // Fabric Type: N/A, Fabric Code: N/A, Fabric Content: N/A, Fill Material: N/A // Finish Code: AA-208 ( wood A-123 / pandanus AS-400), Finish Name: Natural // Set Up  // CBM: 0.44 // Number of Shipping Boxes: 1 //  //  //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC-63321-NT_001.jpg"
                        },
                        {
                            item: "OT-63770-WH",
                            qty: 25,
                            desc: "Atlantis Console Table With Woven Rattan Detail, 47.25 Inch W, White, (47.25 Inch W x 15.75 Inch D x 31.5 Inch H) // Materials: Bayur Wood, MDF, Rattan Rapat // Finish Code: X-992 (wood C-355 / Rattan Rapat RA-432), Finish Name: White painted / Rattan Natural // Set Up  // CBM: 0.504 // Number of Shipping Boxes: 1 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-63770-WH_001.jpg"
                        },
                        {
                            item: "SB-63513-BR",
                            qty: 10,
                            desc: "Claude Bow Front Sideboard, Large, 83 Inch W, Brown 82.68x19.68x35.43, N/A // Fabric Type: N/A, Fabric Code: N/A, Fabric Content: N/A, Fill Material: N/A // Finish Code: A-123 (wood A-123), Finish Name: Brown // Set Up  // CBM: 1.17 // Number of Shipping Boxes: 1 //  //  //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63513-BR_001.jpg"
                        },
                        {
                            item: "SB-63519-WH",
                            qty: 8,
                            desc: "4 Door Sideboard with Wrapped Handles (86.61x19.69x33.86)   //  Material: Bayur Wood  //  CBM: 1.069   //  Packaging:",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63519-WH_001.jpg"
                        },
                        {
                            item: "ST-63660-WH",
                            qty: 30,
                            desc: "Atlantis Side Table With Woven Rattan Detail, 15.75 Inch W, White, (15.75 Inch W x 15.75 Inch D x 19.75 Inch H) // Materials: Bayur Wood, MDF, Rattan Rapat // Finish Code: X-992 (wood C-355 / Rattan Rapat RA-432), Finish Name: White painted / Rattan Natural // Set Up  // CBM: 0.120612 // Number of Shipping Boxes: 1 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-63660-WH_001.jpg"
                        }
                    ]
                },
                "JW 2512-03N": {
                    Vendor: "V63 Dcofrance & Edclaire",
                    ecrd: "2026-04-28",
                    items: [
                        {
                            item: "CB-63707-WH",
                            qty: 14,
                            desc: "Seraphine 2 Door Cabinet With Rattan Medallion Motif, 55.25 InchW, White (55.25W Inch x 19.75D Inch x 80.75H Inch) _ Materials: Bayur wood/MDF/Plywood/Rattan Square/Doorcore _ Finish Code: TBA, Finish Name: TBA _ Set Up _ CBM: 1.721 _ Number of Shipping Boxes: 1 _",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CB-63707-WH_001.jpg"
                        },
                        {
                            item: "SB-63105-WH",
                            qty: 14,
                            desc: "Julia Sideboard With Circular Motif, White/Natural (61W Inch x 19.75D Inch x 35.5H Inch) _ Materials: Bayur wood/MDF/Plywood/Veneer Mindi wood/Doorcore _ Finish Code: TBA, Finish Name: TBA _ Set Up _ CBM: 0.669 _ Number of Shipping Boxes: 1 _",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63105-WH_001.jpg"
                        },
                        {
                            item: "SB-63425-WH",
                            qty: 7,
                            desc: "Lillian 4 Door Sideboard With Woven Rattan Doors, 62 Inch W, White/Natural, (62 Inch W x 15.75 Inch D x 36.25 Inch H) // Materials: Bayur Wood, MDF, Plywood, Veneer Mindi Wood, Rattan, Doorcore // Finish Code: X-992 (Wood C-355 / Rattan Rapat RA-432), Finish Name: White Painted / Rattan Natural // Set Up  // CBM: 0.735 // Number of Shipping Boxes: 1 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63425-WH_001.jpg"
                        },
                        {
                            item: "SB-63445-WH",
                            qty: 14,
                            desc: "Seraphine 4 Door Sideboard With Rattan Medallion Motif, 86.75 InchW, White (86.75W Inch x 17.75D Inch x 35.5H Inch) _ Materials: Bayur wood/MDF/Plywood/Rattan Square/Doorcore _ Finish Code: TBA, Finish Name: TBA _ Set Up _ CBM: 1.1065 _ Number of Shipping Boxes: 1 _",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63445-WH_001.jpg"
                        },
                        {
                            item: "SB-63513-SM-BR",
                            qty: 10,
                            desc: "Claude Bow Front Sideboard, Small, Brown (60.75 Inch W x 19.75 Inch D x 35.5 Inch H) // // Materials: Bayur wood/MDF/Plywood/Veneer Mindi wood/Doorcore // Finish Code: A-123, Finish Name: wood A-123 // Set Up // CBM: 0.8691 // Number of Shipping Boxes: 1 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63513-SM-BR_001.jpg"
                        }
                    ]
                },
                "JW 2512-04N": {
                    Vendor: "V68 PT. FURNILAC PRIMAGUNA",
                    ecrd: "2026-02-23",
                    items: [
                        {
                            item: "AM-68804-NT",
                            qty: 45,
                            desc: "Gia Rectangular Raffia Frame Mirror, Natural (22x1x30)   //  Material: Wood, Mirror,Raffia  //  CBM: 0.066  //  Packaging: DROPSHIP PACKAGING REQUIRED***// Inch Indigo Road Packaging Inch  Inch  required //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-68804-NT_001.jpg"
                        },
                        {
                            item: "AM-68804-NV",
                            qty: 25,
                            desc: "Gia Rectangular Raffia Frame Mirror, Navy (22x1x30)   //  Material: Wood, Mirror,Raffia  //  CBM: 0.066  //  Packaging: DROPSHIP PACKAGING REQUIRED***// Inch Indigo Road Packaging Inch  Inch  required //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-68804-NV_001.jpg"
                        },
                        {
                            item: "NS-68109-NVV",
                            qty: 50,
                            desc: "Devon 3 Drawer Nightstand, 22 InchW, Navy (22W Inch x 15D Inch x 24H Inch) _ Materials: Wood+Mdf+Veneer Meranti+Metal Rails+40mm Metal Ring Pulls _ Finish Code: Navy - Ring Pull: AC-040/E, Finish Name: Navy - Ring Pull: Antique Gold _ Set Up _ CBM: 0.215 _ Number of Shipping Boxes: 1 _ ***DROPSHIP PACKAGING REQUIRED*** _ ***ISTA 3A PACKAGING REQUIRED*** _",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68109-NVV_001.jpg"
                        },
                        {
                            item: "OT-68RA52-NT",
                            qty: 30,
                            desc: "Raffia Wrapped K/D Console Table with Shelf, Natural (47.0x15.0x30.0)   //  Material: Raffia, MDF  //  CBM: 0.2022  //  Packaging: Brown carton   5 ply outer craft 200   Styrofoam 3 cm  //   ***DROPSHIP PACKAGING REQUIRED*** // KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-68RA52-NT_001.jpg"
                        },
                        {
                            item: "ST-68501-MBV",
                            qty: 50,
                            desc: "Ezra 2 Drawer Side Table, KD, 34 Inch W, Medium Brown (34W Inch  x 15D Inch  x 30H Inch ) // // Materials: Wood + Mdf + Meranti // Finish Code: BMV/02, Finish Name: Medium Brown // KD // CBM: 0.407 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** // ***ANTI TIP KIT REQUIRED***//",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-68501-MBV_001.jpg"
                        },
                        {
                            item: "ST-68501-WB",
                            qty: 50,
                            desc: "Ezra 2 Drawer Side Table (34W Inch  x 15D Inch  x 29.5H Inch )   //  Material: MDF  //  CBM: 0.4066  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***(CKV/1775/JF) Ezra 2 Drawer Side Table ,Warm Brown 34x15x29.5..Material/Color: Solid wood & Mdf/ Aqua Dew DropCBM: 0.39..Packing: Box kraft 200 + Protection***  //    KD // ***ANTI TIP KIT REQUIRED***//",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-68501-WB_001.jpg"
                        },
                        {
                            item: "VC-YK339-BK",
                            qty: 25,
                            desc: "York Three Drawer Accent Side Table, Black, (18.5 Inch W x 15 Inch D x 23 Inch H) // Materials: Bayur Wood and Mdf E2 // Finish Code: , Finish Name: Black // Set Up  // CBM: 0.1787 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-YK339-BK_001.jpg"
                        }
                    ]
                },
                "JW 2512-05N": {
                    Vendor: "V68 PT. FURNILAC PRIMAGUNA",
                    ecrd: "2026-02-23",
                    items: [
                        {
                            item: "NS-6802-MBV",
                            qty: 50,
                            desc: "Gemma 2 Drawer Nightsand With Open Storage, 34 Inch W, Medium Brown (34W Inch  x 15D Inch  x 29.5H Inch ) // // Materials: Wood,Mdf+V.Meranti // Finish Code: BMV/02, Finish Name: Medium Brown // KD // CBM: 0.344 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** // ***ANTI TIP KIT REQUIRED***//",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-6802-MBV_001.jpg"
                        },
                        {
                            item: "NS-6802-MRBK",
                            qty: 40,
                            desc: "Gemma 2 Drawer Nightsand With Open Storage, KD,  34 Inch W, Black (34 x 15 x 29.5)   //  Material: Bayur Wood, Meranti Veneer, MDF, Metal Hardware  //  Finish: Black Solid  //  ***ISTA 3A Packaging Required***  //  ***INDIGO ROAD PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-6802-MRBK_001.jpg"
                        },
                        {
                            item: "NS-68775-OW",
                            qty: 30,
                            desc: "Maribelle Scallop Nightstand, Off-White (28W Inch  x 15D Inch  x 26H Inch ) //  // Materials: Bayur Wood-Mdf  // Finish Code: SW 7004, Finish Name: Snowbound White // Set Up  // CBM: 0.29 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68775-OW_001.jpg"
                        },
                        {
                            item: "NS-68775-SB",
                            qty: 27,
                            desc: "Maribelle Scallop Nightstand, Slate Blue (28W Inch  x 15D Inch  x 26H Inch ) //  // Materials: Bayur Wood-Mdf  // Finish Code: SW 7611, Finish Name:  Tranquil Aqua // Set Up  // CBM: 0.29 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68775-SB_001.jpg"
                        },
                        {
                            item: "NS-68945-NT",
                            qty: 30,
                            desc: "Paloma 2 Drawer Raffia Wrapped Night Stand with Shelf, Natural, (28 Inch W x 15 Inch D x 26 Inch H) //  // Materials: Wood, Mdf + Anyaman Raffia // Finish Code: NA, Finish Name: Natural // Set Up  // CBM: 0.29 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68945-NT_001.jpg"
                        },
                        {
                            item: "ST-68DR16-WW",
                            qty: 25,
                            desc: "16 Inch  Cinched Wood Drum Table, White Oak (16x16x23.5)   //  Material: Wood, MDF  //  CBM: 0.1725  //  Packaging:  Inch Drop Ship packaging required Inch  polysheet wrapped Brown carton, 5 ply outer craft 200  Styrofoam 3 cm  //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-68DR16-WW_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-BK",
                            qty: 35,
                            desc: "Hooper 2 Drawer Wooden Accent Side Table (17.9x14.9x22.0)   //  Material: MDF  //  CBM: 0.173  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Hooper 2 Drawer Wooden Accent Side Table-Black..(18x15x22) Material/Color:Bayur Wood and Mdf E2/Black..CBM:0.17 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-BK_001.jpg"
                        },
                        {
                            item: "DR-68834-NT",
                            qty: 30,
                            desc: "Paloma 3 Drawer Raffia Wrapped Dresser, Natural, (34 Inch W x 18 Inch D x 32.5 Inch H) //  // Materials: Wood, Mdf + Anyaman Raffia // Finish Code: NA, Finish Name: Natural // Set Up  // CBM: 0.49 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ANTI TIP KIT REQUIRED***// ***STURDY Act Testing Required***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DR-68834-NT_001.jpg"
                        },
                        {
                            item: "DR-68848-OW",
                            qty: 29,
                            desc: "Maribelle Scallop 3 Drawer Dresser, Off-White (34W Inch  x 18D Inch  x 32.5H Inch ) //  // Materials: Bayur Wood-Mdf  // Finish Code: SW 7004, Finish Name: Snowbound White // Set Up  // CBM: 0.49 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***STURDY ACT TESTING REQUIRED***// ANTI TIP KIT REQUIRED***//",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DR-68848-OW_001.jpg"
                        },
                        {
                            item: "DR-68848-SB",
                            qty: 29,
                            desc: "Maribelle Scallop 3 Drawer Dresser, Slate Blue (34W Inch  x 18D Inch  x 32.5H Inch ) //  // Materials: Bayur Wood-Mdf  // Finish Code: SW 7611, Finish Name: Tranquil Aqua // Set Up  // CBM: 0.49 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***STURDY ACT TESTING REQUIRED***// ANTI TIP KIT REQUIRED***//",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DR-68848-SB_001.jpg"
                        },
                        {
                            item: "TT-ST-68501-BGW",
                            qty: 30,
                            desc: "Ezra 2 Drawer Side Table (34x15x29.5)   //  Material: MDF  //  CBM: 0.4066  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //    //  //  Material/Color: Bayur Wood & MDF Veneer // Black.CBM: 0.39..Packing: Box kraft 200 + Protection*** Inch Drop Ship Packaging required Inch   // KD // ***ANTI TIP KIT REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-ST-68501-BGW_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-BR",
                            qty: 25,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF  //  CBM: 0.1787  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table-Brown (19x15x23) Material/Color:Bayur Wood and Mdf E2/Brown..CBM:0.18 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-BR_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-WH",
                            qty: 27,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF, Acacia Wood  //  CBM: 0.1787  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table-White (19x15x23) Material/Color:Bayur Wood and Mdf E2/White..CBM:0.17 Packing:Box K#200+Styrofoam 2cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-WH_001.jpg"
                        }
                    ]
                },
                "JW 2512-06N": {
                    Vendor: "V68 PT. FURNILAC PRIMAGUNA",
                    ecrd: "2026-02-23",
                    items: [
                        {
                            item: "DR-68834-NT",
                            qty: 30,
                            desc: "Paloma 3 Drawer Raffia Wrapped Dresser, Natural, (34 Inch W x 18 Inch D x 32.5 Inch H) // // Materials: Wood, Mdf + Anyaman Raffia // Finish Code: NA, Finish Name: Natural // Set Up // CBM: 0.49 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ANTI TIP KIT REQUIRED***// ***STURDY Act Testing Required***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DR-68834-NT_001.jpg"
                        },
                        {
                            item: "DR-68848-OW",
                            qty: 29,
                            desc: "Maribelle Scallop 3 Drawer Dresser, Off-White (34W Inch x 18D Inch x 32.5H Inch ) // // Materials: Bayur Wood-Mdf // Finish Code: SW 7004, Finish Name: Snowbound White // Set Up // CBM: 0.49 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***STURDY ACT TESTING REQUIRED***// ANTI TIP KIT REQUIRED***//",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DR-68848-OW_001.jpg"
                        },
                        {
                            item: "DR-68848-SB",
                            qty: 29,
                            desc: "Maribelle Scallop 3 Drawer Dresser, Slate Blue (34W Inch x 18D Inch x 32.5H Inch ) // // Materials: Bayur Wood-Mdf // Finish Code: SW 7611, Finish Name: Tranquil Aqua // Set Up // CBM: 0.49 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***STURDY ACT TESTING REQUIRED***// ANTI TIP KIT REQUIRED***//",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DR-68848-SB_001.jpg"
                        },
                        {
                            item: "ST-68522-WH",
                            qty: 25,
                            desc: "22 Inch Round X Base Side Table, White (22.0x22.0x22.0) // Material: Bayur Wood, MDF, Veneer // CBM: 0.0922 // Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm // Master Carton: // ***round end table with chunky base (KD) White oak Veneer 22x22x22 Solid Wood/Veneer & MDF cbm:*** // ***DROPSHIP PACKAGING REQUIRED*** KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-68522-WH_001.jpg"
                        },
                        {
                            item: "TT-ST-68501-BGW",
                            qty: 30,
                            desc: "Ezra 2 Drawer Side Table (34x15x29.5)   //  Material: MDF  //  CBM: 0.4066  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //    //  //  Material/Color: Bayur Wood & MDF Veneer // Black.CBM: 0.39..Packing: Box kraft 200 + Protection*** Inch Drop Ship Packaging required Inch   // KD // ***ANTI TIP KIT REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-ST-68501-BGW_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-BR",
                            qty: 25,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF  //  CBM: 0.1787  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table-Brown (19x15x23) Material/Color:Bayur Wood and Mdf E2/Brown..CBM:0.18 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-BR_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-WH",
                            qty: 27,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF, Acacia Wood  //  CBM: 0.1787  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table-White (19x15x23) Material/Color:Bayur Wood and Mdf E2/White..CBM:0.17 Packing:Box K#200+Styrofoam 2cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-WH_001.jpg"
                        }
                    ]
                },
                "JW 2512-07N": {
                    Vendor: "V73 Infinite Rattan Creation, CV",
                    ecrd: "2026-03-10",
                    items: [
                        {
                            item: "CS-73675-NT",
                            qty: 50,
                            desc: "SCALLOP-RATTAN-BACKLESS-CSTL _ Bonnie Backless Rattan Counterstool With Scallop Woven Rattan Apron And Upholstered White Seat, Natural (15.75W Inch x 15.75D Inch x 24.75H Inch) _ Fabric Type: Polyester, Fabric Code from Vendor: VW White, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam _ Materials: Rattan, Plywood _ Finish Code: JFN SC NAT, Finish Name: Natural _ Set Up _ CBM: 0.14812 _ Number of Shipping Boxes: 1 _ ***DROPSHIP PACKAGING REQUIRED*** _ ***SOFFA COMPLIANCE REQUIRED*** _",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CS-73675-NT_001.jpg"
                        },
                        {
                            item: "HB-KD101-T-GN",
                            qty: 16,
                            desc: "Lattice Twin Headboard, Green, (41.5 Inch W x 2 Inch D x 52 Inch H) // Materials: Mahogany Wood, Rattan // Finish Code: JFN GRN 01, Finish Name: Green // KD // CBM: 0.169048 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/HB-KD101-T-GN_001.jpg"
                        },
                        {
                            item: "HB-KD101-T-WH",
                            qty: 15,
                            desc: "Lattice Twin Headboard, White, (41.5 Inch W x 2 Inch D x 52 Inch H) // Materials: Mahogany Wood, Rattan // Finish Code: JFN WHT 01, Finish Name: White // KD // CBM: 0.169048 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/HB-KD101-T-WH_001.jpg"
                        },
                        {
                            item: "OC-73759-NT",
                            qty: 35,
                            desc: "YULIA-RUSH-NATURAL _ Isabella Rattan Occasional Chair With Rush Paneling, Natural (28.75W Inch x 28.5D Inch x 31.5H Inch) _ Fabric Type: Polyester, Fabric Code from Vendor: Canvas White, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam Dc, Dacron _ Materials: Rattan Pole, Banana Bark, Plywood, Mahogany Wood, Cushion. _ Finish Code: JFN-PLM BRN, Finish Name: Natural on Banana, Palmeto Light Brown on Wood & Rattan. _ Set Up _ CBM: 0.5376 _ Number of Shipping Boxes: 1 _ ***SOFFA COMPLIANCE REQUIRED*** _",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OC-73759-NT_001.jpg"
                        },
                        {
                            item: "SB-73105-WH",
                            qty: 20,
                            desc: "Hampton Chippendale Barstool (19.75 x 21 x 45)   //  Material: 0  //  CBM: 0.363  //  Packaging: EMPTY BOX  //  Master Carton: 1 PC  //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-73105-WH_001.jpg"
                        },
                        {
                            item: "SB-73106-NV",
                            qty: 30,
                            desc: "HAMPTON-CS-NAVY // Hampton Chippendale Counterstool, 39.25 Inch H, Navy, (19.75 Inch W x 20.5 Inch D x 39.25 Inch H) // Finish Code: JFN NVY 01, Finish Name: Navy Blue // Set Up  // CBM: 0.314 // Number of Shipping Boxes: 1 // Materpack Contains:  // ***DROPSHIP PACKAGING REQUIRED*** //  FALSE***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-73106-NV_001.jpg"
                        },
                        {
                            item: "SB-73106-WH",
                            qty: 50,
                            desc: "Hampton Chippendale Counter Stool, 39.25 Inch H, White, (19.75 Inch W x 20.5 Inch D x 39.25 Inch H)   //  Material: 0  //  CBM: 0.314  //  Packaging: EMPTY BOX  //  Master Carton: 1 PC  //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-73106-WH_001.jpg"
                        }
                    ]
                },
                "JW 2512-09N1": {
                    Vendor: "V76 CV. Arzati Rattan",
                    ecrd: "2026-03-11",
                    items: [
                        {
                            item: "AC-76110-Set",
                            qty: 25,
                            desc: "Mona Rectangular Rattan Tray 3 Piece Set, Natural (24W Inch x 18D Inch x 7H Inch & 21W Inch x 16D Inch x 6H Inch & 18W Inch x 13D Inch x 5H Inch) _ Materials: KUBU GREY _ Finish Code: AR/KG-01, Finish Name: NATURAL _ Set Up _ CBM: 0.061194 _ Number of Shipping Boxes: 1 _ ***DROPSHIP PACKAGING REQUIRED*** _",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AC-76110-Set_001.jpg"
                        },
                        {
                            item: "AC-76125-L-Set",
                            qty: 60,
                            desc: "Mona Round Rattan Basket 2 Piece Set, Natural (20W Inch x 20D Inch x 22H Inch & 16W Inch x 16D Inch x 19H Inch) _ Materials: KUBU GREY _ Finish Code: AR/KG-01, Finish Name: NATURAL _ Set Up _ CBM: 0.16224 _ Number of Shipping Boxes: 1 _ ***DROPSHIP PACKAGING REQUIRED*** _",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AC-76125-L-Set_001.jpg"
                        },
                        {
                            item: "AC-76125-Set",
                            qty: 60,
                            desc: "Mona Round Rattan Basket 2 Piece Set, Natural (16W Inch x 16D Inch x 19H Inch & 12W Inch x 12D Inch x 14H Inch) _ Materials: KUBU GREY _ Finish Code: AR/KG-01, Finish Name: NATURAL _ Set Up _ CBM: 0.04096 _ Number of Shipping Boxes: 1 _ ***DROPSHIP PACKAGING REQUIRED*** _",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AC-76125-Set_001.jpg"
                        },
                        {
                            item: "AC-76887-NT",
                            qty: 20,
                            desc: "Sabrina Baskets, 2 Piece Set, 29 Inch H & 24 Inch H, Natural, (16 Inch W x 10 Inch D x 29 Inch H & 12 Inch W x 7 Inch D x 24 Inch H) // Materials: Kubu Grey // Finish Code: AR/KG-01, Finish Name: Natural // Set Up  // CBM: 0.08 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AC-76887-NT_001.jpg"
                        },
                        {
                            item: "CT-76225-NT",
                            qty: 20,
                            desc: "Sabrina Basket Coffee Table With Storage, 49 Inch W, Natural, (49 Inch W x 29.5 Inch D x 18 Inch H) // Materials: Mahogany Wood, Kubu Grey // Finish Code: AR/KG-01, Finish Name: Natural // Set Up  // CBM: 0.5041 // Number of Shipping Boxes: 1 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-76225-NT_001.jpg"
                        },
                        {
                            item: "OC-76311-NT",
                            qty: 28,
                            desc: "Colinas Dining Chair, Natural (25W Inch x 26D Inch x 34H Inch) _ Fabric Type: Polyester, Fabric Code from Vendor: CTN, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam _ Materials: KUBU GREY, RATTAN CL _ Finish Code: AR/BRW-01, Finish Name: BROWN _ Set Up _ CBM: 0.395032 _ Number of Shipping Boxes: 1 _ ***DROPSHIP PACKAGING REQUIRED*** _ ***SOFFA COMPLIANCE REQUIRED*** _",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OC-76311-NT_001.jpg"
                        }
                    ]
                },
                "JW 2512-09N2": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-03-30",
                    items: [
                        {
                            item: "CT-70246-BD",
                            qty: 18,
                            desc: "Daxton Geometric Woven Coffee Table, Blonde (39.25W Inch x 39.25D Inch x 18H Inch) _Materials: Acacia Wood, Plywood, Banana Small Natural (3-4mm) _ Finish Code: 142, Finish Name: Natural Blonde _ Set Up _ CBM: 0.573 _ Number of Shipping Boxes: 1 _ ***DROPSHIP PACKAGING REQUIRED*** _",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70246-BD_001.jpg"
                        },
                        {
                            item: "JV-FR205-BD",
                            qty: 15,
                            desc: "Francis Double Bench, Blonde (56.75W Inch  x 17D Inch  x 22H Inch ) // Fabric Type: Polyester, Fabric Code from Vendor: Mascoto, Fabric Content %: 100% Polyester, Fill Material on Upholstered Items only: Foam // Materials: Banana Natural, Gamelina Wood // Finish Code: 142-143, Finish Name: Natural Blonde - Peanut Brown w/o Brush // Partial KD // CBM: 0.348 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** // ***SOFFA COMPLIANCE REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-FR205-BD_001"
                        },
                        {
                            item: "JV-JT403-BL",
                            qty: 10,
                            desc: "Juliette Coco End Table, Blue, (15.75 Inch W x 15.75 Inch D x 16.5 Inch H) // Materials: Coconut // Finish Code: 135, Finish Name: Nothern Air // Set Up  // CBM: 0.11 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-JT403-BL_001.jpg"
                        },
                        {
                            item: "ST-70883-BD",
                            qty: 10,
                            desc: "Tropical Round Side Table With Storage, Blonde (18W Inch x 18D Inch x 20H Inch) _ Materials: Banana Natural, Gamelina Wood, Gunny Sack _ Finish Code: 142-143, Finish Name: Natural Blonde - Peanut Brown w/o Brush _ Set Up _ CBM: 0.170_ Number of Shipping Boxes: 1 _ ***DROPSHIP PACKAGING REQUIRED*** _ ***ISTA 3A PACKAGING REQUIRED*** _",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70883-BD_001.jpg"
                        },
                        {
                            item: "TT-CT-211-BD",
                            qty: 10,
                            desc: "Tropical Coffee Table With Storage, Blonde (48W Inch  x 30D Inch  x 18H Inch ) // Materials: Banana Natural, Gamelina Wood (Base), Teak Wood (Feet), Gunny Sack // Finish Codes & Names: 142 Natural Blonde (Banana Natural), 143 Peanut Brown W/O Brush (Gamelina and Teak Woods), 1 Natural (Gunny Sack), // Partial KD (Feet) // CBM: 0.446 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-211-BD_001.jpg"
                        },
                        {
                            item: "WR-DE103-NT",
                            qty: 10,
                            desc: "Daphnie Rattan Side Chair, Natural, (23 Inch W x 23 Inch D x 39 Inch H) // Fabric Type: Polyester, Fabric Code from Vendor: SR-10 NATURAL, Fabric Content %: 100% Polyester, Fill Material on Upholstered Items only: Foam // Materials: Rattan Half Polish - Slimit Grey Open Weave // Finish Code: 1, Finish Name: Natural // Set Up // CBM: 0.447 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***SOFFA COMPLIANCE REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/WR-DE103-NT_001.jpg"
                        }
                    ]
                },
                "JW 2512-10": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-03-30",
                    items: [
                        {
                            item: "AM-70604",
                            qty: 8,
                            desc: "Fulton Teak Mirror (26.77x1.456x78.74)   //  Material: Envi Thin    //  CBM: 0.202  //  Packaging: Box Kraft #150 + Box SW (Pizza models) + Protect Box Styrofoam 2cm for Headboard 6cm + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Styrofoam 100x200x2 + wrap paper/kg  wide 120 + Single Face  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70604_001.jpg"
                        },
                        {
                            item: "AM-70912-M",
                            qty: 20,
                            desc: "24 Inch  Marina Round Rattan Mirror, White (23.62x3.543x23.62)   //  Material: Rattan; Sanded Peel    //  CBM: 0.093  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for Headboard (width in styrofoam and sw = 11cm) + Styrofoam 100x200x2 + Medium paper/kg (m2=0.2 kg)  //  Master Carton: Y , 1   Inch Drop Ship PAckaging Inch  required",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70912-M_001.jpg"
                        },
                        {
                            item: "AM-LE701",
                            qty: 25,
                            desc: "Live Edge 3D Mirror Solid Suar Wood Frame (21.65x1.968x24.01)   //  Material: Munggur Wood    //  CBM: 0.05  //  Packaging: Box Kraft #150 + Box SW (stack cover) + Protect Box Styrofoam 2cm for Headboard 6cm + Single Face + wrap paper/kg  wide 120 + Styrofoam 100x200x2  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-LE701_001.jpg"
                        },
                        {
                            item: "CT-70435",
                            qty: 20,
                            desc: "Fulton Storage Coffee Table (30.70x30.70x15.74)   //  Material:     //  CBM: 0.339  //  Packaging: Box Kraft #200 + Box SW + Protect Box Styrofoam PE 2cm (elbow shape) + Protect Box Styrofoam PE 2cm (L shape) + Medium paper/kg (m2=0.2 kg)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70435_001.jpg"
                        },
                        {
                            item: "CT-70611-NT",
                            qty: 25,
                            desc: "Abella Round Woven Banana Leaf Coffee Table, 28 Inch W, Natural 28.15 Inch W x 28.15 Inch D x 14.75”H // Fabric Type: N/A // Finish Name: Natural // Set Up  // CBM: 0.267 // Number of Shipping Boxes: 1 //  //  // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70611-NT_001.jpg"
                        },
                        {
                            item: "GD-70514",
                            qty: 5,
                            desc: "Fulton Sideboard (59.84x17.71x35.43)   //  Material: Teakwood    //  CBM: 0.782  //  Packaging: Box  Corner Protect Kraft #200 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + wrap paper/kg  wide 120  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/GD-70514_001.jpg"
                        },
                        {
                            item: "GD-70524",
                            qty: 5,
                            desc: "Fulton Sideboard, Two Door (47.24x15.74x35.43)   //  Material: Acacia Wood    //  CBM: 0.565  //  Packaging: Box kraft #200 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + wrap paper/kg  wide 120  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/GD-70524_001.jpg"
                        },
                        {
                            item: "JV-ABL401",
                            qty: 20,
                            desc: "Abella Round Coffee Table (34.25x34.25x16.53)   //  Material: Rotan Frame; Banana Small  Astor + Banana (Styrofoam 1) + Single Face  Master Carton: Y , 1***DROPSHIP PACKAGING REQUIRED***  KD    //  CBM: 0.397  //  Packaging: Box Kraft #150 + Protect Styrofoam (Styrofoam 1) + Single Face  //  Master Carton: Y , 1  //  ***DROPSHIP PACKAGING REQUIRED***  ******",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-ABL401_001.jpg"
                        },
                        {
                            item: "JV-AS504-RC",
                            qty: 15,
                            desc: "Aspen Rectangular Mirror - Natural (24x2x30) (25.19x2.244x31.10)   //  Material: Big Rope Woven; MDF    //  CBM: 0.084  //  Packaging: Box Kraft #150 + Box SW model pizza + Protect Box Styrofoam PE 2cm (elbow shape) + wrap paper/kg  wide 120 + Styrofoam 100x200x2  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-AS504-RC_001.jpg"
                        },
                        {
                            item: "JV-CR401-BD",
                            qty: 12,
                            desc: "Cypress Cocktail Table, 35.5 Inch W, Blonde, (35.5 Inch W x 35.5 Inch D x 17.75 Inch H) // Materials: Banana Small Natural Lamination, Mungur Wood // Finish Code: 1-143, Finish Name: Banana Natural & Peanut Brown W/O Brush // Partial KD // CBM: 0.51 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-CR401-BD_001.jpg"
                        },
                        {
                            item: "LM-2493A",
                            qty: 5,
                            desc: "Mason Pendant, Kubu Grey, Large (33.07x33.07x27.95)   //  Material: Iron; Kubu Grey    //  CBM: 0.646  //  Packaging: Box Kraft #150 + Protect hat model Kubo Hanging + Protect Box Styrofoam 2cm for a circle shape ( L ) 15cm + Medium paper/kg (m2=0.2 kg)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/LM-2493A_001.jpg"
                        },
                        {
                            item: "LM-2498-WH",
                            qty: 4,
                            desc: "31 Inch  Delphine Woven  Manila Rope Chandelier, White (33.07x33.07x20.86)   //  Material: Core + Agel - Hanger: Manilla Rope    //  CBM: 0.447  //  Packaging: Box Kraft #150 + Protect hat model for Downy Hanging Lamp + Protect Box Styrofoam 2cm for a circle shape ( L ) + Medium paper/kg (m2=0.2 kg)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/LM-2498-WH_001.jpg"
                        },
                        {
                            item: "ST-70134-WH",
                            qty: 15,
                            desc: "Armos Side Table, Solid White (14x14x19.5)   //  Material: Suar Wood top (Beveled) - Teakwood base - New Solid White  //  Finish: NCT-SLD-WHITE-NEW New Solid White  //  CBM: 0.096  //    //  MOQ: 30  Packaging:   Inch Indigo Road PAckaging Inch  Required   Inch Drop Ship packaging Inch  required",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70134-WH_001.jpg"
                        },
                        {
                            item: "ST-70435",
                            qty: 20,
                            desc: "Fulton Storage Side Table (19.68x19.68x23.22)   //  Material: Twig-Envi Thin    //  CBM: 0.207  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm (elbow shape) + Single Wall  wide 200 x 180  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70435_001.jpg"
                        },
                        {
                            item: "TT-AC-70376-L",
                            qty: 15,
                            desc: "11 Inch  Live Edge Teak Riser with Iron Base (19.68x19.68x11.02)   //  Material: Teakwood; Iron    //  CBM: 0.042  //  Packaging: Box Kraft #150 + Protect hat model for Liberte Round Side Table Big H = 10cm (Big) + Plastik Handywrap 150x10x0.02  //  Master Carton: Y , 1  //  ***DROPSHIP PACKAGING REQUIRED***  ******KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-AC-70376-L_001.jpg"
                        },
                        {
                            item: "TT-NTR-OP302-NT",
                            qty: 25,
                            desc: "Open Slat Wooden End Table (11.81x11.81x17.71)   //  Material: Wood    //  CBM: 0.071  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-NTR-OP302-NT_001.jpg"
                        },
                        {
                            item: "TT-OR-NL301",
                            qty: 20,
                            desc: "Natura Life Edge Side Table (19.68x22.83x19.68)   //  Material:     //  CBM: 0.052  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Protect Samping Single Wall + Styrofoam Hapsala Round Mirror (1 set=4pcs) + Single Wall  wide 200 x 180 + Foam Sheet L.120 T.1mm mtr/1 roll 500 m  //  Master Carton: Y , 1  //  ***DROPSHIP PACKAGING REQUIRED***  ******KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-OR-NL301_001.jpg"
                        },
                        {
                            item: "WR-DE103-GR",
                            qty: 25,
                            desc: "Daphnie Rattan Side Chair (22.04x22.83x38.97)   //  Material: Rattan Frame; Wicker 3mm; Costello Color; SR Oatmeal for the cushion    //  CBM: 0.447  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/WR-DE103-GR_001.jpg"
                        }
                    ]
                },
                "JW 2512-11": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-03-27",
                    items: [
                        {
                            item: "AC-70817",
                            qty: 25,
                            desc: "Maples Rattan and Bamboo Antique Basket (21.25x14.96x16.14)   //  Material: Rattan Half Polish; Bamboo; Sendi Peel    //  CBM: 0.124  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Medium paper/kg (m2=0.2 kg)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AC-70817_001.jpg"
                        },
                        {
                            item: "AM-701639-WH",
                            qty: 10,
                            desc: "Rectangular Teak Branch Frame Mirror, 39 Inch H, White 26.18x2.75x39.37 // Fabric Type: N/A, Fabric Code: N/A, Fabric Content: N/A, Fill Material: N/A // Finish Name: White  // Set Up  // CBM: 0.1075 // Number of Shipping Boxes: 1 //  //  // ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-701639-WH_001.jpg"
                        },
                        {
                            item: "CT-70112",
                            qty: 5,
                            desc: "Soren Braided Seagrass Console Table (55.11x15.74x29.92)   //  Material: Seagrass    //  CBM: 0.547  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70112_001.jpg"
                        },
                        {
                            item: "CT-70118-NT",
                            qty: 10,
                            desc: "J1053-1B-PJW  //  ibbed Seagrass Coffee Table, Round, 32 Inch W,  Natural (32x32x17)   //  Material: Seagrass  //  Finish: Natural // Box Craft 200mm,Protect Styrofoam",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70118-NT_001.jpg"
                        },
                        {
                            item: "CT-70611-NT",
                            qty: 10,
                            desc: "Abella Round Woven Banana Leaf Coffee Table, 28 Inch W, Natural 28.15 Inch W x 28.15 Inch D x 14.75”H // Fabric Type: N/A // Finish Name: Natural // Set Up  // CBM: 0.267 // Number of Shipping Boxes: 1 //  //  // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70611-NT_001.jpg"
                        },
                        {
                            item: "JV-ABL401-BD",
                            qty: 35,
                            desc: "Abella Round Coffee Table, 34.25 Inch W, Blonde, (34.25 Inch W x 34.25 Inch D x 16.5 Inch H) // Materials: Banana Small Natural, Mungur Wood // Finish Code: 1-97, Finish Name: Banana Natural & White Patina // CBM: 0.42 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-ABL401-BD_001.jpg"
                        },
                        {
                            item: "JV-CLT503",
                            qty: 8,
                            desc: "Charleston Teak Dining Table, White Patina (76.77x37.40x30.31)   //  Material: TeakWood    //  CBM: 0.371  //  Packaging: Box kraft #200 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-CLT503_001.JPG"
                        },
                        {
                            item: "JV-CR401-BD",
                            qty: 23,
                            desc: "Cypress Cocktail Table, 35.5 Inch W, Blonde, (35.5 Inch W x 35.5 Inch D x 17.75 Inch H) // Materials: Banana Small Natural Lamination, Mungur Wood // Finish Code: 1-143, Finish Name: Banana Natural & Peanut Brown W/O Brush // Partial KD // CBM: 0.51 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-CR401-BD_001.jpg"
                        },
                        {
                            item: "SD-70236",
                            qty: 14,
                            desc: "Bayside Arm Chair With An Argyle Patterned Back (22.04x22.83x38.97)   //  Material: Slimit    //  CBM: 0.411  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L )  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SD-70236_001.jpg"
                        },
                        {
                            item: "ST-70111",
                            qty: 10,
                            desc: "Soren Braided Seagrass Cube Accent Table (19.68x19.68x23.62)   //  Material: Seagrass 3-4 mm    //  CBM: 0.21  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70111_001.jpg"
                        },
                        {
                            item: "ST-70116-NT",
                            qty: 25,
                            desc: "Organic Petrified Wood Top Accent Table, with Hourglass base, 20 Inch H, Natural (12x12x20)   //  Material: Top : Petrified Wood (Cream) Base : Suar Wood (Natural)  //  Finish: Cream-Natural // Box Craft 200mm,Protect Styrofoam",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70116-NT_001.jpg"
                        },
                        {
                            item: "ST-70128-NT",
                            qty: 15,
                            desc: "Seagrass Ribbed Side Table, 16 Inch W,  Natural (16x16x20)   //  Material: Seagrass  //  Finish: Natural // Box Craft 200mm,Protect Styrofoam",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70128-NT_001.jpg"
                        },
                        {
                            item: "SY-MR401-BD",
                            qty: 35,
                            desc: "Marina Abaca Double Bench with Storage, 40.2 Inch W, Blonde, (40.2 Inch W x 14.2 Inch D x 17.7 Inch H) // Materials: Banana Small Natural, Mungur Wood // Finish Code: 1-97, Finish Name: Banana Natural & White Patina // CBM: 0.23 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SY-MR401-BD_001.jpg"
                        },
                        {
                            item: "TT-ST-70659-NT",
                            qty: 45,
                            desc: "Riley Twist Wooden Side Table (11.81x11.81x23.62)   //  Material: Munggur Wood    //  CBM: 0.098  //  Packaging: Box  Kraft #150 + Protect Box Styrofoam PE 2cm (elbow shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-ST-70659-NT_001.jpg"
                        }
                    ]
                },
                "JW 2512-12N": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-04-09",
                    items: [
                        {
                            item: "AB-70804-WH",
                            qty: 15,
                            desc: "Crown Carved Wooden Bowl, 16 Inch W,  White (16x16x6)   //  Material: Mungur  //  Finish: New White Solid // Box Craft 200mm, Protect Styrofoam",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AB-70804-WH_001.jpg"
                        },
                        {
                            item: "AB-70909-NT",
                            qty: 12,
                            desc: "Organic Teak Wood Carved Bowl, 10 Inch H, Natural, (14 Inch W x 14 Inch D x 10 Inch H) //  // Materials: Teak Wood // Finish Code: 39, Finish Name: HO Natural //  // CBM: 0.030625 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AB-70909-NT_001.jpg"
                        },
                        {
                            item: "AC-70817",
                            qty: 25,
                            desc: "Maples Rattan and Bamboo Antique Basket (21.25x14.96x16.14)   //  Material: Rattan Half Polish; Bamboo; Sendi Peel    //  CBM: 0.124  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Medium paper/kg (m2=0.2 kg)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AC-70817_001.jpg"
                        },
                        {
                            item: "CT-70102-NU",
                            qty: 6,
                            desc: "Natura Organic Coffee Table Base (Glass Top Not Included), Natural (39x39x18)   //  Material: Teakwood  //  Finish: Natural HO  // Box Craft 200mm,Protect PE",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70102-NU_001.jpg"
                        },
                        {
                            item: "JV-NHT402-4-WP-L",
                            qty: 16,
                            desc: "New Hampton Coconut Shell Round End Table, White Patina (19.68x19.68x23.22)   //  Material: Wood; Coco Chips    //  CBM: 0.202  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT402-4-WP-L_001.jpg"
                        },
                        {
                            item: "JV-NHT403-WP",
                            qty: 20,
                            desc: "New Hampton Round Cocktail Table, 30.75 Inch W, White Patina, (30.75 Inch W x 30.75 Inch D x 16.25 Inch H) // Materials: Coco With Chip 3x3, Mungur Wood // Finish Code: CN3B - 4, Finish Name: White Patina / White Wash // Set Up  // CBM: 0.35 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT403-WP_001.jpg"
                        },
                        {
                            item: "JV-NHT403-WP-L",
                            qty: 15,
                            desc: "New Hampton Round Cocktail Table (36.61x36.61x18.50)   //  Material: Frame Wood; Plywood; Coco Chips; Wood leg    //  CBM: 0.529  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam PE 2cm (L shape) + Protect Box Styrofoam PE 2cm (elbow shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT403-WP-L_001.jpg"
                        },
                        {
                            item: "JV-NHT701-WP",
                            qty: 30,
                            desc: "New Hampton Cocktail Table (35.43x23.62x16.33)   //  Material: Coconut Shell    //  CBM: 0.315  //  Packaging: Box Kraft #200 + Protect Box Styrofoam PE 2cm (elbow shape) + PW 3mm + Protect Box Styrofoam PE 2cm (L shape) + PW 3mm + Protect Box Styrofoam PE 2cm (elbow shape + stack) + Protect Box Styrofoam PE 2cm (stacked L shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT701-WP_001.jpg"
                        },
                        {
                            item: "OS-70302-NT",
                            qty: 24,
                            desc: "Woven Top Wood Stools, Set Of 2, Medium Brown (16x16x18)   //  Material: Teakwood Legs-Synthetic Polytwist Textured Silk Corn (BT 02041507TX1) // Natural Teak Wood Finish  //  Finish: Natural Teak Wood  // Box Craft 200mm,Protect Styrofoam // Drop shipped packaged",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OS-70302-NT_001.jpg"
                        },
                        {
                            item: "OT-70102-NU",
                            qty: 6,
                            desc: "Natura Root Console Table, Natural (47x20x35)   //  Material: Teakwood  //  Finish: Natural HO  // Box Craft 200mm,Protect PE",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-70102-NU_001.jpg"
                        },
                        {
                            item: "SD-70236",
                            qty: 11,
                            desc: "Bayside Arm Chair With An Argyle Patterned Back (22.04x22.83x38.97)   //  Material: Slimit    //  CBM: 0.411  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L )  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SD-70236_001.jpg"
                        },
                        {
                            item: "ST-70768-BD",
                            qty: 20,
                            desc: "Cypress Accent Table, 14 Inch W, Blonde, (14 Inch W x 14 Inch D x 20 Inch H) // Materials: Banana Small Natural, Mungur Wood // Finish Code: 1-143, Finish Name: Banana Natural & Peanut Brown W/O Brush // Set Up // CBM: 0.1 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70768-BD_001.jpg"
                        },
                        {
                            item: "TT-JV-JT403-SG",
                            qty: 12,
                            desc: "Juliette Coco End Table, Sage Green (15.74x15.74x16.53)   //  Material:     //  CBM: 0.106  //  Packaging: Box Kraft #150 + Box SW Juliette Stool (Small) 40x40x42 + Protect Box Styrofoam PE 2cm (L shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-JV-JT403-SG_001.jpg"
                        },
                        {
                            item: "TT-JV-NHT403-BS",
                            qty: 25,
                            desc: "New Hampton Round Cocktail Table (30.70x30.70x16.14)   //  Material:     //  CBM: 0.354  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam PE 2cm (L shape) + Protect Box Styrofoam PE 2cm (elbow shape) + Styrofoam 100x200x5 cm + Single Wall  wide 200 x 180  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-JV-NHT403-BS_001.jpg"
                        },
                        {
                            item: "TT-ST-70659-NT",
                            qty: 50,
                            desc: "Riley Twist Wooden Side Table (11.81x11.81x23.62)   //  Material: Munggur Wood    //  CBM: 0.098  //  Packaging: Box  Kraft #150 + Protect Box Styrofoam PE 2cm (elbow shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-ST-70659-NT_001.jpg"
                        }
                    ]
                },
                "JW 2512-13N": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-04-13",
                    items: [
                        {
                            item: "AM-70327-WH",
                            qty: 15,
                            desc: "Round Capiz Wide Frame Mirror, 27 Inch W, White 26.77x1.77x26.77 // Fabric Type: N/A // Finish Name: White // Set Up  // CBM: 0.0629 // Number of Shipping Boxes: 1 //  //  // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70327-WH_001.jpg"
                        },
                        {
                            item: "CT-70246-BD",
                            qty: 12,
                            desc: "Daxton Geometric Woven Coffee Table, Blonde (39.25W Inch x 39.25D Inch x 18H Inch) _Materials: Acacia Wood, Plywood, Banana Small Natural (3-4mm) _ Finish Code: 142, Finish Name: Natural Blonde _ Set Up _ CBM: 0.573 _ Number of Shipping Boxes: 1 _ ***DROPSHIP PACKAGING REQUIRED*** _",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70246-BD_001.jpg"
                        },
                        {
                            item: "JV-FR205-BD",
                            qty: 15,
                            desc: "Francis Double Bench, Blonde (56.75W Inch  x 17D Inch  x 22H Inch ) // Fabric Type: Polyester, Fabric Code from Vendor: Mascoto, Fabric Content %: 100% Polyester, Fill Material on Upholstered Items only: Foam // Materials: Banana Natural, Gamelina Wood // Finish Code: 142-143, Finish Name: Natural Blonde - Peanut Brown w/o Brush // Partial KD // CBM: 0.348 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** // ***SOFFA COMPLIANCE REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-FR205-BD_001"
                        },
                        {
                            item: "JV-JT403-BL",
                            qty: 15,
                            desc: "Juliette Coco End Table, Blue, (15.75 Inch W x 15.75 Inch D x 16.5 Inch H) // Materials: Coconut // Finish Code: 135, Finish Name: Nothern Air // Set Up  // CBM: 0.11 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-JT403-BL_001.jpg"
                        },
                        {
                            item: "JV-NHT402-4-WP-L",
                            qty: 14,
                            desc: "New Hampton Coconut Shell Round End Table, White Patina (19.68x19.68x23.22)   //  Material: Wood; Coco Chips    //  CBM: 0.202  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT402-4-WP-L_001.jpg"
                        },
                        {
                            item: "JV-NHT403-WP-L",
                            qty: 10,
                            desc: "J21076RCAC3BMG495PJW  //  New Hampton Round Cocktail Table (36.61x36.61x18.50)   //  Material: Frame Wood; Plywood; Coco Chips; Wood leg    //  CBM: 0.529  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam PE 2cm (L shape) + Protect Box Styrofoam PE 2cm (elbow shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT403-WP-L_001.jpg"
                        },
                        {
                            item: "LM-70086-WW",
                            qty: 8,
                            desc: "Alven Rattan and Seagrass Woven Tapered Pendant Light With Band, 31 InchW, Whitewash (31W Inch x 31D Inch x 21H Inch) _ Materials: Iron, Seagrass,Rattan Core, Goni _ Finish Code: 4-17, Finish Name: White Wash (Weaving) , White (Iron) _ Set Up _ CBM: 0.3401 _ Number of Shipping Boxes: 1 _ ***DROPSHIP PACKAGING REQUIRED*** _ ***UL AND CSA COMPLIANCE REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/LM-70086-WW_001.jpg"
                        },
                        {
                            item: "LM-70197-NT",
                            qty: 8,
                            desc: "Rimba Sprial Raffia Pendant Light, 32.25 InchW, Natural (32.25W Inch x 32.25D Inch x 24.5H Inch) _ Materials: Iron, Rafia _ Finish Code: 1, Finish Name: Natural (Weaving) , Cream (Iron) _ Set Up _ CBM: 0.5420 _ Number of Shipping Boxes: 1 _ ***DROPSHIP PACKAGING REQUIRED*** _ ***UL AND CSA COMPLIANCE REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/LM-70197-NT_001.jpg"
                        },
                        {
                            item: "LM-70420-NT",
                            qty: 8,
                            desc: "Nilo Scallop Rattan Woven 2 Tier Pendant Light, 32 InchW, Natural (32W Inch x 32D Inch x 24.5H Inch) _ Materials: Iron, Rattan Peel, Goni _ Finish Code: 1-17, Finish Name: Natural (Weaving) - White (Iron) _ Set Up _ CBM: 0.5420 _ Number of Shipping Boxes: 1 _ ***DROPSHIP PACKAGING REQUIRED*** _ ***UL AND CSA COMPLIANCE REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/LM-70420-NT_001.jpg"
                        },
                        {
                            item: "LM-70531-NT",
                            qty: 8,
                            desc: "Taren Woven Bambo Dome Pendant Light, 23.75 InchW, Natural (23.75W Inch x 23.75D Inch x 14.5H Inch) _ Materials: Iron, Bamboo, Goni, Natural Rattan _ Finish Code: 1-17, Finish Name: Natural (Weaving) - White (Iron) _ Set Up _ CBM: 0.2802 _ Number of Shipping Boxes: 1 _ ***DROPSHIP PACKAGING REQUIRED*** _ ***UL AND CSA COMPLIANCE REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/LM-70531-NT_001.jpg"
                        },
                        {
                            item: "LM-70642-WH",
                            qty: 8,
                            desc: "Riven Draped Corded Pendant Light, 32 InchW, White (32W Inch x 32D Inch x 39.5H Inch) _ Materials: Iron, Sythetic Leather Rope, Goni _ Finish Code: 17, Finish Name: White (Iron, and Syntetic Leather Rope, Goni) _ Set Up _ CBM: 0.2610 _ Number of Shipping Boxes: 1 _ ***DROPSHIP PACKAGING REQUIRED*** _ ***UL AND CSA COMPLIANCE REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/LM-70642-WH_001.jpg"
                        },
                        {
                            item: "LM-70864-NT",
                            qty: 8,
                            desc: "Lori Raffia Woven 2 Tier Drum Pendant Light, 32.75 InchW, Natural (32.75W Inch x 32.75D Inch x 24.5H Inch) _ Materials: Iron, Rafia, Goni _ Finish Code: 1-17, Finish Name: Natural (Weaving) , Cream (Iron) _ Set Up _ CBM: 0.5420 _ Number of Shipping Boxes: 1 _ ***DROPSHIP PACKAGING REQUIRED*** _ ***UL AND CSA COMPLIANCE REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/LM-70864-NT_001.jpg"
                        },
                        {
                            item: "LM-70975-NT",
                            qty: 8,
                            desc: "Arya Wooden Bead Round Pendant Light, 31 InchW, Natural (31W Inch x 31D Inch x 21H Inch) _ Materials: Iron, Chipwood, Goni _ Finish Code: 1, Finish Name: Natural (Weaving) , Cream (Iron) _ Set Up _ CBM: 0.4283 _ Number of Shipping Boxes: 1 _ ***DROPSHIP PACKAGING REQUIRED*** _ ***UL AND CSA COMPLIANCE REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/LM-70975-NT_001.jpg"
                        },
                        {
                            item: "ST-70883-BD",
                            qty: 20,
                            desc: " Tropical Round Side Table With Storage, Blonde (18W Inch x 18D Inch x 20H Inch) _ Materials: Banana Natural, Gamelina Wood, Gunny Sack _ Finish Code: 142-143, Finish Name: Natural Blonde - Peanut Brown w/o Brush _ Set Up _ CBM: 0.170 Number of Shipping Boxes: 1 _ ***DROPSHIP PACKAGING REQUIRED*** _ ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70883-BD_001.jpg"
                        },
                        {
                            item: "TT-CT-211-BD",
                            qty: 15,
                            desc: "Tropical Coffee Table With Storage, Blonde (48W Inch  x 30D Inch  x 18H Inch ) // Materials: Banana Natural, Gamelina Wood (Base), Teak Wood (Feet), Gunny Sack // Finish Codes & Names: 142 Natural Blonde (Banana Natural), 143 Peanut Brown W/O Brush (Gamelina and Teak Woods), 1 Natural (Gunny Sack), // Partial KD (Feet) // CBM: 0.446 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-211-BD_001.jpg"
                        },
                        {
                            item: "TT-ST-70659-NT",
                            qty: 25,
                            desc: "Riley Twist Wooden Side Table (11.81x11.81x23.62)   //  Material: Munggur Wood    //  CBM: 0.098  //  Packaging: Box  Kraft #150 + Protect Box Styrofoam PE 2cm (elbow shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-ST-70659-NT_001.jpg"
                        },
                        {
                            item: "WR-DE103-NT",
                            qty: 15,
                            desc: "Daphnie Rattan Side Chair, Natural, (23 Inch W x 23 Inch D x 39 Inch H) // Fabric Type: Polyester, Fabric Code from Vendor: SR-10 NATURAL, Fabric Content %: 100% Polyester, Fill Material on Upholstered Items only: Foam // Materials: Rattan Half Polish - Slimit Grey Open Weave // Finish Code: 1, Finish Name: Natural // Set Up // CBM: 0.447 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***SOFFA COMPLIANCE REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/WR-DE103-NT_001.jpg"
                        }
                    ]
                },
                "JW 2512-14N": {
                    Vendor: "V58 Kharisma Rotan Mandiri",
                    ecrd: "2026-03-06",
                    items: [
                        {
                            item: "CS-58765-OG",
                            qty: 38,
                            desc: "Arbor Rattan Abstract Leaf Counterstool, Olive Green (20W Inch x 22.5D Inch x 37H Inch) _ Fabric Type: Cotton, Fabric Code from Vendor: CTN01, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam _ Materials: Rattan Semi Pole, Rattan Core, Plywood _ Finish Code: AG, Finish Name: Artichoke Green _ Set Up _ CBM: 0.2198 _ Number of Shipping Boxes: 1 _ ***SOFFA COMPLIANCE REQUIRED*** _",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CS-58765-OG_001.jpg"
                        },
                        {
                            item: "CS-58765-OW",
                            qty: 38,
                            desc: "Arbor Rattan Abstract Leaf Counterstool, Off-White (20W Inch x 22.5D Inch x 37H Inch) _ Fabric Type: Cotton, Fabric Code from Vendor: CTN01, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam _ Materials: Rattan Semi Pole, Rattan Core, Plywood _ Finish Code: WS, Finish Name: White Snowbound _ Set Up _ CBM: 0.2198 _ Number of Shipping Boxes: 1 _ ***SOFFA COMPLIANCE REQUIRED*** _",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CS-58765-OW_001.jpg"
                        },
                        {
                            item: "CS-58765-SB",
                            qty: 38,
                            desc: "Arbor Rattan Abstract Leaf Counterstool, Slate Blue (20W Inch x 22.5D Inch x 37H Inch) _ Fabric Type: Cotton, Fabric Code from Vendor: CTN01, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam _ Materials: Rattan Semi Pole, Rattan Core, Plywood _ Finish Code: MB, Finish Name: Moody Blue _ Set Up _ CBM: 0.2198 _ Number of Shipping Boxes: 1 _ ***SOFFA COMPLIANCE REQUIRED*** _",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CS-58765-SB_001.jpg"
                        },
                        {
                            item: "DC2-58159-OG",
                            qty: 38,
                            desc: "Arbor Rattan Abstract Leaf Dining Chair, Set of 2, Olive Green (19.25W Inch x 23.25D Inch x 35H Inch) _ Fabric Type: Cotton, Fabric Code from Vendor: CTN01, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam _ Materials: Rattan Semi Pole, Rattan Core, Plywood _ Finish Code: AG, Finish Name: Artichoke Green _ Set Up _ CBM: 0.1901 _ Number of Shipping Boxes: 1 _ ***SOFFA COMPLIANCE REQUIRED*** _",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC2-58159-OG_001.jpg"
                        },
                        {
                            item: "DC2-58159-OW",
                            qty: 38,
                            desc: "Arbor Rattan Abstract Leaf Dining Chair, Set of 2, Off-White (19.25W Inch x 23.25D Inch x 35H Inch) _ Fabric Type: Cotton, Fabric Code from Vendor: CTN01, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam _ Materials: Rattan Semi Pole, Rattan Core, Plywood _ Finish Code: WS, Finish Name: White Snowbound _ Set Up _ CBM: 0.1901 _ Number of Shipping Boxes: 1 _ ***SOFFA COMPLIANCE REQUIRED*** /",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC2-58159-OW_001.jpg"
                        },
                        {
                            item: "DC2-58159-SB",
                            qty: 38,
                            desc: "Arbor Rattan Abstract Leaf Dining Chair, Set of 2, Slate Blue (19.25W Inch x 23.25D Inch x 35H Inch) _ Fabric Type: Cotton, Fabric Code from Vendor: CTN01, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam _ Materials: Rattan Semi Pole, Rattan Core, Plywood _ Finish Code: MB, Finish Name: Moody Blue _ Set Up _ CBM: 0.1901 _ Number of Shipping Boxes: 1 _ ***SOFFA COMPLIANCE REQUIRED*** _",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC2-58159-SB_001.jpg"
                        },
                        {
                            item: "OT-58990-AN",
                            qty: 12,
                            desc: "Millie Rattan Woven Console Table, Antique Natural (55W Inch x 16.5D Inch x 30H Inch) _ Materials: Rattan Pole, Rattan Pitrit, Teakwood _ Finish Code: LGB, Finish Name: Light Grey Bistro _ Set Up _ CBM: 0.45625 _ Number of Shipping Boxes: N/A _",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-58990-AN_001.jpg"
                        }
                    ]
                },

                "JW 2512-15N": {
                    Vendor: "V58 Kharisma Rotan Mandiri",
                    ecrd: "2026-02-13",
                    items: [
                        {
                            item: "BC-58101-BK",
                            qty: 15,
                            desc: "Wren Rattan Barcart, Black 27x17x32..Material/Color: Rattan semi poles/Golden Black..CBM: 0.325..Packing: Box kraft 200 + Protection..",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/BC-58101-BK_001.jpg"
                        },
                        {
                            item: "BC-58101-BL",
                            qty: 15,
                            desc: "Wren Rattan Bar Cart, Blue/Natural, (27 Inch W x 17 Inch D x 32 Inch H) // Materials: Nat Rattan, Close Webbing, Plywood // Finish Code: BL, Finish Name: Blue // Set Up  // CBM: 0.313 // Number of Shipping Boxes: 1 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/BC-58101-BL_001.jpg"
                        },
                        {
                            item: "BC-58101-WH",
                            qty: 15,
                            desc: "Wren Rattan Bar Cart, White/Natural, (27 Inch W x 17 Inch D x 32 Inch H) // Materials: Nat Rattan, Close Webbing, Plywood // Finish Code: WH, Finish Name: White Snowbound // Set Up  // CBM: 0.313 // Number of Shipping Boxes: 1 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/BC-58101-WH_001.jpg"
                        },
                        {
                            item: "BN-58691-BL",
                            qty: 20,
                            desc: "Winston Rattan Stool With Woven Seat, Blue/Natural (21.25W Inch  x 16.5D Inch  x 19.25H Inch ) //  // Materials: Rattan Pole, Rattan Pitrit // Finish Code: N-BL, Finish Name: Blue Grey - Natural // Set Up  // CBM: 0.101 // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/BN-58691-BL_001.JPG"
                        },
                        {
                            item: "CS-5834-AN",
                            qty: 25,
                            desc: "Winston II Rattan Counterstool, 37 Inch H, Antique Natural, (21.25 Inch W x 20.75 Inch D x 37 Inch H) // Fabric Type: Cotton, Fabric Code from Vendor: CTN, Fabric Content %: Cotton 100%, Fill Material on Upholstered Items only: Polyurethane Foam // Finish Code: GB, Finish Name: GREY BISTRO // Set Up  // CBM: 0.2534 // Number of Shipping Boxes: 1 // Container Packed Via: Bulk Shipped ***Must Include Shipping Materials And Shipping Cartons In Container*** // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CS-5834-AN_001.jpg"
                        },
                        {
                            item: "CS-5834-BL",
                            qty: 25,
                            desc: "Winston II Rattan Counterstool, 37 Inch H, Blue, (21.25 Inch W x 20.75 Inch D x 37 Inch H) // Fabric Type: Cotton, Fabric Code from Vendor: CTN, Fabric Content %: Cotton 100%, Fill Material on Upholstered Items only: Polyurethane Foam // Finish Code: BG, Finish Name: BLUE GREY // Set Up  // CBM: 0.2534 // Number of Shipping Boxes: 1 // Container Packed Via: Bulk Shipped ***Must Include Shipping Materials And Shipping Cartons In Container*** // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CS-5834-BL_001.jpg"
                        },
                        {
                            item: "CS-5834-NV",
                            qty: 25,
                            desc: "Winston II Rattan Counterstool, 37 Inch H, Navy, (21.25 Inch W x 20.75 Inch D x 37 Inch H) // Fabric Type: Cotton, Fabric Code from Vendor: CTN, Fabric Content %: Cotton 100%, Fill Material on Upholstered Items only: Polyurethane Foam // Finish Code: NV, Finish Name: NAVY BLUE // Set Up  // CBM: 0.2534 // Number of Shipping Boxes: 1 // Container Packed Via: Bulk Shipped ***Must Include Shipping Materials And Shipping Cartons In Container*** // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CS-5834-NV_001.jpg"
                        },
                        {
                            item: "DC-5801-OR",
                            qty: 25,
                            desc: "Winston II Rattan Dining Chair, Set Of 2, 35 Inch H, Coral 21.25 x 22.50 x 35, // Fabric Type: Cotton, Fabric Code: CTNWC, Fabric Content: 100% Cotton, Fill Material: Polyurethane Foam // Finish Code: COR, Finish Name: CORAL // Set Up  // CBM: 0.324 // Number of Shipping Boxes: 1 //  // Container Packed Via: Bulk Packed ***Boxes and Packaging Included*** // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC-5801-OR_001.jpg"
                        },
                        {
                            item: "DC-58995-AN",
                            qty: 20,
                            desc: "Eloise Rattan Weave Rounded Arm Chair, Antique Natural (24W Inch  x 24D Inch  x 33H Inch ) // Fabric Type: Cotton, Fabric Code from Vendor: CTN01, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam // Materials: Rattan Pole, Rattan Pitrit // Finish Code: LGB, Finish Name: Light Grey Wash // Set Up  // CBM: 0.303 // ***SOFFA COMPLIANCE REQUIRED*** // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/core/media/media.nl?id=18184705&c=6694454&h=4wyfSSOXUnZ4O-2ifM3ugOdq9pLFYx8UnyU6HKXpM2WnygvW&expurl=T"
                        },
                        {
                            item: "OC-5822-BR",
                            qty: 25,
                            desc: "Winston II Rattan Arm Chair, 39 Inch H, Antique Brown, (24 Inch W x 25.5 Inch D x 39.25 Inch H) // Fabric Type: Cotton, Fabric Code: CTNWC, Fabric Content: 100% Cotton, Fill Material: Polyurethane Foam // Finish Code: BR, Finish Name: US ANTIQUE // Set Up  // CBM: 0.253 // Number of Shipping Boxes: 1 //  // Container Packed Via: Bulk Packed ***Boxes and Packaging Included*** // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OC-5822-BR_001.jpg"
                        },
                        {
                            item: "SB-58106-WH",
                            qty: 25,
                            desc: "Maples Counterstool with Upholstered Seat, Off White/Natural (20 Inch  Inch W x 21.75 Inch  Inch D x 37.5 Inch  Inch H) // Fabric Type: Cotton, Fabric Code from Vendor: CTN05, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam // Materials: Rattan Semi Pole, Rattan Peel // Finish Code: WHS, Finish Name: White Snowbound // Set Up  // CBM: 0.2645 // ***SOFFA COMPLIANCE REQUIRED*** // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-58106-WH_001.jpg"
                        },
                        {
                            item: "ST-58395-BL",
                            qty: 15,
                            desc: "Wren Rattan Oval Side Table, Blue/Natural, (23 Inch W x 15 Inch D x 23 Inch H) // Materials: Nat Rattan, Close Webbing, Plywood // Finish Code: BL, Finish Name: Blue // Set Up  // CBM: 0.1746 // Number of Shipping Boxes: 1 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-58395-BL_001.jpg"
                        },
                        {
                            item: "ST-58395-WH",
                            qty: 15,
                            desc: "Wren Rattan Oval Side Table, White/Natural, (23 Inch W x 15 Inch D x 23 Inch H) // Materials: Nat Rattan, Close Webbing, Plywood // Finish Code: WH, Finish Name: White Snowbound // Set Up  // CBM: 0.1746 // Number of Shipping Boxes: 1 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-58395-WH_001.jpg"
                        }
                    ]
                },
                "JW 2512-16N": {
                    Vendor: "V58 Kharisma Rotan Mandiri",
                    ecrd: "2026-02-20",
                    items: [
                        {
                            item: "CS-58207-NT",
                            qty: 20,
                            desc: "Dutch Counterstool With Upholstered Seat, Antique Natural, (17 Inch W x 22 Inch D x 38.25 Inch H) // Fabric Type: Cotton, Fabric Code from Vendor: WH, Fabric Content %: 1, Fill Material on Upholstered Items only: foam, fibre // Materials: Solid Wood Mindi, Natural Rattan Peel // Finish Code: GB, Finish Name: Grey Bistro // Set Up // CBM: 0.252 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***SOFFA COMPLIANCE REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CS-58207-NT_001.jpg"
                        },
                        {
                            item: "CS-58298-NT",
                            qty: 25,
                            desc: "Sahara Rattan Weave Counterstool With Wood Legs, Natural (20.5W Inch x 22D Inch x 38.5H Inch ) // Fabric Type: Cotton, Fabric Code from Vendor: CTN01, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam // Materials: Teakwood, Rattan Pole, Rattan Pitrit // Finish Code: NT, Finish Name: Natural (Rattan and Wood) // Set Up // CBM: 0.264 // ***SOFFA COMPLIANCE REQUIRED*** // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CS-58298-NT_001.jpg"
                        },
                        {
                            item: "DC-5801-RTGR",
                            qty: 20,
                            desc: "Winston II Rattan Dining Chair, Set Of 2 - (21.25 Inch W x 22.50 Inch D x 35 Inch H) // Material: Frame : Rattan Pole, Decore into Rattan Core // Finish: Vintage Grey // ***ISTA 3A Packaging Required***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC-5801-RTGR_001.jpg"
                        },
                        {
                            item: "DC-5801-RTNT",
                            qty: 46,
                            desc: "Winston II Rattan Dining Chair, Set Of 2 - (21.25 Inch W x 22.50 Inch D x 35 Inch H) // Material: Frame : Rattan Pole, Decore into Rattan Core // Finish: Grey Bistro",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC-5801-RTNT_001.jpg"
                        },
                        {
                            item: "DC-58099-NT",
                            qty: 25,
                            desc: "Waverly Rattan Wing Back Dining Chairs With Wood Legs, Set of 2, Natural (21.25W Inch x 22.5D Inch x 33.5H Inch ) // Fabric Type: Cotton, Fabric Code from Vendor: CTN01, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam // Materials: Teakwood, Rattan Pole, Rattan Pitrit // Finish Code: NT, Finish Name: Natural (Rattan and Wood) // Set Up // CBM: 0.304 // ***SOFFA COMPLIANCE REQUIRED*** // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC-58099-NT_001.jpg"
                        },
                        {
                            item: "DC-58225-OG",
                            qty: 25,
                            desc: "Hampton Chippendale Rattan Barrel Chair, 33.5 Inch H, Olive Green (23.5W Inch x 24D Inch x 33.5H Inch ) // Fabric Type: Cotton, Fabric Code from Vendor: CTN03, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam // Materials: Rattan Semi pole, Rattan Core // Finish Code: AG, Finish Name: Artichoke Green // Set Up // CBM: 0.2703 // ***SOFFA COMPLIANCE REQUIRED*** // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC-58225-OG_001.jpg"
                        },
                        {
                            item: "DC-58225-SB",
                            qty: 25,
                            desc: "Hampton Chippendale Rattan Barrel Chair, 33.5 Inch H, Slate Blue (23.5W Inch x 24D Inch x 33.5H Inch ) // Fabric Type: Cotton, Fabric Code from Vendor: CTN02, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam // Materials: Rattan Semi pole, Rattan Core // Finish Code: MB, Finish Name: Moody Blue // Set Up // CBM: 0.2703 // ***SOFFA COMPLIANCE REQUIRED*** // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC-58225-SB_001.jpg"
                        },
                        {
                            item: "WR-WS102-GR",
                            qty: 25,
                            desc: "Winston Rattan Dining Side Chair - Vintage Grey (min qty 2pcs)..(22x23.6x41.3)..Material/Color : Rattan/Vintage grey..CBM : 0.253..Packing : Box K#200+Styrofoam Protection 2cm (2pcs/case)/Dropship Approved",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/WR-WS102-GR_001.jpg"
                        }
                    ]
                },
                "JW 2601-07N": {
                    Vendor: "V63 Dcofrance & Edclaire",
                    ecrd: "2026-05-23",
                    items: [
                        {
                            item: "CB-63521-WH",
                            qty: 4,
                            desc: "Cabinet with Rattan Inset (59.06x19.69x86.5) // Material: Bayur Wood/Wicker // CBM: 1.97 // Packaging:// ***ANTI TIP KIT REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CB-63521-WH_001.jpg"
                        },
                        {
                            item: "CB-63707-WH",
                            qty: 4,
                            desc: "Seraphine 2 Door Cabinet With Rattan Medallion Motif, 55.25 InchW, White (55.25W Inch x 19.75D Inch x 80.75H Inch) _ Materials: Bayur wood/MDF/Plywood/Rattan Square/Doorcore _ Finish Code: TBA, Finish Name: TBA _ Set Up _ CBM: 1.721 _ Number of Shipping Boxes: 1 _",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CB-63707-WH_001.jpg"
                        },
                        {
                            item: "SB-63105-WH",
                            qty: 4,
                            desc: "Julia Sideboard With Circular Motif, White/Natural (61W Inch x 19.75D Inch x 35.5H Inch) _ Materials: Bayur wood/MDF/Plywood/Veneer Mindi wood/Doorcore _ Finish Code: TBA, Finish Name: TBA _ Set Up _ CBM: 0.669 _ Number of Shipping Boxes: 1 _",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63105-WH_001.jpg"
                        },
                        {
                            item: "SB-63425-WH",
                            qty: 10,
                            desc: "Lillian 4 Door Sideboard With Woven Rattan Doors, 62 Inch W, White/Natural, (62 Inch W x 15.75 Inch D x 36.25 Inch H) // Materials: Bayur Wood, MDF, Plywood, Veneer Mindi Wood, Rattan, Doorcore // Finish Code: X-992 (Wood C-355 / Rattan Rapat RA-432), Finish Name: White Painted / Rattan Natural // Set Up // CBM: 0.735 // Number of Shipping Boxes: 1 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63425-WH_001.jpg"
                        },
                        {
                            item: "SB-63445-WH",
                            qty: 4,
                            desc: "Seraphine 4 Door Sideboard With Rattan Medallion Motif, 86.75 InchW, White (86.75W Inch x 17.75D Inch x 35.5H Inch) _ Materials: Bayur wood/MDF/Plywood/Rattan Square/Doorcore _ Finish Code: TBA, Finish Name: TBA _ Set Up _ CBM: 1.1065 _ Number of Shipping Boxes: 1 _",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63445-WH_001.jpg"
                        },
                        {
                            item: "SB-63513-BR",
                            qty: 8,
                            desc: "Claude Bow Front Sideboard, Large, 83 Inch W, Brown 82.68x19.68x35.43, N/A // Fabric Type: N/A, Fabric Code: N/A, Fabric Content: N/A, Fill Material: N/A // Finish Code: A-123 (wood A-123), Finish Name: Brown // Set Up // CBM: 1.17 // Number of Shipping Boxes: 1 // // //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63513-BR_001.jpg"
                        },
                        {
                            item: "SB-63513-SM",
                            qty: 8,
                            desc: "Claude Bow Front Sideboard, Small, 61 Inch W, White 60.63x19.68x35.43, N/A // Fabric Type: N/A, Fabric Code: N/A, Fabric Content: N/A, Fill Material: N/A // Finish Code: X-781 ( body C-293 / Top A-195), Finish Name: White // Set Up // CBM: 0.87 // Number of Shipping Boxes: 1 // // //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63513-SM_001.jpg"
                        },
                        {
                            item: "SB-63514",
                            qty: 6,
                            desc: "Camden Tall 4 Door Cabinet with Rattan Inset (51.19x11.82x44.89) // Material: Bayur/Plywood veneered Mindi/MDF Wicker Cane X-714 (ext. kayu C-293 / Rattan RA-190 / Int. dp CA Baru) // CBM: 0.567 // Packaging: B0-JF (Box Kraft 200 + Protect) // Master Carton: 1// ***ANTI TIP KIT REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63514_001.jpg"
                        },
                        {
                            item: "SB-635142-WH",
                            qty: 7,
                            desc: "Atlantis 4 Door Sideboard with Weave Inset Doors, 87 Inch W, White 86.62x19.68x33.47, N/A // Fabric Type: N/A, Fabric Code: N/A, Fabric Content: N/A, Fill Material: N/A // Finish Code: X-995 ( Wood C-355 ( C-292 more glossy) / Rattan inset RA-432 ( RA-190 more white wash), Finish Name: White / Weave // Set Up // CBM: 1.15 // Number of Shipping Boxes: 1 // // //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-635142-WH_001.jpg"
                        },
                        {
                            item: "SB-63899-BR",
                            qty: 8,
                            desc: "Edmond 2 Door Oval Sideboard With Woven Rattan Doors, 61 Inch W, Brown, (61 Inch W x 15.75 Inch D x 35.5 Inch H) // Materials: Bayur Wood, MDF, Plywood, Veneer Mindi Wood, Rattan, Doorcore // Finish Code: AA-117 (Wood A-151 / Rattan RA-190), Finish Name: Wood Natural / Rattan Natural // Set Up // CBM: 0.711 // Number of Shipping Boxes: 1 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-63899-BR_001.jpg"
                        }
                    ]
                },
                "JW 2601-08N": {
                    Vendor: "V69 Dollar Furniture",
                    ecrd: "2026-05-08",
                    items: [
                        {
                            item: "DF-PR107",
                            qty: 115,
                            desc: "Promenade Antique Counter Stool (13.78x13.78x24.02)   //  Material: Mindi Wood  //  CBM: 0.1126  //  Packaging: Carton box K#200+Protcetion / Protection Styrofoam 2cm     //  Master Carton: N - 1 pcs/box",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DF-PR107_001.jpg"
                        },
                        {
                            item: "DF-PR304-BL",
                            qty: 25,
                            desc: "Promenade Console with Shelf (47.24x13.78x31.5) // Material: Mindi Wood // Color: Black with Satin Finish - Not Glossy // CBM: 0.1758 // Packaging: Carton box K#200+Protcetion / Protection Styrofoam 2cm + Protection with inner carton box // Master Carton: Y - 1 pcs/box ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DF-PR304-BL_001.jpg"
                        },
                        {
                            item: "DF-PR304-BR",
                            qty: 50,
                            desc: "Promenade Console with Shelf, 47.25 Inch W, KD, Brown, (47.25 Inch W x 13.75 Inch D x 31.5 Inch H) // // Materials: Mindi Wood // Finish Code: BRVI, Finish Name: Brown Vintage // KD // CBM: 0.2092 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DF-PR304-BR_001.jpg"
                        },
                        {
                            item: "DF-PR306",
                            qty: 4,
                            desc: "Promenade Three Door Shutter Sideboard (47.24x15.75x39.37)   //  Material: Mindi Wood  //  Color: Old Look  //  CBM: 0.6144  //  Packaging: Carton box K#200+Protcetion / Protection Styrofoam 2cm      //  Master Carton: N - 1 pcs/box",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DF-PR306_001.jpg"
                        },
                        {
                            item: "DF-PR512",
                            qty: 15,
                            desc: "Promenade Tall Bookcase, 20x14x71 (19.69x13.78x70.87)   //  Material: Mindi Wood  //  Color: Old Look  //  CBM: 0.4271  //  Packaging: Carton box K#200+Protcetion / Protection Styrofoam 2cm      //  Master Carton: N - 1 pcs/box",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DF-PR512_001.jpg"
                        },
                        {
                            item: "ST-69198-BL",
                            qty: 25,
                            desc: "Adair Bobbin Leg Side Table (22.44x22.44x24.41) // Material: Mindi Wood // Color: Black with Satin Finish - Not Glossy // CBM: 0.3376 // Packaging: Carton box K#200+Protcetion - Inch Drop Ship PAckaging Inch required / Protection Styrofoam 2cm + Protection with inner carton box",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-69198-BL_001.jpg"
                        },
                        {
                            item: "ST-69299-LN",
                            qty: 35,
                            desc: "Adair Bobbin Leg Side Table, 13.75 Inch W, Light Natural, (13.75 Inch W x 13.75 Inch D x 19.75 Inch H) // // Materials: Top : MDF Plywood Legs : Mindi Wood // Finish Code: LN, Finish Name: Light Natural // Set Up // CBM: 0.1215 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-69299-LN_001.jpg"
                        },
                        {
                            item: "TT-DF-PR515",
                            qty: 85,
                            desc: "Promenade Round Side Table (19.69x19.69x24.8)   //  Material:   //  CBM: 0.1841  //  Packaging: Carton box K#200+Protcetion / Protection Styrofoam 2cm    + Protection with inner carton box   //  Master Carton: Y - 1 pcs/box ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-DF-PR515_001.jpg"
                        }
                    ]
                },
                "JW 2601-09N": {
                    Vendor: "V65 CV. Living Creation Furniture (PT. Indigo Mandiri Sejahtera)",
                    ecrd: "2026-04-07",
                    items: [
                        {
                            item: "BK-65434-AN",
                            qty: 30,
                            desc: "Palma Rattan Wrapped Bookshelf, Antique Natural (33.75W Inch  x 17D Inch  x 75H Inch ) // Materials: Mahogany wood, Rattan peel, Plywood // Finish Code: NAT-TIGER, Finish Name: Tiger natural // Set Up // CBM: 0.74 // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/BK-65434-AN_001.jpg"
                        },
                        {
                            item: "DC-65103-NT",
                            qty: 30,
                            desc: "Ellison Rattan Square Back Dining Chair, Natural (17.75x21.75x34) // Material: MAHOGANY WOOD, Natural Peel Rattan, Foam // Finish: Lacquer; NATURAL // CBM: 0.222 // Packaging: CORRUGATED PAPER // MOQ: 20 // Cushion Fastens Underneath Chair",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC-65103-NT_001.jpg"
                        },
                        {
                            item: "OT-65414-AN",
                            qty: 30,
                            desc: "Palma Rattan Wrapped Console Table With Shelves, Antique Natural (55W Inch  x 16D Inch  x 30H Inch ) // Materials: Mahogany wood, Rattan peel, Plywood // Finish Code: NAT-TIGER, Finish Name: Tiger natural // Set Up // CBM: 0.44 // ***Single Wall Only Without Shipping Cartons*** ",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-65414-AN_001.jpg"
                        },
                        {
                            item: "ST-65104-L-NT",
                            qty: 30,
                            desc: "Ellison Round Rattan Side Table With Shelf, Natural (22W Inch  x 22D Inch  x 22H Inch ) // Materials: MAHOGANY WOOD, RATTAN PEEL // Finish Code: NAT-PEEL, Finish Name: NATURAL // Set Up // CBM: 0.281 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-65104-L-NT_001.jpg"
                        },
                        {
                            item: "ST-65424-AN",
                            qty: 66,
                            desc: "Palma Rectangular Rattan Wrapped Side Table With Shelves, Antique Natural (24W Inch  x 15.75D Inch  x 24.5H Inch ) // Materials: Mahogany wood, Rattan peel, Plywood // Finish Code: NAT-TIGER, Finish Name: Tiger natural // Set Up // CBM: 0.15 // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-65424-AN_001.jpg"
                        }
                    ]
                },
                "JW 2601-10N1": {
                    Vendor: "V65 CV. Living Creation Furniture (PT. Indigo Mandiri Sejahtera)",
                    ecrd: "2026-04-07",
                    items: [
                        {
                            item: "BN-65444-AN",
                            qty: 30,
                            desc: "Palma Rattan Wrapped Bench With Curved Legs And Shelf, Antique Natural (54.75W Inch  x 17D Inch  x 18.5H Inch ) // Materials: Mahogany wood, Rattan peel, Plywood // Finish Code: NAT-TIGER, Finish Name: Tiger natural // Set Up // CBM: 0.26 // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/BN-65444-AN_001.jpg"
                        },
                        {
                            item: "CS-65102-NT-V2",
                            qty: 25,
                            desc: "Ellison Rattan Square Back Counter Stool, 38 Inch H, Natural 16.9X 20.9X 37.8 // Fabric Type: Polyester, Fabric Code: SR10 SNOW WHITE, Fabric Content: 100% POLYESTER, Fill Material: Polyurethane Foam // Finish Code: ; Finish Name: // Set Up // CBM: 0.2 // Number of Shipping Boxes: 1 // // Container Packed Via: Bulk Packed // ***Must Include Shipping Materials And Shipping Cartons In Container*** // Cushion Fastens Underneath Chair //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CS-65102-NT-V2_001.jpg"
                        },
                        {
                            item: "CT-65404-AN",
                            qty: 30,
                            desc: "Palma Rectangular Rattan Wrapped Coffee Table With Curved Legs And Shelf, Antique Natural (44.5W Inch  x 27.5D Inch  x 17.75H Inch ) // Materials: Mahogany wood, Rattan peel, Plywood // Finish Code: NAT-TIGER, Finish Name: Tiger natural // Set Up // CBM: 0.36 // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-65404-AN_001.jpg"
                        },
                        {
                            item: "OC-65202-NT-V2",
                            qty: 15,
                            desc: "Atherton 2.0 Wide Weave Water Hyacinth Occasional Chair With Raised Front Chair Apron, Natural (32.5x30.5x32.5) // Material: Rattan, Water Hyacinth, Fabric // Finish: Lacquer; NATURAL // CBM: 0.501 // Packaging: CORRUGATED PAPER // MOQ: 20",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OC-65202-NT-V2_001.jpg"
                        }
                    ]
                },
                "JW 2601-10N2": {
                    Vendor: "V76 CV. Arzati Rattan",
                    ecrd: "2026-04-08",
                    items: [
                        {
                            item: "AC-76887-NT",
                            qty: 25,
                            desc: "Sabrina Baskets, 2 Piece Set, 29 Inch H & 24 Inch H, Natural, (16 Inch W x 10 Inch D x 29 Inch H & 12 Inch W x 7 Inch D x 24 Inch H) // Materials: Kubu Grey // Finish Code: AR/KG-01, Finish Name: Natural // Set Up // CBM: 0.08 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AC-76887-NT_001.jpg"
                        },
                        {
                            item: "CS-76100-NT",
                            qty: 25,
                            desc: "Natural Rattan Counter Stool, Natural, 17 x19,75 x38,5 // Fabric Type: Canvas, Fabric Code from Vendor: CNS, Fabric Content %: 1, Fill Material on Upholstered Items only: // Finish Code: NTL, Finish Name: Natural // Set Up // CBM: 0.2666 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CS-76100-NT_001.jpg"
                        },
                        {
                            item: "OT-76280-NT",
                            qty: 20,
                            desc: "Nessa Rattan Console Table with Handles and Shelf, 40 Inch Inch W, Natural, (40 Inch Inch Wx 13 Inch Inch D x 36 Inch Inch H) // // Materials: Rattan Poles, Rattan Core, Webbing, Plywood // Finish Code: AR/WBW-01, Finish Name: Black Wash // Set Up // CBM: 0.43 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-76280-NT_001.jpg"
                        },
                        {
                            item: "OT-76776-NT",
                            qty: 10,
                            desc: "Sabrina Basket Console Table With Storage, 55 Inch W, Natural, (55 Inch W x 16 Inch D x 30 Inch H) // Materials: Mahogany Wood, Kubu Grey // Finish Code: AR/KG-01, Finish Name: Natural // Set Up // CBM: 0.5145 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ANTI TIP KIT REQUIRED***//",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-76776-NT_001.jpg"
                        },
                        {
                            item: "ST-76360-NT",
                            qty: 25,
                            desc: "Nessa Rattan Side Table with Handles and Shelf, 26 Inch  Inch W, Natural, (26 Inch  Inch Wx 15 Inch  Inch D x 30 Inch  Inch H) //  // Materials: Rattan Poles, Rattan Core, Webbing, Plywood // Finish Code: AR/WBW-01, Finish Name: Black Wash // Set Up  // CBM: 0.27 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-76360-NT_001.jpg"
                        }
                    ]
                },
                "JW 2601-11N": {
                    Vendor: "V75 Pijar Sukma",
                    ecrd: "2026-05-10",
                    items: [
                        {
                            item: "BK-75605-LN",
                            qty: 20,
                            desc: "Elora Bookcase With Turned Legs, Light Natural (32W Inch  x 16D Inch  x 73H Inch ) // // Materials: Bayur Wood / MDF P2 / Mindi Wood Veneer // Finish Code: NAT01+G.White, Finish Name: Natural-Natural // KD // CBM: 0.221 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/BK-75605-LN_001.jpg"
                        },
                        {
                            item: "CT-75255-LN",
                            qty: 21,
                            desc: "Elora Round Coffee Table With Inlaid Herringbone Tabletop and Turned Legs, Light Natural (35W Inch  x 35D Inch  x 18H Inch ) // // Materials: Bayur Wood / MDF P2 / Mindi Wood Veneer Parquetry // Finish Code: NAT01+G.White, Finish Name: Natural-Natural // Set Up // CBM: 0.46 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** ",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-75255-LN_001.jpg"
                        },
                        {
                            item: "DR-75550-PB",
                            qty: 8,
                            desc: "Ashford Large 3 Drawer Dresser, Powder Blue (45W Inch  x 19.75D Inch  x 36.6H Inch ) // // Materials: Bayur Wood / MDF P2 / Mindi Wood Veneer // Finish Code: B-BM07/NAT01+G.WHITE , Finish Name: Top Natural - Body Powder Blue // Set Up // CBM: 0.665 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** // ***STURDY ACT TESTING REQUIRED***// ANTI TIP KIT REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DR-75550-PB_001.jpg"
                        },
                        {
                            item: "OT-75100-BK",
                            qty: 25,
                            desc: "Hermine Console Table w/ Drawer and Cane Shelf, 23.75 Inch W, Black/Natural, (23.75 Inch W x 10 Inch D x 31.5 Inch H) // Finish Code: NAT11-Raw Bamboo, Finish Name: Black-Natural // KD // CBM: 0.068 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** // ***ANTI TIP KIT REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75100-BK_001.jpg"
                        },
                        {
                            item: "OT-75100-NT",
                            qty: 120,
                            desc: "Hermine Console Table w/ Drawer and Cane Shelf, 23.75 Inch W, Brown/Natural, (23.75 Inch W x 10 Inch D x 31.5 Inch H) // // Finish Code: NAT02(WB PG4)-Raw Bamboo, Finish Name: Natural-Natural // KD // CBM: 0.068 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** // ***ANTI TIP KIT REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75100-NT_001.jpg"
                        },
                        {
                            item: "OT-75100-NV",
                            qty: 60,
                            desc: "Hermine / HRN26 // Lenora Console Table w/ Drawer and Cane Shelf, Navy (23.75W Inch  x 10D Inch  x 31.5H Inch ) // // Materials: Bayur Wood / MDF P2 / Mindi Wood Veneer / Bamboo // Finish Code: BM04-Raw Bamboo, Finish Name: FULL NAVY COLOR with Raw Bamboo // KD // CBM: 0.068 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75100-NV_001.jpg"
                        },
                        {
                            item: "OT-75100-PB",
                            qty: 30,
                            desc: "Hermine / HRN26 // Lenora Console Table w/ Drawer and Cane Shelf, Powder Blue (23.75W Inch  x 10D Inch  x 31.5H Inch ) // // Materials: Bayur Wood / MDF P2 / Bamboo // Finish Code: BM07-Raw Bamboo, Finish Name: Full Paint Powder Blue with Raw Bamboo // KD // CBM: 0.068 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75100-PB_001.jpg"
                        },
                        {
                            item: "OT-75225-NT",
                            qty: 25,
                            desc: "Hermine Demilune Console Table w Cane Shelf, 35.5 Inch W, Brown/Natural, (35.5 Inch W x 13.75 Inch D x 31.5 Inch ) // Finish Code: NAT02(WB PG4)-Raw Bamboo, Finish Name: Natural-Natural // KD // CBM: 0.087 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** // ***ANTI TIP KIT REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75225-NT_001.jpg"
                        },
                        {
                            item: "OT-75333-NT",
                            qty: 60,
                            desc: "Sarlat / SRT5 // Marnie Console Table With Drawer, Natural (23.75W Inch  x 10D Inch  x 31.5H Inch ) // // Materials: Bayur Wood / MDF P2 / Mindi Wood Veneer // Finish Code: NAT02(WB PG4), Finish Name: Natural-Natural // KD // CBM: 0.06 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75333-NT_001.jpg"
                        },
                        {
                            item: "OT-75333-NV",
                            qty: 40,
                            desc: "Sarlat 2 Tone Console Table With Drawer, 23.75 Inch W, Navy/Brown, (23.75 Inch W x 10 Inch D x 31.5 Inch H) // Finish Code: B-BM04/NAT02, Finish Name: Top Natural - Body Navy // KD // CBM: 0.06 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** // ***ANTI TIP KIT REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75333-NV_001.jpg"
                        },
                        {
                            item: "OT-75333-PB",
                            qty: 30,
                            desc: "Sarlat / SRT5 // Marnie 2 Tone Console Table With Drawer, Powder Blue (23.75W Inch  x 10D Inch  x 31.5H Inch ) // // Materials: Bayur Wood / MDF P2 / Mindi Wood Veneer // Finish Code: B-BM07/NAT01+G.WHITE , Finish Name: Top Natural - Body Powder Blue // KD // CBM: 0.06 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75333-PB_001.jpg"
                        },
                        {
                            item: "ST-75412-LN",
                            qty: 22,
                            desc: "Elora Round Side Table With Inlaid Herringbone Tabletop and Turned Legs, Light Natural (22.5W Inch  x 22.5D Inch  x 24.5H Inch ) // // Materials: Bayur Wood / MDF P2 / Mindi Wood Veneer Parquetry // Finish Code: NAT01+G.White, Finish Name: Natural-Natural // Set Up // CBM: 0.27 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-75412-LN_001.jpg"
                        },
                        {
                            item: "TT-DU-75008-LB",
                            qty: 20,
                            desc: "Dumaine Bedside Table (15.75x11.81x25.59)   //  Material: Bayur Wood / Top MDF  //  Color: Light Blue (W9.L2+G9)  //  CBM: 0.066  //  Packaging: Carton Box 200 PSI / 5 ply / Plastic wrap around items + Paper oil warp around items+ foam protection + corner plastic protection  //  Master Carton:   //  ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-DU-75008-LB_001.jpg"
                        },
                        {
                            item: "TT-DU-75008-WH",
                            qty: 28,
                            desc: "Dumaine Bedside Table (15.75x11.81x25.59)   //  Material: Bayur Wood / Top MDF  //  Color: White (BA+WBSemi)  //  CBM: 0.066  //  Packaging: Carton Box 200 PSI / 5 ply / Plastic wrap around items + Foamsheet warp around items + foam protection + corner plastic protection  //  Master Carton:   //  ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-DU-75008-WH_001.jpg"
                        },
                        {
                            item: "TT-DU-75010-BL",
                            qty: 145,
                            desc: "Dumaine Console Table with Shelf (31.5x9.84x31.5)   //  Material: Bayur Wood / Top MDF  //  Color: Black ( W48.L2+WB SEMI)  //  CBM: 0.077  //  Packaging: Carton Box 200 PSI / 5 ply / Plastic wrap around items + Paper oil warp around items+ foam protection + corner plastic protection  //  Master Carton:   //  ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-DU-75010-BL_001.jpg"
                        }
                    ]
                },
                "JW 2601-12N": {
                    Vendor: "V68 PT. FURNILAC PRIMAGUNA",
                    ecrd: "2026-03-12",
                    items: [
                        {
                            item: "NS-6801-RFNT",
                            qty: 50,
                            desc: "Gia Raffia Single Drawer Nightstand, 26 Inch H, Natural (24 x 19 x 26) // Material: Bayur Wood, MDF, Raffia, Metal Hardware // Finish: Natural // ***ISTA 3A Packaging Required*** // ***INDIGO ROAD PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-6801-RFNT_001.jpg"
                        },
                        {
                            item: "NS-6802-MRBK",
                            qty: 60,
                            desc: "Gemma 2 Drawer Nightsand With Open Storage, KD, 34 Inch W, Black (34 x 15 x 29.5) // Material: Bayur Wood, Meranti Veneer, MDF, Metal Hardware // Finish: Black Solid // ***ISTA 3A Packaging Required*** // ***INDIGO ROAD PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-6802-MRBK_001.jpg"
                        },
                        {
                            item: "NS-68406-BRV",
                            qty: 30,
                            desc: "2 Drawer + 1 Shelf Nightstand, Walnut Color Code DSC 6403 (22x15x24)   Material: Bayur Wood and MDF  Thin Medium Density Fiberboard - Phase 2   Antique Gold Oval Handle: OV-185/E   CBM: 0.21775   Packaging: Brown Carton",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68406-BRV_001.jpg"
                        },
                        {
                            item: "NS-68945-NT",
                            qty: 50,
                            desc: "Paloma 2 Drawer Raffia Wrapped Night Stand with Shelf, Natural, (28 Inch W x 15 Inch D x 26 Inch H) // // Materials: Wood, Mdf + Anyaman Raffia // Finish Code: NA, Finish Name: Natural // Set Up // CBM: 0.29 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68945-NT_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-WH",
                            qty: 36,
                            desc: "Hooper 2 Drawer Wooden Accent Side Table (17.9x14.9x22.0)   //  Material: MDF, Acacia Wood  //  CBM: 0.173  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Hooper 2 Drawer Wooden Accent Side Table-White (18x15x22) Material/Color:Bayur Wood and Mdf E2/White..CBM:0.17 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-WH_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-NV",
                            qty: 30,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF  //  CBM: 0.1787  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table-Navy Blue (19x15x23) Material/Color:Bayur Wood and Mdf E2/Navy Blue..CBM:0.18 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-NV_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-OR",
                            qty: 30,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF  //  CBM: 0.1787  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table-Orange..(19x15x23) Material/Color : Bayur Wood and Mdf E2 / Orange, CBM: 0.17 Packing : Box K#200 + Protection***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-OR_001.jpg"
                        }
                    ]
                },
                "JW 2601-13N": {
                    Vendor: "V68 PT. FURNILAC PRIMAGUNA",
                    ecrd: "2026-03-12",
                    items: [
                        {
                            item: "NS-6802-MBV",
                            qty: 60,
                            desc: "Gemma 2 Drawer Nightsand With Open Storage, 34 Inch W, Medium Brown (34W Inch  x 15D Inch  x 29.5H Inch ) // // Materials: Wood,Mdf+V.Meranti // Finish Code: BMV/02, Finish Name: Medium Brown // KD // CBM: 0.344 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** // ***ANTI TIP KIT REQUIRED***//",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-6802-MBV_001.jpg"
                        },
                        {
                            item: "NS-68406-BL",
                            qty: 25,
                            desc: "2 Drawer + 1 Shelf Nightstand, 22 Inch W, Blue, (22 Inch W x 15 Inch D x 24 Inch H) // Materials: Bayur, MDF + Veneer // Finish Code: SW 7611, Finish Name: Tranquil Aqua // Set Up // CBM: 0.2177 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68406-BL_001.jpg"
                        },
                        {
                            item: "NS-68406-GN",
                            qty: 30,
                            desc: "2 Drawer + 1 Shelf Nightstand, 22 Inch W, Green, (22 Inch W x 15 Inch D x 24 Inch H) // // Materials: Bayur Wood + MDF + Veneer // Finish Code: SW 6179, Finish Name: Artichoke // Set Up // CBM: 0.2177 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68406-GN_001.jpg"
                        },
                        {
                            item: "NS-68750-MBV",
                            qty: 24,
                            desc: "Clive 2 Drawer Nightstand With Shelf And Cane Doors, 22 Inch W, Medium Brown Veneer on Meranti Veneer (15W Inch  x 24D Inch  x 24H Inch ) // // Materials: Wood+Mdf+Veneer Meranti+Woven Cane Inset Doors+Metal Rails+Metal Cylinder Knob Antique Gold CL-182/E // Finish Code: BMV/02, Finish Name: Medium Brown (BMV/02) // Set Up // CBM: 0.219 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68750-MBV_001.jpg"
                        },
                        {
                            item: "NS-68775-OW",
                            qty: 20,
                            desc: "Maribelle Scallop Nightstand, Off-White (28W Inch x 15D Inch x 26H Inch ) // // Materials: Bayur Wood-Mdf // Finish Code: SW 7004, Finish Name: Snowbound White // Set Up // CBM: 0.29 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68775-OW_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-L-NVG",
                            qty: 48,
                            desc: "Hooper 2 Drawer Wooden Accent Side Table (55.9x38.1x61.0)   //  Material: MDF  //  CBM: 0.219  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Hooper 2 Drawer Wooden Accent Side Table large, Navy Blue..(22x15x24) Material/Color:Bayur Wood and Mdf E2/Navy Blue with gold finish handle and leg..CBM:0.21 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-L-NVG_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-BR",
                            qty: 30,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF  //  CBM: 0.1787  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table-Brown (19x15x23) Material/Color:Bayur Wood and Mdf E2/Brown..CBM:0.18 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-BR_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-WH",
                            qty: 40,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF, Acacia Wood  //  CBM: 0.1787  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table-White (19x15x23) Material/Color:Bayur Wood and Mdf E2/White..CBM:0.17 Packing:Box K#200+Styrofoam 2cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-WH_001.jpg"
                        }
                    ]
                },
                "JW 2601-14N": {
                    Vendor: "V68 PT. FURNILAC PRIMAGUNA",
                    ecrd: "2026-03-12",
                    items: [
                        {
                            item: "NS-6802-LOV",
                            qty: 20,
                            desc: "Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** // ***STURDY ACT TESTING REQUIRED***// ANTI TIP KIT REQUIRED***//",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-6802-LOV_001.jpg"
                        },
                        {
                            item: "NS-68109-BKV",
                            qty: 25,
                            desc: "Devon 3 Drawer Nightstand, 22 Inch W, Black (22W Inch  x 15D Inch  x 24H Inch ) // // Materials: Wood+Mdf+Veneer Meranti+Metal Rails+40mm Metal Ring Pulls // Finish Code: BBV/02 - Ring Pull: AC-040/E, Finish Name: Black - Ring Pull: Antique Gold // Set Up // CBM: 0.218 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68109-BKV_001.jpg"
                        },
                        {
                            item: "NS-68109-MBV",
                            qty: 20,
                            desc: "Devon 3 Drawer Nightstand, 22 Inch W, Medium Brown (22W Inch  x 15D Inch  x 24H Inch ) // // Materials: Wood+Mdf+Veneer Meranti-Metal Rails-Antique Gold Oval Handle: OV-185/E // Finish Code: BMV/02, Finish Name: Medium Brown // Set Up // CBM: 0.218 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68109-MBV_001.jpg"
                        },
                        {
                            item: "NS-68109-NVV",
                            qty: 20,
                            desc: "Devon 3 Drawer Nightstand, 22 InchW, Navy (22W Inch x 15D Inch x 24H Inch) _ Materials: Wood+Mdf+Veneer Meranti+Metal Rails+40mm Metal Ring Pulls _ Finish Code: Navy - Ring Pull: AC-040/E, Finish Name: Navy - Ring Pull: Antique Gold _ Set Up _ CBM: 0.215 _ Number of Shipping Boxes: 1 _ ***DROPSHIP PACKAGING REQUIRED*** _ ***ISTA 3A PACKAGING REQUIRED*** _",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68109-NVV_001.jpg"
                        },
                        {
                            item: "NS-68109-OGV",
                            qty: 25,
                            desc: "Devon 3 Drawer Nightstand, 22 Inch W, Olive Green (22W Inch x 15D Inch x 24H Inch ) // // Materials: Wood+Mdf+Veneer Meranti+Metal Rails+40mm Metal Ring Pulls // Finish Code: SW 6179 - Ring Pull: AC-040/E, Finish Name: Olive Green (Artichoke Green) - Ring Pull: Antique Gold // Set Up // CBM: 0.215 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68109-OGV_001.jpg"
                        },
                        {
                            item: "NS-68109-SBV",
                            qty: 25,
                            desc: "Devon 3 Drawer Nightstand, 22 Inch W, Slate Blue (22W Inch x 15D Inch x 24H Inch ) // // Materials: Wood+Mdf+Veneer Meranti+Metal Rails+40mm Metal Ring Pulls // Finish Code: SW 7611 - Ring Pull: AC-040/E, Finish Name: Slate Blue (Tranquil Aqua) - Ring Pull: Antique Gold // Set Up // CBM: 0.215 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68109-SBV_001.jpg"
                        },
                        {
                            item: "NS-68109-WHV",
                            qty: 20,
                            desc: "Devon 3 Drawer Nightstand, 22 Inch W, White (22W Inch  x 15D Inch  x 24H Inch ) // // Materials: Wood+Mdf+Veneer Meranti-Metal Rails-Antique Gold Oval Handle: OV-185/E // Finish Code: Solid White, Finish Name: Solid White // Set Up // CBM: 0.218 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68109-WHV_001.jpg"
                        },
                        {
                            item: "NS-68696-BKV",
                            qty: 20,
                            desc: "Linea 2 Drawer Nightstand with Shelf, Black (28W Inch  x 15D Inch  x 26H Inch ) // // Materials: Wood-Mdf-Veneer Meranti-Metal Rails-Antique Gold Metal Ring Pulls // Finish Code: BBV/02, Finish Name: Black // Set Up // CBM: 0.291 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68696-BKV_001.jpg"
                        },
                        {
                            item: "NS-68696-MBV",
                            qty: 31,
                            desc: "Linea 2 Drawer Nightstand with Shelf, Medium Brown (28W Inch  x 15D Inch  x 26H Inch ) // // Materials: Wood-Mdf-Veneer Meranti-Metal Rails-Antique Gold Metal Ring Pulls // Finish Code: NAV/02, Finish Name: Medium Brown // Set Up // CBM: 0.294 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68696-MBV_001.jpg"
                        },
                        {
                            item: "NS-68750-BLV",
                            qty: 20,
                            desc: "Clive 2 Drawer Nightstand With Shelf And Cane Doors, 22 Inch W, Blue (22W Inch  x 15D Inch  x 24H Inch ) // // Materials: Wood+Mdf+Veneer Meranti+Woven Cane Inset Doors+Metal Rails+Metal Cylinder Knob Antique Gold CL-182/E // Finish Code: BNV/02, Finish Name: Nothern Air // Set Up // CBM: 0.219 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68750-BLV_001.jpg"
                        },
                        {
                            item: "NS-68750-WHV",
                            qty: 20,
                            desc: "Clive 2 Drawer Nightstand With Shelf And Cane Doors, 22 Inch W, White (22W Inch  x 15D Inch  x 24H Inch ) // // Materials: Wood+Mdf+Veneer Meranti+Woven Cane Inset Doors+Metal Rails+Metal Cylinder Knob Antique Gold CL-182/E // Finish Code: Solid White, Finish Name: Solid White // Set Up // CBM: 0.219 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68750-WHV_001.jpg"
                        },
                        {
                            item: "NS-68775-MBV",
                            qty: 25,
                            desc: "Maribelle Scallop Nightstand, Medium Brown (28W Inch  x 15D Inch  x 26H Inch ) // // Materials: Wood,Mdf // Finish Code: BMV/02, Finish Name: Medium Brown // Set Up // CBM: 0.291 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68775-MBV_001.jpg"
                        }
                    ]
                },
                "JW 2601-16": {
                    Vendor: "V73 CV Infinite Rattan Creation",
                    ecrd: "2026-04-24",
                    items: [
                        {
                            item: "CS-73287-NT",
                            qty: 40,
                            desc: "Kauai Woven Seagrass Counterstool, 36.25 Inch H, Natural, (17.5 Inch W x 21.25 Inch D x 36.25 Inch H) // Fabric Type: Polyester, Fabric Code from Vendor: MIKELI-WHT, Fabric Content %: 100% Polyester, Fill Material on Upholstered Items only: Foam // Material: Mahogany Wood, Seagrass, Fabric, Finish Code: JFNWTH, Finish Name: Weathered Wash // Set Up // CBM: 0.287 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***INDIGO ROAD PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CS-73287-NT_001.jpg"
                        },
                        {
                            item: "HB-KD101-T-BL",
                            qty: 50,
                            desc: "Lattice Twin Headboard, Blue, (41.5 Inch W x 2 Inch D x 52 Inch H) // Materials: Mahogany Wood, Rattan // Finish Code: JFN BLU 01, Finish Name: Blue // KD // CBM: 0.169048 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/HB-KD101-T-BL_001.jpg"
                        },
                        {
                            item: "HB-KD404-FQ-GN",
                            qty: 15,
                            desc: "Lattice Full/Queen Headboard, Green, (64.25 Inch W x 2 Inch D x 52 Inch H) // Materials: Mahogany Wood, Rattan // Finish Code: JFN GRN 01, Finish Name: Green // KD // CBM: 0.255816 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/HB-KD404-FQ-GN_001.jpg"
                        },
                        {
                            item: "OC-73310-NT",
                            qty: 15,
                            desc: "Yulia Open Rattan Barrel Occasional Chair, Natural (29.13 x 28.35x31.15) // Material: Rattan pole, Rattan Core Half, plywood, loose cushion seat foam 15cm d/c20, Canvas White fabric, Pillow Dacron filling Canvas white Fabric // CBM: 0.577 // Packaging: ***DROPSHIP PACKAGING REQUIRED***// Inch Indigo Road Packaging Inch Inch required //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OC-73310-NT_001.JPG"
                        },
                        {
                            item: "SB-73106-GW",
                            qty: 50,
                            desc: "Hampton Chippendale Counterstool, 39.25 Inch H, Grey Wash, (19.75 Inch W x 20.5 Inch D x 39.25 Inch H)   //  Material: 0  //  CBM: 0.314  //  Packaging: EMPTY BOX  //  Master Carton: 1 PC  //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-73106-GW_001.jpg"
                        },
                        {
                            item: "SB-73106-WH",
                            qty: 60,
                            desc: "Hampton Chippendale Counter Stool, 39.25 Inch H, White, (19.75 Inch W x 20.5 Inch D x 39.25 Inch H)   //  Material: 0  //  CBM: 0.314  //  Packaging: EMPTY BOX  //  Master Carton: 1 PC  //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-73106-WH_001.jpg"
                        }
                    ]
                },
                "JW 2601-17N": {
                    Vendor: "V73 CV Infinite Rattan Creation",
                    ecrd: "2026-04-24",
                    items: [
                        {
                            item: "AM-73423-BL",
                            qty: 36,
                            desc: "BAMBOO CANE MIRROR // Palm Rectangular Cane Mirror, Blue (30.75W Inch  x 1.5D Inch  x 42.75H Inch ) // // Materials: Mahogany Wood, MDF, Rattan Webing Square // Finish Code: JFN BLU 01, Finish Name: LIGHT BLUE // Set Up // CBM: 0.122148 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-73423-BL_001.jpg"
                        },
                        {
                            item: "AM-73423-NV",
                            qty: 38,
                            desc: "BAMBOO CANE MIRROR // Palm Rectangular Cane Mirror, Navy (30.75W Inch  x 1.5D Inch  x 42.75H Inch ) // // Materials: Mahogany Wood, MDF, Rattan Webing Square // Finish Code: JFN NVY 01, Finish Name: NAVY BLUE // Set Up // CBM: 0.122148 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-73423-NV_001.jpg"
                        },
                        {
                            item: "AM-73678-OG",
                            qty: 36,
                            desc: "ABSTARCK MIRROR // Arbor Rattan Abstract Leaf Mirror, Olive Green (31.5W Inch  x 2D Inch  x 43H Inch ) // Materials: Rattan Pole, Plywood // Finish Code: JFN AC GRN, Finish Name: ARTICHOKE GREEN // Set Up // CBM: 0.132327 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** ",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-73678-OG_001.jpg"
                        },
                        {
                            item: "DF-DH105",
                            qty: 40,
                            desc: "Durham Rattan BarStool (18 x 21 x 41)   //  Material: 0  //  CBM: 0.286  //  Packaging: EMPTY BOX  //  Master Carton: 1 PC  //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DF-DH105_001.jpg"
                        },
                        {
                            item: "HB-KD404-FQ-NV",
                            qty: 10,
                            desc: "Lattice Full/Queen Headboard, Navy, (64.25 Inch W x 2 Inch D x 52 Inch H) // Materials: Mahogany Wood, Rattan // Finish Code: JFN-NVY01, Finish Name: NAVY // KD // CBM: 0.255816 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/HB-KD404-FQ-NV_001.jpg"
                        },
                        {
                            item: "SC-73101-BL",
                            qty: 46,
                            desc: "Hampton Chippendale Rattan Side Chair, Set of 2, Blue, (19.5 Inch W x 23.5 Inch D x 38.75 Inch H) // Fabric Type: Polyester, Fabric Code from Vendor: Snow White, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam // Materials: Rattan, Plywood // Finish Code: JFN-BLU 01, Finish Name: Blue(Northen Air) // Set Up // CBM: 0.49392 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***SOFFA COMPLIANCE REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SC-73101-BL_001.JPG"
                        },
                        {
                            item: "SC-73101-WH",
                            qty: 32,
                            desc: "Hampton Chippendale Rattan Side Chair Set of 2, White (19 x 22 x 39) // Material: 0 // CBM: 0.503 // Packaging: BOX // Master Carton: 2 PC //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SC-73101-WH_001.jpg"
                        }
                    ]
                },
                "JW 2601-21N": {
                    Vendor: "V58 Kharisma Rotan Mandiri",
                    ecrd: "2026-03-30",
                    items: [
                        {
                            item: "BN-58691-BL",
                            qty: 35,
                            desc: "Winston Rattan Stool With Woven Seat, Blue/Natural (21.25W Inch x 16.5D Inch x 19.25H Inch ) // // Materials: Rattan Pole, Rattan Pitrit // Finish Code: N-BL, Finish Name: Blue Grey - Natural // Set Up // CBM: 0.101 // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/BN-58691-BL_001.JPG"
                        },
                        {
                            item: "BN-58691-NV",
                            qty: 25,
                            desc: "Winston Rattan Stool With Woven Seat, Navy/Antique Natural (21.25W Inch x 16.5D Inch x 19.25H Inch ) // // Materials: Rattan Pole, Rattan Pitrit // Finish Code: NV-LGB, Finish Name: Navy - Light grey Bistro // Set Up // CBM: 0.101 // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/BN-58691-NV_001.jpg"
                        },
                        {
                            item: "BN-58747-AN",
                            qty: 25,
                            desc: "Baylin Rattan Bench With Woven Banana Leaf Seat, Antique Natural (59W Inch x 15.75D Inch x 19.25H Inch ) // // Materials: Rattan Pole - Banana Leaf // Finish Code: LGB, Finish Name: Light grey Bistro // Set Up // CBM: 0.2765 // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/BN-58747-AN_001.JPG"
                        },
                        {
                            item: "CS-5834-AN",
                            qty: 18,
                            desc: "Winston II Rattan Counterstool, 37 Inch H, Antique Natural, (21.25 Inch W x 20.75 Inch D x 37 Inch H) // Fabric Type: Cotton, Fabric Code from Vendor: CTN, Fabric Content %: Cotton 100%, Fill Material on Upholstered Items only: Polyurethane Foam // Finish Code: GB, Finish Name: GREY BISTRO // Set Up // CBM: 0.2534 // Number of Shipping Boxes: 1 // Container Packed Via: Bulk Shipped ***Must Include Shipping Materials And Shipping Cartons In Container*** // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CS-5834-AN_001.jpg"
                        },
                        {
                            item: "CS-5834-BL",
                            qty: 16,
                            desc: "Winston II Rattan Counterstool, 37 Inch H, Blue, (21.25 Inch W x 20.75 Inch D x 37 Inch H) // Fabric Type: Cotton, Fabric Code from Vendor: CTN, Fabric Content %: Cotton 100%, Fill Material on Upholstered Items only: Polyurethane Foam // Finish Code: BG, Finish Name: BLUE GREY // Set Up // CBM: 0.2534 // Number of Shipping Boxes: 1 // Container Packed Via: Bulk Shipped ***Must Include Shipping Materials And Shipping Cartons In Container*** // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CS-5834-BL_001.jpg"
                        },
                        {
                            item: "CS-5834-NV",
                            qty: 18,
                            desc: "Winston II Rattan Counterstool, 37 Inch H, Navy, (21.25 Inch W x 20.75 Inch D x 37 Inch H) // Fabric Type: Cotton, Fabric Code from Vendor: CTN, Fabric Content %: Cotton 100%, Fill Material on Upholstered Items only: Polyurethane Foam // Finish Code: NV, Finish Name: NAVY BLUE // Set Up // CBM: 0.2534 // Number of Shipping Boxes: 1 // Container Packed Via: Bulk Shipped ***Must Include Shipping Materials And Shipping Cartons In Container*** // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CS-5834-NV_001.jpg"
                        },
                        {
                            item: "DC-5801-GN",
                            qty: 30,
                            desc: "Winston II Rattan Dining Chair, Set Of 2, 35 Inch H, Green 21.25 x 22.50 x 35, // Fabric Type: Cotton, Fabric Code: CTNWC, Fabric Content: 100% Cotton, Fill Material: Polyurethane Foam // Finish Code: GN, Finish Name: GREEN // Set Up // CBM: 0.324 // Number of Shipping Boxes: 1 // // Container Packed Via: Bulk Packed ***Boxes and Packaging Included*** // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC-5801-GN_001.jpg"
                        },
                        {
                            item: "DC-5801-NV",
                            qty: 15,
                            desc: "Winston II Rattan Dining Chair, Set Of 2, 35 Inch H, Navy, (21.25 Inch W x 22.5 Inch D x 35 Inch H) // Finish Code: 21.25 x22.5 x35, Finish Name: // // CBM: Polyurethane Foam // Number of Shipping Boxes: //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC-5801-NV_001.jpg"
                        },
                        {
                            item: "DC-5801-RTBL",
                            qty: 25,
                            desc: "Winston II Rattan Dining Chair, Set Of 2 - (21.25 Inch W x 22.50 Inch D x 35 Inch H) // Material: Frame : Rattan Pole, Decore into Rattan Core // Finish: Blue Grey // ***ISTA 3A Packaging Required***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC-5801-RTBL_001.jpg"
                        },
                        {
                            item: "DC-5801-WH",
                            qty: 20,
                            desc: "Winston II Rattan Dining Chair, Set Of 2, 35 Inch H, White 21.25 x 22.50 x 35, // Fabric Type: Cotton, Fabric Code: CTNWC, Fabric Content: 100% Cotton, Fill Material: Polyurethane Foam // Finish Code: WH, Finish Name: SOLID WHITE // Set Up // CBM: 0.324 // Number of Shipping Boxes: 1 // // Container Packed Via: Bulk Packed ***Boxes and Packaging Included*** // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC-5801-WH_001.jpg"
                        },
                        {
                            item: "ST-58355-BL",
                            qty: 15,
                            desc: "Bonnie Rattan Woven Fabric Illusion Side Table, Blue 24x24x21.5, // Fabric Type: , Fabric Code: , Fabric Content: , Fill Material: // Finish Code: BG, Finish Name: BLUE GREY // Set Up // CBM: 0.25 // Number of Shipping Boxes: 1 // // // ***DROPSHIP PACKAGING REQUIRED*** FALSE***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-58355-BL_001.jpg"
                        },
                        {
                            item: "WR-WS102-GR",
                            qty: 13,
                            desc: "Winston Rattan Dining Side Chair - Vintage Grey (min qty 2pcs)..(22x23.6x41.3)..Material/Color : Rattan/Vintage grey..CBM : 0.253..Packing : Box K#200+Styrofoam Protection 2cm (2pcs/case)/Dropship Approved",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/WR-WS102-GR_001.jpg"
                        }
                    ]
                },
                "JW 2601-22N": {
                    Vendor: "V58 Kharisma Rotan Mandiri",
                    ecrd: "2026-04-06",
                    items: [
                        {
                            item: "BC-58101-BK",
                            qty: 15,
                            desc: "Wren Rattan Barcart, Black 27x17x32..Material/Color: Rattan semi poles/Golden Black..CBM: 0.325..Packing: Box kraft 200 + Protection..",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/BC-58101-BK_001.jpg"
                        },
                        {
                            item: "CS-58207-NT",
                            qty: 24,
                            desc: "Dutch Counterstool With Upholstered Seat, Antique Natural, (17 Inch W x 22 Inch D x 38.25 Inch H) // Fabric Type: Cotton, Fabric Code from Vendor: WH, Fabric Content %: 1, Fill Material on Upholstered Items only: foam, fibre // Materials: Solid Wood Mindi, Natural Rattan Peel // Finish Code: GB, Finish Name: Grey Bistro // Set Up // CBM: 0.252 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***SOFFA COMPLIANCE REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CS-58207-NT_001.jpg"
                        },
                        {
                            item: "DC-58099-WW",
                            qty: 18,
                            desc: "Waverly Rattan Wing Back Dining Chairs With Wood Legs, Set of 2, Whitewash (21.25W Inch x 22.5D Inch x 33.5H Inch ) // Fabric Type: Cotton, Fabric Code from Vendor: CTN01, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam // Materials: Teakwood, Rattan Pole, Rattan Pitrit // Finish Code: SB-WW, Finish Name: Snowbound White Wash (Rattan and Wood) // Set Up // CBM: 0.304 // ***SOFFA COMPLIANCE REQUIRED*** // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC-58099-WW_001.jpg"
                        },
                        {
                            item: "DC-58225-OG",
                            qty: 60,
                            desc: "Hampton Chippendale Rattan Barrel Chair, 33.5 Inch H, Olive Green (23.5W Inch x 24D Inch x 33.5H Inch ) // Fabric Type: Cotton, Fabric Code from Vendor: CTN03, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam // Materials: Rattan Semi pole, Rattan Core // Finish Code: AG, Finish Name: Artichoke Green // Set Up // CBM: 0.2703 // ***SOFFA COMPLIANCE REQUIRED*** // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC-58225-OG_001.jpg"
                        },
                        {
                            item: "DC-58225-OW",
                            qty: 25,
                            desc: "Hampton Chippendale Rattan Barrel Chair, 33.5 Inch H, Off-White (23.5W Inch x 24D Inch x 33.5H Inch ) // Fabric Type: Cotton, Fabric Code from Vendor: CTN01, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam // Materials: Rattan Semi pole, Rattan Core // Finish Code: WHSB, Finish Name: White Snowbound // Set Up // CBM: 0.2703 // ***SOFFA COMPLIANCE REQUIRED*** // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC-58225-OW_001.jpg"
                        },
                        {
                            item: "OC-5801-RTNT",
                            qty: 25,
                            desc: "Winston II Rattan Arm Chair - (24 Inch W x 25.50 Inch D x 39.25 Inch H) // Material: Frame : Rattan Pole, Decore into Rattan Core // Finish: Grey Bistro",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OC-5801-RTNT_001.jpeg"
                        },
                        {
                            item: "OC-5822-NV",
                            qty: 25,
                            desc: "Winston II Rattan Arm Chair, Navy (24 Inch W x 25.5 Inch D x 39.25 Inch H) // Fabric Type: Cotton, Fabric Code: CTNWC, Fabric Content: 100% Cotton, Fill Material: Polyurethane Foam // Finish Code: COR, Finish Name: CORAL // Set Up // CBM: 0.253 // Number of Shipping Boxes: 1 // // Container Packed Via: Bulk Packed ***Boxes and Packaging Included*** // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OC-5822-NV_001.jpg"
                        },
                        {
                            item: "WR-WS102-GR",
                            qty: 12,
                            desc: "Winston Rattan Dining Side Chair - Vintage Grey (min qty 2pcs)..(22x23.6x41.3)..Material/Color : Rattan/Vintage grey..CBM : 0.253..Packing : Box K#200+Styrofoam Protection 2cm (2pcs/case)/Dropship Approved",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/WR-WS102-GR_001.jpg"
                        },
                        {
                            item: "WR-WS105",
                            qty: 20,
                            desc: "Winston Rattan High Back Arm Chair, Antique Brown, (24 Inch W x 27 Inch D x 43 Inch H) // Material/Color: Rattan/Us Antique..Cushion : White Canvas Seat+Back Pillow (18x16)..CBM:0.384..Packing : Single wall L shape +Empty Box for 1pc / Box..(K#200+Styrofoam Protection 2cm) Dropship Approved",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/WR-WS105_001.jpg"
                        },
                        {
                            item: "WR-WS105-BM",
                            qty: 14,
                            desc: "Winston Rattan High Back Arm Chair -Solid Black ..Material/Color : Rattan/Solid Black..Cushion : White Canvas + Back Pillow 18x16 Inch ..CBM: 0.480..Packing : Single wall L shape +Empty Box for 1pc / Box..(K#200+Styrofoam Protection 2cm) Dropship Approved",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/WR-WS105-BM_001.jpg"
                        }
                    ]
                },
                "JW 2601-23": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-04-27",
                    items: [
                        {
                            item: "AM-70138-WH",
                            qty: 10,
                            desc: "Malta Mirror (49.21x3.543x49.21) // Material: Hapsalan // CBM: 0.265 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Styrofoam 100x200x2 + wrap paper/kg wide 120 // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70138-WH_001.jpg"
                        },
                        {
                            item: "AM-70245-WW",
                            qty: 10,
                            desc: "Abaca Small Natural,39x2.5x79 (INCH),  3-4mm- Wicker, Glass Mirror+Plywood, white wash",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70245-WW_001.JPG"
                        },
                        {
                            item: "AM-70604",
                            qty: 15,
                            desc: "Fulton Teak Mirror (26.77x1.456x78.74) // Material: Envi Thin // CBM: 0.202 // Packaging: Box Kraft #150 + Box SW (Pizza models) + Protect Box Styrofoam 2cm for Headboard 6cm + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Styrofoam 100x200x2 + wrap paper/kg wide 120 + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70604_001.jpg"
                        },
                        {
                            item: "AM-70607",
                            qty: 12,
                            desc: "Delmare Cross Hatch Leaning Mirror, Water Hyacinth (27.95x1.968x75.98) // Material: Water hyacinth // CBM: 0.196 // Packaging: Box Kraft #150 + Box SW (Pizza models) + Protect Box Styrofoam 2cm for shape Mirror (U shape) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70607_001.jpg"
                        },
                        {
                            item: "AM-70806-NT",
                            qty: 12,
                            desc: "Cade Angled Brush Edge Braided Seagrass Mirror (30X30X0.6) // Material: Mendong, Glass, Plywood, Metal // CBM: 0.057 // Packaging: Craft#200 Pizza Box models with corner protection +Cork Protect Box 2cm for Circle shape (L) // MOQ: 25 // ***Dropship Packaging Required*** // ***INDIGO ROAD PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70806-NT_001.jpg"
                        },
                        {
                            item: "AM-70912-M",
                            qty: 15,
                            desc: "24 Inch Marina Round Rattan Mirror, White (23.62x3.543x23.62) // Material: Rattan; Sanded Peel // CBM: 0.093 // Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for Headboard (width in styrofoam and sw = 11cm) + Styrofoam 100x200x2 + Medium paper/kg (m2=0.2 kg) // Master Carton: Y , 1 Inch Drop Ship PAckaging Inch required",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70912-M_001.jpg"
                        },
                        {
                            item: "CT-70435",
                            qty: 30,
                            desc: "Fulton Storage Coffee Table (30.70x30.70x15.74) // Material: // CBM: 0.339 // Packaging: Box Kraft #200 + Box SW + Protect Box Styrofoam PE 2cm (elbow shape) + Protect Box Styrofoam PE 2cm (L shape) + Medium paper/kg (m2=0.2 kg) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70435_001.jpg"
                        },
                        {
                            item: "DF-SC101",
                            qty: 28,
                            desc: "Seascape Rattan Side Chair with Cushion (18.50x24.40x42.51) // Material: Wood Frame; Kubu Grey // CBM: 0.2455 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Medium paper/kg (m2=0.2 kg) + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DF-SC101_001.jpg"
                        },
                        {
                            item: "JV-AS504-RC",
                            qty: 20,
                            desc: "Aspen Rectangular Mirror - Natural (24x2x30) (25.19x2.244x31.10) // Material: Big Rope Woven; MDF // CBM: 0.084 // Packaging: Box Kraft #150 + Box SW model pizza + Protect Box Styrofoam PE 2cm (elbow shape) + wrap paper/kg wide 120 + Styrofoam 100x200x2 // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-AS504-RC_001.jpg"
                        },
                        {
                            item: "JV-AS504O-L",
                            qty: 25,
                            desc: "Aspen Round Mirror, Natural (31.10x2.244x31.10) // Material: Big Rope Woven // CBM: 0.101 // Packaging: Box Kraft #150 + Box SW (Pizza models) + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Protect Box Styrofoam 2cm (elbow shape) + wrap paper/kg wide 120 + Styrofoam 100x200x2 + Medium paper/kg (m2=0.2 kg) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-AS504O-L_001.jpg"
                        },
                        {
                            item: "JV-CB605-WH",
                            qty: 30,
                            desc: "Cordova Counter Stool (17.32x17.32x23.62) // Material: Wood Frame; Coconut Chips // CBM: 0.155 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-CB605-WH_001.jpg"
                        },
                        {
                            item: "OR-RL301-NT",
                            qty: 35,
                            desc: "Roell Teak Top Side Table with Natural Root Base (20.47x20.47x20.47) // Material: Teakwood // CBM: 0.195 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OR-RL301-NT_001.jpg"
                        },
                        {
                            item: "OR-TG604",
                            qty: 18,
                            desc: "Twig Sunburst Mirror (43.30x2.165x43.30) // Material: Twig Slice // CBM: 0.161 // Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for Headboard Small H = 8 + Styrofoam 100x200x2 + wrap paper/kg wide 120 // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OR-TG604_001.jpg"
                        },
                        {
                            item: "TT-AC-70376-L",
                            qty: 15,
                            desc: "11 Inch  Live Edge Teak Riser with Iron Base (19.68x19.68x11.02)   //  Material: Teakwood; Iron    //  CBM: 0.042  //  Packaging: Box Kraft #150 + Protect hat model for Liberte Round Side Table Big H = 10cm (Big) + Plastik Handywrap 150x10x0.02  //  Master Carton: Y , 1  //  ***DROPSHIP PACKAGING REQUIRED***  ******KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-AC-70376-L_001.jpg"
                        },
                        {
                            item: "TT-NTR-OP302-NT",
                            qty: 30,
                            desc: "Open Slat Wooden End Table (11.81x11.81x17.71)   //  Material: Wood    //  CBM: 0.071  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L )  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-NTR-OP302-NT_001.jpg"
                        },
                        {
                            item: "TT-OR-NL301",
                            qty: 20,
                            desc: "Natura Life Edge Side Table (19.68x22.83x19.68)   //  Material:     //  CBM: 0.052  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Protect Samping Single Wall + Styrofoam Hapsala Round Mirror (1 set=4pcs) + Single Wall  wide 200 x 180 + Foam Sheet L.120 T.1mm mtr/1 roll 500 m  //  Master Carton: Y , 1  //  ***DROPSHIP PACKAGING REQUIRED***  ******KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-OR-NL301_001.jpg"
                        },
                        {
                            item: "WR-DE103-GR",
                            qty: 30,
                            desc: "Daphnie Rattan Side Chair (22.04x22.83x38.97)   //  Material: Rattan Frame; Wicker 3mm; Costello Color; SR Oatmeal for the cushion    //  CBM: 0.447  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/WR-DE103-GR_001.jpg"
                        }
                    ]
                },
                "JW 2601-24N": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-04-30",
                    items: [
                        {
                            item: "AD-70911-SET",
                            qty: 15,
                            desc: "Gaia Round Woven Wall Basket Set (35.43x4.724x35.43) // Material: Waterhyacinth; Agel // CBM: 0.19 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm for a circle shape ( L ) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AD-70911-SET_001.jpg"
                        },
                        {
                            item: "AM-701639-WH",
                            qty: 10,
                            desc: "Rectangular Teak Branch Frame Mirror, 39 Inch H, White 26.18x2.75x39.37 // Fabric Type: N/A, Fabric Code: N/A, Fabric Content: N/A, Fill Material: N/A // Finish Name: White // Set Up // CBM: 0.1075 // Number of Shipping Boxes: 1 // // // ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-701639-WH_001.jpg"
                        },
                        {
                            item: "AM-70231-NT",
                            qty: 10,
                            desc: "Abaca Small Natural, 3-4mm - Glass Mirror + Plywood",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70231-NT_001.jpg"
                        },
                        {
                            item: "AM-70353-WW",
                            qty: 15,
                            desc: "Knotted Natural Fiber Rectangular Mirror, Whitewash, (27.25 Inch  Inch W x 2.5 Inch D x 40.75 Inch  Inch H) // // Materials: Banana BL Small Natural, Plywood, Glass // Finish Code: 4, Finish Name: White Ivory // Set Up // CBM: 0.12 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70353-WW_001.jpg"
                        },
                        {
                            item: "AM-LE701",
                            qty: 20,
                            desc: "Live Edge 3D Mirror Solid Suar Wood Frame (21.65x1.968x24.01) // Material: Munggur Wood // CBM: 0.05 // Packaging: Box Kraft #150 + Box SW (stack cover) + Protect Box Styrofoam 2cm for Headboard 6cm + Single Face + wrap paper/kg wide 120 + Styrofoam 100x200x2 // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-LE701_001.jpg"
                        },
                        {
                            item: "CT-70304-WH",
                            qty: 12,
                            desc: "Roell Teak Top Console Table with Natural Root Base (46.45x16.92x29.92) // Material: Teak Wood // CBM: 0.46 // Packaging: Box Kraft #150 + Protect Box Styrofoam PE 2cm (elbow shape) + Protect Box Styrofoam PE 2cm (L shape) + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70304-WH_001.jpg"
                        },
                        {
                            item: "CT-70542",
                            qty: 25,
                            desc: "Bayside Coffee Table with Storage (47.24x18.30x17.71) // Material: Full Kubu+Wood Base // CBM: 0.343 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70542_001.jpg"
                        },
                        {
                            item: "GD-70524",
                            qty: 12,
                            desc: "Fulton Sideboard, Two Door (47.24x15.74x35.43) // Material: Acacia Wood // CBM: 0.565 // Packaging: Box kraft #200 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + wrap paper/kg wide 120 // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/GD-70524_001.jpg"
                        },
                        {
                            item: "JV-CLT503",
                            qty: 14,
                            desc: "Charleston Teak Dining Table, White Patina (76.77x37.40x30.31) // Material: TeakWood // CBM: 0.371 // Packaging: Box kraft #200 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-CLT503_001.JPG"
                        },
                        {
                            item: "JV-NHT402-4-WH",
                            qty: 20,
                            desc: "New Hampton Round End Table (15.74x15.74x18.50) // Material: // CBM: 0.119 // Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L ) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT402-4-WH_001.jpg"
                        },
                        {
                            item: "JV-NHT402-4-WP-L",
                            qty: 30,
                            desc: "New Hampton Coconut Shell Round End Table, White Patina (19.68x19.68x23.22) // Material: Wood; Coco Chips // CBM: 0.202 // Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L ) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT402-4-WP-L_001.jpg"
                        },
                        {
                            item: "JV-NHT403-WP-L",
                            qty: 15,
                            desc: "New Hampton Round Cocktail Table (36.61x36.61x18.50) // Material: Frame Wood; Plywood; Coco Chips; Wood leg // CBM: 0.529 // Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam PE 2cm (L shape) + Protect Box Styrofoam PE 2cm (elbow shape) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT403-WP-L_001.jpg"
                        },
                        {
                            item: "ST-70108-BK",
                            qty: 25,
                            desc: "Kayu Petrifed Wood Top Pedestal Accent Table, 20 Inch H, Black (12x12x20) // Material: Petrified Black Munggur // Finish: Black-Black // ***ISTA 3A Packaging Required*** // ***INDIGO ROAD PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70108-BK_001.jpg"
                        },
                        {
                            item: "ST-70116-NT",
                            qty: 25,
                            desc: "Organic Petrified Wood Top Accent Table, with Hourglass base, 20 Inch H, Natural (12x12x20) // Material: Top : Petrified Wood (Cream) Base : Suar Wood (Natural) // Finish: Cream-Natural // Box Craft 200mm,Protect Styrofoam",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70116-NT_001.jpg"
                        },
                        {
                            item: "SY-MR401",
                            qty: 20,
                            desc: "Marina Abaca Double Bench with Storage (39.37x13.77x17.71)   //  Material: Abaca    //  CBM: 0.219  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L )  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SY-MR401_001.jpg"
                        },
                        {
                            item: "SY-MR401-BD",
                            qty: 30,
                            desc: "Marina Abaca Double Bench with Storage, 40.2 Inch W, Blonde, (40.2 Inch W x 14.2 Inch D x 17.7 Inch H) // Materials: Banana Small Natural, Mungur Wood // Finish Code: 1-97, Finish Name: Banana Natural & White Patina // CBM: 0.23 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SY-MR401-BD_001.jpg"
                        }
                    ]
                },
                "JW 2601-25N": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-05-05",
                    items: [
                        {
                            item: "AB-70909-NT",
                            qty: 18,
                            desc: "Organic Teak Wood Carved Bowl, 10 Inch H, Natural, (14 Inch W x 14 Inch D x 10 Inch H) // // Materials: Teak Wood // Finish Code: 39, Finish Name: HO Natural // // CBM: 0.030625 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AB-70909-NT_001.jpg"
                        },
                        {
                            item: "AC-70817",
                            qty: 60,
                            desc: "Maples Rattan and Bamboo Antique Basket (21.25x14.96x16.14) // Material: Rattan Half Polish; Bamboo; Sendi Peel // CBM: 0.124 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Medium paper/kg (m2=0.2 kg) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AC-70817_001.jpg"
                        },
                        {
                            item: "AW-70746-BD",
                            qty: 10,
                            desc: "Shine Wall Art, Blonde, (14.25 Inch W x 4 Inch D x 14.25 Inch H) // // Materials: Banana, Metal // Finish Code: 1, Finish Name: Natural // Set Up // CBM: 0.0328 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AW-70746-BD_001.jpg"
                        },
                        {
                            item: "CT-70102-NU",
                            qty: 12,
                            desc: "Natura Organic Coffee Table Base (Glass Top Not Included), Natural (39x39x18) // Material: Teakwood // Finish: Natural HO // Box Craft 200mm,Protect PE",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70102-NU_001.jpg"
                        },
                        {
                            item: "JV-ABL401",
                            qty: 50,
                            desc: "Abella Round Coffee Table (34.25x34.25x16.53) // Material: Rotan Frame; Banana Small Astor + Banana (Styrofoam 1) + Single Face Master Carton: Y , 1***DROPSHIP PACKAGING REQUIRED*** KD // CBM: 0.397 // Packaging: Box Kraft #150 + Protect Styrofoam (Styrofoam 1) + Single Face // Master Carton: Y , 1 // ***DROPSHIP PACKAGING REQUIRED*** ******",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-ABL401_001.jpg"
                        },
                        {
                            item: "JV-NHT403-WP",
                            qty: 20,
                            desc: "New Hampton Round Cocktail Table, 30.75 Inch W, White Patina, (30.75 Inch W x 30.75 Inch D x 16.25 Inch H) // Materials: Coco With Chip 3x3, Mungur Wood // Finish Code: CN3B - 4, Finish Name: White Patina / White Wash // Set Up // CBM: 0.35 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT403-WP_001.jpg"
                        },
                        {
                            item: "OS-70302-NT",
                            qty: 15,
                            desc: "Woven Top Wood Stools, Set Of 2, Medium Brown (16x16x18) // Material: Teakwood Legs-Synthetic Polytwist Textured Silk Corn (BT 02041507TX1) // Natural Teak Wood Finish // Finish: Natural Teak Wood // Box Craft 200mm,Protect Styrofoam // Drop shipped packaged",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OS-70302-NT_001.jpg"
                        },
                        {
                            item: "OT-70102-NU",
                            qty: 12,
                            desc: "Natura Root Console Table, Natural (47x20x35) // Material: Teakwood // Finish: Natural HO // Box Craft 200mm,Protect PE",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-70102-NU_001.jpg"
                        },
                        {
                            item: "SD-70236",
                            qty: 20,
                            desc: "Bayside Arm Chair With An Argyle Patterned Back (22.04x22.83x38.97) // Material: Slimit // CBM: 0.411 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SD-70236_001.jpg"
                        }
                    ]
                },
                "JW 2601-26N": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-05-08",
                    items: [
                        {
                            item: "AB-70804-WH",
                            qty: 14,
                            desc: "Crown Carved Wooden Bowl, 16 Inch W, White (16x16x6) // Material: Mungur // Finish: New White Solid // Box Craft 200mm, Protect Styrofoam",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AB-70804-WH_001.jpg"
                        },
                        {
                            item: "AB-70889-NT",
                            qty: 20,
                            desc: "Organic Teak Wood Carved Bowl, 24 Inch W, Natural, (24 Inch W x 24 Inch D x 6 Inch H) // // Materials: Teak Wood // Finish Code: 39, Finish Name: HO Natural // // CBM: 0.054 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AB-70889-NT_001.jpg"
                        },
                        {
                            item: "AM-70138-NU",
                            qty: 10,
                            desc: "Malta Mirror, Natural, (47.25 Inch W x 3.5 Inch D x 47.25 Inch H) // Materials: Hapsala // Finish Code: 39, Finish Name: Natural HO // Set Up // CBM: 0.25 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70138-NU_001.jpg"
                        },
                        {
                            item: "JV-ABL401-BD",
                            qty: 40,
                            desc: "Abella Round Coffee Table, 34.25 Inch W, Blonde, (34.25 Inch W x 34.25 Inch D x 16.5 Inch H) // Materials: Banana Small Natural, Mungur Wood // Finish Code: 1-97, Finish Name: Banana Natural & White Patina // CBM: 0.42 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-ABL401-BD_001.jpg"
                        },
                        {
                            item: "JV-CR401-BD",
                            qty: 40,
                            desc: "Cypress Cocktail Table, 35.5 Inch W, Blonde, (35.5 Inch W x 35.5 Inch D x 17.75 Inch H) // Materials: Banana Small Natural Lamination, Mungur Wood // Finish Code: 1-143, Finish Name: Banana Natural & Peanut Brown W/O Brush // Partial KD // CBM: 0.51 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-CR401-BD_001.jpg"
                        },
                        {
                            item: "OR-RL301-NU",
                            qty: 30,
                            desc: "Roell Teak Top Side Table with Natural Root Base, Light Natural, (20.5 Inch W x 20.5 Inch D x 20.5 Inch H) // Materials: Teakwood - Driftwood // Finish Code: 39, Finish Name: Natural HO // Set Up // CBM: 0.195 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OR-RL301-NU_001.jpg"
                        },
                        {
                            item: "ST-70116-BK",
                            qty: 20,
                            desc: "Organic Petrified Wood Top Accent Table, with Hourglass base, 12 Inch W, Black (12x12x21) // Material: Top : Petrified Wood (Black) Base : Suar Wood (Black) // Finish: Black - Black // Box Craft 200mm,Protect Styrofoam",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70116-BK_001.jpg"
                        },
                        {
                            item: "ST-70293-L-NT",
                            qty: 25,
                            desc: "Nerina Raffia Round Side Table, Natural (16W Inch  x 16D Inch  x 19H Inch ) // Materials: Rafia, Plywood (at top) Gamelina Wood (Base) // Finish Code: 1-143, Finish Name: Natural - Peanut Brown w/o Brush // Set Up // CBM: 0.1361 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***SOFFA COMPLIANCE REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70293-L-NT_001.jpg"
                        },
                        {
                            item: "ST-70321-WH",
                            qty: 20,
                            desc: "Solana Round Capiz Side Table, 16 Inch W,  White, (16 Inch W x 16 Inch D x 20 Inch H) // Materials: Capiz, Acacia Wood // Finish Code: 17, Finish Name: White // Set Up  // CBM: 0.13 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70321-WH_001.jpg"
                        },
                        {
                            item: "ST-70768-BD",
                            qty: 60,
                            desc: "Cypress Accent Table, 14 Inch W, Blonde, (14 Inch W x 14 Inch D x 20 Inch H) // Materials: Banana Small Natural, Mungur Wood // Finish Code: 1-143, Finish Name: Banana Natural & Peanut Brown W/O Brush // Set Up // CBM: 0.1 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70768-BD_001.jpg"
                        },
                        {
                            item: "TT-ST-70659-NT",
                            qty: 50,
                            desc: "Riley Twist Wooden Side Table (11.81x11.81x23.62)   //  Material: Munggur Wood    //  CBM: 0.098  //  Packaging: Box  Kraft #150 + Protect Box Styrofoam PE 2cm (elbow shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-ST-70659-NT_001.jpg"
                        }
                    ]
                },
                "JW 2601-27N": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-05-11",
                    items: [
                        {
                            item: "AM-70353-NT",
                            qty: 15,
                            desc: "Knotted Natural Fiber Rectangular Mirror, Natural, (27.25 Inch W x 2.5 Inch D x 40.75 Inch H) // Materials: Banana Small Natural // Finish Code: 1, Finish Name: Natural // Set Up // CBM: 0.12 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70353-NT_001.jpg"
                        },
                        {
                            item: "AM-70640-NT",
                            qty: 40,
                            desc: "Shine Woven Wave Frame Mirror, Natural, (35 Inch W x 3.5 Inch D x 35 Inch D) // Materials: Banana Small Natural // Finish Code: 1, Finish Name: Natural // Set Up // CBM: 0.11 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70640-NT_001.jpg"
                        },
                        {
                            item: "CT-70090-1-WP",
                            qty: 35,
                            desc: "J1381-CN3A-PJW // New Hampton Round Coconut Shell Pedestal Coffee Table, White Patina (32W Inch  x 32D Inch  x 16H Inch ) // // Materials: Coconut-Teak Wood // Finish Code: CN-3A-57, Finish Name: Tabletop: White Patina / Base: Walnut Brown // KD // CBM: 0.183 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70090-1-WP_001.jpg"
                        },
                        {
                            item: "JV-FR205-BD",
                            qty: 38,
                            desc: "Francis Double Bench, Blonde (56.75W Inch  x 17D Inch  x 22H Inch ) // Fabric Type: Polyester, Fabric Code from Vendor: Mascoto, Fabric Content %: 100% Polyester, Fill Material on Upholstered Items only: Foam // Materials: Banana Natural, Gamelina Wood // Finish Code: 142-143, Finish Name: Natural Blonde - Peanut Brown w/o Brush // Partial KD // CBM: 0.348 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** // ***SOFFA COMPLIANCE REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-FR205-BD_001"
                        },
                        {
                            item: "JV-OR405-IV",
                            qty: 30,
                            desc: "Orinda Side Table with Wood Top, Ivory, (19.75 Inch W x 19.75 Inch D x 19.75 Inch H) // // Materials: Rattan Kor - Mungur Wood // Finish Code: 9, Finish Name: White Ivory // Set Up // CBM: 0.179 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-OR405-IV_001.jpg"
                        },
                        {
                            item: "OC-70282-WW",
                            qty: 15,
                            desc: "Roell Teak Top Console Table with Natural Root Base, Whitewash, (55 Inch W x 16 Inch D x 30 Inch H) // Materials: Teak Wood , Teak Branch // Finish Code: 4, Finish Name: White Wash // Set Up // CBM: 0.57 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OC-70282-WW_001.jpg"
                        },
                        {
                            item: "ST-70439-BD",
                            qty: 30,
                            desc: "Belmont Woven Vase Side Table, Blonde, (19.75 Inch  Inch W x 19.75 Inch D x 23.25 Inch  Inch H) // // Materials: Banana, Rattan, Wood // Finish Code: 1, Finish Name: Natural // Set Up // CBM: 0.21 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** ",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70439-BD_001.jpg"
                        },
                        {
                            item: "ST-70883-BD",
                            qty: 20,
                            desc: "Tropical Round Side Table With Storage, Blonde (18W Inch x 18D Inch x 20H Inch) _ Materials: Banana Natural, Gamelina Wood, Gunny Sack _ Finish Code: 142-143, Finish Name: Natural Blonde - Peanut Brown w/o Brush _ Set Up _ CBM: 0.170_ Number of Shipping Boxes: 1 _ *** DROPSHIP PACKAGING REQUIRED *** _ *** ISTA 3A PACKAGING REQUIRED *** ",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70883-BD_001.jpg"
                        },
                        {
                            item: "TT-CT-211-BD",
                            qty: 30,
                            desc: "Tropical Coffee Table With Storage, Blonde (48W Inch  x 30D Inch  x 18H Inch ) // Materials: Banana Natural, Gamelina Wood (Base), Teak Wood (Feet), Gunny Sack // Finish Codes & Names: 142 Natural Blonde (Banana Natural), 143 Peanut Brown W/O Brush (Gamelina and Teak Woods), 1 Natural (Gunny Sack), // Partial KD (Feet) // CBM: 0.446 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-211-BD_001.jpg"
                        }
                    ]
                },
                "JW 2602-01N": {
                    Vendor: "V69 Dollar Furniture",
                    ecrd: "2026-06-16",
                    items: [
                        {
                            item: "DF-PR107",
                            qty: 140,
                            desc: "Promenade Antique Counter Stool (13.78x13.78x24.02)   //  Material: Mindi Wood  //  CBM: 0.1126  //  Packaging: Carton box K#200+Protcetion / Protection Styrofoam 2cm     //  Master Carton: N - 1 pcs/box",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DF-PR107_001.jpg"
                        },
                        {
                            item: "DF-PR304-BR",
                            qty: 30,
                            desc: "Promenade Console with Shelf, 47.25 Inch W, KD, Brown, (47.25 Inch W x 13.75 Inch D x 31.5 Inch H) // // Materials: Mindi Wood // Finish Code: BRVI, Finish Name: Brown Vintage // KD // CBM: 0.2092 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DF-PR304-BR_001.jpg"
                        },
                        {
                            item: "DF-PR306",
                            qty: 10,
                            desc: "Promenade Three Door Shutter Sideboard (47.24x15.75x39.37)   //  Material: Mindi Wood  //  Color: Old Look  //  CBM: 0.6144  //  Packaging: Carton box K#200+Protcetion / Protection Styrofoam 2cm      //  Master Carton: N - 1 pcs/box",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DF-PR306_001.jpg"
                        },
                        {
                            item: "DF-PR511",
                            qty: 65,
                            desc: "Promenade Side Table with Drawer and Shelf (17.72x12.99x25.59)   //  Material: Mindi Wood  //  Color: Old Look  //  CBM: 0.1412  //  Packaging:  Inch Drop ship packaging Inch  required  Carton box K#200+Protection / Protection Styrofoam 2cm      //  Master Carton: N - 1 pcs/box",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DF-PR511_001.jpg"
                        },
                        {
                            item: "DF-PR512",
                            qty: 15,
                            desc: "Promenade Tall Bookcase, 20x14x71 (19.69x13.78x70.87)   //  Material: Mindi Wood  //  Color: Old Look  //  CBM: 0.4271  //  Packaging: Carton box K#200+Protcetion / Protection Styrofoam 2cm      //  Master Carton: N - 1 pcs/box",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DF-PR512_001.jpg"
                        },
                        {
                            item: "DF-PRV504",
                            qty: 14,
                            desc: "Promenade Tall Bookcase, 47x18x71 (47.24x17.72x70.87)   //  Material: Mindi Wood  //  Color: Old Look  //  CBM: 1.1952  //  Packaging: Carton box K#200+Protcetion / Protection Styrofoam 2cm      //  Master Carton: N - 1 pcs/box",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DF-PRV504_001.jpg"
                        },
                        {
                            item: "ST-69299-LN",
                            qty: 35,
                            desc: "Adair Bobbin Leg Side Table, 13.75 Inch W, Light Natural, (13.75 Inch W x 13.75 Inch D x 19.75 Inch H) // // Materials: Top : MDF Plywood Legs : Mindi Wood // Finish Code: LN, Finish Name: Light Natural // Set Up // CBM: 0.1215 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-69299-LN_001.jpg"
                        }
                    ]
                },
                "JW 2602-02N": {
                    Vendor: "V73 Infinite Rattan Creation, CV",
                    ecrd: "2026-05-12",
                    items: [
                        {
                            item: "AM-73369-NT",
                            qty: 10,
                            desc: "Bonnie Rattan Scallop Frame Floor Length Mirror, 78.75 Inch H, Natural, (40 Inch W x 2.5 Inch D x 79 Inch H) // Materials: Mahogany Wood, Plywood, Rattan Fitrit, Mirror // Finish Code: JFN SC NAT, Finish Name: Natural // // CBM: 0.344 // Number of Shipping Boxes: 1 // ***ANTI TIP KIT REQUIRED***//***DROPSHIP PACKAGING REQUIRED*** /",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-73369-NT_001.jpg"
                        },
                        {
                            item: "AM-73678-BL",
                            qty: 20,
                            desc: "Arbor Rattan Abstract Leaf Mirror, Blue (31.5W Inch  x 2D Inch  x 43H Inch ) // Materials: Rattan Pole, Plywood // Finish Code: JFN BLU 01, Finish Name: Blue // Set Up // CBM: 0.132327 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-73678-BL_001.jpg"
                        },
                        {
                            item: "DF-DH106",
                            qty: 50,
                            desc: "Durham Rattan Counterstool (18 x 21 x 35.5)   //  Material: 0  //  CBM: 0.247  //  Packaging: EMPTY BOX  //  Master Carton: 1 PC  //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DF-DH106_001.jpg"
                        },
                        {
                            item: "HB-KD101-T-GN",
                            qty: 20,
                            desc: "Lattice Twin Headboard, Green, (41.5 Inch W x 2 Inch D x 52 Inch H) // Materials: Mahogany Wood, Rattan // Finish Code: JFN GRN 01, Finish Name: Green // KD // CBM: 0.169048 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/HB-KD101-T-GN_001.jpg"
                        },
                        {
                            item: "HB-KD101-T-NV",
                            qty: 20,
                            desc: "Lattice Twin Headboard, Navy, (41.5 Inch W x 2 Inch D x 52 Inch H) // Materials: Mahogany Wood, Rattan // Finish Code: JFN-NVY01, Finish Name: NAVY // KD // CBM: 0.169048 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/HB-KD101-T-NV_001.jpg"
                        },
                        {
                            item: "HB-KD101-T-WH",
                            qty: 18,
                            desc: "Lattice Twin Headboard, White, (41.5 Inch W x 2 Inch D x 52 Inch H) // Materials: Mahogany Wood, Rattan // Finish Code: JFN WHT 01, Finish Name: White // KD // CBM: 0.169048 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/HB-KD101-T-WH_001.jpg"
                        },
                        {
                            item: "HB-KD404-FQ-GN",
                            qty: 15,
                            desc: "Lattice Full/Queen Headboard, Green, (64.25 Inch W x 2 Inch D x 52 Inch H) // Materials: Mahogany Wood, Rattan // Finish Code: JFN GRN 01, Finish Name: Green // KD // CBM: 0.255816 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/HB-KD404-FQ-GN_001.jpg"
                        },
                        {
                            item: "SB-73105-WH",
                            qty: 15,
                            desc: "Hampton Chippendale Barstool (19.75 x 21 x 45)   //  Material: 0  //  CBM: 0.363  //  Packaging: EMPTY BOX  //  Master Carton: 1 PC  //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-73105-WH_001.jpg"
                        },
                        {
                            item: "SB-73106-BL",
                            qty: 20,
                            desc: "Hampton Chippendale Counterstool, 39.25 Inch H, Blue, (19.75 Inch W x 20.5 Inch D x 39.25 Inch H) // Fabric Type: Polyester, Fabric Code from Vendor: Snow White, Fabric Content %: 100% Polyester, Fill Material on Upholstered Items only: Foam // Finish Code: JFN BLU 02, Finish Name: Blue // Set Up // CBM: 0.367 // Number of Shipping Boxes: 1 // // // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-73106-BL_001.jpg"
                        },
                        {
                            item: "SB-73106-GW",
                            qty: 30,
                            desc: "Hampton Chippendale Counterstool, 39.25 Inch H, Grey Wash, (19.75 Inch W x 20.5 Inch D x 39.25 Inch H)   //  Material: 0  //  CBM: 0.314  //  Packaging: EMPTY BOX  //  Master Carton: 1 PC  //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-73106-GW_001.jpg"
                        },
                        {
                            item: "SB-73106-WH",
                            qty: 35,
                            desc: "Hampton Chippendale Counter Stool, 39.25 Inch H, White, (19.75 Inch W x 20.5 Inch D x 39.25 Inch H)   //  Material: 0  //  CBM: 0.314  //  Packaging: EMPTY BOX  //  Master Carton: 1 PC  //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-73106-WH_001.jpg"
                        }
                    ]
                },
                "JW 2602-03N": {
                    Vendor: "V58 Kharisma Rotan Mandiri",
                    ecrd: "2026-04-28",
                    items: [
                        {
                            item: "DC-5801-GN",
                            qty: 25,
                            desc: "Winston II Rattan Dining Chair, Set Of 2, 35 Inch H, Green 21.25 x 22.50 x 35, // Fabric Type: Cotton, Fabric Code: CTNWC, Fabric Content: 100% Cotton, Fill Material: Polyurethane Foam // Finish Code: GN, Finish Name: GREEN // Set Up // CBM: 0.324 // Number of Shipping Boxes: 1 // // Container Packed Via: Bulk Packed ***Boxes and Packaging Included*** // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC-5801-GN_001.jpg"
                        },
                        {
                            item: "DC-5801-MBR",
                            qty: 30,
                            desc: "Winston II Rattan Dining Chair, Set Of 2, 35 Inch H, Medium Brown (21.25W Inch  x 22.5D Inch  x 35H Inch ) // // Materials: Rattan Semi Poles & Core // Finish Code: MBR, Finish Name: Medium Brown // Set Up // CBM: 0.207 // Number of Shipping Boxes: 1 // Container Packed Via: Stacked Single Wall Wrapped with Cartons Included. ***Must Include Cartons In Container*** // ***SOFFA COMPLIANCE REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC-5801-MBR_001.jpg"
                        },
                        {
                            item: "DC-5801-NV",
                            qty: 30,
                            desc: "Winston II Rattan Dining Chair, Set Of 2, 35 Inch H, Navy, (21.25 Inch W x 22.5 Inch D x 35 Inch H) // Finish Code: 21.25 x22.5 x35, Finish Name: // // CBM: Polyurethane Foam // Number of Shipping Boxes: //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC-5801-NV_001.jpg"
                        },
                        {
                            item: "DC-5801-RTBL",
                            qty: 35,
                            desc: "Winston II Rattan Dining Chair, Set Of 2 - (21.25 Inch W x 22.50 Inch D x 35 Inch H) // Material: Frame : Rattan Pole, Decore into Rattan Core // Finish: Blue Grey // ***ISTA 3A Packaging Required***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC-5801-RTBL_001.jpg"
                        },
                        {
                            item: "DC-5801-RTNT",
                            qty: 20,
                            desc: "Winston II Rattan Dining Chair, Set Of 2 - (21.25 Inch W x 22.50 Inch D x 35 Inch H) // Material: Frame : Rattan Pole, Decore into Rattan Core // Finish: Grey Bistro",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC-5801-RTNT_001.jpg"
                        },
                        {
                            item: "DC-5801-WH",
                            qty: 20,
                            desc: "Winston II Rattan Dining Chair, Set Of 2, 35 Inch H, White 21.25 x 22.50 x 35, // Fabric Type: Cotton, Fabric Code: CTNWC, Fabric Content: 100% Cotton, Fill Material: Polyurethane Foam // Finish Code: WH, Finish Name: SOLID WHITE // Set Up // CBM: 0.324 // Number of Shipping Boxes: 1 // // Container Packed Via: Bulk Packed ***Boxes and Packaging Included*** // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC-5801-WH_001.jpg"
                        },
                        {
                            item: "ST-58355-BL",
                            qty: 30,
                            desc: "Bonnie Rattan Woven Fabric Illusion Side Table, Blue 24x24x21.5, // Fabric Type: , Fabric Code: , Fabric Content: , Fill Material: // Finish Code: BG, Finish Name: BLUE GREY // Set Up // CBM: 0.25 // Number of Shipping Boxes: 1 // // // ***DROPSHIP PACKAGING REQUIRED*** FALSE***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-58355-BL_001.jpg"
                        }
                    ]
                },
                "JW 2602-04N": {
                    Vendor: "V58 Kharisma Rotan Mandiri",
                    ecrd: "2026-05-15",
                    items: [
                        {
                            item: "BN-58691-BL",
                            qty: 15,
                            desc: "Winston Rattan Stool With Woven Seat, Blue/Natural (21.25W Inch x 16.5D Inch x 19.25H Inch ) // // Materials: Rattan Pole, Rattan Pitrit // Finish Code: N-BL, Finish Name: Blue Grey - Natural // Set Up // CBM: 0.101 // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/BN-58691-BL_001.JPG"
                        },
                        {
                            item: "BN-58747-AN",
                            qty: 20,
                            desc: "Baylin Rattan Bench With Woven Banana Leaf Seat, Antique Natural (59W Inch x 15.75D Inch x 19.25H Inch ) // // Materials: Rattan Pole - Banana Leaf // Finish Code: LGB, Finish Name: Light grey Bistro // Set Up // CBM: 0.2765 // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/BN-58747-AN_001.JPG"
                        },
                        {
                            item: "OC-5801-RTBL",
                            qty: 20,
                            desc: "Winston II Rattan Arm Chair - (24 Inch W x 25.50 Inch D x 39.25 Inch H) // Material: Frame : Rattan Pole, Decore into Rattan Core // Finish: Blue Grey // ***ISTA 3A Packaging Required***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OC-5801-RTBL_001.JPG"
                        },
                        {
                            item: "OC-5801-RTNT",
                            qty: 20,
                            desc: "Winston II Rattan Arm Chair - (24 Inch W x 25.50 Inch D x 39.25 Inch H) // Material: Frame : Rattan Pole, Decore into Rattan Core // Finish: Grey Bistro",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OC-5801-RTNT_001.jpeg"
                        },
                        {
                            item: "OC-5822-GN",
                            qty: 20,
                            desc: "Winston II Rattan Arm Chair - (24 Inch W x 25.50 Inch D x 39.25 Inch H) // Fabric Type: Cotton, Fabric Code: CTNWC, Fabric Content: 100% Cotton, Fill Material: Polyurethane Foam // Finish Code: GN, Finish Name: GREEN // Set Up // CBM: 0.253 // Number of Shipping Boxes: 1 // // Container Packed Via: Bulk Packed ***Boxes and Packaging Included*** // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OC-5822-GN_001.jpg"
                        },
                        {
                            item: "OC-5822-MBR",
                            qty: 30,
                            desc: "Winston II Rattan Arm Chair, 39 Inch H, Medium Brown (24x 25.5 x 39.25) // // Materials: Rattan Semi Poles & Core // Finish Code: MBR, Finish Name: Medium Brown // Set Up // CBM: 0.302 // Number of Shipping Boxes: 1 // Container Packed Via: Stacked Single Wall Wrapped with Cartons Included. ***Must Include Cartons In Container*** // ***SOFFA COMPLIANCE REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OC-5822-MBR_001.jpg"
                        },
                        {
                            item: "OC-5822-NV",
                            qty: 35,
                            desc: "Winston II Rattan Arm Chair, Navy (24 Inch W x 25.5 Inch D x 39.25 Inch H) // Fabric Type: Cotton, Fabric Code: CTNWC, Fabric Content: 100% Cotton, Fill Material: Polyurethane Foam // Finish Code: COR, Finish Name: CORAL // Set Up // CBM: 0.253 // Number of Shipping Boxes: 1 // // Container Packed Via: Bulk Packed ***Boxes and Packaging Included*** // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OC-5822-NV_001.jpg"
                        },
                        {
                            item: "OC-5822-WH",
                            qty: 15,
                            desc: "Winston II Rattan Arm Chair - (24 Inch W x 25.50 Inch D x 39.25 Inch H) // Fabric Type: Cotton, Fabric Code: CTNWC, Fabric Content: 100% Cotton, Fill Material: Polyurethane Foam // Finish Code: WH, Finish Name: SOLID WHITE // Set Up // CBM: 0.253 // Number of Shipping Boxes: 1 // // Container Packed Via: Bulk Packed ***Boxes and Packaging Included*** // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OC-5822-WH_001?fcts=20240905043328"
                        },
                        {
                            item: "ST-58889-SB",
                            qty: 20,
                            desc: "Millie Rattan Woven Side Table, 19.5 Inch Inch Round, Slate Blue (19.5W Inch x 19.5D Inch x 23H Inch ) // // Materials: Rattan Pitrit, Rattan Semi Pole // Finish Code: MB, Finish Name: Moody Blue // Set Up // CBM: 0.166 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-58889-SB_001.jpg"
                        },
                        {
                            item: "ST-58889-WW",
                            qty: 30,
                            desc: "Millie Rattan Woven Side Table, 19.5 Inch Inch Round, Whitewash (19.5W Inch x 19.5D Inch x 23H Inch ) // // Materials: Rattan Pitrit, Rattan Semi Pole // Finish Code: WW, Finish Name: Snowbound whitewash // Set Up // CBM: 0.166 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-58889-WW_001.JPG"
                        },
                        {
                            item: "WR-WS105",
                            qty: 15,
                            desc: "Winston Rattan High Back Arm Chair, Antique Brown, (24 Inch W x 27 Inch D x 43 Inch H) // Material/Color: Rattan/Us Antique..Cushion : White Canvas Seat+Back Pillow (18x16)..CBM:0.384..Packing : Single wall L shape +Empty Box for 1pc / Box..(K#200+Styrofoam Protection 2cm) Dropship Approved",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/WR-WS105_001.jpg"
                        },
                        {
                            item: "WR-WS105-BM",
                            qty: 20,
                            desc: "Winston Rattan High Back Arm Chair -Solid Black ..Material/Color : Rattan/Solid Black..Cushion : White Canvas + Back Pillow 18x16 Inch ..CBM: 0.480..Packing : Single wall L shape +Empty Box for 1pc / Box..(K#200+Styrofoam Protection 2cm) Dropship Approved",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/WR-WS105-BM_001.jpg"
                        }
                    ]
                },
                "JW 2602-05N": {
                    Vendor: "V58 Kharisma Rotan Mandiri",
                    ecrd: "2026-05-22",
                    items: [
                        {
                            item: "BC-58101-BK",
                            qty: 15,
                            desc: "Wren Rattan Barcart, Black 27x17x32..Material/Color: Rattan semi poles/Golden Black..CBM: 0.325..Packing: Box kraft 200 + Protection..",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/BC-58101-BK_001.jpg"
                        },
                        {
                            item: "BN-58691-BL",
                            qty: 15,
                            desc: "Winston Rattan Stool With Woven Seat, Blue/Natural (21.25W Inch x 16.5D Inch x 19.25H Inch ) // // Materials: Rattan Pole, Rattan Pitrit // Finish Code: N-BL, Finish Name: Blue Grey - Natural // Set Up // CBM: 0.101 // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/BN-58691-BL_001.JPG"
                        },
                        {
                            item: "BN-58691-NV",
                            qty: 25,
                            desc: "Winston Rattan Stool With Woven Seat, Navy/Antique Natural (21.25W Inch x 16.5D Inch x 19.25H Inch ) // // Materials: Rattan Pole, Rattan Pitrit // Finish Code: NV-LGB, Finish Name: Navy - Light grey Bistro // Set Up // CBM: 0.101 // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/BN-58691-NV_001.jpg"
                        },
                        {
                            item: "CS-5834-AN",
                            qty: 25,
                            desc: "Winston II Rattan Counterstool, 37 Inch H, Antique Natural, (21.25 Inch W x 20.75 Inch D x 37 Inch H) // Fabric Type: Cotton, Fabric Code from Vendor: CTN, Fabric Content %: Cotton 100%, Fill Material on Upholstered Items only: Polyurethane Foam // Finish Code: GB, Finish Name: GREY BISTRO // Set Up // CBM: 0.2534 // Number of Shipping Boxes: 1 // Container Packed Via: Bulk Shipped ***Must Include Shipping Materials And Shipping Cartons In Container*** // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CS-5834-AN_001.jpg"
                        },
                        {
                            item: "CS-5834-BR",
                            qty: 20,
                            desc: "Winston II Rattan Counterstool, 37 Inch H, Antique Brown, (21.25 Inch W x 20.75 Inch D x 37 Inch H) // Fabric Type: Cotton, Fabric Code from Vendor: CTN, Fabric Content %: Cotton 100%, Fill Material on Upholstered Items only: Polyurethane Foam // Finish Code: US, Finish Name: US ANTIQUE // Set Up // CBM: 0.2534 // Number of Shipping Boxes: 1 // Container Packed Via: Bulk Shipped ***Must Include Shipping Materials And Shipping Cartons In Container*** // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CS-5834-BR_001.JPG"
                        },
                        {
                            item: "CS-5834-NV",
                            qty: 20,
                            desc: "Winston II Rattan Counterstool, 37 Inch H, Navy, (21.25 Inch W x 20.75 Inch D x 37 Inch H) // Fabric Type: Cotton, Fabric Code from Vendor: CTN, Fabric Content %: Cotton 100%, Fill Material on Upholstered Items only: Polyurethane Foam // Finish Code: NV, Finish Name: NAVY BLUE // Set Up // CBM: 0.2534 // Number of Shipping Boxes: 1 // Container Packed Via: Bulk Shipped ***Must Include Shipping Materials And Shipping Cartons In Container*** // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CS-5834-NV_001.jpg"
                        },
                        {
                            item: "DC-5801-RTNT",
                            qty: 30,
                            desc: "Winston II Rattan Dining Chair, Set Of 2 - (21.25 Inch W x 22.50 Inch D x 35 Inch H) // Material: Frame : Rattan Pole, Decore into Rattan Core // Finish: Grey Bistro",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC-5801-RTNT_001.jpg"
                        },
                        {
                            item: "DC-58225-OG",
                            qty: 30,
                            desc: "Hampton Chippendale Rattan Barrel Chair, 33.5 Inch H, Olive Green (23.5W Inch x 24D Inch x 33.5H Inch ) // Fabric Type: Cotton, Fabric Code from Vendor: CTN03, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam // Materials: Rattan Semi pole, Rattan Core // Finish Code: AG, Finish Name: Artichoke Green // Set Up // CBM: 0.2703 // ***SOFFA COMPLIANCE REQUIRED*** // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC-58225-OG_001.jpg"
                        },
                        {
                            item: "DC-58225-OW",
                            qty: 10,
                            desc: "Hampton Chippendale Rattan Barrel Chair, 33.5 Inch H, Off-White (23.5W Inch x 24D Inch x 33.5H Inch ) // Fabric Type: Cotton, Fabric Code from Vendor: CTN01, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam // Materials: Rattan Semi pole, Rattan Core // Finish Code: WHSB, Finish Name: White Snowbound // Set Up // CBM: 0.2703 // ***SOFFA COMPLIANCE REQUIRED*** // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC-58225-OW_001.jpg"
                        },
                        {
                            item: "DC-58225-SB",
                            qty: 30,
                            desc: "Hampton Chippendale Rattan Barrel Chair, 33.5 Inch H, Slate Blue (23.5W Inch x 24D Inch x 33.5H Inch ) // Fabric Type: Cotton, Fabric Code from Vendor: CTN02, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam // Materials: Rattan Semi pole, Rattan Core // Finish Code: MB, Finish Name: Moody Blue // Set Up // CBM: 0.2703 // ***SOFFA COMPLIANCE REQUIRED*** // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC-58225-SB_001.jpg"
                        },
                        {
                            item: "DC-58995-WW",
                            qty: 20,
                            desc: "Eloise Rattan Weave Rounded Arm Chair, Whitewash (24W Inch x 24D Inch x 33H Inch ) // Fabric Type: Cotton, Fabric Code from Vendor: CTN01, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam // Materials: Rattan Pole, Rattan Pitrit // Finish Code: SB-WW, Finish Name: Snowbound White Wash // Set Up // CBM: 0.303 // ***SOFFA COMPLIANCE REQUIRED*** // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC-58995-WW_001.JPG"
                        },
                        {
                            item: "SB-58106-SB",
                            qty: 25,
                            desc: "Maples Counterstool with Upholstered Seat, Slate Blue (20W Inch x 21.5D Inch x 37.5H Inch ) // Fabric Type: Cotton, Fabric Code from Vendor: CTN04, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam // Materials: Rattan Semi Pole, Rattan Peel // Finish Code: MB, Finish Name: Moody Blue // Set Up // CBM: 0.2645 // ***SOFFA COMPLIANCE REQUIRED*** // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-58106-SB_001.jpg"
                        }
                    ]
                },
                "JW 2602-07": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-06-10",
                    items: [
                        {
                            item: "AD-70911-SET",
                            qty: 12,
                            desc: "Gaia Round Woven Wall Basket Set (35.43x4.724x35.43) // Material: Waterhyacinth; Agel // CBM: 0.19 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm for a circle shape ( L ) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AD-70911-SET_001.jpg"
                        },
                        {
                            item: "AM-70138-BL",
                            qty: 20,
                            desc: "Malta Mirror, Black (47.24x3.543x47.24) // Material: Branch Teak // CBM: 0.164 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Styrofoam 100x200x2 + wrap paper/kg wide 120 // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70138-BL_001.jpg"
                        },
                        {
                            item: "AM-70138-WH",
                            qty: 15,
                            desc: "Malta Mirror (49.21x3.543x49.21) // Material: Hapsalan // CBM: 0.265 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Styrofoam 100x200x2 + wrap paper/kg wide 120 // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70138-WH_001.jpg"
                        },
                        {
                            item: "AM-70231-NT",
                            qty: 12,
                            desc: "Abaca Small Natural, 3-4mm - Glass Mirror + Plywood",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70231-NT_001.jpg"
                        },
                        {
                            item: "AM-70604",
                            qty: 12,
                            desc: "Fulton Teak Mirror (26.77x1.456x78.74) // Material: Envi Thin // CBM: 0.202 // Packaging: Box Kraft #150 + Box SW (Pizza models) + Protect Box Styrofoam 2cm for Headboard 6cm + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Styrofoam 100x200x2 + wrap paper/kg wide 120 + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70604_001.jpg"
                        },
                        {
                            item: "AM-70607",
                            qty: 15,
                            desc: "Delmare Cross Hatch Leaning Mirror, Water Hyacinth (27.95x1.968x75.98) // Material: Water hyacinth // CBM: 0.196 // Packaging: Box Kraft #150 + Box SW (Pizza models) + Protect Box Styrofoam 2cm for shape Mirror (U shape) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70607_001.jpg"
                        },
                        {
                            item: "AM-70806-NT",
                            qty: 20,
                            desc: "Cade Angled Brush Edge Braided Seagrass Mirror (30X30X0.6) // Material: Mendong, Glass, Plywood, Metal // CBM: 0.057 // Packaging: Craft#200 Pizza Box models with corner protection +Cork Protect Box 2cm for Circle shape (L) // MOQ: 25 // ***Dropship Packaging Required*** // ***INDIGO ROAD PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70806-NT_001.jpg"
                        },
                        {
                            item: "AM-70912-L",
                            qty: 15,
                            desc: "35 Inch Marina Round Rattan Mirror, White (35.43x3.543x35.43) // Material: Rattan; Sanded Peel // CBM: 0.176 // Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for Headboard (width in styrofoam and sw = 11cm) + Styrofoam 100x200x2 + Medium paper/kg (m2=0.2 kg) + wrap paper/kg wide 120 // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70912-L_001.jpg"
                        },
                        {
                            item: "AM-LE701",
                            qty: 25,
                            desc: "Live Edge 3D Mirror Solid Suar Wood Frame (21.65x1.968x24.01) // Material: Munggur Wood // CBM: 0.05 // Packaging: Box Kraft #150 + Box SW (stack cover) + Protect Box Styrofoam 2cm for Headboard 6cm + Single Face + wrap paper/kg wide 120 + Styrofoam 100x200x2 // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-LE701_001.jpg"
                        },
                        {
                            item: "CT-70111",
                            qty: 10,
                            desc: "Soren Braided Seagrass Coffee Table (35.43x35.43x17.71) // Material: Seagrass // CBM: 0.479 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70111_001.jpg"
                        },
                        {
                            item: "CT-70435",
                            qty: 25,
                            desc: "Fulton Storage Coffee Table (30.70x30.70x15.74) // Material: // CBM: 0.339 // Packaging: Box Kraft #200 + Box SW + Protect Box Styrofoam PE 2cm (elbow shape) + Protect Box Styrofoam PE 2cm (L shape) + Medium paper/kg (m2=0.2 kg) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70435_001.jpg"
                        },
                        {
                            item: "GD-70524",
                            qty: 10,
                            desc: "Fulton Sideboard, Two Door (47.24x15.74x35.43) // Material: Acacia Wood // CBM: 0.565 // Packaging: Box kraft #200 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + wrap paper/kg wide 120 // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/GD-70524_001.jpg"
                        },
                        {
                            item: "JV-AS504-RC",
                            qty: 25,
                            desc: "Aspen Rectangular Mirror - Natural (24x2x30) (25.19x2.244x31.10) // Material: Big Rope Woven; MDF // CBM: 0.084 // Packaging: Box Kraft #150 + Box SW model pizza + Protect Box Styrofoam PE 2cm (elbow shape) + wrap paper/kg wide 120 + Styrofoam 100x200x2 // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-AS504-RC_001.jpg"
                        },
                        {
                            item: "JV-AS504O-L",
                            qty: 20,
                            desc: "Aspen Round Mirror, Natural (31.10x2.244x31.10) // Material: Big Rope Woven // CBM: 0.101 // Packaging: Box Kraft #150 + Box SW (Pizza models) + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Protect Box Styrofoam 2cm (elbow shape) + wrap paper/kg wide 120 + Styrofoam 100x200x2 + Medium paper/kg (m2=0.2 kg) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-AS504O-L_001.jpg"
                        },
                        {
                            item: "JV-AS504O-S",
                            qty: 30,
                            desc: "Aspen Round Mirror (23.62x2.244x23.62) // Material: Big Rope Woven // CBM: 0.108 // Packaging: Box Kraft #150 + Box SW model pizza + Protect Box Styrofoam PE 2cm (elbow shape) + Protect Box Styrofoam PE 2cm (U shape) + Medium paper/kg (m2=0.2 kg) + wrap paper/kg wide 120 + Styrofoam 100x200x2 // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-AS504O-S_001.jpg"
                        },
                        {
                            item: "JV-CB605-WH",
                            qty: 20,
                            desc: "Cordova Counter Stool (17.32x17.32x23.62) // Material: Wood Frame; Coconut Chips // CBM: 0.155 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-CB605-WH_001.jpg"
                        },
                        {
                            item: "SB-70363-NT",
                            qty: 20,
                            desc: "20 Inch H X-Style Ottoman with Raffia, Cream (21.65x16.53x19.68) // Material: Rope; Mango Wood // CBM: 0.164 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-70363-NT_001.jpg"
                        },
                        {
                            item: "ST-70108-BK",
                            qty: 25,
                            desc: "Kayu Petrifed Wood Top Pedestal Accent Table, 20 Inch H, Black (12x12x20) // Material: Petrified Black Munggur // Finish: Black-Black // ***ISTA 3A Packaging Required*** // ***INDIGO ROAD PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70108-BK_001.jpg"
                        },
                        {
                            item: "ST-70435",
                            qty: 25,
                            desc: "Fulton Storage Side Table (19.68x19.68x23.22)   //  Material: Twig-Envi Thin    //  CBM: 0.207  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm (elbow shape) + Single Wall  wide 200 x 180  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70435_001.jpg"
                        },
                        {
                            item: "TT-AC-70376-L",
                            qty: 20,
                            desc: "11 Inch  Live Edge Teak Riser with Iron Base (19.68x19.68x11.02)   //  Material: Teakwood; Iron    //  CBM: 0.042  //  Packaging: Box Kraft #150 + Protect hat model for Liberte Round Side Table Big H = 10cm (Big) + Plastik Handywrap 150x10x0.02  //  Master Carton: Y , 1  //  ***DROPSHIP PACKAGING REQUIRED***  ******KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-AC-70376-L_001.jpg"
                        },
                        {
                            item: "TT-SY-GR303",
                            qty: 25,
                            desc: "Grayson Side Table (17.91x17.91x17.91)   //  Material:     //  CBM: 0.141  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-SY-GR303_001.jpg"
                        }
                    ]
                },
                "JW 2602-08": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-06-13",
                    items: [
                        {
                            item: "AC-70817",
                            qty: 60,
                            desc: "Maples Rattan and Bamboo Antique Basket (21.25x14.96x16.14) // Material: Rattan Half Polish; Bamboo; Sendi Peel // CBM: 0.124 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Medium paper/kg (m2=0.2 kg) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AC-70817_001.jpg"
                        },
                        {
                            item: "AM-70457-NT",
                            qty: 25,
                            desc: "35 Inch Knotted Natural Fiber Round Mirror (36.61x1.574x36.61) // Material: Abaca Natural Weaving knot // CBM: 0.114 // Packaging: Box Kraft #150 + Box SW (stack cover) + Protect Box Styrofoam 2cm for Headboard 6cm + Styrofoam 100x200x2 + wrap paper/kg wide 120 + Plastik Handywrap 150x10x0.02 // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70457-NT_001.jpg"
                        },
                        {
                            item: "AM-LE701-L-NT",
                            qty: 15,
                            desc: "Live Edge 3D Mirror Solid Suar Wood Frame, 30 Inch W, Natural, (30 Inch W x 2 Inch D x 30 Inch H) // Material: Munggur Wood, Finish Code: WS-221-AU DIVA, Finish Name: Natural // Set Up // CBM: 0.081 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-LE701-L-NT_001.jpg"
                        },
                        {
                            item: "CT-70611-NT",
                            qty: 70,
                            desc: "Abella Round Woven Banana Leaf Coffee Table, 28 Inch W, Natural 28.15 Inch W x 28.15 Inch D x 14.75”H // Fabric Type: N/A // Finish Name: Natural // Set Up // CBM: 0.267 // Number of Shipping Boxes: 1 // // // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70611-NT_001.jpg"
                        },
                        {
                            item: "JV-ABL401-BD",
                            qty: 25,
                            desc: "Abella Round Coffee Table, 34.25 Inch W, Blonde, (34.25 Inch W x 34.25 Inch D x 16.5 Inch H) // Materials: Banana Small Natural, Mungur Wood // Finish Code: 1-97, Finish Name: Banana Natural & White Patina // CBM: 0.42 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-ABL401-BD_001.jpg"
                        },
                        {
                            item: "JV-CR401-BD",
                            qty: 35,
                            desc: "Cypress Cocktail Table, 35.5 Inch W, Blonde, (35.5 Inch W x 35.5 Inch D x 17.75 Inch H) // Materials: Banana Small Natural Lamination, Mungur Wood // Finish Code: 1-143, Finish Name: Banana Natural & Peanut Brown W/O Brush // Partial KD // CBM: 0.51 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-CR401-BD_001.jpg"
                        },
                        {
                            item: "ST-70003-WH",
                            qty: 12,
                            desc: "Stacey Teak Two Door Sideboard, White Wash (40.15x11.81x35.82) // Material: Rattan Weave // CBM: 0.367 // Packaging: Box kraft #200 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Styrofoam 100x200x1 + wrap paper/kg wide 120 // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70003-WH_001.jpg"
                        },
                        {
                            item: "ST-70116-NT",
                            qty: 30,
                            desc: "Organic Petrified Wood Top Accent Table, with Hourglass base, 20 Inch H, Natural (12x12x20) // Material: Top : Petrified Wood (Cream) Base : Suar Wood (Natural) // Finish: Cream-Natural // Box Craft 200mm,Protect Styrofoam",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70116-NT_001.jpg"
                        }
                    ]
                },
                "JW 2602-09": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-06-18",
                    items: [
                        {
                            item: "AB-70804-NU",
                            qty: 25,
                            desc: "Crown Carved Wooden Bowl, 16 Inch W, Natural (16x16x6) // Material: Mungur // Finish: Natural HO //Box Craft 200mm, Protect Styrofoam",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AB-70804-NU_001.jpg"
                        },
                        {
                            item: "AB-70804-WH",
                            qty: 25,
                            desc: "Crown Carved Wooden Bowl, 16 Inch W, White (16x16x6) // Material: Mungur // Finish: New White Solid // Box Craft 200mm, Protect Styrofoam",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AB-70804-WH_001.jpg"
                        },
                        {
                            item: "AM-701639-WH",
                            qty: 15,
                            desc: "Rectangular Teak Branch Frame Mirror, 39 Inch H, White 26.18x2.75x39.37 // Fabric Type: N/A, Fabric Code: N/A, Fabric Content: N/A, Fill Material: N/A // Finish Name: White // Set Up // CBM: 0.1075 // Number of Shipping Boxes: 1 // // // ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-701639-WH_001.jpg"
                        },
                        {
                            item: "AM-70353-NT",
                            qty: 20,
                            desc: "Knotted Natural Fiber Rectangular Mirror, Natural, (27.25 Inch W x 2.5 Inch D x 40.75 Inch H) // Materials: Banana Small Natural // Finish Code: 1, Finish Name: Natural // Set Up // CBM: 0.12 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70353-NT_001.jpg"
                        },
                        {
                            item: "CT-70304-WH",
                            qty: 20,
                            desc: "Roell Teak Top Console Table with Natural Root Base (46.45x16.92x29.92) // Material: Teak Wood // CBM: 0.46 // Packaging: Box Kraft #150 + Protect Box Styrofoam PE 2cm (elbow shape) + Protect Box Styrofoam PE 2cm (L shape) + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70304-WH_001.jpg"
                        },
                        {
                            item: "CT-70600-NT",
                            qty: 25,
                            desc: "Abella Rectangular Storage Coffee Table, 38 Inch W, Natural 37.60x19.68x17.71 // Fabric Type: N/A, Fabric Code: N/A, Fabric Content: N/A, Fill Material: N/A // Finish Name: Natural // Partial KD // CBM: 0.2659 // Number of Shipping Boxes: 1 // // // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70600-NT_001.jpg"
                        },
                        {
                            item: "SD-70236",
                            qty: 30,
                            desc: "Bayside Arm Chair With An Argyle Patterned Back (22.04x22.83x38.97) // Material: Slimit // CBM: 0.411 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SD-70236_001.jpg"
                        },
                        {
                            item: "SY-MR401-BD",
                            qty: 25,
                            desc: "Marina Abaca Double Bench with Storage, 40.2 Inch W, Blonde, (40.2 Inch W x 14.2 Inch D x 17.7 Inch H) // Materials: Banana Small Natural, Mungur Wood // Finish Code: 1-97, Finish Name: Banana Natural & White Patina // CBM: 0.23 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SY-MR401-BD_001.jpg"
                        },
                        {
                            item: "TT-CT-211",
                            qty: 30,
                            desc: "Tropical Coffee Table Abaca Small Astor with Storage (48.03x30.31x18.11)   //  Material:     //  CBM: 0.446  //  Packaging: Box Kraft#150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-CT-211_001.jpg"
                        },
                        {
                            item: "TT-ST-70659-NT",
                            qty: 120,
                            desc: "Riley Twist Wooden Side Table (11.81x11.81x23.62)   //  Material: Munggur Wood    //  CBM: 0.098  //  Packaging: Box  Kraft #150 + Protect Box Styrofoam PE 2cm (elbow shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-ST-70659-NT_001.jpg"
                        }
                    ]
                },
                "JW 2602-10N": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-06-22",
                    items: [
                        {
                            item: "AB-70889-NT",
                            qty: 30,
                            desc: "Organic Teak Wood Carved Bowl, 24 Inch W, Natural, (24 Inch W x 24 Inch D x 6 Inch H) // // Materials: Teak Wood // Finish Code: 39, Finish Name: HO Natural // // CBM: 0.054 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AB-70889-NT_001.jpg"
                        },
                        {
                            item: "AM-70138-NU",
                            qty: 15,
                            desc: "Malta Mirror, Natural, (47.25 Inch W x 3.5 Inch D x 47.25 Inch H) // Materials: Hapsala // Finish Code: 39, Finish Name: Natural HO // Set Up // CBM: 0.25 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70138-NU_001.jpg"
                        },
                        {
                            item: "AM-70640-NT",
                            qty: 40,
                            desc: "Shine Woven Wave Frame Mirror, Natural, (35 Inch W x 3.5 Inch D x 35 Inch D) // Materials: Banana Small Natural // Finish Code: 1, Finish Name: Natural // Set Up // CBM: 0.11 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70640-NT_001.jpg"
                        },
                        {
                            item: "AT2-70278-WH",
                            qty: 25,
                            desc: "Marina Rattan Tray, Set of 2, White/Natural, (23.5 Inch W x 23.5 Inch D x 2 Inch H, 17.75 Inch W x 17.75 Inch D x 2 Inch H) // // Materials: Natural Rattan // Finish Code: 1-17, Finish Name: Natural - White // Set Up // CBM: 0.08 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AT2-70278-WH_001.jpg"
                        },
                        {
                            item: "AV2-70745-BD",
                            qty: 20,
                            desc: "Torin Rattan Vases, Set of 2, Blonde (21.5 Inch W x 21.5 Inch D x 22.5 Inch H Inch  x 13.25 Inch W x 13.25 Inch D x 17 Inch H) // Materials: Banana Natural // Finish Code: 1, Finish Name: Natural // Set Up // CBM: 0.22 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AV2-70745-BD_001.jpg"
                        },
                        {
                            item: "AW-70635-BD",
                            qty: 20,
                            desc: "Shine Wall Art, Blonde, (18.25 Inch W x 5.5 Inch D x 18.25 Inch H) // // Materials: Banana, Metal // Finish Code: 1, Finish Name: Natural // Set Up // CBM: 0.04 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AW-70635-BD_001.jpg"
                        },
                        {
                            item: "AW-70746-BD",
                            qty: 20,
                            desc: "Shine Wall Art, Blonde, (14.25 Inch W x 4 Inch D x 14.25 Inch H) // // Materials: Banana, Metal // Finish Code: 1, Finish Name: Natural // Set Up // CBM: 0.0328 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AW-70746-BD_001.jpg"
                        },
                        {
                            item: "CT-70112",
                            qty: 10,
                            desc: "Soren Braided Seagrass Console Table (55.11x15.74x29.92) // Material: Seagrass // CBM: 0.547 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70112_001.jpg"
                        },
                        {
                            item: "CT-70542",
                            qty: 40,
                            desc: "Bayside Coffee Table with Storage (47.24x18.30x17.71) // Material: Full Kubu+Wood Base // CBM: 0.343 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70542_001.jpg"
                        },
                        {
                            item: "JV-CLT503",
                            qty: 10,
                            desc: "Charleston Teak Dining Table, White Patina (76.77x37.40x30.31) // Material: TeakWood // CBM: 0.371 // Packaging: Box kraft #200 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-CLT503_001.JPG"
                        },
                        {
                            item: "ST-70293-L-NT",
                            qty: 25,
                            desc: "Nerina Raffia Round Side Table, Natural (16W Inch  x 16D Inch  x 19H Inch ) // Materials: Rafia, Plywood (at top) Gamelina Wood (Base) // Finish Code: 1-143, Finish Name: Natural - Peanut Brown w/o Brush // Set Up // CBM: 0.1361 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***SOFFA COMPLIANCE REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70293-L-NT_001.jpg"
                        },
                        {
                            item: "ST-70328-NU",
                            qty: 30,
                            desc: "Savoy Turned Leg Side Table With Marble Tabletop, Natural, (11.75 Inch W x 11.75 Inch D x 23 Inch H) //  // Materials: Mungur, Marble // Finish Code: 39, Finish Name: Natural Ho // Set Up  // CBM: 0.186 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70328-NU_001.JPG"
                        },
                        {
                            item: "ST-70717-NU",
                            qty: 25,
                            desc: "Zara Abstract Leg Side Table, Natural, (14 Inch W x 14 Inch D x 20 Inch H) // Materials: Mungur // Finish Code: 141, Finish Name: Natural Unfinished // Set Up  // CBM: 0.1 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70717-NU_001.jpg"
                        },
                        {
                            item: "ST-70768-BD",
                            qty: 45,
                            desc: "Cypress Accent Table, 14 Inch W, Blonde, (14 Inch W x 14 Inch D x 20 Inch H) // Materials: Banana Small Natural, Mungur Wood // Finish Code: 1-143, Finish Name: Banana Natural & Peanut Brown W/O Brush // Set Up // CBM: 0.1 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70768-BD_001.jpg"
                        },
                        {
                            item: "TT-CT-211-BD",
                            qty: 20,
                            desc: "Tropical Coffee Table With Storage, Blonde (48W Inch  x 30D Inch  x 18H Inch ) // Materials: Banana Natural, Gamelina Wood (Base), Teak Wood (Feet), Gunny Sack // Finish Codes & Names: 142 Natural Blonde (Banana Natural), 143 Peanut Brown W/O Brush (Gamelina and Teak Woods), 1 Natural (Gunny Sack), // Partial KD (Feet) // CBM: 0.446 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-211-BD_001.jpg"
                        }
                    ]
                },
                "JW 2602-11N": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-06-26",
                    items: [
                        {
                            item: "AT2-70336-NT",
                            qty: 20,
                            desc: "Tava Round Rattan Trays, Set of 2, Natural (17.75W Inch  x 17.75D Inch  x 3.5H Inch  & 16.5W Inch  x 16.5D Inch  x 2.75H Inch ) // //Materials: Natural Rattan // Finish Code: 1, Finish Name: Natural // Set Up // CBM: 0.05 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AT2-70336-NT_001.jpg"
                        },
                        {
                            item: "CT-70090-1-WP",
                            qty: 30,
                            desc: "J1381-CN3A-PJW // New Hampton Round Coconut Shell Pedestal Coffee Table, White Patina (32W Inch  x 32D Inch  x 16H Inch ) // // Materials: Coconut-Teak Wood // Finish Code: CN-3A-57, Finish Name: Tabletop: White Patina / Base: Walnut Brown // KD // CBM: 0.183 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70090-1-WP_001.jpg"
                        },
                        {
                            item: "CT-70091-1-NB",
                            qty: 30,
                            desc: "New Hampton Round Coconut Shell Pedestal Coffee Table, Natural Bliss (32W Inch  x 32D Inch  x 16H Inch ) // // Materials: Coconut-Teak Wood // Finish Code: CN-3B-57, Finish Name: Tabletop: Natural Bliss / Base: Walnut brown // KD // CBM: 0.1894 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70091-1-NB_001.jpg"
                        },
                        {
                            item: "CT-70102-NU",
                            qty: 10,
                            desc: "Natura Organic Coffee Table Base (Glass Top Not Included), Natural (39x39x18) // Material: Teakwood // Finish: Natural HO // Box Craft 200mm,Protect PE",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70102-NU_001.jpg"
                        },
                        {
                            item: "JV-NHT403-NB",
                            qty: 30,
                            desc: "New Hampton Round Cocktail Table (30.70x30.70x16.14) // Material: Coconut Chips/Nat Bliss // CBM: 0.347 // Packaging: Box Kraft #150 + Box Single wall + Protect Box Styrofoam PE 2cm (L shape) + Protect Box Styrofoam PE 2cm (elbow shape) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT403-NB_001.jpg"
                        },
                        {
                            item: "JV-NHT701-WP",
                            qty: 25,
                            desc: "New Hampton Cocktail Table (35.43x23.62x16.33) // Material: Coconut Shell // CBM: 0.315 // Packaging: Box Kraft #200 + Protect Box Styrofoam PE 2cm (elbow shape) + PW 3mm + Protect Box Styrofoam PE 2cm (L shape) + PW 3mm + Protect Box Styrofoam PE 2cm (elbow shape + stack) + Protect Box Styrofoam PE 2cm (stacked L shape) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT701-WP_001.jpg"
                        },
                        {
                            item: "OR-RL301-NU",
                            qty: 35,
                            desc: "Roell Teak Top Side Table with Natural Root Base, Light Natural, (20.5 Inch W x 20.5 Inch D x 20.5 Inch H) // Materials: Teakwood - Driftwood // Finish Code: 39, Finish Name: Natural HO // Set Up // CBM: 0.195 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OR-RL301-NU_001.jpg"
                        },
                        {
                            item: "OT-70102-NU",
                            qty: 15,
                            desc: "Natura Root Console Table, Natural (47x20x35) // Material: Teakwood // Finish: Natural HO // Box Craft 200mm,Protect PE",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-70102-NU_001.jpg"
                        },
                        {
                            item: "TT-JV-NHT403-BS",
                            qty: 20,
                            desc: "New Hampton Round Cocktail Table (30.70x30.70x16.14)   //  Material:     //  CBM: 0.354  //  Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam PE 2cm (L shape) + Protect Box Styrofoam PE 2cm (elbow shape) + Styrofoam 100x200x5 cm + Single Wall  wide 200 x 180  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-JV-NHT403-BS_001.jpg"
                        },
                        {
                            item: "WA-70804-NT",
                            qty: 20,
                            desc: "Small Organic Banana Leaf Wall Decor, Natural (18x18x2)   //  Material: Banana Leaf  Frame : Metal Frame / Iron  //  Finish: Natural  //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/WA-70804-NT_001.jpg"
                        }
                    ]
                },
                "JW 2602-12N": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-06-30",
                    items: [
                        {
                            item: "AM-70330-WH",
                            qty: 25,
                            desc: "Round Capiz Mirror, 30 Inch W, White 29.92x1.96x29.92 // Fabric Type: N/A // Finish Name: White // Set Up // CBM: 0.0805 // Number of Shipping Boxes: 1 // // // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70330-WH_001.jpg"
                        },
                        {
                            item: "CT-70445-WH",
                            qty: 12,
                            desc: "Solana Round Capiz Coffee Table, White, (30 Inch W x 30 Inch D x 16 Inch H) // Materials: Capiz, Acacia Wood // Finish Code: 17, Finish Name: White // Set Up // CBM: 0.34 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70445-WH_001.jpg"
                        },
                        {
                            item: "DT-70202-NU",
                            qty: 5,
                            desc: "Natura 47 Inch Dining Table Base (Glass Top Not Included), Natural (47x47x30) // Material: Teakwood // Finish: Natural HO // Box Craft 200mm,Protect PE",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DT-70202-NU_001.jpg"
                        },
                        {
                            item: "DT-70404-WH",
                            qty: 6,
                            desc: "Natura 47 Inch Dining Table Base (Glass Top Not Included), White (46.85x46.85x29.52) // Material: Wood // CBM: 1.384 // Packaging: Pallet + Single Wall wide 200 x 180 + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DT-70404-WH_001.jpg"
                        },
                        {
                            item: "JV-AC504-S",
                            qty: 20,
                            desc: "Chesapeake Mirror (26.77x1.456x39.37) // Material: Capiz // CBM: 0.108 // Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Protect Box Styrofoam 2cm for Headboard Small H = 8 + Styrofoam 100x200x2 + Medium paper/kg (m2=0.2 kg) + wrap paper/kg wide 120 // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-AC504-S_001.jpg"
                        },
                        {
                            item: "NTR-404",
                            qty: 10,
                            desc: "Asher Tray Top Nightstand With Drawer and Rush Shelf, Chestnut Brown (23W Inch x 13D Inch x 23H Inch ) // Materials: Bayur Wood / MDF P2 / Mindi Wood Veneer / BANANA STEAM // Finish Code: NAT16(WB PG4)-BANANA STEAM , Finish Name: Natural-Natural // KD // CBM: 0.071 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NTR-404_001.jpg"
                        },
                        {
                            item: "OR-DF305",
                            qty: 10,
                            desc: "Natura Organic Coffee Table Base (Glass Top Not Included), Medium Brown (39.37x39.37x17.71) // Material: Wood // CBM: 0.741 // Packaging: Pallet + Single Wall wide 200 x 180 + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OR-DF305_001.jpg"
                        },
                        {
                            item: "OR-OR305",
                            qty: 10,
                            desc: "Natura Root Console Table, Medium Brown (47.24x19.68x35.43) // Material: Wood // CBM: 0.854 // Packaging: Pallet + Single Wall wide 200 x 180 // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OR-OR305_001.jpg"
                        },
                        {
                            item: "ST-7014-WH",
                            qty: 20,
                            desc: "Round Capiz Accent Table, 15.5 Inch W, White 15.5Wx15.5Dx16.25H // Fabric Type: N/A, Fabric Code: N/A, Fabric Content: N/A, Fill Material: N/A // Finish Name: White // Set Up  // CBM: 0.0953 // Number of Shipping Boxes: 1 //  //  // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-7014-WH_001.jpg"
                        },
                        {
                            item: "ST-70321-WH",
                            qty: 15,
                            desc: "Solana Round Capiz Side Table, 16 Inch W,  White, (16 Inch W x 16 Inch D x 20 Inch H) // Materials: Capiz, Acacia Wood // Finish Code: 17, Finish Name: White // Set Up  // CBM: 0.13 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70321-WH_001.jpg"
                        },
                        {
                            item: "ST-70627-BR",
                            qty: 20,
                            desc: "Solana Capiz Martini Table, 11 Inch W, Tea Brown (11W Inch  x 11D Inch  x 22H Inch ) // Materials: Capiz, Gamelina Wood // Finish Code: 145-143, Finish Name: Tea Brown - Peanut Brown w/o Brush // Set Up // CBM: 0.07 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70627-BR_001.jpg"
                        },
                        {
                            item: "ST-70627-WH",
                            qty: 25,
                            desc: "Solana Capiz Martini Table, 11 Inch W, White (11W Inch  x 11D Inch  x 22H Inch ) // Materials: Capiz, Gamelina Wood // Finish Code: 17-143, Finish Name: White - Peanut Brown w/o Brush // Set Up // CBM: 0.07 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70627-WH_001.jpg"
                        },
                        {
                            item: "TT-JV-JT403-SG",
                            qty: 25,
                            desc: "Juliette Coco End Table, Sage Green (15.74x15.74x16.53)   //  Material:     //  CBM: 0.106  //  Packaging: Box Kraft #150 + Box SW Juliette Stool (Small) 40x40x42 + Protect Box Styrofoam PE 2cm (L shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-JV-JT403-SG_001.jpg"
                        },
                        {
                            item: "TT-JV-SQ-JT403-WP",
                            qty: 25,
                            desc: "Juliette Square Stool, White Patina (16.53x16.53x16.53)   //  Material:     //  CBM: 0.111  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-JV-SQ-JT403-WP_001.jpg"
                        }
                    ]
                },
                "JW 2602-13N": {
                    Vendor: "V68 PT. FURNILAC PRIMAGUNA",
                    ecrd: "2026-05-15",
                    items: [
                        {
                            item: "NS-6802-MBV",
                            qty: 50,
                            desc: "Gemma 2 Drawer Nightsand With Open Storage, 34 Inch W, Medium Brown (34W Inch  x 15D Inch  x 29.5H Inch ) // // Materials: Wood,Mdf+V.Meranti // Finish Code: BMV/02, Finish Name: Medium Brown // KD // CBM: 0.344 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** // ***ANTI TIP KIT REQUIRED***//",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-6802-MBV_001.jpg"
                        },
                        {
                            item: "NS-68406-BL",
                            qty: 25,
                            desc: "2 Drawer + 1 Shelf Nightstand, 22 Inch W, Blue, (22 Inch W x 15 Inch D x 24 Inch H) // Materials: Bayur, MDF + Veneer // Finish Code: SW 7611, Finish Name: Tranquil Aqua // Set Up // CBM: 0.2177 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68406-BL_001.jpg"
                        },
                        {
                            item: "NS-68445-BKV",
                            qty: 50,
                            desc: "Chester 2 Drawer Nightstand With Shelf And Mosaic Doors, 28 Inch W, Black (28W Inch  x 15D Inch  x 26H Inch ) // // Materials: Wood+Mdf+Veneer Meranti+Mosaic Wood Block Drawers+Metal Rails+Metal Pull Handle // Finish Code: Solid Black - Pull Handle: BJ-056/K, Finish Name: Solid Black - Pull Handle: Antique Gold // Set Up // CBM: 0.29 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68445-BKV_001.jpg"
                        },
                        {
                            item: "NS-68445-WHV",
                            qty: 50,
                            desc: "Chester 2 Drawer Nightstand With Shelf And Mosaic Doors, 28 Inch W, White (28W Inch  x 15D Inch  x 26H Inch ) // // Materials: Wood+Mdf+Veneer Meranti+Mosaic Wood Block Drawers+Metal Rails+Metal Pull Handle // Finish Code: Solid White - Pull Handle: BJ-056/K, Finish Name: Solid White - Pull Handle: Antique Gold // Set Up // CBM: 0.29 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68445-WHV_001.jpg"
                        },
                        {
                            item: "OT-68723-NT",
                            qty: 35,
                            desc: "Paloma 2 Drawer Raffia Wrapped Console Table with Shelf, Natural, (40 Inch W x 14 Inch D x 30 Inch H) // // Materials: Wood, Mdf + Anyaman Raffia // Finish Code: NA, Finish Name: Natural // KD // CBM: 0.2 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-68723-NT_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-L-NVG",
                            qty: 40,
                            desc: "Hooper 2 Drawer Wooden Accent Side Table (55.9x38.1x61.0)   //  Material: MDF  //  CBM: 0.219  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Hooper 2 Drawer Wooden Accent Side Table large, Navy Blue..(22x15x24) Material/Color:Bayur Wood and Mdf E2/Navy Blue with gold finish handle and leg..CBM:0.21 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-L-NVG_001.jpg"
                        }
                    ]
                },
                "JW 2602-14N": {
                    Vendor: "V68 PT. FURNILAC PRIMAGUNA",
                    ecrd: "2026-05-15",
                    items: [
                        {
                            item: "NS-6802-MRBK",
                            qty: 30,
                            desc: "Gemma 2 Drawer Nightsand With Open Storage, KD, 34 Inch W, Black (34 x 15 x 29.5) // Material: Bayur Wood, Meranti Veneer, MDF, Metal Hardware // Finish: Black Solid // ***ISTA 3A Packaging Required*** // ***INDIGO ROAD PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-6802-MRBK_001.jpg"
                        },
                        {
                            item: "NS-68109-NVV",
                            qty: 20,
                            desc: "Devon 3 Drawer Nightstand, 22 InchW, Navy (22W Inch x 15D Inch x 24H Inch) _ Materials: Wood+Mdf+Veneer Meranti+Metal Rails+40mm Metal Ring Pulls _ Finish Code: Navy - Ring Pull: AC-040/E, Finish Name: Navy - Ring Pull: Antique Gold _ Set Up _ CBM: 0.215 _ Number of Shipping Boxes: 1 _ ***DROPSHIP PACKAGING REQUIRED*** _ ***ISTA 3A PACKAGING REQUIRED*** _",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68109-NVV_001.jpg"
                        },
                        {
                            item: "NS-68406-BRV",
                            qty: 40,
                            desc: "2 Drawer + 1 Shelf Nightstand, Walnut Color Code DSC 6403 (22x15x24)   Material: Bayur Wood and MDF  Thin Medium Density Fiberboard - Phase 2   Antique Gold Oval Handle: OV-185/E   CBM: 0.21775   Packaging: Brown Carton",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68406-BRV_001.jpg"
                        },
                        {
                            item: "NS-68406-GN",
                            qty: 25,
                            desc: "2 Drawer + 1 Shelf Nightstand, 22 Inch W, Green, (22 Inch W x 15 Inch D x 24 Inch H) // // Materials: Bayur Wood + MDF + Veneer // Finish Code: SW 6179, Finish Name: Artichoke // Set Up // CBM: 0.2177 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68406-GN_001.jpg"
                        },
                        {
                            item: "NS-68445-MBV",
                            qty: 30,
                            desc: "Chester 2 Drawer Nightstand With Shelf And Mosaic Doors, 28 Inch W, Medium Brown (28W Inch  x 15D Inch  x 26H Inch ) // // Materials: Wood-Mdf-Veneer (Mosaic)-Metal Rails) // Finish Code: BMV/02, Finish Name: Medium Brown // Set Up // CBM: 0.291 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68445-MBV_001.jpg"
                        },
                        {
                            item: "NS-68750-MBV",
                            qty: 20,
                            desc: "Clive 2 Drawer Nightstand With Shelf And Cane Doors, 22 Inch W, Medium Brown Veneer on Meranti Veneer (15W Inch  x 24D Inch  x 24H Inch ) // // Materials: Wood+Mdf+Veneer Meranti+Woven Cane Inset Doors+Metal Rails+Metal Cylinder Knob Antique Gold CL-182/E // Finish Code: BMV/02, Finish Name: Medium Brown (BMV/02) // Set Up // CBM: 0.219 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68750-MBV_001.jpg"
                        },
                        {
                            item: "OT-68RA52-NV",
                            qty: 30,
                            desc: "Gia Raffia Console Table, Navy (47x15x30) // Material: Solid Wood, Mdf, Raffia Webbing // CBM: 0.20219 // Packaging: S: ***DROPSHIP PACKAGING REQUIRED***// Inch Indigo Road Packaging Inch Inch required / K/D",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-68RA52-NV_001.jpg"
                        },
                        {
                            item: "SB-68RA31-WH",
                            qty: 30,
                            desc: "Two Door Cabinet with Raffia Panels, White (31.4x14.9x29.5) // Material: Wood, Raffia // CBM: 0.329 // Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm // ***DROPSHIP PACKAGING REQUIRED***// KD // ***ANTI TIP KIT REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-68RA31-WH_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-BK",
                            qty: 20,
                            desc: "Hooper 2 Drawer Wooden Accent Side Table (17.9x14.9x22.0)   //  Material: MDF  //  CBM: 0.173  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Hooper 2 Drawer Wooden Accent Side Table-Black..(18x15x22) Material/Color:Bayur Wood and Mdf E2/Black..CBM:0.17 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-BK_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-WH",
                            qty: 30,
                            desc: "Hooper 2 Drawer Wooden Accent Side Table (17.9x14.9x22.0)   //  Material: MDF, Acacia Wood  //  CBM: 0.173  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Hooper 2 Drawer Wooden Accent Side Table-White (18x15x22) Material/Color:Bayur Wood and Mdf E2/White..CBM:0.17 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-WH_001.jpg"
                        }
                    ]
                },
                "JW 2602-15N": {
                    Vendor: "V68 PT. FURNILAC PRIMAGUNA",
                    ecrd: "2026-05-15",
                    items: [
                        {
                            item: "NS-6801-RFNT",
                            qty: 60,
                            desc: "Gia Raffia Single Drawer Nightstand, 26 Inch H, Natural (24 x 19 x 26) // Material: Bayur Wood, MDF, Raffia, Metal Hardware // Finish: Natural // ***ISTA 3A Packaging Required*** // ***INDIGO ROAD PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-6801-RFNT_001.jpg"
                        },
                        {
                            item: "NS-68109-WHV",
                            qty: 20,
                            desc: "Devon 3 Drawer Nightstand, 22 Inch W, White (22W Inch  x 15D Inch  x 24H Inch ) // // Materials: Wood+Mdf+Veneer Meranti-Metal Rails-Antique Gold Oval Handle: OV-185/E // Finish Code: Solid White, Finish Name: Solid White // Set Up // CBM: 0.218 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68109-WHV_001.jpg"
                        },
                        {
                            item: "NS-68750-NVV",
                            qty: 50,
                            desc: "Clive 2 Drawer Nightstand With Shelf And Cane Doors, 22 Inch W, Navy (22W Inch  x 15D Inch  x 24H Inch ) // // Materials: Wood+Mdf+Veneer Meranti+Woven Cane Inset Doors+Metal Rails+40mm Metal Ring Pulls // Finish Code: Navy - Ring Pull: AC-040/E, Finish Name: Navy - Ring Pull: Antique Gold // Set Up // CBM: 0.215 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68750-NVV_001.jpg"
                        },
                        {
                            item: "NS-68945-NT",
                            qty: 25,
                            desc: "Paloma 2 Drawer Raffia Wrapped Night Stand with Shelf, Natural, (28 Inch W x 15 Inch D x 26 Inch H) // // Materials: Wood, Mdf + Anyaman Raffia // Finish Code: NA, Finish Name: Natural // Set Up // CBM: 0.29 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68945-NT_001.jpg"
                        },
                        {
                            item: "ST-68235-BR",
                            qty: 50,
                            desc: "Laurel Round Twig Base Side Table, 14 Inch W, Rustic Brown (14 Inch W x 14 Inch D x 19.5 Inch H) // // Finish Code: BRB/03, Finish Name: Rustic Brown // Set Up // CBM: 0.115 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-68235-BR_001.jpg"
                        },
                        {
                            item: "ST-68501-DGV",
                            qty: 50,
                            desc: "Ezra 2 Drawer Side Table, KD, 34 Inch W, Dark Olive Green (34W Inch  x 15D Inch  x 30H Inch ) // Materials: Bayur Wood+Mdf+Veneer+Black Metal Rail // Finish Code: GN047 - WNS-01/B, Finish Name: OAKMOSS SW 6180 (Dark Olive Green) - Black Handle Wood NS // CBM: 0.407 // Number of Shipping Boxes: // Container Packed Via: Standard: Product in Carton // ***DROPSHIP PACKAGING REQUIRED*** // ***STURDY ACT TESTING REQUIRED***// ANTI TIP KIT REQUIRED***//",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-68501-DGV_001.jpg"
                        },
                        {
                            item: "ST-68DR16-BK",
                            qty: 25,
                            desc: "16 Inch Cinched Wood Drum Table, Black, (16 Inch W x 16 Inch D x 23.5 Inch H) // Materials: Bayur, Mdf + Veneer // Finish Code: BK-32, Finish Name: Black // Set Up // CBM: 0.173 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-68DR16-BK_001.jpg"
                        },
                        {
                            item: "ST-68DR16-WW",
                            qty: 25,
                            desc: "16 Inch Cinched Wood Drum Table, White Oak (16x16x23.5) // Material: Wood, MDF // CBM: 0.1725 // Packaging: Inch Drop Ship packaging required Inch polysheet wrapped Brown carton, 5 ply outer craft 200 Styrofoam 3 cm //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-68DR16-WW_001.jpg"
                        }
                    ]
                },
                "JW 2602-16N": {
                    Vendor: "V68 PT. FURNILAC PRIMAGUNA",
                    ecrd: "2026-05-15",
                    items: [
                        {
                            item: "CT-68591-MBR",
                            qty: 35,
                            desc: "Maribelle 2 Drawer Coffee Table With Rattan Shelf, Medium Brown (40W Inch  x 22D Inch  x 17H Inch ) // // Materials: Bayur Wood, Mdf + Veener // Finish Code: BMV/02 - BJ-051/E, Finish Name: Medium Brown - Antique Gold Round Flat Knob // KD // CBM: 0.214 // Number of Shipping Boxes: 1 // Container Packed Via: Standard: Product in Carton // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-68591-MBR_001.jpg"
                        },
                        {
                            item: "NS-68109-PK",
                            qty: 30,
                            desc: "Devon 3 Drawer Nightstand, 22 Inch W, Pink (22W Inch  x 15D Inch  x 24H Inch ) // // Materials: Bayur Wood + Mdf+Veneer // Finish Code: FRP/01 -AC-40/E, Finish Name: Pink - Antique Gold Ring Classic // Set Up // CBM: 0.218 // Number of Shipping Boxes: 1 // Container Packed Via: Standard: Product in Carton // ***DROPSHIP PACKAGING REQUIRED*** // ***STURDY ACT TESTING REQUIRED***// ANTI TIP KIT REQUIRED***//",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68109-PK_001.jpg"
                        },
                        {
                            item: "NS-68775-OW",
                            qty: 35,
                            desc: "Maribelle Scallop Nightstand, Off-White (28W Inch x 15D Inch x 26H Inch ) // // Materials: Bayur Wood-Mdf // Finish Code: SW 7004, Finish Name: Snowbound White // Set Up // CBM: 0.29 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68775-OW_001.jpg"
                        },
                        {
                            item: "OT-68321-MBR",
                            qty: 35,
                            desc: "Maribelle 2 Drawer Console Table With Rattan Shelf, Medium Brown (40W Inch  x 14D Inch  x 30H Inch ) // // Materials: Bayur Wood, Mdf + Veener // Finish Code: BMV/02 - BJ-051/E, Finish Name: Medium Brown - Antique Gold Round Flat Knob // KD // CBM: 0.258 // Number of Shipping Boxes: 1 // Container Packed Via: Standard: Product in Carton // ***DROPSHIP PACKAGING REQUIRED*** // ***STURDY ACT TESTING REQUIRED***// ANTI TIP KIT REQUIRED***//",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-68321-MBR_001.jpg"
                        },
                        {
                            item: "SB-68437-BKV",
                            qty: 12,
                            desc: "Symphony Sideboard With Arch Door Detail, Black Veneer (47.5W Inch  x 15D Inch  x 35H Inch ) // // Materials: Bayur Wood + Mdf+Veneer // Finish Code:  BBV/02 - BJ-051/E, Finish Name: Black Veneer - Antique Gold Round Flat Knob // KD // CBM: 0.49 // Number of Shipping Boxes: 1 // Container Packed Via: Standard: Product in Carton // ***DROPSHIP PACKAGING REQUIRED*** // ***STURDY ACT TESTING REQUIRED***// ANTI TIP KIT REQUIRED***//",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-68437-BKV_001.jpg"
                        },
                        {
                            item: "SB-68437-LOV",
                            qty: 11,
                            desc: "Symphony Sideboard With Arch Door Detail, Light Oak (47.5W Inch  x 15D Inch  x 35H Inch ) // // Materials: Bayur Wood + Mdf+Veneer // Finish Code: NAV/01 - BJ-051/E, Finish Name: Light Oak - Antique Gold Round Flat Knob // KD // CBM: 0.49 // Number of Shipping Boxes: 1 // Container Packed Via: Standard: Product in Carton // ***DROPSHIP PACKAGING REQUIRED*** // ***STURDY ACT TESTING REQUIRED***// ANTI TIP KIT REQUIRED***//",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-68437-LOV_001.jpg"
                        },
                        {
                            item: "SB-68437-MBR",
                            qty: 12,
                            desc: "Symphony Sideboard With Arch Door Detail, Medium Brown (47.5W Inch  x 15D Inch  x 35H Inch ) // // Materials: Bayur Wood + Mdf+Veneer Meranti // Finish Code: BMV/02 - BJ-051/E, Finish Name: Medium Brown - Antique Gold Round Flat Knob // KD // CBM: 0.49 // Number of Shipping Boxes: 1 // Container Packed Via: Standard: Product in Carton // ***DROPSHIP PACKAGING REQUIRED*** // ***STURDY ACT TESTING REQUIRED***// ANTI TIP KIT REQUIRED***//",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-68437-MBR_001.jpg"
                        },
                        {
                            item: "SB-68990-LOV",
                            qty: 12,
                            desc: "Riverton Sideboard With Inlayed Wood Door, Light Oak (47.5W Inch  x 15D Inch  x 32H Inch ) // // Materials: Bayur Wood + Mdf+Veneer // Finish Code: NAV/01 - BJ-051/E, Finish Name: Light Oak - Antique Gold Round Flat Knob // KD // CBM: 0.48 // Number of Shipping Boxes: 1 // Container Packed Via: Standard: Product in Carton // ***DROPSHIP PACKAGING REQUIRED*** // ***STURDY ACT TESTING REQUIRED***// ANTI TIP KIT REQUIRED***//",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-68990-LOV_001.jpg"
                        },
                        {
                            item: "SB-68990-MBR",
                            qty: 12,
                            desc: "Riverton Sideboard With Inlayed Wood Door, Medium Brown (47.5W Inch  x 15D Inch  x 32H Inch ) // // Materials: Bayur Wood + Mdf+Veneer // Finish Code: BMV/02 - BJ-051/E, Finish Name: Medium Brown - Antique Gold Round Flat Knob // KD // CBM: 0.48 // Number of Shipping Boxes: 1 // Container Packed Via: Standard: Product in Carton // ***DROPSHIP PACKAGING REQUIRED*** // ***STURDY ACT TESTING REQUIRED***// ANTI TIP KIT REQUIRED***//",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-68990-MBR_001.jpg"
                        },
                        {
                            item: "ST-68748-MBR",
                            qty: 35,
                            desc: "Maribelle 1 Drawer Nightstand With Rattan Shelf, Medium Brown (24W Inch  x 19D Inch  x 26H Inch ) // // Materials: Bayur Wood, Mdf + Veener // Finish Code: BMV/02 - BJ-051/E, Finish Name: Medium Brown - Antique Gold Round Flat Knob // KD // CBM: 0.18 // Number of Shipping Boxes: 1 // Container Packed Via: Standard: Product in Carton // ***DROPSHIP PACKAGING REQUIRED*** // ***STURDY ACT TESTING REQUIRED***// ANTI TIP KIT REQUIRED***//",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-68748-MBR_001.jpg"
                        }
                    ]
                },
                "JW 2602-17N": {
                    Vendor: "V75 Pijar Sukma",
                    ecrd: "2026-05-30",
                    items: [
                        {
                            item: "CT-75131-NT",
                            qty: 40,
                            desc: "Elora Round Turned Leg Coffee Table With Shelf, Light Natural (30W Inch  x 30D Inch  x 17.75H Inch ) // // Materials: Bayur Wood / MDF P2 / Mindi Wood Veneer // Finish Code: NAT01, Finish Name: Natural // KD // CBM: 0.161 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-75131-NT_001.jpg"
                        },
                        {
                            item: "CT-75855-CBR",
                            qty: 12,
                            desc: "Rush / RSH 2 // Asher Tray Top Coffee Table With Rush Shelf, Chestnut Brown (47W Inch  x 23.25D Inch  x 18H Inch ) // // Materials: Bayur Wood / MDF P2 / Mindi Wood Veneer / BANANA STEAM // Finish Code: NAT 16 + BANANA STEAM , Finish Name: Natural-Natural // KD // CBM: 0.158 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-75855-CBR_001.jpg"
                        },
                        {
                            item: "DR-75550-PB",
                            qty: 10,
                            desc: "Ashford Large 3 Drawer Dresser, Powder Blue (45W Inch  x 19.75D Inch  x 36.6H Inch ) // Materials: Bayur Wood / MDF P2 / Mindi Wood Veneer // Finish Code: B-BM07/NAT01+G.WHITE , Finish Name: Top Natural - Body Powder Blue // Set Up // CBM: 0.665 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** // ***STURDY ACT TESTING REQUIRED***// ANTI TIP KIT REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DR-75550-PB_001.jpg"
                        },
                        {
                            item: "OT-75100-BK",
                            qty: 30,
                            desc: "Hermine Console Table w/ Drawer and Cane Shelf, 23.75 Inch W, Black/Natural, (23.75 Inch W x 10 Inch D x 31.5 Inch H) // Finish Code: NAT11-Raw Bamboo, Finish Name: Black-Natural // KD // CBM: 0.068 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** // ***ANTI TIP KIT REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75100-BK_001.jpg"
                        },
                        {
                            item: "OT-75100-NT",
                            qty: 50,
                            desc: "Hermine Console Table w/ Drawer and Cane Shelf, 23.75 Inch W, Brown/Natural, (23.75 Inch W x 10 Inch D x 31.5 Inch H) // // Finish Code: NAT02(WB PG4)-Raw Bamboo, Finish Name: Natural-Natural // KD // CBM: 0.068 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** // ***ANTI TIP KIT REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75100-NT_001.jpg"
                        },
                        {
                            item: "OT-75100-NV",
                            qty: 50,
                            desc: "Hermine / HRN26 // Lenora Console Table w/ Drawer and Cane Shelf, Navy (23.75W Inch  x 10D Inch  x 31.5H Inch ) // // Materials: Bayur Wood / MDF P2 / Mindi Wood Veneer / Bamboo // Finish Code: BM04-Raw Bamboo, Finish Name: FULL NAVY COLOR with Raw Bamboo // KD // CBM: 0.068 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75100-NV_001.jpg"
                        },
                        {
                            item: "OT-75333-BK",
                            qty: 40,
                            desc: "Sarlet 2 Tone Console Table With Drawer, 23.75 Inch W, Black/Brown, (23.75 Inch W x 10 Inch D x 31.5 Inch H) // Finish Code: B-NAT11/NAT02, Finish Name: Top Natural - Body Black // KD // CBM: 0.06 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** // ***ANTI TIP KIT REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75333-BK_001.jpg"
                        },
                        {
                            item: "OT-75333-NT",
                            qty: 50,
                            desc: "Sarlat / SRT5 // Marnie Console Table With Drawer, Natural (23.75W Inch  x 10D Inch  x 31.5H Inch ) // // Materials: Bayur Wood / MDF P2 / Mindi Wood Veneer // Finish Code: NAT02(WB PG4), Finish Name: Natural-Natural // KD // CBM: 0.06 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75333-NT_001.jpg"
                        },
                        {
                            item: "OT-75333-NV",
                            qty: 40,
                            desc: "Sarlat 2 Tone Console Table With Drawer, 23.75 Inch W, Navy/Brown, (23.75 Inch W x 10 Inch D x 31.5 Inch H) // Finish Code: B-BM04/NAT02, Finish Name: Top Natural - Body Navy // KD // CBM: 0.06 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** // ***ANTI TIP KIT REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75333-NV_001.jpg"
                        },
                        {
                            item: "OT-75333-PB",
                            qty: 30,
                            desc: "Sarlat / SRT5 // Marnie 2 Tone Console Table With Drawer, Powder Blue (23.75W Inch  x 10D Inch  x 31.5H Inch ) // // Materials: Bayur Wood / MDF P2 / Mindi Wood Veneer // Finish Code: B-BM07/NAT01+G.WHITE , Finish Name: Top Natural - Body Powder Blue // KD // CBM: 0.06 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75333-PB_001.jpg"
                        },
                        {
                            item: "OT-75343-NT",
                            qty: 40,
                            desc: "Elora Turned Leg Console Table With Two Shelves, Light Natural (47.5W Inch  x 13.75D Inch  x 31.5H Inch ) // // Materials: Bayur Wood / MDF P2 / Mindi Wood Veneer // Finish Code: NAT01, Finish Name: Natural // KD // CBM: 0.155 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ANTI TIP KIT REQUIRED***//",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75343-NT_001.jpg"
                        },
                        {
                            item: "OT-75454-LN",
                            qty: 20,
                            desc: "Elora Turned Leg Console Table With Two Shelves, Light Natural (67W Inch  x 17.75D Inch  x 30H Inch ) // // Materials: Bayur Wood / MDF P2 / Mindi Wood Veneer Parquetry // Finish Code: NAT01+G.White, Finish Name: Natural-Natural // KD // CBM: 0.267 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ANTI TIP KIT REQUIRED***//",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75454-LN_001.jpg"
                        },
                        {
                            item: "OT-75755-CBR",
                            qty: 22,
                            desc: "Asher Tray Top Console Table With Rush Shelf, Chestnut Brown (58W Inch x 13.75D Inch x 34H Inch ) // Materials: Bayur Wood / MDF P2 / Mindi Wood Veneer / BANANA STEAM // Finish Code: NAT 16 + BANANA STEAM , Finish Name: Natural-Natural // KD // CBM: 0.132 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75755-CBR_001.jpg"
                        },
                        {
                            item: "OT-75931-CBR",
                            qty: 30,
                            desc: "Dumaine Console Table With Two Drawers And Shelf, Chesnut Brown // // Materials: Bayur Wood / MDF P2 / Mindi Wood Veneer // Finish Code: NAT16(WB PG4), Finish Name: Natural-Natural // KD // CBM: 0.139 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** // ***ANTI TIP KIT REQUIRED***//",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-75931-CBR_001.jpg"
                        },
                        {
                            item: "ST-75242-NT",
                            qty: 40,
                            desc: "Elora Round Turned Leg Side Table With Shelf, Light Natural (15.75W Inch  x 15.75D Inch  x 19.75H Inch ) // // Materials: Bayur Wood / MDF P2 / Mindi Wood Veneer // Finish Code: NAT01, Finish Name: Natural // KD // CBM: 0.058 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-75242-NT_001.jpg"
                        },
                        {
                            item: "TT-DU-75008-LB",
                            qty: 50,
                            desc: "Dumaine Bedside Table (15.75x11.81x25.59)   //  Material: Bayur Wood / Top MDF  //  Color: Light Blue (W9.L2+G9)  //  CBM: 0.066  //  Packaging: Carton Box 200 PSI / 5 ply / Plastic wrap around items + Paper oil warp around items+ foam protection + corner plastic protection  //  Master Carton:   //  ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-DU-75008-LB_001.jpg"
                        },
                        {
                            item: "TT-DU-75008-WH",
                            qty: 40,
                            desc: "Dumaine Bedside Table (15.75x11.81x25.59)   //  Material: Bayur Wood / Top MDF  //  Color: White (BA+WBSemi)  //  CBM: 0.066  //  Packaging: Carton Box 200 PSI / 5 ply / Plastic wrap around items + Foamsheet warp around items + foam protection + corner plastic protection  //  Master Carton:   //  ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-DU-75008-WH_001.jpg"
                        },
                        {
                            item: "TT-DU-75010-BL",
                            qty: 85,
                            desc: "Dumaine Console Table with Shelf (31.5x9.84x31.5)   //  Material: Bayur Wood / Top MDF  //  Color: Black ( W48.L2+WB SEMI)  //  CBM: 0.077  //  Packaging: Carton Box 200 PSI / 5 ply / Plastic wrap around items + Paper oil warp around items+ foam protection + corner plastic protection  //  Master Carton:   //  ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-DU-75010-BL_001.jpg"
                        }
                    ]
                },
                "JW 2602-18N": {
                    Vendor: "V58 Kharisma Rotan Mandiri",
                    ecrd: "2026-06-03",
                    items: [
                        {
                            item: "CS-58765-OG",
                            qty: 25,
                            desc: "Arbor Rattan Abstract Leaf Counterstool, Olive Green (20W Inch x 22.5D Inch x 37H Inch) _ Fabric Type: Cotton, Fabric Code from Vendor: CTN01, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam _ Materials: Rattan Semi Pole, Rattan Core, Plywood _ Finish Code: AG, Finish Name: Artichoke Green _ Set Up _ CBM: 0.2198 _ Number of Shipping Boxes: 1 _ ***SOFFA COMPLIANCE REQUIRED*** _",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CS-58765-OG_001.JPG"
                        },
                        {
                            item: "CS-58765-OW",
                            qty: 25,
                            desc: "Arbor Rattan Abstract Leaf Counterstool, Off-White (20W Inch x 22.5D Inch x 37H Inch) _ Fabric Type: Cotton, Fabric Code from Vendor: CTN01, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam _ Materials: Rattan Semi Pole, Rattan Core, Plywood _ Finish Code: WS, Finish Name: White Snowbound _ Set Up _ CBM: 0.2198 _ Number of Shipping Boxes: 1 _ ***SOFFA COMPLIANCE REQUIRED*** _",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CS-58765-OW_001.jpg"
                        },
                        {
                            item: "CS-58765-SB",
                            qty: 25,
                            desc: "Arbor Rattan Abstract Leaf Counterstool, Slate Blue (20W Inch x 22.5D Inch x 37H Inch) _ Fabric Type: Cotton, Fabric Code from Vendor: CTN01, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam _ Materials: Rattan Semi Pole, Rattan Core, Plywood _ Finish Code: MB, Finish Name: Moody Blue _ Set Up _ CBM: 0.2198 _ Number of Shipping Boxes: 1 _ ***SOFFA COMPLIANCE REQUIRED*** _",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CS-58765-SB_001.JPG"
                        },
                        {
                            item: "DC-58225-OW",
                            qty: 25,
                            desc: "Hampton Chippendale Rattan Barrel Chair, 33.5 Inch H, Off-White (23.5W Inch x 24D Inch x 33.5H Inch ) // Fabric Type: Cotton, Fabric Code from Vendor: CTN01, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam // Materials: Rattan Semi pole, Rattan Core // Finish Code: WHSB, Finish Name: White Snowbound // Set Up // CBM: 0.2703 // ***SOFFA COMPLIANCE REQUIRED*** // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC-58225-OW_001.jpg"
                        },
                        {
                            item: "DC2-58159-OG",
                            qty: 25,
                            desc: "Arbor Rattan Abstract Leaf Dining Chair, Set of 2, Olive Green (19.25W Inch x 23.25D Inch x 35H Inch) _ Fabric Type: Cotton, Fabric Code from Vendor: CTN01, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam _ Materials: Rattan Semi Pole, Rattan Core, Plywood _ Finish Code: AG, Finish Name: Artichoke Green _ Set Up _ CBM: 0.1901 _ Number of Shipping Boxes: 1 _ ***SOFFA COMPLIANCE REQUIRED*** _",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC2-58159-OG_001.jpg"
                        },
                        {
                            item: "DC2-58159-OW",
                            qty: 25,
                            desc: "Arbor Rattan Abstract Leaf Dining Chair, Set of 2, Off-White (19.25W Inch x 23.25D Inch x 35H Inch) _ Fabric Type: Cotton, Fabric Code from Vendor: CTN01, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam _ Materials: Rattan Semi Pole, Rattan Core, Plywood _ Finish Code: WS, Finish Name: White Snowbound _ Set Up _ CBM: 0.1901 _ Number of Shipping Boxes: 1 _ ***SOFFA COMPLIANCE REQUIRED*** /",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC2-58159-OW_001.jpg"
                        },
                        {
                            item: "DC2-58159-SB",
                            qty: 25,
                            desc: "Arbor Rattan Abstract Leaf Dining Chair, Set of 2, Slate Blue (19.25W Inch x 23.25D Inch x 35H Inch) _ Fabric Type: Cotton, Fabric Code from Vendor: CTN01, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam _ Materials: Rattan Semi Pole, Rattan Core, Plywood _ Finish Code: MB, Finish Name: Moody Blue _ Set Up _ CBM: 0.1901 _ Number of Shipping Boxes: 1 _ ***SOFFA COMPLIANCE REQUIRED*** _",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DC2-58159-SB_001.jpg"
                        },
                        {
                            item: "SB-58106-AN",
                            qty: 50,
                            desc: "Maples Counterstool with Upholstered Seat, Antique Natural, (20 Inch W x 21.5 Inch D x 37.5 Inch H) // Fabric Type: Cotton, Fabric Code from Vendor: CTN05, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam // Materials: Rattan Semi Pole, Rattan Peel // Finish Code: LGB, Finish Name: Light Grey Bistro // Set Up // CBM: 0.2645 // ***SOFFA COMPLIANCE REQUIRED*** // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-58106-AN_001.JPG"
                        },
                        {
                            item: "SB-58106-WH",
                            qty: 20,
                            desc: "Maples Counterstool with Upholstered Seat, Off White/Natural (20 Inch Inch W x 21.75 Inch Inch D x 37.5 Inch Inch H) // Fabric Type: Cotton, Fabric Code from Vendor: CTN05, Fabric Content %: 1, Fill Material on Upholstered Items only: Foam // Materials: Rattan Semi Pole, Rattan Peel // Finish Code: WHS, Finish Name: White Snowbound // Set Up // CBM: 0.2645 // ***SOFFA COMPLIANCE REQUIRED*** // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-58106-WH_001.jpg"
                        }
                    ]
                },
                "JW 2603-01N": {
                    Vendor: "V65 CV. Living Creation Furniture (PT. Indigo Mandiri Sejahtera)",
                    ecrd: "2026-05-30",
                    items: [
                        {
                            item: "BK-65434-AN",
                            qty: 10,
                            desc: "Palma Rattan Wrapped Bookshelf, Antique Natural (33.75W Inch  x 17D Inch  x 75H Inch ) // Materials: Mahogany wood, Rattan peel, Plywood // Finish Code: NAT-TIGER, Finish Name: Tiger natural // Set Up // CBM: 0.74 // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/BK-65434-AN_001.jpg"
                        },
                        {
                            item: "BN-65444-AN",
                            qty: 12,
                            desc: "Palma Rattan Wrapped Bench With Curved Legs And Shelf, Antique Natural (54.75W Inch  x 17D Inch  x 18.5H Inch ) // Materials: Mahogany wood, Rattan peel, Plywood // Finish Code: NAT-TIGER, Finish Name: Tiger natural // Set Up // CBM: 0.26 // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/BN-65444-AN_001.jpg"
                        },
                        {
                            item: "CS-65307-NT",
                            qty: 25,
                            desc: "Amaya Woven Water Hyacinth Counterstool, Natural (22.5 Inch W x 21.5 Inch D x 38 Inch H) // Fabric Type: Polyester, Fabric Code from Vendor: SR 10 Snow White, Fabric Content %: 100% Polyester, Fill Material on Upholstered Items only: 2 Inch  foam inoac // Materials: Rattan Pole, Rattan natural hyacinth and Fitrit // Finish Code: NAT-WHC, Finish Name: Natural // Set Up // CBM: 0.29 //***Single Wall Only Without Shipping Cartons*** // ***SOFFA COMPLIANCE REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CS-65307-NT_001.jpg"
                        },
                        {
                            item: "CT-65404-AN",
                            qty: 20,
                            desc: "Palma Rectangular Rattan Wrapped Coffee Table With Curved Legs And Shelf, Antique Natural (44.5W Inch  x 27.5D Inch  x 17.75H Inch ) // Materials: Mahogany wood, Rattan peel, Plywood // Finish Code: NAT-TIGER, Finish Name: Tiger natural // Set Up // CBM: 0.36 // ***Single Wall Only Without Shipping Cartons***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-65404-AN_001.jpg"
                        },
                        {
                            item: "DT-65706-NT",
                            qty: 11,
                            desc: "Alina Rattan Hourglass Pedestal Dining Table Base (Glass Top Not Included), Natural (28W Inch  x 28D Inch  x 30.5H Inch ) // // Materials: Rattan Pole, Rattan core // Finish Code: NAT-CORE, Finish Name: Natural // Set Up // CBM: 0.4 // ***Single Wall Only Without Shipping Cartons***//",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DT-65706-NT_001.jpg"
                        },
                        {
                            item: "OC-65202-NT-V2",
                            qty: 12,
                            desc: "Atherton 2.0 Wide Weave Water Hyacinth Occasional Chair With Raised Front Chair Apron, Natural (32.5x30.5x32.5) // Material: Rattan, Water Hyacinth, Fabric // Finish: Lacquer; NATURAL // CBM: 0.501 // Packaging: CORRUGATED PAPER // MOQ: 20",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OC-65202-NT-V2_001.jpg"
                        },
                        {
                            item: "OT-65414-AN",
                            qty: 22,
                            desc: "Palma Rattan Wrapped Console Table With Shelves, Antique Natural (55W Inch  x 16D Inch  x 30H Inch ) // Materials: Mahogany wood, Rattan peel, Plywood // Finish Code: NAT-TIGER, Finish Name: Tiger natural // Set Up // CBM: 0.44 // ***Single Wall Only Without Shipping Cartons*** ",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-65414-AN_001.jpg"
                        },
                        {
                            item: "ST-65104-L-NT",
                            qty: 20,
                            desc: "Ellison Round Rattan Side Table With Shelf, Natural (22W Inch  x 22D Inch  x 22H Inch ) // Materials: MAHOGANY WOOD, RATTAN PEEL // Finish Code: NAT-PEEL, Finish Name: NATURAL // Set Up // CBM: 0.281 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-65104-L-NT_001.jpg"
                        },
                        {
                            item: "ST-65104-NT",
                            qty: 15,
                            desc: "Ellison Round Rattan Side Table With Shelf, Natural (18x18x19.25) // Material: MAHOGANY WOOD, Natural Peel Rattan, // Finish: Lacquer; NATURAL // CBM: 0.145 // Packaging: CORRUGATED PAPER // MOQ: 20 // ISTA 3A Dropship packaging",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-65104-NT_001.JPG"
                        },
                        {
                            item: "ST-65350-AN",
                            qty: 75,
                            desc: "Palma Square Rattan Wrapped Side Table, Antique Natural (22W Inch  x 22D Inch  x 22.25H Inch ) // //Materials: Mahogany wood, Rattan peel, Plywood // Finish Code: NAT-TIGER, Finish Name: TIGER NATURAL // Set Up // CBM: 0.228 // Number of Shipping Boxes: 1 // Container Packed Via: Stacked Single Wall Wrapped with Cartons Included. ***Must Include Cartons In Container*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-65350-AN_001.jpg"
                        }
                    ]
                },
                "JW 2603-02N": {
                    Vendor: "V68 PT. FURNILAC PRIMAGUNA",
                    ecrd: "2026-06-25",
                    items: [
                        {
                            item: "NS-6802-LOV",
                            qty: 52,
                            desc: "Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** // ***STURDY ACT TESTING REQUIRED***// ANTI TIP KIT REQUIRED***//",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-6802-LOV_001.jpg"
                        },
                        {
                            item: "NS-68406-BKV",
                            qty: 30,
                            desc: "2 Drawer + 1 Shelf Nightstand, Matte Black Wood Veneer (22x15x24)   Material: Bayur Wood and MDF  Thin Medium Density Fiberboard - Phase 2   Antique Gold Oval Handle: OV-185/E   CBM: 0.21775   Packaging: Brown Carton",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68406-BKV_001.jpg"
                        },
                        {
                            item: "NS-68406-BRV",
                            qty: 30,
                            desc: "2 Drawer + 1 Shelf Nightstand, Walnut Color Code DSC 6403 (22x15x24)   Material: Bayur Wood and MDF  Thin Medium Density Fiberboard - Phase 2   Antique Gold Oval Handle: OV-185/E   CBM: 0.21775   Packaging: Brown Carton",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-68406-BRV_001.jpg"
                        },
                        {
                            item: "ST-68DR16-BK",
                            qty: 20,
                            desc: "16 Inch Cinched Wood Drum Table, Black, (16 Inch W x 16 Inch D x 23.5 Inch H) // Materials: Bayur, Mdf + Veneer // Finish Code: BK-32, Finish Name: Black // Set Up // CBM: 0.173 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-68DR16-BK_001.jpg"
                        },
                        {
                            item: "ST-68DR16-WW",
                            qty: 20,
                            desc: "16 Inch Cinched Wood Drum Table, White Oak (16x16x23.5) // Material: Wood, MDF // CBM: 0.1725 // Packaging: Inch Drop Ship packaging required Inch polysheet wrapped Brown carton, 5 ply outer craft 200 Styrofoam 3 cm //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-68DR16-WW_001.jpg"
                        },
                        {
                            item: "TT-VC-AD301-BR",
                            qty: 25,
                            desc: "Auburn Traditional One Drawer Wooden Accent Side Table (17.0x14.9x23.4)   //  Material: MDF, Bayur Wood  //  CBM: 0.1687  //  Packaging: Brown carton  5 ply outer craft 200  Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Auburn Traditional One Drawer Wooden Accent Side Table-Brown (17x15x23) Material/Color:Bayur Wood and Mdf E2 / Brown CBM:0.17 Packing:Box K#200+Styrofoam 2cm Protection***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-AD301-BR_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-BK",
                            qty: 25,
                            desc: "Hooper 2 Drawer Wooden Accent Side Table (17.9x14.9x22.0)   //  Material: MDF  //  CBM: 0.173  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Hooper 2 Drawer Wooden Accent Side Table-Black..(18x15x22) Material/Color:Bayur Wood and Mdf E2/Black..CBM:0.17 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-BK_001.jpg"
                        },
                        {
                            item: "TT-VC-YK339-OR",
                            qty: 25,
                            desc: "York Three Drawer Wooden Accent Side Table (18.5x14.9x22.9)   //  Material: MDF  //  CBM: 0.1787  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s York 3 Drawer Wooden Accent Side Table-Orange..(19x15x23) Material/Color : Bayur Wood and Mdf E2 / Orange, CBM: 0.17 Packing : Box K#200 + Protection***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-YK339-OR_001.jpg"
                        },
                        {
                            item: "VC-YK339-BL",
                            qty: 65,
                            desc: "York Three Drawer Wooden Accent Side Table, 18.5 Inch W, Blue, (18.5 Inch W x 15 Inch D x 23 Inch H) // //Materials: Solid Bayur Wood + Mdf E2 + Solid Meranti (NO VENEER) // Finish Code: BNV/02, Finish Name: Northern Air // Set Up  // CBM: 0.1787 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-YK339-BL_001.jpg"
                        },
                        {
                            item: "VC-YK339-PK",
                            qty: 25,
                            desc: "York Three Drawer Accent Side Table, 18.5 Inch W, Pink, (18.5 Inch W x 15 Inch D x 23 Inch H) //  // Materials: Bayur Wood + MDF // Finish Code: SW 6296, Finish Name: Fading Rose // Set Up  // CBM: 0.1787 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/VC-YK339-PK_001.jpg"
                        }
                    ]
                },
                "JW 2603-03N": {
                    Vendor: "V68 PT. FURNILAC PRIMAGUNA",
                    ecrd: "2026-06-25",
                    items: [
                        {
                            item: "DR-68834-NT",
                            qty: 20,
                            desc: "Paloma 3 Drawer Raffia Wrapped Dresser, Natural, (34 Inch W x 18 Inch D x 32.5 Inch H) // // Materials: Wood, Mdf + Anyaman Raffia // Finish Code: NA, Finish Name: Natural // Set Up // CBM: 0.49 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ANTI TIP KIT REQUIRED***// ***STURDY Act Testing Required***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DR-68834-NT_001.jpg"
                        },
                        {
                            item: "DR-68848-MBV",
                            qty: 20,
                            desc: "Maribelle Scallop 3 Drawer Dresser, Medium Brown (34W Inch  x 18D Inch  x 32.5H Inch ) // // Materials: wood,Mdf // Finish Code: BMV/02, Finish Name: Medium Brown // Set Up // CBM: 0.494 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** // ***STURDY ACT TESTING REQUIRED***// ANTI TIP KIT REQUIRED***//",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DR-68848-MBV_001.jpg"
                        },
                        {
                            item: "NS-6801-RFBK",
                            qty: 20,
                            desc: "Gia Raffia Single Drawer Nightstand, 26 Inch H, Black (24 x 19 x 26) // Material: Bayur Wood, MDF, Raffia, Metal Hardware // Finish: Black // ***ISTA 3A Packaging Required*** // ***INDIGO ROAD PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-6801-RFBK_001.jpg"
                        },
                        {
                            item: "NS-6801-RFNT",
                            qty: 40,
                            desc: "Gia Raffia Single Drawer Nightstand, 26 Inch H, Natural (24 x 19 x 26) // Material: Bayur Wood, MDF, Raffia, Metal Hardware // Finish: Natural // ***ISTA 3A Packaging Required*** // ***INDIGO ROAD PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-6801-RFNT_001.jpg"
                        },
                        {
                            item: "NS-6802-MBV",
                            qty: 20,
                            desc: "Gemma 2 Drawer Nightsand With Open Storage, 34 Inch W, Medium Brown (34W Inch  x 15D Inch  x 29.5H Inch ) // // Materials: Wood,Mdf+V.Meranti // Finish Code: BMV/02, Finish Name: Medium Brown // KD // CBM: 0.344 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** // ***ANTI TIP KIT REQUIRED***//",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-6802-MBV_001.jpg"
                        },
                        {
                            item: "NS-6802-MRBK",
                            qty: 60,
                            desc: "Gemma 2 Drawer Nightsand With Open Storage, KD, 34 Inch W, Black (34 x 15 x 29.5) // Material: Bayur Wood, Meranti Veneer, MDF, Metal Hardware // Finish: Black Solid // ***ISTA 3A Packaging Required*** // ***INDIGO ROAD PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/NS-6802-MRBK_001.jpg"
                        },
                        {
                            item: "ST-68DR16-WN",
                            qty: 20,
                            desc: "16 Inch Cinched Wood Drum Table, Walnut (16x16x23.5) // Material: Wood, MDF // CBM: 0.1725 // Packaging: Inch Drop ship packaging Inch required 5 ply outer craft 200 Styrofoam 3 cm",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-68DR16-WN_001.jpg"
                        },
                        {
                            item: "TT-VC-HP325-WH",
                            qty: 38,
                            desc: "Hooper 2 Drawer Wooden Accent Side Table (17.9x14.9x22.0)   //  Material: MDF, Acacia Wood  //  CBM: 0.173  //  Packaging: Brown carton 5 ply outer craft 200 Styrofoam 3 cm  //  Master Carton:   //  ***Crafted Home Inch s Hooper 2 Drawer Wooden Accent Side Table-White (18x15x22) Material/Color:Bayur Wood and Mdf E2/White..CBM:0.17 Packing:Box K#200+Styrofoam 3cm Protection (1pc/case)***  //    KD",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-VC-HP325-WH_001.jpg"
                        }
                    ]
                },
                "JW 2603-04": {
                    Vendor: "V69 Dollar Furniture",
                    ecrd: "2026-07-06",
                    items: [
                        {
                            item: "DF-PR107",
                            qty: 236,
                            desc: "Promenade Antique Counter Stool (13.78x13.78x24.02)   //  Material: Mindi Wood  //  CBM: 0.1126  //  Packaging: Carton box K#200+Protcetion / Protection Styrofoam 2cm     //  Master Carton: N - 1 pcs/box",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DF-PR107_001.jpg"
                        },
                        {
                            item: "DF-PR511",
                            qty: 50,
                            desc: "Promenade Side Table with Drawer and Shelf (17.72x12.99x25.59)   //  Material: Mindi Wood  //  Color: Old Look  //  CBM: 0.1412  //  Packaging:  Inch Drop ship packaging Inch  required  Carton box K#200+Protection / Protection Styrofoam 2cm      //  Master Carton: N - 1 pcs/box",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DF-PR511_001.jpg"
                        },
                        {
                            item: "SB-69566",
                            qty: 30,
                            desc: "Myra Bench (47.24x9.84x15.75)   //  Material: Teak Wood  //  CBM: 0.1797  //  Packaging: Carton box K#200+Protcetion / Protection Styrofoam 2cm      //  Master Carton: N - 1 pcs/box",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-69566_001.jpg"
                        },
                        {
                            item: "TT-DF-PR515",
                            qty: 150,
                            desc: "Promenade Round Side Table (19.69x19.69x24.8)   //  Material:   //  CBM: 0.1841  //  Packaging: Carton box K#200+Protcetion / Protection Styrofoam 2cm    + Protection with inner carton box   //  Master Carton: Y - 1 pcs/box ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-DF-PR515_001.jpg"
                        }
                    ]
                },
                "JW 2603-08N": {
                    Vendor: "V73 Infinite Rattan Creation, CV",
                    ecrd: "2026-05-30",
                    items: [
                        {
                            item: "HB-KD404-FQ-NV",
                            qty: 15,
                            desc: "Lattice Full/Queen Headboard, Navy, (64.25 Inch W x 2 Inch D x 52 Inch H) // Materials: Mahogany Wood, Rattan // Finish Code: JFN-NVY01, Finish Name: NAVY // KD // CBM: 0.255816 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/HB-KD404-FQ-NV_001.jpg"
                        },
                        {
                            item: "SB-73106-BL",
                            qty: 68,
                            desc: "Hampton Chippendale Counterstool, 39.25 Inch H, Blue, (19.75 Inch W x 20.5 Inch D x 39.25 Inch H) // Fabric Type: Polyester, Fabric Code from Vendor: Snow White, Fabric Content %: 100% Polyester, Fill Material on Upholstered Items only: Foam // Finish Code: JFN BLU 02, Finish Name: Blue // Set Up // CBM: 0.367 // Number of Shipping Boxes: 1 // // // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-73106-BL_001.jpg"
                        },
                        {
                            item: "SB-73106-NV",
                            qty: 40,
                            desc: "HAMPTON-CS-NAVY // Hampton Chippendale Counterstool, 39.25 Inch H, Navy, (19.75 Inch W x 20.5 Inch D x 39.25 Inch H) // Finish Code: JFN NVY 01, Finish Name: Navy Blue // Set Up  // CBM: 0.314 // Number of Shipping Boxes: 1 // Materpack Contains:  // ***DROPSHIP PACKAGING REQUIRED*** //  FALSE***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-73106-NV_001.jpg"
                        },
                        {
                            item: "SC-73101-GW",
                            qty: 60,
                            desc: "Hampton Chippendale Rattan Side Chair Set of 2 (19 x 24 x 39) // Material: 0 // CBM: 0.503 // Packaging: BOX // Master Carton: 2 PC //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SC-73101-GW_001.jpg"
                        }
                    ]
                },
                "JW 2603-09N": {
                    Vendor: "V73 Infinite Rattan Creation, CV",
                    ecrd: "2026-05-30",
                    items: [
                        {
                            item: "AM-70917",
                            qty: 30,
                            desc: "Material: 0 // CBM: 0.063 // Packaging: BOX // Master Carton: 1 PC // Drop Ship packaging required",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70917_001.jpg"
                        },
                        {
                            item: "AM-73369-NT",
                            qty: 15,
                            desc: "Bonnie Rattan Scallop Frame Floor Length Mirror, 78.75 Inch H, Natural, (40 Inch W x 2.5 Inch D x 79 Inch H) // Materials: Mahogany Wood, Plywood, Rattan Fitrit, Mirror // Finish Code: JFN SC NAT, Finish Name: Natural // // CBM: 0.344 // Number of Shipping Boxes: 1 // ***ANTI TIP KIT REQUIRED***//***DROPSHIP PACKAGING REQUIRED*** /",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-73369-NT_001.jpg"
                        },
                        {
                            item: "AM-73928-NT",
                            qty: 15,
                            desc: "Maui Seagrass Round Mirror, Natural/Navy/White (30 Inch Inch W x 2 Inch Inch D x 30 Inch Inch H) // Materials: MDF, Particle Board, Plywood, seagrass, Glass // Finish Code: JFN NAT-MAUI, Finish Name: Natural/Navy/White // Set Up // CBM: 0.0867 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-73928-NT_001.jpg"
                        },
                        {
                            item: "HB-KD101-T-BL",
                            qty: 20,
                            desc: "Lattice Twin Headboard, Blue, (41.5 Inch W x 2 Inch D x 52 Inch H) // Materials: Mahogany Wood, Rattan // Finish Code: JFN BLU 01, Finish Name: Blue // KD // CBM: 0.169048 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/HB-KD101-T-BL_001.jpg"
                        },
                        {
                            item: "HB-KD101-T-GN",
                            qty: 18,
                            desc: "Lattice Twin Headboard, Green, (41.5 Inch W x 2 Inch D x 52 Inch H) // Materials: Mahogany Wood, Rattan // Finish Code: JFN GRN 01, Finish Name: Green // KD // CBM: 0.169048 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/HB-KD101-T-GN_001.jpg"
                        },
                        {
                            item: "HB-KD101-T-NV",
                            qty: 20,
                            desc: "Lattice Twin Headboard, Navy, (41.5 Inch W x 2 Inch D x 52 Inch H) // Materials: Mahogany Wood, Rattan // Finish Code: JFN-NVY01, Finish Name: NAVY // KD // CBM: 0.169048 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/HB-KD101-T-NV_001.jpg"
                        },
                        {
                            item: "HB-KD101-T-WH",
                            qty: 30,
                            desc: "Lattice Twin Headboard, White, (41.5 Inch W x 2 Inch D x 52 Inch H) // Materials: Mahogany Wood, Rattan // Finish Code: JFN WHT 01, Finish Name: White // KD // CBM: 0.169048 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/HB-KD101-T-WH_001.jpg"
                        },
                        {
                            item: "HB-KD404-FQ-BL",
                            qty: 35,
                            desc: "Lattice Full/Queen Headboard, Blue, (64.25 Inch W x 2 Inch D x 52 Inch H) // Materials: Mahogany Wood, Rattan // Finish Code: JFN BLU 01, Finish Name: Blue // KD // CBM: 0.255816 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/HB-KD404-FQ-BL_001.jpg"
                        },
                        {
                            item: "HB-KD404-FQ-GN",
                            qty: 25,
                            desc: "Lattice Full/Queen Headboard, Green, (64.25 Inch W x 2 Inch D x 52 Inch H) // Materials: Mahogany Wood, Rattan // Finish Code: JFN GRN 01, Finish Name: Green // KD // CBM: 0.255816 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/HB-KD404-FQ-GN_001.jpg"
                        },
                        {
                            item: "SB-73106-GW",
                            qty: 55,
                            desc: "Hampton Chippendale Counterstool, 39.25 Inch H, Grey Wash, (19.75 Inch W x 20.5 Inch D x 39.25 Inch H)   //  Material: 0  //  CBM: 0.314  //  Packaging: EMPTY BOX  //  Master Carton: 1 PC  //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-73106-GW_001.jpg"
                        },
                        {
                            item: "SB-73106-WH",
                            qty: 35,
                            desc: "Hampton Chippendale Counter Stool, 39.25 Inch H, White, (19.75 Inch W x 20.5 Inch D x 39.25 Inch H)   //  Material: 0  //  CBM: 0.314  //  Packaging: EMPTY BOX  //  Master Carton: 1 PC  //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-73106-WH_001.jpg"
                        }
                    ]
                },
                "JW 2603-10N": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-06-25",
                    items: [
                        {
                            item: "AB-70889-NT",
                            qty: 30,
                            desc: "Organic Teak Wood Carved Bowl, 24 Inch W, Natural, (24 Inch W x 24 Inch D x 6 Inch H) // // Materials: Teak Wood // Finish Code: 39, Finish Name: HO Natural // // CBM: 0.054 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AB-70889-NT_001.jpg"
                        },
                        {
                            item: "AM-70457-NT",
                            qty: 30,
                            desc: "35 Inch Knotted Natural Fiber Round Mirror (36.61x1.574x36.61) // Material: Abaca Natural Weaving knot // CBM: 0.114 // Packaging: Box Kraft #150 + Box SW (stack cover) + Protect Box Styrofoam 2cm for Headboard 6cm + Styrofoam 100x200x2 + wrap paper/kg wide 120 + Plastik Handywrap 150x10x0.02 // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70457-NT_001.jpg"
                        },
                        {
                            item: "AM-70640-NT",
                            qty: 30,
                            desc: "Shine Woven Wave Frame Mirror, Natural, (35 Inch W x 3.5 Inch D x 35 Inch D) // Materials: Banana Small Natural // Finish Code: 1, Finish Name: Natural // Set Up // CBM: 0.11 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70640-NT_001.jpg"
                        },
                        {
                            item: "AM-70912-M",
                            qty: 15,
                            desc: "24 Inch Marina Round Rattan Mirror, White (23.62x3.543x23.62) // Material: Rattan; Sanded Peel // CBM: 0.093 // Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for Headboard (width in styrofoam and sw = 11cm) + Styrofoam 100x200x2 + Medium paper/kg (m2=0.2 kg) // Master Carton: Y , 1 Inch Drop Ship PAckaging Inch required",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70912-M_001.jpg"
                        },
                        {
                            item: "AM-LE701",
                            qty: 30,
                            desc: "Live Edge 3D Mirror Solid Suar Wood Frame (21.65x1.968x24.01) // Material: Munggur Wood // CBM: 0.05 // Packaging: Box Kraft #150 + Box SW (stack cover) + Protect Box Styrofoam 2cm for Headboard 6cm + Single Face + wrap paper/kg wide 120 + Styrofoam 100x200x2 // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-LE701_001.jpg"
                        },
                        {
                            item: "CT-7005-NT",
                            qty: 20,
                            desc: "Live Edge Teak Wood Coffee Table, 31.5 Inch , Natural 31.49x26.18x15.66 // Fabric Type: N/A // Finish Name: Tabletop: Natural /Legs: Black // KD // CBM: 0.0833 // Number of Shipping Boxes: 1 // // // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-7005-NT_001.jpg"
                        },
                        {
                            item: "CT-70435",
                            qty: 26,
                            desc: "Fulton Storage Coffee Table (30.70x30.70x15.74) // Material: // CBM: 0.339 // Packaging: Box Kraft #200 + Box SW + Protect Box Styrofoam PE 2cm (elbow shape) + Protect Box Styrofoam PE 2cm (L shape) + Medium paper/kg (m2=0.2 kg) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70435_001.jpg"
                        },
                        {
                            item: "CT-70542",
                            qty: 30,
                            desc: "Bayside Coffee Table with Storage (47.24x18.30x17.71) // Material: Full Kubu+Wood Base // CBM: 0.343 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70542_001.jpg"
                        },
                        {
                            item: "JV-AS504O-L",
                            qty: 30,
                            desc: "Aspen Round Mirror, Natural (31.10x2.244x31.10) // Material: Big Rope Woven // CBM: 0.101 // Packaging: Box Kraft #150 + Box SW (Pizza models) + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Protect Box Styrofoam 2cm (elbow shape) + wrap paper/kg wide 120 + Styrofoam 100x200x2 + Medium paper/kg (m2=0.2 kg) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-AS504O-L_001.jpg"
                        },
                        {
                            item: "JV-NHT402-4-WH",
                            qty: 30,
                            desc: "New Hampton Round End Table (15.74x15.74x18.50) // Material: // CBM: 0.119 // Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for a circle shape ( L ) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-NHT402-4-WH_001.jpg"
                        },
                        {
                            item: "LM-2497-NT",
                            qty: 10,
                            desc: "Sultan Woven Manila Rope Chandelier, 32 Inch Dia X 24 Inch H (32.28x32.28x24.40) // Material: Core + Agel - Hanger: Manilla Rope // CBM: 0.535 // Packaging: Box Kraft #150 + Protect hat model for Mekele Hanging Lamp(size 82x82x10) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Medium paper/kg (m2=0.2 kg) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/LM-2497-NT_001.jpg"
                        },
                        {
                            item: "SB-70363-NT",
                            qty: 32,
                            desc: "20 Inch H X-Style Ottoman with Raffia, Cream (21.65x16.53x19.68) // Material: Rope; Mango Wood // CBM: 0.164 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Single Face // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-70363-NT_001.jpg"
                        },
                        {
                            item: "ST-70108-BK",
                            qty: 25,
                            desc: "Kayu Petrifed Wood Top Pedestal Accent Table, 20 Inch H, Black (12x12x20) // Material: Petrified Black Munggur // Finish: Black-Black // ***ISTA 3A Packaging Required*** // ***INDIGO ROAD PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70108-BK_001.jpg"
                        },
                        {
                            item: "SY-SNB604-WH",
                            qty: 30,
                            desc: "Sanibel Counterstool (17.32x17.32x24.01)   //  Material: Waterhyacinth    //  CBM: 0.173  //  Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Single Face  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SY-SNB604-WH_001.jpg"
                        },
                        {
                            item: "TT-ST-70659-NT",
                            qty: 60,
                            desc: "Riley Twist Wooden Side Table (11.81x11.81x23.62)   //  Material: Munggur Wood    //  CBM: 0.098  //  Packaging: Box  Kraft #150 + Protect Box Styrofoam PE 2cm (elbow shape)  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-ST-70659-NT_001.jpg"
                        },
                        {
                            item: "TT-SY-PL303-NT",
                            qty: 25,
                            desc: "Prelude Round Stool (14.96x14.96x15.74)   //  Material: Teakwood    //  CBM: 0.091  //  Packaging: Box Kraft #150 + Box Single wall + Protect Box Styrofoam 2cm for a circle shape ( L )  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-SY-PL303-NT_001.jpg"
                        }
                    ]
                },
                "JW 2603-10N": {
                    Vendor: "V70 CV. JATI VISIONS RAYA",
                    ecrd: "2026-06-30",
                    items: [
                        {
                            item: "AC-70817",
                            qty: 40,
                            desc: "Maples Rattan and Bamboo Antique Basket (21.25x14.96x16.14) // Material: Rattan Half Polish; Bamboo; Sendi Peel // CBM: 0.124 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Medium paper/kg (m2=0.2 kg) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AC-70817_001.jpg"
                        },
                        {
                            item: "AD-70925-SET",
                            qty: 12,
                            desc: "Kera Round Wall Decor Set (35.43x2.952x35.43) // Material: Iron; Abaca // CBM: 0.139 // Packaging: Box Kraft #150 + Protect Box Styrofoam 2cm for a circle shape ( L ) // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AD-70925-SET_001.jpg"
                        },
                        {
                            item: "AM-70330-WH",
                            qty: 30,
                            desc: "Round Capiz Mirror, 30 Inch W, White 29.92x1.96x29.92 // Fabric Type: N/A // Finish Name: White // Set Up // CBM: 0.0805 // Number of Shipping Boxes: 1 // // // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AM-70330-WH_001.jpg"
                        },
                        {
                            item: "AW-70635-BD",
                            qty: 25,
                            desc: "Shine Wall Art, Blonde, (18.25 Inch W x 5.5 Inch D x 18.25 Inch H) // // Materials: Banana, Metal // Finish Code: 1, Finish Name: Natural // Set Up // CBM: 0.04 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AW-70635-BD_001.jpg"
                        },
                        {
                            item: "AW-70746-BD",
                            qty: 25,
                            desc: "Shine Wall Art, Blonde, (14.25 Inch W x 4 Inch D x 14.25 Inch H) // // Materials: Banana, Metal // Finish Code: 1, Finish Name: Natural // Set Up // CBM: 0.0328 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/AW-70746-BD_001.jpg"
                        },
                        {
                            item: "CT-70611-NT",
                            qty: 45,
                            desc: "Abella Round Woven Banana Leaf Coffee Table, 28 Inch W, Natural 28.15 Inch W x 28.15 Inch D x 14.75”H // Fabric Type: N/A // Finish Name: Natural // Set Up // CBM: 0.267 // Number of Shipping Boxes: 1 // // // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/CT-70611-NT_001.jpg"
                        },
                        {
                            item: "JV-AC504-S",
                            qty: 25,
                            desc: "Chesapeake Mirror (26.77x1.456x39.37) // Material: Capiz // CBM: 0.108 // Packaging: Box Kraft #150 + Box SW + Protect Box Styrofoam 2cm for shape Mirror (U shape) + Protect Box Styrofoam 2cm for Headboard Small H = 8 + Styrofoam 100x200x2 + Medium paper/kg (m2=0.2 kg) + wrap paper/kg wide 120 // Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-AC504-S_001.jpg"
                        },
                        {
                            item: "JV-CR401-BD",
                            qty: 30,
                            desc: "Cypress Cocktail Table, 35.5 Inch W, Blonde, (35.5 Inch W x 35.5 Inch D x 17.75 Inch H) // Materials: Banana Small Natural Lamination, Mungur Wood // Finish Code: 1-143, Finish Name: Banana Natural & Peanut Brown W/O Brush // Partial KD // CBM: 0.51 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/JV-CR401-BD_001.jpg"
                        },
                        {
                            item: "ST-70328-NU",
                            qty: 25,
                            desc: "Savoy Turned Leg Side Table With Marble Tabletop, Natural, (11.75 Inch W x 11.75 Inch D x 23 Inch H) //  // Materials: Mungur, Marble // Finish Code: 39, Finish Name: Natural Ho // Set Up  // CBM: 0.186 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70328-NU_001.JPG"
                        },
                        {
                            item: "ST-70768-BD",
                            qty: 25,
                            desc: "Cypress Accent Table, 14 Inch W, Blonde, (14 Inch W x 14 Inch D x 20 Inch H) // Materials: Banana Small Natural, Mungur Wood // Finish Code: 1-143, Finish Name: Banana Natural & Peanut Brown W/O Brush // Set Up // CBM: 0.1 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** // ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70768-BD_001.jpg"
                        },
                        {
                            item: "ST-70768-NT",
                            qty: 35,
                            desc: "Cypress Accent Table, 14 Inch W, Natural, (14 Inch W x 14 Inch D x 20 Inch H) // Materials: Banana Twisted Astor Lamination, Mungur Wood // Finish Code: 1-129, Finish Name: Natural - Wenge // Set Up  // CBM: 0.1 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED*** //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-70768-NT_001.jpg"
                        },
                        {
                            item: "SY-MR401-BD",
                            qty: 25,
                            desc: "Marina Abaca Double Bench with Storage, 40.2 Inch W, Blonde, (40.2 Inch W x 14.2 Inch D x 17.7 Inch H) // Materials: Banana Small Natural, Mungur Wood // Finish Code: 1-97, Finish Name: Banana Natural & White Patina // CBM: 0.23 // Number of Shipping Boxes: 1 // ***DROPSHIP PACKAGING REQUIRED*** //  ***ISTA 3A PACKAGING REQUIRED***",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SY-MR401-BD_001.jpg"
                        },
                        {
                            item: "TT-CT-211",
                            qty: 22,
                            desc: "Tropical Coffee Table Abaca Small Astor with Storage (48.03x30.31x18.11)   //  Material:     //  CBM: 0.446  //  Packaging: Box Kraft#150 + Protect Box Styrofoam 2cm (elbow shape) + Protect Box Styrofoam 2cm for a circle shape ( L ) + Single Face  //  Master Carton: Y , 1",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/TT-CT-211_001.jpg"
                        }
                    ]
                },
                "JW 2603-12N": {
                    Vendor: "V34 ISQAA SOURCING PRIVATE LIMITED",
                    ecrd: "2026-06-30",
                    items: [
                        {
                            item: "DR-342187-LB",
                            qty: 10,
                            desc: "Arden 3 Drawer Dresser With Lace Pattern, Light Brown (30W Inch x 18D Inch x 30H Inch ) // // Materials: Mango Wood, MDF, Metal ETC // Finish Code: Nara, Finish Name: Nara // Metal Rails - One Knob placed in the center of each drawer //Set Up // CBM: 0.38 // Number of Shipping Boxes: 1 // ***STURDY ACT TESTING REQUIRED***// ANTI TIP KIT REQUIRED***//",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DR-342187-LB_001.jpg"
                        },
                        {
                            item: "DT-342123-WD",
                            qty: 16,
                            desc: "Winslet Baluster Pedestal Bistro Dining Table, Whitewood (36W Inch x 36D Inch x 30H Inch ) // // Materials: Mango Wood, Metal ETC // Finish Code: 6396 PCG, Finish Name: White // KD // CBM: 0.43 // Number of Shipping Boxes: 2 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DT-342123-WD_001.jpg"
                        },
                        {
                            item: "DT-342298-MB",
                            qty: 20,
                            desc: "Hawthorne Traditional Square Pedestal Bistro Dining Table, Medium Brown (36W Inch x 36D Inch x 30H Inch ) // // Materials: Mango Wood, Metal ETC // Finish Code: 7012 PCG, Finish Name: Brown // KD // CBM: 0.33 // Number of Shipping Boxes: 2 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DT-342298-MB_001.jpg"
                        },
                        {
                            item: "DT-342399-WD",
                            qty: 8,
                            desc: "Clover Bistro Dining Table, Whitewood (37W Inch x 37D Inch x 30H Inch ) // // Materials: Mango Wood, Metal ETC // Finish Code: 6396 PCG, Finish Name: White // KD // CBM: 0.48 // Number of Shipping Boxes: 2 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DT-342399-WD_001.jpg"
                        },
                        {
                            item: "DT-344212-WD",
                            qty: 8,
                            desc: "Round Abstract Sphere Pedestal Dining Table, Whitewash (48W Inch x 48D Inch x 30H Inch ) // // Materials: Mango Wood // Finish Code: PCG 6396, Finish Name: White // KD // CBM: 0.67 // Number of Shipping Boxes: 2 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DT-344212-WD_001.jpg"
                        },
                        {
                            item: "DT-344302-LB",
                            qty: 12,
                            desc: "Linden Dining Table With Turned Legs, Light Brown (74W Inch x 39.5D Inch x 30.75H Inch ) // // Materials: Mango Wood // Finish Code: Nara, Finish Name: Nara // KD // CBM: 0.43 // Number of Shipping Boxes: 1 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DT-344302-LB_001.jpg"
                        },
                        {
                            item: "DT-64201-ES",
                            qty: 18,
                            desc: "Linden Dining Table With Turned Legs, Espresso (92W Inch x 39.5D Inch x 30.75H Inch ) // // Materials: Mango Wood // Finish Code: KK06, Finish Name: Grey Mango // KD // CBM: 0.6765 // Number of Shipping Boxes: 1 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/DT-64201-ES_001.jpg"
                        },
                        {
                            item: "OT-344111-LB",
                            qty: 12,
                            desc: "Linden Demilune Console With Turned Legs, Light Brown (55W Inch x 16D Inch x 30H Inch ) // Materials: Mango Wood // Finish Code: Nara, Finish Name: Nara // KD // CBM: 0.2400 // Number of Shipping Boxes: 1 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/OT-344111-LB_001.jpg"
                        },
                        {
                            item: "SB-342336-LB",
                            qty: 6,
                            desc: "Arden 4 Door Sideboard With Lace Pattern, Light Brown (78W Inch x 16D Inch x 34H Inch ) // // Materials: Mango Wood, MDF, Metal ETC // Finish Code: Nara, Finish Name: Nara // Set Up // CBM: 0.96 // Number of Shipping Boxes: 1 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-342336-LB_001.jpg"
                        },
                        {
                            item: "SB-345543-WD",
                            qty: 16,
                            desc: "Rama 4 Door Sideboard With 2 Drawers, Whitewood (60W Inch x 16D Inch x 34H Inch ) // // Materials: MANGO WOOD, MDF, IRON // Finish Code: 6396 PCG, Finish Name: White // Set Up // CBM: 0.74 // Number of Shipping Boxes: 1 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/SB-345543-WD_001.jpg"
                        },
                        {
                            item: "ST-344333-LB",
                            qty: 12,
                            desc: "Linden Side Table With Turned Legs, Light Brown (18W Inch x 18D Inch x 22H Inch ) // // Materials: Mango Wood // Finish Code: Nara, Finish Name: Nara // KD // CBM: 0.0826 // Number of Shipping Boxes: 1 //",
                            image: "https://6694454.app.netsuite.com/c.6694454/item-images/ST-344333-LB_001.jpg"
                        }
                    ]
                }
            };
// ================= BACK BUTTON =================
            function hitungAQL(qty) {
                if (qty <= 8) return 2;
                if (qty <= 15) return 3;
                if (qty <= 25) return 5;
                if (qty <= 50) return 8;
                if (qty <= 90) return 13;
                if (qty <= 150) return 20;
                if (qty <= 280) return 32;
                if (qty <= 500) return 50;
                return Math.ceil(qty * 0.2);
            }
            document.addEventListener("DOMContentLoaded", function () {
                const vendorSelect = document.getElementById("vendorSelect");
                const poSelect = document.getElementById("poSelect");
                const tbody = document.querySelector("#dataTable tbody");

                const poHeader = document.getElementById("poHeader");
                const headerVendor = document.getElementById("headerVendor");
                const headerPO = document.getElementById("headerPO");
                const headerECRD = document.getElementById("headerECRD");
                const printDate = document.getElementById("printDate");

                [...new Set(Object.values(data).map(d => d.Vendor))]
                    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
                    .forEach(v => {
                        const opt = document.createElement("option");
                        opt.value = v;
                        opt.textContent = v;
                        vendorSelect.appendChild(opt);
                    });

                vendorSelect.addEventListener("change", function () {
                    poSelect.innerHTML = '<option value="">-- Select PO --</option>';
                    tbody.innerHTML = "";
                    poHeader.style.display = "none";
                    document.getElementById("dataTable").style.display = "none";

                    Object.keys(data).forEach(po => {
                        if (data[po].Vendor === this.value) {
                            const opt = document.createElement("option");
                            opt.value = po;
                            opt.textContent = po;
                            poSelect.appendChild(opt);
                        }
                    });
                });

                poSelect.addEventListener("change", function () {
                    tbody.innerHTML = "";
                    const po = this.value;
                    const dataTable = document.getElementById("dataTable");

                    // jika kembali ke Select
                    if (po === "") {
                        dataTable.style.display = "none";
                        poHeader.style.display = "none";
                        return;
                    }

                    dataTable.style.display = "table";

                    headerVendor.textContent = data[po].Vendor;
                    headerPO.textContent = po;

                    headerECRD.textContent =
                        new Date(data[po].ecrd).toLocaleDateString("en-US", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric"
                        });

                    const printDateElement = document.getElementById("printDate");
                    const printDate = new Date();
                    printDateElement.textContent = printDate.toLocaleDateString("en-US");

                    poHeader.style.display = "block";

                    data[po].items.forEach(item => {
                        const tr = document.createElement("tr");
                        const qtyAQL = hitungAQL(item.qty);
                        tr.innerHTML = `
    <td class="item">${item.item}</td>
    <td class="qty">${item.qty}</td>
    <td class="aql">${qtyAQL}</td>
    <td>${item.desc}</td>
    <td>
    <img src="${item.image}" style="cursor:pointer; max-width:100px;" onclick="toggleModal(this)">
   </td>
`;

                        tbody.appendChild(tr);
                    });
                });
            });

            function toggleModal(img) {
                const modal = document.getElementById('imgModal');
                const modalImg = document.getElementById('modalImg');

                modal.style.display = "block";
                modalImg.src = img.src;
            }

            // Klik area gelap atau gambar modal → tutup
            document.getElementById('imgModal').onclick = function (e) {
                // Tutup jika klik modal sendiri atau klik gambar
                if (e.target.id === 'imgModal' || e.target.id === 'modalImg') {
                    this.style.display = "none";
                }
            }
            const prevBtn = document.getElementById("prevPO");
            const nextBtn = document.getElementById("nextPO");

            prevBtn.addEventListener("click", function () {

                let index = poSelect.selectedIndex;

                if (index > 1) {
                    poSelect.selectedIndex = index - 1;
                    poSelect.dispatchEvent(new Event("change"));
                }

            });

            nextBtn.addEventListener("click", function () {

                let index = poSelect.selectedIndex;

                if (index < poSelect.options.length - 1) {
                    poSelect.selectedIndex = index + 1;
                    poSelect.dispatchEvent(new Event("change"));
                }
 });
function backToApp1() {
                window.location.href = "https://boetepaythea-sudo.github.io/Inspection-App/";
            }

