export const spanishData = [
  {
    introducción: {
      whoAmI: 'Hola! Soy David',
      job: 'Desarrollador Web Full Stack',
      scrollDown: 'Ve hacia abajo para ver más'
    }
  },
  {
    presentación: {
      command: './sobre_mi.sh',
      title: '🙋🏻‍♂️ Sobre mi',
      availability: 'Actualmente empleado',
      content: [
        '🧑🏻‍💻 Me llamo David, soy un Desarrollador Web Full Stack con más de 3 años de experiencia.',
        '🚀 Comencé a programar tras terminar el instituto, ya que siempre supe que este mundillo era para mí. Desde entonces, he estado inmerso en un constante proceso de aprendizaje y mejora, lo que ha hecho que cada día me enfrente a nuevos desafíos que han moldeado el profesional en el que considero me he convertido hasta el día de hoy.',
        '🔝 Aunque gran parte de mi tiempo lo dedico a mi trabajo diario, siempre encuentro espacio para crear algo nuevo en mi tiempo libre. Estoy muy orgulloso de lo que he logrado hasta ahora, pero lo que realmente me emociona son las oportunidades que el futuro tiene reservadas. ¡Estoy ansioso por ampliar este portafolio con más proyectos y éxitos!',
        '😀 ¡Muchas gracias por visitar mi sitio web y por ser parte de mi viaje de crecimiento y desarrollo profesional!'
      ],
      profileCard: {
        imagePath: 'images/david.webp',
        socialLinks: [
          {
            name: 'LinkedIn',
            icon: 'linkedin',
            url: 'https://www.linkedin.com/in/davidsimon98/'
          },
          {
            name: 'GitHub',
            icon: 'github',
            url: 'https://github.com/DeibidSE'
          },
          {
            name: 'davidsimon98@outlook.com',
            icon: 'envelope',
            url: 'mailto:davidsimon98@outlook.com'
          }
        ]
      },
      cv: {
        label: 'Consigue mi Curriculum Vitae',
        message: '¡Gracias por tu interés en mi CV! Por favor, no dudes en contactarme para recibir una copia actualizada.',
        closeMsg: '(Haz click en cualquier sitio para cerrarme)'
      }
    }
  },
  {
    proyectos: {
      'Mi trabajo diario': {
        image: 'images/verify.webp',
        description: 'Aquí dedico la mayor parte de mi tiempo a la programación, concentrándome en proyectos web relacionados con requisitos KYC en el sector financiero. Aunque la confidencialidad me impide compartir detalles específicos, mi contribución abarca una variedad de productos desarrollados con diferentes tecnologías.  He contribuido tanto en el frontend como en el backend, participando en proyectos diversos y variados',
        technologies: [
          {
            name: 'Laravel',
            url: 'https://laravel.com/'
          },
          {
            name: 'Vue',
            url: 'https://vuejs.org/'
          },
          {
            name: 'JavaScript',
            url: 'https://developer.mozilla.org/es/docs/Web/JavaScript'
          },
          {
            name: 'TypeScript',
            url: 'https://www.typescriptlang.org/'
          },
          {
            name: 'CSS',
            url: 'https://developer.mozilla.org/es/docs/Web/CSS'
          },
          {
            name: 'Sass',
            url: 'https://sass-lang.com/'
          },
          {
            name: 'Tailwind CSS',
            url: 'https://tailwindcss.com/'
          },
          {
            name: 'MySQL',
            url: 'https://www.mysql.com/'
          },
          {
            name: 'PostgreSQL',
            url: 'https://www.postgresql.org/'
          },
          {
            name: 'Docker',
            url: 'https://www.docker.com/'
          },
          {
            name: 'Vagrant',
            url: 'https://www.vagrantup.com/'
          }
        ]
      },
      'Clon de spotify': {
        image: 'images/spotify-clone.webp',
        description: 'Este proyecto se enfoca en recrear de manera precisa la interfaz web de Spotify, proporcionando a los usuarios la capacidad de reproducir música, buscar y explorar listas de reproducción. Con un énfasis en la fidelidad visual y funcional, este clon me ha permitido explorar y desarrollar tanto nuevas funcionalidades como aquellas ya conocidas.',
        url: 'https://github.com/DeibidSE/spotify-clone',
        technologies: [
          {
            name: 'Nuxt',
            url: 'https://nuxt.com/'
          },
          {
            name: 'Pinia',
            url: 'https://pinia.vuejs.org/'
          },
          {
            name: 'TypeScript',
            url: 'https://www.typescriptlang.org/'
          },
          {
            name: 'Tailwind CSS',
            url: 'https://tailwindcss.com/'
          }
        ]
      },
      '???': {
        text: 'En construcción',
        description: 'Formando equipo con un amigo para nuestro primer proyecto juntos, buscábamos crear algo interesante, quizás hasta útil para empresas. Optamos por Node en el backend y Astro, uno de los frameworks de JavaScript más rápidos, en el frontend. Ambos son totalmente nuevos para nosotros, lo que lo convierte también en una experiencia de aprendizaje. Nuestro proyecto no solo es rápido; es modular, diseñado para ensamblarse sin problemas. Estamos comenzando con un módulo principal como base, centrándonos en la flexibilidad. ¿El plan? Agregar nuevos módulos en función de las necesidades.',
        technologies: [
          {
            name: 'Node.js',
            url: 'https://nodejs.org/'
          },
          {
            name: 'Express',
            url: 'https://expressjs.com/'
          },
          {
            name: 'MySQL',
            url: 'https://www.mysql.com/'
          },
          {
            name: 'Astro',
            url: 'https://astro.build/'
          },
          {
            name: 'Vue',
            url: 'https://vuejs.org/'
          },
          {
            name: 'Tailwind CSS',
            url: 'https://tailwindcss.com/'
          }
        ]
      }
    }
  },
  {
    'trabajos y estudios': {
      '/trabajos': [
        {
          title: 'Desarrollador Web Full Stack en Simple KYC',
          startDate: 'Febrero 2021',
          endDate: 'Presente',
          location: 'Remoto',
          description: 'Este es mi trabajo actual, donde he aprendido una amplia gama de habilidades y tecnologías aplicadas al desarrollo web',
          details: [
            'Desarrollo y mantenimiento de aplicaciones web para los principales clientes bancarios en Australia utilizando principalmente Laravel y PHP.',
            'Desarrollo front-end con Vue.js, Tailwind CSS y otras tecnologías como jQuery o JavaScript para una experiencia de usuario óptima.',
            'Manejo de base de datos MySQL y PostgreSQL.',
            'Dockerización de entornos de desarrollo.',
            'Creación de API REST y automatización de procesos.',
            'Creación de Informes avanzados.',
            'Uso de metodologías ágiles y desarrollo scrum.',
            'Colaboración en equipos utilizando Git para control de versiones.',
            'Resolución proactiva de incidencias y problemas técnicos.'
          ],
          website: 'https://www.simplekyc.com/'
        },
        {
          title: 'Dominama Análisis Tecnológicos S.L.',
          startDate: 'Octubre 2020',
          endDate: 'Diciembre 2020',
          location: 'Remoto',
          description: 'Mi primera toma de contacto con el mundo laboral, aquí completé las prácticas de 3 meses de duración ofrecidas por el grado superior. Por desgracia, debido a la pandemia de COVID-19, estas prácticas tuvieron que realizarse de manera 100% remota.',
          website: 'http://www.dominama.es/'
        }
      ],
      '/estudios': [
        {
          title: 'Técnico superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
          startDate: 'Septiembre 2018',
          endDate: 'Junio 2020',
          location: 'Madrid',
          description: 'Aquí empecé mis estudios de programación: Java, Python, SQL, Linux... un mundo de aprendizaje y crecimiento junto a dedicados profesores y compañeros. Estos años sin duda marcaron una época inolvidable en mi camino educativo.'
        },
        {
          title: 'Bachillerato tecnológico',
          startDate: 2014,
          endDate: 2018,
          location: 'Madrid',
          description: 'Durante este periodo completé el bachillerato de la rama de ciencias, centrado principalmente en asignaturas como matemáticas, química y biología, etc...'
        }
      ],
      '/estudios adicionales': [
        {
          title: 'English Empire College',
          startDate: 2022,
          endDate: 2023,
          location: 'Remoto',
          description: 'Como parte de mi desarrollo profesional, la empresa para la que trabajo nos pagaba clases de inglés enfocadas a mejorar nuestros conocimientos de esta lengua.'
        },
        {
          title: 'Clases de conducir',
          startDate: 2018,
          endDate: 2019,
          location: 'Madrid',
          description: 'Completé las clases de conducir y obtuve el permiso de conducir de clase B'
        },
        {
          title: 'Lingua Generation',
          startDate: 2010,
          endDate: 2020,
          location: 'Madrid',
          description: 'Una academia de inglés con profesores nativos'
        }
      ]
    }
  },
  {
    habilidades: {
      '/frontend': [
        {
          name: 'Vue.js',
          image: 'logos/Vue',
          progress: 80
        },
        {
          name: 'Nuxt',
          image: 'logos/Nuxt',
          progress: 75
        },
        {
          name: 'TypeScript',
          image: 'logos/TypeScript',
          progress: 80
        },
        {
          name: 'JavaScript',
          image: 'logos/JavaScript',
          progress: 80
        },
        {
          name: 'HTML 5',
          image: 'logos/HTML',
          progress: 95
        },
        {
          name: 'CSS',
          image: 'logos/CSS',
          progress: 70
        },
        {
          name: 'Sass',
          image: 'logos/Sass',
          progress: 70
        },
        {
          name: 'Tailwind CSS',
          image: 'logos/Tailwind CSS',
          progress: 90
        }
      ],
      '/backend': [
        {
          name: 'Laravel',
          image: 'logos/Laravel',
          progress: 85
        },
        {
          name: 'PHP',
          image: 'logos/PHP',
          progress: 85
        },
        {
          name: 'MySQL',
          image: 'logos/MySQL',
          progress: 80
        },
        {
          name: 'PostgreSQL',
          image: 'logos/PostgreSQL',
          progress: 70
        },
        {
          name: 'Node.js',
          image: 'logos/Node.js',
          progress: 40
        },
        {
          name: 'Express',
          image: 'logos/Express',
          progress: 40
        },
        {
          name: 'Java',
          image: 'logos/Java',
          progress: 35
        },
        {
          name: 'Python',
          image: 'logos/Python',
          progress: 20
        }
      ],
      '/herramientas': [
        {
          name: 'Visual Studio Code',
          image: 'logos/VS Code',
          progress: 100
        },
        {
          name: 'Docker',
          image: 'logos/Docker',
          progress: 80
        },
        {
          name: 'Vagrant',
          image: 'logos/Vagrant',
          progress: 90
        },
        {
          name: 'Laragon',
          image: 'logos/Laragon',
          progress: 95
        },
        {
          name: 'Android Studio',
          image: 'logos/Android Studio',
          progress: 35
        }
      ]
    }
  },
  {
    others: {
      backToTopButton: {
        message: 'Volver Arriba'
      },
      alertCompatibility: {
        message: 'Tu navegador o la versión que estás utilizando parece ser incompatible con las animaciones incluidas en este portafolio. Como resultado, experimentarás la versión estática del sitio, sin animaciones ni transiciones durante el desplazamiento.',
        link: {
          label: 'Haz clic aquí para más información',
          url: 'https://caniuse.com/?search=animation-timeline'
        }
      },
      alertSkills: {
        message: 'Estas barras representan mi nivel subjetivo con las diferentes tecnologías: rojo (menos dominio) a verde (más dominio). Sirven un poco para reflejar mi experiencia y la facilidad con la que utilizo cada tecnología.'
      }
    }
  }
]

