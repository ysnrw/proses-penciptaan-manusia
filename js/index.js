const mainHeader = document.getElementById("mainHeader");
const floatingMenuButton = document.getElementById("floatingMenuButton");
const expandedMenuPopup = document.getElementById("expandedMenuPopup");
const popupNavLinks = expandedMenuPopup.querySelectorAll("#popupNav a");
const scrollTopBtn = document.getElementById("scrollTopBtn");
const detailPopup = document.getElementById("detailPopup"); 
const popupTextEl = document.getElementById("popupText"); 

const darkModeToggleHeader = document.getElementById("darkModeToggleHeader");
const darkModeTogglePopup = document.getElementById("darkModeTogglePopup");

const HEADER_HIDE_THRESHOLD = 80; 

let scrollTimeout;
window.addEventListener("scroll", () => {
    if (scrollTimeout) {
    window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(() => {
    const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;

    if (scrollPosition > HEADER_HIDE_THRESHOLD) {
        mainHeader.classList.add("hidden");
        floatingMenuButton.classList.add("visible");
    } else {
        mainHeader.classList.remove("hidden");
        floatingMenuButton.classList.remove("visible");
        expandedMenuPopup.classList.remove("visible");
        floatingMenuButton.classList.remove("active");
    }
    
    if (scrollPosition > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
    });
});

floatingMenuButton.addEventListener("click", () => {
    expandedMenuPopup.classList.toggle("visible");
    floatingMenuButton.classList.toggle("active");
});

popupNavLinks.forEach(link => {
    link.addEventListener("click", () => {
    expandedMenuPopup.classList.remove("visible");
    floatingMenuButton.classList.remove("active");
    });
});

expandedMenuPopup.addEventListener("click", (event) => {
    if (event.target === expandedMenuPopup) { 
    expandedMenuPopup.classList.remove("visible");
    floatingMenuButton.classList.remove("active");
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeToggleHeader.setAttribute('aria-pressed', 'true');
        darkModeTogglePopup.setAttribute('aria-pressed', 'true');
    } else {
        document.body.classList.remove('dark-mode');
        darkModeToggleHeader.setAttribute('aria-pressed', 'false');
        darkModeTogglePopup.setAttribute('aria-pressed', 'false');
    }
}

function toggleTheme() {
    const currentThemeIsDark = document.body.classList.contains('dark-mode');
    const newTheme = currentThemeIsDark ? 'light' : 'dark';
    applyTheme(newTheme);
    try {
        localStorage.setItem('theme', newTheme);
    } catch (e) {
        console.warn("LocalStorage is not available. Theme preference will not be saved.");
    }
}

darkModeToggleHeader.addEventListener('click', toggleTheme);
darkModeTogglePopup.addEventListener('click', toggleTheme);

try {
    const persistedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (persistedTheme) {
        applyTheme(persistedTheme);
    } else if (prefersDark) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }
} catch (e) {
    console.warn("LocalStorage is not available. Initializing with default light theme.");
    applyTheme('light');
}

const islamicList = document.getElementById("islamicPoints");
const scienceList = document.getElementById("sciencePoints");

const islamicPointsData = [
    {
    title: "Penciptaan dari tanah (Sari Pati Tanah)",
    content: "Manusia pertama, Adam AS, diciptakan Allah SWT dari tanah (<em>turāb</em>), kemudian dari saripati tanah (<em>sulaalah min ṭīn</em>). QS. Al-Mu'minun (23):12: \"Dan sesungguhnya Kami telah menciptakan manusia dari suatu saripati (berasal) dari tanah.\" Ini menggambarkan asal kejadian material manusia dari unsur-unsur bumi. <br><strong>Referensi:</strong> Tafsir Al-Muyassar, Tafsir Al-Qurthubi."
    },
    {
    title: "Tahapan Nutfah, 'Alaqah, Mudghah",
    content: "Al-Qur'an (QS. Al-Mu'minun:13-14, QS. Al-Hajj:5) menjelaskan tahapan perkembangan janin: <strong>Nutfah</strong> (setetes mani/zigot), kemudian menjadi <strong>'Alaqah</strong> (segumpal darah/sesuatu yang melekat, mirip lintah), lalu menjadi <strong>Mudghah</strong> (segumpal daging, seperti daging yang dikunyah), yang kemudian ada yang berbentuk sempurna dan ada yang tidak. Ini menunjukkan proses gradual dan terstruktur. <br><strong>Referensi:</strong> Tafsir Ibn Katsir, Dr. Maurice Bucaille \"Al-Quran dan Sains Modern\"."
    },
    {
    title: "Pembentukan Tulang & Pembungkusan dengan Daging",
    content: "Setelah tahap Mudghah, Allah SWT menciptakan tulang belulang (<em>'iẓāman</em>), lalu tulang belulang itu dibungkus dengan daging (<em>fakasawnal-'iẓāma laḥman</em>). QS. Al-Mu'minun (23):14. Tahap ini menyoroti perkembangan sistem rangka dan otot. <br><strong>Referensi:</strong> Tafsir Jalalain."
    },
    {
    title: "Peniupan Ruh",
    content: "Setelah pembentukan fisik mencapai tahap tertentu, Allah SWT meniupkan ruh (<em>rūḥ</em>) ke dalam janin. Dalam sebuah hadis riwayat Bukhari dan Muslim, disebutkan bahwa ruh ditiupkan setelah 120 hari (40 hari nutfah, 40 hari 'alaqah, 40 hari mudghah). Ini menandai dimulainya kehidupan spiritual. <br><strong>Referensi:</strong> Hadis Arbain Nawawi No. 4, Prof. Dr. Hamka \"Tafsir Al-Azhar\"."
    },
    {
    title: "Manusia sebagai Khalifah",
    content: "Manusia diciptakan dengan tujuan mulia, salah satunya adalah sebagai khalifah (pemimpin/pengelola) di muka bumi (QS. Al-Baqarah:30). Ini menyiratkan tanggung jawab untuk memakmurkan bumi dan menegakkan keadilan. <br><strong>Referensi:</strong> Tafsir At-Tabari."
    },
    {
    title: "Penciptaan Berpasang-pasangan",
    content: "Allah SWT menciptakan manusia berpasang-pasangan, laki-laki dan perempuan (QS. An-Najm:45-46, QS. Ar-Rum:21), untuk kelestarian generasi dan agar mereka mendapatkan ketenangan (<em>sakinah</em>), cinta (<em>mawaddah</em>), dan kasih sayang (<em>rahmah</em>). <br><strong>Referensi:</strong> Tafsir As-Sa'di."
    },
    {
    title: "Penentuan Takdir, Rezeki, Ajal, Amal",
    content: "Bersamaan dengan peniupan ruh, malaikat juga diperintahkan untuk mencatat empat perkara bagi janin: rezekinya, ajalnya, amalnya, serta apakah ia akan menjadi orang yang celaka atau bahagia. (HR. Bukhari & Muslim). Ini menunjukkan bahwa aspek-aspek fundamental kehidupan telah ditentukan oleh Allah SWT."
    },
    {
    title: "Fitrah Kesucian",
    content: "Setiap anak dilahirkan dalam keadaan fitrah (suci, cenderung kepada kebenaran/tauhid). QS. Ar-Rum (30):30. Orang tuanyalah yang kemudian menjadikannya Yahudi, Nasrani, atau Majusi. (HR. Bukhari & Muslim)."
    },
    {
    title: "Tujuan Penciptaan: Ibadah",
    content: "Tujuan utama penciptaan jin dan manusia adalah untuk beribadah kepada Allah SWT. QS. Adz-Dzariyat (51):56: \"Dan Aku tidak menciptakan jin dan manusia melainkan supaya mereka mengabdi kepada-Ku.\" Ibadah mencakup segala perbuatan baik yang diniatkan karena Allah."
    },
    {
    title: "Keistimewaan Manusia: Akal dan Ilmu",
    content: "Manusia dianugerahi akal pikiran dan kemampuan untuk belajar (diajarkan nama-nama/ilmu pengetahuan, QS. Al-Baqarah:31), yang membedakannya dari makhluk lain dan memungkinkannya untuk menjalankan peran sebagai khalifah."
    }
];

const sciencePointsData = [
    {
    title: "Fertilisasi (Pembuahan)",
    content: "Proses dimulai ketika sel sperma dari pria bertemu dan membuahi sel telur (ovum) dari wanita, biasanya terjadi di tuba falopi. Hasilnya adalah zigot, sel tunggal dengan set kromosom lengkap. <br><strong>Referensi:</strong> Langman's Medical Embryology, Sadler, T.W."
    },
    {
    title: "Pembelahan Sel (Cleavage) & Morula",
    content: "Zigot mengalami serangkaian pembelahan mitosis cepat (cleavage) tanpa pertumbuhan ukuran sel secara signifikan. Setelah sekitar 3-4 hari, terbentuklah Morula, sebuah bola padat yang terdiri dari 12-32 sel (blastomer)."
    },
    {
    title: "Blastokista (Blastocyst Formation)",
    content: "Morula terus membelah dan membentuk rongga berisi cairan (blastocoel), menjadi Blastokista (sekitar hari ke-4-5). Blastokista terdiri dari massa sel dalam (embrioblas, yang akan menjadi embrio) dan lapisan sel luar (trofoblas, yang akan menjadi plasenta)."
    },
    {
    title: "Implantasi",
    content: "Blastokista menempel dan menanamkan diri pada dinding rahim (endometrium) sekitar hari ke-6 hingga ke-12 setelah fertilisasi. Trofoblas berperan penting dalam proses ini. Ini menandai awal kehamilan secara fisiologis."
    },
    {
    title: "Gastrulasi & Pembentukan Lapisan Germinal",
    content: "Sekitar minggu ke-3, terjadi Gastrulasi, di mana embrioblas berdiferensiasi menjadi tiga lapisan germinal primer: <strong>Ektoderm</strong> (membentuk kulit, sistem saraf), <strong>Mesoderm</strong> (membentuk otot, tulang, sistem peredaran darah), dan <strong>Endoderm</strong> (membentuk lapisan saluran pencernaan, pernapasan)."
    },
    {
    title: "Neurulasi (Pembentukan Sistem Saraf Awal)",
    content: "Ektoderm membentuk lempeng saraf (neural plate) yang kemudian melipat menjadi tabung saraf (neural tube). Proses ini, yang terjadi pada minggu ke-3 hingga ke-4, adalah dasar pembentukan otak dan sumsum tulang belakang."
    },
    {
    title: "Organogenesis (Pembentukan Organ)",
    content: "Dimulai dari minggu ke-3 hingga ke-8 (periode embrionik), organ-organ utama tubuh mulai terbentuk dan berkembang dari ketiga lapisan germinal. Jantung mulai berdetak sekitar minggu ke-4. Pada akhir periode ini, embrio mulai tampak seperti manusia kecil."
    },
    {
    title: "Perkembangan Janin (Fetal Period)",
    content: "Dari minggu ke-9 hingga kelahiran, disebut periode fetal. Terjadi pertumbuhan pesat, pematangan organ dan sistem tubuh. Alat kelamin luar mulai berdiferensiasi secara jelas. Janin mulai bergerak dan merespons rangsangan."
    },
    {
    title: "Perkembangan Sistem Rangka dan Otot",
    content: "Sistem rangka berkembang dari mesoderm, awalnya sebagai model kartilago yang kemudian mengalami osifikasi (penulangan). Otot juga berkembang dari mesoderm, memungkinkan gerakan janin."
    },
    {
    title: "Kelahiran (Parturition)",
    content: "Setelah sekitar 38-40 minggu masa gestasi, janin dianggap cukup bulan dan siap lahir. Proses kelahiran dipicu oleh serangkaian perubahan hormonal yang menyebabkan kontraksi rahim."
    }
];

function showDetailPopup(title, content) { 
    popupTextEl.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
    detailPopup.style.display = "flex"; 
    document.body.style.overflow = 'hidden'; 
}

function closeDetailPopup() { 
    detailPopup.style.display = "none";
    popupTextEl.innerHTML = ""; 
    document.body.style.overflow = 'auto'; 
}

islamicPointsData.forEach(item => {
    const li = document.createElement("li");
    li.setAttribute('role', 'button');
    li.setAttribute('tabindex', '0'); 
    li.innerHTML = `<strong>${item.title}</strong>`; 
    li.onclick = () => showDetailPopup(item.title, item.content); 
    li.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') showDetailPopup(item.title, item.content); }; 
    islamicList.appendChild(li);
});

sciencePointsData.forEach(item => {
    const li = document.createElement("li");
    li.setAttribute('role', 'button');
    li.setAttribute('tabindex', '0'); 
    li.innerHTML = `<strong>${item.title}</strong>`; 
    li.onclick = () => showDetailPopup(item.title, item.content); 
    li.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') showDetailPopup(item.title, item.content); }; 
    scienceList.appendChild(li);
});

detailPopup.addEventListener('click', function(event) {
    if (event.target === detailPopup) { 
        closeDetailPopup();
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && detailPopup.style.display === 'flex') {
        closeDetailPopup();
    }
});