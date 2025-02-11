export const contracts = [
    {
        id: 1,
        code: 'RSM-20240001',
        dateInitialMet: '2024-04-16T00:00:00Z',
        scope: 'Mineração',
        degreeRiskLevel: 'HIGH',
        vigence: {
            startAt: '2024-04-17T00:00:00-03:00',
            finishAt: '2025-12-31T00:00:00-03:00',
        },
        contractor: {
            cnpj: '78.345.678/0001-22',
            company: 'Monte Azul Mineração Ltda.',
        },
        contractManager: {
            participant: {
                name: 'Lucas Almeida',
                function: 'Gerente de Projetos',
                contact: {
                    phoneNumber: '(31) 91234-5678',
                    email: 'lucas.almeida@monteazul.com',
                },
            },
        },
        matrixOfResponsability: [
            {
                participant: {
                    name: 'Fernanda Costa',
                    function: 'Supervisora',
                    contact: {
                        phoneNumber: '(31) 99876-5432',
                        email: 'fernanda.costa@monteazul.com',
                    },
                },
            },
        ],
        contracted: {
            id: 1,
            cnpj: '23.123.456/0001-90',
            company: 'Terranova Engenharia Ltda.',
            responsibleParticipant: {
                name: 'Carlos Nogueira',
                function: 'Engenheiro Chefe',
                contact: {
                    phoneNumber: '(31) 98765-4321',
                    email: 'carlos.nogueira@terranova.com',
                },
            },
            documents: [
                {
                    document: {
                        id: 1,
                        description:
                            'Certidão Negativa de Débitos Trabalhistas',
                        name: 'CND Trabalhista',
                        required: true,
                        file: '',
                        downloadLink: '',
                    },
                },
            ],
        },
        resourcesOfContract: {
            resources: [
                {
                    resource: {
                        id: 1,
                        type: 'PERSONAL',
                        description: 'Equipe de perfuração',
                        category: 'MOBILE',
                        makeEmployBadge: true,
                        provideFood: true,
                        items: [
                            {
                                item: {
                                    id: 1,
                                    function: 'Técnico de Perfuração',
                                    quantity: 5,
                                    documents: [
                                        {
                                            document: {
                                                id: 2,
                                                description:
                                                    'Certificado NR-35',
                                                name: 'Treinamento NR-35 Trabalho em Altura',
                                                required: true,
                                                file: '',
                                                downloadLink: '',
                                            },
                                        },
                                    ],
                                    racs: [{ rac: {} }],
                                    nrs: [{ nr: {} }],
                                },
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        id: 2,
        code: 'RSM-20240002',
        dateInitialMet: '2024-05-10T00:00:00Z',
        scope: 'Mineração',
        degreeRiskLevel: 'MEDIUM',
        vigence: {
            startAt: '2024-05-15T00:00:00-03:00',
            finishAt: '2026-06-30T00:00:00-03:00',
        },
        contractor: {
            cnpj: '85.654.321/0001-11',
            company: 'Serra Branca Mineração S.A.',
        },
        contractManager: {
            participant: {
                name: 'Ana Beatriz Lima',
                function: 'Superintendente',
                contact: {
                    phoneNumber: '(21) 99988-7766',
                    email: 'ana.lima@serrabranca.com',
                },
            },
        },
        matrixOfResponsability: [
            {
                participant: {
                    name: 'Roberto Farias',
                    function: 'Analista de Segurança',
                    contact: {
                        phoneNumber: '(21) 98877-6655',
                        email: 'roberto.farias@serrabranca.com',
                    },
                },
            },
        ],
        contracted: {
            id: 2,
            cnpj: '29.876.543/0001-99',
            company: 'GeoTech Consultoria Ltda.',
            responsibleParticipant: {
                name: 'Marcos Tavares',
                function: 'Diretor Técnico',
                contact: {
                    phoneNumber: '(21) 97777-5555',
                    email: 'marcos.tavares@geotech.com',
                },
            },
            documents: [
                {
                    document: {
                        id: 3,
                        description: 'Alvará de Funcionamento Atualizado',
                        name: 'Alvará de Funcionamento Municipal',
                        required: true,
                        file: '',
                        downloadLink: '',
                    },
                },
            ],
        },
        resourcesOfContract: {
            resources: [
                {
                    resource: {
                        id: 2,
                        type: 'EQUIPMENT',
                        description: 'Perfuratriz hidráulica',
                        category: 'MOBILE',
                        makeEmployBadge: false,
                        provideFood: false,
                        items: [
                            {
                                item: {
                                    id: 2,
                                    function: 'Operador de Equipamento',
                                    quantity: 2,
                                    documents: [
                                        {
                                            document: {
                                                id: 4,
                                                description:
                                                    'Treinamento NR-12',
                                                name: 'Certificado de Segurança NR-12',
                                                required: true,
                                                file: '',
                                                downloadLink: '',
                                            },
                                        },
                                    ],
                                    racs: [{ rac: {} }],
                                    nrs: [{ nr: {} }],
                                },
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        id: 3,
        code: 'RSM-20240002',
        dateInitialMet: '2024-04-16T00:00:00Z',
        scope: 'Mineração',
        degreeRiskLevel: 'HIGH',
        vigence: {
            startAt: '2024-04-17T00:00:00-03:00',
            finishAt: '2025-12-31T00:00:00-03:00',
        },
        contractor: {
            cnpj: '45.678.912/0001-34',
            company: 'Mineração Pedra Branca Ltda.',
        },
        contractManager: {
            participant: {
                name: 'Eduardo Almeida',
                function: 'Supervisor de Operações',
                contact: {
                    phoneNumber: '(31) 99854-3210',
                    email: 'eduardo.almeida@pedrabranca.com.br',
                },
            },
        },
        matrixOfResponsability: [
            {
                participant: {
                    name: 'Ana Cláudia Mendes',
                    function: 'Coordenadora de Segurança',
                    contact: {
                        phoneNumber: '(11) 91234-5678',
                        email: 'ana.mendes@pedrabranca.com.br',
                    },
                },
            },
            {
                participant: {
                    name: 'Roberto Figueiredo',
                    function: 'Engenheiro de Projetos',
                    contact: {
                        phoneNumber: '(21) 96547-1234',
                        email: 'roberto.figueiredo@pedrabranca.com.br',
                    },
                },
            },
        ],
        contracted: {
            id: 3,
            cnpj: '78.910.111/0001-22',
            company: 'Terra Nova Engenharia S.A.',
            responsibleParticipant: {
                name: 'Mário César Souza',
                function: 'Diretor Técnico',
                contact: {
                    phoneNumber: '(41) 99876-5432',
                    email: 'mario.souza@terranova.com',
                },
            },
            documents: [
                {
                    document: {
                        id: 5,
                        description:
                            'Certidão Negativa de Débitos Trabalhistas',
                        name: 'Certidão Negativa Atualizada',
                        required: true,
                        file: '',
                        downloadLink: '',
                    },
                },
            ],
        },
        resourcesOfContract: {
            resources: [
                {
                    resource: {
                        id: 20,
                        type: 'EQUIPMENT',
                        description: 'Perfuratriz hidráulica',
                        category: 'MOBILE',
                        makeEmployBadge: false,
                        provideFood: false,
                        items: [
                            {
                                item: {
                                    id: 20,
                                    function: 'Operador de Equipamento',
                                    quantity: 2,
                                    documents: [
                                        {
                                            document: {
                                                id: 40,
                                                description:
                                                    'Treinamento NR-12',
                                                name: 'Certificado de Segurança NR-12',
                                                required: true,
                                                file: '',
                                                downloadLink: '',
                                            },
                                        },
                                    ],
                                    racs: [{ rac: {} }],
                                    nrs: [{ nr: {} }],
                                },
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        id: 4,
        code: 'RSM-20240003',
        dateInitialMet: '2024-05-10T00:00:00Z',
        scope: 'Mineração',
        degreeRiskLevel: 'HIGH',
        vigence: {
            startAt: '2024-05-15T00:00:00-03:00',
            finishAt: '2026-12-31T00:00:00-03:00',
        },
        contractor: {
            cnpj: '55.999.333/0001-88',
            company: 'Extração Mineral Brasil Ltda.',
        },
        contractManager: {
            participant: {
                name: 'Carolina Nunes',
                function: 'Gerente de Contratos',
                contact: {
                    phoneNumber: '(11) 95678-9876',
                    email: 'carolina.nunes@extracaobrasil.com',
                },
            },
        },
        matrixOfResponsability: [
            {
                participant: {
                    name: 'Ricardo Gonçalves',
                    function: 'Analista de Recursos Minerais',
                    contact: {
                        phoneNumber: '(21) 96541-7854',
                        email: 'ricardo.goncalves@extracaobrasil.com',
                    },
                },
            },
            {
                participant: {
                    name: 'Fernanda Duarte',
                    function: 'Coordenadora Ambiental',
                    contact: {
                        phoneNumber: '(31) 99845-6598',
                        email: 'fernanda.duarte@extracaobrasil.com',
                    },
                },
            },
        ],
        contracted: {
            id: 4,
            cnpj: '99.888.777/0001-55',
            company: 'Soluções Minerais Integradas S.A.',
            responsibleParticipant: {
                name: 'Alberto Castilho',
                function: 'Diretor Operacional',
                contact: {
                    phoneNumber: '(81) 98765-4321',
                    email: 'alberto.castilho@solucoesminerais.com',
                },
            },
            documents: [
                {
                    document: {
                        id: 6,
                        description: 'Alvará de Funcionamento',
                        name: 'Alvará de Funcionamento para Mineração',
                        required: true,
                        file: '',
                        downloadLink: '',
                    },
                },
            ],
        },
        resourcesOfContract: {
            resources: [
                {
                    resource: {
                        id: 30,
                        type: 'EQUIPMENT',
                        description: 'Perfuratriz hidráulica',
                        category: 'MOBILE',
                        makeEmployBadge: false,
                        provideFood: false,
                        items: [
                            {
                                item: {
                                    id: 30,
                                    function: 'Operador de Equipamento',
                                    quantity: 2,
                                    documents: [
                                        {
                                            document: {
                                                id: 30,
                                                description:
                                                    'Treinamento NR-12',
                                                name: 'Certificado de Segurança NR-12',
                                                required: true,
                                                file: '',
                                                downloadLink: '',
                                            },
                                        },
                                    ],
                                    racs: [{ rac: {} }],
                                    nrs: [{ nr: {} }],
                                },
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        id: 5,
        code: 'RSM-20250001',
        dateInitialMet: '2025-01-10T00:00:00Z',
        scope: 'Mineração',
        degreeRiskLevel: 'HIGH',
        vigence: {
            startAt: '2024-12-20T00:00:00-03:00',
            finishAt: '2026-12-31T00:00:00-03:00',
        },
        contractor: {
            cnpj: '55.999.333/0001-88',
            company: 'Pico Mineração S.A.',
        },
        contractManager: {
            participant: {
                name: 'Priscila Nunes',
                function: 'Gerente de Contratos',
                contact: {
                    phoneNumber: '(11) 95678-9876',
                    email: 'priscila.nunes@pico.com',
                },
            },
        },
        matrixOfResponsability: [
            {
                participant: {
                    name: 'Marcelo Gonçalves',
                    function: 'Analista de Recursos Minerais',
                    contact: {
                        phoneNumber: '(21) 96541-7854',
                        email: 'marcelo.goncalves@pico.com',
                    },
                },
            },
            {
                participant: {
                    name: 'Carla Duarte',
                    function: 'Coordenadora Ambiental',
                    contact: {
                        phoneNumber: '(31) 99845-6598',
                        email: 'carla.duarte@pico.com',
                    },
                },
            },
        ],
        contracted: {
            id: 5,
            cnpj: '99.888.777/0001-55',
            company: 'Soluções Minerais Integradas S.A.',
            responsibleParticipant: {
                name: 'Alberto Castilho',
                function: 'Diretor Operacional',
                contact: {
                    phoneNumber: '(81) 98765-4321',
                    email: 'alberto.castilho@solucoesminerais.com',
                },
            },
            documents: [
                {
                    document: {
                        id: 7,
                        description: 'Alvará de Funcionamento',
                        name: 'Alvará de Funcionamento para Mineração',
                        required: true,
                        file: '',
                        downloadLink: '',
                    },
                },
            ],
        },
        resourcesOfContract: {
            resources: [
                {
                    resource: {
                        id: 40,
                        type: 'EQUIPMENT',
                        description: 'Perfuratriz hidráulica',
                        category: 'MOBILE',
                        makeEmployBadge: false,
                        provideFood: false,
                        items: [
                            {
                                item: {
                                    id: 40,
                                    function: 'Operador de Equipamento',
                                    quantity: 2,
                                    documents: [
                                        {
                                            document: {
                                                id: 40,
                                                description:
                                                    'Treinamento NR-12',
                                                name: 'Certificado de Segurança NR-12',
                                                required: true,
                                                file: '',
                                                downloadLink: '',
                                            },
                                        },
                                    ],
                                    racs: [{ rac: {} }],
                                    nrs: [{ nr: {} }],
                                },
                            },
                        ],
                    },
                },
            ],
        },
    },
];
