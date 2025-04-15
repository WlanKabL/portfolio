import type { Project } from "~/types/projects";

const crowdNationFrontend: Project = {
    active: true,
    showPreview: true,
    title: "Crowd-Nation Frontend",
    shortDescription: "Moderne Eventplattform mit Personalisierung und Echtzeitfunktionen.",
    description:
        "Vue-3-basierte Webanwendung für Crowd-Nation mit responsivem UI, Event-Suche, Gruppenbildung und Live-Tracking-Integration.",
    extendedTitle:
        "Frontend-Interface für Crowd-Nation – intuitive Benutzerführung und moderne Technik vereint.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
    link: "/projects/crowd-nation",
    github: "https://github.com/CrowdNation",
    tech: ["Vue 3", "Vite", "TailwindCSS", "Pinia", "TypeScript", "SCSS"],
    externalLink: "https://crowd-nation.com",
    extendedText: `
  <p>
    Das <strong>Crowd-Nation Frontend</strong> ist das visuelle Herzstück der gesamten Plattform und wurde vollständig mit Vue 3, Vite und TailwindCSS entwickelt.
    Es dient als Schnittstelle für Festivalbesucher, Musikliebhaber und Veranstalter gleichermaßen.
    Ziel war es, eine moderne, performante und intuitive Webanwendung zu schaffen, die sich auf allen Geräten angenehm bedienen lässt – 
    von mobilen Endgeräten auf dem Festivalgelände bis hin zum Desktop für tiefgreifende Eventplanung.
  </p>
   <br />
  <p class="mt-4">
    <strong>Im Fokus stehen dabei:</strong>
  </p>
   <br />
  <ul class="list-disc list-inside space-y-2 mt-2">
    <li><strong>Personalisierung:</strong> Nutzer erhalten Event-Vorschläge, die auf ihren Interessen, Lieblingsgenres oder Künstlern basieren.</li>
    <li><strong>Echtzeitintegration:</strong> Über das integrierte Hardware-Tracking-System können Live-Informationen wie Besucherdichte oder Standortanzeigen eingeblendet werden.</li>
    <li><strong>Dunkles, atmosphärisches UI:</strong> Das Theme ist bewusst dunkel gehalten und betont mit lebendigen Farben wie Blau und Lila wichtige Interaktionen.</li>
    <li><strong>Modularität & Skalierbarkeit:</strong> Der Code basiert auf wiederverwendbaren Komponenten und nutzt Pinia für globales State-Management.</li>
    <li><strong>Multi-Stage Deployment:</strong> Unterstützung für Live, Beta und Preview Deployments über GitLab CI/CD und PM2.</li>
  </ul>
   <br />
  <p class="mt-6">
    <strong>Weitere Highlights:</strong>
  </p>
   <br />
  <ul class="list-disc list-inside space-y-2 mt-2">
    <li>i18n Support für zukünftige Mehrsprachigkeit.</li>
    <li>SCSS Modularisierung für saubere und wartbare Styles pro Komponente.</li>
    <li>Testing mit <code>Vitest</code> und <code>Playwright</code> zur Sicherstellung langfristiger Codequalität.</li>
    <li>SEO & Performance Optimierung – auch bei schlechter Netzabdeckung performant.</li>
  </ul>
   <br />
  <p class="mt-6">
    <strong>Crowd-Nation Frontend</strong> ist nicht nur eine Eventseite – es ist ein digitaler Begleiter für Festivalgänger, 
    der zwischen Planungsphase und Live-Erlebnis die Brücke schlägt. Ob Kartenansicht, Gruppenchat, Event-Sync oder der schnelle Blick aufs nächste Set: 
    Dieses Frontend verbindet Technologie mit Musikleidenschaft auf eine neue, interaktive Art.
  </p>
`,
};

