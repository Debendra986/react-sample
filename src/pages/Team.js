import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";

function Team() {
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
        document.title = "Team Page";
        /* fetch('https://dummyjson.com/user/login', {
             method: 'POST',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify({
 
                 username: 'emilys',
                 password: 'emilyspass',
                 expiresInMins: 30, // optional, defaults to 60
             }),
         })
             .then(res => res.json())
             .then(console.log);*/

        fetch('https://dummyjson.com/users?sortBy=firstName&order=asc')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUsers(data.users);
            });
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log(query);
            fetch(`https://dummyjson.com/users/search?q=${query}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setUsers(data.users);
                });
        }, 500);

        return () => clearTimeout(timer);
    }, [query]);

    const hasFormReset = () => {
        alert(query);
        setQuery("");
    }
    return (
        <>
            <h2>Team</h2>
            <div className="p-4">
                <input className="form-control mb-3" placeholder="Search ...." onChange={e => setQuery(e.target.value)} value={query} />
                <button className="btn btn-primary mb-3" onClick={() => hasFormReset()}>Reset</button>

                <div className="h4">User List:</div>
                <ul className="list-group">
                    {users.map(user => (
                        <li key={user.id} className="list-group-item">
                            <span className="me-2"><img src={user.image} alt={user.firstName} width={40} /></span>
                            <span>{user.firstName} {user.lastName}</span> - 
                            <span> {user.email}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Team;
