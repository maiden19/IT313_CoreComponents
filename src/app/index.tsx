import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import StudentCard from "../../components/StudentCard";

type Student = {
  id: string;
  name: string;
  year: string;
  photoUrl: string;
  flagged: boolean;
};

export default function StudentDirectory() {
  const [query, setQuery] = useState<string>("");

  const [students, setStudents] = useState<Student[]>([
    {
      id: "s1",
      name: "Ana Cruz",
      year: "3rd Year",
      photoUrl: "https://i.pravatar.cc/100?img=1",
      flagged: false,
    },
    {
      id: "s2",
      name: "Bea Santos",
      year: "2nd Year",
      photoUrl: "https://i.pravatar.cc/100?img=2",
      flagged: false,
    },
    {
      id: "s3",
      name: "Cid Ramos",
      year: "4th Year",
      photoUrl: "https://i.pravatar.cc/100?img=3",
      flagged: false,
    },
    {
      id: "s4",
      name: "Dex Alonzo",
      year: "1st Year",
      photoUrl: "https://i.pravatar.cc/100?img=4",
      flagged: false,
    },
    {
      id: "s5",
      name: "Eli Tan",
      year: "3rd Year",
      photoUrl: "https://i.pravatar.cc/100?img=5",
      flagged: false,
    },
  ]);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(query.toLowerCase()),
  );

  const toggleFlag = (id: string) => {
    setStudents((currentStudents) =>
      currentStudents.map((student) =>
        student.id === id ? { ...student, flagged: !student.flagged } : student,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Directory</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search student..."
        value={query}
        onChangeText={setQuery}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredStudents.map((student) => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            year={student.year}
            photoUrl={student.photoUrl}
            flagged={student.flagged}
            onToggleFlag={toggleFlag}
          />
        ))}

        {filteredStudents.length === 0 && (
          <Text style={styles.noResults}>No student found.</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#f2f2f2",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  searchInput: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#cccccc",
  },

  noResults: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 16,
  },
});
