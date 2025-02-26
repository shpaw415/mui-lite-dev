"use client";

import Switch from "@/mui/Switch";

export function SwitchTest() {
  return (
    <>
      <Switch readOnly checked color="primary" />
      <Switch readOnly checked color="error" />
      <Switch readOnly checked color="secondary" />
      <Switch readOnly checked color="warning" />
      <Switch />
    </>
  );
}
