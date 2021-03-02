import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, Modal, Keyboard } from 'react-native'
import { FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { globalStyles } from '../styles/global'
import Card from '../shared/Card'
import { MaterialIcons } from '@expo/vector-icons'
import ReviewForm from './ReviewForm'

export default function Home({ navigation }) {

    const [reviews, setReviews] = useState([
        {title: 'GTA V', rating: 5, body: 'Super amazing!', key: '1'},
        {title: 'Road Rash', rating: 4, body: 'Way ahead of its time!', key: '2'},
        {title: 'Candy Crush', rating: 2, body: 'Too slow and Boring :/', key: '3'},
    ])

    const [ visible, setVisible ] = useState(false)

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((prevReviews) => {
            return [review, ...prevReviews]
        })
        setVisible(false)
    }

    return (
        <View style = {globalStyles.container}>
            <Modal visible = {visible} animationType = "slide">
                    <View style = {styles.modalContent}>
                        <MaterialIcons
                            name = "close"
                            size = {24}
                            onPress = {() => setVisible(false)}
                            style = {{...styles.modalToggle, ...styles.modalClose}}
                        />
                        <ReviewForm addReview = {addReview}/>
                    </View>
            </Modal>

            <MaterialIcons
                name = "add"
                size = {24}
                onPress = {() => setVisible(true)}
                style = {styles.modalToggle}
            />

            <FlatList
                data = {reviews}
                 renderItem = {({item}) => (
                     <TouchableOpacity onPress = {() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style = {globalStyles.titleText}>{item.title}</Text>
                        </Card>
                     </TouchableOpacity>
                 )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        flex: 1
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    }
})