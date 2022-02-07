# Mp-FrontEnd
Preuba Tecnica
---
_Tenr la ultima version de node.js_
- _[node.js](https://nodejs.org/en/)_ - Descarga node js , el proyecto no funcionara con versiones anterior a 14.0
---

Al Clonar el repositoria Abrir la consola en el proyecto clonado:
```
npm install
```

Librerias Utilizadas en el proyecto 
---
```
reactstrap
react-hook-form
react-feather
react
```
---
Utilizacion de componentes para el paso de informacio de una vista a otra
``` html
    <div>
      <Row className="mt-5">
        <Row>
          <Col className="text-center">
            <h1 className="font-weight-bolder text-uppercase">Fiscalia</h1>
          </Col>
        </Row>

        <Col className="text-center">
          <Formulario
            setOpcion={setOpcion}
            Opcion={Opcion}
            Deps={Deps}
            postSeccion={postSeccion}
            Munis={Munis}
            StoreUpdate={StoreUpdate}
            OneData={OneData}
            setOneData={setOneData}
             Telefonoset={Telefonoset}
            
          />
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Table AllData={AllData}
                      One={One}
                      Delete={Delete} />
        </Col>
      </Row>
    </div>
```
ejemplo de recepcion de variables en la vista Formulario
``` js
const Formulario = ({
  setOpcion,
  Opcion,
  Deps,
  postSeccion,
  Munis,
  StoreUpdate,
  OneData,
  setOneData,
  Telefonoset,
}) => {
return(
Html
)

};
```

