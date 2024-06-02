import React, { useState } from 'react';
import "../style/form.css";
import { DatePicker } from "antd";
import "react-day-picker/dist/style.css";

const Form = ({ isVisible, toggleForm, initialValues }) => {
    const [date, setDate] = useState(null);
    const [title, setTitle] = useState(initialValues && initialValues.title ? initialValues.title : '');
    const [amount, setAmount] = useState(initialValues && initialValues.amount ? initialValues.amount : '');

    const [category, setCategory] = useState(initialValues && initialValues.category ? initialValues.category : '');

    const onChange = (date, dateString) => {
        setDate(date);
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const expenseData = {
            title,
            amount,
            date: date ? date.toISOString() : null,
            category,
        };

        console.log('Submitted Data:', expenseData);

        const storedData = JSON.parse(localStorage.getItem('expenses')) || [];
        if (initialValues) {
            // If editing an expense, replace the old data with the new one
            storedData[initialValues.index] = expenseData;
        } else {
            storedData.push(expenseData);
        }

        localStorage.setItem('expenses', JSON.stringify(storedData));

        setTitle('');
        setAmount('');
        setDate(null);
        setCategory('');

        toggleForm();
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    const disabledDate = (current) => {
        return current && current < new Date().setHours(0, 0, 0, 0);
    };

    return (
        <div className={`form-container ${isVisible ? "open-form" : ""}`} onClick={toggleForm}>
            <form action="" className='main-form' onClick={stopPropagation} onSubmit={handleSubmit}>
                <h2>Add New Expense</h2>
                <div style={{ width: "100%" }}>
                    <p>Title</p>
                    <input
                        type="text"
                        placeholder='Enter Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div style={{ width: "100%" }}>
                    <p>Amount</p>
                    <input
                        type="number"
                        placeholder='Enter Amount'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>

                <div style={{ width: "100%" }}>
                    <p>Date</p>
                    <DatePicker
                        onChange={onChange}
                        className='date-picker'
                        disabledDate={disabledDate}
                        value={date}
                        required
                    />
                </div>

                <div style={{ width: "100%" }}>
                    <p>Category</p>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Food">Food</option>
                        <option value="Travel">Travel</option>
                        <option value="Utility">Utility</option>
                    </select>
                </div>

                <button type='submit' className='submit-btn'>Submit</button>
            </form>
        </div>
    );
};

export default Form;
