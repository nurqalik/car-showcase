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
          <div className="container mx-auto flex flex-col-reverse my-4 md:py-16 md:flex-row md:px-8">
            <div className="text-center md:text-left md:items-center py-10 px-8 md:py-8 md:pl-20 md:pr-4">
              <div className="text-2xl font-semibold text-white">
                Cheapest Car Rental Daily Without Driver and With Driver Car
                Hire in Cheapa.
              </div>
              <p className="text-white pt-4">
                Find and book vehicle rental available with driver or without
                driver. Cheapa Lifestyle SuperApp provides you the cheap car
                rental.
              </p>
            </div>
            <div className="items-center md:py-4">
              <img
                className="md:rounded-lg md:scale-110 w-full"
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
          <div className="flex flex-col md:flex-row pb-4">
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
            <p className="pt-8 text-center md:text-left font-normal">
              Traveling with family or relatives is more fun if you choose the
              right transportation. Car rental can be the best choice to
              facilitate your mobility. To further support your flexibility
              while traveling, Cheapa now offers Without Driver Car Rental
              service. You can enjoy this convenience by booking it directly
              through Cheapa Lifestyle SuperApp. Find a wide selection of the
              best cars, complete with the price list.
            </p>
            <p className="pt-4 text-center md:text-left font-normal">
              Get 24 hours of rental time for without driver car rental service
              in Cheapa. Make your family or business trip more efficient by
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
            <p className="pt-8 text-center md:text-left font-normal">
              Ease of mobility is very important when you are on a trip. If you
              wish for a hassle-free trip while exploring tourist destinations,
              renting a car with driver service will be the right choice. As
              digital technology advances, you can enjoy car rental services
              with driver only on Cheapa Lifestyle SuperApp. You can easily
              compare the prices from our trusted partners and find one that
              suits your needs.
            </p>
          </div>
          <div>
            <div className="py-8 text-center text-2xl font-medium">
              Car Rental General Requirement
            </div>
            <div className="flex w-full flex-col items-center">
              <hr className="w-1/12 bg-yellow-400 px-0.5 py-0.5" />
            </div>
            <div className="flex w-full justify-center md:justify-normal flex-col md:flex-row md:px-2 pt-8">
              <div className="bordered md:mx-4 w-full md:w-1/2 rounded-lg border-2 md:shadow-lg">
                <div className="bordered border-b-2 px-4 md:px-0 py-8 md:py-4 text-center">
                  Without driver general requirement
                </div>
                <div className="mx-10 md:mx-12 my-4 md:my-6 flex flex-col">
                  <p className="py-4 font-bold text-center md:text-left">Includes</p>
                  <ul className="mx-4 list-disc text-center md:text-left">
                    <li>Insurance for car and passengers</li>
                    <li>
                      Use for up to
                      <a className="pl-1 pr-1 font-semibold">24 Hours</a> on
                      each rental day
                    </li>
                  </ul>
                  <p className="py-4 font-bold text-center md:text-left">Excludes</p>
                  <ul className="mx-4 list-disc text-center md:text-left">
                    <li>
                      Fuel, pickup/drop-off out of town, and insurance claims
                    </li>
                  </ul>
                  <p className="py-4 font-bold text-center md:text-left">Pickup Location</p>
                  <ul className="mx-4 list-disc text-center md:text-left">
                    <li>Free pickup and drop-off at the airport and in town</li>
                  </ul>
                  <p className="py-4 font-bold text-center md:text-left">Required Documents</p>
                  <ul className="mx-4 list-disc text-center md:text-left">
                    <li>
                      Original ID card/passport, driver&apos;s license, and personal
                      or family&apos;s credit card (a photo of your family card (KK)
                      or marriage certificate must be shared with the our car
                      rental partner before pickup to verify your family
                      member&apos;s credit card)
                    </li>
                  </ul>
                  <p className="py-4 italic text-center md:text-left">
                    Note: Social media accounts and selfie with ID card are
                    required for rentals. Suppliers will require additional
                    forms of verification if social media account is
                    unavailable. Please be advised that suppliers will contact
                    you for the above requirements. Check the Terms & Conditions
                    to learn more
                  </p>
                </div>
              </div>
              <div className="bordered md:mx-4 w-full md:w-1/2 rounded-lg border-2 shadow-lg">
                <div className="bordered border-b-2 px-4 md:px-0 py-8 md:py-4 text-center">
                  With Driver General Requirement
                </div>
                <div className="mx-10 md:mx-12 my-4 md:my-6 flex flex-col">
                  <p className="py-4 font-bold text-center md:text-left">Includes</p>
                  <ul className="mx-4 list-disc text-center md:text-left">
                    <li>Use within the city area</li>
                    <li>
                      Use for up to
                      <a className="pl-1 pr-1 font-semibold">12 Hours</a> or up
                      to 23:59 on each rental day
                    </li>
                  </ul>
                  <p className="py-4 font-bold text-center md:text-left">Excludes</p>
                  <ul className="mx-4 list-disc text-center md:text-left">
                    <li>Fuel, parking, toll fees, driver&apos;s meals and tips</li>
                    <li>
                      Excludes drivers&apos;s accomodation in case of out of town use
                    </li>
                    <li>Use outside the city</li>
                  </ul>
                  <p className="py-4 font-bold text-center md:text-left">Pickup Location</p>
                  <ul className="mx-4 list-disc text-center md:text-left">
                    <li>
                      Free pickup and drop-off at the airport and in town.
                    </li>
                  </ul>
                  <p className="py-4 italic text-center md:text-left">
                    The driver will contact you 12 – 24 hours before pickup
                    time. For same day rental, driver will contact you as soon
                    as your booking is confirmed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:px-24 md:pt-40">
            <div className="py-8 text-center text-2xl font-medium">
              Convenient and Safety Tips while Renting a Car on a Vacation
            </div>
            <p className="indent-4 md:indent-8">
              Renting a car often becomes a choice for comfortable and safe
              traveling. This mode of transportation allows you to explore
              various popular destinations and arrange travel schedules
              independently. Besides that, the cost of renting a car is also
              considered cheaper than other transportation when traveling with
              family or friends. Before deciding to choose a car to rent and
              make a payment at a car rental, here are several things that you
              should do to have a safe and comfortable experience while
              traveling.
            </p>
            <p className="font-medim py-4 font-bold underline underline-offset-2 md:no-underline">Know what you needs</p>
            <p className="indent-4 md:indent-8">
              Start by knowing your travel needs, it will make you easier to
              choose the right type of car to support your travel needs. For
              example, if you are traveling with a group of family or friends,
              choose the latest car with a large size such as MPV. If you are
              going to travel in an urban area, you can choose a car with 1,000
              cc of power such as Avanza and Xenia. Or, if you are in the middle
              of fancy vacation and need a luxury car, you can choose to rent
              mini cooper or other luxury cars option. However, if the road that
              will be taken through has many inclines such as mountain terrain,
              then you can rent a 1,500 cc car like the Grand Innova. The
              selection of a car that suits your needs will certainly support
              your trip to be more comfortable and safe
            </p>
            <div className="mt-8 flex flex-col items-center md:flex-row">
              <img
                src="https://ik.imagekit.io/tvlk/image/imageResource/2020/03/17/1584430125393-57e3cadd38e063f7a29a08c9f62fa1c8.jpeg?tr=q-75"
                alt=""
                className="my-4 md:m-4 h-44 md:h-64 object-none w-72 md:w-96 rounded-xl"
              />
              <div className="my-4 md:m-4">
                <p className="pb-4 md:pb-2 font-bold">
                  Make sure the condition of the car and facilities offered
                </p>
                <p>
                  Before renting a car, you should ask first about the condition
                  of the latest car that you have chosen. Starting from asking
                  when the car is serviced or doing other maintenance. This will
                  later minimize the occurrence of things that are not desirable
                  when traveling. Besides the condition of the car, make sure
                  you also choose a car that supports your needs. If it is your
                  first time in the city, you will need a professional driver
                  who already knows well the surrounding area, and by doing so,
                  it can take you to many places effectively and safely. Do not
                  hesitate to ask about out-of-town pick-up services and travel
                  insurance
                </p>
              </div>
            </div>
            <div className="mt-8">
              <p className="font-medim py-4 font-bold">
                Compare and pay attention to car rental prices
              </p>
              <p>
                When you are going to rent a car in a car rental company, you
                must know the cost of the specified car rental. The goal is that
                you can find out the price range of rental cars in the
                destination city. After that, compare rental rates from several
                popular car rental providers. You can find different prices for
                the same type of car. Also pay attention to the additional fees
                charged for additional facilities outside the package, such as
                fuel costs, driver meal costs, and pickup services out of town.
              </p>
            </div>
            <div className="mt-4">
              <p className="font-medim py-4 font-bold">
                Choose a trusted car rental service
              </p>
              <p>
                Cheapa has officially partnered with many trusted and
                experienced car rental services, which are available in major
                cities in Indonesia, namely Jakarta, Bali, Medan, Yogyakarta,
                Makassar, Palembang, Malang, Balikpapan, Surabaya, Semarang, and
                Bandung. In addition, this online travel application also offers
                a user rating feature, so that it can be considered when
                choosing a car rental. This feature can also compare one car
                rental service with another. Starting from the conditions,
                policies, features, quality of the driver, to the cleanliness of
                its partners.
              </p>
            </div>
            <div className="mt-4">
              <p className="font-medim py-4 font-bold">Book earlier</p>
              <p>
                To be more comfortable and safe, you have to make a reservation
                for renting a car in advance. Especially if you rent a car in
                the holiday season. This is to anticipate the unavailability of
                the car and also getting the normal price. Do not forget to
                reconfirm the car at least D-1 trip to make sure the car is
                available according to your order. To make it easier, you can
                search for car rentals online such as Cheapa. Only by using the
                Cheapa application, users can choose car rental services easily
                and practically whenever and wherever. Those are some tips that
                you can do when about to travel by using a rental car
                transportation mode. For a pleasant experience, use the Cheapa
                application for practical convenience in renting a car. Car
                rental options are guaranteed safe and supported with reliable
                drivers. Comparing prices and products between verified
                providers on this platform is fast and easy. At Cheapa, users
                can also freely choose the duration of the rental, starting from
                the daily up to weekly car rental.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="pt-20">
        <div className="w-full bg-blue-500">
            <div className="items-center py-8 md:pl-20 md:pr-4">
              <div className="text-xl text-center font-medium text-white">&copy;Cheapa 2023</div>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
