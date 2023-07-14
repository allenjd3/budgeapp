import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import {PageProps} from "@/types";
import Card from "@/Components/Card";
import BudgetItem from "@/Components/BudgetItem";

export default function Index({ auth, budget, categories, availableCategories }: PageProps) {
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
                {Object.entries(categories).map(([key, items]: [string, Item[]]) => {
                    return (
                        <Card key={key}>
                            <h3 className="text-xl mb-6 text-gray-900">{key}</h3>
                            {items.map((item: Item) => {
                                return <BudgetItem key={item.uuid} item={item} />;
                            })}
                        </Card>
                    );
                })}
                <Card>
                    <h3 className="text-xl mb-6 text-gray-900">Add Item</h3>
                    <form>
                       <select>
                           {Object.entries(availableCategories).map(([key, name]: [string, string]) => {
                               return <option value={key}>{name}</option>
                           })}
                       </select>
                    </form>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
