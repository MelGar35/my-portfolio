import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Github, Wrench, Blocks } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/MelGar35",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/melisa-garcía-8422053a/",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 4,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "#!",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Programación Backend",
        subtitle: "Coderhouse",
        description: "Desarrollo de aplicaciones modernas con Node.js y framework Express, aplicando técnicas de programación asincrónica en JavaScript del lado del servidor. Experiencia en el uso de bases de datos SQL y NoSQL, gestionando datos de manera eficiente y escalable. Diseño de aplicaciones backend robustas, rápidas y capaces de manejar grandes volúmenes de datos, con un enfoque en escalabilidad y procesos distribuidos. Dominio de técnicas de comunicación entre servicios y despliegue en diferentes plataformas web. Implementación de middleware, gestión de autenticación y autorización, y manejo efectivo de errores para garantizar la estabilidad y seguridad de las aplicaciones.",
        date: "Nov 2022 ",
    },
    {
        id: 2,
        title: "React Js",
        subtitle: "Coderhouse",
        description: "Desarrollo de aplicaciones web, utilizando Tailwind CSS para el diseño y estilos, y TypeScript para mejorar la seguridad del código y facilitar el desarrollo escalable. Creación de componentes reutilizables, manejo del estado con hooks y el uso de contextos para la gestión global del estado. Consumo de APIs REST, optimización del rendimiento mediante lazy loading y code splitting, así como en el uso de herramientas como React Router para la navegación y Redux para el manejo de estados más complejos.",
        date: "Sept 2022",
    },
    {
        id: 3,
        title: "JavaScript",
        subtitle: "Coderhouse",
        description: "Desarrollo de funcionalidades interactivas, manipulando el DOM y utilizando frameworks/librerías como React.js",
        date: "Jul 2022",
    },
    {
        id: 4,
        title: "Desarrollo Web",
        subtitle: "Coderhouse",
        description: "Fundamentos para la creación de sitios web basado en las mejores prácticas del diseño web responsive, trabajando con HTML (manejo de estructuras semánticas, accesibilidad, y optimización para SEO) y CSS (diseño responsivo, implementación de estilos avanzados con flexbox, grid y animaciones CSS)",
        date: "Abr 2022",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 10,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 20,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
];

export const serviceData = [
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario.",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades.",
    },
    {
        icon: <Computer />,
        title: "Backend",
        description: "Diseño y desarrollo de la parte “invisible” de tu aplicación o sitio web. Bases de datos. Seguridad y protección de datos. ",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas.",
    },
    {
        icon: <Wrench />,
        title: "Soporte",
        description: "Actualizaciones, mejoras y soluciones a problemas técnicos para garantizar el correcto funcionamiento de tu app.",
    },
    {
        icon: <Blocks />,
        title: "Integraciones",
        description: "Conexión de tu aplicación con servicios externos (sist. de pago, APIs de terceros,etc.) para ampliar sus funcionalidades.",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "https://github.com/MelGar35",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];