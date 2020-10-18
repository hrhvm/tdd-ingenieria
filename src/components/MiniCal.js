import React, { useState } from "react";
import { add } from "../Calc";

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
} from "semantic-ui-react";
export const MiniCal = () => {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);

  const [resultado, setResultado] = useState(0);

  // function sumar() {
  //   setResultado(Number(valueA) + Number(valueB));
  // }

  function sumar() {
    try {
      const r = add(valueA, valueB);
      setResultado(r);
    } catch (error) {
      console.log("Fuera del Rango");
    }
  }

  return (
    <div>
      <Header as="h1" textAlign="center">
        Curso: Ingenieria de software Avanzado, Proyecto TDD- Mini Calculadora
      </Header>
      <Divider />
      <Container>
        <Segment>
          <Grid columns={3}>
            <Grid.Column width="8">
              <Form>
                <Form.Group widths="equal">
                  <Form.Field>
                    <Label pointing="below">Ingrese el Valor de A</Label>
                    <input
                      type="text"
                      placeholder="Valor de A"
                      onChange={(e) => {
                        setValueA(e.target.value);
                      }}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Label pointing="below">Ingrese el Valor de A</Label>
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
            <Grid.Column width="4">
              <br></br>
              <br></br>
              <Button primary onClick={sumar}>
                Calcular
              </Button>
            </Grid.Column>
            <Grid.Column width="4">
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
