import { describe, expect, it } from "vitest"
import App from "./App";
import { fireEvent, render, screen, userEvent } from "../test-utils";


describe("App", () => {
    it("Check that all the elements are on the screen", () => {
        render(<App />)
        const activateButton = screen.getByText('ACTIVATE')
        expect(activateButton).toBeInTheDocument()
        const disableButton = screen.getByText('DISABLE')
        expect(disableButton).toBeInTheDocument()
        const counter = screen.getByTestId('counter')
        expect(counter).toBeInTheDocument()
    })

    it("Check clicking the ACTIVATE button works", () => {
        render(<App />)
        const counter = screen.getByTestId('counter')
        const activateButton = screen.getByText('ACTIVATE')

        fireEvent(
            activateButton,
            new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
            }),   
        )
        
        expect(counter).toHaveTextContent('2')
        expect(counter).toHaveStyle('background: green')
    })
})

