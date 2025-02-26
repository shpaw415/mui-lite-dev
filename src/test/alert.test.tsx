import Alert from "@/mui/Alert";
import Button from "@/mui/Button";

export function AlertTest() {
  return (
    <div className="space-y-2">
      <Alert action={<Button>UNDO</Button>} title="Title" severity="info">
        Info within
      </Alert>
      <Alert title="Title" severity="info">
        Info within
      </Alert>
      <Alert action={<Button>UNDO</Button>} severity="info">
        Test
      </Alert>

      <Alert action={<Button variant="outlined">UNDO</Button>} severity="error">
        Test
      </Alert>
      <Alert
        onClose={(e) => {
          console.log(e);
        }}
        severity="success"
      >
        Test
      </Alert>
      <Alert action={<Button>UNDO</Button>} severity="info">
        Test
      </Alert>
      <Alert action={<Button>UNDO</Button>} severity="warning">
        Test
      </Alert>

      <Alert variant="filled" severity="error">
        Test
      </Alert>
      <Alert variant="filled" severity="success">
        Test
      </Alert>
      <Alert variant="filled" severity="info">
        Test
      </Alert>
      <Alert variant="filled" severity="warning">
        Test
      </Alert>

      <Alert variant="outlined" severity="error">
        Test
      </Alert>
      <Alert variant="outlined" severity="success">
        Test
      </Alert>
      <Alert variant="outlined" severity="info">
        Test
      </Alert>
      <Alert variant="outlined" severity="warning">
        Test
      </Alert>
    </div>
  );
}
