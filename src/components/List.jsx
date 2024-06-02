import React, { useState, useEffect } from 'react';
import "../style/list.css";
import Form from './Form';

const List = () => {
    const [expenses, setExpenses] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
        setExpenses(storedExpenses);
    }, []);

    const handleDelete = (index) => {
        const updatedExpenses = [...expenses];
        updatedExpenses.splice(index, 1);
        setExpenses(updatedExpenses);
        localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    };

    const handleEdit = (index) => {
        setEditIndex(index);
    };

    const handleCancelEdit = () => {
        setEditIndex(null);
    };
    return (
        <div className='list-container'>
            <h2>Expenses List</h2>
            <div className="expenses-list">
                {expenses.length > 0 ? (
                    expenses.map((expense, index) => (
                        <div className="row" key={index}>
                            <p className="title">{expense.title}</p>
                            <p className='amount'>${expense.amount}</p>
                            <div className="date-category">
                                <p className='date'>{new Date(expense.date).toLocaleDateString()}</p>
                                <p className='category'>{expense.category}</p>
                            </div>
                            <div className="action-btn">
                                <button className="edit" onClick={() => handleEdit(index)}>Edit</button>
                                <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No expenses found</p>
                )}
            </div>
            {editIndex !== null && (
                <Form
                    isVisible={true}
                    toggleForm={handleCancelEdit}
                    initialValues={{ ...expenses[editIndex], index: editIndex }}
                />
            )}
        </div>   
    );
};

export default List;
