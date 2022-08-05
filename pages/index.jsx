import useStore from "../modules/zustand/store.jsx";
import dynamic from "next/dynamic";

const Shader = dynamic(
  () => import("../components/canvas/ShaderExample/ShaderExample"),
  {
    ssr: false,
  }
);

function DOM() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <h1>next3J</h1>
    </div>
  );
}

function R3F() {
  const { router } = useStore();
  function handleOnClick() {
    router.push("/altView");
  }

  return <Shader onClick={handleOnClick} />;
}

export default function Page() {
  return (
    <>
      <DOM />
      <R3F />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Welcome!",
    },
  };
}
