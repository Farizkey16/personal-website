
interface Work_array{
    role: string,
    company: string,
    year: string,
    responsibility: string,
    image?: string
    

}


export const work_experience: Work_array[] = [
    {
        role: "Project Manager",
        company: "Alterra Academy",
        year: "2023 - 2025",
        responsibility: `
        Mostly responsible for the company's B2G and CSR projects, with the notable ones are Kartu Prakerja and Kampus Merdeka.
        Also the Project Coordinator for Alterra Academy x UNHCR project (IDR 771 million in value), training 75 refugees for Digital Skills.
        `
    },
    {
        role: "Product Manager",
        company: "Alterra Academy",
        year: "2022 - 2023",
        responsibility: `
        Responsible for the company's B2C alternatives, the product's profit & loss, exporing new vertical business opportunities,
        and also the scalability of existing product.`
    },
    {
        role: "Placement & Career Services Senior Officer",
        company: "Alterra Academy",
        year: "2021 - 2022",
        responsibility: `
        Responsible for helping graduates from the bootcamp to secure jobs. Establish and improve the placement system, and handle problems from the graduates.
        Helped 10+ graduates secure jobs as Software Engineer in major tech companies (Tokopedia, Shipper, Amartha), improve placement speed from 56 days to 37 days
        `
    },
    {
        role: "Recruitment Lead",
        company: "KTalents Asia",
        year: "2016 - 2021",
        responsibility: `
        Assisting clients in finding the right and suitable talents fof their needs in a timely manner. Recruited candidates from Staff to Director level.
        Generated around IDR 600+ million in revenue.
        `    
    }
]