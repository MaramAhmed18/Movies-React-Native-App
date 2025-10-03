
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Modal } from "react-native";
import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useForm, Controller } from "react-hook-form";

export default function TodoList() {
    const { control, handleSubmit, reset } = useForm();
    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(null);


    // Load Todos from Storage
    useEffect(() => {
        loadTodos();
    }, []);

    const saveTodos = async (newTodos) => {
        try {
            await AsyncStorage.setItem("todos", JSON.stringify(newTodos));
        } catch (e) {
            console.log(e);
        }
    };

    const loadTodos = async () => {
        try {
            const storedTodos = await AsyncStorage.getItem("todos");
            if (storedTodos) setTodos(JSON.parse(storedTodos));
        } catch (e) {
            console.log(e);
        }
    };

    const onSubmit = (data) => {
        if (!data.todo.trim()) return;

        if (editId !== null) {
            // Edit Mode
            const updatedTodos = todos.map((item) =>
                item.id === editId ? { ...item, text: data.todo } : item
            );
            setTodos(updatedTodos);
            saveTodos(updatedTodos);
            setEditId(null);
        } else {
            // Add Mode
            const newTodo = { id: Date.now(), text: data.todo };
            const updatedTodos = [...todos, newTodo];
            setTodos(updatedTodos);
            saveTodos(updatedTodos);
        }
        reset();
    };

    const deleteTodo = (id) => {
        const filtered = todos.filter((item) => item.id !== id);
        setTodos(filtered);
        saveTodos(filtered);
    };

    const editTodo = (item) => {
        reset({ todo: item.text });
        setEditId(item.id);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ToDo List</Text>

            {/* Input */}
            <Controller
                control={control}
                name="todo"
                rules={{ required: "Please enter a todo" }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <>
                        <TextInput
                            style={[styles.input, error && styles.inputError]}
                            placeholder="Enter todo"
                            value={value}
                            onChangeText={onChange}
                        />
                        {error && <Text style={styles.errorText}>{error.message}</Text>}
                    </>
                )}
            />


            <Button
                mode="contained"
                buttonColor="#3C467B"
                textColor="#fff"
                onPress={handleSubmit(onSubmit)}
            >
                {editId !== null ? "Update Todo" : "Add Todo"}
            </Button>
            {/* Todo List */}
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.todoItem}>
                        <Text style={styles.todoText}>{item.text}</Text>
                        <View style={styles.actions}>
                            <TouchableOpacity onPress={() => editTodo(item)}>
                                <Text style={styles.edit}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                                <Text style={styles.delete}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />


        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
    title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
    input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, marginBottom: 10, backgroundColor: "#fff" },
    inputError: { borderColor: "red" },
    errorText: { color: "red", marginBottom: 10 },
    todoItem: { flexDirection: "row", justifyContent: "space-between", padding: 10, backgroundColor: "#fff", marginBottom: 5, borderRadius: 8, elevation: 2 },
    todoText: { fontSize: 16 },
    actions: { flexDirection: "row", gap: 10 },
    edit: { color: "blue", marginRight: 10 },
    delete: { color: "red" },
    submit: { backgroundColor: "#3C467B" }

});
