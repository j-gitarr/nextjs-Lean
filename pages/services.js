import Space from "@components/style/Space";
import PageContainer from "../components/navigation/home/PageContainer";

export default function Services() {
  return (
    <PageContainer>
      <header>
        <h1 className="PageTitel">Services</h1>
        <em>
          <p className="UnderTitel">mit weniger mehr erreichen</p>
        </em>
      </header>
      <Space height="5vh" />
      <Space height="20px" color="#617784" />
      <Space height="20vh" />
      <main>
        <div className="centeredMax800 spaceSideSM">
          <p>
            <strong>Wir helfen Ihnen</strong> bei der Anwendung von Lean Ergonomics. Sie können
            dabei selbst entscheiden, wie viel Unterstützung Sie bei der
            Integration von Lean Ergonomics in Ihre Unternehmenskultur
            benötigen. <strong>Unsere Dienstleistungen umfassen:</strong>  
          </p>
       
          <Space height="5vh" />
          <p>
            <strong>Beratung:</strong> Ist Lean Ergonomics geeignet für Ihr
            Unternehmen? Welchen Mehrwehrt bringt Ihnen Lean Ergonomics? Welche
            Kosten entstehen für Sie durch Lean Ergonomics? Wie kann eine
            Einbindung von Lean Ergonomics in die Unternehmenskultur aussehen?
            Diese und weitere Fragen klären wir zusammen mit Ihnen in der
            Beratung. Zusammen legen wir fest, wie viel Unterstützung Sie bei
            der Anwendung von Lean Ergonomics benötigen und wie viel Expertise bereits
            in Ihrem Unternehmen vorhanden ist, bzw. vorhanden sein soll.
          </p>

          <p>
            <strong>Coaching:</strong> Wir schulen Sie und Ihr Personal über
            Lean Ergonomics und dessen Anwendung. Zudem bilden wir Lean Ergonomics
            Experten aus, um die Expertise in Ihr eigenes Unternehmen zu
            verlagern.{" "}
          </p>
          <p>
            <strong>Integration:</strong> Wir helfen Ihnen bei der Integration
            von Lean Ergonomics-Methoden und -Prozessen in Ihr Unternehmen.
          </p>

          <p>
            <strong>Koordination:</strong> Wir helfen Ihnen bei der
            Durchführung, Erhebung und Planung. Vor Ort, Online, synchron oder
            asynchron.{" "}
          </p>

          <p>
            <strong>Optimierung:</strong> Das Ziel von Lean Ergonomics stellt
            immer die Optimierung Ihrer Prozesse und Arbeitsumgebung dar. Wir
            helfen Ihnen, die gewonnenen Erkenntnisse aus der Durchführung von
            Lean Ergonomics zielgerichtet anzuwenden und dadurch Ihre
            Gesamtsystemleistung zu verbessern, als auch das Wohlbefinden und die
            Gesundheit Ihrer Mitarbeiter nachhaltig zu steigern.{" "}
          </p>

          <p>
            <strong>Kontinuierliche Verbesserung:</strong> Wir wissen, dass es
            nicht auf eine einmalige Verbesserung, sondern auf einen Prozess der
            kontinuierlichen Verbesserung ankommt. Wir helfen Ihnen dabei, Lean
            Ergonomics nachhaltig zu etablieren und somit nicht nur
            kurzfristige, sondern auch langfristige und nachhaltige
            Veränderungen zu gestalten.
          </p>
          <Space height="10vh" />
        </div>
      </main>
      <Space Separator="true" />

      <div className="centeredContent">
        <button className="btn btn-primary btn-lg">
          Stellen Sie jetzt Ihre Anfrage
        </button>
      </div>
      <Space height="10vh" />
    </PageContainer>
  );
}
