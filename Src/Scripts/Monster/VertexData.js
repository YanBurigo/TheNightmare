class nodo {}

const p0 = new nodo();
p0.valor = "null";
p0.prox = ["null"];
p0.x = "null";
p0.z = "null";

const p1 = new nodo();
p1.valor = "p1";
p1.prox = ["p2", "p5"];
p1.x = -55;
p1.z = 48;

const p2 = new nodo();
p2.valor = "p2";
p2.prox = ["p1","p3","p4"];
p2.x = -55;
p2.z = 19;

const p3 = new nodo();
p3.valor = "p3";
p3.prox = ["p2"];
p3.x = -55;
p3.z = 9;

const p4 = new nodo();
p4.valor = "p4";
p4.prox = ["p2", "p104"];
p4.x = -35;
p4.z = 19;

const p5 = new nodo();
p5.valor = "p5";
p5.prox = ["p1", "p6", "p15"];
p5.x = -50;
p5.z = 48;

const p6 = new nodo();
p6.valor = "p6";
p6.prox = ["p5", "p7"];
p6.x = -50;
p6.z = 24;

const p7 = new nodo();
p7.valor = "p7";
p7.prox = ["p6", "p8"];
p7.x = -40;
p7.z = 24;

const p8 = new nodo();
p8.valor = "p8";
p8.prox = ["p7","p9"];
p8.x = -40;
p8.z = 29;

const p9 = new nodo();
p9.valor = "p9";
p9.prox = ["p8","p10"];
p9.x = -45;
p9.z = 29;

const p10 = new nodo();
p10.valor = "p10";
p10.prox = ["p9","p11"];
p10.x = -45;
p10.z = 44;

const p11 = new nodo();
p11.valor = "p11";
p11.prox = ["p10","p12"];
p11.x = -35;
p11.z = 44;

const p12 = new nodo();
p12.valor = "p12";
p12.prox = ["p11","p13"];
p12.x = -35;
p12.z = 39;

const p13 = new nodo();
p13.valor = "p13";
p13.prox = ["p12","p14"];
p13.x = -40;
p13.z = 39;

const p14 = new nodo();
p14.valor = "p14";
p14.prox = ["p13"];
p14.x = -40;
p14.z = 34;

const p15 = new nodo();
p15.valor = "p15";
p15.prox = ["p5","p16","p19"];
p15.x = -35;
p15.z = 48;

const p16 = new nodo();
p16.valor = "p16";
p16.prox = ["p15","p17","p18"];
p16.x = -35;
p16.z = 54;

const p17 = new nodo();
p17.valor = "p17";
p17.prox = ["p16"];
p17.x = -30;
p17.z = 54;

const p18 = new nodo();
p18.valor = "p18";
p18.prox = ["p16"];
p18.x = -50;
p18.z = 54;

const p19 = new nodo();
p19.valor = "p19";
p19.prox = ["p15", "p20"];
p19.x = -25;
p19.z = 48;

const p20 = new nodo();
p20.valor = "p20";
p20.prox = ["p19", "p21"];
p20.x = -25;
p20.z = 54;

const p21 = new nodo();
p21.valor = "p21";
p21.prox = ["p20", "p22", "p24"];
p21.x = -20;
p21.z = 54;

const p22 = new nodo();
p22.valor = "p22";
p22.prox = ["p21", "p23"];
p22.x = -20;
p22.z = 48;

const p23 = new nodo();
p23.valor = "p23";
p23.prox = ["p22"];
p23.x = -15;
p23.z = 48;

const p24 = new nodo();
p24.valor = "p24";
p24.prox = ["p21","p25","p35"];
p24.x = -10;
p24.z = 54;

const p25 = new nodo();
p25.valor = "p25";
p25.prox = ["p24","p26"];
p25.x = -10;
p25.z = 44;

const p26 = new nodo();
p26.valor = "p26";
p26.prox = ["p25","p27"];
p26.x = -30;
p26.z = 44;

const p27 = new nodo();
p27.valor = "p27";
p27.prox = ["p26","p28"];
p27.x = -30;
p27.z = 39;

const p28 = new nodo();
p28.valor = "p28";
p28.prox = ["p27","p29"];
p28.x = -5;
p28.z = 39;

const p29 = new nodo();
p29.valor = "p29";
p29.prox = ["p28","p30","p31"];
p29.x = -5;
p29.z = 34;

const p30 = new nodo();
p30.valor = "p30";
p30.prox = ["p29"];
p30.x = -20;
p30.z = 34;

const p31 = new nodo();
p31.valor = "p31";
p31.prox = ["p29","p32"];
p31.x = -5;
p31.z = 24;

const p32 = new nodo();
p32.valor = "p32";
p32.prox = ["p31","p33"];
p32.x = -15;
p32.z = 24;

