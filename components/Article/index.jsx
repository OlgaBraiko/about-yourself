import React from "react";
import cl from "classnames";
import styles from "./index.module.scss";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Article = ({ className, children, backUrl }) => {
  return (
    <article className={cl(className, styles.article)}>
      <Link href={backUrl}>
        <a className={styles.back}>
          <AiOutlineArrowLeft />
        </a>
      </Link>

      <div className={styles.content}>{children}</div>
    </article>
  );
};
export default Article;
