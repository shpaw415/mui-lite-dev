import ToggleButton, { ToggleButtonGroup } from "@/mui/Toggle";
import { Wrap } from "./utils";
import StartIcon from "@svg/filled/backpack.svg";

export function ToggleTest() {
  return (
    <>
      <Wrap>
        <ToggleButtonGroup>
          <ToggleButton>
            <StartIcon />
          </ToggleButton>
          <ToggleButton selected>
            <StartIcon />
          </ToggleButton>
          <ToggleButton disabled>
            <StartIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Wrap>
      <Wrap>
        <ToggleButtonGroup color="primary">
          <ToggleButton>
            <StartIcon />
          </ToggleButton>
          <ToggleButton selected>
            <StartIcon />
          </ToggleButton>
          <ToggleButton disabled>
            <StartIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Wrap>
      <Wrap>
        <ToggleButtonGroup color="secondary">
          <ToggleButton>
            <StartIcon />
          </ToggleButton>
          <ToggleButton selected>
            <StartIcon />
          </ToggleButton>
          <ToggleButton disabled>
            <StartIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Wrap>
      <Wrap>
        <ToggleButtonGroup color="error">
          <ToggleButton>
            <StartIcon />
          </ToggleButton>
          <ToggleButton selected>
            <StartIcon />
          </ToggleButton>
          <ToggleButton disabled>
            <StartIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Wrap>
      <Wrap>
        <ToggleButtonGroup color="warning">
          <ToggleButton>
            <StartIcon />
          </ToggleButton>
          <ToggleButton selected>
            <StartIcon />
          </ToggleButton>
          <ToggleButton disabled>
            <StartIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Wrap>
      <Wrap>
        <ToggleButtonGroup color="success">
          <ToggleButton>
            <StartIcon />
          </ToggleButton>
          <ToggleButton selected>
            <StartIcon />
          </ToggleButton>
          <ToggleButton disabled>
            <StartIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Wrap>
    </>
  );
}
