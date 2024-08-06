let id = 0;

const categories = {
    motherBoard     : 'Placas Madre',
    graphicCard     : 'Tarjetas Gráficas',
    procesors       : 'Procesadores & Accesorios',
    storage         : 'Almacenamiento',
    case            : 'Case & Fuentes',
    ramMemories     : 'Memorias Ram'
}


const brands = {

    motherBoard : {
        intel   : 'Placa Madre INTEL',
        amd     : 'Placa Madre AMD',
    },

    msi : '',
    asus: '',

    amdRadeon       : 'AMD Radeon',
    nvidiaGforceRtx : 'Nvidia Geforce Rtx',
    nvidaGforce     : 'Nvidia Geforce',
    nvidaQuadro     : 'Nvidia Quadro',
    
    procesorIntel   : 'Procesadores INTEL',
    procesorAMD     : '',

    storage: {
        ssd : 'SSD 2.5" Sata',
        ssdM: 'SSD M.2 2280 Pcie',
        hdd : 'HDD',
        hddLaptop: 'Disco Duro para Laptop',
        hddExternal: 'Disco Duro Externo',
    },

    case : {
        withFount: 'Case con Fuente',
        withoutFount: 'Case sin Fuente',
        fount: 'Fuentes de poder'
    }
}

class Article {
    constructor({
        name, category,brand,
        price, images,
        details='',features
    }){
        this.name = name;
        this.category = category;
        this.price = (price).toFixed(2);
        this.details = details;
        this.images = images;
        this.brand = brand;
        this.features = features;
        this.id = id++;
    }
}

