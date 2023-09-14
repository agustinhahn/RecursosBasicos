import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ComponentIndex from "./componentes/ComponentIndex"
import ComponentCss from "./componentes/ComponentCss"
import ComponentJs from "./componentes/ComponentJs"
import ComponentAdicionales from "./componentes/ComponentAdicionales"
import ComponentDependencias from "./componentes/ComponentDependencias"
import Pruebas from './componentes/Pruebas'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<ComponentIndex />}/>
          <Route exact path='/Recursos-css' element={<ComponentCss />}/>
          <Route exact path='/Recursos-js' element={<ComponentJs />}/>
          <Route exact path='/Recursos-adicionales' element={<ComponentAdicionales />}/>
          <Route exact path='/Recursos-dependencias' element={<ComponentDependencias />}/>
          <Route exact path='/pruebas' element={<Pruebas />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
