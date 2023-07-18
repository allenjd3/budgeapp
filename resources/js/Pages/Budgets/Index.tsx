import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Budget, BudgetsPageProps } from "@/types";

export default function Index({ auth, budgets }: BudgetsPageProps) {
    console.log(budgets)
    return (
        <AuthenticatedLayout
            user={auth.user}
            isImpersonating={auth.isImpersonating}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Budgets
                </h2>
            }
        >
            <Head title="Budgets" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Here are your budgets
                            {budgets.map((budget: Budget) => {
                                const date = new Date(budget.for_month);
                                const formattedDate = date.toLocaleString('default', { month: 'long', year: 'numeric' });
                                    return (
                                        <div key={budget.uuid}>
                                            <a href={route('dashboard.budgets.show', budget.uuid)}>{budget.name} for month- { formattedDate }</a>
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
