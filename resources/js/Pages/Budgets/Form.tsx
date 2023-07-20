import Card from "@/Components/Card";
import {useForm} from "@inertiajs/react";


export default function Form({ availableCategories, budgetId }: { availableCategories: { [key: string]: string }, budgetId: string}) {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        category: "",
    });

    function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route("dashboard.budgets.items.store", budgetId), {
            preserveScroll: true,
            onSuccess: () => reset(),
            });
    }
    return (
        <Card>
            <form onSubmit={submit}>
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl mb-6 text-gray-900">Add Item</h3>
                        <div className="flex flex-col">
                            <label htmlFor="name">Name</label>
                            <input id="name" value={data.name} type="text" onChange={e => setData('name', e.target.value)} />
                            { errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p> }
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="category">Category</label>
                            <select id="category" value={data.category} onChange={e => setData('category', e.target.value)}>
                                {Object.entries(availableCategories).map(([key, name]: [string, string]) => {
                                    return <option key={`available-categories-${key}`} value={key}>{name}</option>
                                })}
                            </select>
                            { errors.category && <p className="text-red-500 text-xs italic">{errors.category}</p> }
                        </div>
                    </div>
                    <div className="flex justify-start items-end w-full h-full">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Item</button>
                    </div>
                </div>
            </form>
        </Card>
    )
}
