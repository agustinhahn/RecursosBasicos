import Accordion from 'react-bootstrap/Accordion';
import Copiapapeles from '../Copiapapeles';


const AcordeonReact = () => {
    return (
        <div style={{ margin: '30px' }}>
            <Accordion>
                <Accordion.Item eventKey="0" className='estiloAcordeon'>
                    <Accordion.Header className='tituloAcordeon'>NAVBAR BASICA</Accordion.Header>
                    <Accordion.Body>
                        <div></div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='estiloAcordeon'>
                    <Accordion.Header className='tituloAcordeon'>FOOTER BASICO</Accordion.Header>
                    <Accordion.Body>
                        <div></div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default AcordeonReact