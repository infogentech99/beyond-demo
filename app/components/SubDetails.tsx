import Image from "next/image";
import SvgIcon from "./SvgIcon";

interface SubDetailsProps {
  socialLinks?: { platform: string; url: string }[];
  temprature?: string;
  staffDetails?: string;
  parkingDetails?: string;
}

const SubDetails = ({ socialLinks, temprature, staffDetails, parkingDetails }: SubDetailsProps) => {
  const instagramLink = socialLinks?.find(link => link.platform.toLowerCase() === 'instagram');
  const instagramHashtag = instagramLink?.url ? `Please use ${instagramLink.url}` : "#abkan";

  const items = [
    {
      icon: "Instagram",
      title: "Instagram",
      className: "lg:w-20 md:w-10 lg:h-20 w-10 h-10 md:h-10",
      desc: `While posting photos on social media please use the hashtag - ${instagramHashtag}`,
    },
    {
      icon: "Weather",
      title: "Weather",
      className: "lg:w-22 md:w-11 lg:h-21 w-10 h-10 md:h-11",
      desc: temprature || "It will be mostly sunny with temperature reaching up to 28 degrees.",
    },
    {
      icon: "Staff",
      title: "Staff",
      className: "lg:w-16 md:w-8 lg:h-20 w-10 h-10 md:h-10",
      desc: staffDetails || "We recommend the nearby hotel called Bhola Bhawan near the venue for the staff members",
    },
    {
      icon: "Parking",
      title: "Parking",
      className: "lg:w-28 md:w-14 lg:h-20 w-10 h-10 md:h-10",
      desc: parkingDetails || "Valet parking for all our guests will be available at the venue",
    },
  ];
  return (
    <section className="w-full relative text-[#5B78A6] font-Jacques-plain overflow-hidden">
      <Image
        src="/assets/eventDetails.png"
        alt="wedding-photo"
        width={1920}
        height={1080}
        className="object-cover lg:h-full h-220 w-full "
      />
      <img
        src="/assets/flowerSet.png"
        alt="flower set"
        className="w-full absolute lg:-bottom-40 -bottom-10 z-50 object-cover md:-bottom-15"
      />
      <div className="maxcontainer mx-auto bg-white h-[1000px] absolute lg:top-[200px] top-10 left-5 right-5 md:top-[120px] lg:left-40 md:left-30 lg:right-40 md:right-30"></div>
      <Image
        src="/assets/flower.png"
        alt="wedding-photo"
        width={1920}
        height={1080}
       className="object-cover absolute lg:w-80 w-60 md:w-40 lg:h-120 h-35 md:h-80 lg:top-15 md:top-10 md:right-10 top-0 -right-17 scale-x-[-1]"
      />
        <Image
        src="/assets/flower.png"
        alt="wedding-photo"
        width={1920}
        height={1080}
        className="object-cover absolute lg:w-80 w-60 md:w-80 lg:h-120 h-35 md:h-80  lg:top-15 md:top-10 md:right-10 top-0 -left-17 scale-x-[-1]"
      />
      <p
        className="
        font-Jacques-plain lg:text-[56px] text-sm leading-[120%] absolute md:text-[30px] lg:top-2/8 left-1/2 -translate-x-1/2 text-center top-2/20 md:top-2/8
      "
      >
        Things To  Know
      </p>
      <p className=" lg:text-[27px] text-[10px]  text-center absolute left-1/2 -translate-x-1/2 md:text-[12px] lg:top-4/12 top-3/20 leading-[120%] w-full px-18 md:top-4/12 lg:max-w-6xl md:max-w-2xl">
        To help you feel at ease and enjoy every moment of the celebrations,
        <br />
        we’ve gathered a few thoughtful details we’d love for you to know before
        the big day.
      </p>
      <div
        className="absolute left-1/2 -translate-x-1/2 md:text-xl text-xs text-center lg:top-[450px] md:top-[150px] top-1/20 leading-[120%]
         grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-x-20 gap-x-10 w-full md:gap-x-10 lg:px-60 px-15 mt-40 md:mt-20"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2  md:max-w-xs mx-auto"
          >
            <SvgIcon name={item.icon} className={item.className} />
            <h2 className="lg:text-3xl text-xl md:text-xl">{item.title}</h2>
            <p className="lg:text-xl text-sm md:text-25xl">{item.desc}</p>
          </div>
        ))}
      </div>
      
    </section>
  );
};
export default SubDetails;
