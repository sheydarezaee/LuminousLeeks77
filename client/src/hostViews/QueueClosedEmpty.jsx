import React from 'react';
import { Grid, Row, Col, Navbar, Button } from 'react-bootstrap';

export const QueueClosedEmpty = props => {
  return (
    <Grid>
      <Navbar fixedBottom={true}>
        <Row>
          <Col xs={12}>
            <Button
              block={true}
              onClick={() => { props.redux.dispatch.toggleQueue(props.redux.store.queue.id); }}
            >
              Open Queue
            </Button>
          </Col>
        </Row>
      </Navbar>
    </Grid>
  );
};
