<?php

namespace App\Enums;

enum BudgetCategory: int
{
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
}