const wowDiscordBot: Project = {
    active: true,
    showPreview: true,
    title: "World-of-Warcraft Discordbot",
    shortDescription:
        "Multifunktionaler World-of-Warcraft Discordbot für Gildenverwaltung und Charakter-Sync.",
    description:
        "Umfangreicher Discordbot zur Verwaltung von Gilden, Synchronisierung von Charakteren und Zugriff auf World-of-Warcraft Datenbanken.",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&q=80&w=800",
    link: "/projects/wow-discordbot",
    // github: "https://github.com/WlanKabL/WoW-Discord-Bot",
    externalLink: "https://sde.crowd-nation.com/discord-bot/",
    tech: ["Node.js", "TypeScript", "Discord.js", "REST API", "Blizzard API"],
    extendedText: `
      <p>
        Der <strong>World-of-Warcraft Discordbot</strong> ist ein auf <code>Node.js</code> und <code>TypeScript</code> basierender Discordbot, der speziell für <em>World of Warcraft</em>-Gilden entwickelt wurde.
        Ziel ist es, eine zentrale Schnittstelle zur Organisation, Kommunikation und Charakterverwaltung zu bieten – direkt über Discord.
      </p>
        <br />
      <h3>Funktionen</h3>
      <ul>
        <li>🔗 <strong>Battle.net-Verknüpfung</strong> mit OAuth2 und Token-Verwaltung</li>
        <li>📜 <strong>Slash Commands</strong> für Charakterabfragen, Bewerbungen, Mount-Reminders uvm.</li>
        <li>📊 <strong>Gildeninterne Statistiken</strong> für Mitglieder, Klassenverteilung, Rollen & Gearscore</li>
        <li>📝 <strong>Bewerbungssystem</strong> direkt über Discord mit Moderationsfreigabe</li>
        <li>🗃️ <strong>Lokaler JSON-Datenspeicher</strong> für User-, Gilden- und Charakterdaten (inkl. Migration geplant)</li>
        <li>🌍 <strong>Mehrsprachigkeit</strong> über ein integriertes i18n-System</li>
      </ul>
        <br />
      <h3>Technische Highlights</h3>
      <ul>
        <li>⚙️ Modular aufgebaut mit Command-Loader, Error-Handling und Command-Help</li>
        <li>📚 Automatisierte Typisierung dank <code>CharacterDetailsResponseMap</code> und komplexer API-Mappings</li>
        <li>🚀 Schnelle Entwicklung durch Hot-Reloading & Tests</li>
        <li>🧠 Intelligentes Caching von API-Abfragen zur Minimierung von Rate-Limits</li>
      </ul>
        <br />
      <h3>Integrationen</h3>
      <p>
        Der Bot nutzt die <strong>Blizzard API</strong> zur Abfrage von Charakterdaten, Mounts, Gear, Tokenpreisen und mehr. Darüber hinaus gibt es eine selbstentwickelte Mapping-Struktur, die alle Details typsicher abbildet – mit Autovervollständigung und Validierung.
      </p>
        <br />
      <h3>Vision</h3>
      <p>
        Das Ziel ist es, die <strong>bestmögliche Unterstützung für World-of-Warcraft Gilden</strong> zu bieten – sei es durch Bewerbungsprozesse, Member Management oder einfach Informationen über Charaktere.
        Perspektivisch ist auch eine Web-Oberfläche zur Verwaltung und Einsicht der Daten geplant, sowie eine API für externe Tools.
      </p>
        <br />
      <h3>Status</h3>
      <p>
        Der Bot ist aktiv in Entwicklung und wird in einer echten Gilde eingesetzt. Fehlerbehandlung, Benutzerfeedback und Erweiterungen sind integraler Bestandteil der Roadmap.
      </p>
    `,
};

