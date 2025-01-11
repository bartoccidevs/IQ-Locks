import Image from "next/image";

export default function CustomImage(props) {
    return (
        <div className="flex justify-center">
            <Image height={50} width={50} {...props}/>
        </div>
    )
}