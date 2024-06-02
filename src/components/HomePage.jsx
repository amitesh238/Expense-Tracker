import React, { useEffect, useState } from 'react';
import "../style/homepage.css";
import List from './List';
import Total from './Total';
import Chart from './Chart';

const HomePage = () => {
    const [expenses, setExpenses] = useState([]);
    const [total, setTotal] = useState(0);
    const [foodTotal, setFoodTotal] = useState(0);
    const [travelTotal, setTravelTotal] = useState(0);
    const [utilityTotal, setUtilityTotal] = useState(0);

    useEffect(() => {
        const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
        setExpenses(storedExpenses);
    }, [expenses]);

    useEffect(() => {
        const newTotal = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);
        setTotal(newTotal);

        const foodExpenses = expenses.filter(expense => expense.category === 'Food');
        const travelExpenses = expenses.filter(expense => expense.category === 'Travel');
        const utilityExpenses = expenses.filter(expense => expense.category === 'Utility');

        const foodTotalAmount = foodExpenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);
        const travelTotalAmount = travelExpenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);
        const utilityTotalAmount = utilityExpenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);

        setFoodTotal(foodTotalAmount);
        setTravelTotal(travelTotalAmount);
        setUtilityTotal(utilityTotalAmount);
    }, [expenses]);

    return (
        <div className='homepage'>
            <div className="top-container">
                <Total title={"Total Expense Till Now"} total={total.toFixed(2)} />
                <Total title={"Total Expense In Food"} total={foodTotal.toFixed(2)} />
                <Total title={"Total Expense In Traveling"} total={travelTotal.toFixed(2)} />
                <Total title={"Total Expense In Utility"} total={utilityTotal.toFixed(2)} />
            </div>
            <div className="main-container">
                <List />
                <Chart />
            </div>
        </div>
    );
};

export default HomePage;