const crowdNationBackend: Project = {
    active: true,
    showPreview: true,
    title: "Crowd-Nation Backend",
    shortDescription:
        "ASP.NET Core API für Event-Management, Nutzerverwaltung & Datenbereitstellung.",
    description:
        "Das Herzstück der Crowd-Nation Plattform: Eine skalierbare C# Web API zur Verarbeitung von Event-, Nutzer- und Künstlerinformationen.",
    image: "https://images.unsplash.com/photo-1581093588401-5c4efcbf96f8?auto=format&fit=crop&q=80&w=800",
    link: "/projects/crowd-nation-backend",
    github: "https://github.com/CrowdNation/CrowdNation.API",
    tech: ["C#", ".NET Core", "REST API", "Docker", "Swagger", "SurrealDB"],
    extendedTitle: "Crowd-Nation Backend – Die API als Rückgrat des Event-Universums",
    extendedText: `
      <p>
        Das <strong>Crowd-Nation Backend</strong> bildet das Rückgrat der gesamten Plattform. Es wurde in C# mit ASP.NET Core entwickelt und stellt eine leistungsstarke REST API bereit, über die alle Kernfunktionen des Frontends mit Daten versorgt werden. 
      </p>
      <p>
        Die API verarbeitet sensible Nutzerinformationen, Event-Daten, Künstlerprofile, Location-Daten und mehr – stets mit Fokus auf Skalierbarkeit und Sicherheit.
      </p>
  
      <h3 class="mt-6 text-xl font-semibold text-white">Sicherheit</h3>
      <p>
        Besonders wichtig war uns der Schutz der Nutzerdaten. Das Backend nutzt einen <strong>mehrstufigen Hashing-Mechanismus</strong> für Passwörter, inklusive Salt und Pepper, kombiniert mit einem <strong>bewährten sicheren Hashing-Algorithmus</strong>. 
        Zusätzlich sorgt eine Token-basierte Authentifizierung für sichere Sessions.
      </p>
  
      <h3 class="mt-6 text-xl font-semibold text-white">Modularer Aufbau</h3>
      <ul class="list-disc list-inside text-gray-300 mt-2">
        <li>Nutzerverwaltung mit Rollen, Berechtigungen & Login/Registrierung</li>
        <li>Veranstaltungsmodul zur Erstellung & Bearbeitung von Events</li>
        <li>Künstlerverwaltung inkl. Bild & Socials</li>
        <li>Genres, Orte, Eventtypen etc. über eigene Endpunkte verwaltbar</li>
        <li>Verwaltung von Community-Inhalten wie Vorschlägen & Empfehlungen</li>
      </ul>
  
      <h3 class="mt-6 text-xl font-semibold text-white">Dev Experience</h3>
      <p>
        Dank <strong>Swagger</strong>-Integration lässt sich die API vollständig dokumentieren und live testen. Die Konfiguration erfolgt per <code>appsettings.json</code>, während <strong>Docker</strong> & <strong>docker-compose</strong> für einfache Bereitstellung sorgen. 
      </p>
  
      <h3 class="mt-6 text-xl font-semibold text-white">Deployment</h3>
      <p>
        Der Deploymentprozess ist CI/CD-optimiert über <strong>GitHub</strong> und läuft auf einem Linux-basierten Server via Docker. 
      </p>
  
      <p class="mt-4">
        Mit Fokus auf Wartbarkeit, Sicherheit und Erweiterbarkeit bildet dieses Backend die stabile und zuverlässige Grundlage von Crowd-Nation.
      </p>
    `,
};

