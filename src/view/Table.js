import "bootstrap/dist/css/bootstrap.css";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Row,
  Col,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { PostRoutPublic, GetRoute } from "../../src/Services/ServicesFetch";
import * as Icon from "react-feather";
import "./drop.css"
const Table = ({ AllData ,One,Delete}) => {
  const basicColumns = [
    {
      name: "Nombre Fiscalia",
      column: "nombreFiscalia",
      sortable: true,
      center: true,
      cell: (row) => row["nombreFiscalia"],
    },
    {
      name: "Telefono",
      column: "telefono",
      sortable: true,
      center: true,
      cell: (row) => row["telefono"],
    },
    {
      name: "Zona",
      column: "zona",
      sortable: true,
      center: true,
      cell: (row) => row["zona"],
    },
    {
      name: "Calle",
      column: "calle",
      sortable: true,
      center: true,
      cell: (row) => row["calle"],
    },
    {
      name: "Nombre Departamento",
      column: "nombreDepartamento",
      sortable: true,
      center: true,
      cell: (row) => row["nombreDepartamento"],
    },
    {
      name: "Nombre Municipio",
      column: "nombreMunicipio",
      sortable: true,
      center: true,
      cell: (row) => row["nombreMunicipio"],
    },
    {
      name: "Acciones",
      column: "idFiscalia",
      sortable: true,
      center: true,
      cell: (row) => (
        <div className="d-flex justify-content-end">
          <UncontrolledButtonDropdown>
            <DropdownToggle className="pr-1" tag="span">
              <Icon.MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu  >
              <DropdownItem onClick={()=> One(row.idFiscalia,3)}>
                <Icon.Eye className="mr-2" size={15} />
                <span className="align-middle ml-50">Visualizar</span>
              </DropdownItem>

              <DropdownItem onClick={()=> One(row.idFiscalia,2)}>
                <Icon.Edit className="mr-2" size={15}  />
                 <span className='align-middle ml-50'>Actualizar</span> 
              </DropdownItem>
           
              <DropdownItem onClick={()=>  Delete(row.idFiscalia)}>
               <Icon.Trash className="mr-2" size={15} />   
                <span className='align-middle ml-50'>Borrar</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </div>
      ),
    },
  ];
  return (
    <div>
      <DataTable
        noHeader
        highlightOnHover
        pagination
        data={AllData}
        columns={basicColumns}
        className="table-responsive"
        paginationRowsPerPageOptions={[10, 25, 50, 100]}
        paginationComponentOptions={{
          rowsPerPageText: "Filas por pagina",
          rangeSeparatorText: "de",
        }}
        noDataComponent="Sin Datos"
      />
    </div>
  );
};
export default Table;
