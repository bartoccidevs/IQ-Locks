import Image from "next/image";

export default function CustomImage({lcp=false, imgHeight, ...props}) {
    if (lcp) {
        return (
            <div className={`flex justify-center`}>
                <Image fill priority {...props}/>
            </div>
        )
    } else {
        return (
            <div className="flex justify-center">
                <Image height={50} width={50} {...props}/>
            </div>
        )
    }
}