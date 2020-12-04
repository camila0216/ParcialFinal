import React from "react";
import {
  FormattedDate,
  FormattedMessage,
  FormattedNumber,
  FormattedPlural,
} from "react-intl";

const Serie = (props) => {
  return (
    <tr>
      <th scope="row">{props.serie.id}</th>
      <td>{props.serie.name}</td>
      <td>{props.serie.channel}</td>
      <td>{props.serie.description}</td>
    </tr>
  );
};

export default Serie;
