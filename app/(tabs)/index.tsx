import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Link } from 'expo-router'

export class Page extends Component {
  render() {
    return (
      <View>
        <Link href={'/(models)/login'}>
          Login
          </Link>
      </View>
    )
  }
}

export default Page