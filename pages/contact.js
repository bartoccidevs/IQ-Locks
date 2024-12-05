import Head from "next/head";
import RequestForm from "@/components/layout/RequestForm";
import CustomImage from "@/components/CustomImage";
import Link from "next/link";

export default function ContactPage() {
    return (
        <>
        <h1 className="text-4xl md:text-6xl font-bold py-4 pt-20 px-4 md:px-16 md:pb-4 bg-theme-dark text-theme-light">Contact Us</h1>
        <div className="main-page bg-theme-highlight md:pt-6 px-4 md:px-16">
            <Head>
                <title>The Locksmith | Contact Us</title>
                <meta name="description" content="A brief description of the page content." />
                <meta name="keywords" content="keyword1, keyword2, keyword3" />
                <meta property="og:title" content="The Locksmith | Contact Us" />
                <meta property="og:description" content="Contact the locksmith here!" />
                <meta property="og:image" content="/assets/photos/lock-picking.jpg" />
            </Head>
            <div className="grid md:grid-cols-2 pt-4 pb-4 md:pb-10 md:space-x-10">
                <div className="flex flex-col space-y-4 md:justify-between h-full">
                    <CustomImage src="/assets/photos/lock-picking.jpg" className="h-64 w-full object-cover rounded" alt="man picking lock"/>
                    <h2 className="text-4xl md:text-5xl font-bold text-theme-dark">Need To Contact a Locksmith?</h2>
                    <p className="text-2xl">Looking for a local locksmith? Whether you need help with an emergency lockout, key replacement or lock installation, our professional locksmiths are committed to providing you with great results and making sure. We're here to help:</p>
                    <div className="flex flex-col space-y-4 py-8">
                        <Link href="tel:1-917-572-0664" aria-label="Click to call the locksmith" className="max-w-fit">
                            <div className="flex space-x-4 items-center max-w-fit"> 
                                <div className="h-10 w-10">
                                    <CustomImage src="/assets/icons/phone.svg" className="h-full w-full" alt="phone icon"/>
                                </div>
                                <p className="text-2xl font-semibold text-theme-dark hover:underline">
                                1 (917)-572-0664
                                </p>
                            </div>
                        </Link>
                        <Link href="mailto: someemail@email.com" aria-label="Click to open an email to the locksmith" className="max-w-fit">
                            <div className="flex space-x-4 items-center max-w-fit"> 
                                <div className="h-10 w-10">
                                    <CustomImage src="/assets/icons/email.svg" className="h-full w-full" alt="email icon"/>
                                </div>
                                <p className="text-2xl font-semibold text-theme-dark hover:underline">
                                    someemail@email.com
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