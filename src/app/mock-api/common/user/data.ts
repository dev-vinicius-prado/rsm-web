import { v4 as uuidv4 } from 'uuid';

/* eslint-disable */
export const user = {
    id    : uuidv4(),
    name  : 'Brian Hughes',
    email : 'hughes.brian@company.com',
    avatar: 'assets/images/avatars/brian-hughes.jpg',
    status: 'online',
    role: 'ADMIN',
    password: 'admin',
};
/* eslint-disable */
export const userContract = {
    id    : uuidv4(),
    name  : 'Antonio Moreno',
    email : 'antonio.moreno@company.com',
    avatar: 'assets/images/avatars/male-02.jpg',
    status: 'online',
    role: 'CONTRACT',
    password: 'contract',
};
/* eslint-disable */
export const userContractor = {
    id    : uuidv4(),
    name  : 'Joana Silva',
    email : 'joana.silva@contracted-company.com',
    avatar: 'assets/images/avatars/female-02.jpg',
    status: 'online',
    role: 'CONTRACTED',
    password: 'contracted',
};

export const users = [user, userContract, userContractor];

