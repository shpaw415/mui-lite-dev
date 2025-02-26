import TextField from "@/mui/TextField";

export function TextFieldTest() {
  return (
    <div className="space-y-10">
      <div>
        <TextField label="Test text" variant="filled" />
        <TextField label="Test text" variant="outlined" />
        <TextField label="Test text" variant="standard" />
      </div>
      <div>
        <TextField disabled label="Test text" variant="filled" />
        <TextField disabled label="Test text" variant="outlined" />
        <TextField disabled label="Test text" variant="standard" />
      </div>
      <div>
        <TextField color="error" label="Test text" variant="filled" />
        <TextField color="error" label="Test text" variant="outlined" />
        <TextField color="error" label="Test text" variant="standard" />
      </div>
      <div>
        <TextField color="success" label="Test text" variant="filled" />
        <TextField color="success" label="Test text" variant="outlined" />
        <TextField color="success" label="Test text" variant="standard" />
      </div>
      <div>
        <TextField color="secondary" label="Test text" variant="filled" />
        <TextField color="secondary" label="Test text" variant="outlined" />
        <TextField color="secondary" label="Test text" variant="standard" />
      </div>
    </div>
  );
}
