import Head from "next/head";
import RequestForm from "@/components/layout/RequestForm";
import CustomImage from "@/components/CustomImage";
import CustomSvg from "@/components/CustomSvg";
import Link from "next/link";

import siteData from "@/data/site-identity";

export default function ContactPage() {
    return (
        <>
        <h1 className="text-4xl md:text-6xl font-bold py-4 pt-24 px-4 md:px-16 md:pb-4 bg-theme-primary text-theme-text-contrast">Contact Us</h1>
        <div className="main-page bg-theme-background md:pt-6 px-4 md:px-16">
            <Head>
                <title>{siteData.name} | Contact Us</title>
                <meta name="description" content="A brief description of the page content." />
                <meta name="keywords" content="keyword1, keyword2, keyword3" />
                <meta property="og:title" content={`${siteData.name} | Contact Us`} />
                <meta property="og:description" content="Contact the locksmith here!" />
                <meta property="og:image" content="/assets/icons/IQLocks-original.jpeg" />
            </Head>
            <div className="grid md:grid-cols-2 pt-4 pb-4 md:pb-10 md:space-x-10">
                <div className="flex flex-col space-y-4 md:justify-between h-full">
                    <CustomImage height={150} width={300}
                    src="/assets/photos/lock-picking.jpg" 
                    className="h-64 w-full object-cover rounded" 
                    alt="man picking lock"/>
                    <h2 className="text-4xl md:text-5xl font-bold text-theme-primary">Need To Contact a Locksmith?</h2>
                    <p className="text-2xl">Looking for a local locksmith? Whether you need help with an emergency lockout, key replacement or lock installation, our professional locksmiths are committed to providing you with great results and making sure. We're here to help:</p>
                    <div className="flex flex-col space-y-4 py-8">
                        <Link href={`tel:${siteData.phone}`} aria-label="Click to call the locksmith" className="max-w-fit">
                            <div className="flex space-x-4 items-center max-w-fit"> 
                                <div className="h-10 w-10">
                                    <CustomSvg src="/assets/icons/phone.svg" className="h-full w-full svg-secondary" alt="phone icon"/>
                                </div>
                                <p className="text-2xl font-semibold text-theme-primary hover:underline">
                                {siteData.phone}
                                </p>
                            </div>
                        </Link>
                        <Link href={`mailto: ${siteData.email}`} aria-label="Click to open an email to the locksmith" className="max-w-fit">
                            <div className="flex space-x-4 items-center max-w-fit"> 
                                <div className="h-10 w-10">
                                    <CustomSvg src="/assets/icons/email.svg" className="h-full w-full svg-secondary" alt="email icon"/>
                                </div>
                                <p className="text-2xl font-semibold text-theme-primary hover:underline">
                                    {siteData.email}
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="h-full py-6 md:py-0">
                    <RequestForm />
                </div>
            </div>
        </div>
        </>
    )
}