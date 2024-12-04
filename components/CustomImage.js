import Image from "next/image";

export default function CustomImage(props) {
    return (
        <div className="relative">
            <Image {...props} height={10} width={10} loading="lazy"/>
        </div>
    )
}