const p33 = new nodo();
p33.valor = "p33";
p33.prox = ["p32","p34"];
p33.x = -15;
p33.z = 29;

const p34 = new nodo();
p34.valor = "p34";
p34.prox = ["p33"];
p34.x = -10;
p34.z = 29;

const p35 = new nodo();
p35.valor = "p35";
p35.prox = ["p24","p36","p61"];
p35.x = -5;
p35.z = 54;

const p36 = new nodo();
p36.valor = "p36";
p36.prox = ["p35","p37"];
p36.x = -5;
p36.z = 44;

const p37 = new nodo();
p37.valor = "p37";
p37.prox = ["p36","p38"];
p37.x = 5;
p37.z = 44;

const p38 = new nodo();
p38.valor = "p38";
p38.prox = ["p37","p39","p41"];
p38.x = 5;
p38.z = 34;

const p39 = new nodo();
p39.valor = "p39";
p39.prox = ["p38","p40"];
p39.x = 0;
p39.z = 34;

const p40 = new nodo();
p40.valor = "p40";
p40.prox = ["p39"];
p40.x = 0;
p40.z = 24;

const p41 = new nodo();
p41.valor = "p41";
p41.prox = ["p38","p42"];
p41.x = 5;
p41.z = 14;

const p42 = new nodo();
p42.valor = "p42";
p42.prox = ["p41","p43","p52"];
p42.x = 10;
p42.z = 14;

const p43 = new nodo();
p43.valor = "p43";
p43.prox = ["p42","p44"];
p43.x = 10;
p43.z = 29;

const p44 = new nodo();
p44.valor = "p44";
p44.prox = ["p43","p45"];
p44.x = 15;
p44.z = 29;

const p45 = new nodo();
p45.valor = "p45";
p45.prox = ["p44","p46"];
p45.x = 15;
p45.z = 24;

const p46 = new nodo();
p46.valor = "p46";
p46.prox = ["p45","p47"];
p46.x = 30;
p46.z = 24;

const p47 = new nodo();
p47.valor = "p47";
p47.prox = ["p46","p48"];
p47.x = 30;
p47.z = 19;

const p48 = new nodo();
p48.valor = "p48";
p48.prox = ["p47","p49"];
p48.x = 35;
p48.z = 19;

const p49 = new nodo();
p49.valor = "p49";
p49.prox = ["p48","p50"];
p49.x = 35;
p49.z = 24;

const p50 = new nodo();
p50.valor = "p50";
p50.prox = ["p49","p51"];
p50.x = 40;
p50.z = 24;

const p51 = new nodo();
p51.valor = "p51";
p51.prox = ["p50"];
p51.x = 40;
p51.z = 19;

const p52 = new nodo();
p52.valor = "p52";
p52.prox = ["p42","p53"];
p52.x = 15;
p52.z = 14;

const p53 = new nodo();
p53.valor = "p53";
p53.prox = ["p52","p54"];
p53.x = 15;
p53.z = 19;

const p54 = new nodo();
p54.valor = "p54";
p54.prox = ["p53","p55"];
p54.x = 25;
p54.z = 19;

const p55 = new nodo();
p55.valor = "p55";
p55.prox = ["p54","p56"];
p55.x = 25;
p55.z = 14;

const p56 = new nodo();
p56.valor = "p56";
p56.prox = ["p55","p57"];
p56.x = 20;
p56.z = 14;

const p57 = new nodo();
p57.valor = "p57";
p57.prox = ["p56","p58"];
p57.x = 20;
p57.z = 9;

const p58 = new nodo();
p58.valor = "p58";
p58.prox = ["p57","p59"];
p58.x = 5;
p58.z = 9;

const p59 = new nodo();
p59.valor = "p59";
p59.prox = ["p58","p60"];
p59.x = 5;
p59.z = 4;

const p60 = new nodo();
p60.valor = "p60";
p60.prox = ["p59"];
p60.x = 15;
p60.z = 4;

const p61 = new nodo();
p61.valor = "p61";
p61.prox = ["p35","p62","p91"];
p61.x = 40;
p61.z = 54;

const p62 = new nodo();
p62.valor = "p62";
p62.prox = ["p61","p63"];
p62.x = 40;
p62.z = 34;

const p63 = new nodo();
p63.valor = "p63";
p63.prox = ["p62","p64"];
p63.x = 30;
p63.z = 34;

const p64 = new nodo();
p64.valor = "p64";
p64.prox = ["p63","p65"];
p64.x = 30;
p64.z = 39;

const p65 = new nodo();
p65.valor = "p65";
p65.prox = ["p64","p66"];
p65.x = 35;
p65.z = 39;

