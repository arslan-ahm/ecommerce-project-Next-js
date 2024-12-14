import Carousel from "@/components/Carousel";

export default function Home() {
  fetch("/api/product")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center my-10">Hello World</h1>
      {/* <Carousel /> */}
    </>
  );
}
