import React from "react";
import styles from "./InfoTag.module.scss";
import Image from "next/image";

interface Props {
  image?: any;
  number: number;
  text: string;
}

const InfoTag: React.FC<Props> = ({ image, number, text }) => {
  return (
    <div className={styles.container}>
      {/* Logo here */}
      <Image src={image} width={20} height={20} alt="" />
      <p className={styles.number}>{number}</p>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default InfoTag;
