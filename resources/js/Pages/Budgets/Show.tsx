import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Budget, BudgetPageProps } from "@/types";
import Card from "@/Components/Card";
import BudgetItem from "@/Components/BudgetItem";
import Form from "@/Pages/Budgets/Form";

export default function Show({ auth, budget, categories, availableCategories }: BudgetPageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            isImpersonating={auth.isImpersonating}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Budget
                </h2>
            }
        >
            <Head title="Budget" />

            <div className="py-12 space-y-6">
                <Card>
                    <div className="p-6 text-gray-900">
                        {budget.name} for month- {budget.for_month}
                    </div>
                </Card>
                {Object.entries(categories).map(([key, items]: [string, Budget[]]) => {
                    return (
                        <Card key={`category-${key}`}>
                            <h3 className="text-xl mb-6 text-gray-900">{key}</h3>
                            {items.map((item: Budget) => {
                                return <BudgetItem key={`budget-item-${item.uuid}`} item={item} />;
                            })}
                        </Card>
                    );
                })}
                <Form availableCategories={availableCategories} budgetId={budget.uuid} />
            </div>
        </AuthenticatedLayout>
    );
}
