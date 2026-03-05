"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface EndDetailsProps {
  counterDate?: string;
  locationLink?: string;
  socialLinks?: { platform: string; url: string }[];
}

const EndDetails = ({ counterDate, locationLink, socialLinks }: EndDetailsProps) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    if (!counterDate) return;

    const calculateTimeLeft = () => {
      const difference = +new Date(counterDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000);

    return () => clearInterval(timer);
  }, [counterDate]);

  const instagramLink = socialLinks?.find(link => link.platform.toLowerCase() === 'instagram')?.url;
  const whatsappLink = socialLinks?.find(link => link.platform.toLowerCase() === 'whatsapp')?.url;

  return (
    <div className="relative text-[#280F56] font-Jacques-plain overflow-hidden ">
      <div className="flex justify-between w-full">
        <Image
          src="/assets/edgeBorder.png"
          alt="wedding-photo"
          width={1920}
          height={1080}
          className="object-cover h-full lg:w-32 w-10 md:w-32"
        />
        <Image
          src="/assets/edgeBorder.png"
          alt="wedding-photo"
          width={1920}
          height={1080}
          className="object-cover h-full  scale-x-[-1] md:w-32 w-10"
        />
      </div>
      <p className="font-Jacques-plain lg:text-[56px] text-sm leading-[120%] absolute md:text-[25px] md:top-1/12 left-1/2 -translate-x-1/2 text-center ">
        The countdown begins <br />
        {counterDate ? `${timeLeft.days}D ${timeLeft.hours}H ${timeLeft.minutes}M` : "118D 11H 47M"}
      </p>
      <p className="lg:text-[20px] text-xs  text-center absolute left-1/2 -translate-x-1/2 md:text-[14px] lg:top-3/14 top-1/20 leading-[120%] w-full md:top-3/16 md:px-18 px-12 md:max-w-7xl">
        Our families are excited that you are able to join us in celebrating
        <br />
        what we hope will be one of the happiest days of our lives.
      </p>
      <div className="flex justify-between w-full max-w-3xl md:top-4/14 top-5/20 absolute left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 md:max-w-xs mx-auto">
          <a href="https://www.instagram.com/theinvitearc/" target="_blank"><img src="/assets/instagram_be.png" alt="" className="h-10 w-10" /></a>
          <p className="lg:text-[20px] text-[18px]  text-center font-cormorant-upright">
            © <a href="https://invitearc.com/" target="_blank">InviteArc</a> 2026</p>
        </div>
      </div>

      <Image
        src="/assets/endCouple.png"
        alt="wedding-photo"
        width={1920}
        height={1080}
        className="object-cover lg:h-[60%] scale-x-[-1] w-full absolute -bottom-5  md:h-[45%] "
      />
    </div>
  );
};
export default EndDetails;
