import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Button,
} from "react-native";
import cropData from "./Data";
export default function App() {
  return (
    <ScrollView style={styles.container}>
      {cropData.map((crop) => (
        <View key={crop} style={styles.card}>
          <Image source={{ uri: crop.image }} style={styles.cropImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cropName}>{crop.name}</Text>
            <Text>Price: {crop.price}</Text>
            <Text>Farmer: {crop.farmerName}</Text>
            <Text>Location: {crop.location}</Text>
            <Text>Rating: {crop.rating} ★</Text>
            <Text>Quantity: {crop.quantity}</Text>
          </View>
          <Button title="Buy" onPress={() => alert("Hola!")} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 20,
    backgroundColor: "#f0f0f0",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  cropImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  cardContent: {
    marginTop: 10,
  },
  cropName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
