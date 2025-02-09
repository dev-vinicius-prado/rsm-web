export const contracts = [
    {
        id: 1,
        code: 'RSM-20240001',
        cnpj: '00.000.000/0001-00',
        dateInitialMet: new Date('2024-04-16'),
        fantasyName: 'Prado Sistemas SA',
        vigence: {
            startAt: new Date('2024-04-17T00:00:00-03:00'),
            finishAt: new Date('2025-12-31T00:00:00-03:00'),
        },
        scope: '32.240-410',
        degreeRiskLevel: 'HIGH',
        contractManager: {
            name: 'Vinicius Francisco Prado',
            email: 'email@email.com',
            phoneNumber: '32956565656',
            company: 'Pico Mineiro SA',
        },
        matrixOfResponsability: [
            {
                name: 'Vinicius Francisco Prado',
                function: 'admin',
                email: 'developer.vinicius.prado@gmail.com',
            },
            {
                name: 'Vinicius Francisco Prado',
                function: 'coordenador',
                email: 'developer.vinicius.prado@gmail.com',
            },
        ],
        contractor: {
            name: '',
        },
    },
];
