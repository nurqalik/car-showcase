import Image from "next/image";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";

const CarGallery = () => {

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg"
                src={"/car-image/car1.jpg"}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                src={"/car-image/car2.jpg"}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                src={"/car-image/car3.jpg"}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                src={"/car-image/car4.jpg"}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                src={"/car-image/car5.jpg"}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                src={"/car-image/car6.jpg"}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          </div>
        </div>
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg"
                src={"/car-image/car1.jpg"}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                src={"/car-image/car2.jpg"}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                src={"/car-image/car3.jpg"}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                src={"/car-image/car4.jpg"}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                src={"/car-image/car5.jpg"}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                src={"/car-image/car6.jpg"}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CarGallery;
