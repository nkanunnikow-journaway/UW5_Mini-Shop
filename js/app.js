// Einstiegspunkt des Mini-Shops (ohne Backend, Daten liegen lokal im Frontend)

/**
 * Beispielprodukte für die Kundendemo.
 * Da es kein Backend gibt, ersetzt dieses Array eine Datenbank bzw. API.
 *
 * Aufbau eines Produkts:
 * - id:           eindeutige Nummer, später z. B. für das Detailmodal
 * - name:         Produktname für Liste und Modal
 * - preis:        Preis in Euro als Zahl (Formatierung erst bei der Anzeige)
 * - bild:         Pfad zum lokalen Produktbild in img/
 * - bildAlt:      Alternativtext für Screenreader (Barrierefreiheit)
 * - beschreibung: längerer Text für das Detailmodal
 */
const produkte = [
  {
    id: 1,
    name: "Keramiktasse",
    preis: 12.99,
    bild: "img/tasse.svg",
    bildAlt: "Weiße Keramiktasse mit Henkel",
    beschreibung:
      "Handgefertigte Tasse aus Steinzeug, 350 ml. Spülmaschinen- und mikrowellengeeignet.",
  },
  {
    id: 2,
    name: "Notizbuch A5",
    preis: 8.49,
    bild: "img/notizbuch.svg",
    bildAlt: "Dunkelblaues Notizbuch im Format A5 mit Gummiband",
    beschreibung:
      "Gepunktetes Notizbuch mit 192 Seiten, Lesebändchen und Innentasche für lose Zettel.",
  },
  {
    id: 3,
    name: "Trinkflasche",
    preis: 19.9,
    bild: "img/flasche.svg",
    bildAlt: "Grüne Edelstahl-Trinkflasche mit Schraubverschluss",
    beschreibung:
      "Doppelwandige Edelstahlflasche, 750 ml. Hält Getränke 12 Stunden warm oder 24 Stunden kalt.",
  },
  {
    id: 4,
    name: "Stoffbeutel",
    preis: 6.5,
    bild: "img/beutel.svg",
    bildAlt: "Beiger Stoffbeutel aus Baumwolle mit zwei langen Henkeln",
    beschreibung:
      "Robuster Einkaufsbeutel aus 100 % Bio-Baumwolle, trägt bis zu 10 kg.",
  },
  {
    id: 5,
    name: "Kopfhörer",
    preis: 49.0,
    bild: "img/kopfhoerer.svg",
    bildAlt: "Schwarze Over-Ear-Kopfhörer mit gepolstertem Bügel",
    beschreibung:
      "Kabellose Over-Ear-Kopfhörer mit bis zu 30 Stunden Akkulaufzeit und USB-C-Ladeanschluss.",
  },
  {
    id: 6,
    name: "Schreibtischlampe",
    preis: 34.95,
    bild: "img/lampe.svg",
    bildAlt: "Gelbe Schreibtischlampe mit schwenkbarem Arm",
    beschreibung:
      "LED-Lampe mit drei Helligkeitsstufen und flexiblem Gelenkarm, Energieeffizienzklasse A.",
  },
];
