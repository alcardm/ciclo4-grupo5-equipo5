import React from "react";
import { Container, Row } from "react-bootstrap";
import { request } from "../helper/helper";
import "./empleados.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";

const { SearchBar } = Search;
const products = [
  {
    id: 1,
    name: "Katherin",
    price: 1000,
  },
  {
    id: 2,
    name: "Sebastian",
    price: 2000,
  },
  {
    id: 3,
    name: "Juan",
    price: 3000,
  },
  {
    id: 4,
    name: "Ana",
    price: 4000,
  },
  {
    id: 5,
    name: "Alberto",
    price: 5000,
  },
  {
    id: 6,
    name: "Angelica",
    price: 6000,
  },
  {
    id: 7,
    name: "Emily",
    price: 7000,
  },
  {
    id: 8,
    name: "Andres",
    price: 8000,
  },
  {
    id: 9,
    name: "Kevin",
    price: 9000,
  },
  {
    id: 10,
    name: "Jamir",
    price: 1000,
  },
  {
    id: 11,
    name: "Fresneda",
    price: 2000,
  },
  {
    id: 12,
    name: "Liliana",
    price: 2999,
  },
  {
    id: 13,
    name: "Luis",
    price: 3000,
  },
  {
    id: 14,
    name: "Lorena",
    price: 4000,
  },
  {
    id: 15,
    name: "Geraldine",
    price: 5000,
  },
  {
    id: 16,
    name: "Dayana",
    price: 6000,
  },
  {
    id: 17,
    name: "Marisol",
    price: 7000,
  },
  {
    id: 18,
    name: "Angel",
    price: 8000,
  },
  {
    id: 19,
    name: "Pachon",
    price: 9000,
  },
  {
    id: 20,
    name: "Ximena",
    price: 1000,
  },
  {
    id: 21,
    name: "Luisa",
    price: 2000,
  },
  {
    id: 22,
    name: "Valentina",
    price: 3000,
  },
];
const columns = [
  {
    dataField: "id",
    text: "ID",
  },
  {
    dataField: "name",
    text: "Nombre",
  },
  {
    dataField: "price",
    text: "Precio",
  },
];

export default class EmpleadosBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    request
      .get("/empleados")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const options = {
      custom: true,
      totalSize: products.length,
    };
    return (
      <Container id="empleados-buscar-container">
        <Row>
          <h1>Buscar Empleados</h1>
        </Row>
        <Row>
          <ToolkitProvider
            keyField="id"
            data={products}
            columns={columns}
            search
          >
            {(props) => (
              <>
                <h3>Input something at below input field:</h3>
                <SearchBar {...props.searchProps} />
                <hr />
                <PaginationProvider pagination={paginationFactory(options)}>
                  {({ paginationProps, paginationTableProps }) => (
                    <div>
                      <SizePerPageDropdownStandalone {...paginationProps} />
                      <BootstrapTable
                        keyField="id"
                        data={products}
                        columns={columns}
                        {...paginationTableProps}
                        {...props.baseProps}
                      />
                      <PaginationListStandalone {...paginationProps}
                       />
                    </div>
                  )}
                </PaginationProvider> 
              </>
            )}
          </ToolkitProvider>
        </Row>
      </Container>
    );
  }
}
