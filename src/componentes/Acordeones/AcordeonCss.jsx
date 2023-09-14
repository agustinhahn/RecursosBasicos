import Accordion from 'react-bootstrap/Accordion';
import Copiapapeles from '../Copiapapeles';

function AcordeonCss() {

    // hover's
    // opcion1
    const textHover1 = `<p class='pPruebas1'>HOVER CON LINEAR</p>`
    const textHover1css = `.pPruebas1{
        color: black;
        margin-bottom: 20px;
        transition: all 0.9s linear; /*velocidad constante*/
        display: inline; /*para que el hover solo capte las letras*/
    }
    
    .pPruebas1:hover{
        background-color: red; /*para definir color de fondo*/
    }`
    // opcion2
    const textHover2 = `<p class='pPruebas2'>HOVER CON ease-in-out</p>`
    const textHover2css = `.pPruebas2{
        color: black;
        margin-bottom: 5px; /*margen de abajo*/
        transition: all 0.9s ease-in-out; /*velocidad en montaña rusa*/
        display: inline; /*para que el hover solo capte las letras*/
    }
    
    .pPruebas2:hover{
        background-color: orange; /*para definir color de fondo*/
    }`
    //opcion 3
    const textHover3 = `<p class='pPruebas3'>HOVER CAMBIO TAMAÑO</p>`
    const textHover3css = `.pPruebas3 {
        color: black;
        margin-bottom: 20px;
        transition: transform 0.5s;
    }
    
    .pPruebas3:hover {
        transform: scale(1.2); /*para definir tamaño*/
    }`
    //opcion 4
    const textHover4 = `<p class='pPruebas3'>HOVER ESPACIO ENTRE LETRAS</p>`
    const textHover4css = `.pPruebas4 {
        color: black;
        margin-bottom: 20px; /*margen de abajo*/
        transition: all 0.5s; /*tiempo que tarda cambio*/
    }
    
    .pPruebas4:hover {
        letter-spacing: 10px; /*para definir espacio*/
    }`

    //LINK
    const link1= `<a href='#' class='link1' target="_blank">link hacia sitio</a>`
    const link1css = `.link1{
        text-decoration: none;
        color: black;
    }`
    return (
        <div style={{ margin: '30px' }}>
            <Accordion>
                <Accordion.Item eventKey="0" className='estiloAcordeon'>
                    <Accordion.Header className='tituloAcordeon'>HOVER</Accordion.Header>
                    <Accordion.Body>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center' }}>
                            <div style={{display:'flex'}}>
                                <div style={{minWidth:'400px'}}>
                                    <p className='tituloSubAcordeon'>OPCION 1 </p>
                                    <p className='pPruebas1'>HOVER CON LINEAR</p>
                                </div>
                                <div style={{display:'flex', gap:'10px'}}>
                                    <p className='tituloSubAcordeon'>HTML</p>
                                    <Copiapapeles textHover1 = {textHover1} />
                                    <p className='tituloSubAcordeon'>CSS</p>
                                    <Copiapapeles textHover1css = {textHover1css} />
                                </div>
                            </div>
                            <div style={{display:'flex'}}>
                                <div style={{minWidth:'400px'}}>
                                    <p className='tituloSubAcordeon'>OPCION 2 </p>
                                    <p className='pPruebas2'>HOVER CON ease-in-out</p>
                                </div>
                                <div style={{display:'flex', gap:'10px'}}>
                                    <p className='tituloSubAcordeon'>HTML</p>
                                    <Copiapapeles textHover2 = {textHover2} />
                                    <p className='tituloSubAcordeon'>CSS</p>
                                    <Copiapapeles textHover2css = {textHover2css} />
                                </div>
                            </div>
                            <div style={{display:'flex'}}>
                                <div style={{minWidth:'400px'}}>
                                    <p className='tituloSubAcordeon'>OPCION 3 </p>
                                    <p className='pPruebas3'>HOVER CAMBIO TAMAÑO</p>
                                </div>
                                <div style={{display:'flex', gap:'10px'}}>
                                    <p className='tituloSubAcordeon'>HTML</p>
                                    <Copiapapeles textHover3 = {textHover3} />
                                    <p className='tituloSubAcordeon'>CSS</p>
                                    <Copiapapeles textHover3css = {textHover3css} />
                                </div>
                            </div>
                            <div style={{display:'flex'}}>
                                <div style={{minWidth:'400px'}}>
                                    <p className='tituloSubAcordeon'>OPCION 3 </p>
                                    <p className='pPruebas4'>HOVER ESPACIO EN MEDIO</p>
                                </div>
                                <div style={{display:'flex', gap:'10px'}}>
                                    <p className='tituloSubAcordeon'>HTML</p>
                                    <Copiapapeles textHover4 = {textHover4} />
                                    <p className='tituloSubAcordeon'>CSS</p>
                                    <Copiapapeles textHover4css = {textHover4css} />
                                </div>
                            </div>
                            <p className='tituloSubAcordeon'>SITIOS PARA TRANSICIONES</p>
                            <a href='https://sarthology.github.io/Animatopy/' className='linkrgba' target="_blank">OPCION 1</a>
                            <a href='https://animate.style/' className='linkrgba' target="_blank">OPCION 2</a>
                            <a href='https://michalsnik.github.io/aos/' className='linkrgba' target="_blank">OPCION 3</a>
                            <a href='https://cssgenerator.org/' className='linkrgba' target="_blank">OPCION 4 - PARA ESTILOS EN GRAL</a>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='estiloAcordeon'>
                    <Accordion.Header>LINKS</Accordion.Header>
                    <Accordion.Body>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center' }}>
                            <div style={{display:'flex'}}>
                                <div style={{minWidth:'400px'}}>
                                    <p className='tituloSubAcordeon'>LINK SIN EDITAR </p>
                                    <a href='#'>link hacia sitio</a>
                                </div>
                                <div style={{display:'flex', gap:'10px'}}>
                                    <p className='tituloSubAcordeon'>HTML</p>
                                    <Copiapapeles link1 = {link1} />
                                    <p className='tituloSubAcordeon'>CSS</p>
                                    <Copiapapeles/>
                                </div>
                            </div>
                            <div style={{display:'flex'}}>
                                <div style={{minWidth:'400px'}}>
                                    <p className='tituloSubAcordeon'>LINK EDITADO </p>
                                    <a href='#' className='link1'>link hacia sitio</a>
                                </div>
                                <div style={{display:'flex', gap:'10px'}}>
                                    <p className='tituloSubAcordeon'>HTML</p>
                                    <Copiapapeles link1 = {link1} />
                                    <p className='tituloSubAcordeon'>CSS</p>
                                    <Copiapapeles link1css = {link1css} />
                                </div>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className='estiloAcordeon'>
                    <Accordion.Header>COLOR RGBA</Accordion.Header>
                    <Accordion.Body>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <p className='tituloSubAcordeon'>DEFINIR COLOR RGBA DE ALGO</p>
                            <div className='contenedorRGBA'>
                                color: background: rgb(2,0,36)<br />
                                el gradiente fue creado con el ultimo enlace
                            </div>
                            <a href='https://htmlcolorcodes.com/es/' className='linkrgba' target="_blank">SITIO PRACTICO PARA ELEGIR COLORES</a>
                            <a href='https://coolors.co/' className='linkrgba' target="_blank">SITIO PARA DEFINIR PALETA DE COLORES</a>
                            <a href='https://pinetools.com/es/obtener-colores-imagen' className='linkrgba' target="_blank">SITIO PARA EXTRAER COLOR DE BG</a>
                            <a href='https://cssgradient.io/' className='linkrgba' target="_blank">SITIO PARA DEFINIR GRADIENTES DE COLORES</a>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className='estiloAcordeon'>
                    <Accordion.Header>MARCOS</Accordion.Header>
                    <Accordion.Body>
                        <div style={{display:'flex', justifyContent:'center', gap:'30px', flexWrap:'wrap'}}>
                            <div className='marco1'>    
                                border: 2px solid black;
                            </div>
                            <div className='marco2'>
                                border: 1px dashed black;
                            </div>
                            <div className='marco3'>
                                border: 4px double black;
                            </div>
                            <div className='marco4'>
                                border: 5px groove black;
                            </div>
                            <div className='marco5'>
                                border: 2px solid black; <br />
                                border-radius: 10px;
                            </div>
                            <div className='marco6'>
                                border: 2px solid black; <br />
                                box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.7);
                            </div>
                            <div className='marco7'>
                            border: 2px solid black; <br />
                            background-clip: padding-box; <br />
                            background-image: url('url-img');  <br />
                            </div>
                            <div className='marco8'>
                            border: 2px solid #333; <br />
                            box-shadow: 0px 0px 10px 2px rgb(206, 15, 120);
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" className='estiloAcordeon'>
                    <Accordion.Header>ESTILOS BASICOS</Accordion.Header>
                    <Accordion.Body>
                        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                            <p className='tituloSubAcordeon'>ESTILOS</p>
                            <div>
                                dentro del body:<br />
                                background-color: #061826; /* a eleccion*/<br />
                                font-family: 'Roboto', sans-serif; /* a eleccion*/<br />
                                margin: 0px auto; /*eliminar bordes y margenes*/<br />
                                padding: 0px auto;<br />
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6" className='estiloAcordeon'>
                    <Accordion.Header>GRID</Accordion.Header>
                    <Accordion.Body>
                        info elemento
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7" className='estiloAcordeon'>
                    <Accordion.Header>FLEXBOX</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <p className='tituloSubAcordeon'>COMO SE USA</p>
                            <p>En un DIV se define la siguiente estructura. TENER EN CUENTA, todas las propiedades se aplican a los HIJOS directo del div</p><br/>
                            <p>display: flex /*define su uso*/<br/>
                            flex-direction: row | column | wrap (por defecto) /*row para elementos hijos en filas, column para que esten horizontalmente*/<br/>
                            flex-wrap: nowrap | wrap | wrap-reverse /*define como se comportan, ejem nowrap se ajustan a linea inicial. wrap: si no tiene espacio salta siguiente fila.*/<br/>
                            justifyContent: flex-start | center | flex-end | space-between | space-around | space-evenly /*define como se distribuyen a lo largo del contenedor los elementos*/ <br/>
                            alignItems: stretch | flex-start | flex-end | center | baseline /*igual que justify pero eje transversal. stretch se ajusta al tamaño total*/<br/>
                            gap: 20px /*espacio entre elementos*/
                            </p>
                            <div style={{border:'2px solid black', width:'300px', height:'300px'}}>
                                <p>hola, tengo contenido y no uso flexbox</p>
                                <div style={{border:'2px solid black', width:'100px', height:'50px', background:'red'}}>caja1</div>
                                <div style={{border:'2px solid black', width:'100px', height:'50px', background:'blue'}}>caja2</div>
                                <div style={{border:'2px solid black', width:'100px', height:'50px', background:'yellow'}}>caja3</div>
                                <div style={{border:'2px solid black', width:'100px', height:'50px', background:'green'}}>caja4</div>
                            </div>
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', border:'2px solid black', width:'300px', height:'300px', marginTop:'20px'}}>
                                <p style={{textAlign:'center'}}>hola, tengo contenido y no uso flexbox</p>
                                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', flexWrap:'wrap', gap:'20px'}}>
                                    <div style={{border:'2px solid black', width:'100px', height:'50px', background:'red'}}>caja1</div>
                                    <div style={{border:'2px solid black', width:'100px', height:'50px', background:'blue'}}>caja2</div>
                                    <div style={{border:'2px solid black', width:'100px', height:'50px', background:'yellow'}}>caja3</div>
                                    <div style={{border:'2px solid black', width:'100px', height:'50px', background:'green'}}>caja4</div>
                                </div>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8" className='estiloAcordeon'>
                    <Accordion.Header>RESPONSIVE</Accordion.Header>
                    <Accordion.Body>
                        info elemento
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>

    );
}

export default AcordeonCss;