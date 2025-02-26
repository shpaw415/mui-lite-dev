"use client";
import Button from "../mui/Button";
import { Wrap } from "./utils";

export function ButtonTest() {
  return (
    <>
      <Wrap>
        <Button color="secondary" variant="contained">
          Test
        </Button>
        <Button color="secondary" variant="text">
          Test
        </Button>
        <Button color="secondary" variant="outlined">
          Test
        </Button>
      </Wrap>
      <Wrap>
        <Button color="error" variant="contained">
          Test
        </Button>
        <Button color="error" variant="text">
          Test
        </Button>
        <Button color="error" variant="outlined">
          Test
        </Button>
      </Wrap>
      <Wrap>
        <Button color="warning" variant="contained">
          Test
        </Button>
        <Button color="warning" variant="text">
          Test
        </Button>
        <Button color="warning" variant="outlined">
          Test
        </Button>
      </Wrap>
      <Wrap>
        <Button color="success" variant="contained">
          Test
        </Button>
        <Button color="success" variant="text">
          Test
        </Button>
        <Button color="success" variant="outlined">
          Test
        </Button>
      </Wrap>
      <Wrap>
        <Button disabled variant="contained">
          Test
        </Button>
        <Button disabled variant="text">
          Test
        </Button>
        <Button disabled variant="outlined">
          Test
        </Button>
      </Wrap>
    </>
  );
}
