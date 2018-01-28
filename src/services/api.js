import images from '../assets';

export const mockContacts = [{
    id: '1',
    name: 'Ronald Riantono',
    preview: `hey what's up`,
    avatarImageUri: images.male
},
{
    id: '2',
    name: '+15120001234',
    preview: `hey what's up`,
    avatarImageUri: images.female
},
{
    id: '3',
    name: 'Katie Brown',
    preview: `hey what's up`,
    avatarImageUri: images.female
},
{
    id: '4',
    name: 'Jack Ingham',
    preview: `hey what's up`,
    avatarImageUri: images.male
},
{
    id: '5',
    name: 'Lu Chen',
    preview: `hey what's up`,
    avatarImageUri: images.female
},
{
    id: '6',
    name: 'Luke Skywalker',
    preview: `hey what's up`,
    avatarImageUri: images.male
},
{
    id: '7',
    name: 'Adam edmonds',
    preview: `hey what's up`,
    avatarImageUri: images.male
},
{
    id: '8',
    name: 'Malcolm McConachie',
    preview: `hey what's up`,
    avatarImageUri: images.male
}]

export const mockMessages = [{
    incoming: true,
    message: 'Hi'
},
{
    incoming: false,
    message: 'Hi, Ronald'
},
{
    incoming: true,
    message: 'When we will learn real data fetching?'
},
{
    incoming: false,
    message: `Let's get the basic first. We need to understand styling and handling inputs right? After all you want not only to receive but send messages too right?`
}]

export const getContacts = () => (
    new Promise(resolve => setTimeout(() => resolve(mockContacts), 1000))
)

export const getMessages = () => (
    new Promise(resolve => setTimeout(() => resolve(mockMessages), 1000))
)

export const postMessage = (message) => (
    mockMessages.push({ incoming: false, message })
)