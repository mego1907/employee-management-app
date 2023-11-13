import { StyleSheet, Text, View, ScrollView, TextInput, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

const AddDetails = () => {
  const [name, setName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [dob, setDob] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddress] = useState("");
  const [designation, setDesignation] = useState("");

  const handleRegister = async () => {

    const employeeData = {
      employeeName: name,
      employeeId: employeeId,
      designation: designation,
      phoneNumber: mobileNo,
      dateOfBirth: dob,
      joiningDate: joiningDate,
      activeEmployee: true,
      salary: salary,
      address: address,
    };


    await axios.post("http://localhost:8000/addEmployee", employeeData)
      .then((res) => {
        Alert.alert("Registration Successfully", "You have been registered successfully");

        setName("");
        setEmployeeId("");
        setDob("");
        setMobileNo("");
        setJoiningDate("");
        setSalary("");
        setAddress("");
        setDesignation("")

      })
      .catch(err => {
        Alert.alert("Registration Failed", err.toString());

        console.log(err);
      }) 

  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ padding: 15, gap: 15 }}>

        <View>
          <Text style={{ fontSize: 17, fontWeight: "bold", textAlign: "center", marginBottom: 10, backgroundColor: "#eee", padding: 10 }}>Add a new Employee</Text>
          <TextInput
            placeholder="Egypt"
            placeholderTextColor="black"
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5
            }}
          />
        </View>

        <View>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Full Name (First and Last Name)</Text>
          <TextInput 
            placeholder="Enter your name" 
            placeholderTextColor="black" 
            value={name}
            onChangeText={(text) => setName(text)} 
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5
            }}  
          />
        </View>

        <View>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Employee Id</Text>
          <TextInput
            placeholder="Employee Id"
            placeholderTextColor="black"
            value={employeeId}
            onChangeText={(text) => setEmployeeId(text)}
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5
            }}
          />
        </View>

        <View>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Designation</Text>
          <TextInput
            placeholder="Designation"
            placeholderTextColor="black"
            value={designation}
            onChangeText={(text) => setDesignation(text)}
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5
            }}
          />
        </View>

        <View>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Mobile Number</Text>
          <TextInput
            placeholder="Mobile Number"
            placeholderTextColor="black"
            value={mobileNo}
            onChangeText={(text) => setMobileNo(text)}
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5
            }}
          />
        </View>

        <View>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Date of Birth</Text>
          <TextInput
            placeholder="Enter Date of Birth"
            placeholderTextColor="black"
            value={dob}
            onChangeText={(text) => setDob(text)}
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5
            }}
          />
        </View>

        <View>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Joining Date</Text>
          <TextInput
            placeholder="Joining Date"
            placeholderTextColor="black"
            value={joiningDate}
            onChangeText={(text) => setJoiningDate(text)}
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5
            }}
          />
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
          <Text>Active Employee</Text>
          <Text>True</Text>
        </View>

        <View>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Salary</Text>
          <TextInput
            placeholder="Enter Salary"
            placeholderTextColor="black"
            value={salary}
            onChangeText={(text) => setSalary(text)}
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5
            }}
          />
        </View>

        <View>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Address</Text>
          <TextInput
            placeholder="Enter Address"
            placeholderTextColor="black"
            value={address}
            onChangeText={(text) => setAddress(text)}
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5
            }}
          />
        </View>

        <Pressable
          onPress={handleRegister}
          style={{ 
            backgroundColor: "#ABCABA", 
            padding: 15, 
            marginTop: 20, 
            justifyContent: "center", 
            alignItems: "center", 
            borderRadius: 5
          }}
        >
          <Text style={{ fontWeight: "bold", color: "#222"}}>Add Employee</Text>
        </Pressable>
      </View>


    </ScrollView>
  )
}

export default AddDetails

const styles = StyleSheet.create({})