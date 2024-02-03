import { AiOutlineHeart } from "react-icons/ai";

import React from 'react'

type Props = {
    className?: string,
}


export default function HeartIcon({className } : Props) {
    return (
        <AiOutlineHeart className={className || "w-7 h-7"} />
    )
}