const p66 = new nodo();
p66.valor = "p66";
p66.prox = ["p65","p67"];
p66.x = 35;
p66.z = 44;

const p67 = new nodo();
p67.valor = "p67";
p67.prox = ["p66","p68","p69"];
p67.x = 25;
p67.z = 44;

const p68 = new nodo();
p68.valor = "p68";
p68.prox = ["p67"];
p68.x = 15;
p68.z = 44;

const p69 = new nodo();
p69.valor = "p69";
p69.prox = ["p67","p70","p71"];
p69.x = 25;
p69.z = 39;

const p70 = new nodo();
p70.valor = "p70";
p70.prox = ["p69"];
p70.x = 15;
p70.z = 39;

const p71 = new nodo();
p71.valor = "p71";
p71.prox = ["p69","p72"];
p71.x = 25;
p71.z = 34;

const p72 = new nodo();
p72.valor = "p72";
p72.prox = ["p71","p73","p77"];
p72.x = 20;
p72.z = 34;

const p73 = new nodo();
p73.valor = "p73";
p73.prox = ["p72","p74"];
p73.x = 10;
p73.z = 34;

const p74 = new nodo();
p74.valor = "p74";
p74.prox = ["p73","p75","p76"];
p74.x = 10;
p74.z = 48;

const p75 = new nodo();
p75.valor = "p75";
p75.prox = ["p74"];
p75.x = 0;
p75.z = 48;

const p76 = new nodo();
p76.valor = "p76";
p76.prox = ["p74"];
p76.x = 35;
p76.z = 48;

const p77 = new nodo();
p77.valor = "p77";
p77.prox = ["p72","p78"];
p77.x = 20;
p77.z = 29;

const p78 = new nodo();
p78.valor = "p78";
p78.prox = ["p77","p79"];
p78.x = 45;
p78.z = 29;

const p79 = new nodo();
p79.valor = "p79";
p79.prox = ["p78","p80"];
p79.x = 45;
p79.z = 14;

const p80 = new nodo();
p80.valor = "p80";
p80.prox = ["p79","p81"];
p80.x = 30;
p80.z = 14;

const p81 = new nodo();
p81.valor = "p81";
p81.prox = ["p80","p82"];
p81.x = 30;
p81.z = 9;

const p82 = new nodo();
p82.valor = "p82";
p82.prox = ["p81","p83"];
p82.x = 25;
p82.z = 9;

const p83 = new nodo();
p83.valor = "p83";
p83.prox = ["p82","p84"];
p83.x = 25;
p83.z = 4;

const p84 = new nodo();
p84.valor = "p84";
p84.prox = ["p83","p85"];
p84.x = 20;
p84.z = 4;

const p85 = new nodo();
p85.valor = "p85";
p85.prox = ["p84","p86","p87"];
p85.x = 20;
p85.z = -1;

const p86 = new nodo();
p86.valor = "p86";
p86.prox = ["p85"];
p86.x = -5;
p86.z = -1;

const p87 = new nodo();
p87.valor = "p87";
p87.prox = ["p85","p88"];
p87.x = 30;
p87.z = -1;

const p88 = new nodo();
p88.valor = "p88";
p88.prox = ["p87","p89"];
p88.x = 30;
p88.z = 4;

const p89 = new nodo();
p89.valor = "p89";
p89.prox = ["p88","p90"];
p89.x = 35;
p89.z = 4;

const p90 = new nodo();
p90.valor = "p90";
p90.prox = ["p89"];
p90.x = 35;
p90.z = 9;

const p91 = new nodo();
p91.valor = "p91";
p91.prox = ["p61","p92"];
p91.x = 55;
p91.z = 54;

const p92 = new nodo();
p92.valor = "p92";
p92.prox = ["p91","p93"];
p92.x = 55;
p92.z = 48;

const p93 = new nodo();
p93.valor = "p93";
p93.prox = ["p92","p94"];
p93.x = 50;
p93.z = 48;

const p94 = new nodo();
p94.valor = "p94";
p94.prox = ["p93","p95"];
p94.x = 50;
p94.z = 44;

const p95 = new nodo();
p95.valor = "p95";
p95.prox = ["p94","p96"];
p95.x = 55;
p95.z = 44;

const p96 = new nodo();
p96.valor = "p96";
p96.prox = ["p95","p97","p99"];
p96.x = 55;
p96.z = 39;

const p97 = new nodo();
p97.valor = "p97";
p97.prox = ["p96","p98"];
p97.x = 45;
p97.z = 39;

const p98 = new nodo();
p98.valor = "p98";
p98.prox = ["p97"];
p98.x = 45;
p98.z = 48;

