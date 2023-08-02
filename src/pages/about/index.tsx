import Footer from "~/components/footer";
import Navbar from "~/components/navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div
        className="relative h-screen overflow-hidden bg-cover bg-no-repeat p-12 text-center"
        style={{ backgroundImage: `url('/car-image/about.jpg')` }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="container mx-16 md:mx-80">
              <div className="text-white">
                <h2 className="mb-4 text-4xl font-semibold">Cheapa</h2>
                <h4 className="mb-6 text-xl font-semibold">
                  Car Hire Showcase.
                </h4>
                <p className="mb-2 text-base font-light">
                  Cheapa is an Indonesian technology company focused on car hire
                  and traveling. Operating a services website of the same name
                  and based out of Jakarta, Indonesia, Cheapa is active in
                  six countries,and in 2022 remained the largest online
                  travel app in Southeast Asia.Founded in 2012 as a travel
                  search engine,it now also offers services such as
                  attraction tickets, activities, transportation rentals, and
                  restaurant vouchers.It also provides financial services
                  such as credit and insurance. Classified as a unicorn
                  company and regarded as functionally similar to
                  Expedia, in 2022 it was valued approximately at US$3
                  billion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
