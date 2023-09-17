import Table from "react-bootstrap/Table";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Dados() {
  return (
    <dev>
        <div>
        <div class='col-md-3'>
            <div class="form-group">
                <label for="data-pagamento">Datapicker novo</label>    
                <div class="input-group date" data-date-format="dd/mm/yyyy">
                  <input  type="text" class="form-control" placeholder="dd/mm/yyyy">
                </input>
                  <div class="input-group-addon" >
                    <span class="glyphicon glyphicon-th"></span>
                  </div>
                </div>
            </div>
          </div>
        </div>
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
