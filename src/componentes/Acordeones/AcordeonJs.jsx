import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import array1 from '../../assets/array1.png'
import array2 from '../../assets/array2.png'
import array3 from '../../assets/array3.png'
import array4 from '../../assets/array4.png'
import array4return from '../../assets/array4return.png'
import arrayforeach from '../../assets/arrayforeach.png'
import arrayfind from '../../assets/arrayfind.png'
import arrayfindconsola from '../../assets/arrayfindconsola.png'
import arrayforeachconsola from '../../assets/arrayforeachconsola.png'
import importhooks from '../../assets/importhooks.png'
import useState1 from '../../assets/useState1.png'
import useState2 from '../../assets/useState2.png'
import useEffect1 from '../../assets/useEffect1.png'
import useEffect2 from '../../assets/useEffect2.png'
import useContext1 from '../../assets/useContext1.png'
import useContext2 from '../../assets/useContext2.png'
import useContext3 from '../../assets/useContext3.png'
import useParams1 from '../../assets/useParams.png'
import useParams2 from '../../assets/useParams2.png'
import useParams3 from '../../assets/useParams3.png'
import promise1 from '../../assets/promise2.png'
import consumirapi1 from '../../assets/consumirapi1.png'
import consumirapi2 from '../../assets/consumirapi2.png'
import consumirapi3 from '../../assets/consumirapi3.png'
import consumirapi4 from '../../assets/consumirapi4.png'
import eventoshtml from '../../assets/htmleventos.png'
import eventosjs from '../../assets/jseventos1.png'
import eventosjs2 from '../../assets/jseventos2.png'
import Copiapapeles from '../Copiapapeles';
import errorConsumirApi from '../../assets/errorconsumirapi2.png'


const ejemploConsumirApiPrivada = `const url = 'https://open-weather13.p.rapidapi.com/city/landon';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bf40c6b449msha4cafd0bce5f2d2p1afec3jsnbcaf9e8fc716',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};
fetch(url,options)
    .then(response => response.json()) //la respuesta la paso a json
    .then(data => console.log(data)) //leo data y lo muestro
    .catch(error => console.log(error)) //si hay error lo capturo con catch`


const ejemploConsumirApi = `let url = "https://jsonplaceholder.typicode.com/albums" //definir url
fetch(url) //solicitud url
    .then(response => response.json()) //la respuesta la paso a json
    .then(data => console.log(data)) //leo data y lo muestro
    .catch(error => console.log(error)) //si hay error lo capturo con catch`



const ejemploFilter = `const arrayObjetos = [
                    { nombre: 'agus', edad: 25, altura: 178 },
                    { nombre: 'maxi', edad: 20, altura: 189 },
                    { nombre: 'franco', edad: 20, altura: 210 },];

                const arrayFiltrado = arrayObjetos.filter((edadIgual) => edadIgual.edad === 20)
                console.log(arrayFiltrado)`

const ejemploMap = `const arrayObjetos = [
            {producto:'producto 1', cantidad: 3, precio: 10},
            {producto:'producto 2', cantidad: 5, precio: 15},
            {producto:'producto 3', cantidad: 2, precio: 20},
        ]
        const arrayObjetosConIva = arrayObjetos.map(function(obj){
            return {
                producto: obj.producto, cantidad: obj.cantidad, precio: obj.precio * 1.21
            }
        })
        console.log(arrayObjetosConIva)`

const ejemploForeach = `const arrayObjetos = [
    {producto:'producto 1', cantidad: 3, precio: 10},
    {producto:'producto 2', cantidad: 5, precio: 15},
    {producto:'producto 3', cantidad: 2, precio: 20},
]
arrayObjetos.forEach(function(obj){
    console.log("cant products post nuevo pedido" ,obj.producto, ", cantidad: " , obj.cantidad +10)
})`

