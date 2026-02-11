import { Stack } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

export default function NotesLayout() {
    return(
        <Stack>
            <Stack.Screen 
            name="NotesHome"
            options={{
            headerTitle:"Notes"
            }}
            />

            <Stack.Screen 
            
            />
        </Stack>
    )
}