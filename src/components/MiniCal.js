import React, { useState } from "react";
import { calculate } from "../Calc";
import { OperationType } from "../Types";

import {
  Container,
  Input,
  Grid,
  Segment,
  Header,
  Label,
  Button,
  Divider,
  Form,
  GridColumn,
} from "semantic-ui-react";
export const MiniCal = () => {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);
  const [operacion, setOperacion] = useState();

  const [resultado, setResultado] = useState(0);

  const handleOperation = (e) => {
    try {
      const r = calculate(valueA, e.target.name, valueB);
      setResultado(r);
    } catch (error) {
      setResultado(error);
    }
  };

  return (
    <div>
      <Header as="h1" textAlign="center">
        Curso: Ingenieria de software Avanzado, Proyecto TDD- Mini Calculadora
      </Header>
      <Divider />

      <Container>
        <Segment>
          <Grid columns={3}>
            <Grid.Column width="10">
              <Form>
                <Form.Group widths="equal">
                  <Form.Field>
                    <Label color="green" pointing="below">
                      Ingrese el Valor de A
                    </Label>
                    <input
                      type="text"
                      placeholder="Valor de A"
                      onChange={(e) => {
                        setValueA(e.target.value);
                      }}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Label color="green" pointing="below">
                      Ingrese el Valor de B
                    </Label>
                    <input
                      type="text"
                      placeholder="Valor de B"
                      onChange={(e) => {
                        setValueB(e.target.value);
                      }}
                    />
                  </Form.Field>
                </Form.Group>
              </Form>
            </Grid.Column>
            <Grid.Column width="1">
              <Button.Group primary vertical>
                <Button name={OperationType.Add} onClick={handleOperation}>
                  +
                </Button>
                <Button name={OperationType.Subtract} onClick={handleOperation}>
                  -
                </Button>
              </Button.Group>
            </Grid.Column>

            <Grid.Column width="5">
              <Form>
                <Form.Field>
                  <Label pointing="below">Resultado</Label>
                  <input type="text" readOnly value={resultado} />
                </Form.Field>
              </Form>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    </div>
  );
};
