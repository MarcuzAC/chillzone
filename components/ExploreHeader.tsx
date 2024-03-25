import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const categories = [
    {
        name: 'Chats',
        icon: 'chatbox-outline'
    },
    {
        name: 'Trending',
        icon: 'flame-outline'
    },
    {
        name: 'Groups',
        icon: 'people-outline'
    },
    {
        name: 'Shop',
        icon: 'cart-outline'
    },
    {
        name: 'Music',
        icon: 'musical-notes-outline'
    }
];

const ExploreHeader = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.actionRow}>
                    {categories.map((category, index) => (
                        <TouchableOpacity key={index} style={styles.category}>
                            <Ionicons name={category.icon} size={24} color="#fff" />
                            <Text style={styles.categoryText}>{category.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#002D62',
        paddingTop: 10,
        paddingBottom: 5,
        height: 70
    },
    actionRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    category: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    categoryText: {
        marginTop: 5,
        fontSize: 14,
        color: '#fff'
    }
});

export default ExploreHeader;
