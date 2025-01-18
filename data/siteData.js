export const siteCore = {
    name: 'IQ Locks',
    logo: '/assets/icons/logo.svg',
    domain: 'iqlocksnyc.com',
    URL: 'https://www.iqlocksnyc.com',
    email: 'iqlocks22@gmail.com',
    phone: '1-917-572-0664',
}

export const services = [
    {
        title: "Residential",
        description: "",
        img: "/assets/photos/services/residential-lock.jpg",
        imgAlt: "Residential lock",
        slug: 'residential-locksmith'
    },
    {
        title: "Commerical",
        description: "",
        img: "/assets/photos/services/commercial-lock.jpg",
        imgAlt: "Commercial lock",
        slug: 'commercial-locksmith'
    },
    {
        title: "Car & Auto",
        description: "",
        img: "/assets/photos/services/car-lockout.jpg",
        imgAlt: "Car & Auto lockout",
        slug: 'car-and-auto-locksmith'
    },
    {
        title: "Keys",
        description: "",
        img: "/assets/photos/services/keys.jpg",
        imgAlt: "Locksmith keys",
        slug: 'key-making-locksmith'
    },
    {
        title: "24/7 Locksmith",
        description: "",
        img: "/assets/photos/services/emergency-lock.jpg",
        imgAlt: "24/7 Emergency lockout",
        slug: 'emergency-locksmith'
    },
]

export const brands = [
    {
        name: 'Adams Rite',
    },
    {
        name: 'Allegion',
    },
    {
        name: 'Arrow',
    },
    {
        name: 'Assa Alboy',
    },
    {
        name: 'Baldwin',
    },
    {
        name: 'Corbin Russwin',
    },
    {
        name: 'Emtek',
    },
    {
        name: 'Falcon',
    },
    {
        name: 'Kaba',
    },
    {
        name: 'Kwikset',
    },
    {
        name: 'Latch',
    },
    {
        name: 'Mark USA',
    },
    {
        name: 'Medeco',
    },
    {
        name: 'Mul T Lock',
    },
    {
        name: 'Sargent',
    },
    {
        name: 'Schlage',
    },
    {
        name: 'Von Duprin',
    },
    {
        name: 'Yale',
    },
]

brands.forEach(brand => {
    if (!brand.imgAlt) {
        brand.imgAlt = `${brand.name} logo`;
    }
    let slug = `${brand.name.replace(/ /g, "-").toLowerCase()}`
    if (!brand.slug) {
        brand.slug = `${slug}`
    }
    if (!brand.img) {
        brand.img = `/assets/icons/brands/${slug}-brand-logo.jpg`
    }
})