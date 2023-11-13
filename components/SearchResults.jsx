import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const SearchResults = ({ data, input, setInput }) => {
  return (
    <View style={{ padding: 10 }}>
      <FlatList data={data} renderItem={({ item}) => {
        if(item?.employeeName?.toLowerCase().includes(input.toLowerCase())) {
          return(
            <View>
              <View>
                <Text>{item.employeeName}</Text>
              </View>
            </View>
          )
        } 
      }} />
    </View>
  )
}

export default SearchResults

const styles = StyleSheet.create({})