const ejemploFind = `const arrayObjetos = [
    {producto:'producto 1', cantidad: 3, precio: 10},
    {producto:'producto 2', cantidad: 5, precio: 15},
    {producto:'producto 3', cantidad: 2, precio: 20},
]
const objetoCon3 = arrayObjetos.find(function(obj){
    return obj.cantidad === 5
})
console.log(objetoCon3)`

const ejemplopromesa =`const datos = [
    { id: 1, nombre: 'TL-WR845N', precio: 10000, categoria: 'domiciliar' },
    { id: 2, nombre: 'Archer C80', precio: 19000, categoria: 'domiciliar' },
    { id: 3, nombre: 'Archer C86', precio: 25000, categoria: 'domiciliar' },
    ];
const getDatos = () => {
    return new Promise((resolve, reject) => {
    if (datos.length === 0) {
    reject(new Error('No hay datos'));
    }
    setTimeout(() => {
    resolve(datos);
    }, 3000);
});}
async function fetchingData(){
    try{
        const datosFetching = await getDatos();
        console.log(datosFetching)
    }
    catch(err){
        console.log(err.message)
    }
}
fetchingData()`

function AcordeonJs() {
return (
        <div style={{ margin: '30px' }}>
            <Accordion>
                <Accordion.Item eventKey="0" className='estiloAcordeon' >
                    <Accordion.Header >ARRAY - LISTAS</Accordion.Header>
                        <Accordion.Body>
                            <div>
                                <p className='tituloSubAcordeon'>DEFINIR ARRAY</p>
                                <img src={array1} />
                            </div>
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='estiloAcordeon'>
                    <Accordion.Header>METODOS DE ARRAY</Accordion.Header>
                        <Accordion.Body>
                            <div>
                                <ul>
                                    <li>
                                        <p className='listasAcordeon'>push(): Agrega uno o más elementos al final de un array y devuelve la nueva longitud del array. EJ: array.push("nuevoElemento")</p>
                                    </li>
                                    <li>
                                        <p className='listasAcordeon'>pop(): Elimina el último elemento de un array y lo devuelve.</p>
                                    </li>
                                    <li>
                                        <p className='listasAcordeon'>map(): Crea un nuevo array con los resultados de aplicar una función a cada elemento del array.</p>
                                    </li>
                                    <li>
                                        <p className='listasAcordeon'>forEach(): Ejecuta una función en cada elemento del array.</p>
                                    </li>
                                    <li>
                                        <p className='listasAcordeon'>filter(): Crea un nuevo array con todos los elementos que pasan una prueba.</p>
                                    </li>
                                    <li>
                                        <p className='listasAcordeon'>find(): Devuelve el primer elemento que cumple con una condición específica.</p>
                                    </li>
                                    <li>
                                        <p className='listasAcordeon'>reduce(): Aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un solo valor.</p>
                                    </li>
                                    <li>
                                        <p className='listasAcordeon'>indexOf(): Devuelve el primer índice en el que se encuentra un elemento específico, o -1 si no se encuentra.</p>
                                    </li>
                                    <li>
                                        <p className='listasAcordeon'>slice(): Devuelve una copia superficial de una porción de un array en un nuevo array.</p>
                                    </li>
                                    <li>
                                        <p className='listasAcordeon'>splice(): Cambia el contenido de un array eliminando, reemplazando o agregando elementos.</p>
                                    </li>
                                    <li>
                                        <p className='listasAcordeon'>shift(): Elimina el primer elemento de un array y lo devuelve.</p>
                                    </li>
                                    <li>
                                        <p className='listasAcordeon'>unshift(): Agrega uno o más elementos al principio de un array y devuelve la nueva longitud del array.</p>
                                    </li>
                                    <li>
                                        <p className='listasAcordeon'>concat(): Combina dos o más arrays y devuelve un nuevo array resultante.</p>
                                    </li>
                                    <li>
                                        <p className='listasAcordeon'>join(): Une todos los elementos de un array en una cadena, utilizando un separador especificado.</p>
                                    </li>
                                    <li>
                                        <p className='listasAcordeon'>reduceRight(): Similar a reduce(), pero comienza desde el último elemento hacia el primero.</p>
                                    </li>
                                    <li>
                                        <p className='listasAcordeon'>findIndex(): Devuelve el índice del primer elemento que cumple con una condición específica.</p>
                                    </li>
                                    <li>
                                        <p className='listasAcordeon'>some(): Verifica si al menos un elemento cumple con una condición específica.</p>
                                    </li>
                                    <li>
                                        <p className='listasAcordeon'>every(): Verifica si todos los elementos cumplen con una condición específica.</p>
                                    </li>
                                    <li>
                                    <p className='listasAcordeon'>  lastIndexOf(): Devuelve el último índice en el que se encuentra un elemento específico, o -1 si no se encuentra.</p>
                                    </li>
                                    <li>
                                        <p className='listasAcordeon'>includes(): Verifica si un array contiene un elemento específico.</p>
                                    </li>
                                    <li>
                                        <p className='listasAcordeon'>sort(): Ordena los elementos de un array y lo modifica.</p>
                                    </li>
                                    <li>
                                        <p className='listasAcordeon'>reverse(): Invierte el orden de los elementos en un array y lo modifica.</p>
                                    </li>
                                    <li>
                                        <p className='listasAcordeon'>toString(): Convierte un array en una cadena de caracteres.</p>
                                    </li>
                                    <li>
                                        <p className='listasAcordeon'>toLocaleString(): Convierte un array en una cadena de caracteres basada en la configuración regional del usuario.</p>
                                    </li>
                                    <li>
                                        <p className='listasAcordeon'>isArray(): Verifica si un objeto es un array.</p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className='tituloSubAcordeon'>FILTER</p>
                                <p>crea nuevo array a partir del utilizado con los elementos que cumplan las condiciones establecidas. (no modifica el original)</p>
                                <div style={{display:'flex', gap:'20px'}}>
                                    <img src={array2} />
                                    <div style={{display:'flex', flexDirection:'column'}}>
                                        <div style={{display:'flex', flexDirection:'row', gap: '10px'}}>
                                            <p className='tituloIntAcordeon'>CODIGO</p>
                                            <Copiapapeles ejemploFilter = {ejemploFilter} />
                                        </div>
                                        <p className='tituloIntAcordeon'>ARRAY FILTRADO RETORNA</p>
                                        <img src={array3} />
                                    </div>
                                </div>
                            </div>
                            <div style={{marginTop:'30px'}}>
                                <p className='tituloSubAcordeon'>MAP</p>
                                <p>crea nuevo array a partir del utilizado aplicando ciertos cambios definidos en sus elementos (no modifica el original)</p>
                                <div style={{display:'flex', gap:'20px'}}>
                                    <img src={array4} />
                                    <div style={{display:'flex', flexDirection:'column'}}>
                                        <div style={{display:'flex', flexDirection:'row', gap: '10px'}}>
                                            <p className='tituloIntAcordeon'>CODIGO</p>
                                            <Copiapapeles ejemploMap = {ejemploMap} />
                                        </div>
                                        <p className='tituloIntAcordeon'>ARRAY MAPEADO RETORNA</p>
                                        <img src={array4return} />
                                    </div>
                                </div>
                            </div>
                            <div style={{marginTop:'30px'}}>
                                <p className='tituloSubAcordeon'>FOR EACH</p>
                                <p>Itera sobre cada elemento del array para realizar una accion para visualizacion por consola x ej (no modifica array original ni crea nuevo)</p>
                                <div style={{display:'flex', gap:'20px'}}>
                                    <img src={arrayforeach} />
                                    <div style={{display:'flex', flexDirection:'column'}}>
                                        <div style={{display:'flex', flexDirection:'row', gap: '10px'}}>
                                            <p className='tituloIntAcordeon'>CODIGO</p>
                                            <Copiapapeles ejemploForeach = {ejemploForeach} />
                                        </div>
                                        <p className='tituloIntAcordeon'>CONSOLA RETORNA</p>
                                        <img src={arrayforeachconsola} />
                                    </div>
                                </div>
                            </div>
                            <div style={{marginTop:'30px'}}>
                                <p className='tituloSubAcordeon'>FIND</p>
                                <p>Itera sobre el array buscando coincidencia con la condicion establecida, apenas escuentra la primera, se detiene y devuelve ese valor. En caso no haber coincidencias , retorna UNDEFINED (no modifica array org ni crea otro)</p>
                                <div style={{display:'flex', gap:'20px'}}>
                                    <img src={arrayfind} />
                                    <div style={{display:'flex', flexDirection:'column'}}>
                                        <div style={{display:'flex', flexDirection:'row', gap: '10px'}}>
                                            <p className='tituloIntAcordeon'>CODIGO</p>
                                            <Copiapapeles ejemploFind = {ejemploFind} />
                                        </div>
                                        <p className='tituloIntAcordeon'>CONSOLA RETORNA</p>
                                        <img src={arrayfindconsola} />
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='estiloAcordeon'>
                    <Accordion.Header>HOOKS</Accordion.Header>
                        <Accordion.Body>
                            <div>
                                <p className='tituloSubAcordeon'>IMPORTANTE</p>
                                <p>Previo a usar los hooks, hay que importarlos. Ej si quisieramos usar useState y useEffect:</p>
                                <img src={importhooks} style={{marginBottom:'10px'}} />
                                <ul>
                                    <li>
                                        <p className='listasAcordeon'>useState(): Permite a los componentes funcionales gestionar el estado interno. Devuelve un par de valores: el estado actual y una función para actualizarlo.</p>
                                    </li>
                                    <li>
                                        <p className='listasAcordeon'>useEffect(): Permite realizar efectos secundarios en componentes funcionales. Puede ser utilizado para suscribirse a datos, cambiar el título de la página, limpiar efectos secundarios, entre otras cosas.</p>
                                    </li>
                                    <li>
                                        <p className='listasAcordeon'>useContext(): Permite a los componentes funcionales acceder al contexto de un componente superior y obtener datos y funciones proporcionados por ese contexto.</p>
                                    </li>
                                    <li>
                                        <p className='listasAcordeon'>useRef(): Crea una referencia mutable que puede utilizarse para acceder al DOM o mantener una referencia persistente a un valor mutable en el ciclo de vida del componente.</p>
                                    </li>
                                    <li>
                                        <p className='listasAcordeon'>useReducer(): Proporciona una alternativa a useState() para gestionar estados más complejos utilizando una función reductora similar a cómo se manejan los estados en Redux.</p>
                                    </li>
                                    <li>
                                        <p className='listasAcordeon'>useCallback(): Devuelve una versión memoizada (memorizada) de una función que se mantiene igual entre renderizaciones, lo que puede ayudar a mejorar el rendimiento de componentes que dependen de funciones.</p>
                                    </li>
                                </ul>
                                <div>
                                    <p className='tituloSubAcordeon'>useState</p>
                                    <p>
                                        ejemplo del funcionamiento. observamos en este ejemplo basico de un contador como se define una variable y una funcion modificadora. en este caso la variable "count" y la funcion modificadora "setCount". El valor inicial, esta definido dentro de useState(0). quiere decir que empieza en 0. Este puede ser null, undefined, un string o un booleano. Es el hook mas utilizado ya que define estados para practicamente todo tipo de accion.
                                    </p>
                                    <img style={{marginRight:'20px'}} src={useState1}/>
                                    <img src={useState2}/>
                                </div>
                                <div>
                                    <p className='tituloSubAcordeon'>useEffect</p>
                                    <p>
                                        ejemplo de funcionamiento. Aqui, teniendo de base el contador, se muestra como useEffect responde a un cambio de estado. se puede ver que es una funciona flecha que contiene un array de dependencias. en este caso el array tiene la variable "count" y cada vez que esta se modifique su valor, se ejecutara el efecto del console.log. En caso de que el array de dependencias este vacio "[]" el efecto se ejecutaria solo al iniciarse la pantalla.<br /> Se utiliza mucho para consumir apis y realizar timeout. Se explica mas a fondo en la pestaña de CONSUMIR API
                                    </p>
                                    <img style={{marginRight:'50px'}} src={useEffect1} />
                                    <img src={useEffect2} />
                                </div>
                                <div>
                                    <p className='tituloSubAcordeon'>useContext</p>
                                    <p>
                                        Se utiliza para compartir proops entre componentes de manera mas sencilla y saltandose niveles jerarquicos.<br/>
                                        Una vez creado tu componente con las variables y hooks que se quieren pasar como contexto, se sacan por proops de la funcion y se recibe importando el hook en cada componente receptor.<br />
                                        Observamos en la imagen que se importa "createContext" y luego se exporta la const ContextCart (Esta es la que luego vamos a llamar en cada componente receptor)<br />
                                        Luego se gestionan los valores iniciales de cada elemento a pasar y se retornan pasados dentro de un "provider" como valor.<br />
                                        Este "provider" contiene a "children" que quiere decir que todos los componentes receptores de este contexto podran adoptar las propiedades pasadas como valor e influiran en ellas.
                                    </p>
                                    <p className='tituloIntAcordeon'>CREACION DE CONTEXTO</p>
                                    <img style={{marginBottom:'20px'}} src={useContext1} />
                                    <p className='tituloIntAcordeon'>ADOPCION DE CONTEXTO</p>
                                    <p>Aqui envolvemos nuestra APP con el contexto posterior a importarlo, ya que necesitamos que todos esos componentes esten dentro del mismo contexto en este caso.</p>
                                    <img style={{marginBottom:'20px'}} src={useContext2} />
                                    <p className='tituloIntAcordeon'>RECEPCION Y USO EN COMPONENTE</p>
                                    <p>
                                        Aqui observamos como se importa el contexto en el componente donde debe ser usado y se definen las mismas variables del contexto pero con la diferencia de la especifcacion =useContext(ContextCart) lo que le da la validez de que proviene desde otro componente raiz.<br />
                                        Luego se utiliza de manera normal como cualquier variable/hook alterando de manera directa al elemento principal.
                                    </p>
                                    <img style={{marginBottom:'20px'}} src={useContext3} />
                                    <p>Ignorar las importaciones no mencionadas ya que esto es extraido de un proyecto en funcionamiento para asegurar que el uso sea el indicado.</p>
                                </div>
                                <div>
                                    <p className='tituloSubAcordeon'>useParams</p>
                                    <p>
                                        Es un hook de la libreria 'react-router-dom'  se utiliza para acceder a los parámetros de una URL en una aplicación web de React.<br />
                                        El primer paso es importarlo, Luego se define una constante bajo el valor de useParams() y este recibiria el valor pasado por la url cuando se ingrese a la ruta donde fue definido.<br />
                                        Una vez verificado que se obtuvo el valor esperado, se puede pasar como proops para por ejemplo mapear un producto determinado con "x" id.
                                    </p>
                                    <img style={{marginBottom:'20px'}} src={useParams1} />
                                    <p>Aqui esta aplicado siendo pasado como proop para otro componente</p>
                                    <img style={{marginBottom:'20px'}} src={useParams2} />
                                    <p>Por ultimo es recibido por el componente a utilizar y cumple alguna funcion especifica.</p>
                                    <img style={{marginBottom:'20px'}} src={useParams3} />
                                </div>
                            </div>
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className='estiloAcordeon'>
                    <Accordion.Header>PROMESAS</Accordion.Header>
                        <Accordion.Body>
                            <div>
                                <p className='tituloSubAcordeon'>GESTION PARA SIMULAR UNA OPERACION ASINCRONICA</p>
                                <p>
                                    Aqui se simula como se crearia una promesa para gestionar una operacion asincronica de carga de datos.<br />
                                    Estando de manera local no hay retardo pero teniendo en cuenta que estamos consumiento recursos externos, se necesitan de unos milisegundos para que los datos puedan ser consumidos correctamente. <br />
                                </p>
                                <div>
                                    <ul>
                                        <li>
                                            datos: array que contiene los datos.
                                        </li>
                                        <li>
                                            getDatos: promesa que espera ser resuelta.
                                        </li>
                                        <li>
                                            resolve: valor que tomar la promesa si tiene exito.
                                        </li>
                                        <li>
                                            reject: valor que toma la promesa si falla la condicion.
                                        </li>
                                        <li>
                                            setTimeout: Funcion que simula tiempo de espera por 3 segundos para asegurar obtencion de datos.
                                        </li>
                                        <li>
                                            async: palabra reservada para definir que una funcion es asincronica
                                        </li>
                                        <li>
                                            await: Aguarda setTimeout de la funcion getDatos para obtener resultados.
                                        </li>
                                        <li>
                                            try y catch: manejo de situaciones, try para una resolucion efectiva y catch para devolver error.
                                        </li>
                                        <li>
                                            al ejecutar fetchingData() le damos el ok a las funciones para que comiencen a operar.
                                        </li>
                                    </ul>
                                </div>
                                <img src={promise1} />
                                <p className='tituloIntAcordeon'>CODIGO</p>
                                <Copiapapeles ejemplopromesa = {ejemplopromesa} />
                            </div>
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className='estiloAcordeon'>
                    <Accordion.Header>CONSUMIR APIS</Accordion.Header>
                        <Accordion.Body>
                            <div>
                                <p className='tituloIntAcordeon'>Estructura basica para consumir API publica que no tenga restricciones</p>
                                <Copiapapeles ejemploConsumirApi = {ejemploConsumirApi} />
                                <img style={{marginRight:'20px', marginTop:'20px'}} src={consumirapi1} />
                                <img style={{marginTop:'20px'}}src={consumirapi2} />
                            </div>
                            <div style={{marginTop:'30px', marginBottom:'30px'}}>
                                <p className='tituloIntAcordeon'>Estructura para consumir una API que no es publica y necesita API-KEY o HEADERS</p>
                                <p>previo a la habilitacion por medio de headers veriamos este msj de error</p>
                                <img style={{marginBottom:'20px'}} src={errorConsumirApi} />
                                <p>Aqui lo que hicimos fue tomar parametros (que se consiguen dentro del proveedor de la api, a veces hay que subscribirse) para que nos permita el acceso a consumirla </p>
                                <Copiapapeles ejemploConsumirApiPrivada = {ejemploConsumirApiPrivada} />
                                <img style={{marginRight:'20px', marginTop:'20px'}} src={consumirapi3} />
                                <img src={consumirapi4} />
                            </div>
                            <div>
                                <p className='tituloIntAcordeon'>RECURSOS API</p>
                                <ul>
                                    <li>
                                        <a href='https://jsonplaceholder.typicode.com/' className='linkrgba' target="_blank">API GENERAL (FACIL DE USAR)</a>
                                    </li>
                                    <li>
                                        <a href='https://pokeapi.co/api/v2/' className='linkrgba' target="_blank">API POKEMON (FACIL, ABIERTA)</a>
                                    </li>
                                    <li>
                                        <a href='https://rapidapi.com/natkapral/api/currency-converter5/' className='linkrgba' target="_blank">API RAPIDAPI (SUELEN SER PRIVADAS)</a>
                                    </li>
                                    <li>
                                        <a href='https://fakestoreapi.com/docs' className='linkrgba' target="_blank">API FAKESTORE (FACIL, ABIERTA)</a>
                                    </li>
                                </ul>
                            </div>
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" className='estiloAcordeon'>
                    <Accordion.Header>EVENTOS</Accordion.Header>
                        <Accordion.Body>
                            <div>
                                <p className='tituloSubAcordeon'>EVENTOS MAS COMUNES Y BREVE DESCRIPCION</p>
                                <p>En esta seccion mediante un repositorio de github mostraremos un proyecto simple en el cual se utilizan los eventos basicos mas comunes para insertarse al entendimiento.</p>
                            </div>
                            <div>
                                <p className='tituloIntAcordeon'>EVENTOS DE MOUSE</p>
                                <ul>
                                    <li>
                                        click: Se dispara cuando el usuario hace clic en un elemento.
                                    </li>
                                    <li>
                                        mousedown: Ocurre cuando se presiona el botón del ratón.
                                    </li>
                                    <li>
                                        mouseup: Ocurre cuando se libera el botón del ratón.
                                    </li>
                                    <li>
                                        mousemove: Se dispara cuando el ratón se mueve sobre un elemento.
                                    </li>
                                    <li>
                                        mouseover y mouseout: Ocurren cuando el ratón entra y sale de un elemento.
                                    </li>
                                    <li>
                                        dblclick: Se dispara cuando se hace doble clic en un elemento.
                                    </li>
                                </ul>
                                <p className='tituloIntAcordeon'>EVENTOS DE TECLADO</p>
                                <ul>
                                    <li>
                                        keydown: Ocurre cuando una tecla del teclado se mantiene presionada.
                                    </li>
                                    <li>
                                        keyup: Ocurre cuando se libera una tecla del teclado.
                                    </li>
                                    <li>
                                        keypress: Se dispara cuando una tecla se presiona y se libera (no se usa comúnmente).
                                    </li>
                                </ul>
                                <p className='tituloIntAcordeon'>EVENTOS DE FORMULARIO</p>
                                <ul>
                                    <li>
                                        submit: Se dispara cuando se envía un formulario.
                                    </li>
                                    <li>
                                        change: Ocurre cuando el valor de un elemento de formulario (input, select, etc.) cambia.
                                    </li>
                                    <li>
                                        input: Se dispara cuando se ingresa texto en un campo de entrada (input) o se cambia su valor.
                                    </li>
                                    <li>
                                        focus y blur: Ocurren cuando un elemento obtiene o pierde el foco.
                                    </li>
                                </ul>
                                <p className='tituloIntAcordeon'>EVENTOS DE VENTANA</p>
                                <ul>
                                    <li>
                                        load: Ocurre cuando la página o un recurso se ha cargado completamente.
                                    </li>
                                    <li>
                                        unload: Se dispara cuando se sale de la página.
                                    </li>
                                    <li>
                                        resize: Ocurre cuando cambia el tamaño de la ventana del navegador.
                                    </li>
                                    <li>
                                        scroll: Se dispara cuando el usuario se desplaza por la página.
                                    </li>
                                </ul>
                                <p className='tituloSubAcordeon'>EJEMPLO CON PROGRAMA SIMPLE DE PRESTAMOS</p>
                                <p className='tituloIntAcordeon'>HTML</p>
                                <img src={eventoshtml} alt="" style={{marginBottom:'20px'}} />
                                <p className='tituloIntAcordeon'>Javascript</p>
                                <img src={eventosjs} style={{marginBottom:'20px', width:'95%'}} />
                                <img src={eventosjs2} style={{marginBottom:'20px', width:'95%'}} />
                                <p className='tituloIntAcordeon'>ENLACES DE GITHUB</p>
                                <a href='https://github.com/agustinhahn/PrestamosSimple' className='linkrgba' target="_blank">CODIGO</a><br />
                                <a href='https://agustinhahn.github.io/PrestamosSimple/' className='linkrgba' target="_blank">PAGINA PARA PROBARLO</a>
                            </div>
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

export default AcordeonJs;