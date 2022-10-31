import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header name={"The Job Board"} />
      <div className="container">
        <Jobs
          title={"Full Time Sales Associate - Sydney Boutique"}
          contractType={"CDI - "}
          country={"Australie - "}
          city={"Sydney"}
          color={"red"}
        />
        <Jobs
          title={"Agent de sécurité - Pantin"}
          contractType={"CDI - "}
          country={"France - "}
          city={"Pantin"}
          color={"green"}
        />
        <Jobs
          title={"Responsable d'atelier (H/F)"}
          contractType={"CDD - "}
          country={"France - "}
          city={"Paris"}
          color={"yellow"}
        />
        <Jobs
          title={"Chef de projets"}
          contractType={"CDD - "}
          country={"France - "}
          city={"Paris"}
          color={"aqua"}
        />
        <Jobs
          title={"Développeur React.js"}
          contractType={"CDI - "}
          country={"France - "}
          city={"Paris"}
          color={"pink"}
        />
        <Jobs
          title={"Sales associate Stockholm"}
          contractType={"CDI - "}
          country={"Suède - "}
          city={"Stockholm"}
          color={"red"}
        />
        <Jobs
          title={"Vendeur/se - Crans Montana"}
          contractType={"CDI - "}
          country={"Suisse - "}
          city={"Crans-Montana"}
          color={"green"}
        />
        <Jobs
          title={"CRM & Data Quality Analyst"}
          contractType={"CDI - "}
          country={"USA - "}
          city={"New York"}
          color={"yellow"}
        />
        <Jobs
          title={"Infirmier (H/F)"}
          contractType={"CDI - "}
          country={"France - "}
          city={"Pantin"}
          color={"aqua"}
        />
      </div>

      <Footer footerText={"Made with React at Le Reacteur By Léa"} />
    </>
  );
};

export default App;
