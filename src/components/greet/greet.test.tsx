import { render, screen } from "@testing-library/react"
import Greet from "./greet"

describe('Greet', () => {
    
    test('renders correctly', () => {
        render(<Greet/>)
        const textElement = screen.getByText(/hello/i)
        expect(textElement).toBeInTheDocument()
    })
    
    describe('Nested', () => {
        test('renders a name', () => {
            render(<Greet name='Kunal'/>)
            const textElement = screen.getByText(/hello kunal/i)
            expect(textElement).toBeInTheDocument()
        })
    })
})
