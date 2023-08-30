import PageContainer from '../components/PageContainer';
import "bootstrap/dist/css/bootstrap.min.css"

export default function Home() {
  return (
    //PageContainer React Component displays the Navigation Bar, the Side Navigtation and the Content.... Mainly Page Layout
    <PageContainer>
      <header>
        <h1>Willkommen bei LEAA - Ihrer Lean Ergonomics Assessment Application!</h1>
    </header>
    <main>
        <p>LEAA ist Ihre wegweisende Webapplikation, die es Unternehmen ermöglicht, tiefgreifende Erkenntnisse über die Arbeitsbedingungen und die Leistung ihrer Mitarbeiter zu gewinnen. Durch die nahtlose Integration bewährter Ergonomiebewertungsinstrumente wie dem EAWS-Fragebogen, dem NASA-TLX-Fragebogen, der Borg-Skala und dem KFZA-Fragebogen bieten wir Ihnen eine umfassende Lösung, um die Arbeitsbelastung zu quantifizieren und zu analysieren.</p>
        <br/><br/>
        <h2>Unsere Leistungen im Überblick:</h2>
        <ul>
            <li><strong>Ganzheitliche Datenanalyse:</strong> LEAA erfasst und analysiert umfassende Daten mithilfe der genannten Ergonomiebewertungswerkzeuge. Dadurch erhalten Sie detaillierte Einblicke in die physische und mentale Belastung Ihrer Mitarbeiter während ihrer Arbeitsabläufe.</li><br/>
            <li><strong>Fokus auf Mitarbeiterleistung:</strong> Wir unterstützen Sie dabei, die Schwankungen in der Arbeitsleistung Ihrer Mitarbeiter besser zu verstehen. Durch die Verknüpfung von Belastungs- und Leistungsdaten identifizieren wir Zusammenhänge, die Ihnen bei der Optimierung Ihrer Prozesse helfen.</li><br/>
            <li><strong>Maßgeschneiderte Empfehlungen:</strong> Basierend auf den gewonnenen Erkenntnissen erhalten Sie präzise Empfehlungen zur Anpassung Ihrer Arbeitsprozesse. Unser Ziel ist es, die Mitarbeiterzufriedenheit zu steigern und gleichzeitig die Effizienz und Effektivität Ihrer Abläufe zu maximieren.</li><br/>
            <li><strong>Ganzheitlicher Ansatz:</strong> Bei LEAA verstehen wir, dass ergonomische Aspekte nicht isoliert betrachtet werden können. Unsere Webapplikation berücksichtigt sämtliche Facetten und hilft Ihnen dabei, ein ausgewogenes Verhältnis zwischen Mitarbeiterwohlbefinden und betrieblicher Produktivität zu erreichen.</li><br/>
        </ul><br/><br/>
        
        <p>Erleben Sie, wie LEAA die Gesundheit, Zufriedenheit und Produktivität Ihrer Mitarbeiter steigert. Wir laden Sie herzlich dazu ein, sich näher umzusehen und gemeinsam mit uns die Zukunft Ihrer Arbeitsprozesse zu gestalten.</p>
        
        <footer>
            <p>Herzlich willkommen bei LEAA - Ihrer Lean Ergonomics Assessment Application!</p>
            <p style={{textAlign:"center"}}><em>Gemeinsam für eine gesunde und erfolgreiche Arbeitsumgebung.</em></p>
        </footer>
        
    </main>
    
	
	

      
    </PageContainer>
  );
}