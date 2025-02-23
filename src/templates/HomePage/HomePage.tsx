import styles from "./HomePage.module.scss";
import React from "react";
import { Card } from "../Card/Card";
import Image from "next/image";
import InfoTag from "@/components/InfoTag/InfoTag";

export const HomePage = () => {
  return (
    <div className={styles.main}>
      <Card className="">
        {/* Profile Picture */}
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <Image src={"/Ahmed.webp"} alt="" width={96} height={96} />
          </div>

          {/* Information Container */}
          <div className={styles.informationContainer}>
            <h1>Ahmed Oublihi</h1>
            <p className={styles.subText}>@medevs</p>
            <Card className={styles.innerCard}>
              <p className={styles.para}>
                Hey there, I'm Ahmed, a Software Developer based in Bremen,
                Germany. I dive deep into JavaScript and love crafting sleek,
                efficient web apps. With an eye for detail and a hunger for
                learning,. I'm all about delivering high-quality solutions that
                meet both user needs and business objectives. <br /> <br />
                AI? Oh, that's my jam. I geek out on building software that taps
                into AI magic.
              </p>
            </Card>
          </div>
        </div>
      </Card>
      <Card className={styles.githubCard}>
        <h2 className={styles.githubText}>GitHub Stats</h2>
        <div className={styles.stats}>
          <InfoTag image="/bookmark.svg" number={55} text="Repositories" />
          <InfoTag image="/starsempty.svg" number={55} text="Repositories" />
          <InfoTag image="/users.svg" number={55} text="Repositories" />
          <InfoTag image="/user-plus.svg" number={55} text="Repositories" />
        </div>
      </Card>
    </div>
  );
};
