const getMutualFriends = (user1, user2) => {
    const friends1 = user1.getFriends()
    const friends2 = user2.getFriends()
    const mutual = friends1
        .filter(item =>
            friends2.map(user => user.id).includes(item.id))
    return [...new Set(mutual)]
}

const makeUser = ({ id = null, friends = [] } = {}) => ({
    friends,
    id,
    getFriends() {
        return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
    },
});

const user1 = makeUser({
    friends: [
        makeUser({ id: 1 }),
        makeUser({ id: 2 }), // общий друг
    ],
});
const user2 = makeUser({
    friends: [
        makeUser({ id: 2 }), // общий друг
        makeUser({ id: 3 }),
    ],
});

getMutualFriends(user1, user2); //?

