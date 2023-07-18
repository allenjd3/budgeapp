import {render} from "@testing-library/react";
import BudgetItem from "../../resources/js/Components/BudgetItem";

describe("BudgetItem", () => {
    it("it renders a budget item", () => {
        const item = {
            name: "Test Item",
            uuid: '1234-5678-9101-1121',
            category: "Test Category",
        }

        const {getByText} = render(<BudgetItem item={item} />);
        expect(getByText("Test Item")).toBeInTheDocument();
        expect(getByText("$20.00")).toBeInTheDocument();
    });
});
