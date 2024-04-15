import Image from "next/image";

interface propsType {
  img: string;
}

const PhotoGallery: React.FC<propsType> = ({ img }) => {
  return (
    <div>
      <Image
        src={img}
        width={600}
        height={240}
        alt="courses"
        className="rounded-xl border-8 border-white hover:scale-110 duration-300 hover:shadow-2xl"
      />
    </div>
  );
};

export default PhotoGallery;
