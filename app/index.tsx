import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <SafeAreaView className="bg-blue-500 h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full min-h-screen justify-center items-center px-4">
          <Text className="text-sky-100">Pangisha Nyumba</Text>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="white" style="dark" />
    </SafeAreaView>
  );
}
