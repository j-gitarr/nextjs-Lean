import Space from "@components/style/Space";
import PageContainer from "../components/navigation/home/PageContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "popper.js";
import Link from "next/link";
import ToggleFullscreen from "@components/utility/ToggleFullscreen";

export default function Home() {
  return (
    //PageContainer React Component displays the Navigation Bar, the Side Navigtation and the Content.... Mainly Page Layout
    <PageContainer>
      <header>
        <h1 className="PageTitel">Willkommen bei LEA </h1>
        <em>
          <p className="UnderTitel">Ihrer Lean Ergonomics Application</p>
        </em>
        <Space height="5vh" />
        <Space height="10px" color="#617784" />
        <Space height="20vh" />
      </header>
      <main>
        <p className="centeredMax800 spaceSideSM">
          <b>LEA</b> ist Ihre wegweisende Webapplikation, die es Ihrem
          Unternehmen ermöglicht, tiefgreifende Erkenntnisse über die
          Arbeitsbedingungen und die Leistung ihrer Mitarbeiter zu gewinnen.
          Durch die nahtlose Integration bewährter
          Ergonomiebewertungsinstrumente wie dem EAWS-Fragebogen, dem
          NASA-TLX-Fragebogen, der Borg-Skala und dem KFZA-Fragebogen bieten wir
          Ihnen eine umfassende Lösung, um die Arbeitsbelastung zu
          quantifizieren und zu analysieren.
        </p>

        <Space height="20vh" />
        <Space height="10px" color="#617784" width="100%" />
        <Space height="10vh" />

        <h2>Unsere Leistungen im Überblick:</h2>

        <Space height="10vh" />

        <div className="centeredMax800 spaceSideSM">
          <p>
            <strong>Ganzheitliche Datenanalyse:</strong> LEA erfasst und
            analysiert umfassende Daten mithilfe der genannten
            Ergonomiebewertungswerkzeuge. Dadurch erhalten Sie detaillierte
            Einblicke in die physische und mentale Belastung Ihrer Mitarbeiter
            während ihrer Arbeitsabläufe.
          </p>
          <br />
          <br />
          <p>
            <strong>Fokus auf Mitarbeiterleistung:</strong> Wir unterstützen Sie
            dabei, die Schwankungen in der Arbeitsleistung Ihrer Mitarbeiter
            besser zu verstehen. Durch die Verknüpfung von Belastungs- und
            Leistungsdaten identifizieren wir Zusammenhänge, die Ihnen bei der
            Optimierung Ihrer Prozesse helfen.
          </p>
          <br />
          <br />
          <p>
            <strong>Maßgeschneiderte Empfehlungen:</strong> Basierend auf den
            gewonnenen Erkenntnissen erhalten Sie präzise Empfehlungen zur
            Anpassung Ihrer Arbeitsprozesse. Unser Ziel ist es, die
            Mitarbeiterzufriedenheit zu steigern und gleichzeitig die Effizienz
            und Effektivität Ihrer Abläufe zu maximieren.
          </p>
          <br />
          <br />
          <p>
            <strong>Ganzheitlicher Ansatz:</strong> Bei LEA verstehen wir, dass
            ergonomische Aspekte nicht isoliert betrachtet werden können. Unsere
            Webapplikation berücksichtigt sämtliche Facetten und hilft Ihnen
            dabei, ein ausgewogenes Verhältnis zwischen Mitarbeiterwohlbefinden
            und betrieblicher Produktivität zu erreichen.
          </p>
          <br />
          <br />
        </div>

        <Space height="20vh" />
        <Space height="10px" color="#617784" width="100%" />
        <Space height="10vh" />

        <main>
        <ToggleFullscreen>
          <Link href="/App">
            <h2 className="btn btn-primary btn-lg">Starten Sie jetzt!</h2>
          </Link>
        </ToggleFullscreen>
          </main>
        <Space height="10vh" />

        <p className="centeredMax800 spaceSideSM">
          <b>Erleben Sie</b> wie LEA die Gesundheit, Zufriedenheit und
          Produktivität Ihrer Mitarbeiter steigert. Wir laden Sie herzlich dazu
          ein, sich näher umzusehen und gemeinsam mit uns die Zukunft Ihrer
          Arbeitsprozesse zu gestalten.
        </p>

        <Space height="20vh" />
      </main>
    </PageContainer>
  );
}
