

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MovieCard from "../Componants/MovieCard";
import axios from "axios";

export default function Movies() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=en-US&page=1"
      )
      .then((res) => {
        setList(res.data.results); 
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Popular Movies</Text>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <MovieCard
            id={item.id}
            title={item.title}
            image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          />
        )}
        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3C467B",
    padding: 10,
  },
  header: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
