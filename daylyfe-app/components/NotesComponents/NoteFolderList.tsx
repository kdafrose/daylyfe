import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import SerifText from '../SerifText'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'expo-router'
import React, {FC, useEffect} from 'react'

const sampleFolders = ["Work Meeting Notes", "Workouts Routines 2026"]

interface NoteFolderListProps{
    onPress?: (id:number, folderTitle:string) => void;
}

useEffect(() => {
    //TODO: Grab all folders in the backend
})

const NoteFolderList:FC<NoteFolderListProps> = ({onPress}) => {
    const router = useRouter();
    const goToFolder = (id:number, folderTitle:string) => {
        router.push({
                pathname:'/(NotesStack)/NotesFolder',
                params: {
                    folderId:id,
                    folderName:folderTitle
                }
        })
    }

  return (
    <View style={{flexWrap:'wrap', flexDirection:'row'}}>
        {sampleFolders.map((item, index) => (
            <TouchableOpacity 
            key={index} 
            style={{gap:1, marginRight:12}}
            onPress={() => {  
                onPress?
                onPress(index, item) : goToFolder(index, item)
            }}
            >
            <FontAwesomeIcon icon={faFolder} size={85} color='#F9D69E'/>
            <SerifText style={{fontSize:12, width:80}}>{item}</SerifText>
            </TouchableOpacity>
        ))}
    </View>
  )
}

export default NoteFolderList

const styles = StyleSheet.create({})