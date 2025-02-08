import { v4 as uuidv4 } from 'uuid';

/* eslint-disable */
export const user = {
    id    : "a14aac2a-a24a-4612-bd6d-95a09980ea1b",
    name  : 'Brian Hughes',
    email : 'hughes.brian@company.com',
    avatar: 'assets/images/avatars/brian-hughes.jpg',
    status: 'online',
    role: 'ADMIN',
    password: 'admin',
};
/* eslint-disable */
export const userContract = {
    id    : "f5a3db06-5fed-4cef-bb5a-6879b198bccb",
    name  : 'Antonio Moreno',
    email : 'antonio.moreno@company.com',
    avatar: 'assets/images/avatars/male-02.jpg',
    status: 'online',
    role: 'CONTRACT',
    password: 'contract',
};
/* eslint-disable */
export const userContractor = {
    id    : "c243e6a8-746b-4cfc-97b7-d726b869f9d1",
    name  : 'Joana Silva',
    email : 'joana.silva@contracted-company.com',
    avatar: 'assets/images/avatars/female-02.jpg',
    status: 'online',
    role: 'CONTRACTED',
    password: 'contracted',
};

export const users = [user, userContract, userContractor];

