import "bootstrap/dist/css/bootstrap.css";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Row,
  Col,
  FormGroup,
  UncontrolledTooltip,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Input,
  Label,
  ModalFooter,
} from "reactstrap";
import React, { useState, useEffect, Fragment } from "react";
import { PostRoutPublic, GetRoute } from "../../src/Services/ServicesFetch";
import * as Icon from "react-feather";
import PropTypes from "prop-types";
import { useForm, Controller } from "react-hook-form";
import "./drop.css";
import Select from "react-select";
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
  const [ToggleShow, setToggleShow] = useState(false),
    [IdDep, setIdDep] = useState(""),
    [munisend, setmunisend] = useState(""),
    [TelefonoVal, setTelefonoVal] = useState(""),
    [Tel, setTel] = useState(""),
    [Zona, setZona] = useState(""),
    [Calle, setCalle] = useState(""),
    [Fiscalia, setFiscalia] = useState(""),
    [Deptset, setDeptset] = useState(""),
    [Muniset, setMuniset] = useState(""),
    {
      handleSubmit,
      register,
      formState: { errors },
      control,
      setValue,
    } = useForm(),
    handleClose = () => {
      setToggleShow(false);
      setOpcion();
    },
    onSubmit = async (data, e) => {
      const JSON = {
        idFiscalia: OneData.idFiscalia,
        telefono: Tel,
        zona: Zona,
        calle: Calle,
        idmunicipio: munisend,
        nombreFiscalia: Fiscalia,
      };

      StoreUpdate(JSON, OneData.idFiscalia);
      handleClose();
    },
    OpenModal = () => {
      setToggleShow(true);
    };
  const handleChange = (e) => {
    setIdDep(e.target.value);
  };
  const handleChangeMuni = (e) => {
    setmunisend(e.target.value);
  };
  useEffect(() => {
    if (Opcion > 0) {
      OpenModal();
    }
  }, [Opcion]);
  useEffect(() => {
    if (Opcion === 2) {
      postSeccion(Deptset);
    }
  }, [Opcion, Deptset]);
  useEffect(() => {
    postSeccion(IdDep);
  }, [IdDep]);
  useEffect(() => {
    if ((Opcion === 2 || Opcion === 3) && Opcion !== 0) {
      setTel(OneData.telefono);
      setZona(OneData.zona);
      setCalle(OneData.calle);
      setFiscalia(OneData.nombreFiscalia);
      setDeptset(OneData.idDep);
      setmunisend(OneData.idmunicipio);
    } else {
      setTel("");
      setZona("");
      setCalle("");
      setFiscalia("");
      setIdDep("");
      setmunisend("");
      setDeptset("");
    }
  }, [Opcion]);
  return (
    <div>
      <FormGroup>
        <Button
          className="buttons"
          color="success"
          id="crear"
          onClick={OpenModal}
        >
          Crear
        </Button>
      </FormGroup>
      <Modal isOpen={ToggleShow} toggle={handleClose} backdrop={true}>
        <ModalHeader toggle={handleClose} className="text-center">
          {Opcion === 0 && "Crear Fiscalia"}
          {Opcion === 2 && "Editar Fiscalia"}
          {Opcion === 3 && "Visualizar Fiscalia"}
        </ModalHeader>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody className="pt-3">
            <Row>
              <Col>
                <FormGroup className="form-label-group">
                  <Label for="tel">telefono</Label>
                  <Input
                    value={Tel}
                    onChange={(e) => setTel(e.target.value)}
                    required
                    readOnly={Opcion === 3 ? true : false}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup className="form-label-group">
                  <Label for="zona">Zona</Label>
                  <Input
                    value={Zona}
                    onChange={(e) => setZona(e.target.value)}
                    required
                    readOnly={Opcion === 3 ? true : false}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup className="form-label-group">
                  <Label for="calle">calle</Label>
                  <Input
                    value={Calle}
                    onChange={(e) => setCalle(e.target.value)}
                    required
                    readOnly={Opcion === 3 ? true : false}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup className="form-label-group">
                  <Label for="fiscalia">Nombre Fiscalia</Label>
                  <Input
                    value={Fiscalia}
                    onChange={(e) => setFiscalia(e.target.value)}
                    required
                    readOnly={Opcion === 3 ? true : false}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup className="form-label-group">
                  <Label for="departamento">Departamento</Label>

                  <select
                    className="form-control"
                    onChange={handleChange}
                    defaultValue={Deptset}
                    disabled={Opcion === 3 ? true : false}
                  >
                    <option>selecionar</option>
                    {Deps.map((item) => {
                      return (
                        <option value={item.value} key={item.value}>
                          {item.label}
                        </option>
                      );
                    })}
                  </select>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup className="form-label-group">
                  <Label for="municipio">Municipio</Label>
                  <select
                    className="form-control"
                    onChange={handleChangeMuni}
                    value={munisend}
                    disabled={Opcion === 3 ? true : false}
                  >
                    <option>selecionar</option>
                    {Munis.map((item) => {
                      return (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      );
                    })}
                  </select>
                </FormGroup>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            {Opcion === 3 ? (
              <Button color="info" onClick={handleClose}>
                Regresar
              </Button>
            ) : (
              <Button color="danger" onClick={handleClose}>
                Cancelar
              </Button>
            )}
            {(Opcion === 0 || Opcion === 2) && (
              <Button
                color={Opcion === 0 ? "success" : "warning"}
                type="submit"
              >
                {Opcion === 0 ? "Guardar" : "Actualizar"}
              </Button>
            )}
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};
export default Formulario;
