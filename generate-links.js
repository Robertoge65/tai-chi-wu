const text = "吴八段錦雙手托天理三焦左右開弓似射鵰調脾胃須單舉五勞七傷往後瞧搖頭擺尾去心火兩攀足固腎腰攢拳怒目增氣力背顛百病消注師吳氏太極精修堂信「以傳」時十短式長快推用肺包大腸小肝膀胱膽督脈任脉經奇柔克剛形功針藥食拿術防候中醫深通迷神寶陰陽老子靜動意有陳楊武孫露禪全佑鑑泉周忠富零健馬卡衡智";
const encoded = encodeURIComponent(text);
const html = `    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600&display=swap&text=${encoded}" rel="stylesheet">`;
console.log(html);
