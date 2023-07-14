import {ReactNode} from "react";

export default function Card({ children }: {children: ReactNode}) {
    return (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6 space-y-4">
                {children}
            </div>
        </div>
    );
}
