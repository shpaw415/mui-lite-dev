import FAB from "@/mui/FloatingActionButton";
import SVG from "@svg/filled/broken_image.svg";

export function FABTest() {
  return (
    <>
      <FAB color="success" size="small" variant="extended">
        <SVG />
        extend
      </FAB>
      <FAB color="error" size="medium" variant="extended">
        <SVG />
        extend
      </FAB>
      <FAB
        bgColorOverRide="red"
        colorOverRide="blue"
        size="large"
        variant="extended"
      >
        <SVG />
        extend
      </FAB>
      <FAB bgColorOverRide="lightblue">
        <SVG />
      </FAB>
      <FAB bgColorOverRide="lightblue" disabled>
        <SVG />
      </FAB>
    </>
  );
}
