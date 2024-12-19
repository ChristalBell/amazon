import React from "react";
import Image from "next/image";
import Link from "next/link";
import { COLORS } from "@/styles/colors";
const PrimeCard = () => {
  return (
    <div>
      <Image alt="logo" src="/prime-logo.png" height={160} width={100} />
      <p>
        <b>
          Enjoy fast, free delivery, exclusive deals, and award-wining moves &
          TV shows with Prime.
        </b>
      </p>

      <p>
        <Link
          href="/"
          style={{
            color: COLORS.teal,
            textDecoration: "none",
            marginRight: ".25rem",
          }}
        >
          Try Prime
        </Link>
        and start saving today with <b>fast, free delivery</b>
      </p>
    </div>
  );
};

export default PrimeCard;
