import Table from "react-bootstrap/Table";
import 'bootstrap/dist/css/bootstrap.min.css';

function Dados() {
  return (
    <dev>
      
        <Table responsive striped bordered hover size="sm"> 
          <thead>
            <tr>
              <th>Horas</th>
              <th>Cômodo</th>
              <th>Consumo (kwh)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12:00</td>
              <td>Sala</td>
              <td>0,5</td>
            </tr>
            <tr>
              <td>12:00</td>
              <td>Cozinha</td>
              <td>0,5</td>
            </tr>
            <tr>
              <td>12:00</td>
              <td>Quarto</td>
              <td>0,5</td>
            </tr>
          </tbody>
        </Table>
    </dev>
  );
}

export default Dados;
