import PageContainer from "../components/navigation/home/PageContainer";
import Space from "@components/style/Space";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Services() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(
      `mailto:lean.ergonomics@gmail.com?body=${message}&subject=Kontaktformular:%20${name}`
    );
  };

  return (
    <PageContainer>
      <header>
        <h1 className="PageTitel">Kontakt</h1>
        <em>
          <p className="UnderTitel">gemeinsam mehr schaffen</p>
        </em>
      </header>
      <Space height="5vh" />
      <Space height="20px" color="#617784" />
      <Space height="10vh" />

      <h3>Hinterlassen Sie uns eine Nachricht!</h3>
      <Space height="20px" />

      <div className="centeredMax1000">
        <p style={{ margin: 0 }}>Name/Firma</p>
        <input
          type="text"
          name="name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Space height="30px" />
        <p style={{ margin: 0 }}>Nachricht</p>
        <textarea
          type="text"
          name="comment"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <Space height="20px" />
        <div className="d-flex justify-content-end">
          <button onClick={handleSubmit} className="btn btn-primary">
            Senden
          </button>
        </div>
      </div>

      <Space Separator="true" />

      

      <div className="centeredContent">
            <div style={{width:"fit-content"}}>
              <p style={{padding:0}}>
                <b>Betreuer</b>
                <br />
                M. Sc. Stefan Brunner
                <br />
                Lehrstuhl für Ergonomie
                <br />
                Boltzmannstr. 15
                <br />
                85747 Garching b. München
                <br />
                Tel.: +49 162 2016635
                <br />
                <Link href="mailto:st.brunner@tum.de">st.brunner@tum.de</Link>
                <br />
              </p>
            
              <p style={{padding:0}}>
                <b>Lehrstuhl</b>
                <br />
                Lehrstuhl für Ergonomie
                <br/>
                Technische Universität München
                <br />
                Boltzmannstr. 15
                <br />
                85748 Garching b. München
                <br />
                Tel: +49 89 289 15388
              </p>
         
              <p style={{padding:0}}>
                <b>Masterand (Entwickler)</b>
                <br />
                Jerome Fürst <br />
                <Link href="mailto:lean.ergonomics@gmail.com">lean.ergonomics@gmail.com</Link>
                <br />
              </p>
            </div>
      </div>

      <Space height="10vh" />
    </PageContainer>
  );
}