const p99 = new nodo();
p99.valor = "p99";
p99.prox = ["p96","p100","p103"];
p99.x = 55;
p99.z = 14;

const p100 = new nodo();
p100.valor = "p100";
p100.prox = ["p99","p101"];
p100.x = 50;
p100.z = 14;

const p101 = new nodo();
p101.valor = "p101";
p101.prox = ["p100","p102"];
p101.x = 50;
p101.z = 34;

const p102 = new nodo();
p102.valor = "p102";
p102.prox = ["p101"];
p102.x = 45;
p102.z = 34;

const p103 = new nodo();
p103.valor = "p103";
p103.prox = ["p99"];
p103.x = 55;
p103.z = 4;

const p104 = new nodo();
p104.valor = "p104";
p104.prox = ["p4","p105"];
p104.x = -35;
p104.z = 34;

const p105 = new nodo();
p105.valor = "p105";
p105.prox = ["p104","p106","p111"];
p105.x = -30;
p105.z = 34;

const p106 = new nodo();
p106.valor = "p106";
p106.prox = ["p105","p107"];
p106.x = -30;
p106.z = 9;

const p107 = new nodo();
p107.valor = "p107";
p107.prox = ["p106","p108"];
p107.x = -35;
p107.z = 9;

const p108 = new nodo();
p108.valor = "p108";
p108.prox = ["p107","p109"];
p108.x = -35;
p108.z = -1;

const p109 = new nodo();
p109.valor = "p109";
p109.prox = ["p108","p110"];
p109.x = -30;
p109.z = -1;

const p110 = new nodo();
p110.valor = "p110";
p110.prox = ["p109"];
p110.x = -30;
p110.z = 4;

const p111 = new nodo();
p111.valor = "p111";
p111.prox = ["p105","p112"];
p111.x = -25;
p111.z = 34;

const p112 = new nodo();
p112.valor = "p112";
p112.prox = ["p111","p113"];
p112.x = -25;
p112.z = -6;

const p113 = new nodo();
p113.valor = "p113";
p113.prox = ["p112","p114"];
p113.x = -45;
p113.z = -6;

const p114 = new nodo();
p114.valor = "p114";
p114.prox = ["p113","p115"];
p114.x = -45;
p114.z = -1;

const p115 = new nodo();
p115.valor = "p115";
p115.prox = ["p114","p116"];
p115.x = -40;
p115.z = -1;

const p116 = new nodo();
p116.valor = "p116";
p116.prox = ["p115","p117"];
p116.x = -40;
p116.z = 4;

const p117 = new nodo();
p117.valor = "p117";
p117.prox = ["p116","p118"];
p117.x = -45;
p117.z = 4;

const p118 = new nodo();
p118.valor = "p118";
p118.prox = ["p117","p119"];
p118.x = -45;
p118.z = 9;

const p119 = new nodo();
p119.valor = "p119";
p119.prox = ["p118","p120"];
p119.x = -40;
p119.z = 9;

const p120 = new nodo();
p120.valor = "p120";
p120.prox = ["p119","p121","p122"];
p120.x = -40;
p120.z = 14;

const p121 = new nodo();
p121.valor = "p121";
p121.prox = ["p120"];
p121.x = -35;
p121.z = 14;

const p122 = new nodo();
p122.valor = "p122";
p122.prox = ["p120","p123"];
p122.x = -50;
p122.z = 14;

const p123 = new nodo();
p123.valor = "p123";
p123.prox = ["p122","p124"];
p123.x = -50;
p123.z = 4;

const p124 = new nodo();
p124.valor = "p124";
p124.prox = ["p123","p125"];
p124.x = -55;
p124.z = 4;

const p125 = new nodo();
p125.valor = "p125";
p125.prox = ["p124","p126"];
p125.x = -55;
p125.z = -16;

const p126 = new nodo();
p126.valor = "p126";
p126.prox = ["p125","p127","p132"];
p126.x = -35;
p126.z = -16;

const p127 = new nodo();
p127.valor = "p127";
p127.prox = ["p126","p128","p130"];
p127.x = -35;
p127.z = -11;

const p128 = new nodo();
p128.valor = "p128";
p128.prox = ["p127","p129"];
p128.x = -50;
p128.z = -11;

const p129 = new nodo();
p129.valor = "p129";
p129.prox = ["p128"];
p129.x = -50;
p129.z = -1;

const p130 = new nodo();
p130.valor = "p130";
p130.prox = ["p127","p131"];
p130.x = -20;
p130.z = -11;

const p131 = new nodo();
p131.valor = "p131";
p131.prox = ["p130"];
p131.x = -20;
p131.z = 29;

const p132 = new nodo();
p132.valor = "p132";
p132.prox = ["p126","p133","p135"];
p132.x = -15;
p132.z = -16;