const data = [

    new Article({
        name:'RADEON RX 7800 XT CORE EDITION 16GB GDDR6 256BITS',
        category: categories.graphicCard,
        brand: brands.amdRadeon,
        price: 350.00,
        images: [
            'https://th.bing.com/th/id/OIP.pKFV6rZzKt1gjqWb4tC-ywHaHS?rs=1&pid=ImgDetMain',
            'https://th.bing.com/th/id/OIP.Arp0KmlnVOSVwo7eJopYUgHaFD?rs=1&pid=ImgDetMain',
            'https://th.bing.com/th/id/OIP.qlhs6QnENxdx4xxkdOuTcgHaHa?rs=1&pid=ImgDetMain',
            'https://cdn.prod.website-files.com/5d1911406ad3cbdb9924a753/64ecdbc5ddca448853a20cba_78XT%20QICK%20p4.jpg'
        ],
        features : [
            {
                name : 'GAME CLOCK, UP TO',
                value: '2124 MHz'
            },
            {
                name : 'BOOST CLOCK, UP TO',
                value: '2430 MHz'
            },
            {
                name : 'GDDR6 MEMORY SIZE',
                value: '16 GB'
            },
            {
                name: 'MEMORY CLOCK SPEED',
                value: '19.5 GBPS'
            }
        ],
        details: 'Boost Clock" es la frecuencia máxima que se puede lograr en la GPU que ejecuta una carga de trabajo en ráfagas. La capacidad de logro, la frecuencia y la sostenibilidad del reloj de Boost variarán en función de varios factores, entre los que se incluyen: las condiciones térmicas y la variación en las aplicaciones y las cargas de trabajo.'
    }),

    new Article({
        name: 'AMD Radeon RX 7900GRE Magnetic Air Gaming Graphics Card Arctic White',
        category: categories.graphicCard,
        brand: brands.amdRadeon,
        price: 350.00,
        images: [
            'https://cdn.prod.website-files.com/5d1911406ad3cbdb9924a753/66901176e1b3987cd2f5b786_79GMAIRW9_boxv2-p-1080.jpg',
            'https://cdn.prod.website-files.com/5d1911406ad3cbdb9924a753/666b214118f2db868ec929a7_W-1-p-1080.jpg',
            'https://cdn.prod.website-files.com/5d1911406ad3cbdb9924a753/666b21509504aa63e6e480cd_W-7-p-1080.jpg',
            'https://cdn.prod.website-files.com/5d1911406ad3cbdb9924a753/666b215b05818a46a965c84e_W-4-p-500.jpg'
        ],
        features: [
            {
                name : 'GAME CLOCK, UP TO',
                value: '2052 MHz'
            },
            {
                name : 'BOOST CLOCK, UP TO',
                value: '2395 MHz'
            },
            {
                name : 'GDDR6 MEMORY SIZE',
                value: '16 GB'
            },
            {
                name : 'MEMORY CLOCK SPEED',
                value: '18 GBPS'
            },
        ],
        
        details: 'Experimenta un rendimiento, imágenes y eficiencia increíbles al jugar y transmitir con la tarjeta gráfica AMD Radeon™ RX 7900 GRE, impulsada por la arquitectura AMD RDNA™ 3.'
    }),

    new Article({
        name: 'Radeon™ RX 7700 XT Black Edition',
        category: categories.graphicCard,
        brand: brands.amdRadeon,
        price: 300.00,
        images: [
            'https://cdn.prod.website-files.com/5d1911406ad3cbdb9924a753/64ecdcbafe0db2745f84eb47_7700XT-QICK-p-500.jpg',
            'https://cdn.prod.website-files.com/5d1911406ad3cbdb9924a753/64ecdcbd52af705d834f4200_7700XT%20QICK%20p4-p-500.jpg',
            'https://cdn.prod.website-files.com/5d1911406ad3cbdb9924a753/64ecdcc0e1fb391da7d535c3_7700XT%20QICK%20p5-p-500.jpg',
            'https://cdn.prod.website-files.com/5d1911406ad3cbdb9924a753/64ecdbc92ba797d8098da787_78XT%20QICK%20p7.jpg'
        ],

        features: [
            {
                name: 'GAME CLOCK, UP TO',
                value: '2276 MHz'
            },
            {
                name: 'BOOST CLOCK, UP TO',
                value: '2599 MHz'
            },
            {
                name: 'GDDR6 MEMORY SIZE',
                value: '12 GB'
            },
            {
                name: 'MEMORY CLOCK SPEED',
                value: '18 GBPS'
            },

        ],

        details: 'Experimenta un rendimiento, una imagen y una eficiencia increíbles al jugar y transmitir con las tarjetas gráficas AMD Radeon™ RX 7700 XT y 7800 XT, con la tecnología de la arquitectura AMD RDNA™ 3.'
    }),

    new Article({
        name: 'AMD Radeon™ RX 6800 CORE Gaming Graphics Card with 16GB GDDR6, AMD RDNA™ 2',
        category: categories.graphicCard,
        brand: brands.amdRadeon,
        price: 250.00,
        images: [
            'https://cdn.prod.website-files.com/5d1911406ad3cbdb9924a753/611127d2165b209ae6755b7a_6800%20SWFT319%20box%2Bcard-p-1080.jpeg',
            'https://cdn.prod.website-files.com/5d1911406ad3cbdb9924a753/611125741c72c33416b6529d_01-p-500.jpeg',
            'https://cdn.prod.website-files.com/5d1911406ad3cbdb9924a753/60084790910cfe2c8f8f7b9f_6800_XT_Merc_319_Core_04-p-500.jpeg',
            'https://cdn.prod.website-files.com/5d1911406ad3cbdb9924a753/6008503fe7eb17453d443339_6800_XT_Merc_319_Core_05a-p-500.jpeg'
        ],
        
        features: [
            {
                name : 'GAME CLOCK, UP TO',
                value: '1815 MHz'
            },
            {
                name : 'BOOST CLOCK, UP TO',
                value: '2105 MHz'
            },
            {
                name : 'GDDR6 MEMORY SIZE',
                value: '16 GB'
            },
            {
                name : 'MEMORY CLOCK SPEED',
                value: '16 GBPS'
            },

        ],

        details: 'Introducing the AMD Radeon™ RX 6000 Series graphics cards, featuring the breakthrough AMD RDNA™ 2 architecture, engineered to deliver powerhouse performance for all gamers.'
    }),

    new Article({
        name: 'AMD Radeon™ RX 5700 XT Triple Dissipation 8GB GDDR6',
        category: categories.graphicCard,
        brand: brands.amdRadeon,
        price: 230.00,
        images: [
            'https://cdn.prod.website-files.com/5d1911406ad3cbdb9924a753/5e99d8a2d5d2ed9907b45815_5700_XT_TD_Silver-p-800.jpeg',
            'https://cdn.prod.website-files.com/5d1911406ad3cbdb9924a753/5e99dc997b28209cf8480f20_5700-1_package-p-800.jpeg',
            'https://cdn.prod.website-files.com/5d1911406ad3cbdb9924a753/5e0f67d1f40523c81cf6a8cd_5600-4_web-p-800.jpeg',
            'https://cdn.prod.website-files.com/5d1911406ad3cbdb9924a753/5e99d894a791cc6048078351_5700-2_web-p-800.jpeg'
        ],

        features: [
            {
                name :'GAME CLOCK (MHZ)',
                value: 1755
            },
            {
                name :'BOOST CLOCK (MHZ), UP TO',
                value: 1905
            },
            {
                name :'GDDR6 MEMORY SIZE (GB)',
                value: 8
            },
            {
                name : 'MEMORY CLOCK SPEED (GBPS)',
                value: 14 
            },

        ],

        details: 'DOBLA LAS REGLAS Las grandes experiencias de juego se crean doblando las reglas. Las GPU AMD Radeon™ RX serie 5700 funcionan con la nueva arquitectura RDNA y están diseñadas desde cero para un rendimiento excepcional de 1440p y una eficiencia energética excepcional para juegos de alta fidelidad. Equipado con los últimos 8 GB de memoria GDDR6 de alta velocidad y compatibilidad con PCI Express 4.0, ofrece el doble de ancho de banda. **Límite de 1 GPU por hogar**'
    }),

    new Article({
        name: 'MPG Z590 GAMING PLUS',
        category: categories.graphicCard,
        brand: brands.motherBoard.intel,
        price: 500.00,

        images: [
            'https://cyccomputer.pe/37358-large_default/placa-msi-mpg-z590-gaming-plus-ddr4-lga-1200-pn911-7d07-001.jpg',
            'https://cyccomputer.pe/37357-large_default/placa-msi-mpg-z590-gaming-plus-ddr4-lga-1200-pn911-7d07-001.jpg',
            'https://cyccomputer.pe/37360-large_default/placa-msi-mpg-z590-gaming-plus-ddr4-lga-1200-pn911-7d07-001.jpg',
            'https://cyccomputer.pe/37359-large_default/placa-msi-mpg-z590-gaming-plus-ddr4-lga-1200-pn911-7d07-001.jpg'
        ],

        features: [
            {
                name : 'Marca',
                value: 'MSI'
            },
            {
                name : 'MODELO',
                value: 'MPG Z590 GAMING PLUS'
            },
            {
                name :'Chipset',
                value: 'Intel©Z590'
            },
            {
                name :'Socket',
                value: 'Intel LGA1200'
            },
            {
                name :'Procesadores Compatibles',
                value: 'Soporta 11th Gen Intel® Core™, 10th Gen Intel® Core™, Pentium® Gold / Celeron®'
            },
            {
                name :'Tipos de memoria',
                value: 'DDR4 - admite 1R 2133/ 2666/ 2933 MHz (10th Gen Intel®), 1R 2133/ 2666/ 2933/ 3200 MHz (11th Gen Intel®)'
            },
            {
                name :'Ranuras de memoria Ram',
                value: '4 ranuras (admite hasta 128 GB)'
            },
            {
                name :'Runas de expansión',
                value: '1 ranura que admite PCIe 4.0 x16 (11th Gen Intel®) y PCIe 3.0 x16 (10th Gen Intel®), 2 ranuras PCIe 3.0 x16, 2 ranuras PCIe 3.0 x1'
            },
            {
                name : 'Interfaz de almacenamiento',
                value: '1 conector admite PCIe 4.0 x4 (solo 11th Gen Intel®), 2 conectores admiten PCIe 3.0 x4 y SATA, 6 x SATA 6Gb/s.'
            },
            {
                name :'Puertos de videos',
                value: '1 HDMI 2.0b (4K 60Hz), 1 DisplayPort 1.4 (4K 60Hz)'
            },
            {
                name :'Entradas USB/Ps2',
                value: '2 USB 3.2(Gen1), 3 USB 3.2 (Gen 2), 2 USB 2.0, 1 USB 3.2 Gen 2(Tipo-C)'
            },
            {
                name : 'Entradas de Audio',
                value: 'Realtek® ALC4080 7.1 Channel High Definition Audio'
            },
            {
                name : 'Conexiones de Red',
                value: 'controlador LAN Intel® I225-V de 2,5 Gbps'
            },
            {
                name : 'Factor de forma',
                value: 'ATX'
            },
            {
                name : 'Dimensiones',
                value: '30.5 cm x 24.4 cm'
            }
        ]
    }),

    
    new Article({
        name: 'PLACA MADRE ASUS A520M-A PRIME II/CSM',
        category: categories.motherBoard,
        brand: brands.motherBoard.amd,
        price: 73.50,

        images: [
            'https://www.impacto.com.pe/storage/products/md/167528241522507.jpg',
            'https://www.impacto.com.pe/storage/products/md/167528240423488.jpg',
            'https://cyccomputer.pe/47116-large_default/placa-asus-prime-a520m-a-iicsm-amd-ryzen-ddr4-am4-pn90mb17h0-m0eayc.jpg',
            'https://www.impacto.com.pe/storage/products/md/167528240746940.jpg',

        ],

        features: [
            {
                name : 'CHIPSET',
                value: 'A520-A PRIME II/CSM'
            },
            {
                name : 'SOCKET',
                value: 'AM4'
            },
            {
                name : 'PROCESADORES COMPATIBLES',
                value: 'Soporta Ryzen 5000/4000/3000 y sus versiones G-Series'
            },
            {
                name : 'TIPO DE MEMORIA',
                value: 'DDR4 Admite hasta 4800(OC) Mhz'
            },
            {
                name : 'RANURAS DE MEMORIA RAM',
                value: 'x4 ranuras (Admite hasta 128 GB)'
            },
            
        ]
    }),

    new Article({
        name: 'GIGABYTE A620M GAMING X (A620M GAMING X) SOCKET AM5',
        category: categories.motherBoard,
        brand: brands.motherBoard.amd,
        price: 156.98,

        images: [
            'https://www.impacto.com.pe/storage/products/md/168486463056776.jpg',
            'https://www.impacto.com.pe/storage/products/md/168486192840895.jpg',
            'https://cyccomputer.pe/49545-large_default/placa-gigabyte-a620m-gaming-x-amd-ryzen-ddr5-am5-.jpg',
            'https://cyccomputer.pe/49548-large_default/placa-gigabyte-a620m-gaming-x-amd-ryzen-ddr5-am5-.jpg'
        ],

        features: [
            {
                name : 'CHIPSET',
                value: 'A620M'
            },
            {
                name : 'SOCKET',
                value: 'AM5'
            },
            {
                name : 'PROCESADORES COMPATIBLES',
                value: 'Soporta Ryzen™ 7000/ Ryzen™ 8000 / Ryzen™ 9000'
            },
            {
                name : 'TIPO DE MEMORIA',
                value: 'DDR5 Admite hasta 8000(OC) MHz'
            },
            {
                name : 'RANURAS DE MEMORIA',
                value: 'x4 ranuras (Admite hasta 192 GB)'
            },
        ],
    }),

    new Article({
        name: 'Procesador AMD Ryzen 5 5600G',
        category: categories.procesors,
        brand: brands.amdRadeon,
        price: 677.30,

        images: [
            'https://http2.mlstatic.com/D_NQ_NP_924605-MLU76732585407_052024-O.webp',
            'https://http2.mlstatic.com/D_NQ_NP_808759-MLA53985816535_022023-O.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_664962-MLU76533721898_052024-F.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_783191-MLU76533721954_052024-F.webp'
        ],

        features: [
            {
                name:'Familia',
                value:'Ryzen'
            },
            {
                name:'Serie',
                value:'Ryzen 5000 Series'
            },
            {
                name:'Arquitectura',
                value:'Zen 3'
            },
            {
                name:'N° de núcleos de CPU',
                value:6
            },
            {
                name:'N° de subprocesos',
                value:'12'
            },
            {
                name:'Reloj turbo máximo',
                value:'Hasta 4.4 GHz'
            },
            {
                name:'Reloj base',
                value:'3.9 GHz'
            },
            {
                name:'TDP predeterminada',
                value:'65W'
            },
            {
                name:'TDP configurable de AMD (cTDP)',
                value:'45-65W'
            },
            {
                name:'Temperatura de funcionamiento máxima(Tjmax)',
                value:'95°C'
            },
            {
                name:'Compatibilidad con SO',
                value:'Windows 11 - 64-Bit Edition , Windows 10 - 64-Bit Edition , RHEL x86 64-Bit , Ubuntu x86 64-Bit'
            },
        ],

        details:'El AMD Ryzen 5 5600G es un procesador de escritorio con 6 núcleos, lanzado en abril de 2021, a un precio de venta al público de $259. Forma parte de la línea Ryzen 5, que utiliza la arquitectura Zen 3 (Cezanne) con Socket AM4. Gracias a AMD Simultaneous Multithreading (SMT), el número de núcleos se duplica de manera efectiva, a 12 hilos. Ryzen 5 5600G tiene 16 MB de caché L3 y funciona a 3,9 GHz de forma predeterminada, pero puede aumentar hasta 4,4 GHz, dependiendo de la carga de trabajo. AMD está construyendo el Ryzen 5 5600G en un proceso de producción de 7 nm utilizando 10.700 m'
    }),

    new Article({
        name:'PROCESADOR AMD RYZEN 5 5600X',
        category: categories.procesors,
        brand: brands.amdRadeon,
        price: 194.25,

        images: [
            'https://www.impacto.com.pe/storage/products/md/17151120204992.jpg',
            'https://www.impacto.com.pe/storage/products/lg/171225412267446.jpg',
            'https://www.impacto.com.pe/storage/products/lg/171225412526657.jpg'
        ],

        features: [
            {
                name:'Familia',
                value:'Ryzen'
            },
            {
                name:'Serie',
                value:'Ryzen 5000 Series'
            },
            {
                name:'Arquitectura',
                value:'Zen 3'
            },
            {
                name:'N° de núcleos de CPU',
                value:6
            },
            {
                name:'N° de subprocesos',
                value:'12'
            },
            {
                name:'Reloj turbo máximo',
                value:'Hasta 4.6 GHz'
            },
            {
                name:'Reloj base',
                value:'3.7 GHz'
            },
            {
                name:'TDP predeterminada',
                value:'65W'
            },
            {
                name:'Temperatura de funcionamiento máxima(Tjmax)',
                value:'95°C'
            },
            {
                name:'Compatibilidad con SO',
                value:'Windows 11 - 64-Bit Edition , Windows 10 - 64-Bit Edition , RHEL x86 64-Bit , Ubuntu x86 64-Bit'
            },
        ],

        details: 'El AMD Ryzen 5 5600X toma el trono como el chip de juego sin concesiones para la gama media, acentuado por el rendimiento de las aplicaciones y la eficiencia energética líderes en su clase.'
    }),

    new Article({
        name: 'Procesador AMD Ryzen 5 7600X, S-AM5, 4.70GHz',
        category: categories.procesors,
        brand: brands.amdRadeon,
        price: 4029.00,

        images: [
            'https://www.cyberpuerta.mx/img/product/XL/CP-AMD-100-100000593WOF-d1a80a.jpg',
            'https://cyccomputer.pe/44648-large_default/procesador-amd-ryzen-5-7600x-47ghz-32mb-6core-am5-pn100-100000593wof.jpg',
            'https://cyccomputer.pe/44647-large_default/procesador-amd-ryzen-5-7600x-47ghz-32mb-6core-am5-pn100-100000593wof.jpg'
        ],

        features: [
            {
                name:'Familia',
                value:'Ryzen'
            },
            {
                name:'Serie',
                value:'Ryzen 7000 Series'
            },
            {
                name:'Socket de CPU',
                value:'AM5'
            },
            {
                name:'N° de núcleos de CPU',
                value:6
            },
            {
                name:'N° de subprocesos',
                value:'12'
            },
            {
                name:'Reloj turbo máximo',
                value:'Hasta 5.3 GHz'
            },
            {
                name:'Reloj base',
                value:'4.7 GHz'
            },
            {
                name:'TDP predeterminada',
                value:'105W'
            },
            {
                name:'Temperatura de funcionamiento máxima(Tjmax)',
                value:'95°C'
            },
            {
                name:'Compatibilidad con SO',
                value:'Windows 11 - 64-Bit Edition , Windows 10 - 64-Bit Edition , RHEL x86 64-Bit , Ubuntu x86 64-Bit'
            },
        ],

        details: 'Hoy es el día en el que probamos y compartimos nuestra experiencia de uso con el procesador AMD Ryzen 5 7600X. Llega el modelo de 6 núcleos y 12 hilos con arquitectura Zen 4 5 nm que a buen seguro será la opción más vendida de esta generación. Se mantiene fiel a su idea, la mejor relación potencia/precio para gaming en setups que necesiten buenas prestaciones para cualquier trabajo. '
    })
]


export default data;