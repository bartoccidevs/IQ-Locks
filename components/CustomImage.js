import Image from "next/image";

export default function CustomImage(props) {
    return (
        <div className="relative">
            <Image height={50} width={50} {...props} loading="lazy"/>
        </div>
    )
}