const p133 = new nodo();
p133.valor = "p133";
p133.prox = ["p132","p134"];
p133.x = -10;
p133.z = -16;

const p134 = new nodo();
p134.valor = "p134";
p134.prox = ["p133"];
p134.x = -10;
p134.z = -11;

const p135 = new nodo();
p135.valor = "p135";
p135.prox = ["p132","p136"];
p135.x = -15;
p135.z = 19;

const p136 = new nodo();
p136.valor = "p136";
p136.prox = ["p135","p137"];
p136.x = 0;
p136.z = 19;

const p137 = new nodo();
p137.valor = "p137";
p137.prox = ["p136","p138"];
p137.x = 0;
p137.z = 4;

const p138 = new nodo();
p138.valor = "p138";
p138.prox = ["p137","p139","p142"];
p138.x = -10;
p138.z = 4;

const p139 = new nodo();
p139.valor = "p139";
p139.prox = ["p138","p140"];
p139.x = -10;
p139.z = 14;

const p140 = new nodo();
p140.valor = "p140";
p140.prox = ["p139","p141"];
p140.x = -5;
p140.z = 14;

const p141 = new nodo();
p141.valor = "p141";
p141.prox = ["p140"];
p141.x = -5;
p141.z = 9;

const p142 = new nodo();
p142.valor = "p142";
p142.prox = ["p138","p143"];
p142.x = -10;
p142.z = -6;

const p143 = new nodo();
p143.valor = "p143";
p143.prox = ["p142","p144","p148"];
p143.x = -5;
p143.z = -6;

const p144 = new nodo();
p144.valor = "p144";
p144.prox = ["p143","p145"];
p144.x = -5;
p144.z = -21;

const p145 = new nodo();
p145.valor = "p145";
p145.prox = ["p144","p146"];
p145.x = -30;
p145.z = -21;

const p146 = new nodo();
p146.valor = "p146";
p146.prox = ["p145","p147"];
p146.x = -30;
p146.z = -26;

const p147 = new nodo();
p147.valor = "p147";
p147.prox = ["p146"];
p147.x = -20;
p147.z = -26;

const p148 = new nodo();
p148.valor = "p148";
p148.prox = ["p143","p149"];
p148.x = 10;
p148.z = -6;

const p149 = new nodo();
p149.valor = "p149";
p149.prox = ["p148","p150","p151"];
p149.x = 10;
p149.z = -16;

const p150 = new nodo();
p150.valor = "p150";
p150.prox = ["p149"];
p150.x = 15;
p150.z = -16;

const p151 = new nodo();
p151.valor = "p151";
p151.prox = ["p149","p152","p196"];
p151.x = 10;
p151.z = -26;

const p152 = new nodo();
p152.valor = "p152";
p152.prox = ["p151","p153"];
p152.x = 5;
p152.z = -26;

const p153 = new nodo();
p153.valor = "p153";
p153.prox = ["p152","p154"];
p153.x = 5;
p153.z = -11;

const p154 = new nodo();
p154.valor = "p154";
p154.prox = ["p153","p155"];
p154.x = 0;
p154.z = -11;

const p155 = new nodo();
p155.valor = "p155";
p155.prox = ["p154","p156"];
p155.x = 0;
p155.z = -26;

const p156 = new nodo();
p156.valor = "p156";
p156.prox = ["p155","p157"];
p156.x = -15;
p156.z = -26;

const p157 = new nodo();
p157.valor = "p157";
p157.prox = ["p156","p158"];
p157.x = -15;
p157.z = -31;

const p158 = new nodo();
p158.valor = "p158";
p158.prox = ["p157","p159"];
p158.x = -20;
p158.z = -31;

const p159 = new nodo();
p159.valor = "p159";
p159.prox = ["p158","p160"];
p159.x = -20;
p159.z = -36;

const p160 = new nodo();
p160.valor = "p160";
p160.prox = ["p159","p161"];
p160.x = -25;
p160.z = -36;

const p161 = new nodo();
p161.valor = "p161";
p161.prox = ["p160","p162"];
p161.x = -25;
p161.z = -31;

const p162 = new nodo();
p162.valor = "p162";
p162.prox = ["p161","p163"];
p162.x = -30;
p162.z = -31;

const p163 = new nodo();
p163.valor = "p163";
p163.prox = ["p162","p164"];
p163.x = -30;
p163.z = -36;

const p164 = new nodo();
p164.valor = "p164";
p164.prox = ["p163","p165"];
p164.x = -35;
p164.z = -36;

const p165 = new nodo();
p165.valor = "p165";
p165.prox = ["p164","p166"];
p165.x = -35;
p165.z = -31;

