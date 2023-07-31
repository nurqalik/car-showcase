import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "~/components/navbar";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <header>
        <div className="w-full bg-blue-500">
          <div className="container mx-auto my-4 flex flex-row px-8">
            <div className="items-center py-8 pl-20 pr-4">
              <div className="text-2xl font-semibold text-white">
                Cheapest Car Rental Daily Without Driver and With Driver Car
                Hire in Cheapa.
              </div>
              <p className="text-white">
                Find and book vehicle rental available with driver or without
                driver. Cheapa Lifestyle SuperApp provides you the cheap car
                rental.
              </p>
            </div>
            <div className="items-center py-4">
              <img
                className="rounded-lg"
                src="https://ik.imagekit.io/tvlk/image/imageResource/2023/07/27/1690453001976-0f3d04197107cb4f93c2e77a3c339c24.jpeg?tr=h-230,q-75,w-476"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="container mx-auto px-16">
        <hr className="bg-slate-600" />
        <div className="py-8 text-center text-2xl font-medium">
          Why rent a car through Cheapa?
        </div>
        <div className="container mx-auto">
          <div className="flex flex-row pb-4">
            <div className="w-xs flex-1 rounded-lg border bg-white hover:shadow">
              <div className="mx-auto items-center">
                <img
                  className="mx-auto items-center rounded-lg py-4"
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2018/05/14/1526299345537-5d57c269f121ecb9ae60be83d7688d53.svg?tr=q-75"
                  alt=""
                />
                <div className="p-5">
                  <h5 className="mb-2 text-center text-2xl font-bold tracking-tight">
                    Time Saver
                  </h5>
                  <p className="mb-3 text-center font-normal">
                    Rent a car at your fingertips, anytime and anywhere. Compare
                    cars from our trusted partners in one platform, finding the
                    right one for you is now easier than ever.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-sm flex-1 rounded-lg border bg-white hover:shadow">
              <div className="mx-auto items-center">
                <img
                  className="mx-auto items-center rounded-lg py-4"
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2018/05/14/1526299395599-27c9f8d3b8b182673dc9768a31eaa1d7.svg?tr=q-75"
                  alt=""
                />
                <div className="p-5">
                  <h5 className="mb-2 text-center text-2xl font-bold tracking-tight">
                    High Quality Service from Trusted Partners
                  </h5>
                  <p className="mb-3 text-center font-normal">
                    Our trusted partners provide quality service to ensure that
                    your trip is safe, comfortable and memorable.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-sm flex-1 rounded-lg border bg-white hover:shadow">
              <div className="mx-auto items-center">
                <img
                  className="mx-auto items-center rounded-lg py-4"
                  src="https://ik.imagekit.io/tvlk/image/imageResource/2021/09/01/1630478926789-1fa72feb21f1936c40f63f2b8e861f06.png?tr=q-75"
                  alt=""
                />
                <div className="p-5">
                  <h5 className="mb-2 text-center text-2xl font-bold tracking-tight">
                    Easier Payment with PayLater
                  </h5>
                  <p className="mb-3 text-center font-normal">
                    Book and secure car rental at any time without having to pay
                    full immediately. Use the initial limit starting from 10
                    mio, then pay in 1-12 installments with low interest.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="py-8 text-center text-2xl font-medium">
              Car Rental Without Driver
            </div>
            <div className="flex w-full flex-col items-center">
              <hr className="w-1/12 bg-yellow-400 px-0.5 py-0.5" />
            </div>
            <p className="pt-8 text-left font-normal">
              Traveling with family or relatives is more fun if you choose the
              right transportation. Car rental can be the best choice to
              facilitate your mobility. To further support your flexibility
              while traveling, Traveloka now offers Without Driver Car Rental
              service. You can enjoy this convenience by booking it directly
              through Traveloka Lifestyle SuperApp. Find a wide selection of the
              best cars, complete with the price list.
            </p>
            <p className="pt-4 text-left font-normal">
              Get 24 hours of rental time for without driver car rental service
              in Traveloka. Make your family or business trip more efficient by
              using our without driver service.
            </p>
          </div>
          <div>
            <div className="py-8 text-center text-2xl font-medium">
              Car Rental With Driver
            </div>
            <div className="flex w-full flex-col items-center">
              <hr className="w-1/12 bg-yellow-400 px-0.5 py-0.5" />
            </div>
            <p className="pt-8 text-left font-normal">
              Ease of mobility is very important when you are on a trip. If you
              wish for a hassle-free trip while exploring tourist destinations,
              renting a car with driver service will be the right choice. As
              digital technology advances, you can enjoy car rental services
              with driver only on Traveloka Lifestyle SuperApp. You can easily
              compare the prices from our trusted partners and find one that
              suits your needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
