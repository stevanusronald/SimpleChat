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
    id: '34534542342-4234234',
    name: 'Katie Brown',
    preview: `hey what's up`,
    avatarImageUri: images.female
},
{
    id: '34534542342-4234234',
    name: 'Jack Ingham',
    preview: `hey what's up`,
    avatarImageUri: images.male
},
{
    id: '34534542342-4234234',
    name: 'Lu Chen',
    preview: `hey what's up`,
    avatarImageUri: images.female
},
{
    id: '34534542342-4234234',
    name: 'Luke Skywalker',
    preview: `hey what's up`,
    avatarImageUri: images.male
},
{
    id: '34534542342-4234234',
    name: 'Adam edmonds',
    preview: `hey what's up`,
    avatarImageUri: images.male
},
{
    id: '34534542342-4234234',
    name: 'Malcolm McConachie',
    preview: `hey what's up`,
    avatarImageUri: images.male
}]

export const getContacts = () => (
    new Promise(resolve => setTimeout(() => resolve(mockContacts), 1000))
)