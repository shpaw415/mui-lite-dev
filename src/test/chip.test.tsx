import Avatar from "@/mui/Avatar";
import Chip from "@/mui/Chip";
import SVG from "@svg/filled/broken_image.svg";

export function ChipTest() {
  return (
    <>
      <Chip
        variant="outlined"
        onDelete={() => {}}
        deleteIcon={<SVG />}
        avatar={<Avatar>Mr</Avatar>}
      >
        Element
      </Chip>
      <Chip
        onDelete={() => {}}
        deleteIcon={<SVG />}
        avatar={<Avatar>Mr</Avatar>}
      >
        Element
      </Chip>
      <Chip
        onDelete={() => {}}
        deleteIcon={<SVG />}
        avatar={<Avatar src="/bunext.png">Mr</Avatar>}
      >
        Element
      </Chip>
      <Chip
        variant="outlined"
        onDelete={() => {}}
        deleteIcon={<SVG />}
        avatar={<Avatar src="/bunext.png">Mr</Avatar>}
      >
        Element
      </Chip>
      <Chip variant="outlined" onDelete={() => {}} deleteIcon={<SVG />}>
        Element
      </Chip>
      <Chip onDelete={() => {}} deleteIcon={<SVG />}>
        Element
      </Chip>
      <Chip variant="outlined" onDelete={() => {}}>
        Element
      </Chip>
      <Chip onDelete={() => {}}>Element</Chip>
      <Chip>Element</Chip>
      <Chip>Element</Chip>
      <Chip variant="outlined" color="primary">
        Element
      </Chip>
      <Chip variant="outlined" color="secondary">
        Element
      </Chip>
      <Chip variant="outlined" color="error">
        Element
      </Chip>
      <Chip variant="outlined" color="success">
        Element
      </Chip>
      <Chip color="success">Element</Chip>
      <Chip color="error">Element</Chip>
      <Chip color="primary">Element</Chip>
      <Chip color="secondary">Element</Chip>
      <Chip color="warning">Element</Chip>

      <Chip
        onClick={() => {
          console.log("click");
        }}
      >
        Element
      </Chip>
      <Chip
        onClick={() => {
          console.log("click");
        }}
        onDelete={() => console.log("delete")}
      >
        Element
      </Chip>
    </>
  );
}
