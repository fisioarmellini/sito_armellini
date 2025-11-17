import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import success1 from "@/assets/success-1.jpg";
import success2 from "@/assets/success-2.jpg";
import success3 from "@/assets/success-3.jpg";

const successCases = [
  {
    id: 1,
    image: success1,
    category: "Terapia Manuale e Mobilizzazioni",
    title: "Trattamento manuale per cervicalgia acuta con irradiazione",
    subtitle: "Un intervento mirato di terapia manuale e mobilizzazioni per risolvere una cervicalgia acuta e riportare la paziente alla piena funzionalità.",
    startDate: "12 febbraio 2024",
    endDate: "12 marzo 2024",
    patientName: "Claudia R.",
    pathology: "Cervicalgia acuta con rigidità e limitazione del movimento",
    treatmentCategory: "Terapia manuale, mobilizzazioni articolari, massoterapia decontratturante",
    outcome: "Ripristino completo del range di movimento, scomparsa della sintomatologia dolorosa e rientro alle attività quotidiane senza limitazioni.",
    initialSituation: "Claudia, 42 anni, si presenta in studio con un forte dolore cervicale insorto dopo una notte di sonno in posizione scorretta. Il dolore le limitava l'estensione e la rotazione del collo, irradiandosi fino alla spalla destra, rendendo difficili attività quotidiane come guidare e lavorare al computer. Riferiva tensione costante e rigidità muscolare.",
    treatment: "È stato impostato un percorso di terapia manuale composto da: mobilizzazioni articolari cervicali a bassa ampiezza, tecniche di rilascio miofasciale, massoterapia mirata alla muscolatura paravertebrale e scapolare, esercizi dolci di mobilità attiva guidata. Le sedute, a cadenza bi-settimanale, sono state personalizzate in base alla risposta dei tessuti e alla progressiva riduzione del dolore.",
    finalOutcome: "Dopo quattro settimane Claudia ha recuperato il 100% della mobilità cervicale, riferendo completa scomparsa del dolore e un miglioramento generale della postura e della percezione del collo \"più libero\". Ha potuto riprendere a lavorare senza fastidi e tornare all'attività sportiva leggera. Un caso di recupero rapido e completo."
  },
  {
    id: 2,
    image: success2,
    category: "Trattamenti Riabilitativi",
    title: "Riabilitazione per lombalgia da sovraccarico funzionale",
    subtitle: "Un percorso strutturato di rieducazione motoria e rinforzo per risolvere una lombalgia persistente dovuta a postura e lavoro sedentario.",
    startDate: "8 gennaio 2024",
    endDate: "5 febbraio 2024",
    patientName: "Marco T.",
    pathology: "Lombalgia cronica da postura sedentaria",
    treatmentCategory: "Esercizio terapeutico, rieducazione posturale, rinforzo muscolare",
    outcome: "Scomparsa del dolore, miglioramento posturale evidente e recupero completo della funzionalità lombare.",
    initialSituation: "Marco, 37 anni, lavora in ufficio trascorrendo oltre 9 ore al giorno seduto. Riferiva dolore lombare costante, rigidità mattutina e difficoltà nei movimenti di flessione e rotazione del tronco. L'episodio si ripresentava ciclicamente da mesi, limitando sia il lavoro che l'attività fisica.",
    treatment: "È stato avviato un programma riabilitativo composto da: esercizi terapeutici specifici per migliorare mobilità lombare e stabilità del core, rieducazione posturale per correggere compensi e abitudini scorrette, esercizi propriocettivi (Metodo Riva) per aumentare controllo e equilibrio, un piano di rinforzo muscolare progressivo per ridurre il carico sulla colonna. Le sedute si sono svolte con cadenza di 2 volte a settimana per un mese.",
    finalOutcome: "Alla fine del percorso Marco ha ottenuto una completa risoluzione del dolore lombare, maggiore fluidità nei movimenti e una postura nettamente più stabile. Ha ripreso l'attività sportiva senza fastidi e ha riportato un netto miglioramento della qualità di vita. Miglioramento considerato \"molto elevato\" anche a distanza di un mese dal termine del percorso."
  },
  {
    id: 3,
    image: success3,
    category: "Dermatofunzionale",
    title: "Riduzione fibrosi ed edema dopo liposuzione addominale",
    subtitle: "Un percorso dermatofunzionale completo per migliorare edema, fibrosi e aderenze post liposuzione, restituendo al tessuto elasticità e uniformità.",
    startDate: "18 aprile 2024",
    endDate: "20 maggio 2024",
    patientName: "Sara L.",
    pathology: "Edema, fibrosi e aderenze post-chirurgiche (post liposuzione)",
    treatmentCategory: "Dermatofunzionale, drenaggio linfatico, trattamento cicatrici e fibrosi",
    outcome: "Netta riduzione di edema e fibrosi, miglioramento della texture cutanea e pieno ripristino dell'elasticità tessutale.",
    initialSituation: "Sara, 33 anni, si rivolge allo studio tre settimane dopo una liposuzione addominale. Presenta edema diffuso, aree di fibrosi palpabile nella zona periombelicale e una sensazione di tensione cutanea che le crea fastidio nei movimenti. Esteticamente notava irregolarità e \"zone dure\" sotto la pelle tipiche del post-operatorio precoce.",
    treatment: "Il percorso è stato costruito con: drenaggio linfatico intensivo (Metodo Renata França) per ridurre rapidamente edema e ristagni, trattamento delle fibrosi con tecniche specifiche dermatofunzionali per ammorbidire i tessuti, lavoro sulle aderenze cicatriziali per migliorare scorrimento e elasticità, tecniche fasciali delicate per favorire riorganizzazione uniforme del tessuto sottocutaneo. Le sedute sono state eseguite 2 volte a settimana per un mese, con progressione della manualità in base alla risposta del tessuto.",
    finalOutcome: "Dopo poche sedute l'edema si è ridotto del 60%. Al termine del percorso la fibrosi risultava quasi completamente risolta, la pelle più morbida e uniforme e la paziente ha riferito un miglioramento estetico \"nettissimo\". La mobilità è tornata normale e la percezione del corpo molto più confortevole. Risultato eccellente, sia funzionale che estetico."
  },
  {
    id: 4,
    image: success1,
    category: "Terapie fisiche",
    title: "Terapia fisica per tendinite rotulea da sovraccarico sportivo",
    subtitle: "Un percorso mirato con tecarterapia e ultrasuoni per ridurre l'infiammazione del tendine rotuleo e riportare l'atleta alla piena funzionalità.",
    startDate: "10 marzo 2024",
    endDate: "5 aprile 2024",
    patientName: "Luca M.",
    pathology: "Tendinite rotulea (\"jumper's knee\")",
    treatmentCategory: "Terapie fisiche: tecarterapia, ultrasuoni, elettroterapia antalgica",
    outcome: "Riduzione completa del dolore, miglioramento della funzionalità del ginocchio e ritorno all'attività sportiva senza sintomi.",
    initialSituation: "Luca, 29 anni, atleta amatoriale, lamentava da settimane dolore nella parte anteriore del ginocchio, peggiorato durante i salti e la corsa. L'infiammazione del tendine rotuleo gli impediva di allenarsi e di eseguire anche flessioni profonde del ginocchio. Il dolore era valutato come 7/10 nelle attività sportive.",
    treatment: "Il protocollo è stato composto da: Tecarterapia per ridurre infiammazione e migliorare la vascolarizzazione del tendine, Ultrasuoni mirati per agire sul tessuto tendineo e favorire la riparazione, Elettroterapia antalgica per controllare il dolore nella fase iniziale, esercizi incruenti di mobilità e progressivo rinforzo eccentrico del quadricipite. Le terapie sono state applicate 2–3 volte a settimana, integrate gradualmente con lavoro funzionale.",
    finalOutcome: "Dopo tre settimane Luca ha riportato una riduzione del dolore dell'80%, fino alla completa remissione alla quarta settimana. Ha ripreso gli allenamenti senza sintomi, riferendo un sensibile miglioramento della forza e della fiducia nel ginocchio. Risultato definito \"ottimo\" sia dal punto di vista sportivo che clinico."
  },
  {
    id: 5,
    image: success2,
    category: "Terapie per dolore / infiammazione",
    title: "Riduzione del dolore da borsite alla spalla con taping ed educazione neuromuscolare",
    subtitle: "Un intervento mirato per alleviare dolore, migliorare la stabilità e correggere i compensi muscolari attraverso taping ed esercizi neuromuscolari.",
    startDate: "22 maggio 2024",
    endDate: "19 giugno 2024",
    patientName: "Giulia P.",
    pathology: "Borsite subacromiale con dolore in elevazione del braccio",
    treatmentCategory: "Kinesio taping, neuromuscular reeducation, trattamento antinfiammatorio conservativo",
    outcome: "Dolore quasi azzerato, maggior controllo del movimento scapolare e ritorno completo alle attività quotidiane.",
    initialSituation: "Giulia, 35 anni, praticante di palestra, si presentava con dolore alla spalla destra insorto da alcune settimane. Riferiva difficoltà ad alzare il braccio sopra la testa, dolore notturno e una sensazione di \"impaccio\" nei movimenti. La borsite subacromiale veniva confermata anche da una valutazione ortopedica esterna.",
    treatment: "Il percorso terapeutico ha incluso: applicazione di Kinesio Taping per ridurre carico e tensione sulla borsa subacromiale, neuromuscular reeducation per migliorare il controllo della scapola e della cuffia dei rotatori, esercizi lenti di rinforzo e mobilità per evitare sovraccarichi, consigli personalizzati su movimenti da evitare e gestione del dolore. L'approccio è stato graduale, con sedute settimanali per quattro settimane.",
    finalOutcome: "Alla fine del percorso Giulia ha riferito un miglioramento del dolore del 90%. Ha recuperato completamente il movimento del braccio, il disturbo notturno è scomparso e si è ridotta la sensibilità nell'area infiammata. È tornata ad allenarsi in sicurezza seguendo un piano personalizzato. Caso risolto con successo e stabilità nel follow-up a 30 giorni."
  },
  {
    id: 6,
    image: success3,
    category: "Recupero post-operatorio",
    title: "Riabilitazione completa dopo ricostruzione del legamento crociato anteriore (LCA)",
    subtitle: "Un percorso post-operatorio strutturato per recuperare mobilità, forza e stabilità dopo intervento di ricostruzione LCA, riportando il paziente allo sport.",
    startDate: "3 settembre 2024",
    endDate: "15 dicembre 2024",
    patientName: "Matteo S.",
    pathology: "Post-operatorio da ricostruzione LCA del ginocchio sinistro",
    treatmentCategory: "Riabilitazione post-chirurgica, rinforzo muscolare, recupero funzionale",
    outcome: "Ripristino completo della funzione articolare, ritorno graduale alla corsa e ritorno totale allo sport dopo 3 mesi.",
    initialSituation: "Matteo, 26 anni, calciatore dilettante, si presenta in studio due settimane dopo un intervento di ricostruzione del legamento crociato anteriore. Presentava ginocchio gonfio, mobilità limitata e difficoltà nel carico monolaterale. Il quadricipite era molto ipotrofico e la stabilità articolare ancora compromessa.",
    treatment: "Il percorso ha seguito un protocollo progressivo: gestione edema e mobilità iniziale con esercizi passivi e mobilizzazioni delicate, riattivazione del quadricipite e progressivo carico controllato, rinforzo muscolare globale con focus su anca, core e catena cinetica, propriocettiva avanzata tramite tavole instabili e Redcord, recupero della corsa e dei cambi di direzione nelle ultime fasi. Le sedute sono state regolari (3 a settimana nelle prime fasi, poi 2), adattate alla risposta del ginocchio.",
    finalOutcome: "Matteo ha recuperato completamente l'estensione e il 95% della flessione del ginocchio entro la settima settimana. Al termine del protocollo presentava stabilità articolare ottimale e un buon livello di forza. È tornato a correre senza dolore e ha ripreso gli allenamenti sul campo sotto supervisione, con soddisfazione personale e dell'ortopedico. Caso di pieno successo clinico e funzionale."
  }
];