const universalJenga: Project = {
    active: true,
    showPreview: false,
    title: "Universal Jenga",
    shortDescription: "Digitales Jenga-Spiel mit zufälligen Aufgaben für Paare oder Trinkabende.",
    description:
        "Ein vielseitiges Partyspiel, das klassische Jenga-Mechanik mit zufällig generierten Aufgaben verbindet.",
    image: "https://images.unsplash.com/photo-1593011951386-3ec83fdb3718?auto=format&fit=crop&q=80&w=800",
    link: "/projects/universal-jenga",
    externalLink: "https://jenga.crowd-nation.com",
    tech: ["Vue 3", "TypeScript", "Vite"],
    extendedTitle: "Universal Jenga – das digitale Trink- und Paarspiel",
    extendedText: `
    Universal Jenga entstand als technisches und kreatives Spielprojekt mit dem Ziel, klassische Spielmechanik digital neu zu interpretieren.<br />
    Das Spiel basiert auf Vue 3, wird mit TypeScript typensicher strukturiert und über Vite performant bereitgestellt.<br /><br />
    
    Im Kern bietet Universal Jenga eine einfache Idee: Statt handgeschriebener Aufgaben auf Jenga-Blöcken nutzt du durchnummerierte Klötze.<br />
    Die eigentlichen Aufgaben kommen über die Website – zufällig ausgewählt, geshuffelt und konfigurierbar.<br /><br />
    
    Das Spielprinzip ist so simpel wie genial: Du gibst zu Beginn die gewünschte Anzahl an Aufgaben an, und Universal Jenga generiert dir für jeden Block eine zufällige Challenge aus einem vorgewählten Set.<br />
    Dadurch gleicht kein Spiel dem anderen – und es wird verhindert, dass sich Spieler "ihre Nummer merken" und mogeln.<br /><br />
    
    <b>Zwei Spielsets stehen zur Verfügung:</b><br /><br />
    
    <b>🥂 Trinken:</b> Klassisch, anzüglich oder extrem – mit drei Schwierigkeitsgraden:<br />
    - <b>Einfach:</b> Ohne sexuelle Inhalte, ideal für lockere Runden mit Freunden.<br />
    - <b>Mittel:</b> Mehr Action, erste Körperkontaktspiele – perfekt für mutige Gruppen.<br />
    - <b>Softporn:</b> Für Erwachsene mit einem Hauch Erotik und Spaß am Spiel mit Reizen.<br /><br />
    
    <b>❤️ Paar:</b> Der Modus für Paare (oder sehr intime Freundschaften).<br />
    Aufgaben reichen von romantisch bis provokant und schaffen einen spannenden, verspielten Abend.<br /><br />
    
    <b>Universal Jenga eignet sich perfekt als Party-Starter</b>, Icebreaker oder als Aktivität für kleinere Gruppen, die sich beim Trinken besser kennenlernen möchten.<br />
    Es bringt Spaß, Spannung und eine gewisse Prise Aufregung in jede Runde.<br /><br />
    
    Spielrunden können per <b>QR-Code</b> geteilt oder sogar als <b>PDF</b> exportiert und ausgedruckt werden – ideal für Festivals, WG-Partys oder analoge Settings.<br /><br />
    
    Dank integriertem <b>Multilingual-Support</b> ist das Spiel problemlos auf verschiedene Sprachen skalierbar und damit auch international einsatzbereit.<br /><br />
    
    Ein besonderes Highlight: Die laufende <b>Spielsession wird im LocalStorage</b> gespeichert.<br />
    Wer die Seite neu lädt oder versehentlich verlässt, bekommt beim nächsten Besuch die Möglichkeit, direkt weiterzuspielen oder ein neues Spiel zu starten – ganz ohne Datenverlust.<br /><br />
    
    Universal Jenga ist bereit für die Allgemeinheit und könnte zukünftig über Marketing oder gezielte Partnerschaften (z.B. Festivals, Pärchenboxen, Apps) skaliert werden.
    `,
};

