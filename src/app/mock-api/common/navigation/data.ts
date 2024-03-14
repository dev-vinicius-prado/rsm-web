/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'cadastros',
        title: 'Cadastros',
        type : 'collapsable',
        icon : 'heroicons_outline:cog-8-tooth',
        children: [
            {
                id   : 'cadastros.empresa',
                title: 'Empresa',
                type : 'basic',
                link : '/cadastros/empresa',
                icon : 'heroicons_outline:building-office-2'
            },
        ],
    }
];
