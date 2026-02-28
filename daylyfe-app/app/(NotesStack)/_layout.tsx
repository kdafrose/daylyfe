import { router, Stack } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { useRouter, usePathname } from "expo-router";

import ScreenLayout from "@/components/LayoutComponents/ScreenLayout";
import GeneralAddMenu from "@/components/LayoutComponents/GeneralAddMenu";
import FolderAddMenu from "@/components/LayoutComponents/FolderAddMenu";

export default function NotesLayout() {

    const routerPath = usePathname();
    
    const renderMenu = () => {
        switch(routerPath){
            case '/AddNewFolder':
            case '/EditNotes':
            case '/NewNote':
                return null
            case '/NotesFolder':
                return <FolderAddMenu />
            default:
                return <GeneralAddMenu />
        }
    }

    return(
        <ScreenLayout>
            <Stack initialRouteName="NotesHome">
            {/**Screens*/}
                <Stack.Screen 
                name="NotesHome"
                options={{
                headerTitle:"Notes",
                headerShown:false
                }}
                />
                <Stack.Screen 
                name="EditNotes"
                options={{
                    headerShown:false
                }}
                />
                <Stack.Screen 
                name="NewNote"
                options={{
                    headerShown:false
                }}
                />
                <Stack.Screen 
                name="AddNewFolder"
                options={{
                    headerShown:false
                }}
                />
                <Stack.Screen 
                name="NotesFolder"
                options={{
                    headerShown:false
                }}
                />
            {/**End of Screens */}
            </Stack>
            {renderMenu()}
        </ScreenLayout>
    )
}