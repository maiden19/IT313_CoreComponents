import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type StudentCardProps = {
  id: string;
  name: string;
  year: string;
  photoUrl: string;
  flagged: boolean;
  onToggleFlag: (id: string) => void;
};

export default function StudentCard({
  id,
  name,
  year,
  photoUrl,
  flagged,
  onToggleFlag,
}: StudentCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.studentInfo}>
        <Image source={{ uri: photoUrl }} style={styles.photo} />

        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.year}>{year}</Text>
        </View>
      </View>

      <Pressable
        onPress={() => onToggleFlag(id)}
        style={({ pressed }) => [
          styles.button,
          flagged && styles.flaggedButton,
          pressed && styles.pressedButton,
        ]}
      >
        <Text style={styles.buttonText}>
          {flagged ? "Flagged ✓" : "Flag for Advising"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 15,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 3,
  },

  studentInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  photo: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },

  textContainer: {
    flex: 1,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },

  year: {
    fontSize: 15,
    marginTop: 4,
  },

  button: {
    marginTop: 12,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#ff9800",
    alignItems: "center",
  },

  flaggedButton: {
    backgroundColor: "#e53935",
  },

  pressedButton: {
    opacity: 0.7,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
