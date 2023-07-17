export interface User {
    id: number;
    uuid: string;
    name: string;
    email: string;
    account: string;
    email_verified_at: string;
    created_at: string;
}

export interface Paginated<T> {
    data: T[];
    current_page: number;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: {
        url: string;
        label: string;
        active: boolean;
    }
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
}

export interface Item {
    name: string;
    uuid: string;
    category: string;
}

export interface Budget {
    name: string;
    for_month: string;
    uuid: string;
    user_id: number;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
        isImpersonating: boolean;
    };
};

export type AdminPageProps = PageProps & {
    users: Paginated<User>;
}

export type BudgetsPageProps = PageProps & {
    budgets: Budget[];
}

export type BudgetPageProps = PageProps & {
    budget: Budget;
    categories: {
        [key: string]: Budget[];
    };
    availableCategories: {
        [key: string]: string;
    };
}
