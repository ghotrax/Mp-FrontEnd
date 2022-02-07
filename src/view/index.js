import "bootstrap/dist/css/bootstrap.css";
import { Button, Card, CardBody, CardHeader, Row, Col, Form } from "reactstrap";
import React, { useState, useEffect, Fragment } from "react";
import { PostRoutPublic, GetRoute } from "../../src/Services/ServicesFetch";
import Table from "./Table";
import Formulario from "./Form";
const Index = () => {
  const [AllData, setAllData] = useState([]),
    [Deps, setDeps] = useState([]),
    [Opcion, setOpcione] = useState(0),
    [Munis, setMunis] = useState([]),
    [OneData,setOneData] = useState([]),
      [Telefonoset,setTelefonoset] = useState(''),
    nameController = "Fiscalia",
    controllerDep = "Departamento",
    MuniController = "Municipio",
    All = async () => {
      const response = await GetRoute(`${nameController}/All`);
      setAllData(response.length ? response : []);
    },
    Departamento = async () => {
      const response = await GetRoute(`${controllerDep}/label`);
      setDeps(response.length ? response : []);
    },
    postSeccion = async (id) => {
      var response = [];
      if (id) {
        response = await getMunucipio(id);
      }
      setMunis(id !== null ? response : []);
    },
    getMunucipio = async (id) => {
      return PostRoutPublic(`${MuniController}/labelMuni`, {
        idDepartamento: id,
      });
    },
    Refresh = async () => {
      All();
    },
    StoreUpdate = async (data, ev, id) => {
      var response = [];
      if (!id) {
        //Crear un registro
        response = await PostRoutPublic(`${nameController}/store`, data);
      } else {
        //Actualizar registro
        response = await PostRoutPublic(`${nameController}/update`, {...data, idFiscalia : id})
        setOpcione(0)
      }
      Refresh();
    },

    One = async (id, opcion) =>
    { 
        const response = await PostRoutPublic(`${nameController}/one`,{idFiscalia:id} );
        setOneData(response);
         setTelefonoset(response.telefono)
        setOpcione(opcion)
    },
    Delete = async (id) =>
    { 
        const response = await PostRoutPublic(`${nameController}/destroy`,{idFiscalia:id} );
        Refresh();
    },
    setOpcion = () => {
      setOpcione(0);
      setOneData([])
    };
  useEffect(() => {
    All();
    Departamento();
   
  }, []);
  return (
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
  );
};
export default Index;
