import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const cart = async () => {
    try {
      const response = await fetch("https://dummyjson.com/carts");
      const data = await response.json();
      setData(data.carts);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    cart();
  }, []);

  const handleAddToCart = (productTitle) => {
    Alert.alert("Added to Cart", `${productTitle} has been added to your cart.`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>🛒 Your Shopping Cart</Text>
      {data.slice(0, 1).map((item, index) => (
        <View style={styles.card} key={index}>
          <Text style={styles.cardTitle}>Products</Text>
          {item.products.map((product, index) => (
            <View style={styles.productView} key={index}>
              <Image
                source={{ uri: product.thumbnail }}
                style={styles.cropImage}
              />
              <Text style={styles.cropName}>{product.title}</Text>
              <Text style={styles.priceText}>${product.price}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleAddToCart(product.title)}
              >
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          ))}
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
    backgroundColor: "#f9fafb",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 15,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4b5563",
    marginBottom: 10,
    textAlign: "center",
  },
  productView: {
    alignItems: "center",
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 10,
    backgroundColor: "#fefefe",
  },
  cropImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginVertical: 10,
  },
  cropName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1f2937",
    textAlign: "center",
    marginBottom: 5,
  },
  priceText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#10b981",
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});
