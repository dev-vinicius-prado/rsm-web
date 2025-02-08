/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';
import { UserRole } from 'app/core/auth/model/UserRole';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'mobilizacao',
        title: 'Mobilizacao',
        type : 'collapsable',
        icon : 'heroicons_outline:pencil-square',
        children: [
            {
                id   : 'mobilizacao.contrato',
                title: 'Contrato',
                type : 'basic',
                link : '/mobilizacao/contratos',
                icon: 'heroicons_outline:clipboard-document-list',
                allowRoles: [UserRole.ADMIN, UserRole.CONTRACT, UserRole.CONTRACTOR]
            },
        ],
        allowRoles: [UserRole.ADMIN, UserRole.CONTRACT, UserRole.CONTRACTOR]
    },
    {
        id   : 'configuracao',
        title: 'Configuracoes',
        type : 'collapsable',
        icon : 'heroicons_outline:adjustments-horizontal',
        children: [
            {
                id   : 'configuracao.empresa',
                title: 'empresa-contratante',
                type : 'basic',
                link : '/configuracoes/empresa',
                icon: 'heroicons_outline:building-office-2',
                allowRoles: [UserRole.ADMIN, UserRole.CONTRACT]
            },
        ],
        allowRoles: [UserRole.ADMIN, UserRole.CONTRACT]
    }
];
