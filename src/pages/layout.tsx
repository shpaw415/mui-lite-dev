import { Head } from "@bunext/features/head";
import "@static/mui-style.css";
import "@static/custom.css";

Head.setHead({
  path: "*",
  data: {
    link: [
      {
        rel: "stylesheet",
        href: "/src/pages/layout.css",
      },
    ],
  },
});

export default function Layout({ children }: { children: any }) {
  return children;
}
