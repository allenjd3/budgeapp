import {render} from "@testing-library/react";
import PrettyDate from "../../resources/js/Components/PrettyDate";

describe("PrettyDate", () => {
    it("renders a date in a pretty format", () => {
        const {getByText} = render(<PrettyDate date="2021-02-01" />);
        expect(getByText("January 31, 2021")).toBeInTheDocument();
    });
});
