import ThemeSwitch from "@/components/ThemeSwitch"

export default function CopyrightSection() {
    return (
        <div className="copyright-section 
        border-theme-divider dark:border-theme-text-dark">
            <ThemeSwitch />
            <p className="text-center pt-4 pb-16 inline-padding text-1xl font-semibold">
                Copyright 2024, All rights reserved @ SomeLockSmith
            </p>
        </div>
    )
}