interface Contact {
    phoneNumber: string;
    email: string;
}

interface Participant {
    name: string;
    function: string;
    contact: Contact;
}

interface Vigence {
    startAt: Date;
    finishAt: Date;
}

interface DocumentRequired {
    id: number;
    description: string;
    name: string;
    required: boolean;
    /**
     * Representação binária do arquivo enviado
     */
    file: string;
    downloadLink: string;
}
/**
 * Empresa Contratante
 */
interface Contractor {
    cnpj: string;
    company: string;
}

interface ContractManager {
    participant: Participant;
}

interface MatrixOfResponsability {
    participant: Participant;
}
/**
 * Empresa Contratata
 */
interface contracted {
    id: number;
    cnpj: string;
    company: string;
    responsibleParticipant: Participant;
    documents: { document: DocumentRequired }[];
}
/**
 * Item do recurso mobilizado
 */
interface Item {
    id: number;
    function: string;
    quantity: number;
    documents: { document: DocumentRequired }[];
    racs: { rac: any }[];
    nrs: { nr: any }[];
}
/**
 * Recurso a ser mobilizado
 */
interface Resource {
    id: number;
    type: string;
    description: string;
    category: string; // Para Vehicle: ['PASSENGER', 'PICKUP', 'TRUCK']; Para Equipment: ['FIXED', 'MOBILE']
    makeEmployBadge: boolean; // Emitir crachá
    provideFood: boolean;
    items: { item: Item }[];
}

enum ResourceTypes {
    PERSONAL = 'PERSONAL',
    VEHICLE = 'VEHICLE',
    EQUIPMENT = 'EQUIPMENT',
}

interface ResourcesOfContract {
    resources: { resource: Resource }[];
}

export interface Contract {
    id: number;
    code: string;
    dateInitialMet: Date;
    scope: string;
    degreeRiskLevel: string;
    vigence: Vigence;
    contractor: Contractor;
    contractManager: ContractManager;
    matrixOfResponsability: MatrixOfResponsability[];
    contracted: contracted;
    resourcesOfContract: ResourcesOfContract;
}
