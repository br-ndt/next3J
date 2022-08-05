import dynamic from "next/dynamic";
const Box = dynamic(() => import("../components/canvas/Box"), {
  ssr: false,
});

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
  return (
    <>
      <gridHelper />
      <axesHelper />
      <Box route="/" />
    </>
  );
}

export default function Page() {
  return (
    <>
      <DOM />
      <R3F/>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "wow!",
    },
  };
}
