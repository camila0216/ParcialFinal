import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import Serie from "./serie";
import Visualizacion from "./visualizacion";
import { Container, Table } from "react-bootstrap";

const ListadoSeries = (props) => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("series") === null) {
        setSeries([]);
      } else {
        setSeries(JSON.parse(localStorage.getItem("series")));
      }
    } else {
      const url = props.url;
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setSeries(res);
          localStorage.setItem("series", JSON.stringify(res));
        });
    }
  }, [props.url]);

  if (series.length > 0) {
    return (
      <Container>
        <Table striped bordered>
          <thead>
            <tr>
              <th scope="col">#</th>
              {/*El id tiene  que corresponder con una clave de los archivos en locales*/}
              <th scope="col">
                <FormattedMessage id="Name" />
              </th>
              <th scope="col">
                <FormattedMessage id="Channel" />
              </th>
              <th scope="col">
                <FormattedMessage id="Description" />
              </th>
            </tr>
          </thead>
          <tbody>
            {series.map((e, i) => (
              <Serie key={i} serie={e} />
            ))}
          </tbody>
        </Table>
        <br></br>
        <div>
          <h2>
            <FormattedMessage id="Seasons" />
          </h2>
          <br></br>
          <Visualizacion data={series}></Visualizacion>
        </div>
      </Container>
    );
  } else {
    return (
      <div>
        <FormattedMessage id="Error" />
      </div>
    );
  }
};

export default ListadoSeries;
