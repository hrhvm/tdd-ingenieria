import React, { useState } from "react";

import {
  Container,
  Input,
  Grid,
  Segment,
  Header,
  Label,
  Button,
  Divider,
} from "semantic-ui-react";
export const MiniCal = () => {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);

  const [resultado, setResultado] = useState(0);

  function sumar() {
    setResultado(Number(valueA) + Number(valueB));
  }

  return (
    // <Container>
    //   <Input label="http://" placeholder="mysite.com" />
    //   <input
    //     type="text"
    //     placeholder="Digite numero A"
    //     onChange={(e) => {
    //       setValueA(e.target.value);
    //     }}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Digite numero B"
    //     onChange={(e) => {
    //       setValueB(e.target.value);
    //     }}
    //   />
    //   <button onClick={sumar}>Submit</button>

    //   <p>{resultado}</p>
    // </Container>
    // <Grid columns={3} divided>
    //   <Grid.Row stretched>
    //     <Grid.Column>
    //       <Segment>1</Segment>
    //     </Grid.Column>
    //     <Grid.Column>
    //       <Segment>1</Segment>
    //       <Segment>2</Segment>
    //     </Grid.Column>
    //     <Grid.Column>
    //       <Segment>1</Segment>
    //       <Segment>2</Segment>
    //       <Segment>3</Segment>
    //     </Grid.Column>
    //   </Grid.Row>
    // </Grid>
    <div>
      <Header as="h1" textAlign="center">
        MiniCalc
      </Header>
      <Divider />
      <Container>
        <Segment>
          <Grid columns={4}>
            <Grid.Column>
              <Input
                label="Numero A"
                onChange={(e) => {
                  setValueA(e.target.value);
                }}
              />
            </Grid.Column>
            <Grid.Column>
              <Input
                label="Numero B"
                onChange={(e) => {
                  setValueB(e.target.value);
                }}
              />
            </Grid.Column>
            <Grid.Column>
              <Button onClick={sumar}>=</Button>
            </Grid.Column>
            <Grid.Column>{resultado}</Grid.Column>
          </Grid>
        </Segment>
      </Container>
    </div>
  );
};
