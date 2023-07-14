export default function BudgetItem({ item }: {item: Item}) {
    return (
        <div className="grid grid-cols-12 p-4 bg-gray-100 font-bold">
            <div className="col-span-10 capitalize text-gray-900">{item.name}</div>
            <div className="col-span-1 text-red-500">$20.00</div>
            <div className="col-span-1 text-blue-600">$30.00</div>
        </div>
    )
}
