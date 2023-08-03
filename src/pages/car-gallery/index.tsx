import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import {
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";

const CarGallery = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const cars = {
    name: "GT-R",
    merk: "Honda",
    years: 1990,
    image: "/car-image/car1.jpg",
  };
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="items-center bg-white max-w-sm">
          {(onClose) => (
            <>
                  <Image
                    className="rounded-t-lg w-full object-cover h-56"
                    src={"/car-image/car1.jpg"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="gallery"
                  />
              <div className="max-w-sm rounded-lg">
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 ">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    Read more
                    <svg
                      className="ml-2 h-3.5 w-3.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <ModalFooter>
                <Button
                  variant="light"
                  color="default"
                  className="text-gray-600 hover:text-gray-900"
                  onClick={onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
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
                onClick={onOpen}
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
