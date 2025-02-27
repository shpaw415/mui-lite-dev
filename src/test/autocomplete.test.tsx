import { randomString } from "@/common/utils";
import AutoComplete from "@/mui/AutoComplete";
import { useEffect, useState } from "react";

export default function AutoCompleteTest() {
  const [value, setValue] = useState("");
  const [opts, setOpts] = useState<string[]>([]);
  useEffect(() => {
    setOpts(
      Array(20)
        .fill(null)
        .map(() => randomString(5))
    );
  }, []);
  return (
    <AutoComplete
      SlotProps={{
        input: {
          label: "AutoComplete",
          variant: "outlined",
        },
      }}
      options={opts}
      onSelect={(val) => {
        setValue(val as string);
      }}
      onChange={(e) => {
        setValue(e.currentTarget.value || "");
      }}
      value={value}
    />
  );
}
