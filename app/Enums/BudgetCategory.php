<?php

namespace App\Enums;

use App\Traits\EnumToArray;

enum BudgetCategory: int
{
    use EnumToArray;

    case INCOME = 1;
    case FIXED_EXPENSES = 2;
    case VARIABLE_EXPENSES = 3;
    case SAVINGS = 4;
    case DEBT_REPAYMENT = 5;
    case INVESTMENTS = 6;
    case PERSONAL_CARE = 7;
    case TRANSPORTATION = 8;
    case HOUSING = 9;
    case EDUCATION = 10;
    case CHARITABLE_GIVING = 11;
    case ENTERTAINMENT_RECREATION = 12;
    case MISCELLANEOUS = 13;

    public function label(): string
    {
        return match ($this) {
            self::INCOME => 'Income',
            self::FIXED_EXPENSES => 'Fixed Expenses',
            self::VARIABLE_EXPENSES => 'Variable Expenses',
            self::SAVINGS => 'Savings',
            self::DEBT_REPAYMENT => 'Debt Repayment',
            self::INVESTMENTS => 'Investments',
            self::PERSONAL_CARE => 'Personal Care',
            self::TRANSPORTATION => 'Transportation',
            self::HOUSING => 'Housing',
            self::EDUCATION => 'Education',
            self::CHARITABLE_GIVING => 'Charitable Giving',
            self::ENTERTAINMENT_RECREATION => 'Entertainment & Recreation',
            self::MISCELLANEOUS => 'Miscellaneous',
        };
    }
}
