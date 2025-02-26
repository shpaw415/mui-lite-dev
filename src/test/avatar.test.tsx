import Avatar, { AvatarGroup } from "@/mui/Avatar";

export function AvatarTest() {
  return (
    <>
      <AvatarGroup max={2}>
        <Avatar className="bg-indigo-500 text-slate-500">JH</Avatar>
        <Avatar className="bg-indigo-500 text-slate-500">TE</Avatar>
        <Avatar className="bg-indigo-500 text-slate-500">CB</Avatar>
        <Avatar className="bg-indigo-500 text-slate-500">JH</Avatar>
        <Avatar className="bg-indigo-500 text-slate-500">JH</Avatar>
      </AvatarGroup>
    </>
  );
}
