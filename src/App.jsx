import 'Src/App.css';
import Dialog from 'Components/molecules/Dialog';
// import Dialog from '@components/molecules/';
import Router from 'Src/Router';
import globalCss from "Src/global.scss"

const App=() =>{
  
  document.querySelector("[name='theme-color']").setAttribute('content',globalCss.bgtheme)
  return (
    <div className="App">
      <Dialog />
      <Router />
    </div>
  );
}

export default App;
