import React from "react";
import "./App.css";
import ListadoSeries from "./components/listadoseries";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import { FormattedMessage, IntlProvider } from "react-intl";
import { Container } from "react-bootstrap";

const urlEsp =
  "https://gist.githubusercontent.com/josejbocanegra/c55d86de9e0dae79e3308d95e78f997f/raw/d9eb0701f6b495dac63bbf59adc4614a9eb5fbc8/series-es.json";
const urlEn =
  "https://gist.githubusercontent.com/josejbocanegra/5dc69cb7feb7945ef58b9c3d84be2635/raw/64146e99e4416da3a8be2e2da4156cb87b3f6fd0/series-en.json";

function getBrowserLang() {
  return navigator.language || navigator.userLanguage;
}
function getLocale() {
  const lang = getBrowserLang();
  if (lang === "en") {
    return localeEnMessages;
  } else {
    return localeEsMessages;
  }
}

function getUrl() {
  const lang = getBrowserLang();
  if (lang === "en") {
    return urlEn;
  } else {
    return urlEsp;
  }
}

function App() {
  return (
    <IntlProvider locale={getBrowserLang()} messages={getLocale()}>
      <Container>
        <h1>
          <FormattedMessage id="Series" />
        </h1>
      </Container>
      <br />
      <ListadoSeries url={getUrl()} />
      <div></div>
    </IntlProvider>
  );
}

export default App;
