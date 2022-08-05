import "../styles/globals.css";
import { useRouter } from "next/router";
import { Children, useEffect } from "react";
import dynamic from "next/dynamic";
import Header from "../components/dom/Header";
import Dom from "../components/layout/dom";
import { useStore } from "../modules/zustand/store";

const Canvas = dynamic(() => import("../components/layout/canvas"), {
  ssr: false,
});

function AppLayout({ children }) {
  const newChildren = Children.map(children, (child, index) =>
    index % 2 === 0 ? <Dom>{child}</Dom> : <Canvas>{child}</Canvas>
  );

  return newChildren;
}

function Next3J({ Component, pageProps = { title: "index" } }) {
  const router = useRouter();
  const { setRouter } = useStore();

  useEffect(() => {
    setRouter(router);
  }, [setRouter, router]);

  console.log(Component);
  const children = Component(pageProps).props.children;
  return (
    <>
      <Header title={pageProps.title} />
      <AppLayout>{children}</AppLayout>
    </>
  )
}

export default Next3J;