export const englishData = [
  {
    introduction: {
      whoAmI: "Hi there! I'm David",
      job: 'Full Stack Web Developer',
      scrollDown: 'Scroll down to see more'
    }
  },
  {
    presentation: {
      command: './about_me.sh',
      title: '🙋🏻‍♂️ About me',
      availability: 'Currently Employed',
      content: [
        '🧑🏻‍💻 My name is David, I am a Full Stack Web Developer with over 3 years of experience.',
        '🚀 I started programming after finishing high school, as I always knew this field was for me. Since then, I have been immersed in a constant process of learning and improvement, which has led me to face new challenges every day that have shaped the professional I consider myself to be today.',
        '🔝 Although a large part of my time is dedicated to my daily work, I always find space to create something new in my free time. I am very proud of what I have achieved so far, but what really excites me are the opportunities that the future holds. I am eager to expand this portfolio with more projects and successes!',
        '😀 Thank you very much for visiting my website and for being part of my journey of growth and professional development!'
      ],
      profileCard: {
        imagePath: 'images/david.webp',
        socialLinks: [
          {
            name: 'LinkedIn',
            icon: 'linkedin',
            url: 'https://www.linkedin.com/in/davidsimon98/'
          },
          {
            name: 'GitHub',
            icon: 'github',
            url: 'https://github.com/DeibidSE'
          },
          {
            name: 'davidsimon98@outlook.com',
            icon: 'envelope',
            url: 'mailto:davidsimon98@outlook.com'
          }
        ]
      },
      cv: {
        label: 'Get my Curriculum Vitae',
        message: 'Thank you for your interest in my CV! Please feel free to contact me for an updated copy.',
        closeMsg: '(Click anywhere to close me)'
      }
    }
  },
  {
    projects: {
      'My daily Job': {
        image: 'images/verify.webp',
        description: "Here I dedicate most of my time to programming, focusing on web projects related to KYC requirements in the financial sector. Although confidentiality prevents me from sharing specific details, my contribution encompasses a variety of products developed with different technologies. I've worked on both frontend and backend, engaging with various and diverse projects.",
        technologies: [
          {
            name: 'Laravel',
            url: 'https://laravel.com/'
          },
          {
            name: 'Vue',
            url: 'https://vuejs.org/'
          },
          {
            name: 'JavaScript',
            url: 'https://developer.mozilla.org/es/docs/Web/JavaScript'
          },
          {
            name: 'TypeScript',
            url: 'https://www.typescriptlang.org/'
          },
          {
            name: 'CSS',
            url: 'https://developer.mozilla.org/es/docs/Web/CSS'
          },
          {
            name: 'Sass',
            url: 'https://sass-lang.com/'
          },
          {
            name: 'Tailwind CSS',
            url: 'https://tailwindcss.com/'
          },
          {
            name: 'MySQL',
            url: 'https://www.mysql.com/'
          },
          {
            name: 'PostgreSQL',
            url: 'https://www.postgresql.org/'
          },
          {
            name: 'Docker',
            url: 'https://www.docker.com/'
          },
          {
            name: 'Vagrant',
            url: 'https://www.vagrantup.com/'
          }
        ]
      },
      'Spotify Clone': {
        image: 'images/spotify-clone.webp',
        description: 'This project focuses on faithfully replicating the Spotify web interface, providing users with the ability to play music, search, and explore playlists. With an emphasis on visual and functional fidelity, this clone has allowed me to explore and develop both new features and familiar ones.',
        url: 'https://github.com/DeibidSE/spotify-clone',
        technologies: [
          {
            name: 'Nuxt',
            url: 'https://nuxt.com/'
          },
          {
            name: 'Pinia',
            url: 'https://pinia.vuejs.org/'
          },
          {
            name: 'TypeScript',
            url: 'https://www.typescriptlang.org/'
          },
          {
            name: 'Tailwind CSS',
            url: 'https://tailwindcss.com/'
          }
        ]
      },
      '???': {
        text: 'Under Construction',
        description: "Teaming up with a friend for our first project together, we wanted to build something interesting, maybe even useful for businesses. We chose Node for the backend and Astro, one of the fastest JavaScript frameworks, for the frontend. Both are completely new to us, so it has been a learning experience. Our project isn't just fast, it's modular, designed for seamless integration. We are starting with a core module as our foundation, with a focus on flexibility. The plan? Add new modules as needed",
        technologies: [
          {
            name: 'Node.js',
            url: 'https://nodejs.org/'
          },
          {
            name: 'Express',
            url: 'https://expressjs.com/'
          },
          {
            name: 'MySQL',
            url: 'https://www.mysql.com/'
          },
          {
            name: 'Astro',
            url: 'https://astro.build/'
          },
          {
            name: 'Vue',
            url: 'https://vuejs.org/'
          },
          {
            name: 'Tailwind CSS',
            url: 'https://tailwindcss.com/'
          }
        ]
      }
    }
  },
  {
    'jobs and studies': {
      '/jobs': [
        {
          title: 'Full Stack Web Developer at Simple KYC',
          startDate: 'February 2021',
          endDate: 'Present',
          location: 'Remote',
          description: 'This is my current job where I have learned a wide range of web development skills and technologies.',
          details: [
            'Development and maintenance of web applications for leading banking clients in Australia primarily using Laravel and PHP.',
            'Front-end development with Vue.js, Tailwind CSS, and other technologies such as jQuery or JavaScript for an optimal user experience.',
            'Management of MySQL and PostgreSQL databases.',
            'Dockerization of development environments.',
            'Creation of REST APIs and process automation.',
            'Creation of advanced reports.',
            'Utilization of agile methodologies and scrum development.',
            'Collaboration in teams using Git for version control.',
            'Proactive resolution of incidents and technical issues.'
          ],
          website: 'https://www.simplekyc.com/'
        },
        {
          title: 'Dominama Análisis Tecnológicos S.L.',
          startDate: 'October 2020',
          endDate: 'December 2020',
          location: 'Remote',
          description: 'My first contact with the working world, here I completed the 3-month internship required by the superior degree. Unfortunately, due to the COVID-19 pandemic, these internships had to be done 100% remotely.',
          website: 'http://www.dominama.es/'
        }
      ],
      '/studies': [
        {
          title: 'Superior Degree in Multi-Platform Applications Development',
          startDate: 'September 2018',
          endDate: 'June 2020',
          location: 'Madrid',
          description: 'Here I began my programming studies: Java, Python, SQL, Linux... a world of learning and growth with dedicated teachers and colleagues. These years undoubtedly marked an unforgettable time in my educational journey.'
        },
        {
          title: 'Technological Bachillerato',
          startDate: 2014,
          endDate: 2018,
          location: 'Madrid',
          description: 'In Spain, we have what is referred to as Bachillerato, an educational phase following secondary school that acts as a transition to higher education. This stage prepares students for university studies and vocational avenues alike. Personally, I specialized in the science track, which primarily focuses on subjects like mathematics, chemistry, biology, and more.'
        }
      ],
      '/additional studies': [
        {
          title: 'English Empire College',
          startDate: 2022,
          endDate: 2023,
          location: 'Remote',
          description: 'As part of my professional development, the company I work for paid us English classes focused on improving our English language skills.'
        },
        {
          title: 'Driving lessons',
          startDate: 2018,
          endDate: 2019,
          location: 'Madrid',
          description: "I completed driving lessons and obtained my class B driver's license"
        },
        {
          title: 'Lingua Generation',
          startDate: 2010,
          endDate: 2020,
          location: 'Madrid',
          description: 'An English academy with native teachers'
        }
      ]
    }
  },
  {
    skills: {
      '/frontend': [
        {
          name: 'Vue.js',
          image: 'logos/Vue',
          progress: 80
        },
        {
          name: 'Nuxt',
          image: 'logos/Nuxt',
          progress: 75
        },
        {
          name: 'TypeScript',
          image: 'logos/TypeScript',
          progress: 80
        },
        {
          name: 'JavaScript',
          image: 'logos/JavaScript',
          progress: 80
        },
        {
          name: 'HTML 5',
          image: 'logos/HTML',
          progress: 95
        },
        {
          name: 'CSS',
          image: 'logos/CSS',
          progress: 70
        },
        {
          name: 'Sass',
          image: 'logos/Sass',
          progress: 70
        },
        {
          name: 'Tailwind CSS',
          image: 'logos/Tailwind CSS',
          progress: 90
        }
      ],
      '/backend': [
        {
          name: 'Laravel',
          image: 'logos/Laravel',
          progress: 85
        },
        {
          name: 'PHP',
          image: 'logos/PHP',
          progress: 85
        },
        {
          name: 'MySQL',
          image: 'logos/MySQL',
          progress: 80
        },
        {
          name: 'PostgreSQL',
          image: 'logos/PostgreSQL',
          progress: 70
        },
        {
          name: 'Node.js',
          image: 'logos/Node.js',
          progress: 40
        },
        {
          name: 'Express',
          image: 'logos/Express',
          progress: 40
        },
        {
          name: 'Java',
          image: 'logos/Java',
          progress: 35
        },
        {
          name: 'Python',
          image: 'logos/Python',
          progress: 20
        }
      ],
      '/tools': [
        {
          name: 'Visual Studio Code',
          image: 'logos/VS Code',
          progress: 100
        },
        {
          name: 'Docker',
          image: 'logos/Docker',
          progress: 80
        },
        {
          name: 'Vagrant',
          image: 'logos/Vagrant',
          progress: 90
        },
        {
          name: 'Laragon',
          image: 'logos/Laragon',
          progress: 95
        },
        {
          name: 'Android Studio',
          image: 'logos/Android Studio',
          progress: 35
        }
      ]
    }
  },
  {
    others: {
      backToTopButton: {
        message: 'Back to Top'
      },
      alertCompatibility: {
        message: 'This browser or browser version appears to be incompatible with the animations included in this portfolio. As a result, you will experience the static version of the site, without animations and transitions during scrolling.',
        link: {
          label: 'Click here for more information',
          url: 'https://caniuse.com/?search=animation-timeline'
        }
      },
      alertSkills: {
        message: 'These progress bars represent my subjective level with different technologies: red (lower mastery) to green (higher mastery). They kind of reflect my experience and how easily I use each technology.'
      }
    }
  }
]
