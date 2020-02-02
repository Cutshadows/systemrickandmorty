# Consumiendo API REACTJS RICK AND MORTY 

![Rick And Morty](https://github.com/Cutshadows/systemrickandmorty/blob/master/src/images/icono-rick.png)


![RickAndMorty](https://github.com/Cutshadows/systemrickandmorty/blob/master/src/images/rick-and-morty.png)


#**API** [APIRICKANDMORTY](https://rickandmortyapi.com/)

JSX es una extensión de JavaScript creada por Facebook para el uso con la biblioteca React. Sirve de preprocesador (como Sass o Stylus a CSS) y transforma el código generado con React a JavaScript.

JSX tiene su alternativa que es React.createElement pero es preferible JSX porque es mucho más legible y expresivo. Ambos tienen el mismo poder y la misma capacidad.

React.createElement recibe 3 argumentos:

El tipo de elemento que estamos creando
sus atributos o props
y el children que es el contenido.
Ejemplo:
React.createElement(‘a’, { href: ‘https://platzi.com’ }, ‘Ir a Platzi’);

En JSX se utilizan las llaves para introducir variables o expresiones de Javascript. Lo que sea que esté adentro se va a evaluar y su resultado se mostrará en pantalla.

Las expresiones pueden ser llamadas a otras funciones, cálculos matemáticos, etc. Si las expresiones son false, 0, null, undefined, entre otros, no se verán.

# react es javascript

> Primer paso del ciclo de vida de un componente **"Montaje"**

> Cuando los compenentes se actualizan se ejecuta el **Render** generando el nuevo **DOM** la cual envia una confirmacion que se llama **componentDidUpdate()** si nos movemos de pagina muchos componentes que se veian van a desaparecer la cual envia una señal que se llama **componentWillUnmount()** eliminando el codigo de **DOM**

> Unidad Basica 

> Se puede imporar css desde un **global, className o instalando Bootstrap** 

# Props
## Props pequeños argumentos a nuestros componentes para poder cambiar estados 


## Paginas siguen siendo componentes Un componente que adentro va a tener mas componentes

## evento que se ejecuta en el tipo de input text con evento onChange pasando parametro el evento
>`handleChange=(e)=>{
console.log({value:e.target.value});
}`



# React Router

># Multi Page Apps
    cada pagina implica una peticion al servidor

># Single Page Apps
    Aplicaciones que cargan una sola pagina de **HTML** y cualquiera actualizacion la hacen re-escribiendo el HTML que ya tenia

># React Router(v4)
    * Nos da las herramientas para poder hacer SPA facilmente
    * Usaremos 4 componentes
        *BrowserRouter
        *Route
        *Switch
        *Link

### react router libreria open source

# \<BrowserRouter></BrowserRouter>
se coloca en lo mas alto del codigo del return y todo lo que esta dentro va a funcionar como single page app si usamos componentes fuera del browserRouter no van a funcionar


#   \<Router />
representa una direccion de internet
Valor PATH="/"
valor Component={Home}}

cuando hay match con el path se hace render del componente
el componente va a recibir tres props:match, history, location


#   \<Switch />
Dentro de Switch solamente van elementos de Route
Switch se asegura que solamente un Route se renderea

# \<Link />

Toma el lugar del elemento  \<a>
Evita que se recargue la pagina completamente
Actualiza la URL

> `npm install react-router-dom --save`

>Cuando no se tiene metodo declarado o cuando no se usa estado se puede crear una funcion

> \<React.Fragment> es una herramienta es imaginario es para evitar div innecesarios

Aquí encuentras el archivo para hacer el reto que propone el profesor al final de la clase

React.Fragment es la herramienta que te ayudará a renderizar varios componentes y/o elementos sin necesidad de colocar un div o cualquier otro elemento de HTML para renderizar sus hijos. Al usar esta característica de React podremos renderizar un código más limpio y legible, ya que ``React.Fragment` no se renderiza en el navegador.

El 404 es la ruta que se renderizará cuando ninguna otra coincida con la dirección ingresada.


>Cuando **React** renderiza los componentes decimos que entran en escena, cuando su estado cambia o recibe unos props diferentes se actualizan y cuando cambiamos de página se dice que se desmontan.

**Montaje**:
Representa el momento donde se inserta el código del componente en el DOM.
Se llaman tres métodos: constructor, render, componentDidMount.


**Actualización**:
Ocurre cuando los props o el estado del componente cambian.
se aplica a todo componente descendiente de nuestro componente

Se llaman dos métodos: render, componentDidUpdate.

>**componentDidUpdate** recibe dos argumentos (props anteriores y el estado anterior) sirve para comparar versiones

**Desmontaje**:
Nos da la oportunidad de hacer limpieza de nuestro componente.
Se llama un método: componentWillUnmount.

componentWillUnmount cuando sales del componente para limpiar memoria timeout o intervalos


cuando en el **componentDidMount** ocurre algo que cambia el state vuelve a llamar al **render** para actualizar la informacion 


## Cuando el componente se actualiza podemos a traves de **componentDidUpdate** ver el cambio y comparar el state y props inicial con el actualizado 

componentDidUpdate(prevProps, prevState){
        console.log('5, componentDidUpdate');
        console.log({
            prevProps:prevProps, prevState:prevState
        })
        console.log({
            props:this.props,
            state:this.state
        })

    }

## Limpieza de recursos para liberar el componente y no siga consumiendo memoria 
componentWillUnmount(){
        //momento preciso cuando se esta saliendo del componente
        console.log('6. componentWillUnmount')
        clearTimeout(this.timeoutId)
    }

# Llamadas a Api
cada llamada a una api consta de 3 estados **Loading** (la peticion se envia), **Error** (respuesta error) y **Datos** (respuesta datos).

**Datos Vacios** mensaje no hay datos
**Con Datos** 

Patron para obtener datos.




