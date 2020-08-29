import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { View, StyleSheet, Image, Button, Alert } from 'react-native';

async function askForPermissions() {
    const { status } = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.CAMERA_ROLL
    )
    if(status !== 'granted') {
        Alert.alert('Вы не разрешили доступ к камере')
        return false
    }
    return true
}

export const PhotoPicker = ({ onPick, photo }) => {
    const [image, setImage] = useState(null)

    const takePhoto = async () => {
        const hasPermissions = await askForPermissions()

        if(!hasPermissions) {
            return
        }

         const img = await ImagePicker.launchCameraAsync({
            quality: 0.7,
            allowsEditing: true,
            aspect: [16, 9]
        })

            setImage(img.uri)
            onPick(img.uri)
        
    }

    return (
        <View style={styles.wrapper}>
            <Button title='Сделать фото' onPress={takePhoto} />
            {photo && <Image style={styles.image} source={{ uri: image }} />}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 200,
        marginTop: 10
    }
})