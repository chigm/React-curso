import { EjemploProps1, EjemploProps2, EjemploProps3,EjemploProps4,EjemploProps5 } from "../../components/Props";
const nombre2 = 'Manuel'
const frutas = ['manzana','banana','paltas','sandias']
const verduras =['papa','zanahoras','acelga']

const mostrarValor = valor => {
    console.log(valor)
}

const Ejemplo01 = (props) => {
    return(
        <div>
        <h2>Ejemplos de Props</h2>
        <EjemploProps1 nombre = 'Vir'/>
        <EjemploProps1 nombre= {nombre2} />
        <EjemploProps1 />

        <EjemploProps2 elementos={frutas} />
        <EjemploProps2 elementos={verduras} />

        <EjemploProps3 titulo="Futbol Messi" subtitulo="Messi gano otra copa" cuerpo="nvjdskbv kjabcjkadbcadjkc jcbnjbdjbcad jadcjbjk" />


        <EjemploProps4 cambiarValor ={mostrarValor} />
        <EjemploProps4 />
        <EjemploProps4 cambiarValor ={() => {} } />

        <EjemploProps5/>
        <EjemploProps5 eventoClick={mostrarValor}/>

        </div>
    )
}

export default Ejemplo01;