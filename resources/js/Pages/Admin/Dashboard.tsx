import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head, Link} from "@inertiajs/react";
import {AdminPageProps} from "@/types";
import UsersBlock from "@/Components/UsersBlock";

export default function Dashboard({ auth, users }: AdminPageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            isImpersonating={auth.isImpersonating}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="space-y-6 py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
                <UsersBlock users={users} />
            </div>
        </AuthenticatedLayout>
    );
}
