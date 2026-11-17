document.addEventListener("DOMContentLoaded", () => {
    // قائمة الـ 53 لعبة والـ UZAX Packs كاملة ومضمنة مباشرة للحفاظ على الأنميشن والأزرار الأصلية
    const games = [
        { id: 1, title: "Sniper Elite 4", username: "steamboatcategory", password: "yvuwm9cp8WTe", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/312660/header.jpg" },
        { id: 2, title: "Call of Duty: Modern Warfare", username: "financialscorpion39551", password: "n40saxt50yiyn4g!zru3b", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1938090/header.jpg" },
        { id: 3, title: "Resident Evil Requiem", username: "pkbwn28474", password: "rwych85203", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg" },
        { id: 4, title: "Red Dead Redemption 2", username: "pamx36325", password: "C4C45DCBXCKF", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg" },
        { id: 5, title: "Cyberpunk 2077", username: "msk247542", password: "rae246924", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg" },
        { id: 6, title: "Forza Horizon 5", username: "Vj7Iu0Ol3Nz6", password: "Evylos12", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg" },
        { id: 7, title: "Forza Horizon 5 (Alt)", username: "Vj7Iu0Ol3Nz6", password: "Evylos12", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg" },
        { id: 8, title: "Resident Evil Village", username: "exqgy03440", password: "2eZ9C3s9", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1196590/header.jpg" },
        { id: 9, title: "Age of Empires II: Definitive Edition", username: "djw1040456792", password: "NCDRxrBoin", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/813780/header.jpg" },
        { id: 10, title: "Bodycam", username: "vvhlg39685", password: "nfwz57148X", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2407270/header.jpg" },
        { id: 11, title: "Farming Simulator 22", username: "Rmzgff", password: "Rmzgns1905", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1248130/header.jpg" },
        { id: 12, title: "Forza Horizon 4 (UZAX Pack)", username: "mpyyn02828", password: "18082006Ong$aa", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1293830/header.jpg" },
        { id: 13, title: "Forza Horizon 4 (UZAX Pack Alt)", username: "necf16751", password: "Mm6Fv5Nr9Qn66t", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1293830/header.jpg" },
        { id: 14, title: "Forza Horizon 5 (UZAX Monster)", username: "monsterice4566", password: "Zara13ssd", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg" },
        { id: 15, title: "Forza Horizon 5 + Subnautica 2 (UZAX Pack)", username: "tvfnp31656", password: "pmo090710", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg" },
        { id: 16, title: "Resident Evil 4 (UZAX Pack)", username: "exqgy03440", password: "2eZ9C3s9", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg" },
        { id: 17, title: "Forza Horizon 4 + Pack (UZAX Pack)", username: "overfreak911", password: "yachertila", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1293830/header.jpg" },
        { id: 18, title: "Forza Horizon 4 (UZAX Arena)", username: "forzaesporarena172", password: "Safak3535", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1293830/header.jpg" },
        { id: 19, title: "Forza Horizon 5 (UZAX T1dyy)", username: "T1dyy0527", password: "Sn3yw7669", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg" },
        { id: 20, title: "Forza Horizon 5 (UZAX Gamerspace)", username: "8sx9yb5v", password: "Gamerspace@1234", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg" },
        { id: 21, title: "Forza Horizon 5 (UZAX Smileboy)", username: "smileboy21c", password: "j2c5h22!!", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg" },
        { id: 22, title: "Forza Horizon 4 (UZAX Nbyd)", username: "nbyd64202", password: "nsWMhCgjn5R0bf0", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1293830/header.jpg" },
        { id: 23, title: "Forza Horizon 6 (UZAX Pack)", username: "bwxbg03986", password: "pmtsa06710", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg" },
        { id: 24, title: "Forza Horizon 4 (UZAX Ddn)", username: "ddn4elu7qjn01m", password: "Mortalkombat1234x", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1293830/header.jpg" },
        { id: 25, title: "GTA V (UZAX Legacy & Enhanced)", username: "dcdhi038", password: "TYX8BZ7CXD2X", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg" },
        { id: 26, title: "Assassin's Creed Odyssey (UZAX Pack)", username: "luisviseu1", password: "JEgsvAHH", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/582160/header.jpg" },
        { id: 27, title: "Ghost of Tsushima DIRECTOR'S CUT (UZAX Pack)", username: "socialpidar", password: "Kirito09uz11", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg" },
        { id: 28, title: "AAA Package +300 Games V2 (UZAX Pack)", username: "SIM0NCHIK21451", password: "SIMPLE123", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg" },
        { id: 29, title: "Elden Ring Nightreign (UZAX Pack)", username: "hbiducoz8319", password: "ucirr02069", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2622380/header.jpg" },
        { id: 30, title: "GTA V Legacy + The Witcher 3 (UZAX Pack)", username: "falconne74", password: "account_by_tg@h452v", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg" },
        { id: 31, title: "Among Us & Counter Strike (UZAX Pack)", username: "strzvlv", password: "M99YGBY5XGME", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/945360/header.jpg" },
        { id: 32, title: "Spider-Man 2 (UZAX Pack)", username: "spidermn2astrokey", password: "pass138azx@astrokey.store", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2622380/header.jpg" },
        { id: 33, title: "Call of Duty: Modern Warfare 4 (UZAX Pack)", username: "jgqrm66771", password: "jyhas53135", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1938090/header.jpg" },
        { id: 34, title: "Sleeping Dogs (UZAX Pack)", username: "fnsow23153", password: "Gm97XRxDsVLqcuF", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/307690/header.jpg" },
        { id: 35, title: "Friday the 13th (UZAX Pack)", username: "fnsow23153", password: "Gm97XRxDsVLqcuF", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/438740/header.jpg" },
        { id: 36, title: "The Forest (UZAX Pack)", username: "fnsow23153", password: "Gm97XRxDsVLqcuF", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/242760/header.jpg" },
        { id: 37, title: "Phasmophobia (UZAX Pack)", username: "fnsow23153", password: "Gm97XRxDsVLqcuF", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/739630/header.jpg" },
        { id: 38, title: "Forza Horizon 4 (UZAX Pack)", username: "fnsow23153", password: "Gm97XRxDsVLqcuF", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1293830/header.jpg" },
        { id: 39, title: "Half-Life (UZAX Pack)", username: "fnsow23153", password: "Gm97XRxDsVLqcuF", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/70/header.jpg" },
        { id: 40, title: "Just Cause 3 (UZAX Pack)", username: "fnsow23153", password: "Gm97XRxDsVLqcuF", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/225540/header.jpg" },
        { id: 41, title: "Hitman Absolution (UZAX Pack)", username: "fnsow23153", password: "Gm97XRxDsVLqcuF", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/203140/header.jpg" },
        { id: 42, title: "Hitman 2 (UZAX Pack)", username: "fnsow23153", password: "Gm97XRxDsVLqcuF", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/863550/header.jpg" },
        { id: 43, title: "It Takes Two (UZAX Pack)", username: "fnsow23153", password: "Gm97XRxDsVLqcuF", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1426210/header.jpg" },
        { id: 44, title: "Call of Duty: Black Ops III (UZAX Pack)", username: "fnsow23153", password: "Gm97XRxDsVLqcuF", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/311210/header.jpg" },
        { id: 45, title: "Sons of the Forest (UZAX Pack)", username: "fnsow23153", password: "Gm97XRxDsVLqcuF", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1326470/header.jpg" },
        { id: 46, title: "Dark Souls III (UZAX Pack)", username: "fnsow23153", password: "Gm97XRxDsVLqcuF", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/374320/header.jpg" },
        { id: 47, title: "Ark: Survival Evolved (UZAX Pack)", username: "fnsow23153", password: "Gm97XRxDsVLqcuF", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/346110/header.jpg" },
        { id: 48, title: "Mortal Kombat 11 (UZAX Pack)", username: "fnsow23153", password: "Gm97XRxDsVLqcuF", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/976310/header.jpg" },
        { id: 49, title: "Just Cause 2 (UZAX Pack)", username: "fnsow23153", password: "Gm97XRxDsVLqcuF", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/8190/header.jpg" },
        { id: 50, title: "Tomb Raider (UZAX Pack)", username: "fnsow23153", password: "Gm97XRxDsVLqcuF", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/203160/header.jpg" },
        { id: 51, title: "Dying Light (UZAX Pack)", username: "fnsow23153", password: "Gm97XRxDsVLqcuF", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/239140/data/header.jpg" },
        { id: 52, title: "Resident Evil Village (UZAX Bundle)", username: "exqgy03440", password: "2eZ9C3s9", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1196590/header.jpg" },
        { id: 53, title: "20+ Games Pack (UZAX Bemon)", username: "celtshelt", password: "Polestar19", image_url: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg" }
    ];

    const container = document.querySelector('.games-grid') || document.querySelector('.games-container');
    if (!container) return;

    container.innerHTML = '';

    games.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <div class="game-img-wrap">
                <img src="${game.image_url}" alt="${game.title}">
            </div>
            <div class="game-details">
                <h3>${game.title}</h3>
                <div class="status-row">
                    <span class="status-text">Status:</span>
                    <span class="status-val" style="color: #2ecc71;">Available</span>
                </div>
                <button class="claim-btn" onclick="copyAccount('${game.username}', '${game.password}')">CLAIM NOW</button>
            </div>
        `;
        container.appendChild(card);
    });
});

function copyAccount(user, pass) {
    const info = `Username: ${user}\nPassword: ${pass}`;
    navigator.clipboard.writeText(info).then(() => {
        alert('Account Copied Successfully! 🎉');
    });
}
