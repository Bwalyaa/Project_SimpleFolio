import Haupt from './assets/components/haupt/Haupt'
import './App.css'
import Nav from './assets/components/nav/Nav'
//! ⬆️ hier werden nur packages und components imptortiert


function App() {
//! ⤵️ das ist vanila Javascript // VON HIER
// ! ab hier werden die Daten bearbeitet, funktionen geschrieben usw
 
// ! BIS HIER
  return (
    <>
    {/* React Fragment */}
    //! ab hier sind wir in einem JSX Bereich
    //! Dass wir hier sowohl html elemente als auch react components schreiben können

    {/* //! Das ist ein Html element */}
      <h1>guten morgen</h1>
      {/* //! Das ist ein Compoment */}
    <Nav/>
    <Haupt/>
    </>
  )
}

export default App
