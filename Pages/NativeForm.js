import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, TouchableOpacity, View, Text } from "react-native";

function NativeLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const [errors, setErrors] = useState({
    usernameErr: "",
    passwordErr: "",
    emailErr: "",
    phoneErr: "",
  });

  const validate = () => {
    let valid = true;
    let tempErrors = { ...errors };

    // Username
    if (username.length < 3) {
      tempErrors.usernameErr = "Username must be more than 2 characters.";
      valid = false;
    } else {
      tempErrors.usernameErr = "";
    }

    // Password
    if (password.length < 9) {
      tempErrors.passwordErr = "Password must be more than 8 characters.";
      valid = false;
    } else {
      tempErrors.passwordErr = "";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.length === 0) {
      tempErrors.emailErr = "Email is required.";
      valid = false;
    } else if (!emailRegex.test(email)) {
      tempErrors.emailErr = "Invalid email";
      valid = false;
    } else {
      tempErrors.emailErr = "";
    }

    // Phone
    if (phone.length === 0) {
      tempErrors.phoneErr = "Phone number is required.";
      valid = false;
    } else if (!/^\d+$/.test(phone)) {
      tempErrors.phoneErr = "Phone must be numeric.";
      valid = false;
    } else {
      tempErrors.phoneErr = "";
    }

    setErrors(tempErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validate()) {
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.subTitle]}>Register Form</Text>

      {/* Username */}
      <TextInput
        value={username}
        style={styles.input}
        placeholder="Enter your username"
        onChangeText={setUsername}
      />
      <Text style={styles.errorText}>{errors.usernameErr}</Text>

      {/* Password */}
      <View>
        <TextInput
          value={password}
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.toggleText}>
            {showPassword ? "Hide" : "Show"} Password
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.errorText}>{errors.passwordErr}</Text>

      {/* Email */}
      <TextInput
        value={email}
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <Text style={styles.errorText}>{errors.emailErr}</Text>

      {/* Phone */}
      <TextInput
        value={phone}
        style={styles.input}
        placeholder="Enter your phone number"
        keyboardType="numeric"
        onChangeText={setPhone}
      />
      <Text style={styles.errorText}>{errors.phoneErr}</Text>

      {/* Submit */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>User Info</Text>
            <Text>Username: {username}</Text>
            <Text>Password: {password}</Text>
            <Text>Email: {email}</Text>
            <Text>Phone: {phone}</Text>

            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default NativeLoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#333",
  },
  subTitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    color: "#666",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    fontSize: 13,
  },
  toggleText: {
    color: "#3C467B",
    marginBottom: 10,
    textAlign: "right",
    marginRight: 5,
  },
  button: {
    backgroundColor: "#3C467B",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
});

