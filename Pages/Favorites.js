
import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import MovieCard from "../Componants/MovieCard";

export default function Favorites() {
  const favorites = useSelector(state => state.favorites.movies);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Favorites</Text>
      {favorites.length === 0 ? (
        <Text style={{ color: "#fff" }}>No favorite movies yet.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <MovieCard id={item.id} title={item.title} image={item.image} />
          )}
        />
      )}
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
