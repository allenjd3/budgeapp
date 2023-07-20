import {render} from "@testing-library/react";
import Form from "../../resources/js/Pages/Budgets/Form";

describe("BudgetItemForm", () => {
    it("it shows the form", () => {
        const availableCategories= {
            "1": "Test Category",
            "2": "Another Category",
        }

        const {getByText} = render(<Form availableCategories={availableCategories} />);
        expect(getByText("Test Category")).toBeInTheDocument();
    });
});
