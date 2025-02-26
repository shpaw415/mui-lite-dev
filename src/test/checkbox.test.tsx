import CheckBox from "@/mui/CheckBox";
import { Wrap } from "./utils";

import FavoriteBorder from "@svg/filled/favorite_border.svg";
import Favorite from "@svg/filled/favorite.svg";

function CheckBoxTest() {
  return (
    <>
      <Wrap>
        <CheckBox readOnly checked />
        <CheckBox readOnly checked color="primary" />
        <CheckBox readOnly checked color="secondary" />
        <CheckBox readOnly checked colorOverRide="gold" />
      </Wrap>
      <Wrap>
        <CheckBox readOnly disabled checked />
        <CheckBox readOnly disabled checked color="primary" />
        <CheckBox readOnly disabled checked color="secondary" />
        <CheckBox readOnly disabled checked colorOverRide="gold" />
      </Wrap>
      <Wrap>
        <CheckBox size="small" />
        <CheckBox size="medium" />
        <CheckBox size="large" />
      </Wrap>
      <Wrap>
        <CheckBox disabled size="small" />
        <CheckBox disabled size="medium" />
        <CheckBox disabled size="large" />
      </Wrap>
      <Wrap>
        <CheckBox
          colorOverRide="gold"
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
        />
      </Wrap>
    </>
  );
}
