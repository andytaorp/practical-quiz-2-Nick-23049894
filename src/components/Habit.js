import React from "react";

/**
 * Habit component that displays a habit, allows the user to toggle
 * the habit's completed state, and delete the habit.
 *
 * TODO: implement the Habit component here
 */


export default function Habit({ habit, onToggleHabit, onDeleteHabit }) {
    return (
        <div>
            <label>
                <input type="checkbox" checked={habit.completed} onChange={() => onToggleHabit(habit.id)}/>
                <span style={{ textDecoration: habit.completed ? "line-through" : "none", }}>{habit.habitName}</span>
            </label>
            <button onClick={() => onDeleteHabit(habit.id)}>Delete</button>
        </div>
    );
}