const crowdNationCDN: Project = {
    active: true,
    showPreview: true,
    title: "Crowd-Nation CDN",
    shortDescription: "Flexibles CDN-System mit Access-Token, Rechtemanagement und Nutzerrollen.",
    description:
        "Ein fortschrittliches Content Delivery System für Crowd-Nation mit Zugriffskontrollen, Token-Support und detaillierter Rechteverwaltung.",
    image: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62?auto=format&fit=crop&q=80&w=800",
    link: "/projects/crowd-nation-cdn",
    github: "https://github.com/CrowdNation/cdn", // ggf. anpassen
    tech: ["Node.js", "Express", "Docker", "EJS", "Axios", "JavaScript"],
    extendedTitle:
        "Crowd-Nation CDN – Sichere & flexible Datei-Distribution für moderne Plattformen",
    extendedText: `
  <p><strong>Crowd-Nation CDN</strong> ist ein vielseitiges, selbst entwickeltes Content Delivery System, das sowohl für die Crowd-Nation Plattform als auch für private Zwecke konzipiert wurde. Ziel war es, ein sicheres, flexibles und API-orientiertes System zur Dateiablage und -auslieferung zu entwickeln, das granular konfigurierbar ist und sowohl interne als auch externe Use Cases bedienen kann.</p>
  
  <p>Im Zentrum stehen eine feingranulare Zugriffskontrolle über <strong>Access Tokens</strong>, individuelle <strong>User Permissions</strong>, <strong>View-/Download-Zähler</strong> sowie Public-/Private-Flags. Dateien können gezielt freigegeben werden – entweder per generiertem Token mit Zeitlimit oder dauerhaft öffentlich. Diese Architektur ermöglicht ein hohes Maß an Kontrolle über die Sichtbarkeit und Nutzbarkeit der Inhalte.</p>
  
  <br />
  
  <h3>Architektur & Funktionen</h3>
  <ul>
    <li><strong>Node.js & Express:</strong> Leichtgewichtiges Backend mit modernem API-Aufbau</li>
    <li><strong>Docker-ready:</strong> Containerisiert und portabel – ideal für Dev- oder Live-Umgebungen</li>
    <li><strong>JWT-ähnliche Token-Mechanik:</strong> Zugriffstokens können zeitlich begrenzt oder dauerhaft erstellt werden</li>
    <li><strong>Single Sign-On:</strong> Durch die direkte Kommunikation mit der <code>api.crowd-nation.com</code> wird automatisch die Session des eingeloggten Crowd-Nation Users übernommen – dank Cookie-basierter Authentifizierung</li>
    <li><strong>Role & Permission Management:</strong> Jeder Upload kann bestimmten Rollen oder expliziten Usern zugewiesen werden (read/write)</li>
    <li><strong>Statistiken:</strong> View- und Download-Count für jedes Asset</li>
    <li><strong>Interne Nutzung via Backend:</strong> Verknüpfung mit Crowd-Nation Backend für automatisierte File-Access-Strukturen</li>
  </ul>
  
  <br />
  
    <h3>Geplante Erweiterungen</h3>
    <ul class="list-disc list-inside text-gray-300 space-y-2">
    <li>
        Unterstützung für <strong>CMS (Content Management System)</strong> zur Text-Verwaltung in den Crowd-Nation Webseiten
    </li>
    <li>
        Admin-Interface zur visuellen Kontrolle von Assets, Rollen und Token
    </li>
    <li>
        Automatisierte Aufräumlogik für temporäre Uploads
    </li>
    </ul>

  
  <br />
  
  <h3>Typische Anwendungsfälle</h3>
  <ul>
    <li>Teilen von SVG-, Bild- oder Mediendateien direkt im Kontext von Events (z.B. Artist-Banner, Social Media Assets)</li>
    <li>Geschützte Bereitstellung von PDF- oder Video-Inhalten mit begrenzter Zugriffsdauer</li>
    <li>Interne Dateiweitergabe innerhalb der Crowd-Nation-Redaktion oder Moderation</li>
  </ul>
  
  <br />
  
  <p><strong>Crowd-Nation CDN</strong> ist nicht nur ein begleitendes Tool, sondern ein echtes Highlight der Crowd-Nation Architektur. Es hebt sich durch seinen Mix aus Sicherheit, Kontrolle und Benutzerfreundlichkeit klar von klassischen CDN-Lösungen ab – made with ❤️ und viel Liebe zum Detail.</p>
    `,
};

