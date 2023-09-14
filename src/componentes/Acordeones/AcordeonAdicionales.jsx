import Accordion from 'react-bootstrap/Accordion';

function AcordeonAdicionales() {
    return (
        <div style={{ margin: '30px' }}>
            <Accordion>
                <Accordion.Item eventKey="0" className='estiloAcordeon'>
                    <Accordion.Header >GITHUB</Accordion.Header>
                        <Accordion.Body>
                            <div>
                                <p className='tituloSubAcordeon'>PASO A PASO PARA UTILIZAR GITHUB (ya teniendo cuenta creada)</p>
                                <ol>
                                    <li>
                                        Create new repository
                                    </li>
                                    <li>
                                        Elegir nombre y descripcion (en publico)
                                    </li>
                                    <li>
                                        Crear repositorio
                                    </li>
                                    <li>
                                        teclear en linea de comando del proyecto: $git init //esto es para inicializar repositorio de git local
                                    </li>
                                    <li>
                                        Copiar 6ta linea de codigo ofrecida por github, ejemplo: ("git remote add origin ....") y pegarla en la consola.
                                    </li>
                                    <li>
                                        Hacer un $git status para ver que todo este trackeado
                                    </li>
                                    <li>
                                        Hacer un $git add . //esto se hace para agregar todo
                                    </li>
                                    <li>
                                        Hacer un $git commit -m "cambio1" //cuando realizas un cambio en este caso inicial, que hiciste un add sobre los elementos.
                                    </li>
                                    <li>
                                        Hacer un $git branch -M main //para hacer un cambio de la rama por defecto
                                    </li>
                                    <li>
                                        Por ultimo realizar un $git push -u origin main
                                    </li>
                                </ol>
                                <p className='tituloSubAcordeon'>HACER DEPLOYED DEL PROYECTO</p>
                                <ol>
                                    <li>
                                        Ir a settings.
                                    </li>
                                    <li>
                                        Ubicar dentro, a PAGES.
                                    </li>
                                    <li>
                                        En pages, seleccionar la branch "main" y guardar.
                                    </li>
                                    <li>
                                        Luego en actions esperas que se deploye e ingresas al link.
                                    </li>
                                </ol>
                                <p className='tituloSubAcordeon'>AGREGAR UN CAMBIO</p>
                                <ol>
                                    <li>
                                        Luego de realizar el cambio, realizar un $git status.
                                    </li>
                                    <li>
                                        $git add . //para agregarlo
                                    </li>
                                    <li>
                                        $git commit -m 'mensaje'  //para comentar los cambios realizados
                                    </li>
                                    <li>
                                        $ git push -u origin main//para subirlos al repositorio remoto
                                    </li>
                                </ol>
                            </div>
                        </Accordion.Body>
                </Accordion.Item >
                <Accordion.Item eventKey="1" className='estiloAcordeon'>
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            info elemento
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='estiloAcordeon'>
                    <Accordion.Header>Accordion Item #3</Accordion.Header>
                        <Accordion.Body>
                            info elemento
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className='estiloAcordeon'>
                    <Accordion.Header>Accordion Item #4</Accordion.Header>
                        <Accordion.Body>
                            info elemento
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className='estiloAcordeon'>
                    <Accordion.Header>Accordion Item #5</Accordion.Header>
                        <Accordion.Body>
                            info elemento
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" className='estiloAcordeon'>
                    <Accordion.Header>Accordion Item #6</Accordion.Header>
                        <Accordion.Body>
                            info elemento
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6" className='estiloAcordeon'>
                    <Accordion.Header>Accordion Item #7</Accordion.Header>
                        <Accordion.Body>
                            info elemento
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default AcordeonAdicionales;