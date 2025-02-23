import React from "react";
import styles from "./Card.module.scss";
import Image from "next/image";

interface Props {
  className?: string; // className will be passed from the parent component
  children?: React.ReactNode;
}

export const Card: React.FC<Props> = ({ className, children }) => {
  // We merge the default styles and the external className prop.
  const classes = className;
  return <div className={`${styles.container} ${classes} `}>{children} </div>;
};
