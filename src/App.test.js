import { render, screen } from '@testing-library/react';
import App from './App';
import { testData } from './testData';
import userEvent from '@testing-library/user-event';

jest.mock("./testData", () => {
    return {
        __esModule: true,
        testData: [],
    };
});

beforeEach(() => {
    testData.splice(0, testData.length);
});

it('should display todo', () => {
    testData.push({
        id: "0",
        title: "Mock todo",
        isDone: true,
        createdAt: new Date(1714127393000)
    })
    render(<App />);
    const todoElement = screen.getByText("Mock todo");
    expect(todoElement).toBeInTheDocument();
});

it('should delete todo on delete button click', async () => {
    testData.push({
        id: "0",
        title: "Mock todo",
        isDone: true,
        createdAt: new Date(1714127393000)
    })

    render(<App />);

    const deleteButton = screen.getByTestId("deleteTodo");
    userEvent.click(deleteButton);
    const todoElement = await screen.findByText("Mock todo");
    expect(todoElement).not.toBeInTheDocument();
});

it('should update progress on delete button click', async () => {
    testData.push({
        id: "0",
        title: "Mock todo",
        isDone: true,
        createdAt: new Date(1714127393000)
    })

    render(<App />);

    const deleteButton = screen.getByTestId("deleteTodo");
    userEvent.click(deleteButton);
    const progressValue = await screen.findByTestId("progressValue");
    expect(progressValue).toHaveTextContent("0%");
});