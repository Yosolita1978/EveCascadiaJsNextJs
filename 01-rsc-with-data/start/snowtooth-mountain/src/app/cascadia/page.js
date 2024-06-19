// this is the Page for the Users server component


async function getData (){
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );
    return res.json();
}

async function UserStatus(){
    const data = await getData();
    return (
        <div>
            <h1>Users Attending CascadiaJS 2024</h1>
        <table className="users">
      <thead>
        <tr>
          <th>User Names</th>
          <th>Websites</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.website}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    )
}

export default function Page(){
    return (
        <main>
            <UserStatus />
        </main>
    );
}