const IHKNachweisSchreiber: Project = {
    active: true,
    showPreview: false,
    title: "IHK-Nachweis-Schreiber",
    shortDescription: "Automatisierte PDF-Erstellung für IHK-Berichtshefte.",
    description:
        "Ein Node.js-Skript zur effizienten Generierung von Ausbildungsnachweisen für IHK-Berufsgruppen mit flexibler Konfiguration und Datenimport.",
    image: "https://images.unsplash.com/photo-1581091012184-7d9b79c503d8?auto=format&fit=crop&q=80&w=800",
    link: "/projects/ihk-nachweis-schreiber",
    tech: ["Node.js", "PDFKit", "Jira-API", "Untis-Export"],
    extendedText: `
  <h3>Projektübersicht</h3>
  <p>
    Der <strong>IHK-Nachweis-Schreiber</strong> ist ein intelligentes Node.js-Tool, das den Prozess der Berichtsheft-Erstellung für Auszubildende in IHK-Berufen massiv vereinfacht. Es automatisiert die Dokumentation wöchentlicher Ausbildungsinhalte und reduziert damit den manuell erforderlichen Aufwand auf ein Minimum.
  </p>
  <br />
  
  <h3>Funktionalitäten</h3>
  <ul>
    <li>Vollautomatische Generierung von PDF-Berichtsheften für Wochen oder Monate</li>
    <li>Konfigurierbare Vorlagen mit dynamischem Platzhalter-Ersatz (z.B. Name, Woche, Zeitraum, Abteilung)</li>
    <li>Flexible Ordnerstruktur für die Archivierung von Ausdrucken und digitalen Kopien</li>
    <li>Optionaler Datenimport aus <strong>Jira</strong> für betriebliche Tätigkeiten und <strong>Untis</strong> für Berufsschulzeiten</li>
    <li>Einfache CLI-Nutzung mit interaktiven Eingabeoptionen</li>
  </ul>
  <br />
  
  <h3>Technische Umsetzung</h3>
  <ul>
    <li><strong>Node.js</strong> als runtime-Umgebung für plattformübergreifenden Einsatz</li>
    <li><strong>PDFKit</strong> zur Erstellung sauber formatierter und druckfertiger PDFs</li>
    <li><strong>Integration mit REST-APIs</strong> wie Jira zur automatisierten Datenbeschaffung</li>
    <li><strong>Filesystem-Support</strong> zum Generieren von Wochenordnern, Dateinamen nach Schema & automatisiertem Ablageort</li>
  </ul>
  <br />
  
  <h3>Praxisbezug</h3>
  <p>
    Dieses Tool wurde aus der Notwendigkeit geboren, Wochenberichte effizienter zu verwalten – besonders in Fällen, in denen Azubis ihre Zeit schlecht dokumentieren oder manuelle Prozesse zu viel Zeit kosten. Durch die Kombination aus Datenimport und PDF-Automatisierung entsteht ein starkes Werkzeug für Ausbilder, Azubis oder auch Personalabteilungen.
  </p>
  <br />
  
  <h3>Fazit</h3>
  <p>
    Der IHK-Nachweis-Schreiber spart nicht nur Zeit, sondern erhöht auch die Konsistenz und Qualität der Ausbildungsnachweise. Mit seinem modularen Aufbau und der API-Anbindung ist das Tool extrem flexibel und lässt sich problemlos erweitern.
  </p>
    `,
};

const crowdNationTracking: Project = {
    active: true,
    showPreview: false,
    title: "Crowd-Nation Tracking",
    shortDescription: "Live-Tracking-System mit WiFi-Triangulation für Events",
    description:
        "Hardwaregestütztes Tracking über WLAN-Access-Points zur präzisen Standortbestimmung von Teilnehmern auf Events.",
    image: "https://images.unsplash.com/photo-1573167101669-476636b96cea?auto=format&fit=crop&q=80&w=800",
    link: "/projects/crowd-nation-tracking",
    tech: ["WiFi", "Node.js", "Crowd-Nation API", "Triangulation", "Mobile App"],
    extendedTitle: "Crowd-Nation Tracking – Freunde live auf Events finden",
    extendedText: `
      <p>
        Das <strong>Crowd-Nation Tracking</strong>-System ist ein innovativer Ansatz, um die physische Anwesenheit und Position von Nutzern auf Events in Echtzeit zu erfassen. Die Idee entstand aus der Schwierigkeit, sich auf Festivals und Konzerten wiederzufinden – besonders in Bereichen ohne präzises GPS.
      </p>
      <br />
      <p>
        Mithilfe eigener WLAN-Access-Points werden mobile Geräte erfasst, die sich in Reichweite befinden. Die Signalstärke zwischen einem Gerät und mehreren Access Points wird analysiert, um daraus die ungefähre Position im virtuellen Raum zu berechnen. Dabei wird bewusst auf die MAC-Adresse gesetzt, um Nutzer eindeutig, jedoch anonymisiert zu erkennen.
      </p>
      <br />
      <p>
        Das Tracking erfolgt unabhängig vom Internet: Alle Access Points senden ein identisches SSID-Signal aus und kommunizieren lokal mit dem Server. Dieser verarbeitet die Daten, führt eine Triangulation durch und sendet die Position in Echtzeit an die Crowd-Nation Plattform zurück.
      </p>
      <br />
      <p>
        In Kombination mit der Crowd-Nation App können Benutzer ihre Freunde hinzufügen und auf einer Map-Ansicht verfolgen, wo diese sich gerade befinden. Dies funktioniert besonders gut in Hallen, Zelten oder stark frequentierten Arealen, wo GPS scheitert.
      </p>
      <br />
      <p>
        Das Ziel ist es, nicht nur ein technisches Gimmick zu schaffen, sondern ein echtes <strong>Festival-Navigationssystem</strong>, das soziale Interaktionen erleichtert und Sicherheit sowie Komfort steigert.
      </p>
      <br />
      <p><strong>Geplante Erweiterungen:</strong></p>
      <ul class="list-disc pl-6 mt-2">
        <li>Integration mit Crowd-Nation App (iOS & Android)</li>
        <li>Genaueres Mapping der Gelände-Geometrie</li>
        <li>Benachrichtigungen bei Verlassen oder Betreten definierter Zonen (z.B. „Stage Area“)</li>
        <li>DSGVO-konformes Opt-in / Opt-out System</li>
      </ul>
    `,
};

