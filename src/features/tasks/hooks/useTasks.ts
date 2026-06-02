import { useEffect, useState } from "react"
import type { ItemType } from "../types"



export function useTasks() {
    const [tasks, setTasks] = useState<ItemType[]>(() => {
        try {
            const savedTasks = localStorage.getItem("tasks")
            return savedTasks ? JSON.parse(savedTasks) : []
        } catch {
            return []
        }
    })


    const addTask = (title: string, description: string): void => {
        if (!title.trim()) {
            console.log("Enter you todo title")
            return
        }

        const newTask = {
            id: crypto.randomUUID(),
            title,
            description,
            isCompleted: false,
            tag: "WORK",
            priority: "High",
            createdAt: new Date().toISOString(),

        }
        setTasks((prev) => [...prev, newTask])
    }



    const deleteTask = (id: string): void => {
        setTasks((prev) => prev.filter((task) => task.id !== id))
    }


    const toggleTask = (id: string): void => {
        setTasks((prev) => prev.map((task) =>
            task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
        ))
    }


    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    return {
        addTask,
        toggleTask,
        deleteTask,
        tasks
    }
}