/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'mobilizacao',
        title: 'Mobilização',
        type : 'collapsable',
        icon : 'heroicons_outline:pencil-square',
        children: [
            {
                id   : 'mobilizacao.contrato',
                title: 'Contrato',
                type : 'basic',
                link : '/mobilizacao/contrato',
                icon : 'heroicons_outline:clipboard-document-list'
            },
        ],
    },
    {
        id   : 'configuracao',
        title: 'Configurações',
        type : 'collapsable',
        icon : 'heroicons_outline:adjustments-horizontal',
        children: [
            {
                id   : 'configuracao.empresa',
                title: 'Empresa Contratante',
                type : 'basic',
                link : '/configuracoes/empresa',
                icon : 'heroicons_outline:building-office-2'
            },
        ],
    }
];