const wowWebsiteProject: Project = {
    active: true,
    showPreview: false,
    title: "World-of-Warcraft Gilden Website",
    shortDescription:
        "Landing Page für unsere Gilde & Subpage mit Infos zum Discord-Bot – alles im Stil von Schatten der Ewigkeit.",
    description:
        "Eine stilvolle Website zur Präsentation unserer Gilde und des zugehörigen Discord-Bots inklusive Invite-Links.",
    image: "https://images.unsplash.com/photo-1626824213083-5f79da41d42c?auto=format&fit=crop&q=80&w=800",
    link: "/projects/wow-website",
    github: "https://github.com/WlanKabL/sde-website",
    tech: ["Vue.js", "TypeScript", "TailwindCSS", "Nuxt 3", "OAuth", "WebSocket"],
    extendedTitle: "Schatten der Ewigkeit – Gildenpräsenz mit Bot-Integration",
    extendedText: `
    <p>
      Die Website zur Gilde <strong>Schatten der Ewigkeit</strong> ist eine moderne Landing Page, die sowohl potenziellen neuen Mitgliedern als auch neugierigen Besuchern einen stilvollen Einblick in unsere Gilde bietet.
      Mit einem klaren Fokus auf Ästhetik, Atmosphäre und Struktur wurde die Seite mit <strong>Vue 3</strong> und <strong>Nuxt 3</strong> erstellt.
    </p>
    <br />
    <p>
      Auf der Startseite werden Besucher mit einer <strong>Dark-Fantasy-Stimmung</strong> empfangen, die perfekt zur Identität der Gilde passt. Texte, Bilder und Call-To-Actions laden ein, mehr über unsere Gemeinschaft zu erfahren – ganz ohne überladen zu wirken.
    </p>
    <br />
    <p>
      Zusätzlich enthält die Seite eine dedizierte <strong>Subpage für unseren Discord-Bot</strong>. Dort werden alle wichtigen Features des Bots aufgelistet, inklusive:
    </p>
    <ul class="list-disc list-inside text-gray-300">
      <li>Charakter-Verknüpfung via Battle.net OAuth</li>
      <li>Automatische Rollenvergabe</li>
      <li>Bewerbungssystem über Discord</li>
      <li>Mount-Reminder & mehr</li>
    </ul>
    <br />
    <p>
      Natürlich sind dort auch die wichtigsten Links direkt erreichbar:
    </p>
    <ul class="list-disc list-inside text-gray-300">
      <li><strong>Einladung zum Discord-Server</strong></li>
      <li><strong>Bot zu deinem Server einladen</strong></li>
    </ul>
    <br />
    <p>
      In Zukunft ist geplant, die Website mit interaktiven Inhalten zu erweitern – z.B. durch gespeicherte Gilden- oder Charakterdaten, ein internes Bewerberportal oder eine Web-Kommunikationsschicht mit dem Bot selbst über <strong>WebSockets</strong>.
    </p>
    <br />
    <p>
      Aktuell dient sie jedoch vor allem einem Ziel: <strong>Repräsentation mit Stil</strong> – und das gelingt ihr.
    </p>
    `,
};

