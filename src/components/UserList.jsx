import List from './List'

const UserList = () => {
  const users = [
    { id: 1, name: 'Alice', age: 20 },
    { id: 2, name: 'Bob', age: 21 },
    { id: 3, name: 'Charlie', age: 22 },
    { id: 4, name: 'David', age: 23 },
  ]

  return <List items={users} renderItem={(user) => user.name} />
}

export default UserList
