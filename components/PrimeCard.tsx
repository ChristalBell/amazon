import React from "react";
import Image from "next/image";
import Link from "next/link";
const PrimeCard = () => {
  return (
    <div>
      <Image
        alt="logo"
        src="/../../../prime-logo.png"
        width={100}
        height={30}
      />
      <p>
        <b>
          Enjoy fast, free delivery, exclusive deals, and award-wining moves &
          TV shows with Prime.
        </b>
      </p>

      <p>
        <Link href="/">Try Prime</Link>
        and start saving today with <b>fast, free delivery</b>
      </p>
    </div>
  );
};

export default PrimeCard;