const p166 = new nodo();
p166.valor = "p166";
p166.prox = ["p165","p167","p170"];
p166.x = -40;
p166.z = -31;

const p167 = new nodo();
p167.valor = "p167";
p167.prox = ["p166","p168"];
p167.x = -40;
p167.z = -36;

const p168 = new nodo();
p168.valor = "p168";
p168.prox = ["p167","p169"];
p168.x = -45;
p168.z = -36;

const p169 = new nodo();
p169.valor = "p169";
p169.prox = ["p168"];
p169.x = -45;
p169.z = -31;

const p170 = new nodo();
p170.valor = "p170";
p170.prox = ["p166","p171","p174"];
p170.x = -40;
p170.z = -26;

const p171 = new nodo();
p171.valor = "p171";
p171.prox = ["p170","p172"];
p171.x = -40;
p171.z = -21;

const p172 = new nodo();
p172.valor = "p172";
p172.prox = ["p171","p173"];
p172.x = -35;
p172.z = -21;

const p173 = new nodo();
p173.valor = "p173";
p173.prox = ["p172"];
p173.x = -35;
p173.z = -26;

const p174 = new nodo();
p174.valor = "p174";
p174.prox = ["p170","p175"];
p174.x = -45;
p174.z = -26;

const p175 = new nodo();
p175.valor = "p175";
p175.prox = ["p174","p176"];
p175.x = -45;
p175.z = -21;

const p176 = new nodo();
p176.valor = "p176";
p176.prox = ["p175","p177"];
p176.x = -55;
p176.z = -21;

const p177 = new nodo();
p177.valor = "p177";
p177.prox = ["p176","p178","p180"];
p177.x = -55;
p177.z = -26;

const p178 = new nodo();
p178.valor = "p178";
p178.prox = ["p177","p179"];
p178.x = -55;
p178.z = -56;

const p179 = new nodo();
p179.valor = "p179";
p179.prox = ["p178"];
p179.x = -45;
p179.z = -56;

const p180 = new nodo();
p180.valor = "p180";
p180.prox = ["p177","p181"];
p180.x = -50;
p180.z = -26;

const p181 = new nodo();
p181.valor = "p181";
p181.prox = ["p180","p182"];
p181.x = -50;
p181.z = -51;

const p182 = new nodo();
p182.valor = "p182";
p182.prox = ["p181","p183", "p186"];
p182.x = -40;
p182.z = -51;

const p183 = new nodo();
p183.valor = "p183";
p183.prox = ["p182","p184"];
p183.x = -25;
p183.z = -51;

const p184 = new nodo();
p184.valor = "p184";
p184.prox = ["p183","p185"];
p184.x = -25;
p184.z = -46;

const p185 = new nodo();
p185.valor = "p185";
p185.prox = ["p184"];
p185.x = -45;
p185.z = -46;

const p186 = new nodo();
p186.valor = "p186";
p186.prox = ["p182","p187"];
p186.x = -40;
p186.z = -56;

const p187 = new nodo();
p187.valor = "p187";
p187.prox = ["p186","p188"];
p187.x = -20;
p187.z = -56;

const p188 = new nodo();
p188.valor = "p188";
p188.prox = ["p187","p189"];
p188.x = -20;
p188.z = -46;

const p189 = new nodo();
p189.valor = "p189";
p189.prox = ["p188","p190"];
p189.x = -5;
p189.z = -46;

const p190 = new nodo();
p190.valor = "p190";
p190.prox = ["p189","p191","p192"];
p190.x = -5;
p190.z = -51;

const p191 = new nodo();
p191.valor = "p191";
p191.prox = ["p190"];
p191.x = -5;
p191.z = -55;

const p192 = new nodo();
p192.valor = "p192";
p192.prox = ["p190","p193","p194"];
p192.x = -10;
p192.z = -51;

const p193 = new nodo();
p193.valor = "p193";
p193.prox = ["p192"];
p193.x = -10;
p193.z = -55;

const p194 = new nodo();
p194.valor = "p194";
p194.prox = ["p192","p195"];
p194.x = -15;
p194.z = -51;

const p195 = new nodo();
p195.valor = "p195";
p195.prox = ["p194"];
p195.x = -15;
p195.z = -55;

const p196 = new nodo();
p196.valor = "p196";
p196.prox = ["p151","p197","p199"];
p196.x = 15;
p196.z = -26;

const p197 = new nodo();
p197.valor = "p197";
p197.prox = ["p196","p198"];
p197.x = 15;
p197.z = -31;

const p198 = new nodo();
p198.valor = "p198";
p198.prox = ["p197"];
p198.x = 10;
p198.z = -31;

const p199 = new nodo();
p199.valor = "p199";
p199.prox = ["p196","p200"];
p199.x = 15;
p199.z = -21;

