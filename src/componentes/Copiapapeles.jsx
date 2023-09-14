const Copiapapeles = ({textHover1, textHover1css, textHover2, textHover2css, textHover3, textHover3css, textHover4, textHover4css, link1, link1css, ejemploFilter, ejemploMap, ejemploForeach, ejemploFind,ejemplopromesa,ejemploConsumirApi,ejemploConsumirApiPrivada}) => {

    const lista_props = [textHover1, textHover1css, textHover2, textHover2css, textHover3, textHover3css, textHover4, textHover4css, link1 , link1css, ejemploFilter, ejemploMap, ejemploForeach, ejemploFind,ejemplopromesa,ejemploConsumirApi,ejemploConsumirApiPrivada]

    const objetoPasar = lista_props.find(objeto => objeto != undefined)

    const copiarAlPortapapeles = () => {
        navigator.clipboard.writeText(objetoPasar)
            .then(() => {
                console.log('Texto copiado al portapapeles: ' + objetoPasar);
            })
            .catch(error => {
                console.error('Error al copiar al portapapeles:', error);
            });
    };

    return (
        <div>
            <button onClick={copiarAlPortapapeles}>Copy</button>
        </div>
    );
}

export default Copiapapeles