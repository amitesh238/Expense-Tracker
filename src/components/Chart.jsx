import React, { useEffect, useState } from 'react';
import "../style/chart.css";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Chart = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
        setExpenses(storedExpenses);
    }, [expenses]);

    const getCategoryWiseTotal = () => {
        const categoryWiseTotal = {};

        expenses.forEach(expense => {
            if (categoryWiseTotal[expense.category]) {
                categoryWiseTotal[expense.category] += parseFloat(expense.amount);
            } else {
                categoryWiseTotal[expense.category] = parseFloat(expense.amount);
            }
        });

        return categoryWiseTotal;
    };

    const getTitleWiseTotal = () => {
        const titleWiseTotal = {};

        expenses.forEach(expense => {
            if (titleWiseTotal[expense.title]) {
                titleWiseTotal[expense.title] += parseFloat(expense.amount);
            } else {
                titleWiseTotal[expense.title] = parseFloat(expense.amount);
            }
        });

        return titleWiseTotal;
    };

    const generatePieChartData = () => {
        const categoryWiseTotal = getCategoryWiseTotal();
        const data = [];

        for (const category in categoryWiseTotal) {
            data.push({ name: category, value: categoryWiseTotal[category] });
        }

        return data;
    };

    const generateBarChartData = () => {
        const titleWiseTotal = getTitleWiseTotal();
        const data = [];

        for (const title in titleWiseTotal) {
            data.push({ name: title, value: titleWiseTotal[title] });
        }

        return data;
    };

    const COLORS = ['#343a40', '#495057', '#6c757d', '#FF8042', '#AF19FF'];

    return (
        <div className='chart-container'>
            <h2>Expenses Chart</h2>
            <div className="chart-view">
                <ResponsiveContainer width="100%" height="100%" className="bar-chart">
                    <BarChart data={generateBarChartData()} className='barchart'>
                        <CartesianGrid stroke="#212529" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#212529" />
                    </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height="100%" className="pie-chart">
                    <PieChart>
                        <Pie
                            data={generatePieChartData()}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            fill="#8884d8"
                            label
                        >
                            {generatePieChartData().map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default Chart;
