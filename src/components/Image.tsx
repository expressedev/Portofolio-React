import Image from "next/image";

function Images() {
  return (
    <Image
      src="/src/app/profile.jpg"
      alt=""
      className="relative rounded-full h-32 w-32 mx-auto object-cover"
    />
  );
}
export default Image;