const rlShopTracking: Project = {
    active: true,
    showPreview: false,
    title: "RL-Shop-Tracking",
    shortDescription: "Tägliches Scraping des Rocket League Shops mit Checksummen-Schutz.",
    description: "Automatisiertes Scraping des Rocket League Shops zur Archivierung und Analyse.",
    image: "https://images.unsplash.com/photo-1606813904733-f5c9cf75deaa?auto=format&fit=crop&q=80&w=800",
    link: "/projects/rl-shop-tracking",
    tech: ["Node.js", "JSON", "Cheerio"],
    extendedText: `
      <p><strong>RL-Shop-Tracking</strong> ist ein automatisiertes Tool, das täglich den Rocket League Ingame-Shop abruft und die Inhalte für Analysezwecke speichert. Es wurde entwickelt, um Trends, Wiederholungen und exklusive Items langfristig verfolgen zu können.</p>
      <br />
      <ul>
        <li>Verwendet <strong>Cheerio</strong> für HTML-Parsing und extrahiert strukturierte Daten.</li>
        <li>Speichert Daten in <strong>JSON</strong> – inklusive Zeitstempel und Item-Metadaten.</li>
        <li>Berechnet <strong>Checksummen</strong> zur Vermeidung von Duplikaten und sorgt so für saubere Datensätze.</li>
      </ul>
      <br />
      <p>Das Projekt läuft automatisiert via Scheduler und ermöglicht langfristig Insights zu Item-Verfügbarkeiten, Angeboten und Rotation von Inhalten im Spiel. Perfekt für Statistikliebhaber, Sammler oder Entwickler von Gaming-Trackern.</p>
    `,
};

const surrealToCSharp: Project = {
    active: true,
    showPreview: false,
    title: "SurrealToCSharp",
    shortDescription: "Konvertiert SurrealDB-Schemas zu C#-Klassen für .NET-Projekte.",
    description:
        "Automatisiertes Tool zur Umwandlung von SurrealDB-Dumps in typisierte C#-Modelle.",
    image: "https://images.unsplash.com/photo-1581093588401-5c44aa4f6f42?auto=format&fit=crop&q=80&w=800",
    link: "/projects/surreal-to-csharp",
    tech: ["Node.js", "C#", "SurrealDB"],
    extendedText: `
      <p><strong>SurrealToCSharp</strong> ist ein leistungsstarkes Konvertierungs-Tool, das SurrealDB-Exporte ausliest und automatisch in vollständige C#-Klassendateien umwandelt. Es wurde für Entwickler konzipiert, die strukturierte Daten aus SurrealDB schnell in .NET-Projekten weiterverwenden möchten.</p>
      <br />
      <ul>
        <li>Analysiert komplette <strong>SurrealDB Exporte</strong>.</li>
        <li>Erkennt Tabellen, Felder und Typen und generiert daraus saubere C#-Strukturen.</li>
        <li>Vermeidet redundante manuelle Erstellung von Data Models in C#.</li>
      </ul>
      <br />
      <p>Das Tool ist besonders hilfreich beim Reverse Engineering von bestehenden Datenbanken oder beim schnellen Setup von Backend-Projekten, die auf Daten aus SurrealDB aufbauen.</p>
    `,
};

export const projects: Project[] = [
    crowdNationFrontend,
    wowDiscordBot,
    crowdNationBackend,
    universalJenga,
    crowdNationCDN,
    IHKNachweisSchreiber,
    crowdNationTracking,
    wowWebsiteProject,
    rlShopTracking,
    surrealToCSharp,
];
