import { useNavigation } from "@react-navigation/native";
import { Avatar, Button, Card, Text, IconButton } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../Pages/MyStore";


function MovieCard(props) {
  const navigator = useNavigation();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.movies);

  const isFav = favorites.some((m) => m.id === props.id);

  const toggleFavorite = () => {
    if (isFav) {
      dispatch(removeFavorite(props.id));
    } else {
      dispatch(
        
        addFavorite({
          id: props.id,
          title: props.title,
          image: props.image,
          description: props.description,
        })
      );
    }
  };

  return (
    <Card style={{ margin: 10 }}>
      <Card.Title
        title={props.title}
        left={(iconProps) => <Avatar.Icon {...iconProps} icon="movie" />}
      />
      <Card.Cover source={{ uri: props.image }} />
      <Card.Content>
        <Text variant="bodyMedium">{props.description}</Text>
      </Card.Content>
      <Card.Actions>
        {props.id && (
          <>
            <IconButton
              icon={isFav ? "heart" : "heart"}
              iconColor={isFav ? "red" : "gray"}
              size={24}
              onPress={toggleFavorite}
              
            />
            <Button onPress={() => navigator.navigate("MovieDetails", { id: props.id })}>
              Movie Details
            </Button>

          </>
        )}
      </Card.Actions>
    </Card>
  );
}

export default MovieCard;



