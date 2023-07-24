'use client'

import { FC } from "react"
import Image from "next/image";
import styles from "./avatar.module.css"


interface AvatarProps {}

const Avatar: FC<AvatarProps> = ({}) => {
    return (
        <div className={styles.avatar}>
            <Image src="/my-photo.png" width={600} height={600} alt="Artem Yeryshev Photo" />
        </div>
    );
}

export default Avatar