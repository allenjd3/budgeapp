import Card from "@/Components/Card";
import {Paginated, User} from "@/types";
import {Link} from "@inertiajs/react";
import PrettyDate from "@/Components/PrettyDate";

export default function UsersBlock({ users }: { users: Paginated<User> }) {
    return (
        <Card>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Users</h3>
            <table className="table table-auto w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Impersonate</th>
                    </tr>
                </thead>
                <tbody>
                    {users.data?.map((user: User) => (
                        <tr key={user.uuid}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><PrettyDate date={user.created_at} /></td>
                            <td>
                                <Link href={route("impersonate", user.id)}>
                                    Impersonate
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}
