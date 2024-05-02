import { render, screen } from "@testing-library/react"
import Todo from "./Todo";
import userEvent from "@testing-library/user-event";

it("should call toggleTodoStatus on checkbox click", () => {
    const mockFunc = jest.fn();
    const mockTodo = {
        id: "0",
        title: "Mock todo",
        isDone: true,
        createdAt: new Date(1714127393000)
    }

    render(
        <Todo todo={mockTodo} toggleTodoStatus={mockFunc} />
    );

    const checkbox = screen.getByRole("checkbox");
    userEvent.click(checkbox);
    expect(mockFunc).toHaveBeenCalledTimes(1);
})

it("should call removeTodo on delete button click", () => {
    const mockFunc = jest.fn();
    const mockTodo = {
        id: "0",
        title: "Mock todo",
        isDone: true,
        createdAt: new Date(1714127393000)
    }

    render(
        <Todo todo={mockTodo} removeTodo={mockFunc} />
    );

    const button = screen.getByTestId("deleteTodo");
    userEvent.click(button);
    expect(mockFunc).toHaveBeenCalledTimes(1);
})

it("should display correct todo title", () => {
    const mockTodo = {
        id: "0",
        title: "Mock todo",
        isDone: true,
        createdAt: new Date(1714127393000)
    }

    render(
        <Todo todo={mockTodo} />
    );

    const title = screen.getByTestId("todoTitle");
    expect(title).toHaveClass("todoTitle");
    expect(title).toHaveTextContent("Mock todo");
})