import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import SearchResults from '../../components/SearchResults';

const employees = () => {
  const router = useRouter();

  const [employees, setEmpoyees] = useState([{}]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try{

        const response = await axios.get("http://localhost:8000/employees");

        console.log("response: " + response)

        setEmpoyees(response.data)

      } catch(err) {
        console.log("error fetching employee data", err);
      }
    }

    fetchEmployeeData()
  }, []);

  console.log(employees);

  return (
    <View style={{ flex: 1, backgroundColor: "white"}}>
      <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "white" }}>
        <Ionicons style={{ marginLeft: 10}} name="arrow-back" size={24} color="black" />
        <Pressable style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 7, gap: 10, backgroundColor: "white", height: 40, borderRadius: 4, flex: 1 }}>
          <AntDesign name="search1" size={20} color="black" />
          <TextInput 
            value={input} 
            onChangeText={(text) => setInput(text)} 
            style={{ flex: 1, }} 
            placeholder="Search" 
          />

          {
            employees.length > 0 && (
              <View>
                <Pressable onPress={() => router.push("/(home)/adddetails")}>
                  <Feather name="plus-circle" size={24} color="#0072b1" />
                </Pressable>
              </View>
            )
          }
        </Pressable>
      </View>


      {
        employees.length > 0 ? (
          <SearchResults data={employees} input={input} setInput={setInput} />
        ) : (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text>No Data</Text>
              <Text>Press on the plus button and add your Employee</Text>
              <Pressable onPress={() => router.push("/(home)/adddetails")}>
                <AntDesign style={{ marginTop: 30 }} name="pluscircle" size={24} color="#0072b1" />
              </Pressable>
            </View>
        ) 
      }
    </View>
  )
}

export default employees

const styles = StyleSheet.create({})