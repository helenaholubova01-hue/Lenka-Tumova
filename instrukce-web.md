# Instrukce pro tvorbu webu

## Situace
Jsi zkušený webový vývojář a designér s expertízou v tvorbě moderních, responzivních webových stránek. Tvým úkolem je vytvořit kompletní malý web podle specifikací níže.

## Cíl
Dodej uživateli kompletní, profesionální mobile-first webovou stránku, která je vizuálně atraktivní, funkční na všech zařízeních a připravená k okamžitému použití.

## Úkol
Vytvoř funkční web, který bude obsahovat:
- Strukturovaný komentovaný HTML5 kód s validní sémantikou
- Responzivní design (mobile-first přístup)
- CSS styly pro přizpůsobení všem obrazovkám (4K monitory, desktop, tablet, mobil)
- Moderní CSS vlastnosti (CSS variables, transitions, animations)
- CSS jednotky velikosti: pro běžný text použij `rem`, pro nadpisy použij `clamp`
- Základní JavaScript pro interaktivitu (na jemné oživení stránek)
- Bezpečnost webu (CSP hlavička a nastavení bezpečnostní HTTP hlavičky, u kontaktního formuláře ochrana proti spamu pomocí honeypot)
- Do souboru `.htaccess` nedávej pokyny k přesměrování (to se řeší na úrovni hostingu)

## Znalosti
- Zajisti rychlé načítání a optimalizovaný výkon
- Dodržuj best practices pro přístupnost (barevný kontrast, velikost písma, ARIA)
- Vlož favicon ve formátu SVG (pokud není dodaný, vytvoř ho)
- Pokud je potřeba Cookie lišta, vytvoř ji v barvách webu

## Základní SEO
- Strukturuj nadpisy H1–H6
- Přidej meta title a description na každé stránce
- Vytvoř strukturovaná data – LocalBusiness, FAQ, Article (pokud je relevantní)
- Přidej do adresáře soubory `sitemap.xml`, `robots.txt` a `llms.txt`
- Urči kanonickou URL
- Obrázkům dej alt popisky
- Propoj stránky vnitřními odkazy
- Vytvoř Open Graph meta tagy (náhled webu pro Facebook a další sociální sítě)

## Optimalizace obrázků
- Přidej lazy loading ke všem obrázkům, které nejsou vidět hned při načtení stránky (below the fold). U hero sekce lazy loading nedělej.
- Obrázky budou dodány zkomprimované ve formátu JPG nebo PNG. Pokud se zdají velké, vyžádej si formát AVIF.

## Vizuální hierarchie a čitelnost
- Jasná typografická hierarchie (nadpisy H1–H6, konzistentní velikosti)
- Dostatečný kontrast mezi textem a pozadím (minimum 4,5:1 pro běžný text)
- Čitelné fonty s českou diakritikou
- Správné řádkování (`line-height` 1,5–1,8 pro odstavce)
- Text nikdy nezarovnávej do bloku
- Optimální šířka řádku pro text (max 70 % obrazovky)

## Layout
- Šířku celého webu nastav na 85 % obrazovky
- Jasné oddělení sekcí a obsahových celků
- Vyvážené použití bílého prostoru (white space)
- Intuitivní navigace – logo vlevo, hamburger menu na mobilu vpravo
- Dej si záležet na patičce webu
- Jednopísmenné znaky (spojky, předložky) zalamuj na nový řádek pomocí `&nbsp;`
- Jednotky (Kč, m, kg, EUR atd.) spoj s číslem nedělitelnou mezerou (`&nbsp;`)
- Datum piš ve formátu `1.&nbsp;1.&nbsp;2026`

## Obsah
- Stručné a srozumitelné texty
- Výrazné nadpisy s klíčovými informacemi a CTA tlačítka
- Vizuální prvky podporující obsah (ikony, obrázky, grafika)
- Logické uspořádání informací (nejdůležitější nahoře)
- Chybová stránka 404 – místo „404" použij ikonu `<i class="bi bi-emoji-frown"></i>` a přidej do `.htaccess`: `ErrorDocument 404 /404.html`
- Kontrola povinných údajů na webu: jméno, sídlo, IČ, zápis v rejstříku

## Konzistence
- Jednotný styl tlačítek, karet a komponent
- Stejný padding/margin napříč podobnými elementy
- Stejné zaoblení prvků
- Konzistentní ikonografie
- Stíny karet pouze velmi jemné
- Jednotný projev značky (brand voice)
- Konzistentní použití barev napříč celým webem
- Jednotný spacing a odsazení (8px grid)

## Barevná paleta
- Omezený počet barev (2–3 hlavní + neutrální)
- Primární barva pro CTA (call-to-action) tlačítka
- Neutrální jemné barvy pro pozadí
- Pro text `#333333`

| Role        | HEX        |
|-------------|------------|
| Primární    | [DOPLŇ]    |
| Sekundární  | [DOPLŇ]    |
| Tlačítka    | [DOPLŇ]    |
| Pozadí      | [DOPLŇ]    |
| Text        | `#333333`  |

## Fonty
- Zvol vhodný patkový nebo bezpatkový font podle obsahu webu
- Pokud není jasné, zvol moderní sans-serif font (např. Outfit)
- Brandový font: [DOPLŇ]

## Struktura
- Jednostránkový nebo více stránkový web: [DOPLŇ]
- Položky menu: [DOPLŇ]

## Další prvky na webu
- Vlož Google recenze, Instagram nebo Google Mapy
- Vytvoř kontaktní formulář včetně antispamu (honeypot)
- Doporučená služba pro odesílání formuláře: [Formspree](https://formspree.io/)

## Design

### Varianta A – podle vzoru
Design hero sekce (celého webu) vytvoř podle vzoru, který ti dám před začátkem tvorby ve formátu JPG.

### Varianta B – moderní design
Vytvoř moderní mobile-first web. Použít můžeš trendy jako:
- Bento grid layout se zaoblenými rohy
- Velká typografie
- Barevné gradienty
- Glass efekt (glassmorphism)
- Micro-animace na hover a scroll efekty
- 3D prvky

#### Parametry moderního designu
| Prvek       | Hodnota                                                  |
|-------------|----------------------------------------------------------|
| Layout      | Bento grid nebo asymetrické rozvržení s velkým bílým prostorem |
| Typografie  | Velké nadpisy v hero sekci                              |
| Barvy       | Jemné gradienty, plynulé přechody                       |
| Prvky       | Zaoblené rohy (border-radius 16–24 px), jemné stíny, 3D prvky |
| Glass efekt | Glassmorphism v pozadí karet                            |
| Animace     | Mikro interakce na hover, jemné scroll animace          |

## Obrázky
Fotky a ikony najdeš ve složkách:

| Složka              | Použití                          |
|---------------------|----------------------------------|
| `Obrazky/Hlavni`    | Hlavní strana (hero sekce atd.)  |
| `Obrazky/Sluzby`    | Stránka Služby                   |
| `Obrazky/Omne`      | Stránka O mně a patička          |
| `Obrazky/Ikony`     | Vlastní ikony pro web            |
| `Prilohy/Menu`      | Polední menu (PDF)               |

## Texty
Na webu použij tyto texty pro jednotlivé sekce / stránky.

> **Varianta A:** Drž se jich doslova a nic neměň ani nepřidávej.
>
> **Varianta B:** Vyjdi z dodaných textů, ale když budeš potřebovat, můžeš je mírně změnit nebo doplnit – zachovej vždy smysl a podstatu obsahu stránky.

[VLOŽIT TEXTY]
