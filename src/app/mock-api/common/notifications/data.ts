/* eslint-disable */
import { DateTime } from 'luxon';

/* Get the current instant */
const now = DateTime.now().setLocale('pt-BR');

export const notifications = [
    {
        id         : '493190c9-5b61-4912-afe5-78c21f1044d7',
        icon       : 'heroicons_mini:star',
        title      : 'Daily challenges',
        description: 'Your submission has been accepted',
        time       : now.minus({minute: 25}).toFormat('F'), // 25 minutes ago
        read: false,
        user: "a14aac2a-a24a-4612-bd6d-95a09980ea1b",
    },
    {
        id         : '6e3e97e5-effc-4fb7-b730-52a151f0b641',
        image      : 'assets/images/avatars/male-04.jpg',
        description: '<strong>Leo Gill</strong> added you to <em>Top Secret Project</em> group and assigned you as a <em>Project Manager</em>',
        time       : now.minus({minute: 50}).toFormat('F'), // 50 minutes ago
        read       : true,
        link       : '/dashboards/project',
        useRouter: true,
        user: "a14aac2a-a24a-4612-bd6d-95a09980ea1b",
    },
    {
        id: 'b91ccb58-b06c-413b-b389-87010e03a120',
        icon: 'heroicons_outline:clipboard-document-list',
        title: 'Contrato',
        description: 'You have 15 unread mails across 3 mailboxes',
        time: now.minus({ hour: 3 }).toFormat('F'), // 3 hours ago
        read: false,
        link: '/mobilizacao/contratos',
        useRouter: true,
        user: 'c243e6a8-746b-4cfc-97b7-d726b869f9d1',
    },
    {
        id         : '541416c9-84a7-408a-8d74-27a43c38d797',
        icon       : 'heroicons_mini:arrow-path',
        title      : 'Cron jobs',
        description: 'Your <em>Docker container</em> is ready to publish',
        time       : now.minus({hour: 5}).toFormat('F'), // 5 hours ago
        read       : false,
        link       : '/dashboards/project',
        useRouter: true,
        user: "a14aac2a-a24a-4612-bd6d-95a09980ea1b",
    },
    {
        id         : 'ef7b95a7-8e8b-4616-9619-130d9533add9',
        image      : 'assets/images/avatars/male-06.jpg',
        description: '<strong>Roger Murray</strong> accepted your friend request',
        time       : now.minus({hour: 7}).toFormat('F'), // 7 hours ago
        read       : true,
        link       : '/dashboards/project',
        useRouter: true,
        user: "a14aac2a-a24a-4612-bd6d-95a09980ea1b",
    },
    {
        id         : 'eb8aa470-635e-461d-88e1-23d9ea2a5665',
        image      : 'assets/images/avatars/female-04.jpg',
        description: '<strong>Sophie Stone</strong> sent you a direct message',
        time       : now.minus({hour: 9}).toFormat('F'), // 9 hours ago
        read       : true,
        link       : '/dashboards/project',
        useRouter: true,
        user: "a14aac2a-a24a-4612-bd6d-95a09980ea1b",
    },
    {
        id         : 'b85c2338-cc98-4140-bbf8-c226ce4e395e',
        icon       : 'heroicons_mini:envelope',
        title      : 'Mailbox',
        description: 'You have 3 new mails',
        time       : now.minus({day: 1}).toFormat('F'), // 1 day ago
        read       : true,
        link       : '/dashboards/project',
        useRouter: true,
        user: "a14aac2a-a24a-4612-bd6d-95a09980ea1b",
    },
    {
        id         : '8f8e1bf9-4661-4939-9e43-390957b60f42',
        icon       : 'heroicons_mini:star',
        title      : 'Daily challenges',
        description: 'Your submission has been accepted and you are ready to sign-up for the final assigment which will be ready in 2 days',
        time       : now.minus({day: 3}).toFormat('F'), // 3 days ago
        read       : true,
        link       : '/dashboards/project',
        useRouter: true,
        user: "a14aac2a-a24a-4612-bd6d-95a09980ea1b",
    },
    {
        id         : '30af917b-7a6a-45d1-822f-9e7ad7f8bf69',
        icon       : 'heroicons_mini:arrow-path',
        title      : 'Cron jobs',
        description: 'Your Vagrant container is ready to download',
        time       : now.minus({day: 4}).toFormat('F'), // 4 days ago
        read       : true,
        link       : '/dashboards/project',
        useRouter: true,
        user: "a14aac2a-a24a-4612-bd6d-95a09980ea1b",
    },
];
