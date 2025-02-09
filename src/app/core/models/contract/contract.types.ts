export interface Contract {
    id: number;
    code: string;
    cnpj: string;
    dateInitialMet: Date;
    fantasyName: string;
    vigence: {
        startAt: Date;
        finishAt: Date;
    };
    scope: string;
    degreeRiskLevel: string;
    contractManager: {
        name: string;
        email: string;
        phoneNumber: string;
        company: string;
    };
    matrixOfResponsability: {
        name: string;
        function: string;
        email: string;
    }[];
    contractor: {
        name: string;
    };
}