const p200 = new nodo();
p200.valor = "p200";
p200.prox = ["p199","p201"];
p200.x = 20;
p200.z = -21;

const p201 = new nodo();
p201.valor = "p201";
p201.prox = ["p200","p202"];
p201.x = 20;
p201.z = -11;

const p202 = new nodo();
p202.valor = "p202";
p202.prox = ["p201","p203"];
p202.x = 15;
p202.z = -11;

const p203 = new nodo();
p203.valor = "p203";
p203.prox = ["p202","p204"];
p203.x = 15;
p203.z = -6;

const p204 = new nodo();
p204.valor = "p204";
p204.prox = ["p203","p205"];
p204.x = 25;
p204.z = -6;

const p205 = new nodo();
p205.valor = "p205";
p205.prox = ["p204","p206", "p207"];
p205.x = 35;
p205.z = -6;

const p206 = new nodo();
p206.valor = "p206";
p206.prox = ["p205"];
p206.x = 35;
p206.z = -1;

const p207 = new nodo();
p207.valor = "p207";
p207.prox = ["p205","p208"];
p207.x = 35;
p207.z = -21;

const p208 = new nodo();
p208.valor = "p208";
p208.prox = ["p207","p209","p210"];
p208.x = 30;
p208.z = -21;

const p209 = new nodo();
p209.valor = "p209";
p209.prox = ["p208"];
p209.x = 30;
p209.z = -11;

const p210 = new nodo();
p210.valor = "p210";
p210.prox = ["p208","p211"];
p210.x = 30;
p210.z = -51;

const p211 = new nodo();
p211.valor = "p211";
p211.prox = ["p210","p212"];
p211.x = 35;
p211.z = -51;

const p212 = new nodo();
p212.valor = "p212";
p212.prox = ["p211","p213"];
p212.x = 35;
p212.z = -46;

const p213 = new nodo();
p213.valor = "p213";
p213.prox = ["p212","p214"];
p213.x = 50;
p213.z = -46;

const p214 = new nodo();
p214.valor = "p214";
p214.prox = ["p213"];
p214.x = 50;
p214.z = -51;

const p215 = new nodo();
p215.valor = "p215";
p215.prox = ["p204","p216"];
p215.x = 25;
p215.z = -41;

const p216 = new nodo();
p216.valor = "p216";
p216.prox = ["p215","p217","p229"];
p216.x = 0;
p216.z = -41;

const p217 = new nodo();
p217.valor = "p217";
p217.prox = ["p216","p218"];
p217.x = 0;
p217.z = -36;

const p218 = new nodo();
p218.valor = "p218";
p218.prox = ["p217","p219","p221","p226"];
p218.x = -10;
p218.z = -36;

const p219 = new nodo();
p219.valor = "p219";
p219.prox = ["p218","p220"];
p219.x = -10;
p219.z = -41;

const p220 = new nodo();
p220.valor = "p220";
p220.prox = ["p219"];
p220.x = -5;
p220.z = -41;

const p221 = new nodo();
p221.valor = "p221";
p221.prox = ["p218","p222"];
p221.x = -10;
p221.z = -31;

const p222 = new nodo();
p222.valor = "p222";
p222.prox = ["p221","p223"];
p222.x = 5;
p222.z = -31;

const p223 = new nodo();
p223.valor = "p223";
p223.prox = ["p222","p224"];
p223.x = 5;
p223.z = -36;

const p224 = new nodo();
p224.valor = "p224";
p224.prox = ["p223","p225"];
p224.x = 20;
p224.z = -36;

const p225 = new nodo();
p225.valor = "p225";
p225.prox = ["p224"];
p225.x = 20;
p225.z = -26;

const p226 = new nodo();
p226.valor = "p226";
p226.prox = ["p218","p227"];
p226.x = -15;
p226.z = -36;

const p227 = new nodo();
p227.valor = "p227";
p227.prox = ["p226","p228"];
p227.x = -15;
p227.z = -41;

const p228 = new nodo();
p228.valor = "p228";
p228.prox = ["p227"];
p228.x = -45;
p228.z = -41;

const p229 = new nodo();
p229.valor = "p229";
p229.prox = ["p216","p230","p232"];
p229.x = 0;
p229.z = -51;

const p230 = new nodo();
p230.valor = "p230";
p230.prox = ["p229","p231"];
p230.x = 5;
p230.z = -51;

const p231 = new nodo();
p231.valor = "p231";
p231.prox = ["p230"];
p231.x = 5;
p231.z = -46;

const p232 = new nodo();
p232.valor = "p232";
p232.prox = ["p229","p233"];
p232.x = 0;
p232.z = -56;