const SuccessCase = () => {
  const { id } = useParams();
  const caseData = successCases.find(c => c.id === Number(id));

  if (!caseData) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="container mx-auto px-6 py-20 max-w-5xl">
        <div className="mb-8">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            {caseData.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {caseData.title}
          </h1>
          <p className="text-xl text-foreground/80 leading-relaxed">
            {caseData.subtitle}
          </p>
        </div>

        <img 
          src={caseData.image} 
          alt={caseData.title}
          className="w-full h-96 object-cover rounded-2xl mb-12"
        />

        <div className="grid md:grid-cols-2 gap-6 mb-12 p-6 bg-secondary rounded-2xl">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Inizio</p>
            <p className="font-semibold text-foreground">{caseData.startDate}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Fine</p>
            <p className="font-semibold text-foreground">{caseData.endDate}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Paziente</p>
            <p className="font-semibold text-foreground">{caseData.patientName}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Patologia</p>
            <p className="font-semibold text-foreground">{caseData.pathology}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm text-muted-foreground mb-1">Categoria di trattamento</p>
            <p className="font-semibold text-foreground">{caseData.treatmentCategory}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm text-muted-foreground mb-1">Esito finale</p>
            <p className="font-semibold text-foreground">{caseData.outcome}</p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">1. Situazione iniziale</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {caseData.initialSituation}
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">2. Come lo abbiamo trattato</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {caseData.treatment}
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">3. Qual è stato l'esito finale</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {caseData.finalOutcome}
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default SuccessCase;
