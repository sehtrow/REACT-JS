# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `Detalle API`

La api utilizada fue la siguiente [https://www.breakingbadapi.com/documentation](https://www.breakingbadapi.com/documentation).\
Se trabajo con los datos de los Characters, obtienendo los 50 primeros registros por defecto.\
Desplegando un boton para quienes hayan fallecido para poder visualizar el detalle de su muerte brindado por la api Deaths, obteniendo su detalle en base al nombre del Character.\
Tambien se realizo un buscador el cual hace match con la API en base al nombre del Character a buscar, en caso de no encontrar registros, desplegara mensaje de 'No Results' y en caso de querer visualizar los registros nuevamente, bastara con buscar sin ingresar datos en el buscador para que cargen los 50 primeros registros de la API.\

Para los estilos se utilizo Material-UI/core y /icons.\
Se trabajo con Context Api para poder proveer la informacion necesaria a cada componente (Characters y Deaths).\
Tambien se trabajo con cors-anywhere brindado por heroku, para que en caso de pruebas ocurriese un error o estuviese off la API, poder contar con la data.\

Se trabajo con el patron de diseño de contextos para encapsular un estado de un contexto y asi inyectarlo en el componente que se requiera. Utilizando Provider para proveer un valor y asi utilizaro en el contexto que se requiera. El Provider nos brinda la informacion obtenida y si ha realizado el fetch correctamente, para que en la UI se puede interpretar esta obtencion de datos y así desplegarlos de manera correcta.\
Toda la información obtenida por el Provider es encapsula en estados generados mediante useState

Los componentes obtienen la información del Provider mediante useContext el cual nos diponibiliza la información que nos brinda el Provider.
