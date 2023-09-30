import Space from "@components/style/Space";
import Navbar from "../components/navigation/home/Navbar";
import PageContainer from "../components/navigation/home/PageContainer";

export default function About() {
  return (
    <PageContainer>
      <header>
        <h1 className="PageTitel">Was ist LEA?</h1>
        <em>
          <p className="UnderTitel">die Zukunft der Prozessoptimierungn</p>
        </em>
      </header>
      <Space height="5vh" />
      <Space height="20px" color="#617784" />
      <Space height="20vh" />

      <main>
        <div className="centeredMax800 spaceSideSM">
          <p>
            <strong> LEA </strong>wurde entwickelt, um den steigenden Bedarf an
            ergonomischer Effizienz in modernen Unternehmen zu adressieren. Mit
            ihr können Sie problemlos Daten zu ergonomischen Aspekten in Ihrem
            Betrieb sammeln und auswerten, ohne dabei aufwändige Prozesse
            durchlaufen zu müssen. Dies ermöglicht es Ihnen, ihre Arbeitsplätze
            mitarbeiterorientiert und produktiver zu gestalten. Somit erhöhen
            Sie gleichzeitig die Wirtschaftlichkeit Ihrer Prozesse, als auch die
            Zufriedenheit und das Wohlbefinden Ihrer Mitarbeiter.{" "}
          </p>
          <Space height="10vh" />

          <p>
            <strong> LEA </strong>bietet eine benutzerfreundliche Oberfläche und
            fortschrittliche Analysetools, die es Ihren Managern und Teams
            ermöglicht, tiefgehende Einblicke in ergonomische
            Verbesserungspotenziale zu gewinnen. Mit LEA können Sie nicht nur
            die Arbeitsbedingungen in Echtzeit überwachen, sondern auch gezielte
            Maßnahmen zur Steigerung der Ergonomie in Ihrem Unternehmen planen
            und umsetzen.
          </p>
          <Space height="10vh" />

          <p>
            <strong> LEA </strong>wurde im Rahmen einer Masterarbeit von Jerome
            Fürst entwickelt. Die Methodik, geht auf Stefan Brunner zurück, der
            mit seiner Forschungsarbeit den Grundstein für die wissenschaftliche
            Auseinandersetzung und Anwendung von Lean Ergonomics gelegt hat.{" "}
          </p>
        </div>
      </main>
      <Space Separator="true" />
      <main>
        <div className="centeredMax800 spaceSideSM">
          <h2>Was ist Lean Ergonomics?</h2>
          <Space height="10vh" />
          <p>
            Lean Ergonomics (LE) beschreibt einen modernen Ansatz zur
            Verbesserung von Arbeitsplätzen und Arbeitsprozessen in Unternehmen.
            LE kombiniert dabei die Prinzipien des Lean-Managements mit den
            Erkenntnissen der Ergonomie, um Arbeitsumgebungen zu optimieren und
            die Gesundheit sowie die Produktivität der Mitarbeiter zu steigern.
          </p>

          <Space height="10vh" />

          <p>
            LE zielt darauf ab, Verschwendung zu reduzieren, die Qualität
            zu verbessern und die Arbeitsprozesse kontinuierlich zu optimieren,
            während gleichzeitig die physische und psychische Gesundheit der
            Mitarbeiter geschützt wird. Diese ganzheitliche Herangehensweise an
            Arbeitsplatzgestaltung hat sich in verschiedenen Branchen bewährt
            und trägt dazu bei, sowohl die Mitarbeiterzufriedenheit als auch die
            Wettbewerbsfähigkeit von Unternehmen zu steigern.
          </p>

          <Space height="10vh" />
        </div>
      </main>
    </PageContainer>
  );
}
