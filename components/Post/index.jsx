import React from "react";
import Image from "next/image";
import Link from "next/link";
import cl from "classnames";
import { urlFor } from "../../lib/client";
import styles from "./index.module.scss";
import { Title } from "../Title";

export const Post = ({ className, image, title, description, slug }) => (
  <Link
    href={`/post/${encodeURIComponent(slug.current)}`}
    className={cl(className, styles.post)}>
    <a className={styles.link}>
      <Title type="small" className={styles.title}>
        {title}
      </Title>
      <div className={styles.content}>
        <div>
          <Image
            src={urlFor(image).url()}
            alt={image.caption}
            width="100"
            height="100"
          />
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </a>
  </Link>
);
