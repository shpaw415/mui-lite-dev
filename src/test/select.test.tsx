import Select from "@/mui/Select";

export function SelectTest() {
  return (
    <Select name="test" label="test">
      {Array.from("abcdefgh").map((k) => (
        <option value={k} key={k}>
          {k}
        </option>
      ))}
    </Select>
  );
}