const p233 = new nodo();
p233.valor = "p233";
p233.prox = ["p232","p234"];
p233.x = 10;
p233.z = -56;

const p234 = new nodo();
p234.valor = "p234";
p234.prox = ["p233","p235"];
p234.x = 10;
p234.z = -46;

const p235 = new nodo();
p235.valor = "p235";
p235.prox = ["p234","p236","p239"];
p235.x = 15;
p235.z = -46;

const p236 = new nodo();
p236.valor = "p236";
p236.prox = ["p235","p237"];
p236.x = 15;
p236.z = -56;

const p237 = new nodo();
p237.valor = "p237";
p237.prox = ["p236","p238"];
p237.x = 20;
p237.z = -56;

const p238 = new nodo();
p238.valor = "p238";
p238.prox = ["p237"];
p238.x = 20;
p238.z = -51;

const p239 = new nodo();
p239.valor = "p239";
p239.prox = ["p235","p240"];
p239.x = 25;
p239.z = -46;

const p240 = new nodo();
p240.valor = "p240";
p240.prox = ["p239","p241"];
p240.x = 25;
p240.z = -56;

const p241 = new nodo();
p241.valor = "p241";
p241.prox = ["p240","p242","p244"];
p241.x = 40;
p241.z = -56;

const p242 = new nodo();
p242.valor = "p242";
p242.prox = ["p241","p243"];
p242.x = 40;
p242.z = -51;

const p243 = new nodo();
p243.valor = "p243";
p243.prox = ["p242"];
p243.x = 45;
p243.z = -51;

const p244 = new nodo();
p244.valor = "p244";
p244.prox = ["p241","p245"];
p244.x = 55;
p244.z = -56;

const p245 = new nodo();
p245.valor = "p245";
p245.prox = ["p244","p246"];
p245.x = 55;
p245.z = -41;

const p246 = new nodo();
p246.valor = "p246";
p246.prox = ["p245","p247","p249"];
p246.x = 40;
p246.z = -41;

const p247 = new nodo();
p247.valor = "p247";
p247.prox = ["p246","p248"];
p247.x = 35;
p247.z = -41;

const p248 = new nodo();
p248.valor = "p248";
p248.prox = ["p247",];
p248.x = 35;
p248.z = -26;

const p249 = new nodo();
p249.valor = "p249";
p249.prox = ["p246","p250"];
p249.x = 40;
p249.z = 9;

const p250 = new nodo();
p250.valor = "p250";
p250.prox = ["p249","p251"];
p250.x = 50;
p250.z = 9;

const p251 = new nodo();
p251.valor = "p251";
p251.prox = ["p250","p252"];
p251.x = 50;
p251.z = 4;

const p252 = new nodo();
p252.valor = "p252";
p252.prox = ["p251","p253"];
p252.x = 45;
p252.z = 4;

const p253 = new nodo();
p253.valor = "p253";
p253.prox = ["p252","p254"];
p253.x = 45;
p253.z = -1;

const p254 = new nodo();
p254.valor = "p254";
p254.prox = ["p253","p255"];
p254.x = 55;
p254.z = -1;

const p255 = new nodo();
p255.valor = "p255";
p255.prox = ["p254","p256","p257"];
p255.x = 55;
p255.z = -6;

const p256 = new nodo();
p256.valor = "p256";
p256.prox = ["p255"];
p256.x = 55;
p256.z = -16;

const p257 = new nodo();
p257.valor = "p257";
p257.prox = ["p255","p258"];
p257.x = 50;
p257.z = -6;

const p258 = new nodo();
p258.valor = "p258";
p258.prox = ["p257","p259"];
p258.x = 50;
p258.z = -21;

const p259 = new nodo();
p259.valor = "p259";
p259.prox = ["p258","p260"];
p259.x = 55;
p259.z = -21;

const p260 = new nodo();
p260.valor = "p260";
p260.prox = ["p259","p261"];
p260.x = 55;
p260.z = -26;

const p261 = new nodo();
p261.valor = "p261";
p261.prox = ["p260","p262"];
p261.x = 50;
p261.z = -26;

const p262 = new nodo();
p262.valor = "p262";
p262.prox = ["p261","p263"];
p262.x = 50;
p262.z = -31;

const p263 = new nodo();
p263.valor = "p263";
p263.prox = ["p262","p264"];
p263.x = 55;
p263.z = -31;

const p264 = new nodo();
p264.valor = "p264";
p264.prox = ["p263","p265"];
p264.x = 55;
p264.z = -36;

const p265 = new nodo();
p265.valor = "p265";
p265.prox = ["p264","p266"];
p265.x = 45;
p265.z = -36;

const p266 = new nodo();
p266.valor = "p266";
p266.prox = ["p265"];
p266.x = 45;
p266.z = -6;