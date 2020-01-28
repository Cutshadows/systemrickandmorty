This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



# Clonar el código de GitHub

 En esta clase vamos a comenzar clonando el código del proyecto del repositorio en GitHub.

Es importante que tú y yo tengamos un punto de partida en común. Así vamos a poder asegurarnos que cada cambio que yo haga en el código, tú también lo recibas.

Para hacer esto, en la terminal ve a una carpeta donde quieras que exista el proyecto. Entonces escribes lo siguiente:

># $ git clone https://github.com/Sparragus/platzi-badges.git
Eso va a clonar el repositorio del curso a una carpeta llamada platzi-badges.

Ahora es necesario que te muevas a esa carpeta.

># $ cd platzi-badges
Ahora necesitamos instalar todas las dependencias necesarias para poder correr el proyecto. Lo haremos utilizando npm.

># $ npm install
Este proceso puede tardar un poco. Lo que esta haciendo es descargando todas las bibliotecas de código que el proyecto necesita.

Una vez haya concluido, estamos listos para echar a correr el servidor. Lo hacemos con el comando

># $ npm run start
Cuando el servidor comience, automáticamente va a abrir una pantalla en el navegador con la aplicación.

Si todo salió bien, vas a ver una pantalla que dice “Hello, Platzi Badges”.

En la próxima clase vas a aprender como fue que “Hello, Platzi Badges” llegó desde el código hasta la pantalla de tu navegador.

># *Aquí encuentras el repositorio.


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


## el boton igual tiene un evento por efecto viene como type submit
 > **type="button"** se puede cambiar en la propiedad del boton o en el evento **handleSubmit =e=>{
     e.preventDefault();
 }**


# Manejo de estado

` handleChange=(e)=>{
        /* console.log({
            name:e.target.name,
            value:e.target.value
        }); */
        this.setState({
            [e.target.name]: e.target.value,
            //firstName: e.target.value,

        })
    }`


    `value={this.state.lastName}` 

### al momento de cargar hay que iniciarlizar el estado con objeto vacio


# Levantar el estado
poner el estado en una localizacion donde se le pueda pasar como props por componentes

### luego de declarar un state con form vacio objeto [primera Forma]

> `const nextForm=this.state.form;` primera forma para hacer una abstraccion de valores
> `nextForm[e.target.name]=e.target.value;` primera forma con esto el valor no cambia


### segunda forma 

>`this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value,
            }
})`

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


