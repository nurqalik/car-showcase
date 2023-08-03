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
import { Car } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import { api } from "~/utils/api";

const CarGallery = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [cars, setCars] = useState<Car[]>([])
  const [oneCar, setOneCar] = useState('')
  const [car,setCar] = useState<Car | null>()
  api.car.getAllCar.useQuery(undefined, {
    onSuccess: (data) => {
      setCars(
        data.map(
          (item) => ({
            id: item.id,
            name: item.name,
            description: item.description,
            brand: item.brand,
            img: item.img,
          } as Car)
        )
      )
    }
  })
  api.car.getOneCar.useQuery(oneCar,{
    onSuccess: (data) => {
      setCar(data)
    }
  })

  return (
    <>
      <Modal isOpen={isOpen} placement="center" onOpenChange={onOpenChange}>
        <ModalContent className="items-center bg-white max-w-xs h-auto md:h-auto md:max-w-md">
          {(onClose) => (
            <>
                  <Image
                    className="rounded-t-lg w-full object-cover h-44 md:h-56"
                    src={car?.img as string}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="gallery"
                  />
              <div className="max-w-xl px-4 rounded-lg text-center">
                <div className="p-2">
                    <h5 className="mb-2 text-sm md:text-2xl font-bold tracking-tight text-gray-900">
                      {car?.name}
                    </h5>
                  <p className="mb-3 font-normal text-xs md:text-base text-gray-700 ">
                    {car?.description}
                  </p>
                  <p className="font-extralight text-xs text-gray-700 ">
                    {car?.brand}
                  </p>
                </div>
              </div>
              <ModalFooter className="py-0">
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
          <div className="flex w-full md:w-full flex-wrap">
            {cars.map((item) => (
              <div className="w-1/2 md:h-1/4 p-1 md:p-2" key={item.id}>
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg"
                src={item.img}
                width={0}
                height={0}
                sizes="100vw"
                onClick={(event) => {
                  onOpen();
                  setOneCar(item.id)
                }}
              />
            </div>
            ))}
          </div>
        </div>
        
      </div>

      <Footer />
    </>
  );
};

export default CarGallery;
